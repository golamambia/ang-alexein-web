import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.page.html',
  styleUrls: ['./admin-product-list.page.scss'],
})
export class AdminProductListPage implements OnInit {
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
  updateStatus(p,st){
    let formData = new FormData;
    formData.append('product_id', p.id);
    formData.append('status', st);
   
 swal.fire({
       title: 'Are you sure?',
  text: 'You want change product status',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes',
  cancelButtonText: 'No'
          
    })
    .then((willDelete) => {

        if(willDelete.value){
          this.http.post(this.url + 'product-update-status', formData).subscribe((res:any)=>{
               //this.res = res;
    //console.log(res);
    if(res.status){
       swal.fire(
      'Success!',
      'Status changed successfully',
      'success'
    )
       this.productList();
    }else{

 swal.fire(
      'Sorry',
      'Something went wrong, try again)',
      'error'
    )
     
    }
    });
           
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
