import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTwoComponent } from './user-two.component';

describe('UserTwoComponent', () => {
  let component: UserTwoComponent;
  let fixture: ComponentFixture<UserTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTwoComponent]
    });
    fixture = TestBed.createComponent(UserTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
