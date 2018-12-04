import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import {Component, Directive} from '@angular/core';
import {CardBookComponent} from './card-book.component';
import {DateService} from '../../services/date.service';
import {DatabaseService} from '../../services/database.service';

@Injectable()
class MockDateService { }

@Injectable()
class MockDatabaseService { }

describe('CardBookComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardBookComponent
      ],
      providers: [
        {provide: DateService, useClass: MockDateService},
        {provide: DatabaseService, useClass: MockDatabaseService},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(CardBookComponent);
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

  it('should run #reportUser()', async () => {
    // const result = component.reportUser(book_m);
  });

  it('should run #reportImage()', async () => {
    // const result = component.reportImage(book_m);
  });

});