export class EventEmitter {
  on(event: PropertyKey, listener:(...args:any[])=>void):()=>boolean;
  once(event: PropertyKey, listener:(...args:any[])=>void):()=>boolean;
  off(event: PropertyKey, listener:(...args:any[])=>void):boolean;
  emit(event: PropertyKey, ...args:any[]):boolean;
  clear(event?:PropertyKey):void;
  listenerCount(event:PropertyKey):number;
}
