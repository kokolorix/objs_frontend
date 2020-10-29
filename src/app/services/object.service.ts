import { Injectable } from '@angular/core';
import { ObjectImpl } from '../base/object-impl';
import { IObject, IObjectRef } from '../interfacess/object';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor() { }


  public getObjectHierarchy() : IObjectRef
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

const objectType: IObject = new ObjectImpl('b06997d3-ae5c-4393-abec-5136254139b1');

const TYPES: IObject[] = [
  new ObjectImpl('b0a92cf9-d761-4c35-a78c-05ca70e706e9', objectType)

];
function generateObject() :IObject{
  return null;
}
