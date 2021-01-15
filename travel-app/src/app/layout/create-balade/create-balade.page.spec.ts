import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateBaladePage } from './create-balade.page';

describe('CreateBaladePage', () => {
  let component: CreateBaladePage;
  let fixture: ComponentFixture<CreateBaladePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBaladePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateBaladePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
