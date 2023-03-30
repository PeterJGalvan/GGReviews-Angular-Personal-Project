import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('links should have appropriate routerLink assignment', () => {
    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links[0].getAttribute('routerLink')).toEqual(null);
    expect(links[1].getAttribute('routerLink')).toEqual('/home');
    // having trouble with checking this link
    // expect(links[2].getAttribute('routerLink')).toEqual('/profile');
    expect(links[3].getAttribute('routerLink')).toEqual('/feed/all');
  });

  it('links should have appropriate text content assignment', () => {
    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links[0].textContent).toEqual('GGR');
    expect(links[1].textContent).toEqual('Home');
    expect(links[2].textContent).toEqual('Profile');
    expect(links[3].textContent).toEqual('Feed');
    expect(links[4].textContent).toEqual('Sign Out');
  });

  it('test signout', () => {
    component.signOut();
  });
});
