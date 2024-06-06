import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrickOverviewComponent } from './trick-overview.component';

describe('TrickOverviewComponent', () => {
  let component: TrickOverviewComponent;
  let fixture: ComponentFixture<TrickOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrickOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrickOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
