import { BaseAction } from '../core/models';
export declare class IncrementCounterAction extends BaseAction {
    amount: number;
    constructor(amount: number);
}
export declare class DecrementCounterAction extends BaseAction {
    amount: number;
    constructor(amount: number);
}
export declare class ResetCounterAction extends BaseAction {
    constructor();
}
