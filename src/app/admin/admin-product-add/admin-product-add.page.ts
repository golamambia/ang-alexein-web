import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
declare const window: any;
@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.page.html',
  styleUrls: ['./admin-product-add.page.scss'],
})
export class AdminProductAddPage implements OnInit {
  url = environment.API_URL;
  productForm: FormGroup;
  loading: any;
  submitted = false;
  image: any;
  imageLoaded = false;
  userId: any;
  photos: any;
 sellList: any;
  constructor(private alertController: AlertController, private formBuilder: FormBuilder, private http: HttpClient, private loadingController: LoadingController, private storage: Storage, private router: Router) { }

  async ngOnInit() {
    if(window.CKEDITOR) {
           window.CKEDITOR.replace('editor');
       }
    let today = new Date('05 October 2011 14:48 UTC');

console.log(today.toISOString());
    this.productForm = this.formBuilder.group({
      seller_id: ['', [Validators.required]],
      product_name: ['', [Validators.required]],
      product_picture: ['', [Validators.required]],
      product_pictures: ['', [Validators.required]],
      product_short_description: ['', [Validators.required]],
      product_long_description: ['', [Validators.required]],
      product_important_highlights: ['', [Validators.required]],
      product_location: ['', [Validators.required]],
      product_bid_starting_price: ['', [Validators.required]],
      product_bid_start_date_and_time: ['', [Validators.required]],
      product_bid_end_date_and_time: ['', [Validators.required]],
    });
    await this.storage.create().then(res => {
      
    });
 this.sellerList();
  }
  sellerList() {
    let formData = new FormData;
    formData.append('', '');
    this.http.post(this.url + 'seller-list', formData).subscribe((res: any) => {
      if (res && res.status) {
        //console.log(res.response_data);
        this.sellList = res.response_data;
      } else {
        this.sellList = null;
      }
    })
  }
 

  get f() { return this.productForm.controls; }

  submit() {
    if (this.userId === null) {
      this.router.navigate(['/login']);
    }
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    } else {
      this.loadingShow();
      let formData = new FormData;
      formData.append('seller_id', this.productForm.value.seller_id);
      formData.append('product_name', this.productForm.value.product_name);
      formData.append('product_picture', this.image);
      formData.append('product_short_description', this.productForm.value.product_short_description);
      formData.append('product_long_description', window.CKEDITOR.instances['editor'].getData());
      formData.append('product_important_highlights', this.productForm.value.product_important_highlights);
      formData.append('product_location', this.productForm.value.product_location);
      formData.append('product_bid_starting_price', this.productForm.value.product_bid_starting_price);
      formData.append('product_bid_start_date_and_time', (this.productForm.value.product_bid_start_date_and_time).split("T")[0] + ' ' + (this.productForm.value.product_bid_start_date_and_time).split("T")[1]);
      formData.append('product_bid_end_date_and_time', (this.productForm.value.product_bid_end_date_and_time).split("T")[0] + ' ' + (this.productForm.value.product_bid_end_date_and_time).split("T")[1]);
      formData.append('is_approved', '0');
      formData.append('status','0');
      this.http.post(this.url + 'product-add', formData).subscribe((res: any) => {
        this.loadingHide();
        if (res.status) {
          if (res.response_data.id) {
            let formData2 = new FormData;
            for (let i = 0; i < this.photos.length; i++) {
              formData2.append('photos[]', this.photos[i])
            }
            formData2.append('product_id', res.response_data.id);
            this.http.post(this.url + 'product-multiple-image', formData2).subscribe((response: any) => {
              if (response.status) {
                this.productForm.reset();
                this.submitted = false;
                this.presentAlert('Success!', '', response.message);
              } else {
                this.presentAlert('Error!', '', 'Server error, please try again later');
              }
            }, err => {
              this.presentAlert('Error!', '', 'Server error, please try again later');
            });
          } else {
            this.presentAlert('Error!', '', 'Server error, please try again later');
          }
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

  importFiles(event) {
    if (event.target.files && event.target.files.length > 0) {
      let files = event.target.files || event.dataTransfer.files;
      if (!files.length)
        return;
      this.photos = files;
    }
  }

}
