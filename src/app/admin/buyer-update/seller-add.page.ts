import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-add',
  templateUrl: './seller-add.page.html',
  styleUrls: ['./seller-add.page.scss'],
})
export class SellerAddPage implements OnInit {
  sellerForm: FormGroup;
  loading: any;
  submitted = false;
  image: any;
  imageLoaded = false;
  catData: any;
  url = environment.API_URL;
res:any;
 sub:any;
  catid:any;
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
    
    "user_id": this.catid,
       
  }
 this.http.post(this.url + 'user-details',data)
  .subscribe((res:any) => {
    
    
    console.log(res);
     if(res.status==true){
       
       this.sellerForm.patchValue({
       name:res.response_data.name,
      dob:res.response_data.dob,
      email: res.response_data.email,
      email_confirmation:res.response_data.email,
      phone_no:res.response_data.phone_no,
      password: res.response_data.password,
     password_confirmation:res.response_data.password_confirmation,
      billing_address:res.response_data.billing_address,
      country:res.response_data.country,
      state:res.response_data.state,
      city:res.response_data.city,
      zip:res.response_data.zip,


});
    
    
    }else{
    alert("Server error");
    //loading.dismiss();
    }
  }, (err) => {
    console.log(err);
    //loading.dismiss();
  });
    this.sellerForm = this.formBuilder.group({
      //seller_id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required]],
      email_confirmation: ['', [Validators.required]],
      phone_no: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required]],
      billing_address: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zip: ['', [Validators.required]]
    });
  }

  submit() {
    this.submitted = true;
    if (this.sellerForm.invalid) {
      return;
    } else if (this.sellerForm.value.email!=this.sellerForm.value.email_confirmation) {

      this.presentAlert("Error!","", "Email & confirm email must be same");
      return;
    }else if (this.sellerForm.value.password!=this.sellerForm.value.password_confirmation) {

      this.presentAlert("Error!","", "Password & confirm password must be same");
      return;
    }else{
      this.loadingShow();
      let formData = new FormData;
    formData.append('name', this.sellerForm.value.name);
      
      formData.append('dob', this.sellerForm.value.dob);
      formData.append('email', this.sellerForm.value.email);
      formData.append('email_confirmation', this.sellerForm.value.email_confirmation);
      formData.append('phone_no', this.sellerForm.value.phone_no);
      formData.append('password', this.sellerForm.value.password);
      formData.append('password_confirmation', this.sellerForm.value.password_confirmation);
      formData.append('billing_address', this.sellerForm.value.billing_address);
       formData.append('country', this.sellerForm.value.country);
      formData.append('state', this.sellerForm.value.state);
      formData.append('city', this.sellerForm.value.city);
      formData.append('zip', this.sellerForm.value.zip);
       formData.append('user_id', this.catid);
      this.http.post(this.url + 'user-update', formData).subscribe((res: any) => {
        this.loadingHide();
        if (res.status) {
          //this.faqForm.reset();
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

  get f() { return this.sellerForm.controls; }

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
     onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}
}
