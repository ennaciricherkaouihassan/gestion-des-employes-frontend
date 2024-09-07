import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedashComponent } from './usedash.component';

describe('UsedashComponent', () => {
  let component: UsedashComponent;
  let fixture: ComponentFixture<UsedashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
