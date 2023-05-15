import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraProjectsComponent } from './extra-projects.component';

describe('ExtraProjectsComponent', () => {
  let component: ExtraProjectsComponent;
  let fixture: ComponentFixture<ExtraProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
