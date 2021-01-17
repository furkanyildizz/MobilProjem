import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Yorumekle2Page } from './yorumekle2.page';

describe('Yorumekle2Page', () => {
  let component: Yorumekle2Page;
  let fixture: ComponentFixture<Yorumekle2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Yorumekle2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Yorumekle2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
