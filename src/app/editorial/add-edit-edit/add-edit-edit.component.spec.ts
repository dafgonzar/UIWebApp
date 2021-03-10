import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEditComponent } from './add-edit-edit.component';

describe('AddEditEditComponent', () => {
  let component: AddEditEditComponent;
  let fixture: ComponentFixture<AddEditEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
