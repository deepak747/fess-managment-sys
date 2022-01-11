import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdeshComponent } from './studentdesh.component';

describe('StudentdeshComponent', () => {
  let component: StudentdeshComponent;
  let fixture: ComponentFixture<StudentdeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentdeshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
