import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YorumonaylaPage } from './yorumonayla.page';

describe('YorumonaylaPage', () => {
  let component: YorumonaylaPage;
  let fixture: ComponentFixture<YorumonaylaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YorumonaylaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YorumonaylaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
