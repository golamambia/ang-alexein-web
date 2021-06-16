import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { image_path } from '../../../environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
   image_path=image_path;
  categoryForm: FormGroup;
  loading: any;
  submitted = false;
  image: any;
  imageLoaded = false;
  catData: any;
  url = environment.API_URL;
category_picture:any;
res:any;
  sub:any;
  catid:any;
  constructor(public route: ActivatedRoute,private alertController: AlertController, 
    private http: HttpClient, private formBuilder: FormBuilder,
     private loadingController: LoadingController
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
    
    "id": this.catid,
       
  }
 this.http.post(this.url + 'get-setting-list',data)
  .subscribe(res => {
    
    this.res = res;
    //console.log(this.res);
     if(this.res.status==true){

      this.category_picture=this.res.response_data[0].logo;
       this.categoryForm.patchValue({
  
  phone_number:this.res.response_data[0].phone_number, 
      email_address: this.res.response_data[0].email_address, 
      address: this.res.response_data[0].address, 
      facebook: this.res.response_data[0].facebook, 
      twitter: this.res.response_data[0].twitter, 
      linkedend:this.res.response_data[0].linkedend, 
      instagram:this.res.response_data[0].instagram, 
      //category_picture: this.res.response_data[0].logo, 

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
      phone_number: ['', [Validators.required]],
      email_address: ['', [Validators.required]],
      address: ['', [Validators.required]],
      facebook: [''],
      twitter: [''],
      linkedend: [''],
      instagram: [''],
      category_picture: [''],
      
    });

  }

  submit() {
    this.submitted = true;
    if (this.categoryForm.invalid) {
      return;
    } else {
      this.loadingShow();
      let formData = new FormData;
    formData.append('phone_number', this.categoryForm.value.phone_number);
      formData.append('logo', this.image);
      formData.append('email_address', this.categoryForm.value.email_address);
      formData.append('address', this.categoryForm.value.address);
      formData.append('facebook', this.categoryForm.value.facebook);
      formData.append('twitter', this.categoryForm.value.twitter);
      formData.append('linkedend', this.categoryForm.value.linkedend);
      formData.append('instagram', this.categoryForm.value.instagram);
      //formData.append('category_status', '1');
      this.http.post(this.url + 'update-setting', formData).subscribe((res: any) => {
        this.loadingHide();
        if (res.status) {
          
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
