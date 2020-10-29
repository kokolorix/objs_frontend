import { Injectable } from '@angular/core';
import { type } from 'os';
import { Object, ObjectRef } from '../interfacess/object';

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

const objectType : Object = {
  id:'b06997d3-ae5c-4393-abec-5136254139b1',
   type: null,
   properties: [
    {name:'Name',value:'ObjectType'}
   ]
}
const TYPES: Object[] = [
  {id:'b0a92cf9-d761-4c35-a78c-05ca70e706e9', type: objectType ,  properties:[{name:'Name',value:''}]}
  
];
function generateObject() :Object{
  return null;
}