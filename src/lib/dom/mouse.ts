import { fromEvent, Observable } from "rxjs";
import { DomElement } from "./interface";

export function onMouseDown(ele: DomElement): Observable<MouseEvent> {
  return fromEvent(ele, "mousedown") as Observable<MouseEvent>;
}
export function onMouseMove(ele: DomElement): Observable<MouseEvent> {
  return fromEvent(ele, "mousemove") as Observable<MouseEvent>;
}
export function onMouseOut(ele: DomElement): Observable<MouseEvent> {
  return fromEvent(ele, "mouseout") as Observable<MouseEvent>;
}
export function onMouseOver(ele: DomElement): Observable<MouseEvent> {
  return fromEvent(ele, "mouseover") as Observable<MouseEvent>;
}
export function onMouseUp(ele: DomElement): Observable<MouseEvent> {
  return fromEvent(ele, "mouseup") as Observable<MouseEvent>;
}
