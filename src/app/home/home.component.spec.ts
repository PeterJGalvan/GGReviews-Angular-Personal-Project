import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.itemsChecked = [
      {
        filterType: 'genres',
        id: 'genres3',
        idForDB: '3',
        name: 'Adventure',
        slug: 'adventure',
      },
      {
        filterType: 'platforms',
        id: 'platforms18',
        idForDB: '18',
        name: 'PlayStation 4',
        slug: 'playstation4',
      },
    ];
    component.genres = [
      {
        filterType: 'genres',
        id: 'genres3',
        idForDB: '3',
        name: 'Adventure',
        slug: 'adventure',
      },
    ];

    component.platforms = [
      {
        filterType: 'platforms',
        id: 'platforms18',
        idForDB: '18',
        name: 'PlayStation 4',
        slug: 'playstation4',
      },
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test that displayTypeForFilterBar will toggle between display none and block', () => {
    component.displayTypeForFilterBar();

    const filterHeader = fixture.debugElement.query(
      By.css('#filterBarDiv')
    ).nativeElement;

    expect(getComputedStyle(filterHeader).display).toEqual('none');

    component.displayTypeForFilterBar();

    expect(getComputedStyle(filterHeader).display).toEqual('block');
  });

  it('Test that displayTypeForGenre will toggle between display block and none', () => {
    component.displayTypeForGenre();

    const genreHeader = fixture.debugElement.query(
      By.css('#genresDiv')
    ).nativeElement;

    expect(getComputedStyle(genreHeader).display).toEqual('block');

    component.displayTypeForGenre();

    expect(getComputedStyle(genreHeader).display).toEqual('none');
  });

  it('Test that displayTypeForPlatform will toggle between display block and none', () => {
    component.displayTypeForPlatform();

    const platformHeader = fixture.debugElement.query(
      By.css('#platformsDiv')
    ).nativeElement;

    expect(getComputedStyle(platformHeader).display).toEqual('block');

    component.displayTypeForPlatform();

    expect(getComputedStyle(platformHeader).display).toEqual('none');
  });

  it('Test that clear works', () => {
    component.clear();

    expect(component.itemsChecked).toHaveSize(0);
  });

  it('Test that checkBoxChanged works', () => {
    component.checkBoxChanged({
      filterType: 'platforms',
      id: 'platforms18',
      idForDB: '18',
      name: 'PlayStation 4',
      slug: 'playstation4',
    });

    expect(component.itemsChecked).toHaveSize(1);

    // can't add item to list

    // component.checkBoxChanged({
    //   filterType: 'platforms',
    //   id: 'platforms18',
    //   idForDB: '18',
    //   name: 'PlayStation 4',
    //   slug: 'playstation4',
    // });

    // expect(component.itemsChecked).toHaveSize(2);
  });

  // work in progress
  it('Test filter calls getGamesInfo', () => {
    spyOn(component, 'getGamesInfo');

    component.filter();

    expect(component.getGamesInfo).toHaveBeenCalled();
  });
});
