import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
declare let $: any;

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  url = environment.API_URL;
  loading: any;
  buyerId:any;
  buyerData:any;

  constructor(private storage: Storage, private router: Router, public loadingController: LoadingController,
   private http: HttpClient, private formBuilder: FormBuilder, private alertController: AlertController) { }

  async ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    await  this.storage.create();

     }

 ionViewDidEnter(){
 this.storage.get('auctionUser').then(response => {
      //console.log(response);
      if (response!=null) {
        //console.log(response.response_data);
        if (response.response_data.role_text == "Buyer") {
           this.router.navigate(['/user/dashboard']);
        }
      } else {
        this.router.navigate(['/login']);
      }
    }, err => {
 this.router.navigate(['/login']);
    });
}

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      this.loadingShow();
      let formData = new FormData;
      formData.append('email', this.loginForm.value.email);
      formData.append('password', this.loginForm.value.password);
      this.http.post(this.url + 'user-login', formData).subscribe((res: any) => {
        this.loadingHide();
        console.log(res);
        if (res && res.status) {
           if(res.response_data.role_text == 'Buyer'){
          this.storage.set('auctionUser', res).then(res=>{
          
              this.router.navigate(['/user/dashboard']);
            
          },err=>{
            this.presentAlert('Error!', '', 'Please try again later');
          });
        }else{
          this.loadingHide()
          this.presentAlert('Error!', '', 'Please check username & password');
        }
        } else {
          this.presentAlert('Error!', '', res.message);
        }
      }, err => {
        this.loadingHide();
        this.presentAlert('Error!', '', 'Server error, please try again later');
      });
    }

  }

  logScrolling(event) {
    if (event.detail.scrollTop > 100) {
      $('.header_bottom').addClass("fix");
    } else {
      $('.header_bottom').removeClass("fix");
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
  
  get f() { return this.loginForm.controls; }

  async loadingShow() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      // duration: 2000
    });
    await this.loading.present();
  }

  async loadingHide(){
    await this.loading.dismiss();
  }

}
