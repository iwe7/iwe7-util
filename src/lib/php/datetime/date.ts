export function date(format: string, timestamp: number) {
    let jsdate, f;
    const txtWords = [
        'Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur',
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const formatChr = /\\?(.?)/gi;
    const formatChrCb = function (t, s) {
        return f[t] ? f[t]() : s;
    };
    const _pad = function (n, c) {
        n = String(n);
        while (n.length < c) {
            n = '0' + n;
        }
        return n;
    };
    f = {
        // Day
        d: function () {
            return _pad(f.j(), 2);
        },
        D: function () {
            return f.l()
                .slice(0, 3);
        },
        j: function () {
            return jsdate.getDate();
        },
        l: function () {
            return txtWords[f.w()] + 'day';
        },
        N: function () {
            return f.w() || 7;
        },
        S: function () {
            const j: any = f.j();
            let i: any = j % 10;
            const _int: any = j % 100 / 10;
            if (i <= 3 && parseInt(_int, 10) === 1) {
                i = 0;
            }
            return ['st', 'nd', 'rd'][i - 1] || 'th';
        },
        w: function () {
            return jsdate.getDay();
        },
        z: function () {
            const a: any = new Date(f.Y(), f.n() - 1, f.j());
            const b: any = new Date(f.Y(), 0, 1);
            return Math.round((a - b) / 864e5);
        },
        W: function () {
            const a: any = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3);
            const b: any = new Date(a.getFullYear(), 0, 4);
            return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
        },
        F: function () {
            return txtWords[6 + f.n()];
        },
        m: function () {
            return _pad(f.n(), 2);
        },
        M: function () {
            return f.F()
                .slice(0, 3);
        },
        n: function () {
            return jsdate.getMonth() + 1;
        },
        t: function () {
            return (new Date(f.Y(), f.n(), 0))
                .getDate();
        },

        // Year
        L: function () {
            const j = f.Y();
            return j % 4 === 0 && j % 100 !== 0 || j % 400 === 0;
        },
        o: function () {
            // ISO-8601 year
            const n = f.n();
            const W = f.W();
            const Y = f.Y();
            return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
        },
        Y: function () {
            return jsdate.getFullYear();
        },
        y: function () {
            return f.Y()
                .toString()
                .slice(-2);
        },
        a: function () {
            return jsdate.getHours() > 11 ? 'pm' : 'am';
        },
        A: function () {
            return f.a()
                .toUpperCase();
        },
        B: function () {
            const H = jsdate.getUTCHours() * 36e2;
            const i = jsdate.getUTCMinutes() * 60;
            const s = jsdate.getUTCSeconds();
            return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
        },
        g: function () {
            return f.G() % 12 || 12;
        },
        G: function () {
            return jsdate.getHours();
        },
        h: function () {
            return _pad(f.g(), 2);
        },
        H: function () {
            return _pad(f.G(), 2);
        },
        i: function () {
            return _pad(jsdate.getMinutes(), 2);
        },
        s: function () {
            return _pad(jsdate.getSeconds(), 2);
        },
        u: function () {
            return _pad(jsdate.getMilliseconds() * 1000, 6);
        },
        e: function () {
            const msg = 'Not supported (see source code of date() for timezone on how to add support)';
            throw new Error(msg);
        },
        I: function () {
            const a: any = new Date(f.Y(), 0);
            const c = Date.UTC(f.Y(), 0);
            const b: any = new Date(f.Y(), 6);
            const d = Date.UTC(f.Y(), 6);
            return ((a - c) !== (b - d)) ? 1 : 0;
        },
        O: function () {
            const tzo = jsdate.getTimezoneOffset();
            const a = Math.abs(tzo);
            return (tzo > 0 ? '-' : '+') + _pad(Math.floor(a / 60) * 100 + a % 60, 4);
        },
        P: function () {
            const O = f.O();
            return (O.substr(0, 3) + ':' + O.substr(3, 2));
        },
        T: function () {
            return 'UTC';
        },
        Z: function () {
            return -jsdate.getTimezoneOffset() * 60;
        },
        c: function () {
            return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb);
        },
        r: function () {
            return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
        },
        U: function () {
            return jsdate / 1000 | 0;
        }
    };

    const _date = function (format, timestamp) {
        jsdate = (timestamp === undefined ? new Date()
            : (timestamp instanceof Date) ? new Date(timestamp)
                : new Date(timestamp * 1000)
        );
        return format.replace(formatChr, formatChrCb);
    };

    return _date(format, timestamp);
}
