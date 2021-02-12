import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatePlaceEndPage } from './create-place-end.page';

describe('CreatePlaceEndPage', () => {
  let component: CreatePlaceEndPage;
  let fixture: ComponentFixture<CreatePlaceEndPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlaceEndPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePlaceEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
