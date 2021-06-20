import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { image_path } from '../../environments/environment';
import swal from 'sweetalert2';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
declare var $: any; 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  images = [
    {
      text: "Everfresh Flowers",
      image: "assets/images/product5.jpg"
    },
    {
      text: "Festive Deer",
      image: "assets/images/product6.jpg"
    },
    {
      text: "Morning Greens",
      image: "assets/images/product7.jpg"
    },
    {
      text: "Bunch of Love",
      image: "assets/images/product8.jpg"
    },
    {
      text: "Blue Clear",
      image: "assets/images/product5.jpg"
    }
  ]

   image_path=image_path;
  url = environment.API_URL;
  productForm: FormGroup;
  loading: any;
  submitted = false;
  image: any;
  imageLoaded = false;
  userId: any;
  photos: any;
  sub:any;
  id:any;
product_picture:any;
more_picture:any;
product_deltail:any;
closeModal: string;
modal:any;
buyerId:any;
maxbidamt:any;
groupdetails:any;
gid:any;
bid_status:any=1;
htmlStr:any;
bid_amount:any;
errorbid:any='';
  constructor(private modalService: NgbModal,private alertController: AlertController,
   private formBuilder: FormBuilder, 
    private http: HttpClient, private loadingController: LoadingController, 
    private storage: Storage, private router: Router,public route: ActivatedRoute) { }


 async ngOnInit() {
    await this.storage.create().then(res => {
      //this.getUserDetails();
    });
       this.sub =this.route.params.subscribe(params => {
  if (params) {
  //console.log(params);
    this.id=params['id'];
    this.gid=params['gid'];
    if(params['id']){
       
    }
   
  }
});
       this.storage.get('auctionUser').then(response => {
     // console.log(response);
      if (response && response.response_data && response.response_data.id) {
        this.buyerId = response.response_data.id;
       // this.buyerData=response.response_data;
      } else {
        this.buyerId = null;
      }
    }, err => {
      this.buyerId = null;
    });
  }
  ionViewWillEnter(){
    this.getProductById(this.id);
       this.getProductBid(this.id);
       this.getGroup();
  }
   getProductById(id){
    //this.loadingShow();
    let formData = new FormData;
    formData.append('product_id', id);
    
    this.http.post(this.url + 'product-single', formData).subscribe((res: any) => {
      //console.log(res);
      if(res.status){
      //this.loadingHide();
      //this.getGroup();
    this.product_deltail=res.response_data;
}else {
  //this.loadingHide();
  this.presentAlert('Error!', '', 'Server error, please try again later1');
              }
    }, err=>{
      //this.loadingHide();
    })

  }
  getProductBid(id){
   // this.loadingShow();
    let formData = new FormData;
    formData.append('product_id', id);
    
    this.http.post(this.url + 'max-bid-by-product', formData).subscribe((res: any) => {
      if(res.status){
     // this.loadingHide();
     // console.log(res);
    this.maxbidamt=res.response_data;
}else {
  //this.loadingHide();
//this.presentAlert('Error!', '', 'Server error, please try again later2');
              }
    }, err=>{
      //this.loadingHide();
    })

  }
    getGroup(){
   // this.loadingShow();
    let formData = new FormData;
    formData.append('group_id', this.gid);
    
    this.http.post(this.url + 'group-details', formData).subscribe((res: any) => {
      //console.log(res);
      if(res.status){
     // this.loadingHide();
     // console.log(res);
     let m=moment(res.response_data.end_date, "YYYY-MM-DD").format('MMM D, YYYY') +' ' + res.response_data.end_time;
         // this.time_count(m);
        let countDownDate2 = new Date(m).getTime();
    
      let now2 = new Date().getTime();

      // Find the distance between now and the count down date
      let distance2 = countDownDate2 - now2;
 if (distance2 < 0) {
   this.htmlStr="Expired";
        document.getElementById("demo").innerHTML = "Expired";
        this.bid_status=0;
      }
     
    this.groupdetails=res.response_data;
    let countDownDate = new Date(m).getTime();

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
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Expired";
        this.bid_status=0;
      }
    }, 1000);

}else {
  //this.loadingHide();
  this.presentAlert('Error!', '', 'Server error, please try again later2');
              }
    }, err=>{
      //this.loadingHide();
    })

  }
  async presentAlert(header, subHeader, message) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
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
  triggerModal(content,productid) {
    this.errorbid="";
    this.getProductBid(productid);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
    private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
 
    bidNow(c){
    //console.log(c.id);
    let formData = new FormData;
    //formData.append('id', '9');
    formData.append('user_id', this.buyerId);
    formData.append('product_id', c.id);
    formData.append('bid_amount', this.bid_amount);
  if(this.buyerId){
    if(this.bid_amount>0){
          this.http.post(this.url + 'bid-add', formData).subscribe((res:any)=>{
               //this.res = res;
   // console.log(res);
    if(res.status==true){
        this.getProductBid(c.id);
        this.bid_amount="";
      this.modalService.dismissAll();
     this.presentAlert('Success!', '', res.message);
       //this.dataList();
    }else{
this.modalService.dismissAll();
this.loadingHide();
  this.presentAlert('Error!', '', 'Server error, please try again later');
    }
    });

}else{
this.errorbid="Please enter bid amount";
  //this.presentAlert('Error!', '', 'Please enter bid amount');
}
        }else{
          this.modalService.dismissAll();
     this.loadingHide();
  this.presentAlert('Error!', '', 'Please login first');
        }
           
     
  }
   time_count(countDownDate1){
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
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Expired";
        this.bid_status=0;
      }
    }, 1000);
  }
    onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}
  carouselOptions = {
    loop: true,
    autoplay: false,
    margin: 30,
    dots: false,
    nav: true,
    navText: [],
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      640: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 4
      },
      1199: {
        items: 4
      }
    }
  }

}
