import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YorumokuPage } from './yorumoku.page';

describe('YorumokuPage', () => {
  let component: YorumokuPage;
  let fixture: ComponentFixture<YorumokuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YorumokuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YorumokuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
