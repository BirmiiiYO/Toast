'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var ReactDOM = require('react-dom');
var iconClose = require('@/assets/svg/iconClose.svg');
var iconError = require('@/assets/svg/iconError.svg');
var iconInfo = require('@/assets/svg/iconInfo.svg');
var iconSuccess = require('@/assets/svg/iconSuccess.svg');
var iconWarning = require('@/assets/svg/iconWarning.svg');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var iconClose__default = /*#__PURE__*/_interopDefaultLegacy(iconClose);
var iconError__default = /*#__PURE__*/_interopDefaultLegacy(iconError);
var iconInfo__default = /*#__PURE__*/_interopDefaultLegacy(iconInfo);
var iconSuccess__default = /*#__PURE__*/_interopDefaultLegacy(iconSuccess);
var iconWarning__default = /*#__PURE__*/_interopDefaultLegacy(iconWarning);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var ToastAnimation;
(function (ToastAnimation) {
    ToastAnimation["SCALE"] = "scale";
    ToastAnimation["MOVE"] = "move";
})(ToastAnimation || (ToastAnimation = {}));
var ToastMargin;
(function (ToastMargin) {
    ToastMargin["NONE"] = "none";
    ToastMargin["SMALL"] = "small";
    ToastMargin["MEDIUM"] = "medium";
    ToastMargin["LARGE"] = "large";
})(ToastMargin || (ToastMargin = {}));
var ToastPosition;
(function (ToastPosition) {
    ToastPosition["TOP_RIGHT"] = "topRight";
    ToastPosition["TOP_LEFT"] = "topLeft";
    ToastPosition["BOTTOM_RIGHT"] = "bottomRight";
    ToastPosition["BOTTOM_LEFT"] = "bottomLeft";
})(ToastPosition || (ToastPosition = {}));
var ToastMode;
(function (ToastMode) {
    ToastMode["INFO"] = "info";
    ToastMode["SUCCESS"] = "success";
    ToastMode["WARNING"] = "warning";
    ToastMode["ERROR"] = "error";
})(ToastMode || (ToastMode = {}));

var getImage = function (mode) {
    switch (mode) {
        case ToastMode.ERROR:
            return iconError__default["default"];
        case ToastMode.SUCCESS:
            return iconSuccess__default["default"];
        case ToastMode.INFO:
            return iconInfo__default["default"];
        case ToastMode.WARNING:
            return iconWarning__default["default"];
        default:
            return iconInfo__default["default"];
    }
};

var scale = styled.keyframes(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n 0% { transform: scale(0) }\n 100% {transform: scale(1) }\n"], ["\n 0% { transform: scale(0) }\n 100% {transform: scale(1) }\n"])));
var move = styled.keyframes(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n 0% { right: -120%; }\n 100% { right: 0%; }\n"], ["\n 0% { right: -120%; }\n 100% { right: 0%; }\n"])));
var setAnimation = function (animation) {
    if (animation === ToastAnimation.SCALE) {
        return scale;
    }
    if (animation === ToastAnimation.MOVE) {
        return move;
    }
};
var templateObject_1$3, templateObject_2$2;

var theme = {
    colors: {
        white: '#ffffff',
        info: '#9a40d3',
        success: '#37e29a',
        warning: '#f4e048',
        error: '#e25837',
    },
};

var setBgColor = function (mode, backgroundColor) {
    if (backgroundColor === void 0) { backgroundColor = ''; }
    if (backgroundColor) {
        return backgroundColor;
    }
    else {
        switch (mode) {
            case ToastMode.SUCCESS: {
                return theme.colors.success;
            }
            case ToastMode.WARNING: {
                return theme.colors.warning;
            }
            case ToastMode.ERROR: {
                return theme.colors.error;
            }
            default:
                return theme.colors.info;
        }
    }
};

var ToastInfo = styled__default["default"].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject([""], [""])));
var ToastBlock$1 = styled__default["default"].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\nalign-items: center;\nanimation-duration: 0.5s;\nanimation-name: ", ";\nbackground-color: ", ";\nborder-radius: 5px;\nbox-sizing: border-box;\ncolor: white;\ndisplay:flex;\njustify-content: start;\nmax-width: 300px;\nmin-height: 100px;\nposition:relative;\n"], ["\nalign-items: center;\nanimation-duration: 0.5s;\nanimation-name: ", ";\nbackground-color: ", ";\nborder-radius: 5px;\nbox-sizing: border-box;\ncolor: white;\ndisplay:flex;\njustify-content: start;\nmax-width: 300px;\nmin-height: 100px;\nposition:relative;\n"])), function (_a) {
    var animationType = _a.animationType;
    return setAnimation(animationType);
}, function (_a) {
    var mode = _a.mode, backgroundColor = _a.backgroundColor;
    return setBgColor(mode, backgroundColor);
});
var ToastIcon = styled__default["default"].img(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  height: 30px;\n  padding: 0 20px;\n  width: 30px;\n"], ["\n  height: 30px;\n  padding: 0 20px;\n  width: 30px;\n"])));
var ToastClose = styled__default["default"].img(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  cursor: pointer;\n  height: 20px;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 20px;\n"], ["\n  cursor: pointer;\n  height: 20px;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 20px;\n"])));
var ToastTitle = styled__default["default"].h1(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 24px;\n  margin: 0px;\n  overflow: hidden;\n  width: 200px;\n"], ["\n  font-size: 24px;\n  margin: 0px;\n  overflow: hidden;\n  width: 200px;\n"])));
var ToastDescription = styled__default["default"].span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 18px;\n  max-width: 200px;\n"], ["\n  font-size: 18px;\n  max-width: 200px;\n"])));
var templateObject_1$2, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5, templateObject_6;

var Toast$1 = function (_a) {
    var _b = _a.title, title = _b === void 0 ? 'Toast title' : _b, _c = _a.mode, mode = _c === void 0 ? 'info' : _c, _d = _a.description, description = _d === void 0 ? 'Toast description' : _d, backgroundColor = _a.backgroundColor, _e = _a.animationType, animationType = _e === void 0 ? ToastAnimation.SCALE : _e, onClose = _a.onClose;
    var onToastClose = function () {
        onClose();
    };
    return (jsxRuntime.jsxs(ToastBlock$1, __assign({ mode: mode, backgroundColor: backgroundColor, animationType: animationType }, { children: [jsxRuntime.jsx(ToastIcon, { src: getImage(mode) }), jsxRuntime.jsxs(ToastInfo, { children: [jsxRuntime.jsx(ToastTitle, { children: title }), jsxRuntime.jsx(ToastDescription, { children: description })] }), jsxRuntime.jsx(ToastClose, { onClick: onToastClose, src: iconClose__default["default"], alt: "close notification" })] })));
};

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function parse(uuid) {
  if (!validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35 (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = parse(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return stringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

v35('v3', 0x30, md5);

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

v35('v5', 0x50, sha1);

var useToastPortal = function () {
    var _a = react.useState(false), loaded = _a[0], setLoaded = _a[1];
    var portalId = react.useState("".concat(v4()))[0];
    react.useEffect(function () {
        var div = document.createElement('div');
        div.setAttribute('id', portalId);
        document.getElementsByTagName('body')[0].prepend(div);
        setLoaded(true);
        return function () {
            document
                .getElementsByTagName('body')[0]
                .removeChild(div);
        };
    }, [portalId]);
    return { loaded: loaded, portalId: portalId };
};

var Toast = /** @class */ (function () {
    function Toast() {
        var _this = this;
        this.getAllToasts = function () {
            return _this.toasts;
        };
        this.addToast = function (toast) {
            if (_this.toasts.length === 3) {
                _this.toasts.splice(0, 1, toast);
            }
            else {
                _this.toasts.push(toast);
            }
        };
        this.removeToast = function (toastId) {
            _this.toasts = _this.toasts.filter(function (toast) { return toast.id !== toastId; });
        };
        this.createToast = function (toastOptions) { return (__assign({ id: v4() }, toastOptions)); };
        if (typeof Toast.instance === 'object') {
            return Toast.instance;
        }
        this.toasts = [];
        Toast.instance = this;
        return this;
    }
    return Toast;
}());
var toastService = new Toast();

var setMargin = function (margin) {
    switch (margin) {
        case ToastMargin.LARGE: {
            return 24;
        }
        case ToastMargin.MEDIUM: {
            return 16;
        }
        case ToastMargin.SMALL: {
            return 8;
        }
        default:
            return 0;
    }
};

var setPosition = function (position) {
    switch (position) {
        case ToastPosition.TOP_LEFT:
            return styled.css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n        left: 10px;\n        top: 10px;\n      "], ["\n        left: 10px;\n        top: 10px;\n      "])));
        case ToastPosition.TOP_RIGHT:
            return styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        right: 10px;\n        top: 10px;\n      "], ["\n        right: 10px;\n        top: 10px;\n      "])));
        case ToastPosition.BOTTOM_LEFT:
            return styled.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        bottom: 10px;\n        left: 10px;\n      "], ["\n        bottom: 10px;\n        left: 10px;\n      "])));
        default:
            return styled.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        bottom: 10px;\n        right: 10px;\n      "], ["\n        bottom: 10px;\n        right: 10px;\n      "])));
    }
};
var templateObject_1$1, templateObject_2, templateObject_3, templateObject_4;

var ToastBlock = styled__default["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: ", "px;\n  position: fixed;\n  ", "\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: ", "px;\n  position: fixed;\n  ", "\n"])), function (_a) {
    var margin = _a.margin;
    return setMargin(margin);
}, function (_a) {
    var position = _a.position;
    return setPosition(position);
});
var templateObject_1;

var ToastContainer = react.forwardRef(function (_a, ref) {
    var _b = _a.autoClose, autoClose = _b === void 0 ? false : _b, _c = _a.autoCloseTime, autoCloseTime = _c === void 0 ? 3000 : _c, _d = _a.position, position = _d === void 0 ? ToastPosition.TOP_RIGHT : _d, _e = _a.margin, margin = _e === void 0 ? ToastMargin.NONE : _e;
    var toasts = toastService.toasts, removeToast = toastService.removeToast, getAllToasts = toastService.getAllToasts, createToast = toastService.createToast, addToast = toastService.addToast;
    var _f = useToastPortal(), loaded = _f.loaded, portalId = _f.portalId;
    var _g = react.useState(''), removingId = _g[0], setRemovingId = _g[1];
    var _h = react.useState(getAllToasts().length), toastsLength = _h[0], setToastsLength = _h[1];
    react.useEffect(function () {
        setToastsLength(toasts.length);
    }, [toasts.length]);
    react.useEffect(function () {
        if (autoClose && toasts.length) {
            var lastId_1 = toasts[toasts.length - 1].id;
            setTimeout(function () { return setRemovingId(lastId_1); }, autoCloseTime);
        }
    }, [toastsLength, autoClose, autoCloseTime, toasts]);
    react.useEffect(function () {
        if (removingId) {
            removeToast(removingId);
            setToastsLength(getAllToasts().length);
        }
    }, [removingId, setToastsLength, getAllToasts, removeToast]);
    react.useImperativeHandle(ref, function () { return ({
        addMessage: function (toast) {
            var newToast = createToast(toast);
            addToast(newToast);
            setToastsLength(toasts.length);
        },
    }); });
    var handleClose = function (id) { return function () {
        removeToast(id);
        setToastsLength(getAllToasts().length);
    }; };
    return loaded
        ? ReactDOM__default["default"].createPortal(jsxRuntime.jsx(ToastBlock, __assign({ position: position, autoClose: autoClose, autoCloseTime: autoCloseTime, margin: margin }, { children: toasts
                .map(function (_a) {
                var title = _a.title, id = _a.id, mode = _a.mode, description = _a.description, animationType = _a.animationType, backgroundColor = _a.backgroundColor;
                return (jsxRuntime.jsx(Toast$1, { title: title, mode: mode, description: description, backgroundColor: backgroundColor, animationType: animationType, onClose: handleClose(id) }, id));
            }) })), 
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.getElementById(portalId))
        : null;
});

var useToast = function () {
    var toastRef = react.useRef(null);
    var addToast = function (options) {
        if (toastRef.current) {
            toastRef.current.addMessage(__assign({}, options));
        }
    };
    return {
        toastRef: toastRef,
        addToast: addToast,
    };
};

exports.ToastContainer = ToastContainer;
exports.useToast = useToast;
//# sourceMappingURL=index.js.map
