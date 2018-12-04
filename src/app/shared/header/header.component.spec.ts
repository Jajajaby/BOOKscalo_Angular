import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import {Component, Directive} from '@angular/core';
import {HeaderComponent} from './header.component';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {DatabaseService} from '../../services/database.service';

// @Injectable();
// class MockRouter { navigate = jest.fn(); }

@Injectable()
class MockDatabaseService { }

describe('HeaderComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      providers: [
        // {provide: Router, useClass: MockRouter},
        {provide: Router},
        AngularFireAuth,
        {provide: DatabaseService, useClass: MockDatabaseService},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });


  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });

  it('should run #searchBook()', async () => {
    // const result = component.searchBook(input);
  });

  it('should run #logout()', async () => {
    // const result = component.logout();
  });

  it('should run #resetProfile()', async () => {
    // const result = component.resetProfile();
  });

});
