import test from "node:test";
import assert from "node:assert/strict";
import { EventEmitter } from "../src/index.js";
test("emits events",()=>{const e=new EventEmitter();let v=0;e.on("x",n=>v=n);assert.equal(e.emit("x",4),true);assert.equal(v,4);});
test("once fires once",()=>{const e=new EventEmitter();let n=0;e.once("x",()=>n++);e.emit("x");e.emit("x");assert.equal(n,1);});
test("off removes listeners",()=>{const e=new EventEmitter();const fn=()=>{};e.on("x",fn);assert.equal(e.off("x",fn),true);assert.equal(e.listenerCount("x"),0);});
