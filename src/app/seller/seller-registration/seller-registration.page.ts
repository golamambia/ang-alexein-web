import { HttpClient } from '@angular/common/http';
import { MustMatch } from '../../_helpers/must-match.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';
declare let $: any;

@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.page.html',
  styleUrls: ['./seller-registration.page.scss'],
})
export class SellerRegistrationPage implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  url = environment.API_URL;
  loading: any;

  constructor(private storage: Storage,private loadingController: LoadingController,
   private router: Router, private http: HttpClient, private formBuilder: FormBuilder, 
   private alertController: AlertController) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      email_confirmation: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', Validators.required],
      billing_address: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      dob: ['', Validators.required],
      phone_no: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    }, {
      validator: [MustMatch('password', 'password_confirmation'),
      MustMatch('email', 'email_confirmation')]
    });
  }
  ionViewDidEnter(){
 this.storage.get('auctionSeller').then(response => {
      //console.log(response);
      if (response!=null) {
        //console.log(response.response_data);
        if (response.response_data.role_text == "Seller") {
           this.router.navigate(['/seller/dashboard']);
        }
      } else {
        this.router.navigate(['/seller-registration']);
      }
    }, err => {

    });
}
  logScrolling(event) {
    if (event.detail.scrollTop > 100) {
      $('.header_bottom').addClass("fix");
    } else {
      $('.header_bottom').removeClass("fix");
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.loadingShow();
      let formData = new FormData;
      formData.append('name', this.registerForm.value.name);
      formData.append('email', this.registerForm.value.email);
      formData.append('email_confirmation', this.registerForm.value.email_confirmation);
      formData.append('password', this.registerForm.value.password);
      formData.append('password_confirmation', this.registerForm.value.password_confirmation);
      formData.append('billing_address', this.registerForm.value.billing_address);
      formData.append('country', this.registerForm.value.country);
      formData.append('state', this.registerForm.value.state);
      formData.append('city', this.registerForm.value.city);
      formData.append('zip', this.registerForm.value.zip);
      formData.append('dob', this.registerForm.value.dob.year + '-' + this.registerForm.value.dob.month + '-' + this.registerForm.value.dob.day);
      formData.append('phone_no', this.registerForm.value.phone_no);

      this.http.post(this.url + 'user-register-seller', formData).subscribe((res: any) => {
        this.loadingHide();
        if (res && res.status) {
          this.presentAlert('Success', '', 'Thank you, have successfully registered. Please login...');
          this.router.navigate(['/seller-login']);
        } else {
          this.presentAlert('Validation Error!', '', 'Please try again later');
        }
      }, err => {
        this.loadingHide();
        this.presentAlert('Error!', '', 'Server error, please try again later');
      })
    }
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

  get f() { return this.registerForm.controls; }
  
  async loadingShow() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      // duration: 2000
    });
    await this.loading.present();
  }

  async loadingHide() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }

}
