import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
 url = environment.API_URL;
  setData: any;
  res:any;
    constructor(private http: HttpClient) { }

  ngOnInit() {
    this.setingsData();
  }

setingsData(){
    let formData = new FormData;
    formData.append('', '');
    this.http.post(this.url + 'get-setting-list', formData).subscribe((res: any)=>{
      //console.log(res);
      if(res && res.status){
        this.setData = res.response_data[0];
      }else{
        this.setData = null;
      }
    })

  }

}
