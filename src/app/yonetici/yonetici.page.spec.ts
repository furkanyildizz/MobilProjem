import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YoneticiPage } from './yonetici.page';

describe('YoneticiPage', () => {
  let component: YoneticiPage;
  let fixture: ComponentFixture<YoneticiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoneticiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YoneticiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
