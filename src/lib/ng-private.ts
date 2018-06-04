import {
    ɵglobal as global,
    ɵisObservable as isObservable,
    ɵisPromise as isPromise,
    ɵstringify as stringify,
    ɵlooseIdentical as looseIdentical,
    ɵReflectionCapabilities as ReflectionCapabilities,
    ɵdevModeEqual as devModeEqual,
    Injectable
} from '@angular/core';


export function getGlobal(): any {
    return global;
}

import { ɵgetDOM as getDOM } from '@angular/platform-browser';


export { isObservable, isPromise, stringify, looseIdentical, ReflectionCapabilities, devModeEqual, getDOM };
