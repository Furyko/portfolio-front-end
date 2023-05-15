import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraProjectComponent } from './extra-project.component';

describe('ExtraProjectComponent', () => {
  let component: ExtraProjectComponent;
  let fixture: ComponentFixture<ExtraProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
