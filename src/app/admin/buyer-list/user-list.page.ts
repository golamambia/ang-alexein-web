import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  catList: any;
  loading: any;
  url = environment.API_URL;
  sellList: any;
  res:any;
  constructor(private loadingController: LoadingController, private http: HttpClient,
    public alertController: AlertController) { }
  ngOnInit() {
   this.dataList();
  }
   dataList(){
    let formData = new FormData;
    formData.append('', '');
    this.http.post(this.url + 'buyer-list', formData).subscribe((res: any)=>{
      //console.log(res);
      if(res && res.status){
        this.sellList = res.response_data;
      }else{
        this.sellList = null;
      }
    })
  }

  async deleteData(c){
   // this.loadingShow();
    let formData = new FormData;
   formData.append('user_id', c.id);
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
            if( c.id){
              this.loadingShow();
              this.http.post(this.url + 'user-delete', formData)
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
      this.dataList();
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

  editCategory(c){}

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
