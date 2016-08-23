import { Action } from '@ngrx/store';
export declare class BaseAction implements Action {
    private _type;
    constructor(_type: string);
    type: string;
    payload: this;
}
