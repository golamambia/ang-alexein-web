import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faq-add',
  templateUrl: './faq-add.page.html',
  styleUrls: ['./faq-add.page.scss'],
})
export class FaqAddPage implements OnInit {
  faqForm: FormGroup;
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
    
    "faq_id": this.catid,
       
  }
 this.http.post(this.url + 'single-faq',data)
  .subscribe(res => {
    
    this.res = res;
    //console.log(this.res);
     if(this.res.status==true){

      
       this.faqForm.patchValue({
  faq_question: this.res.response_data.faq_question, 
  faq_asware: this.res.response_data.faq_asware, 

});
    
    
    }else{
    alert("Server error");
    //loading.dismiss();
    }
  }, (err) => {
    console.log(err);
    //loading.dismiss();
  });
    this.faqForm = this.formBuilder.group({
      faq_question: ['', [Validators.required]],
      faq_asware: ['', [Validators.required]],
      
    });
  }

  submit() {
    this.submitted = true;
    if (this.faqForm.invalid) {
      return;
    } else {
      this.loadingShow();
      let formData = new FormData;
     formData.append('faq_question', this.faqForm.value.faq_question);
      
      formData.append('faq_asware', this.faqForm.value.faq_asware);

     formData.append('faq_id', this.catid);
      this.http.post(this.url + 'update-faq', formData).subscribe((res: any) => {
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

  get f() { return this.faqForm.controls; }

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
