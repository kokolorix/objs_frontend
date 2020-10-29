


export interface IValue {
    str: string;
}

export interface IProperty {
    name:string;
    value:IValue;
    // static create<T>(name: string, value: T): IProperty;
}

export interface IObject {
    id: string;
    type: IObject;
    properties:IProperty[];
}

export interface IObjectRef {
    name: string;
    object: IObject;
    parent: IObjectRef;
    children: IObjectRef[];
}

