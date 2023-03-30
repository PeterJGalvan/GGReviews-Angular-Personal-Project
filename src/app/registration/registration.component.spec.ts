import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [AppRoutingModule, FormsModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing sign up function to fail', () => {
    component.signUp();

    expect(component.isConfirm).toBeFalse();
  });

  it('Testing confirm sign up function to fail', fakeAsync(() => {
    component.confirmSignUp();

    tick();

    expect(component.loading).toBeFalse();
  }));
});
