import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { image_path } from '../../../environments/environment';

declare let $: any;

@Component({
  selector: 'app-live-auctions',
  templateUrl: './live-auctions.page.html',
  styleUrls: ['./live-auctions.page.scss'],
})
export class LiveAuctionsPage implements OnInit {
 image_path=image_path;
 url = environment.API_URL;
  pList: any;
  loading: any;

   constructor(private alertController: AlertController, private formBuilder: FormBuilder, 
    private http: HttpClient, private loadingController: LoadingController, 
    private storage: Storage, private router: Router,public route: ActivatedRoute) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.productList();
  }

  productList(){
    let formData = new FormData;
    formData.append('', '');
    this.http.post(this.url + 'product-list', formData).subscribe((res: any)=>{
      console.log(res);
      if(res && res.status){
        this.pList = res.response_data;
      }else{
        this.pList = null;
      }
    })
  }
  logScrolling(event) {
    if (event.detail.scrollTop > 100) {
      $('.header_bottom').addClass("fix");
    } else {
      $('.header_bottom').removeClass("fix");
    }
  }

}
