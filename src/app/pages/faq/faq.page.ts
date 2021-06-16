import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
declare let $: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  url = environment.API_URL;
  catList: any;
  res:any;
 // hrefval=' href="#collapseOne"';

  constructor(private http: HttpClient) { }

    ngOnInit() {
     
    this.faqList();
  }

  faqList(){
    let formData = new FormData;
    formData.append('', '');
    this.http.post(this.url + 'get-faq-list', formData).subscribe((res: any)=>{
      //console.log(res);
      if(res && res.status){
        this.catList = res.response_data;
      }else{
        this.catList = null;
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
