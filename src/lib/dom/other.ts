import {
  DomElement,
  ChangeElement,
  ErrorElement,
  LoadElement
} from "./interface";
import { fromEvent, Observable } from "rxjs";

export function onAbort(ele: HTMLImageElement): Observable<Event> {
  return fromEvent(ele, "abort");
}

export function onBlur(ele: DomElement): Observable<Event> {
  return fromEvent(ele, "blur");
}
export function onFocus(ele: DomElement): Observable<Event> {
  return fromEvent(ele, "focus");
}
export function onChange(ele: ChangeElement): Observable<Event> {
  return fromEvent(ele, "change");
}
export function onResize(ele: DomElement): Observable<Event> {
  return fromEvent(ele, "resize");
}
export function onClick(ele: DomElement): Observable<Event> {
  return fromEvent(ele, "click");
}

export function onDblClick(ele: DomElement): Observable<Event> {
  return fromEvent(ele, "dblclick");
}

export function onError(ele: ErrorElement): Observable<Event> {
  return fromEvent(ele, "error");
}

export function onLoad(ele: LoadElement): Observable<Event> {
  return fromEvent(ele, "load");
}

export function onReset(ele: HTMLFormElement): Observable<Event> {
  return fromEvent(ele, "reset");
}

export function onSubmit(ele: HTMLFormElement): Observable<Event> {
  return fromEvent(ele, "submit");
}

export function onSelect(
  ele: HTMLInputElement | HTMLTextAreaElement
): Observable<Event> {
  return fromEvent(ele, "select");
}

export function onUnload(
  ele: HTMLBodyElement | HTMLFrameSetElement
): Observable<Event> {
  return fromEvent(ele, "unload");
}
