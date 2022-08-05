import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReferredRegisterPage } from './referred-register.page';

describe('ReferredRegisterPage', () => {
  let component: ReferredRegisterPage;
  let fixture: ComponentFixture<ReferredRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferredRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReferredRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
