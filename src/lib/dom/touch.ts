import { fromEvent, Observable, of, merge } from "rxjs";
import { DomElement } from "./interface";
import { takeUntil, switchMap, takeLast, tap } from "rxjs/operators";
export function onTouchStart(ele: DomElement): Observable<TouchEvent> {
  return fromEvent(ele, "touchstart") as Observable<TouchEvent>;
}
export function onTouchEnd(ele: DomElement): Observable<TouchEvent> {
  return fromEvent(ele, "touchend") as Observable<TouchEvent>;
}
export function onTouchCancel(ele: DomElement): Observable<TouchEvent> {
  return fromEvent(ele, "touchcancel") as Observable<TouchEvent>;
}
export function onTouchMove(ele: DomElement): Observable<TouchEvent> {
  return fromEvent(ele, "touchmove") as Observable<TouchEvent>;
}

export function onTap(ele: DomElement, fn?: Function): Observable<TouchEvent> {
  const end$ = merge(onTouchCancel(ele), onTouchEnd(ele)).pipe(takeLast(1));
  return onTouchStart(ele).pipe(
    switchMap((res: TouchEvent) => {
      return of(res).pipe(
        takeUntil(
          end$.pipe(
            tap(res => {
              if (fn) {
                fn(res);
              }
            })
          )
        )
      );
    })
  );
}
