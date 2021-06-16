import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller-group-list',
  templateUrl: './seller-group-list.page.html',
  styleUrls: ['./seller-group-list.page.scss'],
})
export class SellerGroupListPage implements OnInit {
  groupList: any;
  loading: any;
  url = environment.API_URL;

  constructor(public alertController: AlertController,private router: Router,
    private http: HttpClient, private loadingController: LoadingController) { }

  ngOnInit() {
    this.groupListGet();
  }

  groupListGet(){
    let formData = new FormData;
    formData.append('', '');
    this.http.post(this.url + 'group-all-list', formData).subscribe((res: any)=>{
      if(res && res.status){
        this.groupList = res.response_data;
      }else{
        this.groupList = null;
      }
    })
  }

async  deleteGroup(c){
    
    let formData = new FormData;
    formData.append('group_id', c.id);
   

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
              this.http.post(this.url + 'group-remove', formData)
  .subscribe((res: any) => {
    // this.res = res.json();
    console.log(res);
     if(res.status == false){
       fail.present();
   this.loadingHide();
    
    }else if(res.status == true){
    successalrt.present();
    //this.constructor();
    //this.navCtrl.navigateForward('address-list');
   this.loadingHide();
      this.groupListGet();
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

  editGroup(id){
    this.router.navigate(['admin/group-edit', id]);
    
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

  groupItems(c){
    this.router.navigate(['admin/group-details', c.id]);
  }

}
