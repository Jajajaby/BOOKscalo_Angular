import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { throwError as _throw } from 'rxjs'; 
import { of as _of } from 'rxjs'; 

import {Component, Directive} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DatabaseService} from '../../services/database.service';
import {DateService} from '../../services/date.service';

@Injectable()
class MockDatabaseService { }

@Injectable()
class MockDateService { }

describe('DashboardComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent
      ],
      providers: [
        {provide: DatabaseService, useClass: MockDatabaseService},
        {provide: DateService, useClass: MockDateService},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });


  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });

  it('should run #addTask()', async () => {
    // const result = component.addTask();
  });

  it('should run #searchReportDate()', async () => {
    // const result = component.searchReportDate(date);
  });

});