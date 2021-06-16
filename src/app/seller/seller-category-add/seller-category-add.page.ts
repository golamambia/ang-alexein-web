import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-seller-category-add',
  templateUrl: './seller-category-add.page.html',
  styleUrls: ['./seller-category-add.page.scss'],
})
export class SellerCategoryAddPage implements OnInit {
  categoryForm: FormGroup;
  loading: any;
  submitted = false;
  image: any;
  imageLoaded = false;
  catData: any;
  url = environment.API_URL;

  constructor(private alertController: AlertController, private http: HttpClient, private formBuilder: FormBuilder, private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      category_name: ['', [Validators.required]],
      category_picture: ['', [Validators.required]],
      category_description: ['', [Validators.required]]
    });
  }

  submit() {
    this.submitted = true;
    if (this.categoryForm.invalid) {
      return;
    } else {
      this.loadingShow();
      let formData = new FormData;
      formData.append('category_name', this.categoryForm.value.category_name);
      formData.append('category_picture', this.image);
      formData.append('category_description', this.categoryForm.value.category_description);
      formData.append('category_status', '1');

      this.http.post(this.url + 'category-add', formData).subscribe((res: any) => {
        this.loadingHide();
        if (res.status) {
          this.categoryForm.reset();
          this.submitted = false;
          this.presentAlert('Success!', '', res.message ? res.message : 'Seccessfully added.');
        } else {
          this.presentAlert('Error!', '', 'Server error, please try again later');
        }
      }, err => {
        this.loadingHide();
        this.presentAlert('Error!', '', 'Server error, please try again later');
      });
    }
  }

  async loadingShow() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      // duration: 2000
    });
    await this.loading.present();
  }

  async loadingHide() {
    await this.loading.dismiss();
  }

  get f() { return this.categoryForm.controls; }

  async presentAlert(header, subHeader, message) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  importFile(event) {
    if (event.target.files && event.target.files.length > 0) {
      let files = event.target.files || event.dataTransfer.files;
      if (!files.length)
        return;
      var fileName = files[0].name.toUpperCase();
      if (fileName.endsWith(".JPG") || fileName.endsWith(".JPEG") || fileName.endsWith(".PNG")) {
        this.image = files[0];
        this.imageLoaded = true;
      } else {
        this.image = null;
        this.presentAlert("Error!", "", "Please select a valid image file jpeg/jpg/png");
      }
    }

  }
}
