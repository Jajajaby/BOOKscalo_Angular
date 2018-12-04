import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { throwError as _throw } from 'rxjs'; 
import { of as _of } from 'rxjs'; 

import {Component, Directive} from '@angular/core';
import {GlobalMessageComponent} from './global-message.component';
import {DateService} from '../../services/date.service';
import {DatabaseService} from '../../services/database.service';

@Injectable()
class MockDateService { }

@Injectable()
class MockDatabaseService { }

describe('GlobalMessageComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GlobalMessageComponent
      ],
      providers: [
        {provide: DateService, useClass: MockDateService},
        {provide: DatabaseService, useClass: MockDatabaseService},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(GlobalMessageComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });


  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });

  it('should run #sendMessage()', async () => {
    // const result = component.sendMessage();
  });

  it('should run #moveToDiscart()', async () => {
    // const result = component.moveToDiscart();
  });

  it('should run #showMessages()', async () => {
    // const result = component.showMessages();
  });

});