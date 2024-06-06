import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrickGeneratorComponent } from './trick-generator.component';

describe('TrickGeneratorComponent', () => {
  let component: TrickGeneratorComponent;
  let fixture: ComponentFixture<TrickGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrickGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrickGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
