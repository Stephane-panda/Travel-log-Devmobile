import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaladeListPage } from './balade-list.page';

describe('BaladeListPage', () => {
  let component: BaladeListPage;
  let fixture: ComponentFixture<BaladeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaladeListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaladeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
