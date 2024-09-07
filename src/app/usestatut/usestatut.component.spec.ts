import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatutComponent } from './usestatut.component';

describe('UsestatutComponent', () => {
  let component: UserStatutComponent;
  let fixture: ComponentFixture<UserStatutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStatutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
