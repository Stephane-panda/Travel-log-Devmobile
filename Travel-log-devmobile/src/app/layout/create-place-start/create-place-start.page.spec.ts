import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatePlaceStartPage } from './create-place-start.page';

describe('CreatePlaceStartPage', () => {
  let component: CreatePlaceStartPage;
  let fixture: ComponentFixture<CreatePlaceStartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlaceStartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePlaceStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
