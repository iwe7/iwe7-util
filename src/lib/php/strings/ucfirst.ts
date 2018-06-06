export function ucfirst(str: string) {
    str += '';
    const f = str.charAt(0)
        .toUpperCase();
    return f + str.substr(1);
}
