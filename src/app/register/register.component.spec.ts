import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { throwError as _throw } from 'rxjs'; 
import { of as _of } from 'rxjs'; 

import {Component, Directive} from '@angular/core';
import {RegisterComponent} from './register.component';
import {DatabaseService} from '../services/database.service';
import {DateService} from '../services/date.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Injectable()
class MockDatabaseService { }

@Injectable()
class MockDateService { }

// @Injectable();
// class MockRouter { navigate = jest.fn(); }

describe('RegisterComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegisterComponent
      ],
      providers: [
        {provide: DatabaseService, useClass: MockDatabaseService},
        {provide: DateService, useClass: MockDateService},
        AngularFireAuth,
        // {provide: Router, useClass: MockRouter},
        {provide: Router},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });


  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });

  it('should run #areEquals()', async () => {
    // const result = component.areEquals(input1, input2);
  });

  it('should run #saveUser()', async () => {
    // const result = component.saveUser();
  });

  it('should run #addCategory()', async () => {
    // const result = component.addCategory(index);
  });

  it('should run #removeCategory()', async () => {
    // const result = component.removeCategory(index);
  });

  it('should run #getBackground()', async () => {
    // const result = component.getBackground(page);
  });

});