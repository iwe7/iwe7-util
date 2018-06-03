
dom

| 名称            | 介绍                                                                   |                                            |
|---------------|----------------------------------------------------------------------|--------------------------------------------|
| onKeyDown     | ```onKeyDown(ele: DomElement): Observable<KeyboardEvent>;```         |                                            |
| onKeyPress    | ```onKeyPress(ele: DomElement): Observable<KeyboardEvent>;```        |                                            |
| onKeyUp       | ```onKeyUp(ele: DomElement): Observable<KeyboardEvent>;```           |                                            |
| onMouseDown   | ```onMouseDown(ele: DomElement): Observable<MouseEvent>;```          |                                            |
| onMouseMove   | ```onMouseMove(ele: DomElement): Observable<MouseEvent>;```          |                                            |
| onMouseOut    | ```onMouseOut(ele: DomElement): Observable<MouseEvent>;```           |                                            |
| onMouseOver   | ```onMouseOver(ele: DomElement): Observable<MouseEvent>;```          |                                            |
| onMouseUp     | ```onMouseUp(ele: DomElement): Observable<MouseEvent>;```            |                                            |
| onTouchStart  | ```onTouchStart(ele: DomElement): Observable<TouchEvent>;```         |                                            |
| onTouchEnd    | ```onTouchEnd(ele: DomElement): Observable<TouchEvent>;```           |                                            |
| onTouchCancel | ```onTouchCancel(ele: DomElement): Observable<TouchEvent>;```        |                                            |
| onTouchMove   | ```onTouchMove(ele: DomElement): Observable<TouchEvent>;```          |                                            |
| onTap         | ```onTap(ele: DomElement, fn?: Function): Observable<TouchEvent>;``` |                                            |
| onAbort       | ```onAbort(ele: HTMLImageElement): Observable<Event>```              |                                            |
| onBlur        | ```onBlur(ele: DomElement): Observable<Event>```                     |                                            |
| onFocus       | ```onFocus(ele: DomElement): Observable<Event>```                    |                                            |
| onChange      | ```onChange(ele: ChangeElement): Observable<Event>```                |                                            |
| onResize      | ```onResize(ele: DomElement): Observable<Event>```                   |                                            |
| onClick       | ```onClick(ele: DomElement): Observable<Event>```                    |                                            |
| onDblClick    | ```onDblClick(ele: DomElement): Observable<Event>```                 |                                            |
| onError       | ```onError(ele: ErrorElement): Observable<Event>```                  |                                            |
| onLoad        | ```onLoad(ele: LoadElement): Observable<Event>```                    |                                            |
| onReset       | ```onLoad(ele: HTMLFormElement): Observable<Event>```                |                                            |
| onSubmit      | ```onSubmit(ele: HTMLFormElement): Observable<Event>```              |                                            |
| onSelect      | ```onSelect(ele: HTMLInputElement                                    | HTMLTextAreaElement): Observable<Event>``` |
| onUnload      | ```onUnload(ele: HTMLBodyElement                                     | HTMLFrameSetElement): Observable<Event>``` |


- util

| 名称                   | 简介                                                                 |                              |      |
|----------------------|--------------------------------------------------------------------|------------------------------|------|
| toBoolean            | ```toBoolean(value: boolean                                        | string): boolean```          |      |
| toNumber             | ```toNumber<D>(value: number                                       | string, fallback: D): number | D``` |
| serializeQueryParams | ```serializeQueryParams(params: { [key: string]: any }): string``` |                              |      |
