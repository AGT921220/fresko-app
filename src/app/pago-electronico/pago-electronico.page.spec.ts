import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagoElectronicoPage } from './pago-electronico.page';

describe('PagoElectronicoPage', () => {
  let component: PagoElectronicoPage;
  let fixture: ComponentFixture<PagoElectronicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoElectronicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagoElectronicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
