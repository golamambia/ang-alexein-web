import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'seller-app-dashboard',
  templateUrl: './seller-default-layout.component.html'
})
export class SellerDefaultLayoutComponent {
  public sidebarMinimized = false;
  animated = false;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  constructor(private storage: Storage, private router: Router) {

  }

  async ngOnInit() {
    await this.storage.create().then(res => {
      this.getUserDetails();
    });
  }

  getUserDetails() {
    this.storage.get('auctionSeller').then(response => {
      if (response!=null) {
        //console.log(response.response_data);
        if (response.response_data.role_text == "Seller") {
           this.router.navigate(['/seller/dashboard']);
        }
      } else {
        this.router.navigate(['/seller-login']);
      }
    }, err => {

    });
  }
   logout(){
//alert(1);
    this.storage.remove("auctionSeller");
    //this.userDetails = null;
   this.router.navigate(['/']);
     //this.menu.close();

  }
}
