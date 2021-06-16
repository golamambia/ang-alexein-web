import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'user-app-dashboard',
  templateUrl: './user-default-layout.component.html'
})
export class UserDefaultLayoutComponent {
  public sidebarMinimized = false;
  animated= false;
  constructor(private storage: Storage, private router: Router) { }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

 async ngOnInit() {
    await this.storage.create().then(res => {
      this.getUserDetails();
    });
  }

  getUserDetails() {
    this.storage.get('auctionUser').then(response => {
      if (response!=null) {
        //console.log(response.response_data);
        if (response.response_data.role_text == "Buyer") {
           this.router.navigate(['/user/dashboard']);
        }
      } else {
        this.router.navigate(['/login']);
      }
    }, err => {
 this.router.navigate(['/login']);
    });
  }
  logout(){
//alert(1);
    this.storage.remove("auctionUser");
    //this.userDetails = null;
   this.router.navigate(['/']);
     //this.menu.close();

  }
}
