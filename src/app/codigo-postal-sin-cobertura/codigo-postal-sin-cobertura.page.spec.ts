import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodigoPostalSinCoberturaPage } from './codigo-postal-sin-cobertura.page';

describe('CodigoPostalSinCoberturaPage', () => {
  let component: CodigoPostalSinCoberturaPage;
  let fixture: ComponentFixture<CodigoPostalSinCoberturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoPostalSinCoberturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodigoPostalSinCoberturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
