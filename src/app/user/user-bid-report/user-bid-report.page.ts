import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { image_path } from '../../../environments/environment';


@Component({
  selector: 'app-user-bid-report',
  templateUrl: './user-bid-report.page.html',
  styleUrls: ['./user-bid-report.page.scss'],
})
export class UserBidReportPage implements OnInit {
 image_path=image_path;
  loading: any;
    bidlist: any;
 userId:any;
  url = environment.API_URL;
   constructor(private http: HttpClient, private alertController: AlertController, 
   	private formBuilder: FormBuilder, private loadingController: LoadingController,
   	 private storage: Storage, private router: Router, private route: ActivatedRoute) {}

ngOnInit() {
	this.storage.create().then(res => {
      this.getUserDetails();
    });
  }
    getUserDetails() {
    this.storage.get('auctionUser').then(response => {
    	// console.log(response);
      if (response && response.response_data && response.response_data.id) {
        this.userId = response.response_data.id;

    this.bidListGet();
        //console.log(this.userId);
      } else {
        this.userId = null;
      }
    }, err => {
      this.userId = null;
    });
  }
 bidListGet(){
    let formData = new FormData;
    formData.append('user_id', this.userId);
    this.http.post(this.url + 'user-bid-list', formData).subscribe((res: any)=>{
    	console.log(res);
      if(res && res.status){
        this.bidlist = res.response_data;
      }else{
        this.bidlist = null;
      }
    })
  }
}
