// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import {Component, Directive} from '@angular/core';
import {SidebarComponent} from './sidebar.component';
import {DatabaseService} from 'src/app/services/database.service';
import {Router} from '@angular/router';
import {SidebarService} from '../../services/sidebar.service';

// @Injectable();
// class MockRouter { navigate = jest.fn(); }
      
@Injectable()
class MockSidebarService { }
      
describe('SidebarComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidebarComponent
      ],
      providers: [
        DatabaseService,
        // {provide: Router, useClass: MockRouter},
        {provide: Router},
        {provide: SidebarService, useClass: MockSidebarService},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });
  
    
  it('should run #ngOnInit()', async () => {
    // const result = component.ngOnInit();
  });
        
  it('should run #searchCategory()', async () => {
    // const result = component.searchCategory(search);
  });
        
});
