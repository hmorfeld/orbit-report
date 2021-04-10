import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOrbitListComponent } from './app-orbit-list.component';

describe('AppOrbitListComponent', () => {
  let component: AppOrbitListComponent;
  let fixture: ComponentFixture<AppOrbitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppOrbitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOrbitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
