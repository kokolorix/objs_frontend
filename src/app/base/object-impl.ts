import { create } from 'domain';
import { from } from 'rxjs';
import {IValue, IProperty, IObject} from 'src/app/interfacess/object'

class ValueImpl<T> implements IValue {
    val:T;
//   str: string = '';
  constructor(v:T) {this.val= v;  }
    get str(): string {
        return typeof this.val === 'boolean' ? (this.val as boolean).toString() :
         typeof this.val === 'number' ? (this.val as number).toString() :
         typeof this.val === 'string' ? this.val :
         typeof this.val;
    }
    set str(v:string){
          this.val = v as T;
    }
    public toString(){ return this.str; }
}

type StringValue = ValueImpl<string>; 
type BooleanValue = ValueImpl<boolean>; 
type NumberValue = ValueImpl<number>; 

export class PropertyImpl implements IProperty {    
    name:string;
    value:IValue;   
    
    private constructor(name:string,value:IValue){
        this.name = name;
        this.value = value;
    }

    static create<T>(name: string, value: T): IProperty {
        return new PropertyImpl(name, new ValueImpl<T>(value));
    }
}
function cp<T>(name: string, value: T): IProperty {
    return PropertyImpl.create(name, value);
}


export class ObjectImpl implements IObject {
    id: string;
    type: IObject;
    properties:IProperty[];

    constructor(id: string, type: IObject = null, properties: IProperty[] = []) {
        this.id = id;
        this.type = type;
        this.properties = properties;
    }
}

// interface  Value {
//   str: string;
// }

const a: IValue = new ValueImpl<boolean>(true);
// console.log(a.str);
// const b: Value = new ValueImpl<number>(3.14);
// console.log(b.str);

// console.log('a: ' + a);
// console.log('b: ' +  b);

