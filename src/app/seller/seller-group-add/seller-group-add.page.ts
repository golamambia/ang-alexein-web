import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { image_path } from '../../../environments/environment';

@Component({
  selector: 'app-seller-group-add',
  templateUrl: './seller-group-add.page.html',
  styleUrls: ['./seller-group-add.page.scss'],
})
export class SellerGroupAddPage implements OnInit {
  groupForm: FormGroup;
  image_path=image_path;
  loading: any;
  submitted = false;
  catData: any;
  userId: any;
  titleText1: any = "Group Add";
  titleText: any = "Add new group";
  id: any;
  url = environment.API_URL;
  categoryList:any;
  image: any;
  imageLoaded = false;
  product_picture:any;
  category_group_image:any;
  constructor(private http: HttpClient, private alertController: AlertController, private formBuilder: FormBuilder, private loadingController: LoadingController, private storage: Storage, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.groupForm = this.formBuilder.group({
      auction_cg_number: ['', [Validators.required]],
      category_group_name: ['', [Validators.required]],
      category_id: [''],
      start_date_and_time: ['', [Validators.required]],
      end_date_and_time: ['', [Validators.required]],
      location: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      category_group_image1: [''],
      highlights: [''],
      description: [''],
      notes: [''],
      terms: ['']
    });

    this.storage.create().then(res => {
      this.getUserDetails();
    });

    this.route.paramMap.subscribe(params => {
      if(params.get('id')){
        this.id = params.get('id');
        this.getGroupById(this.id);
      }
    })
     this.catList();
  }
  catList() {
    let formData = new FormData;
    formData.append('', '');
    this.http.post(this.url + 'category-list', formData).subscribe((res: any) => {
      if (res && res.status) {
        //console.log(res.response_data);
        this.categoryList = res.response_data;
      } else {
        this.categoryList = null;
      }
    })
  }
  getGroupById(id){
    this.loadingShow();
    let formData = new FormData;
    formData.append('group_id', id);
    this.http.post(this.url + 'group-details', formData).subscribe((res: any) => {
      console.log(res);
      this.loadingHide();
      this.titleText = 'Update Group';
      this.titleText1 = 'Update group';
      this.product_picture=res.response_data.category_group_image;
      this.groupForm.patchValue(res.response_data);
      this.groupForm.patchValue({'end_date_and_time': res.response_data.end_date + 'T' + res.response_data.end_time});
      this.groupForm.patchValue({'start_date_and_time': res.response_data.start_date + 'T' + res.response_data.start_time});
   
    }, err=>{
      this.loadingHide();
    })

  }

  getUserDetails() {
    this.storage.get('auctionSeller').then(response => {
      if (response && response.response_data && response.response_data.id) {
        this.userId = response.response_data.id;
      } else {
        this.userId = null;
      }
    }, err => {
      this.userId = null;
    });
  }

  get f() { return this.groupForm.controls; }

  submit() {
   
    this.submitted = true;
    if (this.groupForm.invalid) {
      return;
    } else {
      this.loadingShow();
      let formData = new FormData;
      formData.append('creator_id', this.userId);
      formData.append('auction_cg_number', this.groupForm.value.auction_cg_number);
      formData.append('category_group_name', this.groupForm.value.category_group_name);
      formData.append('category_id', this.groupForm.value.category_id);
      formData.append('start_date', (this.groupForm.value.start_date_and_time).split("T")[0]);
      formData.append('start_time', (this.groupForm.value.start_date_and_time).split("T")[1]);
      formData.append('end_date', (this.groupForm.value.end_date_and_time).split("T")[0]);
      formData.append('end_time', (this.groupForm.value.end_date_and_time).split("T")[1]);
      formData.append('location', this.groupForm.value.location);
      formData.append('zip', this.groupForm.value.zip);
      formData.append('highlights', this.groupForm.value.highlights);
      formData.append('description', this.groupForm.value.description);
      formData.append('category_group_image', this.image);
      formData.append('notes', this.groupForm.value.notes);
      formData.append('terms', this.groupForm.value.terms);

      if(this.id){
        formData.append('group_id', this.id);
        this.http.post(this.url + 'group-update', formData).subscribe((res: any) => {
          //console.log(res);
          this.loadingHide();
          if (res.status) {
            this.submitted = false;
            this.presentAlert('Success!', '', res.message ? res.message : 'Seccessfully updated.');
          } else {
            this.presentAlert('Error!', '', 'Server error, please try again later');
          }
        }, err => {
          this.loadingHide();
          this.presentAlert('Error!', '', 'Server error, please try again later');
        });
      }else{
        this.http.post(this.url + 'group-add', formData).subscribe((res: any) => {
          console.log(res);
          this.loadingHide();
          if (res.status) {
            this.groupForm.reset();
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
      cssClass: 'my-alert-class',
      header,
      subHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
  onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
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
