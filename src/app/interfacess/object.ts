


export interface Value {
    value:object;
}

export interface Property {
    name:string;
    value:Value;
}

export interface Object {
    id: string;
    type: Object;
    properties:Property[];
}

export interface ObjectRef { 
    name: string;
    object: Object;
    parent: ObjectRef;
    children: ObjectRef[];
}
