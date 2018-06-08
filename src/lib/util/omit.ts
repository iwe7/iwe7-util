export function omit(obj: any, fields: string[]): any {
    const shallowCopy = {
        ...obj,
    };
    for (let i = 0; i < fields.length; i++) {
        const key = fields[i];
        delete shallowCopy[key];
    }
    return shallowCopy;
}
