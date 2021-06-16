import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller-subcategory-list',
  templateUrl: './seller-subcategory-list.page.html',
  styleUrls: ['./seller-subcategory-list.page.scss'],
})
export class SellerSubcategoryListPage implements OnInit {
  url = environment.API_URL;
  catList: any;
  loading: any;

  constructor(private http: HttpClient, private loadingController: LoadingController,public alertController: AlertController) { 
  }

  ngOnInit() {
    this.categoryList();
  }

  categoryList(){
    let formData = new FormData;
    formData.append('', '');
    this.http.post(this.url + 'subcategory-list', formData).subscribe((res: any)=>{
      if(res && res.status){
        this.catList = res.response_data;
      }else{
        this.catList = null;
      }
    })
  }

 async deleteCategory(c){
   //console.log(c);
    //this.loadingShow()
    let formData = new FormData;
    formData.append('category_id', c.category_id);
   

     const successalrt = await this.alertController.create({
     message: 'Data successfully deleted',
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
            if( c.category_id){
              this.loadingShow();
              this.http.post(this.url + 'category-remove', formData)
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
      this.categoryList();
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

  editCategory(c){
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
