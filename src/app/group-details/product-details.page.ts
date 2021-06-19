import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
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
itemTotal:any;
  constructor(private modalService: NgbModal,private alertController: AlertController,
   private formBuilder: FormBuilder, public navCtrl: NavController,
    private http: HttpClient, private loadingController: LoadingController, 
    private storage: Storage, private router: Router,public route: ActivatedRoute) { }


 async ngOnInit() {
//    let dateString = "22-04-2017"; //whatever date string u have
// let dateObject = moment(dateString, "DD-MM-YYYY");
// console.log(dateObject);
//  // this.time_count();
//    const today = moment(dateString);
// console.log(
//   "Today's date is: " + 
//   dateObject.format('YYYY-MM-DD')
// );
    await this.storage.create().then(res => {
      //this.getUserDetails();
    });
       this.sub =this.route.params.subscribe(params => {
  if (params) {
  
    this.id=params['id'];
    
    if(params['id']){
       this.getProductById(params['id']);
      // this.getProductBid(params['id']);
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

   getProductById(id){
    //this.loadingShow();
    let formData = new FormData;
    formData.append('group_id', id);
    
    this.http.post(this.url + 'group-details', formData).subscribe((res: any) => {
      if(res.status){
        console.log(res);
      //this.loadingHide();
      this.itemTotal=res.group_item_total_count;
      let countDownDate1 = new Date("Jun 10, 2021 22:05").getTime();
     
      let m=moment(res.response_data.end_date, "YYYY-MM-DD").format('MMM D, YYYY') +' ' + res.response_data.end_time;
       this.time_count(m);
//console.log(m);
    this.product_deltail=res.response_data;
}else {
  //this.loadingHide();
  this.presentAlert('Error!', '', 'Server error, please try again later');
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
      console.log(res);
    //this.product_deltail=res.response_data;
}else {
  //this.loadingHide();
  this.presentAlert('Error!', '', 'Server error, please try again later');
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
  triggerModal(content) {
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
    formData.append('bid_amount', c.product_bid_starting_price);
  if(this.buyerId){
          this.http.post(this.url + 'bid-add', formData).subscribe((res:any)=>{
               //this.res = res;
    console.log(res);
    if(res.status==true){
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
          this.modalService.dismissAll();
     this.loadingHide();
  this.presentAlert('Error!', '', 'Please login first');
        }
           
     
  }
    gotoauctionitem(id){
  
    this.navCtrl.navigateForward('/auctionItems/'+id);
    
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
      }
    }, 1000);
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
