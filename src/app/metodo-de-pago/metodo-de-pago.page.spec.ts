import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetodoDePagoPage } from './metodo-de-pago.page';

describe('MetodoDePagoPage', () => {
  let component: MetodoDePagoPage;
  let fixture: ComponentFixture<MetodoDePagoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodoDePagoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetodoDePagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
