export class EventEmitter {
  #events = new Map();
  on(event, listener){ if(typeof listener!=="function")throw new TypeError("Expected listener to be a function");const set=this.#events.get(event)??new Set();set.add(listener);this.#events.set(event,set);return()=>this.off(event,listener); }
  once(event, listener){ const off=this.on(event,(...args)=>{off();listener(...args);});return off; }
  off(event, listener){ const set=this.#events.get(event);if(!set)return false;const deleted=set.delete(listener);if(set.size===0)this.#events.delete(event);return deleted; }
  emit(event,...args){ const set=this.#events.get(event);if(!set)return false;for(const listener of [...set])listener(...args);return true; }
  clear(event){ if(arguments.length===0)this.#events.clear();else this.#events.delete(event); }
  listenerCount(event){ return this.#events.get(event)?.size ?? 0; }
}
