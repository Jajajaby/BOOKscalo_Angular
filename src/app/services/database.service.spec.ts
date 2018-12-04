import { async } from '@angular/core/testing';
import {DatabaseService} from './database.service';

describe('DatabaseService', () => {
  let service;


  const afs: any = {
    // mock properties here
  }

  beforeEach(() => {
    service = new DatabaseService(afs);
  });


  it('should run #getData()', async () => {
    // const result = getData(collection);
  });

  it('should run #getDataQuery()', async () => {
    // const result = getDataQuery(collection, query, operator, value);
  });

  it('should run #addDataIdCustom()', async () => {
    // const result = addDataIdCustom(collection, id, document);
  });

  it('should run #addData()', async () => {
    // const result = addData(collection, document);
  });

  it('should run #updateData()', async () => {
    // const result = updateData(collection, id, document);
  });

  it('should run #deleteData()', async () => {
    // const result = deleteData(collection, id);
  });

});
