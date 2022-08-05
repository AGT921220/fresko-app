import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EfectivoCompraPage } from './efectivo-compra.page';

describe('EfectivoCompraPage', () => {
  let component: EfectivoCompraPage;
  let fixture: ComponentFixture<EfectivoCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfectivoCompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EfectivoCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
