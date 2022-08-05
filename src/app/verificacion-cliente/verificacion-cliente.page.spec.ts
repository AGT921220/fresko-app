import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerificacionClientePage } from './verificacion-cliente.page';

describe('VerificacionClientePage', () => {
  let component: VerificacionClientePage;
  let fixture: ComponentFixture<VerificacionClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificacionClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificacionClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
