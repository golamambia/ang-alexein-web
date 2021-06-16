import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.page.html',
  styleUrls: ['./seller-product-list.page.scss'],
})
export class SellerProductListPage implements OnInit {
  url = environment.API_URL;
  pList: any;
  loading: any;

  constructor(private http: HttpClient, private loadingController: LoadingController,public alertController: AlertController) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.productList();
  }

  productList(){
    let formData = new FormData;
    formData.append('', '');
    this.http.post(this.url + 'product-list', formData).subscribe((res: any)=>{
      if(res && res.status){
        this.pList = res.response_data;
      }else{
        this.pList = null;
      }
    })
  }

 async deleteProduct(p){
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
              this.http.post(this.url + 'product-remove', formData)
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
      this.productList();
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
