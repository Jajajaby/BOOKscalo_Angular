import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { throwError as _throw } from 'rxjs'; 
import { of as _of } from 'rxjs'; 

import {Component, Directive} from '@angular/core';
import {ChatsComponent} from './chats.component';
import {DatabaseService} from 'src/app/services/database.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {DateService} from '../../services/date.service';
import {ActivatedRoute} from '@angular/router';

@Injectable()
class MockDateService { }

describe('ChatsComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatsComponent
      ],
      providers: [
        DatabaseService,
        AngularFirestore,
        {provide: DateService, useClass: MockDateService},
        ActivatedRoute,
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(ChatsComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });


  it('should run #showMessages()', async () => {
    // const result = component.showMessages(key);
  });

  it('should run #sendMessage()', async () => {
    // const result = component.sendMessage(message, text_answer);
  });

  it('should run #transactionDone()', async () => {
    // const result = component.transactionDone();
  });

});
