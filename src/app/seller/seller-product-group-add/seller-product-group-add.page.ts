import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller-product-group-add',
  templateUrl: './seller-product-group-add.page.html',
  styleUrls: ['./seller-product-group-add.page.scss'],
})
export class SellerProductGroupAddPage implements OnInit {
  url = environment.API_URL;
   pList2: any;
   pList: any;
  loading: any;
  groupList:any;
emailFormArray:any=[];
group_name:any='';
grp_id:any;

  constructor(private http: HttpClient, private loadingController: LoadingController,public alertController: AlertController) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.productList();
    this.groupsList();
  }
 groupsList(){
    let formData = new FormData;
    formData.append('', '');
    this.http.post(this.url + 'group-all-list', formData).subscribe((res: any)=>{
      //console.log(res);
      if(res && res.status){
        this.groupList = res.response_data;
      }else{
        this.groupList = null;
      }
    })
  }
  onChange(email:string, isChecked: boolean) {

  if(isChecked) {
    this.emailFormArray.push(email);

  } else {
   
   this.emailFormArray.splice(this.emailFormArray.indexOf(email), 1)
  }
 }
 getGroupid(id){
  this.productList();
//console.log(id);
 let formData = new FormData;
    formData.append('group_id', id);
    this.http.post(this.url + 'group-item-get', formData).subscribe((res: any)=>{
      //console.log(res);
      if(res && res.status){
        
        this.grp_id=id;
        for (let pro of this.pList2) {
    for (let p of res.response_data) {
            
            if (p.product_id == pro.id && p.category_group_id==id) {
              pro.is_front =1;
              pro.is_front_two =p.id;
                           
              //break;
            }
          }
        }
        this.pList=this.pList2;
//console.log(this.pList);
       // this.groupList = res.response_data;
      }else{
       this.pList=null;
      }
    })
}
 async productAdd() {
      
      if(this.group_name=='' || this.group_name==null){
         
         this.alertController.create({
     message: 'Please select group name',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
      }else if(this.emailFormArray==''){
       
        this.alertController.create({
     message: 'Please select product',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
      }else{
       for (let i = 0; i < this.emailFormArray.length; i++) {
         //console.log(this.emailFormArray[i]);
         let formData = new FormData;
    formData.append('category_group_id', this.group_name);
    formData.append('product_id', this.emailFormArray[i]);
          this.http.post(this.url + 'group-item-add', formData).subscribe((res:any)=>{
               //this.res = res;
    //console.log(res);
    if(res.status){
 
    this.alertController.create({
     message: res.message,
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
       this.getGroupid(this.group_name);
    }else{

 this.alertController.create({
     message: 'Something went wrong, try again',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
     
    }
    });

       }
      }
    }
  productList(){
    let formData = new FormData;
    formData.append('', '');
    this.http.post(this.url + 'product-list', formData).subscribe((res: any)=>{
      if(res && res.status){
        this.pList2 = res.response_data;
      }else{
        this.pList2 = null;
      }
    })
  }

 async deleteProduct(p,grupid){
    //this.loadingShow();
    let formData = new FormData;
    formData.append('group_item_id', grupid);
   
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
              this.http.post(this.url + 'group-item-remove', formData)
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
      this.getGroupid(this.grp_id);
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

  editProduct(c){
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

}
