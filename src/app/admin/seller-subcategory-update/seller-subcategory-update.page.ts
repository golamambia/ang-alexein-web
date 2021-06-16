import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { image_path } from '../../../environments/environment';


@Component({
  selector: 'app-seller-subcategory-update',
  templateUrl: './seller-subcategory-update.page.html',
  styleUrls: ['./seller-subcategory-update.page.scss'],
})
export class SellerSubcategoryUpdatePage implements OnInit {
  image_path=image_path;
  url = environment.API_URL;
  categoryForm: FormGroup;
  loading: any;
  submitted = false;
  image: any;
  imageLoaded = false;
  imgData: any;
  catData: any;
  catList: any;
  catid:any;
  sub:any;
  res:any;
  cat_picture:any;
  constructor( private alertController: AlertController, private http: HttpClient, 
   private formBuilder: FormBuilder, private loadingController: LoadingController,
    public route: ActivatedRoute) {}

  ngOnInit() {
      this.sub =this.route.params.subscribe(params => {
  if (params) {
    //let queryParams = params;
    this.catid=params['id'];
    //console.log(this.catid);
   
  }
});
let data={
    
    "subcategory_id": this.catid,
       
  }
 this.http.post(this.url + 'subcategory-single',data)
  .subscribe(res => {
    
    this.res = res;
    //console.log(this.res);
     if(this.res.status==true){
       this.cat_picture=this.res.response_data.category_picture;
       this.categoryForm.patchValue({
  category_name: this.res.response_data.category_name,
  parent_category_id: this.res.response_data.parent_category_id,  
  category_description: this.res.response_data.category_description, 

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
      parent_category_id: ['', [Validators.required]],
      category_name: ['', [Validators.required]],
      category_picture: [''],
      category_description: ['', [Validators.required]],
    });
    this.categoryList();
  }

  categoryList(){
    let formData = new FormData;
    formData.append('', '');
    this.http.post(this.url + 'category-list', formData).subscribe((res: any)=>{
      if(res && res.status){
        this.catList = res.response_data;
      }else{
        this.catList = null;
      }
    })
  }

  submit() {
    this.submitted = true;
    if (this.categoryForm.invalid) {
      return;
    } else {
      this.loadingShow();
      let formData = new FormData;
      formData.append('parent_category_id', this.categoryForm.value.parent_category_id);
      formData.append('category_name', this.categoryForm.value.category_name);
      formData.append('category_picture', this.image);
      formData.append('category_description', this.categoryForm.value.category_description);
      formData.append('category_status', '1');
       formData.append('category_id', this.catid);
       formData.append('subcategory_id', this.catid);
      this.http.post(this.url + 'subcategory-update', formData).subscribe((res: any) => {
        this.loadingHide();
        if (res.status) {
          //this.categoryForm.reset();
          this.submitted = false;
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

  async loadingShow() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      // duration: 2000
    });
    await this.loading.present();
  }

  get f() { return this.categoryForm.controls; }
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

}
