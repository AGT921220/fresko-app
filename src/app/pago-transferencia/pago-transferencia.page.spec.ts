import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagoTransferenciaPage } from './pago-transferencia.page';

describe('PagoTransferenciaPage', () => {
  let component: PagoTransferenciaPage;
  let fixture: ComponentFixture<PagoTransferenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoTransferenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagoTransferenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
