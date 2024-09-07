import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurrComponent } from './utilisateurr.component';

describe('UtilisateurrComponent', () => {
  let component: UtilisateurrComponent;
  let fixture: ComponentFixture<UtilisateurrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
