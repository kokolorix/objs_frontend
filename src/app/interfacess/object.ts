


export interface IValue {
    // value:object;
}

export interface IProperty {
    name:string;
    value:IValue;
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
