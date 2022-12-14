import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReferredPage } from './referred.page';

describe('ReferredPage', () => {
  let component: ReferredPage;
  let fixture: ComponentFixture<ReferredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferredPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReferredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
