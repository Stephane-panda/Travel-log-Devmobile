import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaladesListePage } from './balades-liste.page';

describe('BaladesListePage', () => {
  let component: BaladesListePage;
  let fixture: ComponentFixture<BaladesListePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaladesListePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaladesListePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
