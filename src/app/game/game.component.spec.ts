import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GameComponent } from './game.component';
import { By } from '@angular/platform-browser';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;

    component.game = {
      backgroundImg:
        'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
      description: 'Would be a description here',
      id: 'game4200',
      idForDB: '4200',
      name: 'Portal 2',
      released: '2011-04-18',
      slug: 'portal-2',
    };
    component.reviewsFetched = true;
    component.personalReviewChecked = true;
    component.avgRatingCalculated = true;
    component.gameInfoFetched = true;

    component.reviews = [
      {
        descriptionValue: 'cake is real',
        gameName: 'Portal 2',
        gameSlug: 'portal-2',
        rating: 'Highly Recommend',
        ratingID: '5',
        userName: 'peterjgalvan',
      },
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test that displayTypeForDescription will toggle between display none and block', () => {
    component.displayTypeForDescription();

    const filterHeader = fixture.debugElement.query(
      By.css('#descriptionDiv')
    ).nativeElement;

    expect(getComputedStyle(filterHeader).display).toEqual('none');

    component.displayTypeForDescription();

    expect(getComputedStyle(filterHeader).display).toEqual('block');
  });

  it('Test that displayTypeForReviews will toggle between display none and block', () => {
    component.displayTypeForReviews();

    const filterHeader = fixture.debugElement.query(
      By.css('#reviewsDiv')
    ).nativeElement;

    expect(getComputedStyle(filterHeader).display).toEqual('none');

    component.displayTypeForReviews();

    expect(getComputedStyle(filterHeader).display).toEqual('block');
  });
});
