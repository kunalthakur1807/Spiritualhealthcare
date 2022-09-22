import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesectionComponent } from './featuresection.component';

describe('FeaturesectionComponent', () => {
  let component: FeaturesectionComponent;
  let fixture: ComponentFixture<FeaturesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
