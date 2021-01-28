import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserTripComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserTripComponent;
  let fixture: ComponentFixture<UserTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTripComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
