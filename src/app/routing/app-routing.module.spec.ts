import { routes } from './app-routing.module';
import { FeedComponent } from '../feed/feed.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { GameComponent } from '../game/game.component';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegistrationComponent } from '../registration/registration.component';
import { SigninComponent } from '../signin/signin.component';

describe('app-routing.module', () => {
  it('should have a route for /feed', () => {
    let feedRoute = routes.find((route) => route.path == 'feed/:id');
    expect(feedRoute).toBeTruthy();
    expect(feedRoute?.component).toEqual(FeedComponent);
  });

  it('should have a route for /home', () => {
    let homeRoute = routes.find((route) => route.path == 'home');
    expect(HomeComponent).toBeTruthy();
    expect(homeRoute?.component).toEqual(HomeComponent);
  });

  it('should have a route for /register', () => {
    let registrationRoute = routes.find((route) => route.path == 'register');
    expect(RegistrationComponent).toBeTruthy();
    expect(registrationRoute?.component).toEqual(RegistrationComponent);
  });

  it('should have a route for /profile/:id', () => {
    let profileRoute = routes.find((route) => route.path == 'profile/:id');
    expect(ProfileComponent).toBeTruthy();
    expect(profileRoute?.component).toEqual(ProfileComponent);
  });

  it('should have a route for /', () => {
    let signInRoute = routes.find((route) => route.path == '');
    expect(SigninComponent).toBeTruthy();
    expect(signInRoute?.component).toEqual(SigninComponent);
  });

  it('should have a route for /forgotpassword', () => {
    let forgotPasswordRoute = routes.find(
      (route) => route.path == 'forgotpassword'
    );
    expect(ForgotPasswordComponent).toBeTruthy();
    expect(forgotPasswordRoute?.component).toEqual(ForgotPasswordComponent);
  });

  it('should have a route for /game/:id', () => {
    let gameRoute = routes.find((route) => route.path == 'game/:id');
    expect(GameComponent).toBeTruthy();
    expect(gameRoute?.component).toEqual(GameComponent);
  });
});
