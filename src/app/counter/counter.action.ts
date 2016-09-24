import { BaseAction } from '../shared/models';

// Counter Actions
const PREFIX = '[Counter]';

export class IncrementCounterAction extends BaseAction {
  constructor(public amount: number) {
    super(`${PREFIX} Increment`);
  }
}

export class DecrementCounterAction extends BaseAction {
  constructor(public amount: number) {
    super(`${PREFIX} Decrement`);
  }
}

export class ResetCounterAction extends BaseAction {
  constructor() {
    super(`${PREFIX} Reset`);
  }
}
