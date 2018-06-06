export function base64_encode(stringToEncode) {
    const encodeUTF8string = function (str) {
        return encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                const code: any = '0x' + p1;
                return String.fromCharCode(code);
            });
    };

    if (typeof window !== 'undefined') {
        if (typeof window.btoa !== 'undefined') {
            return window.btoa(encodeUTF8string(stringToEncode));
        }
    } else {
        return new Error('exit not browser');
    }

    const b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let o1;
    let o2;
    let o3;
    let h1;
    let h2;
    let h3;
    let h4;
    let bits;
    let i = 0;
    let ac = 0;
    let enc = '';
    const tmpArr = [];

    if (!stringToEncode) {
        return stringToEncode;
    }

    stringToEncode = encodeUTF8string(stringToEncode);

    do {
        o1 = stringToEncode.charCodeAt(i++);
        o2 = stringToEncode.charCodeAt(i++);
        o3 = stringToEncode.charCodeAt(i++);
        bits = o1 << 16 | o2 << 8 | o3;
        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;
        tmpArr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < stringToEncode.length);
    enc = tmpArr.join('');
    const r = stringToEncode.length % 3;
    return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
}
