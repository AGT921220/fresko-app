import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorarioEntregaPage } from './horario-entrega.page';

describe('HorarioEntregaPage', () => {
  let component: HorarioEntregaPage;
  let fixture: ComponentFixture<HorarioEntregaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioEntregaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorarioEntregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
