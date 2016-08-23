import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { AppState } from '../core/states';
export declare class CounterComponent implements OnInit {
    private _store;
    counter: Observable<number>;
    amount: number;
    constructor(_store: Store<AppState>);
    ngOnInit(): void;
    increment(): void;
    decrement(): void;
    reset(): void;
}
