import { DomElement } from "./interface";
import { Observable, fromEvent } from "rxjs";

export function onKeyDown(ele: DomElement): Observable<KeyboardEvent> {
  return fromEvent(ele, "keydown") as Observable<KeyboardEvent>;
}

export function onKeyPress(ele: DomElement): Observable<KeyboardEvent> {
  return fromEvent(ele, "keypress") as Observable<KeyboardEvent>;
}

export function onKeyUp(ele: DomElement): Observable<KeyboardEvent> {
  return fromEvent(ele, "keyup") as Observable<KeyboardEvent>;
}
