import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { image_path } from '../../../environments/environment';
@Component({
  selector: 'app-admin-product-update',
  templateUrl: './admin-product-update.page.html',
  styleUrls: ['./admin-product-update.page.scss'],
})
export class AdminProductUpdatePage implements OnInit {
  image_path=image_path;
  url = environment.API_URL;
  productForm: FormGroup;
  loading: any;
  submitted = false;
  image: any;
  imageLoaded = false;
  userId: any;
  photos: any;
  sub:any;
  id:any;
product_picture:any;
more_picture:any;
sellList:any;
  constructor(private alertController: AlertController, private formBuilder: FormBuilder, 
    private http: HttpClient, private loadingController: LoadingController, 
    private storage: Storage, private router: Router,public route: ActivatedRoute) { }

  async ngOnInit() {
    
    this.productForm = this.formBuilder.group({
      seller_id: ['', [Validators.required]],
      product_name: ['', [Validators.required]],
      product_picture: [''],
      product_pictures: [''],
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
     this.sub =this.route.params.subscribe(params => {
  if (params) {
    //let queryParams = params;
    this.id=params['id'];
    //console.log(this.catid);
    if(params['id']){
       
       this.getMultiImage();
    }
   
  }
  let data={
    
    "product_id": this.id,
       
  }
 this.http.post(this.url + 'product-single',data)
  .subscribe((res:any) => {
    //console.log(res);
    
   // console.log(res);
     if(res.status){
       this.product_picture=res.response_data.product_picture;
       this.productForm.patchValue({
       seller_id:res.response_data.user_id,
      product_name:res.response_data.product_name,
      //product_picture: res.response_data.product_picture,
      product_important_highlights:res.response_data.product_important_highlights,
      product_location:res.response_data.product_location,
      product_bid_starting_price: res.response_data.product_bid_starting_price,
      //product_bid_start_date_and_time:res.response_data.product_bid_start_date_and_time,
      //product_bid_end_date_and_time:res.response_data.product_bid_end_date_and_time,
      product_bid_start_date_and_time: res.response_data.product_bid_start_date_and_time.replace(/ /g,"T"),
      product_bid_end_date_and_time: res.response_data.product_bid_end_date_and_time.replace(/ /g,"T"),
     
      product_short_description:res.response_data.product_short_description,
      product_long_description:res.response_data.product_long_description,
      

});
    
    
    }else{
    alert("Server error");
    //loading.dismiss();
    }
  }, (err) => {
    console.log(err);
    //loading.dismiss();
  });
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
 
getMultiImage(){
  if(this.id){
     let formData2 = new FormData;
    formData2.append('product_id', this.id);
      this.http.post(this.url + 'product-multiple-image-list', formData2).subscribe((res2: any) => {
       // console.log(res2);
        this.more_picture=res2.response_data_ine;
      }, err=>{
      this.loadingHide();
    });
    }
}
  
 

  get f() { return this.productForm.controls; }

  submit() {
  
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
      formData.append('product_long_description', this.productForm.value.product_long_description);
      formData.append('product_important_highlights', this.productForm.value.product_important_highlights);
      formData.append('product_location', this.productForm.value.product_location);
      formData.append('product_bid_starting_price', this.productForm.value.product_bid_starting_price);
      formData.append('product_bid_start_date_and_time', (this.productForm.value.product_bid_start_date_and_time)
        .split("T")[0] + ' ' + (this.productForm.value.product_bid_start_date_and_time).split("T")[1]);
      formData.append('product_bid_end_date_and_time', (this.productForm.value.product_bid_end_date_and_time).split("T")[0] + ' ' + (this.productForm.value.product_bid_end_date_and_time).split("T")[1]);
      formData.append('is_approved', '0');
      formData.append('status','0');
      formData.append('product_id', this.id);
      this.http.post(this.url + 'product-update', formData).subscribe((res: any) => {
        this.loadingHide();
        if (res.status) {
          if (this.photos) {
            let formData2 = new FormData;
            for (let i = 0; i < this.photos.length; i++) {
              formData2.append('photos[]', this.photos[i])
            }
            formData2.append('product_id', res.response_data.id);
            this.http.post(this.url + 'product-multiple-image', formData2).subscribe((response: any) => {
              if (response.status) {
                //this.productForm.reset();
                this.getMultiImage();
                this.submitted = false;
                //this.presentAlert('Success!', '', response.message);
              } else {
                this.presentAlert('Error!', '', 'Server error, please try again later');
              }
            }, err => {
              this.presentAlert('Error!', '', 'Server error, please try again later');
            });
          } 
          this.ngOnInit();
           this.presentAlert('Success!', '', res.message);
        } else {
          this.presentAlert('Error!', '', 'Server error, please try again later');
        }
      }, err => {
        this.loadingHide();
        this.presentAlert('Error!', '', 'Server error, please try again later');
      });
    }
  }
   async deleteMultiImage(p){
    //this.loadingShow();
    let formData = new FormData;
    formData.append('product_id', p.id);
   
 const successalrt = await this.alertController.create({
     message: 'Data successfully delete',
      buttons: ['OK']
    });
  const fail = await this.alertController.create({
     message: 'Something went wrong',
      buttons: ['OK']
    });
      const alert = await this.alertController.create({
     
      message: 'Are you sure to delete',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            //console.log('Confirm Okay');
            if( p.id){
              this.loadingShow();
              this.http.post(this.url + 'product-multiple-image-remove', formData)
  .subscribe((res: any) => {
    // this.res = res.json();
    //console.log(res);
     if(res.status == false){
       fail.present();
   this.loadingHide();
    
    }else if(res.status == true){
    successalrt.present();
    //this.constructor();
    //this.navCtrl.navigateForward('address-list');
   this.loadingHide();
      this.getMultiImage();
    }else{
    //alert("Server error");
   this.loadingHide();
    }
  }, (err) => {
    console.log(err);
    this.loadingHide();
  });
    }
          }
        }
      ]
    });

    await alert.present();

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
