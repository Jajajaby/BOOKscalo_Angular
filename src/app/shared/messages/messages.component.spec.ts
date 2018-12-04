// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { throwError as _throw } from 'rxjs'; 
import { of as _of } from 'rxjs'; 

import {Component, Directive} from '@angular/core';
import {MessagesComponent} from './messages.component';
import {DatabaseService} from '../../services/database.service';
import {Router} from '@angular/router';

@Injectable()
class MockDatabaseService { }
      
// @Injectable();
// class MockRouter { navigate = jest.fn(); }
      
describe('MessagesComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessagesComponent
      ],
      providers: [
        {provide: DatabaseService, useClass: MockDatabaseService},
        // {provide: Router, useClass: MockRouter},
        {provide: Router},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });
  
    
  it('should run #showMessage()', async () => {
    // const result = component.showMessage($key);
  });
        
});
