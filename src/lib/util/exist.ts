
import { Injectable } from '@angular/core';
import { baseGet, rxAccess } from './base-get';
import { isset } from '../php/var/isset';
const NOOP = function () { };
@Injectable({
    providedIn: 'root'
})
export class ExistService {

    get(obj, nestedProp, defaultValue): any {
        const value = baseGet(obj, nestedProp).value;
        return isset(value) ? value : defaultValue;
    }

    set(obj, nestedProp, value, createMissing): boolean {
        const props = Array.isArray(nestedProp) ? nestedProp : nestedProp.split(rxAccess);
        const ownee = props.pop();
        const owner = baseGet(obj, props, createMissing).value;
        if (isset(owner)) {
            owner[ownee] = value;
            return true;
        } else {
            return false;
        }
    }

    detect(obj, nestedProp): any {
        const wrappedValue = baseGet(obj, nestedProp);
        if (!isset(wrappedValue.value)) {
            return wrappedValue.path;
        }
        return true;
    }

    invoke(obj, nestedMethod): Function {
        const props = Array.isArray(nestedMethod) ? nestedMethod : nestedMethod.split(rxAccess);
        const ownee = props.pop();
        const owner = baseGet(obj, props).value;
        if (isset(owner)) {
            const method = owner[ownee];
            if (typeof method === 'function') {
                return method.bind(owner);
            }
        }
        return NOOP;
    }
}
