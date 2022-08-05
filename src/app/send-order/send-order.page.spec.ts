import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendOrderPage } from './send-order.page';

describe('SendOrderPage', () => {
  let component: SendOrderPage;
  let fixture: ComponentFixture<SendOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
