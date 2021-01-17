import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YorumeklePage } from './yorumekle.page';

describe('YorumeklePage', () => {
  let component: YorumeklePage;
  let fixture: ComponentFixture<YorumeklePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YorumeklePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YorumeklePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
