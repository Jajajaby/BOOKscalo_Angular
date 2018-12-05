import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { throwError as _throw } from 'rxjs'; 
import { of as _of } from 'rxjs'; 

import {Component, Directive} from '@angular/core';
import {SearchComponent} from './search.component';
import {ActivatedRoute} from '@angular/router';
import {DatabaseService} from '../../services/database.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Injectable()
class MockDatabaseService { }

describe('SearchComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent
      ],
      imports: [
        FormsModule, ReactiveFormsModule
      ],
      providers: [
        ActivatedRoute,
        {provide: DatabaseService, useClass: MockDatabaseService},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });


  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });

  it('should run #searchBook()', async () => {
    // const result = component.searchBook(books, search);
  });

  it('should run #searchAuthor()', async () => {
    // const result = component.searchAuthor(books, search);
  });

  it('should run #searchOwner()', async () => {
    // const result = component.searchOwner(users, search);
  });

  it('should run #searchSidebar()', async () => {
    // const result = component.searchSidebar(books, input);
  });

});