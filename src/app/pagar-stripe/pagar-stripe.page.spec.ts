import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagarStripePage } from './pagar-stripe.page';

describe('PagarStripePage', () => {
  let component: PagarStripePage;
  let fixture: ComponentFixture<PagarStripePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarStripePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagarStripePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
