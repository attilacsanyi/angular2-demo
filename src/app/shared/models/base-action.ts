import { Action } from '@ngrx/store';

export class BaseAction implements Action {

  type = this._type;
  payload = this;

  constructor(private _type: string) { }
}
