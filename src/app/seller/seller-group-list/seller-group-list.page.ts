import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller-group-list',
  templateUrl: './seller-group-list.page.html',
  styleUrls: ['./seller-group-list.page.scss'],
})
export class SellerGroupListPage implements OnInit {
  groupList: any;
  loading: any;
  url = environment.API_URL;

  constructor(private router: Router,private http: HttpClient, private loadingController: LoadingController) { }

  ngOnInit() {
    this.groupListGet();
  }

  groupListGet(){
    let formData = new FormData;
    formData.append('', '');
    this.http.post(this.url + 'group-all-list', formData).subscribe((res: any)=>{
      if(res && res.status){
        this.groupList = res.response_data;
      }else{
        this.groupList = null;
      }
    })
  }

  deleteGroup(c){
    this.loadingShow();
    let formData = new FormData;
    formData.append('group_id', c.id);
    this.http.post(this.url + 'group-remove', formData).subscribe(res=>{
      this.loadingHide();
      this.groupListGet();
    },err=>{
      this.loadingHide();
    })
    
  }

  editGroup(id){
    this.router.navigate(['seller/group-edit', id]);
    
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

  groupItems(c){
    this.router.navigate(['seller/group-details', c.id]);
  }

}
