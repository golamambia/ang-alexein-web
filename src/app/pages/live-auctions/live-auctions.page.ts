import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { image_path } from '../../../environments/environment';
import * as moment from 'moment';

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
  close_in:any;

   constructor(private alertController: AlertController, private formBuilder: FormBuilder, 
    private http: HttpClient, private loadingController: LoadingController, 
    private storage: Storage, private router: Router,public route: ActivatedRoute) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.productList();
   // this.lol();
  }
  
 time_count(countDownDate1,idno){
    let countDownDate = new Date(countDownDate1).getTime();

    // Update the count down every 1 second
    let x = setInterval(function () {

      // Get todays date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      //console.log(now, "now", "countDownDate", countDownDate, "distance", distance, "days", days);

      // Output the result in an element with id="demo"
     document.getElementById("demo"+idno).innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        //return "EXPIRED";
        document.getElementById("demo"+idno).innerHTML = "EXPIRED";
      }
     
    }, 1000);
     //return idno;
  }
  productList(){
    let formData = new FormData;
    formData.append('', '');
    this.http.post(this.url + 'group-all-list', formData).subscribe((res: any)=>{
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
