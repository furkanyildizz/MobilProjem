import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BanPage } from './ban.page';

describe('BanPage', () => {
  let component: BanPage;
  let fixture: ComponentFixture<BanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
