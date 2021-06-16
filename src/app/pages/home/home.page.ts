import { Component, ViewChild } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations'
import { IonContent } from '@ionic/angular';
import { OnInit } from '@angular/core';
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
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ]), 
    
    trigger(
      'slideView',
      [
        state('true', style({ transform: 'translateX(100%)', opacity: 0 })),
        state('false', style({ transform: 'translateX(0)', opacity: 1 })),
        transition('0 => 1', animate('500ms', style({ transform: 'translateX(0)', 'opacity': 1 }))),
        transition('1 => 1', animate('500ms', style({ transform: 'translateX(100%)', 'opacity': 0 }))),
      ]),
  ]
})
export class HomePage {
  images_g = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  @ViewChild(IonContent, {read: IonContent}) content: IonContent;
  current = 0;
  img_list = [
    {url : 'assets/images/banner1.jpg', title: 'Retail Inventory11', off: 'Exentended for today 60% off'},
    {url : 'assets/images/category7.jpg', title: 'Retail Inventory2', off: 'Exentended for today 80% off'},
  ];
   image_path=image_path;
 url = environment.API_URL;
  pList: any;
  loading: any;
constructor(private alertController: AlertController, private formBuilder: FormBuilder, 
    private http: HttpClient, private loadingController: LoadingController, 
    private storage: Storage, private router: Router,public route: ActivatedRoute) { }


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
  logScrollStart(event) {
  }

  logScrolling(event) {
    if (event.detail.scrollTop > 100) {
      $('.header_bottom').addClass("fix");
    } else {
      $('.header_bottom').removeClass("fix");
    }
  }

  logScrollEnd(event) {
  }

  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 3000);
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

  images2 = [
    {
      text: "Everfresh Flowers",
      image: "assets/images/product1.jpg"
    },
    {
      text: "Festive Deer",
      image: "assets/images/product2.jpg"
    },
    {
      text: "Morning Greens",
      image: "assets/images/product3.jpg"
    },
    {
      text: "Bunch of Love",
      image: "assets/images/product4.jpg"
    },
    {
      text: "Blue Clear",
      image: "assets/images/product1.jpg"
    }
  ]
}
