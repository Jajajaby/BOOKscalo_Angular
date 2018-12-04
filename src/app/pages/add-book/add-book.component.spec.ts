import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router'; 
import { Observable } from 'rxjs';
import { throwError as _throw } from 'rxjs'; 
import { of as _of } from 'rxjs'; 

import {Component, Directive} from '@angular/core';
import {AddBookComponent} from './add-book.component';

import { DatabaseService } from "../../services/database.service";
import { DateService } from 'src/app/services/date.service';

// @Injectable()
// class MockRouter { navigate = jest.fn(); }

describe('AddBookComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddBookComponent
      ],
      providers: [
        DatabaseService,
        DateService,
        // {provide: Router, useClass: MockRouter},
        {provide: Router},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });


  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });

  it('should run #saveBook()', async () => {
    // const result = component.saveBook();
  });

  it('should run #uploadFile()', async () => {
    // const result = component.uploadFile(event);
  });

  it('should run #addCategory()', async () => {
    // const result = component.addCategory(index);
  });

  it('should run #removeCategory()', async () => {
    // const result = component.removeCategory(index);
  });

});