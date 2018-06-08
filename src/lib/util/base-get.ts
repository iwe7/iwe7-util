import { isset } from '../php/var/isset';
export const rxAccess = /[\[\]\.]+/;
export function baseGet(obj: any, nestedProp: any, createMissing?: any) {
    if (!isset(obj)) return {};
    const props = Array.isArray(nestedProp) ? nestedProp : nestedProp.split(rxAccess);

    let prev = null;
    let curr = obj;
    const path = [];

    for (let i = 0; i < props.length; i++) {
        const prop = props[i];
        if (prop.length === 0) continue;

        prev = curr;
        curr = curr[prop];
        path.push(prop);
        if (!isset(curr)) {
            if (createMissing) {
                prev[prop] = {};
                curr = prev[prop];
            } else {
                return {
                    path: path,
                };
            }
        }
    }

    return {
        value: curr,
        path: path,
    };
}
