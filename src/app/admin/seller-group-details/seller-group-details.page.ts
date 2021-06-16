import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-seller-group-details',
  templateUrl: './seller-group-details.page.html',
  styleUrls: ['./seller-group-details.page.scss'],
})
export class SellerGroupDetailsPage implements OnInit {
  loading: any;
  id: any;
  groupDetails: any;
  pList: any;
  groupItems: any = [];
  url = environment.API_URL;

  constructor(private loadingController: LoadingController, private http: HttpClient, private storage: Storage, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.id = params.get('id');
        this.getGroupById(this.id);
      }
    })
  }

  getGroupById(id) {
    this.loadingShow();
    let formData = new FormData;
    formData.append('group_id', id);
    this.http.post(this.url + 'group-details', formData).subscribe((res: any) => {
      this.loadingHide();
      if (res && res.status) {
        this.groupDetails = res.response_data;
      } else {
        this.router.navigate(['/seller/group-list']);
      }
    }, err => {
      this.loadingHide();
    })

  }

  async loadingShow() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 4000
    });
    await this.loading.present();
  }

  loadingHide() {
    setTimeout(() => {
      if (this.loading) {
        this.loading.dismiss();
      } else {
        this.loading = null;
      }
    }, 1000);

    setTimeout(() => {
      if (this.loading) {
        this.loading.dismiss();
      } else {
        this.loading = null;
      }
    }, 3000);

  }

  ionViewWillEnter() {
    this.productList();
  }

  productList() {
    let formData = new FormData;
    formData.append('', '');
    this.http.post(this.url + 'product-list', formData).subscribe((res: any) => {
      if (res && res.status) {
        this.pList = res.response_data;
        this.getGroupItemsByGroup();
      } else {
        this.pList = null;
      }
    })
  }

  getGroupItemsByGroup() {
    let formData = new FormData;
    formData.append('group_id', this.id);
    this.http.post(this.url + 'group-item-get', formData).subscribe((res: any) => {
      this.groupItems = res.response_data;
    })
  }

  addProduct(product) {
    let formData = new FormData;
    formData.append('category_group_id', this.id);
    formData.append('product_id', product.id);
    this.http.post(this.url + 'group-item-add', formData).subscribe((res: any) => {
      this.getGroupItemsByGroup();
    })
  }

  removeProduct(product) {
    let formData = new FormData;
    formData.append('group_item_id', product.id);
    this.http.post(this.url + 'group-item-remove', formData).subscribe((res: any) => {
      this.getGroupItemsByGroup();
    })

  }

}
