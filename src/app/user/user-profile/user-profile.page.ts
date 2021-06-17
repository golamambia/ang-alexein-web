import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import * as ClassicEditor from '@ckeditor/ckeditor5-angular';
import { filter } from 'rxjs/operators';
declare let $: any;
// import { CKEditorComponent } from 'ng2-ckeditor';
declare const window: any;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],

})
export class UserProfilePage implements OnInit {
  // public Editor = ClassicEditor;

  

 groupForm: FormGroup;
  submitted = false;
  url = environment.API_URL;
  loading: any;
  buyerId:any;
  buyerData:any;
  name:any;
  email: any;
  
  billing_address:any;
  country: any;
  state: any='';
  city: any;
  zip:any;
  dob: any;
  phone_no: any;
  date:any;
   constructor(private http: HttpClient, private alertController: AlertController, private formBuilder: FormBuilder, private loadingController: LoadingController, private storage: Storage, private router: Router, private route: ActivatedRoute) {}

  async ngOnInit() {
  if(window.CKEDITOR) {
           window.CKEDITOR.replace('editor');
       }
 //this.getUserData();

    await  this.storage.create().then(res => {
     
      
    });
 this.getUserDetails();
     }

  getUserDetails() {
    this.storage.get('auctionUser').then(response => {
     // console.log(response);
      if (response && response.response_data && response.response_data.id) {
        this.buyerId = response.response_data.id;
        this.buyerData=response.response_data;
         this.getUserData();
      } else {
        this.buyerId = null;
         this.router.navigate(['/login']);
      }
    }, err => {
      this.buyerId = null;
       this.router.navigate(['/login']);
    });
  }
getUserData(){
	 this.loadingShow();
	let formData = new FormData;
      formData.append('user_id',this.buyerId);
     // formData.append('password', this.loginForm.value.password);
       this.http.post(this.url + 'user-details', formData).subscribe((res: any) => {
       this.loadingHide();
        //console.log(this.buyerId);
        if (res && res.status) {
          this.buyerData=res.response_data;
            this.name=res.response_data.name;
  this.email=res.response_data.email;
    for(let rd of res.response_data_one){
      
      if(rd['meta_key']=='billing_address'){
        this.billing_address=rd['meta_value'];
      }
      if(rd['meta_key']=='country'){
        this.country=rd['meta_value'];
      }
      if(rd['meta_key']=='state'){
        this.state=rd['meta_value'];
      }
      if(rd['meta_key']=='city'){
        this.city=rd['meta_value'];
      }
      if(rd['meta_key']=='zip'){
        this.zip=rd['meta_value'];
      }
      if(rd['meta_key']=='dob'){
        var date = new Date();
        var str_array = rd['meta_value'].split('-');
        //console.log(str_array[0]);
         //console.log(filter('date')("dd-MM-yyyy"));
        //console.log(rd['meta_value'].DateofBirth | date: 'dd/MM/yyyy hh:mm a');
        this.dob=rd['meta_value'];
      }
      if(rd['meta_key']=='phone_no'){
        this.phone_no=rd['meta_value'];
      }
      
    }
  // 
  // this.country=res.response_data.name;
  // this.state=res.response_data.name;
  // this.city=res.response_data.name;
  // this.zip=res.response_data.name;
  // this.dob=res.response_data.name;
  // this.phone_no=res.response_data.name;

        } else {
          this.presentAlert('Error!', '', res.message);
        }
      }, err => {
        this.loadingHide();
        this.presentAlert('Error!', '', 'Server error, please try again later');
      });
}

  onSubmit() {
   // this.submitted = true;
  
     
      this.loadingShow();
      let formData = new FormData;
         formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('billing_address', this.billing_address);
      formData.append('country', this.country);
      formData.append('state', this.state);
      formData.append('city', this.city);
      formData.append('zip', this.zip);
      formData.append('dob', this.dob);
      //formData.append('dob', this.dob.year + '-' + this.dob.month + '-' +  this.dob.day);
      formData.append('phone_no', this.phone_no);
       formData.append('user_id', this.buyerId);
      this.http.post(this.url + 'user-update', formData).subscribe((res: any) => {
       // console.log(res);
        this.loadingHide()
        if (res && res.status) {
          this.presentAlert('Success!', '', res.message);
        } else {
          this.presentAlert('Error!', '', res.message);
        }
      }, err => {
        this.loadingHide();
        this.presentAlert('Error!', '', 'Server error, please try again later');
      });
    

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
  
  get f() { return this.groupForm.controls; }

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
  onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}
}
