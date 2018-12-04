import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import {Component, Directive} from '@angular/core';
import {LoginComponent} from './login.component';
import { DatabaseService } from '../services/database.service';
import { AngularFireAuth } from 'angularfire2/auth';

// @Injectable();
// class MockRouter { navigate = jest.fn(); }

describe('LoginComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      providers: [
        AngularFireAuth,
        // {provide: Router, useClass: MockRouter},
        {provide: Router},
        DatabaseService,
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });


  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });

  it('should run #loginGoogle()', async () => {
    // const result = component.loginGoogle();
  });

  it('should run #loginUser()', async () => {
    // const result = component.loginUser();
  });

  it('should run #forgotPassword()', async () => {
    // const result = component.forgotPassword();
  });

});