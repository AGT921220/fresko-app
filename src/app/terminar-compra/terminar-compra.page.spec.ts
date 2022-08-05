import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TerminarCompraPage } from './terminar-compra.page';

describe('TerminarCompraPage', () => {
  let component: TerminarCompraPage;
  let fixture: ComponentFixture<TerminarCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminarCompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TerminarCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
