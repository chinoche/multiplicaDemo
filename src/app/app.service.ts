import { Injectable } from '@angular/core';

export interface InternalStateType {
  [key: string]: any;
}

@Injectable()
export class AppService {

  public _state: InternalStateType = { };

  // already return a clone of the current state
  public get state() {
    return this._state = this._clone(this._state);
  }
  // never allow mutation
  public set state(value) {
    throw new Error('do not mutate the .state directly');
  }

  public get(prop?: any) {
    // use our state getter for the clone
    const state = Object.keys(this.state).length > 0 ? this.state : JSON.parse(localStorage.getItem('appState'));
    return state.hasOwnProperty(prop) ? state[prop] : null;
  }

  public set(prop: string, value: any) {
    // internally mutate our state
    let newState = this._state[prop] = value;
    localStorage.setItem('appState', JSON.stringify(this._state));
    return newState;
  }

  public destroy() {
    return new Promise((resolve) => {
      this._state = {};
      localStorage.removeItem('appState');
      resolve(true);
    });
  }

  private _clone(object: InternalStateType) {
    // simple object clone
    return JSON.parse(JSON.stringify( object ));
  }

}
