import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinishOrderPage } from './finish-order.page';

describe('FinishOrderPage', () => {
  let component: FinishOrderPage;
  let fixture: ComponentFixture<FinishOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinishOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
