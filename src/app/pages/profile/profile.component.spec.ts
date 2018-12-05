import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { throwError as _throw } from 'rxjs'; 
import { of as _of } from 'rxjs'; 

import {Component, Directive} from '@angular/core';
import {ProfileComponent} from './profile.component';
import { DatabaseService } from "../../services/database.service";
import {AngularFireAuth} from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// @Injectable()
// class MockRouter { navigate = jest.fn(); }

describe('ProfileComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent
      ],
      imports: [
        FormsModule, ReactiveFormsModule
      ],
      providers: [
        DatabaseService,
        AngularFireAuth,
        // {provide: Router, useClass: MockRouter},
        {provide: Router},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });


  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });

  it('should run #updateProfile()', async () => {
    // const result = component.updateProfile();
  });

  it('should run #addPreference()', async () => {
    // const result = component.addPreference();
  });

  it('should run #deleteAccount()', async () => {
    // const result = component.deleteAccount();
  });

  it('should run #deletePreference()', async () => {
    // const result = component.deletePreference(index);
  });

  it('should run #uploadFile()', async () => {
    // const result = component.uploadFile(event);
  });

  it('should run #resetUser()', async () => {
    // const result = component.resetUser();
  });

});
