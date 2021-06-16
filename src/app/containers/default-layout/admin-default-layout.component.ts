import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'admin-app-dashboard',
  templateUrl: './admin-default-layout.component.html'
})
export class AdminDefaultLayoutComponent {
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
    this.storage.get('auctionAdmin').then(response => {
      //console.log(response);
      if (response!=null) {
        //console.log(response.response_data);
        if (response.response_data.role_text == "Admin") {
          //this.router.navigate(['/admin-login']);
        }
      } else {
        this.router.navigate(['/admin-login']);
      }
    }, err => {

    });
  }
   logout(){
//alert(1);
    this.storage.remove("auctionAdmin");
    //this.userDetails = null;
    this.router.navigate(['/admin-login']);
     //this.menu.close();

  }
}
