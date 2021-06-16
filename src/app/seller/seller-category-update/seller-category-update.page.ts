import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { image_path } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-category-update',
  templateUrl: './seller-category-update.page.html',
  styleUrls: ['./seller-category-update.page.scss'],
})
export class SellerCategoryUpdatePage implements OnInit {
  categoryForm: FormGroup;
  loading: any;
  submitted = false;
  image: any;
  imageLoaded = false;
  catData: any;
  url = environment.API_URL;
  image_path=image_path;
  sub:any;
  catid:any;
  category_picture:any;

  constructor(private alertController: AlertController, private http: HttpClient, 
    private formBuilder: FormBuilder, private loadingController: LoadingController,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub =this.route.params.subscribe(params => {
  if (params) {
    //let queryParams = params;
    this.catid=params['id'];
    //console.log(this.catid);
   
  }
});
    let data={
    
    "category_id": this.catid,
       
  }
 this.http.post(this.url + 'category-single',data)
  .subscribe((res:any) => {
    
   
    //console.log(this.res);
     if(res.status==true){
       this.category_picture=res.response_data.category_picture;
       this.categoryForm.patchValue({
  category_name: res.response_data.category_name, 
  category_description: res.response_data.category_description, 

});
    
    
    }else{
    alert("Server error");
    //loading.dismiss();
    }
  }, (err) => {
    console.log(err);
    //loading.dismiss();
  });
    this.categoryForm = this.formBuilder.group({
      category_name: ['', [Validators.required]],
      category_picture: [''],
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
      formData.append('category_id', this.catid);
      this.http.post(this.url + 'category-update', formData).subscribe((res: any) => {
        this.loadingHide();
        if (res.status) {
          //this.categoryForm.reset();
          this.submitted = false;
          this.presentAlert('Success!', '', res.message ? res.message : 'Seccessfully updated.');
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
