import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmiCalculationPage } from './emi-calculation.page';

describe('EmiCalculationPage', () => {
  let component: EmiCalculationPage;
  let fixture: ComponentFixture<EmiCalculationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmiCalculationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmiCalculationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
