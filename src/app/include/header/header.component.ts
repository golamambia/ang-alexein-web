import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
import { AlertController, LoadingController } from '@ionic/angular';
declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
url = environment.API_URL;
  loading: any;
  buyerId:any;
  buyerData:any;
  sellerId:any;
  constructor(private storage: Storage, private router: Router,
   public loadingController: LoadingController) { }

 async ngOnInit() {
    $(".top-menu ul ul").parent().addClass("dropdown")
    $(".top-menu ul li.dropdown").append("<span class='arrow'></span>")
    $(".top-menu ul li.dropdown .arrow").click(function () {

      if ($(this).parent().hasClass('open')) {
        $(this).parent().removeClass("open")
      } else {
        $(this).parent().addClass("open")
      }
    });

    $(".btn-topmenu").click(function () {
      $("body").addClass("modal-open");
      $('.top-menu').addClass("open");
    });
    $(".btn-topmenu-close").click(function () {
      $("body").removeClass("modal-open");
      $('.top-menu').removeClass("open");
    });
     await  this.storage.create().then(res => {
      this.getUserDetails();
    });
     //console.log(this.buyerId);
  }

  registration(){
    this.router.navigate(['/registration']);
  }
getUserDetails() {
    this.storage.get('auctionUser').then(response => {
     // console.log(response);
      if (response && response.response_data && response.response_data.id) {
        this.buyerId = response.response_data.id;
        this.buyerData=response.response_data;
      } else {
        this.buyerId = null;
      }
    }, err => {
      this.buyerId = null;
    });

    this.storage.get('auctionSeller').then(response => {
     // console.log(response);
      if (response && response.response_data && response.response_data.id) {
        this.sellerId = response.response_data.id;
        //this.buyerData=response.response_data;
      } else {
        this.sellerId = null;
      }
    }, err => {
      this.sellerId = null;
    });
  }
}
