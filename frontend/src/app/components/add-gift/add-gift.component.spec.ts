import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGiftComponent } from './add-gift.component';

describe('AddGiftComponent', () => {
  let component: AddGiftComponent;
  let fixture: ComponentFixture<AddGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
