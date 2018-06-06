export function isset() {
    const a = arguments;
    const l = a.length;
    let i = 0;

    if (l === 0) {
        throw new Error('Empty isset');
    }

    while (i !== l) {
        if (a[i] === undefined || a[i] === null) {
            return false;
        }
        i++;
    }
    return true;
}
