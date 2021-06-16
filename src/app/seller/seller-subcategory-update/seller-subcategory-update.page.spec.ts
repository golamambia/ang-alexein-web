import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellerSubcategoryUpdatePage } from './seller-subcategory-update.page';

describe('SellerSubcategoryUpdatePage', () => {
  let component: SellerSubcategoryUpdatePage;
  let fixture: ComponentFixture<SellerSubcategoryUpdatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerSubcategoryUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellerSubcategoryUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
