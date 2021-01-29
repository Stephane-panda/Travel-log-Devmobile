import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OneTripPage } from './one-trip.page';

describe('OneTripPage', () => {
  let component: OneTripPage;
  let fixture: ComponentFixture<OneTripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTripPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OneTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
