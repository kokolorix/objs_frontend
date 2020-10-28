import { Injectable } from '@angular/core';
import { ObjectRef } from '../interfacess/object';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor() { }


  public getObjectHierarchy() : ObjectRef
  {
    return {
      name: 'Root',
      object: {
        id: '1',type:null,properties:[]
      },
      parent: null,
      children:[]
    };
  }
}
