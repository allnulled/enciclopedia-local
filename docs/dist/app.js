/*!
 * Socket.IO v4.8.1
 * (c) 2014-2024 Guillermo Rauch
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.io = factory());
})(this, (function () { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
  }
  function _isNativeFunction(t) {
    try {
      return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
      return "function" == typeof t;
    }
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return _wrapNativeSuper = function (t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return Wrapper.prototype = Object.create(t.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), _setPrototypeOf(Wrapper, t);
    }, _wrapNativeSuper(t);
  }

  var PACKET_TYPES = Object.create(null); // no Map = no polyfill
  PACKET_TYPES["open"] = "0";
  PACKET_TYPES["close"] = "1";
  PACKET_TYPES["ping"] = "2";
  PACKET_TYPES["pong"] = "3";
  PACKET_TYPES["message"] = "4";
  PACKET_TYPES["upgrade"] = "5";
  PACKET_TYPES["noop"] = "6";
  var PACKET_TYPES_REVERSE = Object.create(null);
  Object.keys(PACKET_TYPES).forEach(function (key) {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
  });
  var ERROR_PACKET = {
    type: "error",
    data: "parser error"
  };

  var withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
  var withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
  // ArrayBuffer.isView method is not defined in IE10
  var isView$1 = function isView(obj) {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
  };
  var encodePacket = function encodePacket(_ref, supportsBinary, callback) {
    var type = _ref.type,
      data = _ref.data;
    if (withNativeBlob$1 && data instanceof Blob) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(data, callback);
      }
    } else if (withNativeArrayBuffer$2 && (data instanceof ArrayBuffer || isView$1(data))) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(new Blob([data]), callback);
      }
    }
    // plain string
    return callback(PACKET_TYPES[type] + (data || ""));
  };
  var encodeBlobAsBase64 = function encodeBlobAsBase64(data, callback) {
    var fileReader = new FileReader();
    fileReader.onload = function () {
      var content = fileReader.result.split(",")[1];
      callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
  };
  function toArray(data) {
    if (data instanceof Uint8Array) {
      return data;
    } else if (data instanceof ArrayBuffer) {
      return new Uint8Array(data);
    } else {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
  }
  var TEXT_ENCODER;
  function encodePacketToBinary(packet, callback) {
    if (withNativeBlob$1 && packet.data instanceof Blob) {
      return packet.data.arrayBuffer().then(toArray).then(callback);
    } else if (withNativeArrayBuffer$2 && (packet.data instanceof ArrayBuffer || isView$1(packet.data))) {
      return callback(toArray(packet.data));
    }
    encodePacket(packet, false, function (encoded) {
      if (!TEXT_ENCODER) {
        TEXT_ENCODER = new TextEncoder();
      }
      callback(TEXT_ENCODER.encode(encoded));
    });
  }

  // imported from https://github.com/socketio/base64-arraybuffer
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  // Use a lookup table to find the index.
  var lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup$1[chars.charCodeAt(i)] = i;
  }
  var decode$1 = function decode(base64) {
    var bufferLength = base64.length * 0.75,
      len = base64.length,
      i,
      p = 0,
      encoded1,
      encoded2,
      encoded3,
      encoded4;
    if (base64[base64.length - 1] === '=') {
      bufferLength--;
      if (base64[base64.length - 2] === '=') {
        bufferLength--;
      }
    }
    var arraybuffer = new ArrayBuffer(bufferLength),
      bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
      encoded1 = lookup$1[base64.charCodeAt(i)];
      encoded2 = lookup$1[base64.charCodeAt(i + 1)];
      encoded3 = lookup$1[base64.charCodeAt(i + 2)];
      encoded4 = lookup$1[base64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
  };

  var withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
  var decodePacket = function decodePacket(encodedPacket, binaryType) {
    if (typeof encodedPacket !== "string") {
      return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
      };
    }
    var type = encodedPacket.charAt(0);
    if (type === "b") {
      return {
        type: "message",
        data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
      };
    }
    var packetType = PACKET_TYPES_REVERSE[type];
    if (!packetType) {
      return ERROR_PACKET;
    }
    return encodedPacket.length > 1 ? {
      type: PACKET_TYPES_REVERSE[type],
      data: encodedPacket.substring(1)
    } : {
      type: PACKET_TYPES_REVERSE[type]
    };
  };
  var decodeBase64Packet = function decodeBase64Packet(data, binaryType) {
    if (withNativeArrayBuffer$1) {
      var decoded = decode$1(data);
      return mapBinary(decoded, binaryType);
    } else {
      return {
        base64: true,
        data: data
      }; // fallback for old browsers
    }
  };
  var mapBinary = function mapBinary(data, binaryType) {
    switch (binaryType) {
      case "blob":
        if (data instanceof Blob) {
          // from WebSocket + binaryType "blob"
          return data;
        } else {
          // from HTTP long-polling or WebTransport
          return new Blob([data]);
        }
      case "arraybuffer":
      default:
        if (data instanceof ArrayBuffer) {
          // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
          return data;
        } else {
          // from WebTransport (Uint8Array)
          return data.buffer;
        }
    }
  };

  var SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
  var encodePayload = function encodePayload(packets, callback) {
    // some packets may be added to the array while encoding, so the initial length must be saved
    var length = packets.length;
    var encodedPackets = new Array(length);
    var count = 0;
    packets.forEach(function (packet, i) {
      // force base64 encoding for binary packets
      encodePacket(packet, false, function (encodedPacket) {
        encodedPackets[i] = encodedPacket;
        if (++count === length) {
          callback(encodedPackets.join(SEPARATOR));
        }
      });
    });
  };
  var decodePayload = function decodePayload(encodedPayload, binaryType) {
    var encodedPackets = encodedPayload.split(SEPARATOR);
    var packets = [];
    for (var i = 0; i < encodedPackets.length; i++) {
      var decodedPacket = decodePacket(encodedPackets[i], binaryType);
      packets.push(decodedPacket);
      if (decodedPacket.type === "error") {
        break;
      }
    }
    return packets;
  };
  function createPacketEncoderStream() {
    return new TransformStream({
      transform: function transform(packet, controller) {
        encodePacketToBinary(packet, function (encodedPacket) {
          var payloadLength = encodedPacket.length;
          var header;
          // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
          if (payloadLength < 126) {
            header = new Uint8Array(1);
            new DataView(header.buffer).setUint8(0, payloadLength);
          } else if (payloadLength < 65536) {
            header = new Uint8Array(3);
            var view = new DataView(header.buffer);
            view.setUint8(0, 126);
            view.setUint16(1, payloadLength);
          } else {
            header = new Uint8Array(9);
            var _view = new DataView(header.buffer);
            _view.setUint8(0, 127);
            _view.setBigUint64(1, BigInt(payloadLength));
          }
          // first bit indicates whether the payload is plain text (0) or binary (1)
          if (packet.data && typeof packet.data !== "string") {
            header[0] |= 0x80;
          }
          controller.enqueue(header);
          controller.enqueue(encodedPacket);
        });
      }
    });
  }
  var TEXT_DECODER;
  function totalLength(chunks) {
    return chunks.reduce(function (acc, chunk) {
      return acc + chunk.length;
    }, 0);
  }
  function concatChunks(chunks, size) {
    if (chunks[0].length === size) {
      return chunks.shift();
    }
    var buffer = new Uint8Array(size);
    var j = 0;
    for (var i = 0; i < size; i++) {
      buffer[i] = chunks[0][j++];
      if (j === chunks[0].length) {
        chunks.shift();
        j = 0;
      }
    }
    if (chunks.length && j < chunks[0].length) {
      chunks[0] = chunks[0].slice(j);
    }
    return buffer;
  }
  function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) {
      TEXT_DECODER = new TextDecoder();
    }
    var chunks = [];
    var state = 0 /* State.READ_HEADER */;
    var expectedLength = -1;
    var isBinary = false;
    return new TransformStream({
      transform: function transform(chunk, controller) {
        chunks.push(chunk);
        while (true) {
          if (state === 0 /* State.READ_HEADER */) {
            if (totalLength(chunks) < 1) {
              break;
            }
            var header = concatChunks(chunks, 1);
            isBinary = (header[0] & 0x80) === 0x80;
            expectedLength = header[0] & 0x7f;
            if (expectedLength < 126) {
              state = 3 /* State.READ_PAYLOAD */;
            } else if (expectedLength === 126) {
              state = 1 /* State.READ_EXTENDED_LENGTH_16 */;
            } else {
              state = 2 /* State.READ_EXTENDED_LENGTH_64 */;
            }
          } else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */) {
            if (totalLength(chunks) < 2) {
              break;
            }
            var headerArray = concatChunks(chunks, 2);
            expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
            state = 3 /* State.READ_PAYLOAD */;
          } else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */) {
            if (totalLength(chunks) < 8) {
              break;
            }
            var _headerArray = concatChunks(chunks, 8);
            var view = new DataView(_headerArray.buffer, _headerArray.byteOffset, _headerArray.length);
            var n = view.getUint32(0);
            if (n > Math.pow(2, 53 - 32) - 1) {
              // the maximum safe integer in JavaScript is 2^53 - 1
              controller.enqueue(ERROR_PACKET);
              break;
            }
            expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
            state = 3 /* State.READ_PAYLOAD */;
          } else {
            if (totalLength(chunks) < expectedLength) {
              break;
            }
            var data = concatChunks(chunks, expectedLength);
            controller.enqueue(decodePacket(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
            state = 0 /* State.READ_HEADER */;
          }
          if (expectedLength === 0 || expectedLength > maxPayload) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
        }
      }
    });
  }
  var protocol$1 = 4;

  /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */

  function Emitter(obj) {
    if (obj) return mixin(obj);
  }

  /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */

  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }

  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
  };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.once = function (event, fn) {
    function on() {
      this.off(event, on);
      fn.apply(this, arguments);
    }
    on.fn = fn;
    this.on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};

    // all
    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    }

    // specific event
    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this;

    // remove all handlers
    if (1 == arguments.length) {
      delete this._callbacks['$' + event];
      return this;
    }

    // remove specific handler
    var cb;
    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];
      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }

    // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.
    if (callbacks.length === 0) {
      delete this._callbacks['$' + event];
    }
    return this;
  };

  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */

  Emitter.prototype.emit = function (event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1),
      callbacks = this._callbacks['$' + event];
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }
    return this;
  };

  // alias used for reserved events (protected method)
  Emitter.prototype.emitReserved = Emitter.prototype.emit;

  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */

  Emitter.prototype.listeners = function (event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
  };

  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */

  Emitter.prototype.hasListeners = function (event) {
    return !!this.listeners(event).length;
  };

  var nextTick = function () {
    var isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
      return function (cb) {
        return Promise.resolve().then(cb);
      };
    } else {
      return function (cb, setTimeoutFn) {
        return setTimeoutFn(cb, 0);
      };
    }
  }();
  var globalThisShim = function () {
    if (typeof self !== "undefined") {
      return self;
    } else if (typeof window !== "undefined") {
      return window;
    } else {
      return Function("return this")();
    }
  }();
  var defaultBinaryType = "arraybuffer";
  function createCookieJar() {}

  function pick(obj) {
    for (var _len = arguments.length, attr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      attr[_key - 1] = arguments[_key];
    }
    return attr.reduce(function (acc, k) {
      if (obj.hasOwnProperty(k)) {
        acc[k] = obj[k];
      }
      return acc;
    }, {});
  }
  // Keep a reference to the real timeout functions so they can be used when overridden
  var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
  var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
  function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
      obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
      obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
    } else {
      obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
      obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
    }
  }
  // base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
  var BASE64_OVERHEAD = 1.33;
  // we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
  function byteLength(obj) {
    if (typeof obj === "string") {
      return utf8Length(obj);
    }
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
  }
  function utf8Length(str) {
    var c = 0,
      length = 0;
    for (var i = 0, l = str.length; i < l; i++) {
      c = str.charCodeAt(i);
      if (c < 0x80) {
        length += 1;
      } else if (c < 0x800) {
        length += 2;
      } else if (c < 0xd800 || c >= 0xe000) {
        length += 3;
      } else {
        i++;
        length += 4;
      }
    }
    return length;
  }
  /**
   * Generates a random 8-characters string.
   */
  function randomString() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
  }

  // imported from https://github.com/galkn/querystring
  /**
   * Compiles a querystring
   * Returns string representation of the object
   *
   * @param {Object}
   * @api private
   */
  function encode(obj) {
    var str = '';
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (str.length) str += '&';
        str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
      }
    }
    return str;
  }
  /**
   * Parses a simple querystring into an object
   *
   * @param {String} qs
   * @api private
   */
  function decode(qs) {
    var qry = {};
    var pairs = qs.split('&');
    for (var i = 0, l = pairs.length; i < l; i++) {
      var pair = pairs[i].split('=');
      qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
  }

  var TransportError = /*#__PURE__*/function (_Error) {
    function TransportError(reason, description, context) {
      var _this;
      _this = _Error.call(this, reason) || this;
      _this.description = description;
      _this.context = context;
      _this.type = "TransportError";
      return _this;
    }
    _inheritsLoose(TransportError, _Error);
    return TransportError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  var Transport = /*#__PURE__*/function (_Emitter) {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    function Transport(opts) {
      var _this2;
      _this2 = _Emitter.call(this) || this;
      _this2.writable = false;
      installTimerFunctions(_this2, opts);
      _this2.opts = opts;
      _this2.query = opts.query;
      _this2.socket = opts.socket;
      _this2.supportsBinary = !opts.forceBase64;
      return _this2;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */
    _inheritsLoose(Transport, _Emitter);
    var _proto = Transport.prototype;
    _proto.onError = function onError(reason, description, context) {
      _Emitter.prototype.emitReserved.call(this, "error", new TransportError(reason, description, context));
      return this;
    }
    /**
     * Opens the transport.
     */;
    _proto.open = function open() {
      this.readyState = "opening";
      this.doOpen();
      return this;
    }
    /**
     * Closes the transport.
     */;
    _proto.close = function close() {
      if (this.readyState === "opening" || this.readyState === "open") {
        this.doClose();
        this.onClose();
      }
      return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */;
    _proto.send = function send(packets) {
      if (this.readyState === "open") {
        this.write(packets);
      }
    }
    /**
     * Called upon open
     *
     * @protected
     */;
    _proto.onOpen = function onOpen() {
      this.readyState = "open";
      this.writable = true;
      _Emitter.prototype.emitReserved.call(this, "open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */;
    _proto.onData = function onData(data) {
      var packet = decodePacket(data, this.socket.binaryType);
      this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */;
    _proto.onPacket = function onPacket(packet) {
      _Emitter.prototype.emitReserved.call(this, "packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */;
    _proto.onClose = function onClose(details) {
      this.readyState = "closed";
      _Emitter.prototype.emitReserved.call(this, "close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */;
    _proto.pause = function pause(onPause) {};
    _proto.createUri = function createUri(schema) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
    };
    _proto._hostname = function _hostname() {
      var hostname = this.opts.hostname;
      return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    };
    _proto._port = function _port() {
      if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
        return ":" + this.opts.port;
      } else {
        return "";
      }
    };
    _proto._query = function _query(query) {
      var encodedQuery = encode(query);
      return encodedQuery.length ? "?" + encodedQuery : "";
    };
    return Transport;
  }(Emitter);

  var Polling = /*#__PURE__*/function (_Transport) {
    function Polling() {
      var _this;
      _this = _Transport.apply(this, arguments) || this;
      _this._polling = false;
      return _this;
    }
    _inheritsLoose(Polling, _Transport);
    var _proto = Polling.prototype;
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
    _proto.doOpen = function doOpen() {
      this._poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */;
    _proto.pause = function pause(onPause) {
      var _this2 = this;
      this.readyState = "pausing";
      var pause = function pause() {
        _this2.readyState = "paused";
        onPause();
      };
      if (this._polling || !this.writable) {
        var total = 0;
        if (this._polling) {
          total++;
          this.once("pollComplete", function () {
            --total || pause();
          });
        }
        if (!this.writable) {
          total++;
          this.once("drain", function () {
            --total || pause();
          });
        }
      } else {
        pause();
      }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */;
    _proto._poll = function _poll() {
      this._polling = true;
      this.doPoll();
      this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */;
    _proto.onData = function onData(data) {
      var _this3 = this;
      var callback = function callback(packet) {
        // if its the first message we consider the transport open
        if ("opening" === _this3.readyState && packet.type === "open") {
          _this3.onOpen();
        }
        // if its a close packet, we close the ongoing requests
        if ("close" === packet.type) {
          _this3.onClose({
            description: "transport closed by the server"
          });
          return false;
        }
        // otherwise bypass onData and handle the message
        _this3.onPacket(packet);
      };
      // decode payload
      decodePayload(data, this.socket.binaryType).forEach(callback);
      // if an event did not trigger closing
      if ("closed" !== this.readyState) {
        // if we got data we're not polling
        this._polling = false;
        this.emitReserved("pollComplete");
        if ("open" === this.readyState) {
          this._poll();
        }
      }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */;
    _proto.doClose = function doClose() {
      var _this4 = this;
      var close = function close() {
        _this4.write([{
          type: "close"
        }]);
      };
      if ("open" === this.readyState) {
        close();
      } else {
        // in case we're trying to close while
        // handshaking is in progress (GH-164)
        this.once("open", close);
      }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */;
    _proto.write = function write(packets) {
      var _this5 = this;
      this.writable = false;
      encodePayload(packets, function (data) {
        _this5.doWrite(data, function () {
          _this5.writable = true;
          _this5.emitReserved("drain");
        });
      });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */;
    _proto.uri = function uri() {
      var schema = this.opts.secure ? "https" : "http";
      var query = this.query || {};
      // cache busting is forced
      if (false !== this.opts.timestampRequests) {
        query[this.opts.timestampParam] = randomString();
      }
      if (!this.supportsBinary && !query.sid) {
        query.b64 = 1;
      }
      return this.createUri(schema, query);
    };
    return _createClass(Polling, [{
      key: "name",
      get: function get() {
        return "polling";
      }
    }]);
  }(Transport);

  // imported from https://github.com/component/has-cors
  var value = false;
  try {
    value = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
  } catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
  }
  var hasCORS = value;

  function empty() {}
  var BaseXHR = /*#__PURE__*/function (_Polling) {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */
    function BaseXHR(opts) {
      var _this;
      _this = _Polling.call(this, opts) || this;
      if (typeof location !== "undefined") {
        var isSSL = "https:" === location.protocol;
        var port = location.port;
        // some user agents have empty `location.port`
        if (!port) {
          port = isSSL ? "443" : "80";
        }
        _this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      }
      return _this;
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */
    _inheritsLoose(BaseXHR, _Polling);
    var _proto = BaseXHR.prototype;
    _proto.doWrite = function doWrite(data, fn) {
      var _this2 = this;
      var req = this.request({
        method: "POST",
        data: data
      });
      req.on("success", fn);
      req.on("error", function (xhrStatus, context) {
        _this2.onError("xhr post error", xhrStatus, context);
      });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */;
    _proto.doPoll = function doPoll() {
      var _this3 = this;
      var req = this.request();
      req.on("data", this.onData.bind(this));
      req.on("error", function (xhrStatus, context) {
        _this3.onError("xhr poll error", xhrStatus, context);
      });
      this.pollXhr = req;
    };
    return BaseXHR;
  }(Polling);
  var Request = /*#__PURE__*/function (_Emitter) {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */
    function Request(createRequest, uri, opts) {
      var _this4;
      _this4 = _Emitter.call(this) || this;
      _this4.createRequest = createRequest;
      installTimerFunctions(_this4, opts);
      _this4._opts = opts;
      _this4._method = opts.method || "GET";
      _this4._uri = uri;
      _this4._data = undefined !== opts.data ? opts.data : null;
      _this4._create();
      return _this4;
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */
    _inheritsLoose(Request, _Emitter);
    var _proto2 = Request.prototype;
    _proto2._create = function _create() {
      var _this5 = this;
      var _a;
      var opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
      opts.xdomain = !!this._opts.xd;
      var xhr = this._xhr = this.createRequest(opts);
      try {
        xhr.open(this._method, this._uri, true);
        try {
          if (this._opts.extraHeaders) {
            // @ts-ignore
            xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
            for (var i in this._opts.extraHeaders) {
              if (this._opts.extraHeaders.hasOwnProperty(i)) {
                xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
              }
            }
          }
        } catch (e) {}
        if ("POST" === this._method) {
          try {
            xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (e) {}
        }
        try {
          xhr.setRequestHeader("Accept", "*/*");
        } catch (e) {}
        (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
        // ie6 check
        if ("withCredentials" in xhr) {
          xhr.withCredentials = this._opts.withCredentials;
        }
        if (this._opts.requestTimeout) {
          xhr.timeout = this._opts.requestTimeout;
        }
        xhr.onreadystatechange = function () {
          var _a;
          if (xhr.readyState === 3) {
            (_a = _this5._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(
            // @ts-ignore
            xhr.getResponseHeader("set-cookie"));
          }
          if (4 !== xhr.readyState) return;
          if (200 === xhr.status || 1223 === xhr.status) {
            _this5._onLoad();
          } else {
            // make sure the `error` event handler that's user-set
            // does not throw in the same tick and gets caught here
            _this5.setTimeoutFn(function () {
              _this5._onError(typeof xhr.status === "number" ? xhr.status : 0);
            }, 0);
          }
        };
        xhr.send(this._data);
      } catch (e) {
        // Need to defer since .create() is called directly from the constructor
        // and thus the 'error' event can only be only bound *after* this exception
        // occurs.  Therefore, also, we cannot throw here at all.
        this.setTimeoutFn(function () {
          _this5._onError(e);
        }, 0);
        return;
      }
      if (typeof document !== "undefined") {
        this._index = Request.requestsCount++;
        Request.requests[this._index] = this;
      }
    }
    /**
     * Called upon error.
     *
     * @private
     */;
    _proto2._onError = function _onError(err) {
      this.emitReserved("error", err, this._xhr);
      this._cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */;
    _proto2._cleanup = function _cleanup(fromError) {
      if ("undefined" === typeof this._xhr || null === this._xhr) {
        return;
      }
      this._xhr.onreadystatechange = empty;
      if (fromError) {
        try {
          this._xhr.abort();
        } catch (e) {}
      }
      if (typeof document !== "undefined") {
        delete Request.requests[this._index];
      }
      this._xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */;
    _proto2._onLoad = function _onLoad() {
      var data = this._xhr.responseText;
      if (data !== null) {
        this.emitReserved("data", data);
        this.emitReserved("success");
        this._cleanup();
      }
    }
    /**
     * Aborts the request.
     *
     * @package
     */;
    _proto2.abort = function abort() {
      this._cleanup();
    };
    return Request;
  }(Emitter);
  Request.requestsCount = 0;
  Request.requests = {};
  /**
   * Aborts pending requests when unloading the window. This is needed to prevent
   * memory leaks (e.g. when using IE) and to ensure that no spurious error is
   * emitted.
   */
  if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
      // @ts-ignore
      attachEvent("onunload", unloadHandler);
    } else if (typeof addEventListener === "function") {
      var terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
      addEventListener(terminationEvent, unloadHandler, false);
    }
  }
  function unloadHandler() {
    for (var i in Request.requests) {
      if (Request.requests.hasOwnProperty(i)) {
        Request.requests[i].abort();
      }
    }
  }
  var hasXHR2 = function () {
    var xhr = newRequest({
      xdomain: false
    });
    return xhr && xhr.responseType !== null;
  }();
  /**
   * HTTP long-polling based on the built-in `XMLHttpRequest` object.
   *
   * Usage: browser
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   */
  var XHR = /*#__PURE__*/function (_BaseXHR) {
    function XHR(opts) {
      var _this6;
      _this6 = _BaseXHR.call(this, opts) || this;
      var forceBase64 = opts && opts.forceBase64;
      _this6.supportsBinary = hasXHR2 && !forceBase64;
      return _this6;
    }
    _inheritsLoose(XHR, _BaseXHR);
    var _proto3 = XHR.prototype;
    _proto3.request = function request() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _extends(opts, {
        xd: this.xd
      }, this.opts);
      return new Request(newRequest, this.uri(), opts);
    };
    return XHR;
  }(BaseXHR);
  function newRequest(opts) {
    var xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
      if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
        return new XMLHttpRequest();
      }
    } catch (e) {}
    if (!xdomain) {
      try {
        return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }

  // detect ReactNative environment
  var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
  var BaseWS = /*#__PURE__*/function (_Transport) {
    function BaseWS() {
      return _Transport.apply(this, arguments) || this;
    }
    _inheritsLoose(BaseWS, _Transport);
    var _proto = BaseWS.prototype;
    _proto.doOpen = function doOpen() {
      var uri = this.uri();
      var protocols = this.opts.protocols;
      // React Native only supports the 'headers' option, and will print a warning if anything else is passed
      var opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
      if (this.opts.extraHeaders) {
        opts.headers = this.opts.extraHeaders;
      }
      try {
        this.ws = this.createSocket(uri, protocols, opts);
      } catch (err) {
        return this.emitReserved("error", err);
      }
      this.ws.binaryType = this.socket.binaryType;
      this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */;
    _proto.addEventListeners = function addEventListeners() {
      var _this = this;
      this.ws.onopen = function () {
        if (_this.opts.autoUnref) {
          _this.ws._socket.unref();
        }
        _this.onOpen();
      };
      this.ws.onclose = function (closeEvent) {
        return _this.onClose({
          description: "websocket connection closed",
          context: closeEvent
        });
      };
      this.ws.onmessage = function (ev) {
        return _this.onData(ev.data);
      };
      this.ws.onerror = function (e) {
        return _this.onError("websocket error", e);
      };
    };
    _proto.write = function write(packets) {
      var _this2 = this;
      this.writable = false;
      // encodePacket efficient as it uses WS framing
      // no need for encodePayload
      var _loop = function _loop() {
        var packet = packets[i];
        var lastPacket = i === packets.length - 1;
        encodePacket(packet, _this2.supportsBinary, function (data) {
          // Sometimes the websocket has already been closed but the browser didn't
          // have a chance of informing us about it yet, in that case send will
          // throw an error
          try {
            _this2.doWrite(packet, data);
          } catch (e) {}
          if (lastPacket) {
            // fake drain
            // defer to next tick to allow Socket to clear writeBuffer
            nextTick(function () {
              _this2.writable = true;
              _this2.emitReserved("drain");
            }, _this2.setTimeoutFn);
          }
        });
      };
      for (var i = 0; i < packets.length; i++) {
        _loop();
      }
    };
    _proto.doClose = function doClose() {
      if (typeof this.ws !== "undefined") {
        this.ws.onerror = function () {};
        this.ws.close();
        this.ws = null;
      }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */;
    _proto.uri = function uri() {
      var schema = this.opts.secure ? "wss" : "ws";
      var query = this.query || {};
      // append timestamp to URI
      if (this.opts.timestampRequests) {
        query[this.opts.timestampParam] = randomString();
      }
      // communicate binary support capabilities
      if (!this.supportsBinary) {
        query.b64 = 1;
      }
      return this.createUri(schema, query);
    };
    return _createClass(BaseWS, [{
      key: "name",
      get: function get() {
        return "websocket";
      }
    }]);
  }(Transport);
  var WebSocketCtor = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
  /**
   * WebSocket transport based on the built-in `WebSocket` object.
   *
   * Usage: browser, Node.js (since v21), Deno, Bun
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
   * @see https://caniuse.com/mdn-api_websocket
   * @see https://nodejs.org/api/globals.html#websocket
   */
  var WS = /*#__PURE__*/function (_BaseWS) {
    function WS() {
      return _BaseWS.apply(this, arguments) || this;
    }
    _inheritsLoose(WS, _BaseWS);
    var _proto2 = WS.prototype;
    _proto2.createSocket = function createSocket(uri, protocols, opts) {
      return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
    };
    _proto2.doWrite = function doWrite(_packet, data) {
      this.ws.send(data);
    };
    return WS;
  }(BaseWS);

  /**
   * WebTransport transport based on the built-in `WebTransport` object.
   *
   * Usage: browser, Node.js (with the `@fails-components/webtransport` package)
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebTransport
   * @see https://caniuse.com/webtransport
   */
  var WT = /*#__PURE__*/function (_Transport) {
    function WT() {
      return _Transport.apply(this, arguments) || this;
    }
    _inheritsLoose(WT, _Transport);
    var _proto = WT.prototype;
    _proto.doOpen = function doOpen() {
      var _this = this;
      try {
        // @ts-ignore
        this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
      } catch (err) {
        return this.emitReserved("error", err);
      }
      this._transport.closed.then(function () {
        _this.onClose();
      })["catch"](function (err) {
        _this.onError("webtransport error", err);
      });
      // note: we could have used async/await, but that would require some additional polyfills
      this._transport.ready.then(function () {
        _this._transport.createBidirectionalStream().then(function (stream) {
          var decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, _this.socket.binaryType);
          var reader = stream.readable.pipeThrough(decoderStream).getReader();
          var encoderStream = createPacketEncoderStream();
          encoderStream.readable.pipeTo(stream.writable);
          _this._writer = encoderStream.writable.getWriter();
          var read = function read() {
            reader.read().then(function (_ref) {
              var done = _ref.done,
                value = _ref.value;
              if (done) {
                return;
              }
              _this.onPacket(value);
              read();
            })["catch"](function (err) {});
          };
          read();
          var packet = {
            type: "open"
          };
          if (_this.query.sid) {
            packet.data = "{\"sid\":\"".concat(_this.query.sid, "\"}");
          }
          _this._writer.write(packet).then(function () {
            return _this.onOpen();
          });
        });
      });
    };
    _proto.write = function write(packets) {
      var _this2 = this;
      this.writable = false;
      var _loop = function _loop() {
        var packet = packets[i];
        var lastPacket = i === packets.length - 1;
        _this2._writer.write(packet).then(function () {
          if (lastPacket) {
            nextTick(function () {
              _this2.writable = true;
              _this2.emitReserved("drain");
            }, _this2.setTimeoutFn);
          }
        });
      };
      for (var i = 0; i < packets.length; i++) {
        _loop();
      }
    };
    _proto.doClose = function doClose() {
      var _a;
      (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
    };
    return _createClass(WT, [{
      key: "name",
      get: function get() {
        return "webtransport";
      }
    }]);
  }(Transport);

  var transports = {
    websocket: WS,
    webtransport: WT,
    polling: XHR
  };

  // imported from https://github.com/galkn/parseuri
  /**
   * Parses a URI
   *
   * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
   *
   * See:
   * - https://developer.mozilla.org/en-US/docs/Web/API/URL
   * - https://caniuse.com/url
   * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
   *
   * History of the parse() method:
   * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
   * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
   * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
   *
   * @author Steven Levithan <stevenlevithan.com> (MIT license)
   * @api private
   */
  var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
  function parse(str) {
    if (str.length > 8000) {
      throw "URI too long";
    }
    var src = str,
      b = str.indexOf('['),
      e = str.indexOf(']');
    if (b != -1 && e != -1) {
      str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    var m = re.exec(str || ''),
      uri = {},
      i = 14;
    while (i--) {
      uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
      uri.source = src;
      uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
      uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
      uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
  }
  function pathNames(obj, path) {
    var regx = /\/{2,9}/g,
      names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == '/' || path.length === 0) {
      names.splice(0, 1);
    }
    if (path.slice(-1) == '/') {
      names.splice(names.length - 1, 1);
    }
    return names;
  }
  function queryKey(uri, query) {
    var data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
      if ($1) {
        data[$1] = $2;
      }
    });
    return data;
  }

  var withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
  var OFFLINE_EVENT_LISTENERS = [];
  if (withEventListeners) {
    // within a ServiceWorker, any event handler for the 'offline' event must be added on the initial evaluation of the
    // script, so we create one single event listener here which will forward the event to the socket instances
    addEventListener("offline", function () {
      OFFLINE_EVENT_LISTENERS.forEach(function (listener) {
        return listener();
      });
    }, false);
  }
  /**
   * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
   * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
   *
   * This class comes without upgrade mechanism, which means that it will keep the first low-level transport that
   * successfully establishes the connection.
   *
   * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
   *
   * @example
   * import { SocketWithoutUpgrade, WebSocket } from "engine.io-client";
   *
   * const socket = new SocketWithoutUpgrade({
   *   transports: [WebSocket]
   * });
   *
   * socket.on("open", () => {
   *   socket.send("hello");
   * });
   *
   * @see SocketWithUpgrade
   * @see Socket
   */
  var SocketWithoutUpgrade = /*#__PURE__*/function (_Emitter) {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    function SocketWithoutUpgrade(uri, opts) {
      var _this;
      _this = _Emitter.call(this) || this;
      _this.binaryType = defaultBinaryType;
      _this.writeBuffer = [];
      _this._prevBufferLen = 0;
      _this._pingInterval = -1;
      _this._pingTimeout = -1;
      _this._maxPayload = -1;
      /**
       * The expiration timestamp of the {@link _pingTimeoutTimer} object is tracked, in case the timer is throttled and the
       * callback is not fired on time. This can happen for example when a laptop is suspended or when a phone is locked.
       */
      _this._pingTimeoutTime = Infinity;
      if (uri && "object" === _typeof(uri)) {
        opts = uri;
        uri = null;
      }
      if (uri) {
        var parsedUri = parse(uri);
        opts.hostname = parsedUri.host;
        opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
        opts.port = parsedUri.port;
        if (parsedUri.query) opts.query = parsedUri.query;
      } else if (opts.host) {
        opts.hostname = parse(opts.host).host;
      }
      installTimerFunctions(_this, opts);
      _this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
      if (opts.hostname && !opts.port) {
        // if no port is specified manually, use the protocol default
        opts.port = _this.secure ? "443" : "80";
      }
      _this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
      _this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : _this.secure ? "443" : "80");
      _this.transports = [];
      _this._transportsByName = {};
      opts.transports.forEach(function (t) {
        var transportName = t.prototype.name;
        _this.transports.push(transportName);
        _this._transportsByName[transportName] = t;
      });
      _this.opts = _extends({
        path: "/engine.io",
        agent: false,
        withCredentials: false,
        upgrade: true,
        timestampParam: "t",
        rememberUpgrade: false,
        addTrailingSlash: true,
        rejectUnauthorized: true,
        perMessageDeflate: {
          threshold: 1024
        },
        transportOptions: {},
        closeOnBeforeunload: false
      }, opts);
      _this.opts.path = _this.opts.path.replace(/\/$/, "") + (_this.opts.addTrailingSlash ? "/" : "");
      if (typeof _this.opts.query === "string") {
        _this.opts.query = decode(_this.opts.query);
      }
      if (withEventListeners) {
        if (_this.opts.closeOnBeforeunload) {
          // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
          // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
          // closed/reloaded)
          _this._beforeunloadEventListener = function () {
            if (_this.transport) {
              // silently close the transport
              _this.transport.removeAllListeners();
              _this.transport.close();
            }
          };
          addEventListener("beforeunload", _this._beforeunloadEventListener, false);
        }
        if (_this.hostname !== "localhost") {
          _this._offlineEventListener = function () {
            _this._onClose("transport close", {
              description: "network connection lost"
            });
          };
          OFFLINE_EVENT_LISTENERS.push(_this._offlineEventListener);
        }
      }
      if (_this.opts.withCredentials) {
        _this._cookieJar = createCookieJar();
      }
      _this._open();
      return _this;
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    _inheritsLoose(SocketWithoutUpgrade, _Emitter);
    var _proto = SocketWithoutUpgrade.prototype;
    _proto.createTransport = function createTransport(name) {
      var query = _extends({}, this.opts.query);
      // append engine.io protocol identifier
      query.EIO = protocol$1;
      // transport name
      query.transport = name;
      // session id if we already have one
      if (this.id) query.sid = this.id;
      var opts = _extends({}, this.opts, {
        query: query,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port
      }, this.opts.transportOptions[name]);
      return new this._transportsByName[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */;
    _proto._open = function _open() {
      var _this2 = this;
      if (this.transports.length === 0) {
        // Emit error on next tick so it can be listened to
        this.setTimeoutFn(function () {
          _this2.emitReserved("error", "No transports available");
        }, 0);
        return;
      }
      var transportName = this.opts.rememberUpgrade && SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
      this.readyState = "opening";
      var transport = this.createTransport(transportName);
      transport.open();
      this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */;
    _proto.setTransport = function setTransport(transport) {
      var _this3 = this;
      if (this.transport) {
        this.transport.removeAllListeners();
      }
      // set up transport
      this.transport = transport;
      // set up transport listeners
      transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", function (reason) {
        return _this3._onClose("transport close", reason);
      });
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */;
    _proto.onOpen = function onOpen() {
      this.readyState = "open";
      SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
      this.emitReserved("open");
      this.flush();
    }
    /**
     * Handles a packet.
     *
     * @private
     */;
    _proto._onPacket = function _onPacket(packet) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        this.emitReserved("packet", packet);
        // Socket is live - any packet counts
        this.emitReserved("heartbeat");
        switch (packet.type) {
          case "open":
            this.onHandshake(JSON.parse(packet.data));
            break;
          case "ping":
            this._sendPacket("pong");
            this.emitReserved("ping");
            this.emitReserved("pong");
            this._resetPingTimeout();
            break;
          case "error":
            var err = new Error("server error");
            // @ts-ignore
            err.code = packet.data;
            this._onError(err);
            break;
          case "message":
            this.emitReserved("data", packet.data);
            this.emitReserved("message", packet.data);
            break;
        }
      }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */;
    _proto.onHandshake = function onHandshake(data) {
      this.emitReserved("handshake", data);
      this.id = data.sid;
      this.transport.query.sid = data.sid;
      this._pingInterval = data.pingInterval;
      this._pingTimeout = data.pingTimeout;
      this._maxPayload = data.maxPayload;
      this.onOpen();
      // In case open handler closes socket
      if ("closed" === this.readyState) return;
      this._resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */;
    _proto._resetPingTimeout = function _resetPingTimeout() {
      var _this4 = this;
      this.clearTimeoutFn(this._pingTimeoutTimer);
      var delay = this._pingInterval + this._pingTimeout;
      this._pingTimeoutTime = Date.now() + delay;
      this._pingTimeoutTimer = this.setTimeoutFn(function () {
        _this4._onClose("ping timeout");
      }, delay);
      if (this.opts.autoUnref) {
        this._pingTimeoutTimer.unref();
      }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */;
    _proto._onDrain = function _onDrain() {
      this.writeBuffer.splice(0, this._prevBufferLen);
      // setting prevBufferLen = 0 is very important
      // for example, when upgrading, upgrade packet is sent over,
      // and a nonzero prevBufferLen could cause problems on `drain`
      this._prevBufferLen = 0;
      if (0 === this.writeBuffer.length) {
        this.emitReserved("drain");
      } else {
        this.flush();
      }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */;
    _proto.flush = function flush() {
      if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        var packets = this._getWritablePackets();
        this.transport.send(packets);
        // keep track of current length of writeBuffer
        // splice writeBuffer and callbackBuffer on `drain`
        this._prevBufferLen = packets.length;
        this.emitReserved("flush");
      }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */;
    _proto._getWritablePackets = function _getWritablePackets() {
      var shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
      if (!shouldCheckPayloadSize) {
        return this.writeBuffer;
      }
      var payloadSize = 1; // first packet type
      for (var i = 0; i < this.writeBuffer.length; i++) {
        var data = this.writeBuffer[i].data;
        if (data) {
          payloadSize += byteLength(data);
        }
        if (i > 0 && payloadSize > this._maxPayload) {
          return this.writeBuffer.slice(0, i);
        }
        payloadSize += 2; // separator + packet type
      }
      return this.writeBuffer;
    }
    /**
     * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
     *
     * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
     * `write()` method then the message would not be buffered by the Socket.IO client.
     *
     * @return {boolean}
     * @private
     */
    /* private */;
    _proto._hasPingExpired = function _hasPingExpired() {
      var _this5 = this;
      if (!this._pingTimeoutTime) return true;
      var hasExpired = Date.now() > this._pingTimeoutTime;
      if (hasExpired) {
        this._pingTimeoutTime = 0;
        nextTick(function () {
          _this5._onClose("ping timeout");
        }, this.setTimeoutFn);
      }
      return hasExpired;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */;
    _proto.write = function write(msg, options, fn) {
      this._sendPacket("message", msg, options, fn);
      return this;
    }
    /**
     * Sends a message. Alias of {@link Socket#write}.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */;
    _proto.send = function send(msg, options, fn) {
      this._sendPacket("message", msg, options, fn);
      return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */;
    _proto._sendPacket = function _sendPacket(type, data, options, fn) {
      if ("function" === typeof data) {
        fn = data;
        data = undefined;
      }
      if ("function" === typeof options) {
        fn = options;
        options = null;
      }
      if ("closing" === this.readyState || "closed" === this.readyState) {
        return;
      }
      options = options || {};
      options.compress = false !== options.compress;
      var packet = {
        type: type,
        data: data,
        options: options
      };
      this.emitReserved("packetCreate", packet);
      this.writeBuffer.push(packet);
      if (fn) this.once("flush", fn);
      this.flush();
    }
    /**
     * Closes the connection.
     */;
    _proto.close = function close() {
      var _this6 = this;
      var close = function close() {
        _this6._onClose("forced close");
        _this6.transport.close();
      };
      var cleanupAndClose = function cleanupAndClose() {
        _this6.off("upgrade", cleanupAndClose);
        _this6.off("upgradeError", cleanupAndClose);
        close();
      };
      var waitForUpgrade = function waitForUpgrade() {
        // wait for upgrade to finish since we can't send packets while pausing a transport
        _this6.once("upgrade", cleanupAndClose);
        _this6.once("upgradeError", cleanupAndClose);
      };
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.readyState = "closing";
        if (this.writeBuffer.length) {
          this.once("drain", function () {
            if (_this6.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          });
        } else if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      }
      return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */;
    _proto._onError = function _onError(err) {
      SocketWithoutUpgrade.priorWebsocketSuccess = false;
      if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
        this.transports.shift();
        return this._open();
      }
      this.emitReserved("error", err);
      this._onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */;
    _proto._onClose = function _onClose(reason, description) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        // clear timers
        this.clearTimeoutFn(this._pingTimeoutTimer);
        // stop event from firing again for transport
        this.transport.removeAllListeners("close");
        // ensure transport won't stay open
        this.transport.close();
        // ignore further transport communication
        this.transport.removeAllListeners();
        if (withEventListeners) {
          if (this._beforeunloadEventListener) {
            removeEventListener("beforeunload", this._beforeunloadEventListener, false);
          }
          if (this._offlineEventListener) {
            var i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
            if (i !== -1) {
              OFFLINE_EVENT_LISTENERS.splice(i, 1);
            }
          }
        }
        // set ready state
        this.readyState = "closed";
        // clear session id
        this.id = null;
        // emit close event
        this.emitReserved("close", reason, description);
        // clean buffers after, so users can still
        // grab the buffers on `close` event
        this.writeBuffer = [];
        this._prevBufferLen = 0;
      }
    };
    return SocketWithoutUpgrade;
  }(Emitter);
  SocketWithoutUpgrade.protocol = protocol$1;
  /**
   * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
   * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
   *
   * This class comes with an upgrade mechanism, which means that once the connection is established with the first
   * low-level transport, it will try to upgrade to a better transport.
   *
   * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
   *
   * @example
   * import { SocketWithUpgrade, WebSocket } from "engine.io-client";
   *
   * const socket = new SocketWithUpgrade({
   *   transports: [WebSocket]
   * });
   *
   * socket.on("open", () => {
   *   socket.send("hello");
   * });
   *
   * @see SocketWithoutUpgrade
   * @see Socket
   */
  var SocketWithUpgrade = /*#__PURE__*/function (_SocketWithoutUpgrade) {
    function SocketWithUpgrade() {
      var _this7;
      _this7 = _SocketWithoutUpgrade.apply(this, arguments) || this;
      _this7._upgrades = [];
      return _this7;
    }
    _inheritsLoose(SocketWithUpgrade, _SocketWithoutUpgrade);
    var _proto2 = SocketWithUpgrade.prototype;
    _proto2.onOpen = function onOpen() {
      _SocketWithoutUpgrade.prototype.onOpen.call(this);
      if ("open" === this.readyState && this.opts.upgrade) {
        for (var i = 0; i < this._upgrades.length; i++) {
          this._probe(this._upgrades[i]);
        }
      }
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */;
    _proto2._probe = function _probe(name) {
      var _this8 = this;
      var transport = this.createTransport(name);
      var failed = false;
      SocketWithoutUpgrade.priorWebsocketSuccess = false;
      var onTransportOpen = function onTransportOpen() {
        if (failed) return;
        transport.send([{
          type: "ping",
          data: "probe"
        }]);
        transport.once("packet", function (msg) {
          if (failed) return;
          if ("pong" === msg.type && "probe" === msg.data) {
            _this8.upgrading = true;
            _this8.emitReserved("upgrading", transport);
            if (!transport) return;
            SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
            _this8.transport.pause(function () {
              if (failed) return;
              if ("closed" === _this8.readyState) return;
              cleanup();
              _this8.setTransport(transport);
              transport.send([{
                type: "upgrade"
              }]);
              _this8.emitReserved("upgrade", transport);
              transport = null;
              _this8.upgrading = false;
              _this8.flush();
            });
          } else {
            var err = new Error("probe error");
            // @ts-ignore
            err.transport = transport.name;
            _this8.emitReserved("upgradeError", err);
          }
        });
      };
      function freezeTransport() {
        if (failed) return;
        // Any callback called by transport should be ignored since now
        failed = true;
        cleanup();
        transport.close();
        transport = null;
      }
      // Handle any error that happens while probing
      var onerror = function onerror(err) {
        var error = new Error("probe error: " + err);
        // @ts-ignore
        error.transport = transport.name;
        freezeTransport();
        _this8.emitReserved("upgradeError", error);
      };
      function onTransportClose() {
        onerror("transport closed");
      }
      // When the socket is closed while we're probing
      function onclose() {
        onerror("socket closed");
      }
      // When the socket is upgraded while we're probing
      function onupgrade(to) {
        if (transport && to.name !== transport.name) {
          freezeTransport();
        }
      }
      // Remove all listeners on the transport and on self
      var cleanup = function cleanup() {
        transport.removeListener("open", onTransportOpen);
        transport.removeListener("error", onerror);
        transport.removeListener("close", onTransportClose);
        _this8.off("close", onclose);
        _this8.off("upgrading", onupgrade);
      };
      transport.once("open", onTransportOpen);
      transport.once("error", onerror);
      transport.once("close", onTransportClose);
      this.once("close", onclose);
      this.once("upgrading", onupgrade);
      if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
        // favor WebTransport
        this.setTimeoutFn(function () {
          if (!failed) {
            transport.open();
          }
        }, 200);
      } else {
        transport.open();
      }
    };
    _proto2.onHandshake = function onHandshake(data) {
      this._upgrades = this._filterUpgrades(data.upgrades);
      _SocketWithoutUpgrade.prototype.onHandshake.call(this, data);
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */;
    _proto2._filterUpgrades = function _filterUpgrades(upgrades) {
      var filteredUpgrades = [];
      for (var i = 0; i < upgrades.length; i++) {
        if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
      }
      return filteredUpgrades;
    };
    return SocketWithUpgrade;
  }(SocketWithoutUpgrade);
  /**
   * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
   * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
   *
   * This class comes with an upgrade mechanism, which means that once the connection is established with the first
   * low-level transport, it will try to upgrade to a better transport.
   *
   * @example
   * import { Socket } from "engine.io-client";
   *
   * const socket = new Socket();
   *
   * socket.on("open", () => {
   *   socket.send("hello");
   * });
   *
   * @see SocketWithoutUpgrade
   * @see SocketWithUpgrade
   */
  var Socket$1 = /*#__PURE__*/function (_SocketWithUpgrade) {
    function Socket(uri) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var o = _typeof(uri) === "object" ? uri : opts;
      if (!o.transports || o.transports && typeof o.transports[0] === "string") {
        o.transports = (o.transports || ["polling", "websocket", "webtransport"]).map(function (transportName) {
          return transports[transportName];
        }).filter(function (t) {
          return !!t;
        });
      }
      return _SocketWithUpgrade.call(this, uri, o) || this;
    }
    _inheritsLoose(Socket, _SocketWithUpgrade);
    return Socket;
  }(SocketWithUpgrade);

  Socket$1.protocol;

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var browser = {exports: {}};

  var ms;
  var hasRequiredMs;
  function requireMs() {
    if (hasRequiredMs) return ms;
    hasRequiredMs = 1;
    var s = 1000;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;

    /**
     * Parse or format the given `val`.
     *
     * Options:
     *
     *  - `long` verbose formatting [false]
     *
     * @param {String|Number} val
     * @param {Object} [options]
     * @throws {Error} throw an error if val is not a non-empty string or a number
     * @return {String|Number}
     * @api public
     */

    ms = function ms(val, options) {
      options = options || {};
      var type = _typeof(val);
      if (type === 'string' && val.length > 0) {
        return parse(val);
      } else if (type === 'number' && isFinite(val)) {
        return options["long"] ? fmtLong(val) : fmtShort(val);
      }
      throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
    };

    /**
     * Parse the given `str` and return milliseconds.
     *
     * @param {String} str
     * @return {Number}
     * @api private
     */

    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || 'ms').toLowerCase();
      switch (type) {
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
          return n * y;
        case 'weeks':
        case 'week':
        case 'w':
          return n * w;
        case 'days':
        case 'day':
        case 'd':
          return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
          return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
          return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
          return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
          return n;
        default:
          return undefined;
      }
    }

    /**
     * Short format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */

    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + 's';
      }
      return ms + 'ms';
    }

    /**
     * Long format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */

    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
      }
      return ms + ' ms';
    }

    /**
     * Pluralization helper.
     */

    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
    }
    return ms;
  }

  /**
   * This is the common logic for both the Node.js and web browser
   * implementations of `debug()`.
   */

  function setup(env) {
    createDebug.debug = createDebug;
    createDebug["default"] = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = requireMs();
    createDebug.destroy = destroy;
    Object.keys(env).forEach(function (key) {
      createDebug[key] = env[key];
    });

    /**
    * The currently active debug mode names, and names to skip.
    */

    createDebug.names = [];
    createDebug.skips = [];

    /**
    * Map of special "%n" handling functions, for the debug "format" argument.
    *
    * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
    */
    createDebug.formatters = {};

    /**
    * Selects a color for a debug namespace
    * @param {String} namespace The namespace string for the debug instance to be colored
    * @return {Number|String} An ANSI color code for the given namespace
    * @api private
    */
    function selectColor(namespace) {
      var hash = 0;
      for (var i = 0; i < namespace.length; i++) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
      }
      return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;

    /**
    * Create a debugger with the given `namespace`.
    *
    * @param {String} namespace
    * @return {Function}
    * @api public
    */
    function createDebug(namespace) {
      var prevTime;
      var enableOverride = null;
      var namespacesCache;
      var enabledCache;
      function debug() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        // Disabled?
        if (!debug.enabled) {
          return;
        }
        var self = debug;

        // Set `diff` timestamp
        var curr = Number(new Date());
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        args[0] = createDebug.coerce(args[0]);
        if (typeof args[0] !== 'string') {
          // Anything else let's inspect with %O
          args.unshift('%O');
        }

        // Apply any `formatters` transformations
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
          // If we encounter an escaped % then don't increase the array index
          if (match === '%%') {
            return '%';
          }
          index++;
          var formatter = createDebug.formatters[format];
          if (typeof formatter === 'function') {
            var val = args[index];
            match = formatter.call(self, val);

            // Now we need to remove `args[index]` since it's inlined in the `format`
            args.splice(index, 1);
            index--;
          }
          return match;
        });

        // Apply env-specific formatting (colors, etc.)
        createDebug.formatArgs.call(self, args);
        var logFn = self.log || createDebug.log;
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.useColors = createDebug.useColors();
      debug.color = createDebug.selectColor(namespace);
      debug.extend = extend;
      debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

      Object.defineProperty(debug, 'enabled', {
        enumerable: true,
        configurable: false,
        get: function get() {
          if (enableOverride !== null) {
            return enableOverride;
          }
          if (namespacesCache !== createDebug.namespaces) {
            namespacesCache = createDebug.namespaces;
            enabledCache = createDebug.enabled(namespace);
          }
          return enabledCache;
        },
        set: function set(v) {
          enableOverride = v;
        }
      });

      // Env-specific initialization logic for debug instances
      if (typeof createDebug.init === 'function') {
        createDebug.init(debug);
      }
      return debug;
    }
    function extend(namespace, delimiter) {
      var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
      newDebug.log = this.log;
      return newDebug;
    }

    /**
    * Enables a debug mode by namespaces. This can include modes
    * separated by a colon and wildcards.
    *
    * @param {String} namespaces
    * @api public
    */
    function enable(namespaces) {
      createDebug.save(namespaces);
      createDebug.namespaces = namespaces;
      createDebug.names = [];
      createDebug.skips = [];
      var i;
      var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
      var len = split.length;
      for (i = 0; i < len; i++) {
        if (!split[i]) {
          // ignore empty strings
          continue;
        }
        namespaces = split[i].replace(/\*/g, '.*?');
        if (namespaces[0] === '-') {
          createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
        } else {
          createDebug.names.push(new RegExp('^' + namespaces + '$'));
        }
      }
    }

    /**
    * Disable debug output.
    *
    * @return {String} namespaces
    * @api public
    */
    function disable() {
      var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
        return '-' + namespace;
      }))).join(',');
      createDebug.enable('');
      return namespaces;
    }

    /**
    * Returns true if the given mode name is enabled, false otherwise.
    *
    * @param {String} name
    * @return {Boolean}
    * @api public
    */
    function enabled(name) {
      if (name[name.length - 1] === '*') {
        return true;
      }
      var i;
      var len;
      for (i = 0, len = createDebug.skips.length; i < len; i++) {
        if (createDebug.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = createDebug.names.length; i < len; i++) {
        if (createDebug.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }

    /**
    * Convert regexp to namespace
    *
    * @param {RegExp} regxep
    * @return {String} namespace
    * @api private
    */
    function toNamespace(regexp) {
      return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
    }

    /**
    * Coerce `val`.
    *
    * @param {Mixed} val
    * @return {Mixed}
    * @api private
    */
    function coerce(val) {
      if (val instanceof Error) {
        return val.stack || val.message;
      }
      return val;
    }

    /**
    * XXX DO NOT USE. This is a temporary stub function.
    * XXX It WILL be removed in the next major release.
    */
    function destroy() {
      console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
  }
  var common = setup;

  /* eslint-env browser */
  browser.exports;
  (function (module, exports) {
    /**
     * This is the web browser implementation of `debug()`.
     */

    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = function () {
      var warned = false;
      return function () {
        if (!warned) {
          warned = true;
          console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
      };
    }();

    /**
     * Colors.
     */

    exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

    /**
     * Currently only WebKit-based Web Inspectors, Firefox >= v31,
     * and the Firebug extension (any Firefox version) are known
     * to support "%c" CSS customizations.
     *
     * TODO: add a `localStorage` variable to explicitly enable/disable colors
     */

    // eslint-disable-next-line complexity
    function useColors() {
      // NB: In an Electron preload script, document will be defined but not fully
      // initialized. Since we know we're in Chrome, we'll just detect this case
      // explicitly
      if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
        return true;
      }

      // Internet Explorer and Edge do not support colors.
      if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }

      // Is webkit? http://stackoverflow.com/a/16459606/376773
      // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
      return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
      // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
      // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
      // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }

    /**
     * Colorize log arguments if enabled.
     *
     * @api public
     */

    function formatArgs(args) {
      args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      var c = 'color: ' + this.color;
      args.splice(1, 0, c, 'color: inherit');

      // The final "%c" is somewhat tricky, because there could be other
      // arguments passed either before or after the %c, so we need to
      // figure out the correct index to insert the CSS into
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function (match) {
        if (match === '%%') {
          return;
        }
        index++;
        if (match === '%c') {
          // We only are interested in the *last* %c
          // (the user may have provided their own)
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }

    /**
     * Invokes `console.debug()` when available.
     * No-op when `console.debug` is not a "function".
     * If `console.debug` is not available, falls back
     * to `console.log`.
     *
     * @api public
     */
    exports.log = console.debug || console.log || function () {};

    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem('debug', namespaces);
        } else {
          exports.storage.removeItem('debug');
        }
      } catch (error) {
        // Swallow
        // XXX (@Qix-) should we be logging these?
      }
    }

    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */
    function load() {
      var r;
      try {
        r = exports.storage.getItem('debug');
      } catch (error) {
        // Swallow
        // XXX (@Qix-) should we be logging these?
      }

      // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
      if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
      }
      return r;
    }

    /**
     * Localstorage attempts to return the localstorage.
     *
     * This is necessary because safari throws
     * when a user disables cookies/localstorage
     * and you attempt to access it.
     *
     * @return {LocalStorage}
     * @api private
     */

    function localstorage() {
      try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
      } catch (error) {
        // Swallow
        // XXX (@Qix-) should we be logging these?
      }
    }
    module.exports = common(exports);
    var formatters = module.exports.formatters;

    /**
     * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
     */

    formatters.j = function (v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
      }
    };
  })(browser, browser.exports);
  var browserExports = browser.exports;
  var debugModule = /*@__PURE__*/getDefaultExportFromCjs(browserExports);

  var debug$3 = debugModule("socket.io-client:url"); // debug()
  /**
   * URL parser.
   *
   * @param uri - url
   * @param path - the request path of the connection
   * @param loc - An object meant to mimic window.location.
   *        Defaults to window.location.
   * @public
   */
  function url(uri) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var loc = arguments.length > 2 ? arguments[2] : undefined;
    var obj = uri;
    // default to window.location
    loc = loc || typeof location !== "undefined" && location;
    if (null == uri) uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
      if ("/" === uri.charAt(0)) {
        if ("/" === uri.charAt(1)) {
          uri = loc.protocol + uri;
        } else {
          uri = loc.host + uri;
        }
      }
      if (!/^(https?|wss?):\/\//.test(uri)) {
        debug$3("protocol-less url %s", uri);
        if ("undefined" !== typeof loc) {
          uri = loc.protocol + "//" + uri;
        } else {
          uri = "https://" + uri;
        }
      }
      // parse
      debug$3("parse %s", uri);
      obj = parse(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
      if (/^(http|ws)$/.test(obj.protocol)) {
        obj.port = "80";
      } else if (/^(http|ws)s$/.test(obj.protocol)) {
        obj.port = "443";
      }
    }
    obj.path = obj.path || "/";
    var ipv6 = obj.host.indexOf(":") !== -1;
    var host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
  }

  var withNativeArrayBuffer = typeof ArrayBuffer === "function";
  var isView = function isView(obj) {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
  };
  var toString = Object.prototype.toString;
  var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
  var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
  /**
   * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
   *
   * @private
   */
  function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
  }
  function hasBinary(obj, toJSON) {
    if (!obj || _typeof(obj) !== "object") {
      return false;
    }
    if (Array.isArray(obj)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (hasBinary(obj[i])) {
          return true;
        }
      }
      return false;
    }
    if (isBinary(obj)) {
      return true;
    }
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
      return hasBinary(obj.toJSON(), true);
    }
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
        return true;
      }
    }
    return false;
  }

  /**
   * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
   *
   * @param {Object} packet - socket.io event packet
   * @return {Object} with deconstructed packet and list of buffers
   * @public
   */
  function deconstructPacket(packet) {
    var buffers = [];
    var packetData = packet.data;
    var pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return {
      packet: pack,
      buffers: buffers
    };
  }
  function _deconstructPacket(data, buffers) {
    if (!data) return data;
    if (isBinary(data)) {
      var placeholder = {
        _placeholder: true,
        num: buffers.length
      };
      buffers.push(data);
      return placeholder;
    } else if (Array.isArray(data)) {
      var newData = new Array(data.length);
      for (var i = 0; i < data.length; i++) {
        newData[i] = _deconstructPacket(data[i], buffers);
      }
      return newData;
    } else if (_typeof(data) === "object" && !(data instanceof Date)) {
      var _newData = {};
      for (var key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          _newData[key] = _deconstructPacket(data[key], buffers);
        }
      }
      return _newData;
    }
    return data;
  }
  /**
   * Reconstructs a binary packet from its placeholder packet and buffers
   *
   * @param {Object} packet - event packet with placeholders
   * @param {Array} buffers - binary buffers to put in placeholder positions
   * @return {Object} reconstructed packet
   * @public
   */
  function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
  }
  function _reconstructPacket(data, buffers) {
    if (!data) return data;
    if (data && data._placeholder === true) {
      var isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
      if (isIndexValid) {
        return buffers[data.num]; // appropriate buffer (should be natural order anyway)
      } else {
        throw new Error("illegal attachments");
      }
    } else if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        data[i] = _reconstructPacket(data[i], buffers);
      }
    } else if (_typeof(data) === "object") {
      for (var key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          data[key] = _reconstructPacket(data[key], buffers);
        }
      }
    }
    return data;
  }

  /**
   * These strings must not be used as event names, as they have a special meaning.
   */
  var RESERVED_EVENTS$1 = ["connect",
  // used on the client side
  "connect_error",
  // used on the client side
  "disconnect",
  // used on both sides
  "disconnecting",
  // used on the server side
  "newListener",
  // used by the Node.js EventEmitter
  "removeListener" // used by the Node.js EventEmitter
  ];
  /**
   * Protocol version.
   *
   * @public
   */
  var protocol = 5;
  var PacketType;
  (function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
  })(PacketType || (PacketType = {}));
  /**
   * A socket.io Encoder instance
   */
  var Encoder = /*#__PURE__*/function () {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    function Encoder(replacer) {
      this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    var _proto = Encoder.prototype;
    _proto.encode = function encode(obj) {
      if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
        if (hasBinary(obj)) {
          return this.encodeAsBinary({
            type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
            nsp: obj.nsp,
            data: obj.data,
            id: obj.id
          });
        }
      }
      return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */;
    _proto.encodeAsString = function encodeAsString(obj) {
      // first is type
      var str = "" + obj.type;
      // attachments if we have them
      if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
        str += obj.attachments + "-";
      }
      // if we have a namespace other than `/`
      // we append it followed by a comma `,`
      if (obj.nsp && "/" !== obj.nsp) {
        str += obj.nsp + ",";
      }
      // immediately followed by the id
      if (null != obj.id) {
        str += obj.id;
      }
      // json data
      if (null != obj.data) {
        str += JSON.stringify(obj.data, this.replacer);
      }
      return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */;
    _proto.encodeAsBinary = function encodeAsBinary(obj) {
      var deconstruction = deconstructPacket(obj);
      var pack = this.encodeAsString(deconstruction.packet);
      var buffers = deconstruction.buffers;
      buffers.unshift(pack); // add packet info to beginning of data list
      return buffers; // write all the buffers
    };
    return Encoder;
  }();
  /**
   * A socket.io Decoder instance
   *
   * @return {Object} decoder
   */
  var Decoder = /*#__PURE__*/function (_Emitter) {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    function Decoder(reviver) {
      var _this;
      _this = _Emitter.call(this) || this;
      _this.reviver = reviver;
      return _this;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    _inheritsLoose(Decoder, _Emitter);
    var _proto2 = Decoder.prototype;
    _proto2.add = function add(obj) {
      var packet;
      if (typeof obj === "string") {
        if (this.reconstructor) {
          throw new Error("got plaintext data when reconstructing a packet");
        }
        packet = this.decodeString(obj);
        var isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
        if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
          packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
          // binary packet's json
          this.reconstructor = new BinaryReconstructor(packet);
          // no attachments, labeled binary but no binary data to follow
          if (packet.attachments === 0) {
            _Emitter.prototype.emitReserved.call(this, "decoded", packet);
          }
        } else {
          // non-binary full packet
          _Emitter.prototype.emitReserved.call(this, "decoded", packet);
        }
      } else if (isBinary(obj) || obj.base64) {
        // raw binary data
        if (!this.reconstructor) {
          throw new Error("got binary data when not reconstructing a packet");
        } else {
          packet = this.reconstructor.takeBinaryData(obj);
          if (packet) {
            // received final buffer
            this.reconstructor = null;
            _Emitter.prototype.emitReserved.call(this, "decoded", packet);
          }
        }
      } else {
        throw new Error("Unknown type: " + obj);
      }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */;
    _proto2.decodeString = function decodeString(str) {
      var i = 0;
      // look up type
      var p = {
        type: Number(str.charAt(0))
      };
      if (PacketType[p.type] === undefined) {
        throw new Error("unknown packet type " + p.type);
      }
      // look up attachments if type binary
      if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
        var start = i + 1;
        while (str.charAt(++i) !== "-" && i != str.length) {}
        var buf = str.substring(start, i);
        if (buf != Number(buf) || str.charAt(i) !== "-") {
          throw new Error("Illegal attachments");
        }
        p.attachments = Number(buf);
      }
      // look up namespace (if any)
      if ("/" === str.charAt(i + 1)) {
        var _start = i + 1;
        while (++i) {
          var c = str.charAt(i);
          if ("," === c) break;
          if (i === str.length) break;
        }
        p.nsp = str.substring(_start, i);
      } else {
        p.nsp = "/";
      }
      // look up id
      var next = str.charAt(i + 1);
      if ("" !== next && Number(next) == next) {
        var _start2 = i + 1;
        while (++i) {
          var _c = str.charAt(i);
          if (null == _c || Number(_c) != _c) {
            --i;
            break;
          }
          if (i === str.length) break;
        }
        p.id = Number(str.substring(_start2, i + 1));
      }
      // look up json data
      if (str.charAt(++i)) {
        var payload = this.tryParse(str.substr(i));
        if (Decoder.isPayloadValid(p.type, payload)) {
          p.data = payload;
        } else {
          throw new Error("invalid payload");
        }
      }
      return p;
    };
    _proto2.tryParse = function tryParse(str) {
      try {
        return JSON.parse(str, this.reviver);
      } catch (e) {
        return false;
      }
    };
    Decoder.isPayloadValid = function isPayloadValid(type, payload) {
      switch (type) {
        case PacketType.CONNECT:
          return isObject(payload);
        case PacketType.DISCONNECT:
          return payload === undefined;
        case PacketType.CONNECT_ERROR:
          return typeof payload === "string" || isObject(payload);
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS$1.indexOf(payload[0]) === -1);
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          return Array.isArray(payload);
      }
    }
    /**
     * Deallocates a parser's resources
     */;
    _proto2.destroy = function destroy() {
      if (this.reconstructor) {
        this.reconstructor.finishedReconstruction();
        this.reconstructor = null;
      }
    };
    return Decoder;
  }(Emitter);
  /**
   * A manager of a binary event's 'buffer sequence'. Should
   * be constructed whenever a packet of type BINARY_EVENT is
   * decoded.
   *
   * @param {Object} packet
   * @return {BinaryReconstructor} initialized reconstructor
   */
  var BinaryReconstructor = /*#__PURE__*/function () {
    function BinaryReconstructor(packet) {
      this.packet = packet;
      this.buffers = [];
      this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    var _proto3 = BinaryReconstructor.prototype;
    _proto3.takeBinaryData = function takeBinaryData(binData) {
      this.buffers.push(binData);
      if (this.buffers.length === this.reconPack.attachments) {
        // done with buffer list
        var packet = reconstructPacket(this.reconPack, this.buffers);
        this.finishedReconstruction();
        return packet;
      }
      return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */;
    _proto3.finishedReconstruction = function finishedReconstruction() {
      this.reconPack = null;
      this.buffers = [];
    };
    return BinaryReconstructor;
  }();
  function isNamespaceValid(nsp) {
    return typeof nsp === "string";
  }
  // see https://caniuse.com/mdn-javascript_builtins_number_isinteger
  var isInteger = Number.isInteger || function (value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
  };
  function isAckIdValid(id) {
    return id === undefined || isInteger(id);
  }
  // see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
  function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function isDataValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return payload === undefined || isObject(payload);
      case PacketType.DISCONNECT:
        return payload === undefined;
      case PacketType.EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS$1.indexOf(payload[0]) === -1);
      case PacketType.ACK:
        return Array.isArray(payload);
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject(payload);
      default:
        return false;
    }
  }
  function isPacketValid(packet) {
    return isNamespaceValid(packet.nsp) && isAckIdValid(packet.id) && isDataValid(packet.type, packet.data);
  }

  var parser = /*#__PURE__*/Object.freeze({
    __proto__: null,
    protocol: protocol,
    get PacketType () { return PacketType; },
    Encoder: Encoder,
    Decoder: Decoder,
    isPacketValid: isPacketValid
  });

  function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
      obj.off(ev, fn);
    };
  }

  var debug$2 = debugModule("socket.io-client:socket"); // debug()
  /**
   * Internal events.
   * These events can't be emitted by the user.
   */
  var RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
  });
  /**
   * A Socket is the fundamental class for interacting with the server.
   *
   * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log("connected");
   * });
   *
   * // send an event to the server
   * socket.emit("foo", "bar");
   *
   * socket.on("foobar", () => {
   *   // an event was received from the server
   * });
   *
   * // upon disconnection
   * socket.on("disconnect", (reason) => {
   *   console.log(`disconnected due to ${reason}`);
   * });
   */
  var Socket = /*#__PURE__*/function (_Emitter) {
    /**
     * `Socket` constructor.
     */
    function Socket(io, nsp, opts) {
      var _this;
      _this = _Emitter.call(this) || this;
      /**
       * Whether the socket is currently connected to the server.
       *
       * @example
       * const socket = io();
       *
       * socket.on("connect", () => {
       *   console.log(socket.connected); // true
       * });
       *
       * socket.on("disconnect", () => {
       *   console.log(socket.connected); // false
       * });
       */
      _this.connected = false;
      /**
       * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
       * be transmitted by the server.
       */
      _this.recovered = false;
      /**
       * Buffer for packets received before the CONNECT packet
       */
      _this.receiveBuffer = [];
      /**
       * Buffer for packets that will be sent once the socket is connected
       */
      _this.sendBuffer = [];
      /**
       * The queue of packets to be sent with retry in case of failure.
       *
       * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
       * @private
       */
      _this._queue = [];
      /**
       * A sequence to generate the ID of the {@link QueuedPacket}.
       * @private
       */
      _this._queueSeq = 0;
      _this.ids = 0;
      /**
       * A map containing acknowledgement handlers.
       *
       * The `withError` attribute is used to differentiate handlers that accept an error as first argument:
       *
       * - `socket.emit("test", (err, value) => { ... })` with `ackTimeout` option
       * - `socket.timeout(5000).emit("test", (err, value) => { ... })`
       * - `const value = await socket.emitWithAck("test")`
       *
       * From those that don't:
       *
       * - `socket.emit("test", (value) => { ... });`
       *
       * In the first case, the handlers will be called with an error when:
       *
       * - the timeout is reached
       * - the socket gets disconnected
       *
       * In the second case, the handlers will be simply discarded upon disconnection, since the client will never receive
       * an acknowledgement from the server.
       *
       * @private
       */
      _this.acks = {};
      _this.flags = {};
      _this.io = io;
      _this.nsp = nsp;
      if (opts && opts.auth) {
        _this.auth = opts.auth;
      }
      _this._opts = _extends({}, opts);
      if (_this.io._autoConnect) _this.open();
      return _this;
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */
    _inheritsLoose(Socket, _Emitter);
    var _proto = Socket.prototype;
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    _proto.subEvents = function subEvents() {
      if (this.subs) return;
      var io = this.io;
      this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */;
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */
    _proto.connect = function connect() {
      if (this.connected) return this;
      this.subEvents();
      if (!this.io["_reconnecting"]) this.io.open(); // ensure open
      if ("open" === this.io._readyState) this.onopen();
      return this;
    }
    /**
     * Alias for {@link connect()}.
     */;
    _proto.open = function open() {
      return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */;
    _proto.send = function send() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      args.unshift("message");
      this.emit.apply(this, args);
      return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */;
    _proto.emit = function emit(ev) {
      var _a, _b, _c;
      if (RESERVED_EVENTS.hasOwnProperty(ev)) {
        throw new Error('"' + ev.toString() + '" is a reserved event name');
      }
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      args.unshift(ev);
      if (this._opts.retries && !this.flags.fromQueue && !this.flags["volatile"]) {
        this._addToQueue(args);
        return this;
      }
      var packet = {
        type: PacketType.EVENT,
        data: args
      };
      packet.options = {};
      packet.options.compress = this.flags.compress !== false;
      // event ack callback
      if ("function" === typeof args[args.length - 1]) {
        var id = this.ids++;
        debug$2("emitting packet with ack id %d", id);
        var ack = args.pop();
        this._registerAckCallback(id, ack);
        packet.id = id;
      }
      var isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
      var isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
      var discardPacket = this.flags["volatile"] && !isTransportWritable;
      if (discardPacket) {
        debug$2("discard packet as the transport is not currently writable");
      } else if (isConnected) {
        this.notifyOutgoingListeners(packet);
        this.packet(packet);
      } else {
        this.sendBuffer.push(packet);
      }
      this.flags = {};
      return this;
    }
    /**
     * @private
     */;
    _proto._registerAckCallback = function _registerAckCallback(id, ack) {
      var _this2 = this;
      var _a;
      var timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
      if (timeout === undefined) {
        this.acks[id] = ack;
        return;
      }
      // @ts-ignore
      var timer = this.io.setTimeoutFn(function () {
        delete _this2.acks[id];
        for (var i = 0; i < _this2.sendBuffer.length; i++) {
          if (_this2.sendBuffer[i].id === id) {
            debug$2("removing packet with ack id %d from the buffer", id);
            _this2.sendBuffer.splice(i, 1);
          }
        }
        debug$2("event with ack id %d has timed out after %d ms", id, timeout);
        ack.call(_this2, new Error("operation has timed out"));
      }, timeout);
      var fn = function fn() {
        // @ts-ignore
        _this2.io.clearTimeoutFn(timer);
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        ack.apply(_this2, args);
      };
      fn.withError = true;
      this.acks[id] = fn;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */;
    _proto.emitWithAck = function emitWithAck(ev) {
      var _this3 = this;
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      return new Promise(function (resolve, reject) {
        var fn = function fn(arg1, arg2) {
          return arg1 ? reject(arg1) : resolve(arg2);
        };
        fn.withError = true;
        args.push(fn);
        _this3.emit.apply(_this3, [ev].concat(args));
      });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */;
    _proto._addToQueue = function _addToQueue(args) {
      var _this4 = this;
      var ack;
      if (typeof args[args.length - 1] === "function") {
        ack = args.pop();
      }
      var packet = {
        id: this._queueSeq++,
        tryCount: 0,
        pending: false,
        args: args,
        flags: _extends({
          fromQueue: true
        }, this.flags)
      };
      args.push(function (err) {
        if (packet !== _this4._queue[0]) {
          // the packet has already been acknowledged
          return;
        }
        var hasError = err !== null;
        if (hasError) {
          if (packet.tryCount > _this4._opts.retries) {
            debug$2("packet [%d] is discarded after %d tries", packet.id, packet.tryCount);
            _this4._queue.shift();
            if (ack) {
              ack(err);
            }
          }
        } else {
          debug$2("packet [%d] was successfully sent", packet.id);
          _this4._queue.shift();
          if (ack) {
            for (var _len5 = arguments.length, responseArgs = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
              responseArgs[_key5 - 1] = arguments[_key5];
            }
            ack.apply(void 0, [null].concat(responseArgs));
          }
        }
        packet.pending = false;
        return _this4._drainQueue();
      });
      this._queue.push(packet);
      this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */;
    _proto._drainQueue = function _drainQueue() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      debug$2("draining queue");
      if (!this.connected || this._queue.length === 0) {
        return;
      }
      var packet = this._queue[0];
      if (packet.pending && !force) {
        debug$2("packet [%d] has already been sent and is waiting for an ack", packet.id);
        return;
      }
      packet.pending = true;
      packet.tryCount++;
      debug$2("sending packet [%d] (try n°%d)", packet.id, packet.tryCount);
      this.flags = packet.flags;
      this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */;
    _proto.packet = function packet(_packet) {
      _packet.nsp = this.nsp;
      this.io._packet(_packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */;
    _proto.onopen = function onopen() {
      var _this5 = this;
      debug$2("transport is open - connecting");
      if (typeof this.auth == "function") {
        this.auth(function (data) {
          _this5._sendConnectPacket(data);
        });
      } else {
        this._sendConnectPacket(this.auth);
      }
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */;
    _proto._sendConnectPacket = function _sendConnectPacket(data) {
      this.packet({
        type: PacketType.CONNECT,
        data: this._pid ? _extends({
          pid: this._pid,
          offset: this._lastOffset
        }, data) : data
      });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */;
    _proto.onerror = function onerror(err) {
      if (!this.connected) {
        this.emitReserved("connect_error", err);
      }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */;
    _proto.onclose = function onclose(reason, description) {
      debug$2("close (%s)", reason);
      this.connected = false;
      delete this.id;
      this.emitReserved("disconnect", reason, description);
      this._clearAcks();
    }
    /**
     * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
     * the server.
     *
     * @private
     */;
    _proto._clearAcks = function _clearAcks() {
      var _this6 = this;
      Object.keys(this.acks).forEach(function (id) {
        var isBuffered = _this6.sendBuffer.some(function (packet) {
          return String(packet.id) === id;
        });
        if (!isBuffered) {
          // note: handlers that do not accept an error as first argument are ignored here
          var ack = _this6.acks[id];
          delete _this6.acks[id];
          if (ack.withError) {
            ack.call(_this6, new Error("socket has been disconnected"));
          }
        }
      });
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */;
    _proto.onpacket = function onpacket(packet) {
      var sameNamespace = packet.nsp === this.nsp;
      if (!sameNamespace) return;
      switch (packet.type) {
        case PacketType.CONNECT:
          if (packet.data && packet.data.sid) {
            this.onconnect(packet.data.sid, packet.data.pid);
          } else {
            this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          }
          break;
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          this.onevent(packet);
          break;
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          this.onack(packet);
          break;
        case PacketType.DISCONNECT:
          this.ondisconnect();
          break;
        case PacketType.CONNECT_ERROR:
          this.destroy();
          var err = new Error(packet.data.message);
          // @ts-ignore
          err.data = packet.data.data;
          this.emitReserved("connect_error", err);
          break;
      }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */;
    _proto.onevent = function onevent(packet) {
      var args = packet.data || [];
      debug$2("emitting event %j", args);
      if (null != packet.id) {
        debug$2("attaching ack callback to event");
        args.push(this.ack(packet.id));
      }
      if (this.connected) {
        this.emitEvent(args);
      } else {
        this.receiveBuffer.push(Object.freeze(args));
      }
    };
    _proto.emitEvent = function emitEvent(args) {
      if (this._anyListeners && this._anyListeners.length) {
        var listeners = this._anyListeners.slice();
        var _iterator = _createForOfIteratorHelper(listeners),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var listener = _step.value;
            listener.apply(this, args);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      _Emitter.prototype.emit.apply(this, args);
      if (this._pid && args.length && typeof args[args.length - 1] === "string") {
        this._lastOffset = args[args.length - 1];
      }
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */;
    _proto.ack = function ack(id) {
      var self = this;
      var sent = false;
      return function () {
        // prevent double callbacks
        if (sent) return;
        sent = true;
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }
        debug$2("sending ack %j", args);
        self.packet({
          type: PacketType.ACK,
          id: id,
          data: args
        });
      };
    }
    /**
     * Called upon a server acknowledgement.
     *
     * @param packet
     * @private
     */;
    _proto.onack = function onack(packet) {
      var ack = this.acks[packet.id];
      if (typeof ack !== "function") {
        debug$2("bad ack %s", packet.id);
        return;
      }
      delete this.acks[packet.id];
      debug$2("calling ack %s with %j", packet.id, packet.data);
      // @ts-ignore FIXME ack is incorrectly inferred as 'never'
      if (ack.withError) {
        packet.data.unshift(null);
      }
      // @ts-ignore
      ack.apply(this, packet.data);
    }
    /**
     * Called upon server connect.
     *
     * @private
     */;
    _proto.onconnect = function onconnect(id, pid) {
      debug$2("socket connected with id %s", id);
      this.id = id;
      this.recovered = pid && this._pid === pid;
      this._pid = pid; // defined only if connection state recovery is enabled
      this.connected = true;
      this.emitBuffered();
      this.emitReserved("connect");
      this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */;
    _proto.emitBuffered = function emitBuffered() {
      var _this7 = this;
      this.receiveBuffer.forEach(function (args) {
        return _this7.emitEvent(args);
      });
      this.receiveBuffer = [];
      this.sendBuffer.forEach(function (packet) {
        _this7.notifyOutgoingListeners(packet);
        _this7.packet(packet);
      });
      this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */;
    _proto.ondisconnect = function ondisconnect() {
      debug$2("server disconnect (%s)", this.nsp);
      this.destroy();
      this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */;
    _proto.destroy = function destroy() {
      if (this.subs) {
        // clean subscriptions to avoid reconnections
        this.subs.forEach(function (subDestroy) {
          return subDestroy();
        });
        this.subs = undefined;
      }
      this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */;
    _proto.disconnect = function disconnect() {
      if (this.connected) {
        debug$2("performing disconnect (%s)", this.nsp);
        this.packet({
          type: PacketType.DISCONNECT
        });
      }
      // remove socket from pool
      this.destroy();
      if (this.connected) {
        // fire events
        this.onclose("io client disconnect");
      }
      return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */;
    _proto.close = function close() {
      return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */;
    _proto.compress = function compress(_compress) {
      this.flags.compress = _compress;
      return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */;
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */
    _proto.timeout = function timeout(_timeout) {
      this.flags.timeout = _timeout;
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */;
    _proto.onAny = function onAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.push(listener);
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */;
    _proto.prependAny = function prependAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.unshift(listener);
      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */;
    _proto.offAny = function offAny(listener) {
      if (!this._anyListeners) {
        return this;
      }
      if (listener) {
        var listeners = this._anyListeners;
        for (var i = 0; i < listeners.length; i++) {
          if (listener === listeners[i]) {
            listeners.splice(i, 1);
            return this;
          }
        }
      } else {
        this._anyListeners = [];
      }
      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */;
    _proto.listenersAny = function listenersAny() {
      return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */;
    _proto.onAnyOutgoing = function onAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.push(listener);
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */;
    _proto.prependAnyOutgoing = function prependAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.unshift(listener);
      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */;
    _proto.offAnyOutgoing = function offAnyOutgoing(listener) {
      if (!this._anyOutgoingListeners) {
        return this;
      }
      if (listener) {
        var listeners = this._anyOutgoingListeners;
        for (var i = 0; i < listeners.length; i++) {
          if (listener === listeners[i]) {
            listeners.splice(i, 1);
            return this;
          }
        }
      } else {
        this._anyOutgoingListeners = [];
      }
      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */;
    _proto.listenersAnyOutgoing = function listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */;
    _proto.notifyOutgoingListeners = function notifyOutgoingListeners(packet) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        var listeners = this._anyOutgoingListeners.slice();
        var _iterator2 = _createForOfIteratorHelper(listeners),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var listener = _step2.value;
            listener.apply(this, packet.data);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    };
    return _createClass(Socket, [{
      key: "disconnected",
      get: function get() {
        return !this.connected;
      }
    }, {
      key: "active",
      get: function get() {
        return !!this.subs;
      }
    }, {
      key: "volatile",
      get: function get() {
        this.flags["volatile"] = true;
        return this;
      }
    }]);
  }(Emitter);

  /**
   * Initialize backoff timer with `opts`.
   *
   * - `min` initial timeout in milliseconds [100]
   * - `max` max timeout [10000]
   * - `jitter` [0]
   * - `factor` [2]
   *
   * @param {Object} opts
   * @api public
   */
  function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
  }
  /**
   * Return the backoff duration.
   *
   * @return {Number}
   * @api public
   */
  Backoff.prototype.duration = function () {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var rand = Math.random();
      var deviation = Math.floor(rand * this.jitter * ms);
      ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
  };
  /**
   * Reset the number of attempts.
   *
   * @api public
   */
  Backoff.prototype.reset = function () {
    this.attempts = 0;
  };
  /**
   * Set the minimum duration
   *
   * @api public
   */
  Backoff.prototype.setMin = function (min) {
    this.ms = min;
  };
  /**
   * Set the maximum duration
   *
   * @api public
   */
  Backoff.prototype.setMax = function (max) {
    this.max = max;
  };
  /**
   * Set the jitter
   *
   * @api public
   */
  Backoff.prototype.setJitter = function (jitter) {
    this.jitter = jitter;
  };

  var debug$1 = debugModule("socket.io-client:manager"); // debug()
  var Manager = /*#__PURE__*/function (_Emitter) {
    function Manager(uri, opts) {
      var _this;
      var _a;
      _this = _Emitter.call(this) || this;
      _this.nsps = {};
      _this.subs = [];
      if (uri && "object" === _typeof(uri)) {
        opts = uri;
        uri = undefined;
      }
      opts = opts || {};
      opts.path = opts.path || "/socket.io";
      _this.opts = opts;
      installTimerFunctions(_this, opts);
      _this.reconnection(opts.reconnection !== false);
      _this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
      _this.reconnectionDelay(opts.reconnectionDelay || 1000);
      _this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
      _this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
      _this.backoff = new Backoff({
        min: _this.reconnectionDelay(),
        max: _this.reconnectionDelayMax(),
        jitter: _this.randomizationFactor()
      });
      _this.timeout(null == opts.timeout ? 20000 : opts.timeout);
      _this._readyState = "closed";
      _this.uri = uri;
      var _parser = opts.parser || parser;
      _this.encoder = new _parser.Encoder();
      _this.decoder = new _parser.Decoder();
      _this._autoConnect = opts.autoConnect !== false;
      if (_this._autoConnect) _this.open();
      return _this;
    }
    _inheritsLoose(Manager, _Emitter);
    var _proto = Manager.prototype;
    _proto.reconnection = function reconnection(v) {
      if (!arguments.length) return this._reconnection;
      this._reconnection = !!v;
      if (!v) {
        this.skipReconnect = true;
      }
      return this;
    };
    _proto.reconnectionAttempts = function reconnectionAttempts(v) {
      if (v === undefined) return this._reconnectionAttempts;
      this._reconnectionAttempts = v;
      return this;
    };
    _proto.reconnectionDelay = function reconnectionDelay(v) {
      var _a;
      if (v === undefined) return this._reconnectionDelay;
      this._reconnectionDelay = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
      return this;
    };
    _proto.randomizationFactor = function randomizationFactor(v) {
      var _a;
      if (v === undefined) return this._randomizationFactor;
      this._randomizationFactor = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
      return this;
    };
    _proto.reconnectionDelayMax = function reconnectionDelayMax(v) {
      var _a;
      if (v === undefined) return this._reconnectionDelayMax;
      this._reconnectionDelayMax = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
      return this;
    };
    _proto.timeout = function timeout(v) {
      if (!arguments.length) return this._timeout;
      this._timeout = v;
      return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */;
    _proto.maybeReconnectOnOpen = function maybeReconnectOnOpen() {
      // Only try to reconnect if it's the first time we're connecting
      if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
        // keeps reconnection from firing twice for the same reconnection loop
        this.reconnect();
      }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */;
    _proto.open = function open(fn) {
      var _this2 = this;
      debug$1("readyState %s", this._readyState);
      if (~this._readyState.indexOf("open")) return this;
      debug$1("opening %s", this.uri);
      this.engine = new Socket$1(this.uri, this.opts);
      var socket = this.engine;
      var self = this;
      this._readyState = "opening";
      this.skipReconnect = false;
      // emit `open`
      var openSubDestroy = on(socket, "open", function () {
        self.onopen();
        fn && fn();
      });
      var onError = function onError(err) {
        debug$1("error");
        _this2.cleanup();
        _this2._readyState = "closed";
        _this2.emitReserved("error", err);
        if (fn) {
          fn(err);
        } else {
          // Only do this if there is no fn to handle the error
          _this2.maybeReconnectOnOpen();
        }
      };
      // emit `error`
      var errorSub = on(socket, "error", onError);
      if (false !== this._timeout) {
        var timeout = this._timeout;
        debug$1("connect attempt will timeout after %d", timeout);
        // set timer
        var timer = this.setTimeoutFn(function () {
          debug$1("connect attempt timed out after %d", timeout);
          openSubDestroy();
          onError(new Error("timeout"));
          socket.close();
        }, timeout);
        if (this.opts.autoUnref) {
          timer.unref();
        }
        this.subs.push(function () {
          _this2.clearTimeoutFn(timer);
        });
      }
      this.subs.push(openSubDestroy);
      this.subs.push(errorSub);
      return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */;
    _proto.connect = function connect(fn) {
      return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */;
    _proto.onopen = function onopen() {
      debug$1("open");
      // clear old subs
      this.cleanup();
      // mark as open
      this._readyState = "open";
      this.emitReserved("open");
      // add new subs
      var socket = this.engine;
      this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)),
      // @ts-ignore
      on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */;
    _proto.onping = function onping() {
      this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */;
    _proto.ondata = function ondata(data) {
      try {
        this.decoder.add(data);
      } catch (e) {
        this.onclose("parse error", e);
      }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */;
    _proto.ondecoded = function ondecoded(packet) {
      var _this3 = this;
      // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
      nextTick(function () {
        _this3.emitReserved("packet", packet);
      }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */;
    _proto.onerror = function onerror(err) {
      debug$1("error", err);
      this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */;
    _proto.socket = function socket(nsp, opts) {
      var socket = this.nsps[nsp];
      if (!socket) {
        socket = new Socket(this, nsp, opts);
        this.nsps[nsp] = socket;
      } else if (this._autoConnect && !socket.active) {
        socket.connect();
      }
      return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */;
    _proto._destroy = function _destroy(socket) {
      var nsps = Object.keys(this.nsps);
      for (var _i = 0, _nsps = nsps; _i < _nsps.length; _i++) {
        var nsp = _nsps[_i];
        var _socket = this.nsps[nsp];
        if (_socket.active) {
          debug$1("socket %s is still active, skipping close", nsp);
          return;
        }
      }
      this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */;
    _proto._packet = function _packet(packet) {
      debug$1("writing packet %j", packet);
      var encodedPackets = this.encoder.encode(packet);
      for (var i = 0; i < encodedPackets.length; i++) {
        this.engine.write(encodedPackets[i], packet.options);
      }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */;
    _proto.cleanup = function cleanup() {
      debug$1("cleanup");
      this.subs.forEach(function (subDestroy) {
        return subDestroy();
      });
      this.subs.length = 0;
      this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */;
    _proto._close = function _close() {
      debug$1("disconnect");
      this.skipReconnect = true;
      this._reconnecting = false;
      this.onclose("forced close");
    }
    /**
     * Alias for close()
     *
     * @private
     */;
    _proto.disconnect = function disconnect() {
      return this._close();
    }
    /**
     * Called when:
     *
     * - the low-level engine is closed
     * - the parser encountered a badly formatted packet
     * - all sockets are disconnected
     *
     * @private
     */;
    _proto.onclose = function onclose(reason, description) {
      var _a;
      debug$1("closed due to %s", reason);
      this.cleanup();
      (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
      this.backoff.reset();
      this._readyState = "closed";
      this.emitReserved("close", reason, description);
      if (this._reconnection && !this.skipReconnect) {
        this.reconnect();
      }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */;
    _proto.reconnect = function reconnect() {
      var _this4 = this;
      if (this._reconnecting || this.skipReconnect) return this;
      var self = this;
      if (this.backoff.attempts >= this._reconnectionAttempts) {
        debug$1("reconnect failed");
        this.backoff.reset();
        this.emitReserved("reconnect_failed");
        this._reconnecting = false;
      } else {
        var delay = this.backoff.duration();
        debug$1("will wait %dms before reconnect attempt", delay);
        this._reconnecting = true;
        var timer = this.setTimeoutFn(function () {
          if (self.skipReconnect) return;
          debug$1("attempting reconnect");
          _this4.emitReserved("reconnect_attempt", self.backoff.attempts);
          // check again for the case socket closed in above events
          if (self.skipReconnect) return;
          self.open(function (err) {
            if (err) {
              debug$1("reconnect attempt error");
              self._reconnecting = false;
              self.reconnect();
              _this4.emitReserved("reconnect_error", err);
            } else {
              debug$1("reconnect success");
              self.onreconnect();
            }
          });
        }, delay);
        if (this.opts.autoUnref) {
          timer.unref();
        }
        this.subs.push(function () {
          _this4.clearTimeoutFn(timer);
        });
      }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */;
    _proto.onreconnect = function onreconnect() {
      var attempt = this.backoff.attempts;
      this._reconnecting = false;
      this.backoff.reset();
      this.emitReserved("reconnect", attempt);
    };
    return Manager;
  }(Emitter);

  var debug = debugModule("socket.io-client"); // debug()
  /**
   * Managers cache.
   */
  var cache = {};
  function lookup(uri, opts) {
    if (_typeof(uri) === "object") {
      opts = uri;
      uri = undefined;
    }
    opts = opts || {};
    var parsed = url(uri, opts.path || "/socket.io");
    var source = parsed.source;
    var id = parsed.id;
    var path = parsed.path;
    var sameNamespace = cache[id] && path in cache[id]["nsps"];
    var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    var io;
    if (newConnection) {
      debug("ignoring socket cache for %s", source);
      io = new Manager(source, opts);
    } else {
      if (!cache[id]) {
        debug("new io instance for %s", source);
        cache[id] = new Manager(source, opts);
      }
      io = cache[id];
    }
    if (parsed.query && !opts.query) {
      opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
  }
  // so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
  // namespace (e.g. `io.connect(...)`), for backward compatibility
  _extends(lookup, {
    Manager: Manager,
    Socket: Socket,
    io: lookup,
    connect: lookup
  });

  return lookup;

}));


/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  var emptyObject = Object.freeze({});
  var isArray = Array.isArray;
  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef(v) {
      return v === undefined || v === null;
  }
  function isDef(v) {
      return v !== undefined && v !== null;
  }
  function isTrue(v) {
      return v === true;
  }
  function isFalse(v) {
      return v === false;
  }
  /**
   * Check if value is primitive.
   */
  function isPrimitive(value) {
      return (typeof value === 'string' ||
          typeof value === 'number' ||
          // $flow-disable-line
          typeof value === 'symbol' ||
          typeof value === 'boolean');
  }
  function isFunction(value) {
      return typeof value === 'function';
  }
  /**
   * Quick object check - this is primarily used to tell
   * objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject(obj) {
      return obj !== null && typeof obj === 'object';
  }
  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;
  function toRawType(value) {
      return _toString.call(value).slice(8, -1);
  }
  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject(obj) {
      return _toString.call(obj) === '[object Object]';
  }
  function isRegExp(v) {
      return _toString.call(v) === '[object RegExp]';
  }
  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex(val) {
      var n = parseFloat(String(val));
      return n >= 0 && Math.floor(n) === n && isFinite(val);
  }
  function isPromise(val) {
      return (isDef(val) &&
          typeof val.then === 'function' &&
          typeof val.catch === 'function');
  }
  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString(val) {
      return val == null
          ? ''
          : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
              ? JSON.stringify(val, replacer, 2)
              : String(val);
  }
  function replacer(_key, val) {
      // avoid circular deps from v3
      if (val && val.__v_isRef) {
          return val.value;
      }
      return val;
  }
  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber(val) {
      var n = parseFloat(val);
      return isNaN(n) ? val : n;
  }
  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap(str, expectsLowerCase) {
      var map = Object.create(null);
      var list = str.split(',');
      for (var i = 0; i < list.length; i++) {
          map[list[i]] = true;
      }
      return expectsLowerCase ? function (val) { return map[val.toLowerCase()]; } : function (val) { return map[val]; };
  }
  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);
  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
  /**
   * Remove an item from an array.
   */
  function remove$2(arr, item) {
      var len = arr.length;
      if (len) {
          // fast path for the only / last item
          if (item === arr[len - 1]) {
              arr.length = len - 1;
              return;
          }
          var index = arr.indexOf(item);
          if (index > -1) {
              return arr.splice(index, 1);
          }
      }
  }
  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
      return hasOwnProperty.call(obj, key);
  }
  /**
   * Create a cached version of a pure function.
   */
  function cached(fn) {
      var cache = Object.create(null);
      return function cachedFn(str) {
          var hit = cache[str];
          return hit || (cache[str] = fn(str));
      };
  }
  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
      return str.replace(camelizeRE, function (_, c) { return (c ? c.toUpperCase() : ''); });
  });
  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
  });
  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
      return str.replace(hyphenateRE, '-$1').toLowerCase();
  });
  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */
  /* istanbul ignore next */
  function polyfillBind(fn, ctx) {
      function boundFn(a) {
          var l = arguments.length;
          return l
              ? l > 1
                  ? fn.apply(ctx, arguments)
                  : fn.call(ctx, a)
              : fn.call(ctx);
      }
      boundFn._length = fn.length;
      return boundFn;
  }
  function nativeBind(fn, ctx) {
      return fn.bind(ctx);
  }
  // @ts-expect-error bind cannot be `undefined`
  var bind$1 = Function.prototype.bind ? nativeBind : polyfillBind;
  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray(list, start) {
      start = start || 0;
      var i = list.length - start;
      var ret = new Array(i);
      while (i--) {
          ret[i] = list[i + start];
      }
      return ret;
  }
  /**
   * Mix properties into target object.
   */
  function extend(to, _from) {
      for (var key in _from) {
          to[key] = _from[key];
      }
      return to;
  }
  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject(arr) {
      var res = {};
      for (var i = 0; i < arr.length; i++) {
          if (arr[i]) {
              extend(res, arr[i]);
          }
      }
      return res;
  }
  /* eslint-disable no-unused-vars */
  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop(a, b, c) { }
  /**
   * Always return false.
   */
  var no = function (a, b, c) { return false; };
  /* eslint-enable no-unused-vars */
  /**
   * Return the same value.
   */
  var identity = function (_) { return _; };
  /**
   * Generate a string containing static keys from compiler modules.
   */
  function genStaticKeys$1(modules) {
      return modules
          .reduce(function (keys, m) { return keys.concat(m.staticKeys || []); }, [])
          .join(',');
  }
  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual(a, b) {
      if (a === b)
          return true;
      var isObjectA = isObject(a);
      var isObjectB = isObject(b);
      if (isObjectA && isObjectB) {
          try {
              var isArrayA = Array.isArray(a);
              var isArrayB = Array.isArray(b);
              if (isArrayA && isArrayB) {
                  return (a.length === b.length &&
                      a.every(function (e, i) {
                          return looseEqual(e, b[i]);
                      }));
              }
              else if (a instanceof Date && b instanceof Date) {
                  return a.getTime() === b.getTime();
              }
              else if (!isArrayA && !isArrayB) {
                  var keysA = Object.keys(a);
                  var keysB = Object.keys(b);
                  return (keysA.length === keysB.length &&
                      keysA.every(function (key) {
                          return looseEqual(a[key], b[key]);
                      }));
              }
              else {
                  /* istanbul ignore next */
                  return false;
              }
          }
          catch (e) {
              /* istanbul ignore next */
              return false;
          }
      }
      else if (!isObjectA && !isObjectB) {
          return String(a) === String(b);
      }
      else {
          return false;
      }
  }
  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf(arr, val) {
      for (var i = 0; i < arr.length; i++) {
          if (looseEqual(arr[i], val))
              return i;
      }
      return -1;
  }
  /**
   * Ensure a function is called only once.
   */
  function once(fn) {
      var called = false;
      return function () {
          if (!called) {
              called = true;
              fn.apply(this, arguments);
          }
      };
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#polyfill
  function hasChanged(x, y) {
      if (x === y) {
          return x === 0 && 1 / x !== 1 / y;
      }
      else {
          return x === x || y === y;
      }
  }

  var SSR_ATTR = 'data-server-rendered';
  var ASSET_TYPES = ['component', 'directive', 'filter'];
  var LIFECYCLE_HOOKS = [
      'beforeCreate',
      'created',
      'beforeMount',
      'mounted',
      'beforeUpdate',
      'updated',
      'beforeDestroy',
      'destroyed',
      'activated',
      'deactivated',
      'errorCaptured',
      'serverPrefetch',
      'renderTracked',
      'renderTriggered'
  ];

  var config = {
      /**
       * Option merge strategies (used in core/util/options)
       */
      // $flow-disable-line
      optionMergeStrategies: Object.create(null),
      /**
       * Whether to suppress warnings.
       */
      silent: false,
      /**
       * Show production mode tip message on boot?
       */
      productionTip: true,
      /**
       * Whether to enable devtools
       */
      devtools: true,
      /**
       * Whether to record perf
       */
      performance: false,
      /**
       * Error handler for watcher errors
       */
      errorHandler: null,
      /**
       * Warn handler for watcher warns
       */
      warnHandler: null,
      /**
       * Ignore certain custom elements
       */
      ignoredElements: [],
      /**
       * Custom user key aliases for v-on
       */
      // $flow-disable-line
      keyCodes: Object.create(null),
      /**
       * Check if a tag is reserved so that it cannot be registered as a
       * component. This is platform-dependent and may be overwritten.
       */
      isReservedTag: no,
      /**
       * Check if an attribute is reserved so that it cannot be used as a component
       * prop. This is platform-dependent and may be overwritten.
       */
      isReservedAttr: no,
      /**
       * Check if a tag is an unknown element.
       * Platform-dependent.
       */
      isUnknownElement: no,
      /**
       * Get the namespace of an element
       */
      getTagNamespace: noop,
      /**
       * Parse the real tag name for the specific platform.
       */
      parsePlatformTagName: identity,
      /**
       * Check if an attribute must be bound using property, e.g. value
       * Platform-dependent.
       */
      mustUseProp: no,
      /**
       * Perform updates asynchronously. Intended to be used by Vue Test Utils
       * This will significantly reduce performance if set to false.
       */
      async: true,
      /**
       * Exposed for legacy reasons
       */
      _lifecycleHooks: LIFECYCLE_HOOKS
  };

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */
  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
  /**
   * Check if a string starts with $ or _
   */
  function isReserved(str) {
      var c = (str + '').charCodeAt(0);
      return c === 0x24 || c === 0x5f;
  }
  /**
   * Define a property.
   */
  function def(obj, key, val, enumerable) {
      Object.defineProperty(obj, key, {
          value: val,
          enumerable: !!enumerable,
          writable: true,
          configurable: true
      });
  }
  /**
   * Parse simple path.
   */
  var bailRE = new RegExp("[^".concat(unicodeRegExp.source, ".$_\\d]"));
  function parsePath(path) {
      if (bailRE.test(path)) {
          return;
      }
      var segments = path.split('.');
      return function (obj) {
          for (var i = 0; i < segments.length; i++) {
              if (!obj)
                  return;
              obj = obj[segments[i]];
          }
          return obj;
      };
  }

  // can we use __proto__?
  var hasProto = '__proto__' in {};
  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  UA && UA.indexOf('android') > 0;
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
  UA && /chrome\/\d+/.test(UA) && !isEdge;
  UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);
  // Firefox has a "watch" function on Object.prototype...
  // @ts-expect-error firebox support
  var nativeWatch = {}.watch;
  var supportsPassive = false;
  if (inBrowser) {
      try {
          var opts = {};
          Object.defineProperty(opts, 'passive', {
              get: function () {
                  /* istanbul ignore next */
                  supportsPassive = true;
              }
          }); // https://github.com/facebook/flow/issues/285
          window.addEventListener('test-passive', null, opts);
      }
      catch (e) { }
  }
  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function () {
      if (_isServer === undefined) {
          /* istanbul ignore if */
          if (!inBrowser && typeof global !== 'undefined') {
              // detect presence of vue-server-renderer and avoid
              // Webpack shimming the process
              _isServer =
                  global['process'] && global['process'].env.VUE_ENV === 'server';
          }
          else {
              _isServer = false;
          }
      }
      return _isServer;
  };
  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
  /* istanbul ignore next */
  function isNative(Ctor) {
      return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
  }
  var hasSymbol = typeof Symbol !== 'undefined' &&
      isNative(Symbol) &&
      typeof Reflect !== 'undefined' &&
      isNative(Reflect.ownKeys);
  var _Set; // $flow-disable-line
  /* istanbul ignore if */ if (typeof Set !== 'undefined' && isNative(Set)) {
      // use native Set when available.
      _Set = Set;
  }
  else {
      // a non-standard Set polyfill that only works with primitive keys.
      _Set = /** @class */ (function () {
          function Set() {
              this.set = Object.create(null);
          }
          Set.prototype.has = function (key) {
              return this.set[key] === true;
          };
          Set.prototype.add = function (key) {
              this.set[key] = true;
          };
          Set.prototype.clear = function () {
              this.set = Object.create(null);
          };
          return Set;
      }());
  }

  var currentInstance = null;
  /**
   * This is exposed for compatibility with v3 (e.g. some functions in VueUse
   * relies on it). Do not use this internally, just use `currentInstance`.
   *
   * @internal this function needs manual type declaration because it relies
   * on previously manually authored types from Vue 2
   */
  function getCurrentInstance() {
      return currentInstance && { proxy: currentInstance };
  }
  /**
   * @internal
   */
  function setCurrentInstance(vm) {
      if (vm === void 0) { vm = null; }
      if (!vm)
          currentInstance && currentInstance._scope.off();
      currentInstance = vm;
      vm && vm._scope.on();
  }

  /**
   * @internal
   */
  var VNode = /** @class */ (function () {
      function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
          this.tag = tag;
          this.data = data;
          this.children = children;
          this.text = text;
          this.elm = elm;
          this.ns = undefined;
          this.context = context;
          this.fnContext = undefined;
          this.fnOptions = undefined;
          this.fnScopeId = undefined;
          this.key = data && data.key;
          this.componentOptions = componentOptions;
          this.componentInstance = undefined;
          this.parent = undefined;
          this.raw = false;
          this.isStatic = false;
          this.isRootInsert = true;
          this.isComment = false;
          this.isCloned = false;
          this.isOnce = false;
          this.asyncFactory = asyncFactory;
          this.asyncMeta = undefined;
          this.isAsyncPlaceholder = false;
      }
      Object.defineProperty(VNode.prototype, "child", {
          // DEPRECATED: alias for componentInstance for backwards compat.
          /* istanbul ignore next */
          get: function () {
              return this.componentInstance;
          },
          enumerable: false,
          configurable: true
      });
      return VNode;
  }());
  var createEmptyVNode = function (text) {
      if (text === void 0) { text = ''; }
      var node = new VNode();
      node.text = text;
      node.isComment = true;
      return node;
  };
  function createTextVNode(val) {
      return new VNode(undefined, undefined, undefined, String(val));
  }
  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode(vnode) {
      var cloned = new VNode(vnode.tag, vnode.data, 
      // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
      cloned.ns = vnode.ns;
      cloned.isStatic = vnode.isStatic;
      cloned.key = vnode.key;
      cloned.isComment = vnode.isComment;
      cloned.fnContext = vnode.fnContext;
      cloned.fnOptions = vnode.fnOptions;
      cloned.fnScopeId = vnode.fnScopeId;
      cloned.asyncMeta = vnode.asyncMeta;
      cloned.isCloned = true;
      return cloned;
  }

  /* not type checking this file because flow doesn't play well with Proxy */
  var initProxy;
  {
      var allowedGlobals_1 = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' +
          'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
          'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +
          'require' // for Webpack/Browserify
      );
      var warnNonPresent_1 = function (target, key) {
          warn$2("Property or method \"".concat(key, "\" is not defined on the instance but ") +
              'referenced during render. Make sure that this property is reactive, ' +
              'either in the data option, or for class-based components, by ' +
              'initializing the property. ' +
              'See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
      };
      var warnReservedPrefix_1 = function (target, key) {
          warn$2("Property \"".concat(key, "\" must be accessed with \"$data.").concat(key, "\" because ") +
              'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
              'prevent conflicts with Vue internals. ' +
              'See: https://v2.vuejs.org/v2/api/#data', target);
      };
      var hasProxy_1 = typeof Proxy !== 'undefined' && isNative(Proxy);
      if (hasProxy_1) {
          var isBuiltInModifier_1 = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
          config.keyCodes = new Proxy(config.keyCodes, {
              set: function (target, key, value) {
                  if (isBuiltInModifier_1(key)) {
                      warn$2("Avoid overwriting built-in modifier in config.keyCodes: .".concat(key));
                      return false;
                  }
                  else {
                      target[key] = value;
                      return true;
                  }
              }
          });
      }
      var hasHandler_1 = {
          has: function (target, key) {
              var has = key in target;
              var isAllowed = allowedGlobals_1(key) ||
                  (typeof key === 'string' &&
                      key.charAt(0) === '_' &&
                      !(key in target.$data));
              if (!has && !isAllowed) {
                  if (key in target.$data)
                      warnReservedPrefix_1(target, key);
                  else
                      warnNonPresent_1(target, key);
              }
              return has || !isAllowed;
          }
      };
      var getHandler_1 = {
          get: function (target, key) {
              if (typeof key === 'string' && !(key in target)) {
                  if (key in target.$data)
                      warnReservedPrefix_1(target, key);
                  else
                      warnNonPresent_1(target, key);
              }
              return target[key];
          }
      };
      initProxy = function initProxy(vm) {
          if (hasProxy_1) {
              // determine which proxy handler to use
              var options = vm.$options;
              var handlers = options.render && options.render._withStripped ? getHandler_1 : hasHandler_1;
              vm._renderProxy = new Proxy(vm, handlers);
          }
          else {
              vm._renderProxy = vm;
          }
      };
  }

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

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  var uid$2 = 0;
  var pendingCleanupDeps = [];
  var cleanupDeps = function () {
      for (var i = 0; i < pendingCleanupDeps.length; i++) {
          var dep = pendingCleanupDeps[i];
          dep.subs = dep.subs.filter(function (s) { return s; });
          dep._pending = false;
      }
      pendingCleanupDeps.length = 0;
  };
  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   * @internal
   */
  var Dep = /** @class */ (function () {
      function Dep() {
          // pending subs cleanup
          this._pending = false;
          this.id = uid$2++;
          this.subs = [];
      }
      Dep.prototype.addSub = function (sub) {
          this.subs.push(sub);
      };
      Dep.prototype.removeSub = function (sub) {
          // #12696 deps with massive amount of subscribers are extremely slow to
          // clean up in Chromium
          // to workaround this, we unset the sub for now, and clear them on
          // next scheduler flush.
          this.subs[this.subs.indexOf(sub)] = null;
          if (!this._pending) {
              this._pending = true;
              pendingCleanupDeps.push(this);
          }
      };
      Dep.prototype.depend = function (info) {
          if (Dep.target) {
              Dep.target.addDep(this);
              if (info && Dep.target.onTrack) {
                  Dep.target.onTrack(__assign({ effect: Dep.target }, info));
              }
          }
      };
      Dep.prototype.notify = function (info) {
          // stabilize the subscriber list first
          var subs = this.subs.filter(function (s) { return s; });
          if (!config.async) {
              // subs aren't sorted in scheduler if not running async
              // we need to sort them now to make sure they fire in correct
              // order
              subs.sort(function (a, b) { return a.id - b.id; });
          }
          for (var i = 0, l = subs.length; i < l; i++) {
              var sub = subs[i];
              if (info) {
                  sub.onTrigger &&
                      sub.onTrigger(__assign({ effect: subs[i] }, info));
              }
              sub.update();
          }
      };
      return Dep;
  }());
  // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.
  Dep.target = null;
  var targetStack = [];
  function pushTarget(target) {
      targetStack.push(target);
      Dep.target = target;
  }
  function popTarget() {
      targetStack.pop();
      Dep.target = targetStack[targetStack.length - 1];
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */
  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);
  var methodsToPatch = [
      'push',
      'pop',
      'shift',
      'unshift',
      'splice',
      'sort',
      'reverse'
  ];
  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
      // cache original method
      var original = arrayProto[method];
      def(arrayMethods, method, function mutator() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          var result = original.apply(this, args);
          var ob = this.__ob__;
          var inserted;
          switch (method) {
              case 'push':
              case 'unshift':
                  inserted = args;
                  break;
              case 'splice':
                  inserted = args.slice(2);
                  break;
          }
          if (inserted)
              ob.observeArray(inserted);
          // notify change
          {
              ob.dep.notify({
                  type: "array mutation" /* TriggerOpTypes.ARRAY_MUTATION */,
                  target: this,
                  key: method
              });
          }
          return result;
      });
  });

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
  var NO_INITIAL_VALUE = {};
  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;
  function toggleObserving(value) {
      shouldObserve = value;
  }
  // ssr mock dep
  var mockDep = {
      notify: noop,
      depend: noop,
      addSub: noop,
      removeSub: noop
  };
  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = /** @class */ (function () {
      function Observer(value, shallow, mock) {
          if (shallow === void 0) { shallow = false; }
          if (mock === void 0) { mock = false; }
          this.value = value;
          this.shallow = shallow;
          this.mock = mock;
          // this.value = value
          this.dep = mock ? mockDep : new Dep();
          this.vmCount = 0;
          def(value, '__ob__', this);
          if (isArray(value)) {
              if (!mock) {
                  if (hasProto) {
                      value.__proto__ = arrayMethods;
                      /* eslint-enable no-proto */
                  }
                  else {
                      for (var i = 0, l = arrayKeys.length; i < l; i++) {
                          var key = arrayKeys[i];
                          def(value, key, arrayMethods[key]);
                      }
                  }
              }
              if (!shallow) {
                  this.observeArray(value);
              }
          }
          else {
              /**
               * Walk through all properties and convert them into
               * getter/setters. This method should only be called when
               * value type is Object.
               */
              var keys = Object.keys(value);
              for (var i = 0; i < keys.length; i++) {
                  var key = keys[i];
                  defineReactive(value, key, NO_INITIAL_VALUE, undefined, shallow, mock);
              }
          }
      }
      /**
       * Observe a list of Array items.
       */
      Observer.prototype.observeArray = function (value) {
          for (var i = 0, l = value.length; i < l; i++) {
              observe(value[i], false, this.mock);
          }
      };
      return Observer;
  }());
  // helpers
  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe(value, shallow, ssrMockReactivity) {
      if (value && hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
          return value.__ob__;
      }
      if (shouldObserve &&
          (ssrMockReactivity || !isServerRendering()) &&
          (isArray(value) || isPlainObject(value)) &&
          Object.isExtensible(value) &&
          !value.__v_skip /* ReactiveFlags.SKIP */ &&
          !isRef(value) &&
          !(value instanceof VNode)) {
          return new Observer(value, shallow, ssrMockReactivity);
      }
  }
  /**
   * Define a reactive property on an Object.
   */
  function defineReactive(obj, key, val, customSetter, shallow, mock, observeEvenIfShallow) {
      if (observeEvenIfShallow === void 0) { observeEvenIfShallow = false; }
      var dep = new Dep();
      var property = Object.getOwnPropertyDescriptor(obj, key);
      if (property && property.configurable === false) {
          return;
      }
      // cater for pre-defined getter/setters
      var getter = property && property.get;
      var setter = property && property.set;
      if ((!getter || setter) &&
          (val === NO_INITIAL_VALUE || arguments.length === 2)) {
          val = obj[key];
      }
      var childOb = shallow ? val && val.__ob__ : observe(val, false, mock);
      Object.defineProperty(obj, key, {
          enumerable: true,
          configurable: true,
          get: function reactiveGetter() {
              var value = getter ? getter.call(obj) : val;
              if (Dep.target) {
                  {
                      dep.depend({
                          target: obj,
                          type: "get" /* TrackOpTypes.GET */,
                          key: key
                      });
                  }
                  if (childOb) {
                      childOb.dep.depend();
                      if (isArray(value)) {
                          dependArray(value);
                      }
                  }
              }
              return isRef(value) && !shallow ? value.value : value;
          },
          set: function reactiveSetter(newVal) {
              var value = getter ? getter.call(obj) : val;
              if (!hasChanged(value, newVal)) {
                  return;
              }
              if (customSetter) {
                  customSetter();
              }
              if (setter) {
                  setter.call(obj, newVal);
              }
              else if (getter) {
                  // #7981: for accessor properties without setter
                  return;
              }
              else if (!shallow && isRef(value) && !isRef(newVal)) {
                  value.value = newVal;
                  return;
              }
              else {
                  val = newVal;
              }
              childOb = shallow ? newVal && newVal.__ob__ : observe(newVal, false, mock);
              {
                  dep.notify({
                      type: "set" /* TriggerOpTypes.SET */,
                      target: obj,
                      key: key,
                      newValue: newVal,
                      oldValue: value
                  });
              }
          }
      });
      return dep;
  }
  function set(target, key, val) {
      if ((isUndef(target) || isPrimitive(target))) {
          warn$2("Cannot set reactive property on undefined, null, or primitive value: ".concat(target));
      }
      if (isReadonly(target)) {
          warn$2("Set operation on key \"".concat(key, "\" failed: target is readonly."));
          return;
      }
      var ob = target.__ob__;
      if (isArray(target) && isValidArrayIndex(key)) {
          target.length = Math.max(target.length, key);
          target.splice(key, 1, val);
          // when mocking for SSR, array methods are not hijacked
          if (ob && !ob.shallow && ob.mock) {
              observe(val, false, true);
          }
          return val;
      }
      if (key in target && !(key in Object.prototype)) {
          target[key] = val;
          return val;
      }
      if (target._isVue || (ob && ob.vmCount)) {
          warn$2('Avoid adding reactive properties to a Vue instance or its root $data ' +
                  'at runtime - declare it upfront in the data option.');
          return val;
      }
      if (!ob) {
          target[key] = val;
          return val;
      }
      defineReactive(ob.value, key, val, undefined, ob.shallow, ob.mock);
      {
          ob.dep.notify({
              type: "add" /* TriggerOpTypes.ADD */,
              target: target,
              key: key,
              newValue: val,
              oldValue: undefined
          });
      }
      return val;
  }
  function del(target, key) {
      if ((isUndef(target) || isPrimitive(target))) {
          warn$2("Cannot delete reactive property on undefined, null, or primitive value: ".concat(target));
      }
      if (isArray(target) && isValidArrayIndex(key)) {
          target.splice(key, 1);
          return;
      }
      var ob = target.__ob__;
      if (target._isVue || (ob && ob.vmCount)) {
          warn$2('Avoid deleting properties on a Vue instance or its root $data ' +
                  '- just set it to null.');
          return;
      }
      if (isReadonly(target)) {
          warn$2("Delete operation on key \"".concat(key, "\" failed: target is readonly."));
          return;
      }
      if (!hasOwn(target, key)) {
          return;
      }
      delete target[key];
      if (!ob) {
          return;
      }
      {
          ob.dep.notify({
              type: "delete" /* TriggerOpTypes.DELETE */,
              target: target,
              key: key
          });
      }
  }
  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray(value) {
      for (var e = void 0, i = 0, l = value.length; i < l; i++) {
          e = value[i];
          if (e && e.__ob__) {
              e.__ob__.dep.depend();
          }
          if (isArray(e)) {
              dependArray(e);
          }
      }
  }

  function reactive(target) {
      makeReactive(target, false);
      return target;
  }
  /**
   * Return a shallowly-reactive copy of the original object, where only the root
   * level properties are reactive. It also does not auto-unwrap refs (even at the
   * root level).
   */
  function shallowReactive(target) {
      makeReactive(target, true);
      def(target, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, true);
      return target;
  }
  function makeReactive(target, shallow) {
      // if trying to observe a readonly proxy, return the readonly version.
      if (!isReadonly(target)) {
          {
              if (isArray(target)) {
                  warn$2("Avoid using Array as root value for ".concat(shallow ? "shallowReactive()" : "reactive()", " as it cannot be tracked in watch() or watchEffect(). Use ").concat(shallow ? "shallowRef()" : "ref()", " instead. This is a Vue-2-only limitation."));
              }
              var existingOb = target && target.__ob__;
              if (existingOb && existingOb.shallow !== shallow) {
                  warn$2("Target is already a ".concat(existingOb.shallow ? "" : "non-", "shallow reactive object, and cannot be converted to ").concat(shallow ? "" : "non-", "shallow."));
              }
          }
          var ob = observe(target, shallow, isServerRendering() /* ssr mock reactivity */);
          if (!ob) {
              if (target == null || isPrimitive(target)) {
                  warn$2("value cannot be made reactive: ".concat(String(target)));
              }
              if (isCollectionType(target)) {
                  warn$2("Vue 2 does not support reactive collection types such as Map or Set.");
              }
          }
      }
  }
  function isReactive(value) {
      if (isReadonly(value)) {
          return isReactive(value["__v_raw" /* ReactiveFlags.RAW */]);
      }
      return !!(value && value.__ob__);
  }
  function isShallow(value) {
      return !!(value && value.__v_isShallow);
  }
  function isReadonly(value) {
      return !!(value && value.__v_isReadonly);
  }
  function isProxy(value) {
      return isReactive(value) || isReadonly(value);
  }
  function toRaw(observed) {
      var raw = observed && observed["__v_raw" /* ReactiveFlags.RAW */];
      return raw ? toRaw(raw) : observed;
  }
  function markRaw(value) {
      // non-extensible objects won't be observed anyway
      if (Object.isExtensible(value)) {
          def(value, "__v_skip" /* ReactiveFlags.SKIP */, true);
      }
      return value;
  }
  /**
   * @internal
   */
  function isCollectionType(value) {
      var type = toRawType(value);
      return (type === 'Map' || type === 'WeakMap' || type === 'Set' || type === 'WeakSet');
  }

  /**
   * @internal
   */
  var RefFlag = "__v_isRef";
  function isRef(r) {
      return !!(r && r.__v_isRef === true);
  }
  function ref$1(value) {
      return createRef(value, false);
  }
  function shallowRef(value) {
      return createRef(value, true);
  }
  function createRef(rawValue, shallow) {
      if (isRef(rawValue)) {
          return rawValue;
      }
      var ref = {};
      def(ref, RefFlag, true);
      def(ref, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, shallow);
      def(ref, 'dep', defineReactive(ref, 'value', rawValue, null, shallow, isServerRendering()));
      return ref;
  }
  function triggerRef(ref) {
      if (!ref.dep) {
          warn$2("received object is not a triggerable ref.");
      }
      {
          ref.dep &&
              ref.dep.notify({
                  type: "set" /* TriggerOpTypes.SET */,
                  target: ref,
                  key: 'value'
              });
      }
  }
  function unref(ref) {
      return isRef(ref) ? ref.value : ref;
  }
  function proxyRefs(objectWithRefs) {
      if (isReactive(objectWithRefs)) {
          return objectWithRefs;
      }
      var proxy = {};
      var keys = Object.keys(objectWithRefs);
      for (var i = 0; i < keys.length; i++) {
          proxyWithRefUnwrap(proxy, objectWithRefs, keys[i]);
      }
      return proxy;
  }
  function proxyWithRefUnwrap(target, source, key) {
      Object.defineProperty(target, key, {
          enumerable: true,
          configurable: true,
          get: function () {
              var val = source[key];
              if (isRef(val)) {
                  return val.value;
              }
              else {
                  var ob = val && val.__ob__;
                  if (ob)
                      ob.dep.depend();
                  return val;
              }
          },
          set: function (value) {
              var oldValue = source[key];
              if (isRef(oldValue) && !isRef(value)) {
                  oldValue.value = value;
              }
              else {
                  source[key] = value;
              }
          }
      });
  }
  function customRef(factory) {
      var dep = new Dep();
      var _a = factory(function () {
          {
              dep.depend({
                  target: ref,
                  type: "get" /* TrackOpTypes.GET */,
                  key: 'value'
              });
          }
      }, function () {
          {
              dep.notify({
                  target: ref,
                  type: "set" /* TriggerOpTypes.SET */,
                  key: 'value'
              });
          }
      }), get = _a.get, set = _a.set;
      var ref = {
          get value() {
              return get();
          },
          set value(newVal) {
              set(newVal);
          }
      };
      def(ref, RefFlag, true);
      return ref;
  }
  function toRefs(object) {
      if (!isReactive(object)) {
          warn$2("toRefs() expects a reactive object but received a plain one.");
      }
      var ret = isArray(object) ? new Array(object.length) : {};
      for (var key in object) {
          ret[key] = toRef(object, key);
      }
      return ret;
  }
  function toRef(object, key, defaultValue) {
      var val = object[key];
      if (isRef(val)) {
          return val;
      }
      var ref = {
          get value() {
              var val = object[key];
              return val === undefined ? defaultValue : val;
          },
          set value(newVal) {
              object[key] = newVal;
          }
      };
      def(ref, RefFlag, true);
      return ref;
  }

  var rawToReadonlyFlag = "__v_rawToReadonly";
  var rawToShallowReadonlyFlag = "__v_rawToShallowReadonly";
  function readonly(target) {
      return createReadonly(target, false);
  }
  function createReadonly(target, shallow) {
      if (!isPlainObject(target)) {
          {
              if (isArray(target)) {
                  warn$2("Vue 2 does not support readonly arrays.");
              }
              else if (isCollectionType(target)) {
                  warn$2("Vue 2 does not support readonly collection types such as Map or Set.");
              }
              else {
                  warn$2("value cannot be made readonly: ".concat(typeof target));
              }
          }
          return target;
      }
      if (!Object.isExtensible(target)) {
          warn$2("Vue 2 does not support creating readonly proxy for non-extensible object.");
      }
      // already a readonly object
      if (isReadonly(target)) {
          return target;
      }
      // already has a readonly proxy
      var existingFlag = shallow ? rawToShallowReadonlyFlag : rawToReadonlyFlag;
      var existingProxy = target[existingFlag];
      if (existingProxy) {
          return existingProxy;
      }
      var proxy = Object.create(Object.getPrototypeOf(target));
      def(target, existingFlag, proxy);
      def(proxy, "__v_isReadonly" /* ReactiveFlags.IS_READONLY */, true);
      def(proxy, "__v_raw" /* ReactiveFlags.RAW */, target);
      if (isRef(target)) {
          def(proxy, RefFlag, true);
      }
      if (shallow || isShallow(target)) {
          def(proxy, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, true);
      }
      var keys = Object.keys(target);
      for (var i = 0; i < keys.length; i++) {
          defineReadonlyProperty(proxy, target, keys[i], shallow);
      }
      return proxy;
  }
  function defineReadonlyProperty(proxy, target, key, shallow) {
      Object.defineProperty(proxy, key, {
          enumerable: true,
          configurable: true,
          get: function () {
              var val = target[key];
              return shallow || !isPlainObject(val) ? val : readonly(val);
          },
          set: function () {
              warn$2("Set operation on key \"".concat(key, "\" failed: target is readonly."));
          }
      });
  }
  /**
   * Returns a reactive-copy of the original object, where only the root level
   * properties are readonly, and does NOT unwrap refs nor recursively convert
   * returned properties.
   * This is used for creating the props proxy object for stateful components.
   */
  function shallowReadonly(target) {
      return createReadonly(target, true);
  }

  function computed(getterOrOptions, debugOptions) {
      var getter;
      var setter;
      var onlyGetter = isFunction(getterOrOptions);
      if (onlyGetter) {
          getter = getterOrOptions;
          setter = function () {
                  warn$2('Write operation failed: computed value is readonly');
              }
              ;
      }
      else {
          getter = getterOrOptions.get;
          setter = getterOrOptions.set;
      }
      var watcher = isServerRendering()
          ? null
          : new Watcher(currentInstance, getter, noop, { lazy: true });
      if (watcher && debugOptions) {
          watcher.onTrack = debugOptions.onTrack;
          watcher.onTrigger = debugOptions.onTrigger;
      }
      var ref = {
          // some libs rely on the presence effect for checking computed refs
          // from normal refs, but the implementation doesn't matter
          effect: watcher,
          get value() {
              if (watcher) {
                  if (watcher.dirty) {
                      watcher.evaluate();
                  }
                  if (Dep.target) {
                      if (Dep.target.onTrack) {
                          Dep.target.onTrack({
                              effect: Dep.target,
                              target: ref,
                              type: "get" /* TrackOpTypes.GET */,
                              key: 'value'
                          });
                      }
                      watcher.depend();
                  }
                  return watcher.value;
              }
              else {
                  return getter();
              }
          },
          set value(newVal) {
              setter(newVal);
          }
      };
      def(ref, RefFlag, true);
      def(ref, "__v_isReadonly" /* ReactiveFlags.IS_READONLY */, onlyGetter);
      return ref;
  }

  var mark;
  var measure;
  {
      var perf_1 = inBrowser && window.performance;
      /* istanbul ignore if */
      if (perf_1 &&
          // @ts-ignore
          perf_1.mark &&
          // @ts-ignore
          perf_1.measure &&
          // @ts-ignore
          perf_1.clearMarks &&
          // @ts-ignore
          perf_1.clearMeasures) {
          mark = function (tag) { return perf_1.mark(tag); };
          measure = function (name, startTag, endTag) {
              perf_1.measure(name, startTag, endTag);
              perf_1.clearMarks(startTag);
              perf_1.clearMarks(endTag);
              // perf.clearMeasures(name)
          };
      }
  }

  var normalizeEvent = cached(function (name) {
      var passive = name.charAt(0) === '&';
      name = passive ? name.slice(1) : name;
      var once = name.charAt(0) === '~'; // Prefixed last, checked first
      name = once ? name.slice(1) : name;
      var capture = name.charAt(0) === '!';
      name = capture ? name.slice(1) : name;
      return {
          name: name,
          once: once,
          capture: capture,
          passive: passive
      };
  });
  function createFnInvoker(fns, vm) {
      function invoker() {
          var fns = invoker.fns;
          if (isArray(fns)) {
              var cloned = fns.slice();
              for (var i = 0; i < cloned.length; i++) {
                  invokeWithErrorHandling(cloned[i], null, arguments, vm, "v-on handler");
              }
          }
          else {
              // return handler return value for single handlers
              return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
          }
      }
      invoker.fns = fns;
      return invoker;
  }
  function updateListeners(on, oldOn, add, remove, createOnceHandler, vm) {
      var name, cur, old, event;
      for (name in on) {
          cur = on[name];
          old = oldOn[name];
          event = normalizeEvent(name);
          if (isUndef(cur)) {
              warn$2("Invalid handler for event \"".concat(event.name, "\": got ") + String(cur), vm);
          }
          else if (isUndef(old)) {
              if (isUndef(cur.fns)) {
                  cur = on[name] = createFnInvoker(cur, vm);
              }
              if (isTrue(event.once)) {
                  cur = on[name] = createOnceHandler(event.name, cur, event.capture);
              }
              add(event.name, cur, event.capture, event.passive, event.params);
          }
          else if (cur !== old) {
              old.fns = cur;
              on[name] = old;
          }
      }
      for (name in oldOn) {
          if (isUndef(on[name])) {
              event = normalizeEvent(name);
              remove(event.name, oldOn[name], event.capture);
          }
      }
  }

  function mergeVNodeHook(def, hookKey, hook) {
      if (def instanceof VNode) {
          def = def.data.hook || (def.data.hook = {});
      }
      var invoker;
      var oldHook = def[hookKey];
      function wrappedHook() {
          hook.apply(this, arguments);
          // important: remove merged hook to ensure it's called only once
          // and prevent memory leak
          remove$2(invoker.fns, wrappedHook);
      }
      if (isUndef(oldHook)) {
          // no existing hook
          invoker = createFnInvoker([wrappedHook]);
      }
      else {
          /* istanbul ignore if */
          if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
              // already a merged invoker
              invoker = oldHook;
              invoker.fns.push(wrappedHook);
          }
          else {
              // existing plain hook
              invoker = createFnInvoker([oldHook, wrappedHook]);
          }
      }
      invoker.merged = true;
      def[hookKey] = invoker;
  }

  function extractPropsFromVNodeData(data, Ctor, tag) {
      // we are only extracting raw values here.
      // validation and default values are handled in the child
      // component itself.
      var propOptions = Ctor.options.props;
      if (isUndef(propOptions)) {
          return;
      }
      var res = {};
      var attrs = data.attrs, props = data.props;
      if (isDef(attrs) || isDef(props)) {
          for (var key in propOptions) {
              var altKey = hyphenate(key);
              {
                  var keyInLowerCase = key.toLowerCase();
                  if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
                      tip("Prop \"".concat(keyInLowerCase, "\" is passed to component ") +
                          "".concat(formatComponentName(
                          // @ts-expect-error tag is string
                          tag || Ctor), ", but the declared prop name is") +
                          " \"".concat(key, "\". ") +
                          "Note that HTML attributes are case-insensitive and camelCased " +
                          "props need to use their kebab-case equivalents when using in-DOM " +
                          "templates. You should probably use \"".concat(altKey, "\" instead of \"").concat(key, "\"."));
                  }
              }
              checkProp(res, props, key, altKey, true) ||
                  checkProp(res, attrs, key, altKey, false);
          }
      }
      return res;
  }
  function checkProp(res, hash, key, altKey, preserve) {
      if (isDef(hash)) {
          if (hasOwn(hash, key)) {
              res[key] = hash[key];
              if (!preserve) {
                  delete hash[key];
              }
              return true;
          }
          else if (hasOwn(hash, altKey)) {
              res[key] = hash[altKey];
              if (!preserve) {
                  delete hash[altKey];
              }
              return true;
          }
      }
      return false;
  }

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:
  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren(children) {
      for (var i = 0; i < children.length; i++) {
          if (isArray(children[i])) {
              return Array.prototype.concat.apply([], children);
          }
      }
      return children;
  }
  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren(children) {
      return isPrimitive(children)
          ? [createTextVNode(children)]
          : isArray(children)
              ? normalizeArrayChildren(children)
              : undefined;
  }
  function isTextNode(node) {
      return isDef(node) && isDef(node.text) && isFalse(node.isComment);
  }
  function normalizeArrayChildren(children, nestedIndex) {
      var res = [];
      var i, c, lastIndex, last;
      for (i = 0; i < children.length; i++) {
          c = children[i];
          if (isUndef(c) || typeof c === 'boolean')
              continue;
          lastIndex = res.length - 1;
          last = res[lastIndex];
          //  nested
          if (isArray(c)) {
              if (c.length > 0) {
                  c = normalizeArrayChildren(c, "".concat(nestedIndex || '', "_").concat(i));
                  // merge adjacent text nodes
                  if (isTextNode(c[0]) && isTextNode(last)) {
                      res[lastIndex] = createTextVNode(last.text + c[0].text);
                      c.shift();
                  }
                  res.push.apply(res, c);
              }
          }
          else if (isPrimitive(c)) {
              if (isTextNode(last)) {
                  // merge adjacent text nodes
                  // this is necessary for SSR hydration because text nodes are
                  // essentially merged when rendered to HTML strings
                  res[lastIndex] = createTextVNode(last.text + c);
              }
              else if (c !== '') {
                  // convert primitive to vnode
                  res.push(createTextVNode(c));
              }
          }
          else {
              if (isTextNode(c) && isTextNode(last)) {
                  // merge adjacent text nodes
                  res[lastIndex] = createTextVNode(last.text + c.text);
              }
              else {
                  // default key for nested array children (likely generated by v-for)
                  if (isTrue(children._isVList) &&
                      isDef(c.tag) &&
                      isUndef(c.key) &&
                      isDef(nestedIndex)) {
                      c.key = "__vlist".concat(nestedIndex, "_").concat(i, "__");
                  }
                  res.push(c);
              }
          }
      }
      return res;
  }

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;
  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement$1(context, tag, data, children, normalizationType, alwaysNormalize) {
      if (isArray(data) || isPrimitive(data)) {
          normalizationType = children;
          children = data;
          data = undefined;
      }
      if (isTrue(alwaysNormalize)) {
          normalizationType = ALWAYS_NORMALIZE;
      }
      return _createElement(context, tag, data, children, normalizationType);
  }
  function _createElement(context, tag, data, children, normalizationType) {
      if (isDef(data) && isDef(data.__ob__)) {
          warn$2("Avoid using observed data object as vnode data: ".concat(JSON.stringify(data), "\n") + 'Always create fresh vnode data objects in each render!', context);
          return createEmptyVNode();
      }
      // object syntax in v-bind
      if (isDef(data) && isDef(data.is)) {
          tag = data.is;
      }
      if (!tag) {
          // in case of component :is set to falsy value
          return createEmptyVNode();
      }
      // warn against non-primitive key
      if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
          warn$2('Avoid using non-primitive value as key, ' +
              'use string/number value instead.', context);
      }
      // support single function children as default scoped slot
      if (isArray(children) && isFunction(children[0])) {
          data = data || {};
          data.scopedSlots = { default: children[0] };
          children.length = 0;
      }
      if (normalizationType === ALWAYS_NORMALIZE) {
          children = normalizeChildren(children);
      }
      else if (normalizationType === SIMPLE_NORMALIZE) {
          children = simpleNormalizeChildren(children);
      }
      var vnode, ns;
      if (typeof tag === 'string') {
          var Ctor = void 0;
          ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
          if (config.isReservedTag(tag)) {
              // platform built-in elements
              if (isDef(data) &&
                  isDef(data.nativeOn) &&
                  data.tag !== 'component') {
                  warn$2("The .native modifier for v-on is only valid on components but it was used on <".concat(tag, ">."), context);
              }
              vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
          }
          else if ((!data || !data.pre) &&
              isDef((Ctor = resolveAsset(context.$options, 'components', tag)))) {
              // component
              vnode = createComponent(Ctor, data, context, children, tag);
          }
          else {
              // unknown or unlisted namespaced elements
              // check at runtime because it may get assigned a namespace when its
              // parent normalizes children
              vnode = new VNode(tag, data, children, undefined, undefined, context);
          }
      }
      else {
          // direct component options / constructor
          vnode = createComponent(tag, data, context, children);
      }
      if (isArray(vnode)) {
          return vnode;
      }
      else if (isDef(vnode)) {
          if (isDef(ns))
              applyNS(vnode, ns);
          if (isDef(data))
              registerDeepBindings(data);
          return vnode;
      }
      else {
          return createEmptyVNode();
      }
  }
  function applyNS(vnode, ns, force) {
      vnode.ns = ns;
      if (vnode.tag === 'foreignObject') {
          // use default namespace inside foreignObject
          ns = undefined;
          force = true;
      }
      if (isDef(vnode.children)) {
          for (var i = 0, l = vnode.children.length; i < l; i++) {
              var child = vnode.children[i];
              if (isDef(child.tag) &&
                  (isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
                  applyNS(child, ns, force);
              }
          }
      }
  }
  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings(data) {
      if (isObject(data.style)) {
          traverse(data.style);
      }
      if (isObject(data.class)) {
          traverse(data.class);
      }
  }

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList(val, render) {
      var ret = null, i, l, keys, key;
      if (isArray(val) || typeof val === 'string') {
          ret = new Array(val.length);
          for (i = 0, l = val.length; i < l; i++) {
              ret[i] = render(val[i], i);
          }
      }
      else if (typeof val === 'number') {
          ret = new Array(val);
          for (i = 0; i < val; i++) {
              ret[i] = render(i + 1, i);
          }
      }
      else if (isObject(val)) {
          if (hasSymbol && val[Symbol.iterator]) {
              ret = [];
              var iterator = val[Symbol.iterator]();
              var result = iterator.next();
              while (!result.done) {
                  ret.push(render(result.value, ret.length));
                  result = iterator.next();
              }
          }
          else {
              keys = Object.keys(val);
              ret = new Array(keys.length);
              for (i = 0, l = keys.length; i < l; i++) {
                  key = keys[i];
                  ret[i] = render(val[key], key, i);
              }
          }
      }
      if (!isDef(ret)) {
          ret = [];
      }
      ret._isVList = true;
      return ret;
  }

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot(name, fallbackRender, props, bindObject) {
      var scopedSlotFn = this.$scopedSlots[name];
      var nodes;
      if (scopedSlotFn) {
          // scoped slot
          props = props || {};
          if (bindObject) {
              if (!isObject(bindObject)) {
                  warn$2('slot v-bind without argument expects an Object', this);
              }
              props = extend(extend({}, bindObject), props);
          }
          nodes =
              scopedSlotFn(props) ||
                  (isFunction(fallbackRender) ? fallbackRender() : fallbackRender);
      }
      else {
          nodes =
              this.$slots[name] ||
                  (isFunction(fallbackRender) ? fallbackRender() : fallbackRender);
      }
      var target = props && props.slot;
      if (target) {
          return this.$createElement('template', { slot: target }, nodes);
      }
      else {
          return nodes;
      }
  }

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter(id) {
      return resolveAsset(this.$options, 'filters', id, true) || identity;
  }

  function isKeyNotMatch(expect, actual) {
      if (isArray(expect)) {
          return expect.indexOf(actual) === -1;
      }
      else {
          return expect !== actual;
      }
  }
  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
      var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
      if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
          return isKeyNotMatch(builtInKeyName, eventKeyName);
      }
      else if (mappedKeyCode) {
          return isKeyNotMatch(mappedKeyCode, eventKeyCode);
      }
      else if (eventKeyName) {
          return hyphenate(eventKeyName) !== key;
      }
      return eventKeyCode === undefined;
  }

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps(data, tag, value, asProp, isSync) {
      if (value) {
          if (!isObject(value)) {
              warn$2('v-bind without argument expects an Object or Array value', this);
          }
          else {
              if (isArray(value)) {
                  value = toObject(value);
              }
              var hash = void 0;
              var _loop_1 = function (key) {
                  if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
                      hash = data;
                  }
                  else {
                      var type = data.attrs && data.attrs.type;
                      hash =
                          asProp || config.mustUseProp(tag, type, key)
                              ? data.domProps || (data.domProps = {})
                              : data.attrs || (data.attrs = {});
                  }
                  var camelizedKey = camelize(key);
                  var hyphenatedKey = hyphenate(key);
                  if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
                      hash[key] = value[key];
                      if (isSync) {
                          var on = data.on || (data.on = {});
                          on["update:".concat(key)] = function ($event) {
                              value[key] = $event;
                          };
                      }
                  }
              };
              for (var key in value) {
                  _loop_1(key);
              }
          }
      }
      return data;
  }

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic(index, isInFor) {
      var cached = this._staticTrees || (this._staticTrees = []);
      var tree = cached[index];
      // if has already-rendered static tree and not inside v-for,
      // we can reuse the same tree.
      if (tree && !isInFor) {
          return tree;
      }
      // otherwise, render a fresh tree.
      tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, this._c, this // for render fns generated for functional component templates
      );
      markStatic$1(tree, "__static__".concat(index), false);
      return tree;
  }
  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce(tree, index, key) {
      markStatic$1(tree, "__once__".concat(index).concat(key ? "_".concat(key) : ""), true);
      return tree;
  }
  function markStatic$1(tree, key, isOnce) {
      if (isArray(tree)) {
          for (var i = 0; i < tree.length; i++) {
              if (tree[i] && typeof tree[i] !== 'string') {
                  markStaticNode(tree[i], "".concat(key, "_").concat(i), isOnce);
              }
          }
      }
      else {
          markStaticNode(tree, key, isOnce);
      }
  }
  function markStaticNode(node, key, isOnce) {
      node.isStatic = true;
      node.key = key;
      node.isOnce = isOnce;
  }

  function bindObjectListeners(data, value) {
      if (value) {
          if (!isPlainObject(value)) {
              warn$2('v-on without argument expects an Object value', this);
          }
          else {
              var on = (data.on = data.on ? extend({}, data.on) : {});
              for (var key in value) {
                  var existing = on[key];
                  var ours = value[key];
                  on[key] = existing ? [].concat(existing, ours) : ours;
              }
          }
      }
      return data;
  }

  function resolveScopedSlots(fns, res, 
  // the following are added in 2.6
  hasDynamicKeys, contentHashKey) {
      res = res || { $stable: !hasDynamicKeys };
      for (var i = 0; i < fns.length; i++) {
          var slot = fns[i];
          if (isArray(slot)) {
              resolveScopedSlots(slot, res, hasDynamicKeys);
          }
          else if (slot) {
              // marker for reverse proxying v-slot without scope on this.$slots
              // @ts-expect-error
              if (slot.proxy) {
                  // @ts-expect-error
                  slot.fn.proxy = true;
              }
              res[slot.key] = slot.fn;
          }
      }
      if (contentHashKey) {
          res.$key = contentHashKey;
      }
      return res;
  }

  // helper to process dynamic keys for dynamic arguments in v-bind and v-on.
  function bindDynamicKeys(baseObj, values) {
      for (var i = 0; i < values.length; i += 2) {
          var key = values[i];
          if (typeof key === 'string' && key) {
              baseObj[values[i]] = values[i + 1];
          }
          else if (key !== '' && key !== null) {
              // null is a special value for explicitly removing a binding
              warn$2("Invalid value for dynamic directive argument (expected string or null): ".concat(key), this);
          }
      }
      return baseObj;
  }
  // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.
  function prependModifier(value, symbol) {
      return typeof value === 'string' ? symbol + value : value;
  }

  function installRenderHelpers(target) {
      target._o = markOnce;
      target._n = toNumber;
      target._s = toString;
      target._l = renderList;
      target._t = renderSlot;
      target._q = looseEqual;
      target._i = looseIndexOf;
      target._m = renderStatic;
      target._f = resolveFilter;
      target._k = checkKeyCodes;
      target._b = bindObjectProps;
      target._v = createTextVNode;
      target._e = createEmptyVNode;
      target._u = resolveScopedSlots;
      target._g = bindObjectListeners;
      target._d = bindDynamicKeys;
      target._p = prependModifier;
  }

  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots(children, context) {
      if (!children || !children.length) {
          return {};
      }
      var slots = {};
      for (var i = 0, l = children.length; i < l; i++) {
          var child = children[i];
          var data = child.data;
          // remove slot attribute if the node is resolved as a Vue slot node
          if (data && data.attrs && data.attrs.slot) {
              delete data.attrs.slot;
          }
          // named slots should only be respected if the vnode was rendered in the
          // same context.
          if ((child.context === context || child.fnContext === context) &&
              data &&
              data.slot != null) {
              var name_1 = data.slot;
              var slot = slots[name_1] || (slots[name_1] = []);
              if (child.tag === 'template') {
                  slot.push.apply(slot, child.children || []);
              }
              else {
                  slot.push(child);
              }
          }
          else {
              (slots.default || (slots.default = [])).push(child);
          }
      }
      // ignore slots that contains only whitespace
      for (var name_2 in slots) {
          if (slots[name_2].every(isWhitespace)) {
              delete slots[name_2];
          }
      }
      return slots;
  }
  function isWhitespace(node) {
      return (node.isComment && !node.asyncFactory) || node.text === ' ';
  }

  function isAsyncPlaceholder(node) {
      // @ts-expect-error not really boolean type
      return node.isComment && node.asyncFactory;
  }

  function normalizeScopedSlots(ownerVm, scopedSlots, normalSlots, prevScopedSlots) {
      var res;
      var hasNormalSlots = Object.keys(normalSlots).length > 0;
      var isStable = scopedSlots ? !!scopedSlots.$stable : !hasNormalSlots;
      var key = scopedSlots && scopedSlots.$key;
      if (!scopedSlots) {
          res = {};
      }
      else if (scopedSlots._normalized) {
          // fast path 1: child component re-render only, parent did not change
          return scopedSlots._normalized;
      }
      else if (isStable &&
          prevScopedSlots &&
          prevScopedSlots !== emptyObject &&
          key === prevScopedSlots.$key &&
          !hasNormalSlots &&
          !prevScopedSlots.$hasNormal) {
          // fast path 2: stable scoped slots w/ no normal slots to proxy,
          // only need to normalize once
          return prevScopedSlots;
      }
      else {
          res = {};
          for (var key_1 in scopedSlots) {
              if (scopedSlots[key_1] && key_1[0] !== '$') {
                  res[key_1] = normalizeScopedSlot(ownerVm, normalSlots, key_1, scopedSlots[key_1]);
              }
          }
      }
      // expose normal slots on scopedSlots
      for (var key_2 in normalSlots) {
          if (!(key_2 in res)) {
              res[key_2] = proxyNormalSlot(normalSlots, key_2);
          }
      }
      // avoriaz seems to mock a non-extensible $scopedSlots object
      // and when that is passed down this would cause an error
      if (scopedSlots && Object.isExtensible(scopedSlots)) {
          scopedSlots._normalized = res;
      }
      def(res, '$stable', isStable);
      def(res, '$key', key);
      def(res, '$hasNormal', hasNormalSlots);
      return res;
  }
  function normalizeScopedSlot(vm, normalSlots, key, fn) {
      var normalized = function () {
          var cur = currentInstance;
          setCurrentInstance(vm);
          var res = arguments.length ? fn.apply(null, arguments) : fn({});
          res =
              res && typeof res === 'object' && !isArray(res)
                  ? [res] // single vnode
                  : normalizeChildren(res);
          var vnode = res && res[0];
          setCurrentInstance(cur);
          return res &&
              (!vnode ||
                  (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode))) // #9658, #10391
              ? undefined
              : res;
      };
      // this is a slot using the new v-slot syntax without scope. although it is
      // compiled as a scoped slot, render fn users would expect it to be present
      // on this.$slots because the usage is semantically a normal slot.
      if (fn.proxy) {
          Object.defineProperty(normalSlots, key, {
              get: normalized,
              enumerable: true,
              configurable: true
          });
      }
      return normalized;
  }
  function proxyNormalSlot(slots, key) {
      return function () { return slots[key]; };
  }

  function initSetup(vm) {
      var options = vm.$options;
      var setup = options.setup;
      if (setup) {
          var ctx = (vm._setupContext = createSetupContext(vm));
          setCurrentInstance(vm);
          pushTarget();
          var setupResult = invokeWithErrorHandling(setup, null, [vm._props || shallowReactive({}), ctx], vm, "setup");
          popTarget();
          setCurrentInstance();
          if (isFunction(setupResult)) {
              // render function
              // @ts-ignore
              options.render = setupResult;
          }
          else if (isObject(setupResult)) {
              // bindings
              if (setupResult instanceof VNode) {
                  warn$2("setup() should not return VNodes directly - " +
                      "return a render function instead.");
              }
              vm._setupState = setupResult;
              // __sfc indicates compiled bindings from <script setup>
              if (!setupResult.__sfc) {
                  for (var key in setupResult) {
                      if (!isReserved(key)) {
                          proxyWithRefUnwrap(vm, setupResult, key);
                      }
                      else {
                          warn$2("Avoid using variables that start with _ or $ in setup().");
                      }
                  }
              }
              else {
                  // exposed for compiled render fn
                  var proxy = (vm._setupProxy = {});
                  for (var key in setupResult) {
                      if (key !== '__sfc') {
                          proxyWithRefUnwrap(proxy, setupResult, key);
                      }
                  }
              }
          }
          else if (setupResult !== undefined) {
              warn$2("setup() should return an object. Received: ".concat(setupResult === null ? 'null' : typeof setupResult));
          }
      }
  }
  function createSetupContext(vm) {
      var exposeCalled = false;
      return {
          get attrs() {
              if (!vm._attrsProxy) {
                  var proxy = (vm._attrsProxy = {});
                  def(proxy, '_v_attr_proxy', true);
                  syncSetupProxy(proxy, vm.$attrs, emptyObject, vm, '$attrs');
              }
              return vm._attrsProxy;
          },
          get listeners() {
              if (!vm._listenersProxy) {
                  var proxy = (vm._listenersProxy = {});
                  syncSetupProxy(proxy, vm.$listeners, emptyObject, vm, '$listeners');
              }
              return vm._listenersProxy;
          },
          get slots() {
              return initSlotsProxy(vm);
          },
          emit: bind$1(vm.$emit, vm),
          expose: function (exposed) {
              {
                  if (exposeCalled) {
                      warn$2("expose() should be called only once per setup().", vm);
                  }
                  exposeCalled = true;
              }
              if (exposed) {
                  Object.keys(exposed).forEach(function (key) {
                      return proxyWithRefUnwrap(vm, exposed, key);
                  });
              }
          }
      };
  }
  function syncSetupProxy(to, from, prev, instance, type) {
      var changed = false;
      for (var key in from) {
          if (!(key in to)) {
              changed = true;
              defineProxyAttr(to, key, instance, type);
          }
          else if (from[key] !== prev[key]) {
              changed = true;
          }
      }
      for (var key in to) {
          if (!(key in from)) {
              changed = true;
              delete to[key];
          }
      }
      return changed;
  }
  function defineProxyAttr(proxy, key, instance, type) {
      Object.defineProperty(proxy, key, {
          enumerable: true,
          configurable: true,
          get: function () {
              return instance[type][key];
          }
      });
  }
  function initSlotsProxy(vm) {
      if (!vm._slotsProxy) {
          syncSetupSlots((vm._slotsProxy = {}), vm.$scopedSlots);
      }
      return vm._slotsProxy;
  }
  function syncSetupSlots(to, from) {
      for (var key in from) {
          to[key] = from[key];
      }
      for (var key in to) {
          if (!(key in from)) {
              delete to[key];
          }
      }
  }
  /**
   * @internal use manual type def because public setup context type relies on
   * legacy VNode types
   */
  function useSlots() {
      return getContext().slots;
  }
  /**
   * @internal use manual type def because public setup context type relies on
   * legacy VNode types
   */
  function useAttrs() {
      return getContext().attrs;
  }
  /**
   * Vue 2 only
   * @internal use manual type def because public setup context type relies on
   * legacy VNode types
   */
  function useListeners() {
      return getContext().listeners;
  }
  function getContext() {
      if (!currentInstance) {
          warn$2("useContext() called without active instance.");
      }
      var vm = currentInstance;
      return vm._setupContext || (vm._setupContext = createSetupContext(vm));
  }
  /**
   * Runtime helper for merging default declarations. Imported by compiled code
   * only.
   * @internal
   */
  function mergeDefaults(raw, defaults) {
      var props = isArray(raw)
          ? raw.reduce(function (normalized, p) { return ((normalized[p] = {}), normalized); }, {})
          : raw;
      for (var key in defaults) {
          var opt = props[key];
          if (opt) {
              if (isArray(opt) || isFunction(opt)) {
                  props[key] = { type: opt, default: defaults[key] };
              }
              else {
                  opt.default = defaults[key];
              }
          }
          else if (opt === null) {
              props[key] = { default: defaults[key] };
          }
          else {
              warn$2("props default key \"".concat(key, "\" has no corresponding declaration."));
          }
      }
      return props;
  }

  function initRender(vm) {
      vm._vnode = null; // the root of the child tree
      vm._staticTrees = null; // v-once cached trees
      var options = vm.$options;
      var parentVnode = (vm.$vnode = options._parentVnode); // the placeholder node in parent tree
      var renderContext = parentVnode && parentVnode.context;
      vm.$slots = resolveSlots(options._renderChildren, renderContext);
      vm.$scopedSlots = parentVnode
          ? normalizeScopedSlots(vm.$parent, parentVnode.data.scopedSlots, vm.$slots)
          : emptyObject;
      // bind the createElement fn to this instance
      // so that we get proper render context inside it.
      // args order: tag, data, children, normalizationType, alwaysNormalize
      // internal version is used by render functions compiled from templates
      // @ts-expect-error
      vm._c = function (a, b, c, d) { return createElement$1(vm, a, b, c, d, false); };
      // normalization is always applied for the public version, used in
      // user-written render functions.
      // @ts-expect-error
      vm.$createElement = function (a, b, c, d) { return createElement$1(vm, a, b, c, d, true); };
      // $attrs & $listeners are exposed for easier HOC creation.
      // they need to be reactive so that HOCs using them are always updated
      var parentData = parentVnode && parentVnode.data;
      /* istanbul ignore else */
      {
          defineReactive(vm, '$attrs', (parentData && parentData.attrs) || emptyObject, function () {
              !isUpdatingChildComponent && warn$2("$attrs is readonly.", vm);
          }, true);
          defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
              !isUpdatingChildComponent && warn$2("$listeners is readonly.", vm);
          }, true);
      }
  }
  var currentRenderingInstance = null;
  function renderMixin(Vue) {
      // install runtime convenience helpers
      installRenderHelpers(Vue.prototype);
      Vue.prototype.$nextTick = function (fn) {
          return nextTick(fn, this);
      };
      Vue.prototype._render = function () {
          var vm = this;
          var _a = vm.$options, render = _a.render, _parentVnode = _a._parentVnode;
          if (_parentVnode && vm._isMounted) {
              vm.$scopedSlots = normalizeScopedSlots(vm.$parent, _parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
              if (vm._slotsProxy) {
                  syncSetupSlots(vm._slotsProxy, vm.$scopedSlots);
              }
          }
          // set parent vnode. this allows render functions to have access
          // to the data on the placeholder node.
          vm.$vnode = _parentVnode;
          // render self
          var prevInst = currentInstance;
          var prevRenderInst = currentRenderingInstance;
          var vnode;
          try {
              setCurrentInstance(vm);
              currentRenderingInstance = vm;
              vnode = render.call(vm._renderProxy, vm.$createElement);
          }
          catch (e) {
              handleError(e, vm, "render");
              // return error render result,
              // or previous vnode to prevent render error causing blank component
              /* istanbul ignore else */
              if (vm.$options.renderError) {
                  try {
                      vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
                  }
                  catch (e) {
                      handleError(e, vm, "renderError");
                      vnode = vm._vnode;
                  }
              }
              else {
                  vnode = vm._vnode;
              }
          }
          finally {
              currentRenderingInstance = prevRenderInst;
              setCurrentInstance(prevInst);
          }
          // if the returned array contains only a single node, allow it
          if (isArray(vnode) && vnode.length === 1) {
              vnode = vnode[0];
          }
          // return empty vnode in case the render function errored out
          if (!(vnode instanceof VNode)) {
              if (isArray(vnode)) {
                  warn$2('Multiple root nodes returned from render function. Render function ' +
                      'should return a single root node.', vm);
              }
              vnode = createEmptyVNode();
          }
          // set parent
          vnode.parent = _parentVnode;
          return vnode;
      };
  }

  function ensureCtor(comp, base) {
      if (comp.__esModule || (hasSymbol && comp[Symbol.toStringTag] === 'Module')) {
          comp = comp.default;
      }
      return isObject(comp) ? base.extend(comp) : comp;
  }
  function createAsyncPlaceholder(factory, data, context, children, tag) {
      var node = createEmptyVNode();
      node.asyncFactory = factory;
      node.asyncMeta = { data: data, context: context, children: children, tag: tag };
      return node;
  }
  function resolveAsyncComponent(factory, baseCtor) {
      if (isTrue(factory.error) && isDef(factory.errorComp)) {
          return factory.errorComp;
      }
      if (isDef(factory.resolved)) {
          return factory.resolved;
      }
      var owner = currentRenderingInstance;
      if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
          // already pending
          factory.owners.push(owner);
      }
      if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
          return factory.loadingComp;
      }
      if (owner && !isDef(factory.owners)) {
          var owners_1 = (factory.owners = [owner]);
          var sync_1 = true;
          var timerLoading_1 = null;
          var timerTimeout_1 = null;
          owner.$on('hook:destroyed', function () { return remove$2(owners_1, owner); });
          var forceRender_1 = function (renderCompleted) {
              for (var i = 0, l = owners_1.length; i < l; i++) {
                  owners_1[i].$forceUpdate();
              }
              if (renderCompleted) {
                  owners_1.length = 0;
                  if (timerLoading_1 !== null) {
                      clearTimeout(timerLoading_1);
                      timerLoading_1 = null;
                  }
                  if (timerTimeout_1 !== null) {
                      clearTimeout(timerTimeout_1);
                      timerTimeout_1 = null;
                  }
              }
          };
          var resolve = once(function (res) {
              // cache resolved
              factory.resolved = ensureCtor(res, baseCtor);
              // invoke callbacks only if this is not a synchronous resolve
              // (async resolves are shimmed as synchronous during SSR)
              if (!sync_1) {
                  forceRender_1(true);
              }
              else {
                  owners_1.length = 0;
              }
          });
          var reject_1 = once(function (reason) {
              warn$2("Failed to resolve async component: ".concat(String(factory)) +
                      (reason ? "\nReason: ".concat(reason) : ''));
              if (isDef(factory.errorComp)) {
                  factory.error = true;
                  forceRender_1(true);
              }
          });
          var res_1 = factory(resolve, reject_1);
          if (isObject(res_1)) {
              if (isPromise(res_1)) {
                  // () => Promise
                  if (isUndef(factory.resolved)) {
                      res_1.then(resolve, reject_1);
                  }
              }
              else if (isPromise(res_1.component)) {
                  res_1.component.then(resolve, reject_1);
                  if (isDef(res_1.error)) {
                      factory.errorComp = ensureCtor(res_1.error, baseCtor);
                  }
                  if (isDef(res_1.loading)) {
                      factory.loadingComp = ensureCtor(res_1.loading, baseCtor);
                      if (res_1.delay === 0) {
                          factory.loading = true;
                      }
                      else {
                          // @ts-expect-error NodeJS timeout type
                          timerLoading_1 = setTimeout(function () {
                              timerLoading_1 = null;
                              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                                  factory.loading = true;
                                  forceRender_1(false);
                              }
                          }, res_1.delay || 200);
                      }
                  }
                  if (isDef(res_1.timeout)) {
                      // @ts-expect-error NodeJS timeout type
                      timerTimeout_1 = setTimeout(function () {
                          timerTimeout_1 = null;
                          if (isUndef(factory.resolved)) {
                              reject_1("timeout (".concat(res_1.timeout, "ms)") );
                          }
                      }, res_1.timeout);
                  }
              }
          }
          sync_1 = false;
          // return in case resolved synchronously
          return factory.loading ? factory.loadingComp : factory.resolved;
      }
  }

  function getFirstComponentChild(children) {
      if (isArray(children)) {
          for (var i = 0; i < children.length; i++) {
              var c = children[i];
              if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
                  return c;
              }
          }
      }
  }

  function initEvents(vm) {
      vm._events = Object.create(null);
      vm._hasHookEvent = false;
      // init parent attached events
      var listeners = vm.$options._parentListeners;
      if (listeners) {
          updateComponentListeners(vm, listeners);
      }
  }
  var target$1;
  function add$1(event, fn) {
      target$1.$on(event, fn);
  }
  function remove$1(event, fn) {
      target$1.$off(event, fn);
  }
  function createOnceHandler$1(event, fn) {
      var _target = target$1;
      return function onceHandler() {
          var res = fn.apply(null, arguments);
          if (res !== null) {
              _target.$off(event, onceHandler);
          }
      };
  }
  function updateComponentListeners(vm, listeners, oldListeners) {
      target$1 = vm;
      updateListeners(listeners, oldListeners || {}, add$1, remove$1, createOnceHandler$1, vm);
      target$1 = undefined;
  }
  function eventsMixin(Vue) {
      var hookRE = /^hook:/;
      Vue.prototype.$on = function (event, fn) {
          var vm = this;
          if (isArray(event)) {
              for (var i = 0, l = event.length; i < l; i++) {
                  vm.$on(event[i], fn);
              }
          }
          else {
              (vm._events[event] || (vm._events[event] = [])).push(fn);
              // optimize hook:event cost by using a boolean flag marked at registration
              // instead of a hash lookup
              if (hookRE.test(event)) {
                  vm._hasHookEvent = true;
              }
          }
          return vm;
      };
      Vue.prototype.$once = function (event, fn) {
          var vm = this;
          function on() {
              vm.$off(event, on);
              fn.apply(vm, arguments);
          }
          on.fn = fn;
          vm.$on(event, on);
          return vm;
      };
      Vue.prototype.$off = function (event, fn) {
          var vm = this;
          // all
          if (!arguments.length) {
              vm._events = Object.create(null);
              return vm;
          }
          // array of events
          if (isArray(event)) {
              for (var i_1 = 0, l = event.length; i_1 < l; i_1++) {
                  vm.$off(event[i_1], fn);
              }
              return vm;
          }
          // specific event
          var cbs = vm._events[event];
          if (!cbs) {
              return vm;
          }
          if (!fn) {
              vm._events[event] = null;
              return vm;
          }
          // specific handler
          var cb;
          var i = cbs.length;
          while (i--) {
              cb = cbs[i];
              if (cb === fn || cb.fn === fn) {
                  cbs.splice(i, 1);
                  break;
              }
          }
          return vm;
      };
      Vue.prototype.$emit = function (event) {
          var vm = this;
          {
              var lowerCaseEvent = event.toLowerCase();
              if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                  tip("Event \"".concat(lowerCaseEvent, "\" is emitted in component ") +
                      "".concat(formatComponentName(vm), " but the handler is registered for \"").concat(event, "\". ") +
                      "Note that HTML attributes are case-insensitive and you cannot use " +
                      "v-on to listen to camelCase events when using in-DOM templates. " +
                      "You should probably use \"".concat(hyphenate(event), "\" instead of \"").concat(event, "\"."));
              }
          }
          var cbs = vm._events[event];
          if (cbs) {
              cbs = cbs.length > 1 ? toArray(cbs) : cbs;
              var args = toArray(arguments, 1);
              var info = "event handler for \"".concat(event, "\"");
              for (var i = 0, l = cbs.length; i < l; i++) {
                  invokeWithErrorHandling(cbs[i], vm, args, vm, info);
              }
          }
          return vm;
      };
  }

  var activeEffectScope;
  var EffectScope = /** @class */ (function () {
      function EffectScope(detached) {
          if (detached === void 0) { detached = false; }
          this.detached = detached;
          /**
           * @internal
           */
          this.active = true;
          /**
           * @internal
           */
          this.effects = [];
          /**
           * @internal
           */
          this.cleanups = [];
          this.parent = activeEffectScope;
          if (!detached && activeEffectScope) {
              this.index =
                  (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
          }
      }
      EffectScope.prototype.run = function (fn) {
          if (this.active) {
              var currentEffectScope = activeEffectScope;
              try {
                  activeEffectScope = this;
                  return fn();
              }
              finally {
                  activeEffectScope = currentEffectScope;
              }
          }
          else {
              warn$2("cannot run an inactive effect scope.");
          }
      };
      /**
       * This should only be called on non-detached scopes
       * @internal
       */
      EffectScope.prototype.on = function () {
          activeEffectScope = this;
      };
      /**
       * This should only be called on non-detached scopes
       * @internal
       */
      EffectScope.prototype.off = function () {
          activeEffectScope = this.parent;
      };
      EffectScope.prototype.stop = function (fromParent) {
          if (this.active) {
              var i = void 0, l = void 0;
              for (i = 0, l = this.effects.length; i < l; i++) {
                  this.effects[i].teardown();
              }
              for (i = 0, l = this.cleanups.length; i < l; i++) {
                  this.cleanups[i]();
              }
              if (this.scopes) {
                  for (i = 0, l = this.scopes.length; i < l; i++) {
                      this.scopes[i].stop(true);
                  }
              }
              // nested scope, dereference from parent to avoid memory leaks
              if (!this.detached && this.parent && !fromParent) {
                  // optimized O(1) removal
                  var last = this.parent.scopes.pop();
                  if (last && last !== this) {
                      this.parent.scopes[this.index] = last;
                      last.index = this.index;
                  }
              }
              this.parent = undefined;
              this.active = false;
          }
      };
      return EffectScope;
  }());
  function effectScope(detached) {
      return new EffectScope(detached);
  }
  /**
   * @internal
   */
  function recordEffectScope(effect, scope) {
      if (scope === void 0) { scope = activeEffectScope; }
      if (scope && scope.active) {
          scope.effects.push(effect);
      }
  }
  function getCurrentScope() {
      return activeEffectScope;
  }
  function onScopeDispose(fn) {
      if (activeEffectScope) {
          activeEffectScope.cleanups.push(fn);
      }
      else {
          warn$2("onScopeDispose() is called when there is no active effect scope" +
              " to be associated with.");
      }
  }

  var activeInstance = null;
  var isUpdatingChildComponent = false;
  function setActiveInstance(vm) {
      var prevActiveInstance = activeInstance;
      activeInstance = vm;
      return function () {
          activeInstance = prevActiveInstance;
      };
  }
  function initLifecycle(vm) {
      var options = vm.$options;
      // locate first non-abstract parent
      var parent = options.parent;
      if (parent && !options.abstract) {
          while (parent.$options.abstract && parent.$parent) {
              parent = parent.$parent;
          }
          parent.$children.push(vm);
      }
      vm.$parent = parent;
      vm.$root = parent ? parent.$root : vm;
      vm.$children = [];
      vm.$refs = {};
      vm._provided = parent ? parent._provided : Object.create(null);
      vm._watcher = null;
      vm._inactive = null;
      vm._directInactive = false;
      vm._isMounted = false;
      vm._isDestroyed = false;
      vm._isBeingDestroyed = false;
  }
  function lifecycleMixin(Vue) {
      Vue.prototype._update = function (vnode, hydrating) {
          var vm = this;
          var prevEl = vm.$el;
          var prevVnode = vm._vnode;
          var restoreActiveInstance = setActiveInstance(vm);
          vm._vnode = vnode;
          // Vue.prototype.__patch__ is injected in entry points
          // based on the rendering backend used.
          if (!prevVnode) {
              // initial render
              vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
          }
          else {
              // updates
              vm.$el = vm.__patch__(prevVnode, vnode);
          }
          restoreActiveInstance();
          // update __vue__ reference
          if (prevEl) {
              prevEl.__vue__ = null;
          }
          if (vm.$el) {
              vm.$el.__vue__ = vm;
          }
          // if parent is an HOC, update its $el as well
          var wrapper = vm;
          while (wrapper &&
              wrapper.$vnode &&
              wrapper.$parent &&
              wrapper.$vnode === wrapper.$parent._vnode) {
              wrapper.$parent.$el = wrapper.$el;
              wrapper = wrapper.$parent;
          }
          // updated hook is called by the scheduler to ensure that children are
          // updated in a parent's updated hook.
      };
      Vue.prototype.$forceUpdate = function () {
          var vm = this;
          if (vm._watcher) {
              vm._watcher.update();
          }
      };
      Vue.prototype.$destroy = function () {
          var vm = this;
          if (vm._isBeingDestroyed) {
              return;
          }
          callHook$1(vm, 'beforeDestroy');
          vm._isBeingDestroyed = true;
          // remove self from parent
          var parent = vm.$parent;
          if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
              remove$2(parent.$children, vm);
          }
          // teardown scope. this includes both the render watcher and other
          // watchers created
          vm._scope.stop();
          // remove reference from data ob
          // frozen object may not have observer.
          if (vm._data.__ob__) {
              vm._data.__ob__.vmCount--;
          }
          // call the last hook...
          vm._isDestroyed = true;
          // invoke destroy hooks on current rendered tree
          vm.__patch__(vm._vnode, null);
          // fire destroyed hook
          callHook$1(vm, 'destroyed');
          // turn off all instance listeners.
          vm.$off();
          // remove __vue__ reference
          if (vm.$el) {
              vm.$el.__vue__ = null;
          }
          // release circular reference (#6759)
          if (vm.$vnode) {
              vm.$vnode.parent = null;
          }
      };
  }
  function mountComponent(vm, el, hydrating) {
      vm.$el = el;
      if (!vm.$options.render) {
          // @ts-expect-error invalid type
          vm.$options.render = createEmptyVNode;
          {
              /* istanbul ignore if */
              if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
                  vm.$options.el ||
                  el) {
                  warn$2('You are using the runtime-only build of Vue where the template ' +
                      'compiler is not available. Either pre-compile the templates into ' +
                      'render functions, or use the compiler-included build.', vm);
              }
              else {
                  warn$2('Failed to mount component: template or render function not defined.', vm);
              }
          }
      }
      callHook$1(vm, 'beforeMount');
      var updateComponent;
      /* istanbul ignore if */
      if (config.performance && mark) {
          updateComponent = function () {
              var name = vm._name;
              var id = vm._uid;
              var startTag = "vue-perf-start:".concat(id);
              var endTag = "vue-perf-end:".concat(id);
              mark(startTag);
              var vnode = vm._render();
              mark(endTag);
              measure("vue ".concat(name, " render"), startTag, endTag);
              mark(startTag);
              vm._update(vnode, hydrating);
              mark(endTag);
              measure("vue ".concat(name, " patch"), startTag, endTag);
          };
      }
      else {
          updateComponent = function () {
              vm._update(vm._render(), hydrating);
          };
      }
      var watcherOptions = {
          before: function () {
              if (vm._isMounted && !vm._isDestroyed) {
                  callHook$1(vm, 'beforeUpdate');
              }
          }
      };
      {
          watcherOptions.onTrack = function (e) { return callHook$1(vm, 'renderTracked', [e]); };
          watcherOptions.onTrigger = function (e) { return callHook$1(vm, 'renderTriggered', [e]); };
      }
      // we set this to vm._watcher inside the watcher's constructor
      // since the watcher's initial patch may call $forceUpdate (e.g. inside child
      // component's mounted hook), which relies on vm._watcher being already defined
      new Watcher(vm, updateComponent, noop, watcherOptions, true /* isRenderWatcher */);
      hydrating = false;
      // flush buffer for flush: "pre" watchers queued in setup()
      var preWatchers = vm._preWatchers;
      if (preWatchers) {
          for (var i = 0; i < preWatchers.length; i++) {
              preWatchers[i].run();
          }
      }
      // manually mounted instance, call mounted on self
      // mounted is called for render-created child components in its inserted hook
      if (vm.$vnode == null) {
          vm._isMounted = true;
          callHook$1(vm, 'mounted');
      }
      return vm;
  }
  function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
      {
          isUpdatingChildComponent = true;
      }
      // determine whether component has slot children
      // we need to do this before overwriting $options._renderChildren.
      // check if there are dynamic scopedSlots (hand-written or compiled but with
      // dynamic slot names). Static scoped slots compiled from template has the
      // "$stable" marker.
      var newScopedSlots = parentVnode.data.scopedSlots;
      var oldScopedSlots = vm.$scopedSlots;
      var hasDynamicScopedSlot = !!((newScopedSlots && !newScopedSlots.$stable) ||
          (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
          (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
          (!newScopedSlots && vm.$scopedSlots.$key));
      // Any static slot children from the parent may have changed during parent's
      // update. Dynamic scoped slots may also have changed. In such cases, a forced
      // update is necessary to ensure correctness.
      var needsForceUpdate = !!(renderChildren || // has new static slots
          vm.$options._renderChildren || // has old static slots
          hasDynamicScopedSlot);
      var prevVNode = vm.$vnode;
      vm.$options._parentVnode = parentVnode;
      vm.$vnode = parentVnode; // update vm's placeholder node without re-render
      if (vm._vnode) {
          // update child tree's parent
          vm._vnode.parent = parentVnode;
      }
      vm.$options._renderChildren = renderChildren;
      // update $attrs and $listeners hash
      // these are also reactive so they may trigger child update if the child
      // used them during render
      var attrs = parentVnode.data.attrs || emptyObject;
      if (vm._attrsProxy) {
          // force update if attrs are accessed and has changed since it may be
          // passed to a child component.
          if (syncSetupProxy(vm._attrsProxy, attrs, (prevVNode.data && prevVNode.data.attrs) || emptyObject, vm, '$attrs')) {
              needsForceUpdate = true;
          }
      }
      vm.$attrs = attrs;
      // update listeners
      listeners = listeners || emptyObject;
      var prevListeners = vm.$options._parentListeners;
      if (vm._listenersProxy) {
          syncSetupProxy(vm._listenersProxy, listeners, prevListeners || emptyObject, vm, '$listeners');
      }
      vm.$listeners = vm.$options._parentListeners = listeners;
      updateComponentListeners(vm, listeners, prevListeners);
      // update props
      if (propsData && vm.$options.props) {
          toggleObserving(false);
          var props = vm._props;
          var propKeys = vm.$options._propKeys || [];
          for (var i = 0; i < propKeys.length; i++) {
              var key = propKeys[i];
              var propOptions = vm.$options.props; // wtf flow?
              props[key] = validateProp(key, propOptions, propsData, vm);
          }
          toggleObserving(true);
          // keep a copy of raw propsData
          vm.$options.propsData = propsData;
      }
      // resolve slots + force update if has children
      if (needsForceUpdate) {
          vm.$slots = resolveSlots(renderChildren, parentVnode.context);
          vm.$forceUpdate();
      }
      {
          isUpdatingChildComponent = false;
      }
  }
  function isInInactiveTree(vm) {
      while (vm && (vm = vm.$parent)) {
          if (vm._inactive)
              return true;
      }
      return false;
  }
  function activateChildComponent(vm, direct) {
      if (direct) {
          vm._directInactive = false;
          if (isInInactiveTree(vm)) {
              return;
          }
      }
      else if (vm._directInactive) {
          return;
      }
      if (vm._inactive || vm._inactive === null) {
          vm._inactive = false;
          for (var i = 0; i < vm.$children.length; i++) {
              activateChildComponent(vm.$children[i]);
          }
          callHook$1(vm, 'activated');
      }
  }
  function deactivateChildComponent(vm, direct) {
      if (direct) {
          vm._directInactive = true;
          if (isInInactiveTree(vm)) {
              return;
          }
      }
      if (!vm._inactive) {
          vm._inactive = true;
          for (var i = 0; i < vm.$children.length; i++) {
              deactivateChildComponent(vm.$children[i]);
          }
          callHook$1(vm, 'deactivated');
      }
  }
  function callHook$1(vm, hook, args, setContext) {
      if (setContext === void 0) { setContext = true; }
      // #7573 disable dep collection when invoking lifecycle hooks
      pushTarget();
      var prevInst = currentInstance;
      var prevScope = getCurrentScope();
      setContext && setCurrentInstance(vm);
      var handlers = vm.$options[hook];
      var info = "".concat(hook, " hook");
      if (handlers) {
          for (var i = 0, j = handlers.length; i < j; i++) {
              invokeWithErrorHandling(handlers[i], vm, args || null, vm, info);
          }
      }
      if (vm._hasHookEvent) {
          vm.$emit('hook:' + hook);
      }
      if (setContext) {
          setCurrentInstance(prevInst);
          prevScope && prevScope.on();
      }
      popTarget();
  }

  var MAX_UPDATE_COUNT = 100;
  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index$1 = 0;
  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState() {
      index$1 = queue.length = activatedChildren.length = 0;
      has = {};
      {
          circular = {};
      }
      waiting = flushing = false;
  }
  // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.
  var currentFlushTimestamp = 0;
  // Async edge case fix requires storing an event listener's attach timestamp.
  var getNow = Date.now;
  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)
  if (inBrowser && !isIE) {
      var performance_1 = window.performance;
      if (performance_1 &&
          typeof performance_1.now === 'function' &&
          getNow() > document.createEvent('Event').timeStamp) {
          // if the event timestamp, although evaluated AFTER the Date.now(), is
          // smaller than it, it means the event is using a hi-res timestamp,
          // and we need to use the hi-res version for event listener timestamps as
          // well.
          getNow = function () { return performance_1.now(); };
      }
  }
  var sortCompareFn = function (a, b) {
      if (a.post) {
          if (!b.post)
              return 1;
      }
      else if (b.post) {
          return -1;
      }
      return a.id - b.id;
  };
  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue() {
      currentFlushTimestamp = getNow();
      flushing = true;
      var watcher, id;
      // Sort queue before flush.
      // This ensures that:
      // 1. Components are updated from parent to child. (because parent is always
      //    created before the child)
      // 2. A component's user watchers are run before its render watcher (because
      //    user watchers are created before the render watcher)
      // 3. If a component is destroyed during a parent component's watcher run,
      //    its watchers can be skipped.
      queue.sort(sortCompareFn);
      // do not cache length because more watchers might be pushed
      // as we run existing watchers
      for (index$1 = 0; index$1 < queue.length; index$1++) {
          watcher = queue[index$1];
          if (watcher.before) {
              watcher.before();
          }
          id = watcher.id;
          has[id] = null;
          watcher.run();
          // in dev build, check and stop circular updates.
          if (has[id] != null) {
              circular[id] = (circular[id] || 0) + 1;
              if (circular[id] > MAX_UPDATE_COUNT) {
                  warn$2('You may have an infinite update loop ' +
                      (watcher.user
                          ? "in watcher with expression \"".concat(watcher.expression, "\"")
                          : "in a component render function."), watcher.vm);
                  break;
              }
          }
      }
      // keep copies of post queues before resetting state
      var activatedQueue = activatedChildren.slice();
      var updatedQueue = queue.slice();
      resetSchedulerState();
      // call component updated and activated hooks
      callActivatedHooks(activatedQueue);
      callUpdatedHooks(updatedQueue);
      cleanupDeps();
      // devtool hook
      /* istanbul ignore if */
      if (devtools && config.devtools) {
          devtools.emit('flush');
      }
  }
  function callUpdatedHooks(queue) {
      var i = queue.length;
      while (i--) {
          var watcher = queue[i];
          var vm = watcher.vm;
          if (vm && vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
              callHook$1(vm, 'updated');
          }
      }
  }
  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent(vm) {
      // setting _inactive to false here so that a render function can
      // rely on checking whether it's in an inactive tree (e.g. router-view)
      vm._inactive = false;
      activatedChildren.push(vm);
  }
  function callActivatedHooks(queue) {
      for (var i = 0; i < queue.length; i++) {
          queue[i]._inactive = true;
          activateChildComponent(queue[i], true /* true */);
      }
  }
  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher(watcher) {
      var id = watcher.id;
      if (has[id] != null) {
          return;
      }
      if (watcher === Dep.target && watcher.noRecurse) {
          return;
      }
      has[id] = true;
      if (!flushing) {
          queue.push(watcher);
      }
      else {
          // if already flushing, splice the watcher based on its id
          // if already past its id, it will be run next immediately.
          var i = queue.length - 1;
          while (i > index$1 && queue[i].id > watcher.id) {
              i--;
          }
          queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
          waiting = true;
          if (!config.async) {
              flushSchedulerQueue();
              return;
          }
          nextTick(flushSchedulerQueue);
      }
  }

  var WATCHER = "watcher";
  var WATCHER_CB = "".concat(WATCHER, " callback");
  var WATCHER_GETTER = "".concat(WATCHER, " getter");
  var WATCHER_CLEANUP = "".concat(WATCHER, " cleanup");
  // Simple effect.
  function watchEffect(effect, options) {
      return doWatch(effect, null, options);
  }
  function watchPostEffect(effect, options) {
      return doWatch(effect, null, (__assign(__assign({}, options), { flush: 'post' }) ));
  }
  function watchSyncEffect(effect, options) {
      return doWatch(effect, null, (__assign(__assign({}, options), { flush: 'sync' }) ));
  }
  // initial value for watchers to trigger on undefined initial values
  var INITIAL_WATCHER_VALUE = {};
  // implementation
  function watch(source, cb, options) {
      if (typeof cb !== 'function') {
          warn$2("`watch(fn, options?)` signature has been moved to a separate API. " +
              "Use `watchEffect(fn, options?)` instead. `watch` now only " +
              "supports `watch(source, cb, options?) signature.");
      }
      return doWatch(source, cb, options);
  }
  function doWatch(source, cb, _a) {
      var _b = _a === void 0 ? emptyObject : _a, immediate = _b.immediate, deep = _b.deep, _c = _b.flush, flush = _c === void 0 ? 'pre' : _c, onTrack = _b.onTrack, onTrigger = _b.onTrigger;
      if (!cb) {
          if (immediate !== undefined) {
              warn$2("watch() \"immediate\" option is only respected when using the " +
                  "watch(source, callback, options?) signature.");
          }
          if (deep !== undefined) {
              warn$2("watch() \"deep\" option is only respected when using the " +
                  "watch(source, callback, options?) signature.");
          }
      }
      var warnInvalidSource = function (s) {
          warn$2("Invalid watch source: ".concat(s, ". A watch source can only be a getter/effect ") +
              "function, a ref, a reactive object, or an array of these types.");
      };
      var instance = currentInstance;
      var call = function (fn, type, args) {
          if (args === void 0) { args = null; }
          var res = invokeWithErrorHandling(fn, null, args, instance, type);
          if (deep && res && res.__ob__)
              res.__ob__.dep.depend();
          return res;
      };
      var getter;
      var forceTrigger = false;
      var isMultiSource = false;
      if (isRef(source)) {
          getter = function () { return source.value; };
          forceTrigger = isShallow(source);
      }
      else if (isReactive(source)) {
          getter = function () {
              source.__ob__.dep.depend();
              return source;
          };
          deep = true;
      }
      else if (isArray(source)) {
          isMultiSource = true;
          forceTrigger = source.some(function (s) { return isReactive(s) || isShallow(s); });
          getter = function () {
              return source.map(function (s) {
                  if (isRef(s)) {
                      return s.value;
                  }
                  else if (isReactive(s)) {
                      s.__ob__.dep.depend();
                      return traverse(s);
                  }
                  else if (isFunction(s)) {
                      return call(s, WATCHER_GETTER);
                  }
                  else {
                      warnInvalidSource(s);
                  }
              });
          };
      }
      else if (isFunction(source)) {
          if (cb) {
              // getter with cb
              getter = function () { return call(source, WATCHER_GETTER); };
          }
          else {
              // no cb -> simple effect
              getter = function () {
                  if (instance && instance._isDestroyed) {
                      return;
                  }
                  if (cleanup) {
                      cleanup();
                  }
                  return call(source, WATCHER, [onCleanup]);
              };
          }
      }
      else {
          getter = noop;
          warnInvalidSource(source);
      }
      if (cb && deep) {
          var baseGetter_1 = getter;
          getter = function () { return traverse(baseGetter_1()); };
      }
      var cleanup;
      var onCleanup = function (fn) {
          cleanup = watcher.onStop = function () {
              call(fn, WATCHER_CLEANUP);
          };
      };
      // in SSR there is no need to setup an actual effect, and it should be noop
      // unless it's eager
      if (isServerRendering()) {
          // we will also not call the invalidate callback (+ runner is not set up)
          onCleanup = noop;
          if (!cb) {
              getter();
          }
          else if (immediate) {
              call(cb, WATCHER_CB, [
                  getter(),
                  isMultiSource ? [] : undefined,
                  onCleanup
              ]);
          }
          return noop;
      }
      var watcher = new Watcher(currentInstance, getter, noop, {
          lazy: true
      });
      watcher.noRecurse = !cb;
      var oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
      // overwrite default run
      watcher.run = function () {
          if (!watcher.active) {
              return;
          }
          if (cb) {
              // watch(source, cb)
              var newValue = watcher.get();
              if (deep ||
                  forceTrigger ||
                  (isMultiSource
                      ? newValue.some(function (v, i) {
                          return hasChanged(v, oldValue[i]);
                      })
                      : hasChanged(newValue, oldValue))) {
                  // cleanup before running cb again
                  if (cleanup) {
                      cleanup();
                  }
                  call(cb, WATCHER_CB, [
                      newValue,
                      // pass undefined as the old value when it's changed for the first time
                      oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                      onCleanup
                  ]);
                  oldValue = newValue;
              }
          }
          else {
              // watchEffect
              watcher.get();
          }
      };
      if (flush === 'sync') {
          watcher.update = watcher.run;
      }
      else if (flush === 'post') {
          watcher.post = true;
          watcher.update = function () { return queueWatcher(watcher); };
      }
      else {
          // pre
          watcher.update = function () {
              if (instance && instance === currentInstance && !instance._isMounted) {
                  // pre-watcher triggered before
                  var buffer = instance._preWatchers || (instance._preWatchers = []);
                  if (buffer.indexOf(watcher) < 0)
                      buffer.push(watcher);
              }
              else {
                  queueWatcher(watcher);
              }
          };
      }
      {
          watcher.onTrack = onTrack;
          watcher.onTrigger = onTrigger;
      }
      // initial run
      if (cb) {
          if (immediate) {
              watcher.run();
          }
          else {
              oldValue = watcher.get();
          }
      }
      else if (flush === 'post' && instance) {
          instance.$once('hook:mounted', function () { return watcher.get(); });
      }
      else {
          watcher.get();
      }
      return function () {
          watcher.teardown();
      };
  }

  function provide(key, value) {
      if (!currentInstance) {
          {
              warn$2("provide() can only be used inside setup().");
          }
      }
      else {
          // TS doesn't allow symbol as index type
          resolveProvided(currentInstance)[key] = value;
      }
  }
  function resolveProvided(vm) {
      // by default an instance inherits its parent's provides object
      // but when it needs to provide values of its own, it creates its
      // own provides object using parent provides object as prototype.
      // this way in `inject` we can simply look up injections from direct
      // parent and let the prototype chain do the work.
      var existing = vm._provided;
      var parentProvides = vm.$parent && vm.$parent._provided;
      if (parentProvides === existing) {
          return (vm._provided = Object.create(parentProvides));
      }
      else {
          return existing;
      }
  }
  function inject(key, defaultValue, treatDefaultAsFactory) {
      if (treatDefaultAsFactory === void 0) { treatDefaultAsFactory = false; }
      // fallback to `currentRenderingInstance` so that this can be called in
      // a functional component
      var instance = currentInstance;
      if (instance) {
          // #2400
          // to support `app.use` plugins,
          // fallback to appContext's `provides` if the instance is at root
          var provides = instance.$parent && instance.$parent._provided;
          if (provides && key in provides) {
              // TS doesn't allow symbol as index type
              return provides[key];
          }
          else if (arguments.length > 1) {
              return treatDefaultAsFactory && isFunction(defaultValue)
                  ? defaultValue.call(instance)
                  : defaultValue;
          }
          else {
              warn$2("injection \"".concat(String(key), "\" not found."));
          }
      }
      else {
          warn$2("inject() can only be used inside setup() or functional components.");
      }
  }

  /**
   * @internal this function needs manual public type declaration because it relies
   * on previously manually authored types from Vue 2
   */
  function h(type, props, children) {
      if (!currentInstance) {
          warn$2("globally imported h() can only be invoked when there is an active " +
                  "component instance, e.g. synchronously in a component's render or setup function.");
      }
      return createElement$1(currentInstance, type, props, children, 2, true);
  }

  function handleError(err, vm, info) {
      // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
      // See: https://github.com/vuejs/vuex/issues/1505
      pushTarget();
      try {
          if (vm) {
              var cur = vm;
              while ((cur = cur.$parent)) {
                  var hooks = cur.$options.errorCaptured;
                  if (hooks) {
                      for (var i = 0; i < hooks.length; i++) {
                          try {
                              var capture = hooks[i].call(cur, err, vm, info) === false;
                              if (capture)
                                  return;
                          }
                          catch (e) {
                              globalHandleError(e, cur, 'errorCaptured hook');
                          }
                      }
                  }
              }
          }
          globalHandleError(err, vm, info);
      }
      finally {
          popTarget();
      }
  }
  function invokeWithErrorHandling(handler, context, args, vm, info) {
      var res;
      try {
          res = args ? handler.apply(context, args) : handler.call(context);
          if (res && !res._isVue && isPromise(res) && !res._handled) {
              res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
              res._handled = true;
          }
      }
      catch (e) {
          handleError(e, vm, info);
      }
      return res;
  }
  function globalHandleError(err, vm, info) {
      if (config.errorHandler) {
          try {
              return config.errorHandler.call(null, err, vm, info);
          }
          catch (e) {
              // if the user intentionally throws the original error in the handler,
              // do not log it twice
              if (e !== err) {
                  logError(e, null, 'config.errorHandler');
              }
          }
      }
      logError(err, vm, info);
  }
  function logError(err, vm, info) {
      {
          warn$2("Error in ".concat(info, ": \"").concat(err.toString(), "\""), vm);
      }
      /* istanbul ignore else */
      if (inBrowser && typeof console !== 'undefined') {
          console.error(err);
      }
      else {
          throw err;
      }
  }

  /* globals MutationObserver */
  var isUsingMicroTask = false;
  var callbacks = [];
  var pending = false;
  function flushCallbacks() {
      pending = false;
      var copies = callbacks.slice(0);
      callbacks.length = 0;
      for (var i = 0; i < copies.length; i++) {
          copies[i]();
      }
  }
  // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).
  var timerFunc;
  // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
      var p_1 = Promise.resolve();
      timerFunc = function () {
          p_1.then(flushCallbacks);
          // In problematic UIWebViews, Promise.then doesn't completely break, but
          // it can get stuck in a weird state where callbacks are pushed into the
          // microtask queue but the queue isn't being flushed, until the browser
          // needs to do some other work, e.g. handle a timer. Therefore we can
          // "force" the microtask queue to be flushed by adding an empty timer.
          if (isIOS)
              setTimeout(noop);
      };
      isUsingMicroTask = true;
  }
  else if (!isIE &&
      typeof MutationObserver !== 'undefined' &&
      (isNative(MutationObserver) ||
          // PhantomJS and iOS 7.x
          MutationObserver.toString() === '[object MutationObserverConstructor]')) {
      // Use MutationObserver where native Promise is not available,
      // e.g. PhantomJS, iOS7, Android 4.4
      // (#6466 MutationObserver is unreliable in IE11)
      var counter_1 = 1;
      var observer = new MutationObserver(flushCallbacks);
      var textNode_1 = document.createTextNode(String(counter_1));
      observer.observe(textNode_1, {
          characterData: true
      });
      timerFunc = function () {
          counter_1 = (counter_1 + 1) % 2;
          textNode_1.data = String(counter_1);
      };
      isUsingMicroTask = true;
  }
  else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
      // Fallback to setImmediate.
      // Technically it leverages the (macro) task queue,
      // but it is still a better choice than setTimeout.
      timerFunc = function () {
          setImmediate(flushCallbacks);
      };
  }
  else {
      // Fallback to setTimeout.
      timerFunc = function () {
          setTimeout(flushCallbacks, 0);
      };
  }
  /**
   * @internal
   */
  function nextTick(cb, ctx) {
      var _resolve;
      callbacks.push(function () {
          if (cb) {
              try {
                  cb.call(ctx);
              }
              catch (e) {
                  handleError(e, ctx, 'nextTick');
              }
          }
          else if (_resolve) {
              _resolve(ctx);
          }
      });
      if (!pending) {
          pending = true;
          timerFunc();
      }
      // $flow-disable-line
      if (!cb && typeof Promise !== 'undefined') {
          return new Promise(function (resolve) {
              _resolve = resolve;
          });
      }
  }

  function useCssModule(name) {
      /* istanbul ignore else */
      {
          {
              warn$2("useCssModule() is not supported in the global build.");
          }
          return emptyObject;
      }
  }

  /**
   * Runtime helper for SFC's CSS variable injection feature.
   * @private
   */
  function useCssVars(getter) {
      if (!inBrowser && !false)
          return;
      var instance = currentInstance;
      if (!instance) {
          warn$2("useCssVars is called without current active component instance.");
          return;
      }
      watchPostEffect(function () {
          var el = instance.$el;
          var vars = getter(instance, instance._setupProxy);
          if (el && el.nodeType === 1) {
              var style = el.style;
              for (var key in vars) {
                  style.setProperty("--".concat(key), vars[key]);
              }
          }
      });
  }

  /**
   * v3-compatible async component API.
   * @internal the type is manually declared in <root>/types/v3-define-async-component.d.ts
   * because it relies on existing manual types
   */
  function defineAsyncComponent(source) {
      if (isFunction(source)) {
          source = { loader: source };
      }
      var loader = source.loader, loadingComponent = source.loadingComponent, errorComponent = source.errorComponent, _a = source.delay, delay = _a === void 0 ? 200 : _a, timeout = source.timeout, // undefined = never times out
      _b = source.suspensible, // undefined = never times out
      suspensible = _b === void 0 ? false : _b, // in Vue 3 default is true
      userOnError = source.onError;
      if (suspensible) {
          warn$2("The suspensible option for async components is not supported in Vue2. It is ignored.");
      }
      var pendingRequest = null;
      var retries = 0;
      var retry = function () {
          retries++;
          pendingRequest = null;
          return load();
      };
      var load = function () {
          var thisRequest;
          return (pendingRequest ||
              (thisRequest = pendingRequest =
                  loader()
                      .catch(function (err) {
                      err = err instanceof Error ? err : new Error(String(err));
                      if (userOnError) {
                          return new Promise(function (resolve, reject) {
                              var userRetry = function () { return resolve(retry()); };
                              var userFail = function () { return reject(err); };
                              userOnError(err, userRetry, userFail, retries + 1);
                          });
                      }
                      else {
                          throw err;
                      }
                  })
                      .then(function (comp) {
                      if (thisRequest !== pendingRequest && pendingRequest) {
                          return pendingRequest;
                      }
                      if (!comp) {
                          warn$2("Async component loader resolved to undefined. " +
                              "If you are using retry(), make sure to return its return value.");
                      }
                      // interop module default
                      if (comp &&
                          (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                          comp = comp.default;
                      }
                      if (comp && !isObject(comp) && !isFunction(comp)) {
                          throw new Error("Invalid async component load result: ".concat(comp));
                      }
                      return comp;
                  })));
      };
      return function () {
          var component = load();
          return {
              component: component,
              delay: delay,
              timeout: timeout,
              error: errorComponent,
              loading: loadingComponent
          };
      };
  }

  function createLifeCycle(hookName) {
      return function (fn, target) {
          if (target === void 0) { target = currentInstance; }
          if (!target) {
              warn$2("".concat(formatName(hookName), " is called when there is no active component instance to be ") +
                      "associated with. " +
                      "Lifecycle injection APIs can only be used during execution of setup().");
              return;
          }
          return injectHook(target, hookName, fn);
      };
  }
  function formatName(name) {
      if (name === 'beforeDestroy') {
          name = 'beforeUnmount';
      }
      else if (name === 'destroyed') {
          name = 'unmounted';
      }
      return "on".concat(name[0].toUpperCase() + name.slice(1));
  }
  function injectHook(instance, hookName, fn) {
      var options = instance.$options;
      options[hookName] = mergeLifecycleHook(options[hookName], fn);
  }
  var onBeforeMount = createLifeCycle('beforeMount');
  var onMounted = createLifeCycle('mounted');
  var onBeforeUpdate = createLifeCycle('beforeUpdate');
  var onUpdated = createLifeCycle('updated');
  var onBeforeUnmount = createLifeCycle('beforeDestroy');
  var onUnmounted = createLifeCycle('destroyed');
  var onActivated = createLifeCycle('activated');
  var onDeactivated = createLifeCycle('deactivated');
  var onServerPrefetch = createLifeCycle('serverPrefetch');
  var onRenderTracked = createLifeCycle('renderTracked');
  var onRenderTriggered = createLifeCycle('renderTriggered');
  var injectErrorCapturedHook = createLifeCycle('errorCaptured');
  function onErrorCaptured(hook, target) {
      if (target === void 0) { target = currentInstance; }
      injectErrorCapturedHook(hook, target);
  }

  /**
   * Note: also update dist/vue.runtime.mjs when adding new exports to this file.
   */
  var version = '2.7.16';
  /**
   * @internal type is manually declared in <root>/types/v3-define-component.d.ts
   */
  function defineComponent(options) {
      return options;
  }

  var vca = /*#__PURE__*/Object.freeze({
    __proto__: null,
    version: version,
    defineComponent: defineComponent,
    ref: ref$1,
    shallowRef: shallowRef,
    isRef: isRef,
    toRef: toRef,
    toRefs: toRefs,
    unref: unref,
    proxyRefs: proxyRefs,
    customRef: customRef,
    triggerRef: triggerRef,
    reactive: reactive,
    isReactive: isReactive,
    isReadonly: isReadonly,
    isShallow: isShallow,
    isProxy: isProxy,
    shallowReactive: shallowReactive,
    markRaw: markRaw,
    toRaw: toRaw,
    readonly: readonly,
    shallowReadonly: shallowReadonly,
    computed: computed,
    watch: watch,
    watchEffect: watchEffect,
    watchPostEffect: watchPostEffect,
    watchSyncEffect: watchSyncEffect,
    EffectScope: EffectScope,
    effectScope: effectScope,
    onScopeDispose: onScopeDispose,
    getCurrentScope: getCurrentScope,
    provide: provide,
    inject: inject,
    h: h,
    getCurrentInstance: getCurrentInstance,
    useSlots: useSlots,
    useAttrs: useAttrs,
    useListeners: useListeners,
    mergeDefaults: mergeDefaults,
    nextTick: nextTick,
    set: set,
    del: del,
    useCssModule: useCssModule,
    useCssVars: useCssVars,
    defineAsyncComponent: defineAsyncComponent,
    onBeforeMount: onBeforeMount,
    onMounted: onMounted,
    onBeforeUpdate: onBeforeUpdate,
    onUpdated: onUpdated,
    onBeforeUnmount: onBeforeUnmount,
    onUnmounted: onUnmounted,
    onActivated: onActivated,
    onDeactivated: onDeactivated,
    onServerPrefetch: onServerPrefetch,
    onRenderTracked: onRenderTracked,
    onRenderTriggered: onRenderTriggered,
    onErrorCaptured: onErrorCaptured
  });

  var seenObjects = new _Set();
  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse(val) {
      _traverse(val, seenObjects);
      seenObjects.clear();
      return val;
  }
  function _traverse(val, seen) {
      var i, keys;
      var isA = isArray(val);
      if ((!isA && !isObject(val)) ||
          val.__v_skip /* ReactiveFlags.SKIP */ ||
          Object.isFrozen(val) ||
          val instanceof VNode) {
          return;
      }
      if (val.__ob__) {
          var depId = val.__ob__.dep.id;
          if (seen.has(depId)) {
              return;
          }
          seen.add(depId);
      }
      if (isA) {
          i = val.length;
          while (i--)
              _traverse(val[i], seen);
      }
      else if (isRef(val)) {
          _traverse(val.value, seen);
      }
      else {
          keys = Object.keys(val);
          i = keys.length;
          while (i--)
              _traverse(val[keys[i]], seen);
      }
  }

  var uid$1 = 0;
  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   * @internal
   */
  var Watcher = /** @class */ (function () {
      function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
          recordEffectScope(this, 
          // if the active effect scope is manually created (not a component scope),
          // prioritize it
          activeEffectScope && !activeEffectScope._vm
              ? activeEffectScope
              : vm
                  ? vm._scope
                  : undefined);
          if ((this.vm = vm) && isRenderWatcher) {
              vm._watcher = this;
          }
          // options
          if (options) {
              this.deep = !!options.deep;
              this.user = !!options.user;
              this.lazy = !!options.lazy;
              this.sync = !!options.sync;
              this.before = options.before;
              {
                  this.onTrack = options.onTrack;
                  this.onTrigger = options.onTrigger;
              }
          }
          else {
              this.deep = this.user = this.lazy = this.sync = false;
          }
          this.cb = cb;
          this.id = ++uid$1; // uid for batching
          this.active = true;
          this.post = false;
          this.dirty = this.lazy; // for lazy watchers
          this.deps = [];
          this.newDeps = [];
          this.depIds = new _Set();
          this.newDepIds = new _Set();
          this.expression = expOrFn.toString() ;
          // parse expression for getter
          if (isFunction(expOrFn)) {
              this.getter = expOrFn;
          }
          else {
              this.getter = parsePath(expOrFn);
              if (!this.getter) {
                  this.getter = noop;
                  warn$2("Failed watching path: \"".concat(expOrFn, "\" ") +
                          'Watcher only accepts simple dot-delimited paths. ' +
                          'For full control, use a function instead.', vm);
              }
          }
          this.value = this.lazy ? undefined : this.get();
      }
      /**
       * Evaluate the getter, and re-collect dependencies.
       */
      Watcher.prototype.get = function () {
          pushTarget(this);
          var value;
          var vm = this.vm;
          try {
              value = this.getter.call(vm, vm);
          }
          catch (e) {
              if (this.user) {
                  handleError(e, vm, "getter for watcher \"".concat(this.expression, "\""));
              }
              else {
                  throw e;
              }
          }
          finally {
              // "touch" every property so they are all tracked as
              // dependencies for deep watching
              if (this.deep) {
                  traverse(value);
              }
              popTarget();
              this.cleanupDeps();
          }
          return value;
      };
      /**
       * Add a dependency to this directive.
       */
      Watcher.prototype.addDep = function (dep) {
          var id = dep.id;
          if (!this.newDepIds.has(id)) {
              this.newDepIds.add(id);
              this.newDeps.push(dep);
              if (!this.depIds.has(id)) {
                  dep.addSub(this);
              }
          }
      };
      /**
       * Clean up for dependency collection.
       */
      Watcher.prototype.cleanupDeps = function () {
          var i = this.deps.length;
          while (i--) {
              var dep = this.deps[i];
              if (!this.newDepIds.has(dep.id)) {
                  dep.removeSub(this);
              }
          }
          var tmp = this.depIds;
          this.depIds = this.newDepIds;
          this.newDepIds = tmp;
          this.newDepIds.clear();
          tmp = this.deps;
          this.deps = this.newDeps;
          this.newDeps = tmp;
          this.newDeps.length = 0;
      };
      /**
       * Subscriber interface.
       * Will be called when a dependency changes.
       */
      Watcher.prototype.update = function () {
          /* istanbul ignore else */
          if (this.lazy) {
              this.dirty = true;
          }
          else if (this.sync) {
              this.run();
          }
          else {
              queueWatcher(this);
          }
      };
      /**
       * Scheduler job interface.
       * Will be called by the scheduler.
       */
      Watcher.prototype.run = function () {
          if (this.active) {
              var value = this.get();
              if (value !== this.value ||
                  // Deep watchers and watchers on Object/Arrays should fire even
                  // when the value is the same, because the value may
                  // have mutated.
                  isObject(value) ||
                  this.deep) {
                  // set new value
                  var oldValue = this.value;
                  this.value = value;
                  if (this.user) {
                      var info = "callback for watcher \"".concat(this.expression, "\"");
                      invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
                  }
                  else {
                      this.cb.call(this.vm, value, oldValue);
                  }
              }
          }
      };
      /**
       * Evaluate the value of the watcher.
       * This only gets called for lazy watchers.
       */
      Watcher.prototype.evaluate = function () {
          this.value = this.get();
          this.dirty = false;
      };
      /**
       * Depend on all deps collected by this watcher.
       */
      Watcher.prototype.depend = function () {
          var i = this.deps.length;
          while (i--) {
              this.deps[i].depend();
          }
      };
      /**
       * Remove self from all dependencies' subscriber list.
       */
      Watcher.prototype.teardown = function () {
          if (this.vm && !this.vm._isBeingDestroyed) {
              remove$2(this.vm._scope.effects, this);
          }
          if (this.active) {
              var i = this.deps.length;
              while (i--) {
                  this.deps[i].removeSub(this);
              }
              this.active = false;
              if (this.onStop) {
                  this.onStop();
              }
          }
      };
      return Watcher;
  }());

  var sharedPropertyDefinition = {
      enumerable: true,
      configurable: true,
      get: noop,
      set: noop
  };
  function proxy(target, sourceKey, key) {
      sharedPropertyDefinition.get = function proxyGetter() {
          return this[sourceKey][key];
      };
      sharedPropertyDefinition.set = function proxySetter(val) {
          this[sourceKey][key] = val;
      };
      Object.defineProperty(target, key, sharedPropertyDefinition);
  }
  function initState(vm) {
      var opts = vm.$options;
      if (opts.props)
          initProps$1(vm, opts.props);
      // Composition API
      initSetup(vm);
      if (opts.methods)
          initMethods(vm, opts.methods);
      if (opts.data) {
          initData(vm);
      }
      else {
          var ob = observe((vm._data = {}));
          ob && ob.vmCount++;
      }
      if (opts.computed)
          initComputed$1(vm, opts.computed);
      if (opts.watch && opts.watch !== nativeWatch) {
          initWatch(vm, opts.watch);
      }
  }
  function initProps$1(vm, propsOptions) {
      var propsData = vm.$options.propsData || {};
      var props = (vm._props = shallowReactive({}));
      // cache prop keys so that future props updates can iterate using Array
      // instead of dynamic object key enumeration.
      var keys = (vm.$options._propKeys = []);
      var isRoot = !vm.$parent;
      // root instance props should be converted
      if (!isRoot) {
          toggleObserving(false);
      }
      var _loop_1 = function (key) {
          keys.push(key);
          var value = validateProp(key, propsOptions, propsData, vm);
          /* istanbul ignore else */
          {
              var hyphenatedKey = hyphenate(key);
              if (isReservedAttribute(hyphenatedKey) ||
                  config.isReservedAttr(hyphenatedKey)) {
                  warn$2("\"".concat(hyphenatedKey, "\" is a reserved attribute and cannot be used as component prop."), vm);
              }
              defineReactive(props, key, value, function () {
                  if (!isRoot && !isUpdatingChildComponent) {
                      warn$2("Avoid mutating a prop directly since the value will be " +
                          "overwritten whenever the parent component re-renders. " +
                          "Instead, use a data or computed property based on the prop's " +
                          "value. Prop being mutated: \"".concat(key, "\""), vm);
                  }
              }, true /* shallow */);
          }
          // static props are already proxied on the component's prototype
          // during Vue.extend(). We only need to proxy props defined at
          // instantiation here.
          if (!(key in vm)) {
              proxy(vm, "_props", key);
          }
      };
      for (var key in propsOptions) {
          _loop_1(key);
      }
      toggleObserving(true);
  }
  function initData(vm) {
      var data = vm.$options.data;
      data = vm._data = isFunction(data) ? getData(data, vm) : data || {};
      if (!isPlainObject(data)) {
          data = {};
          warn$2('data functions should return an object:\n' +
                  'https://v2.vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
      }
      // proxy data on instance
      var keys = Object.keys(data);
      var props = vm.$options.props;
      var methods = vm.$options.methods;
      var i = keys.length;
      while (i--) {
          var key = keys[i];
          {
              if (methods && hasOwn(methods, key)) {
                  warn$2("Method \"".concat(key, "\" has already been defined as a data property."), vm);
              }
          }
          if (props && hasOwn(props, key)) {
              warn$2("The data property \"".concat(key, "\" is already declared as a prop. ") +
                      "Use prop default value instead.", vm);
          }
          else if (!isReserved(key)) {
              proxy(vm, "_data", key);
          }
      }
      // observe data
      var ob = observe(data);
      ob && ob.vmCount++;
  }
  function getData(data, vm) {
      // #7573 disable dep collection when invoking data getters
      pushTarget();
      try {
          return data.call(vm, vm);
      }
      catch (e) {
          handleError(e, vm, "data()");
          return {};
      }
      finally {
          popTarget();
      }
  }
  var computedWatcherOptions = { lazy: true };
  function initComputed$1(vm, computed) {
      // $flow-disable-line
      var watchers = (vm._computedWatchers = Object.create(null));
      // computed properties are just getters during SSR
      var isSSR = isServerRendering();
      for (var key in computed) {
          var userDef = computed[key];
          var getter = isFunction(userDef) ? userDef : userDef.get;
          if (getter == null) {
              warn$2("Getter is missing for computed property \"".concat(key, "\"."), vm);
          }
          if (!isSSR) {
              // create internal watcher for the computed property.
              watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
          }
          // component-defined computed properties are already defined on the
          // component prototype. We only need to define computed properties defined
          // at instantiation here.
          if (!(key in vm)) {
              defineComputed(vm, key, userDef);
          }
          else {
              if (key in vm.$data) {
                  warn$2("The computed property \"".concat(key, "\" is already defined in data."), vm);
              }
              else if (vm.$options.props && key in vm.$options.props) {
                  warn$2("The computed property \"".concat(key, "\" is already defined as a prop."), vm);
              }
              else if (vm.$options.methods && key in vm.$options.methods) {
                  warn$2("The computed property \"".concat(key, "\" is already defined as a method."), vm);
              }
          }
      }
  }
  function defineComputed(target, key, userDef) {
      var shouldCache = !isServerRendering();
      if (isFunction(userDef)) {
          sharedPropertyDefinition.get = shouldCache
              ? createComputedGetter(key)
              : createGetterInvoker(userDef);
          sharedPropertyDefinition.set = noop;
      }
      else {
          sharedPropertyDefinition.get = userDef.get
              ? shouldCache && userDef.cache !== false
                  ? createComputedGetter(key)
                  : createGetterInvoker(userDef.get)
              : noop;
          sharedPropertyDefinition.set = userDef.set || noop;
      }
      if (sharedPropertyDefinition.set === noop) {
          sharedPropertyDefinition.set = function () {
              warn$2("Computed property \"".concat(key, "\" was assigned to but it has no setter."), this);
          };
      }
      Object.defineProperty(target, key, sharedPropertyDefinition);
  }
  function createComputedGetter(key) {
      return function computedGetter() {
          var watcher = this._computedWatchers && this._computedWatchers[key];
          if (watcher) {
              if (watcher.dirty) {
                  watcher.evaluate();
              }
              if (Dep.target) {
                  if (Dep.target.onTrack) {
                      Dep.target.onTrack({
                          effect: Dep.target,
                          target: this,
                          type: "get" /* TrackOpTypes.GET */,
                          key: key
                      });
                  }
                  watcher.depend();
              }
              return watcher.value;
          }
      };
  }
  function createGetterInvoker(fn) {
      return function computedGetter() {
          return fn.call(this, this);
      };
  }
  function initMethods(vm, methods) {
      var props = vm.$options.props;
      for (var key in methods) {
          {
              if (typeof methods[key] !== 'function') {
                  warn$2("Method \"".concat(key, "\" has type \"").concat(typeof methods[key], "\" in the component definition. ") +
                      "Did you reference the function correctly?", vm);
              }
              if (props && hasOwn(props, key)) {
                  warn$2("Method \"".concat(key, "\" has already been defined as a prop."), vm);
              }
              if (key in vm && isReserved(key)) {
                  warn$2("Method \"".concat(key, "\" conflicts with an existing Vue instance method. ") +
                      "Avoid defining component methods that start with _ or $.");
              }
          }
          vm[key] = typeof methods[key] !== 'function' ? noop : bind$1(methods[key], vm);
      }
  }
  function initWatch(vm, watch) {
      for (var key in watch) {
          var handler = watch[key];
          if (isArray(handler)) {
              for (var i = 0; i < handler.length; i++) {
                  createWatcher(vm, key, handler[i]);
              }
          }
          else {
              createWatcher(vm, key, handler);
          }
      }
  }
  function createWatcher(vm, expOrFn, handler, options) {
      if (isPlainObject(handler)) {
          options = handler;
          handler = handler.handler;
      }
      if (typeof handler === 'string') {
          handler = vm[handler];
      }
      return vm.$watch(expOrFn, handler, options);
  }
  function stateMixin(Vue) {
      // flow somehow has problems with directly declared definition object
      // when using Object.defineProperty, so we have to procedurally build up
      // the object here.
      var dataDef = {};
      dataDef.get = function () {
          return this._data;
      };
      var propsDef = {};
      propsDef.get = function () {
          return this._props;
      };
      {
          dataDef.set = function () {
              warn$2('Avoid replacing instance root $data. ' +
                  'Use nested data properties instead.', this);
          };
          propsDef.set = function () {
              warn$2("$props is readonly.", this);
          };
      }
      Object.defineProperty(Vue.prototype, '$data', dataDef);
      Object.defineProperty(Vue.prototype, '$props', propsDef);
      Vue.prototype.$set = set;
      Vue.prototype.$delete = del;
      Vue.prototype.$watch = function (expOrFn, cb, options) {
          var vm = this;
          if (isPlainObject(cb)) {
              return createWatcher(vm, expOrFn, cb, options);
          }
          options = options || {};
          options.user = true;
          var watcher = new Watcher(vm, expOrFn, cb, options);
          if (options.immediate) {
              var info = "callback for immediate watcher \"".concat(watcher.expression, "\"");
              pushTarget();
              invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
              popTarget();
          }
          return function unwatchFn() {
              watcher.teardown();
          };
      };
  }

  function initProvide(vm) {
      var provideOption = vm.$options.provide;
      if (provideOption) {
          var provided = isFunction(provideOption)
              ? provideOption.call(vm)
              : provideOption;
          if (!isObject(provided)) {
              return;
          }
          var source = resolveProvided(vm);
          // IE9 doesn't support Object.getOwnPropertyDescriptors so we have to
          // iterate the keys ourselves.
          var keys = hasSymbol ? Reflect.ownKeys(provided) : Object.keys(provided);
          for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              Object.defineProperty(source, key, Object.getOwnPropertyDescriptor(provided, key));
          }
      }
  }
  function initInjections(vm) {
      var result = resolveInject(vm.$options.inject, vm);
      if (result) {
          toggleObserving(false);
          Object.keys(result).forEach(function (key) {
              /* istanbul ignore else */
              {
                  defineReactive(vm, key, result[key], function () {
                      warn$2("Avoid mutating an injected value directly since the changes will be " +
                          "overwritten whenever the provided component re-renders. " +
                          "injection being mutated: \"".concat(key, "\""), vm);
                  });
              }
          });
          toggleObserving(true);
      }
  }
  function resolveInject(inject, vm) {
      if (inject) {
          // inject is :any because flow is not smart enough to figure out cached
          var result = Object.create(null);
          var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);
          for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              // #6574 in case the inject object is observed...
              if (key === '__ob__')
                  continue;
              var provideKey = inject[key].from;
              if (provideKey in vm._provided) {
                  result[key] = vm._provided[provideKey];
              }
              else if ('default' in inject[key]) {
                  var provideDefault = inject[key].default;
                  result[key] = isFunction(provideDefault)
                      ? provideDefault.call(vm)
                      : provideDefault;
              }
              else {
                  warn$2("Injection \"".concat(key, "\" not found"), vm);
              }
          }
          return result;
      }
  }

  var uid = 0;
  function initMixin$1(Vue) {
      Vue.prototype._init = function (options) {
          var vm = this;
          // a uid
          vm._uid = uid++;
          var startTag, endTag;
          /* istanbul ignore if */
          if (config.performance && mark) {
              startTag = "vue-perf-start:".concat(vm._uid);
              endTag = "vue-perf-end:".concat(vm._uid);
              mark(startTag);
          }
          // a flag to mark this as a Vue instance without having to do instanceof
          // check
          vm._isVue = true;
          // avoid instances from being observed
          vm.__v_skip = true;
          // effect scope
          vm._scope = new EffectScope(true /* detached */);
          // #13134 edge case where a child component is manually created during the
          // render of a parent component
          vm._scope.parent = undefined;
          vm._scope._vm = true;
          // merge options
          if (options && options._isComponent) {
              // optimize internal component instantiation
              // since dynamic options merging is pretty slow, and none of the
              // internal component options needs special treatment.
              initInternalComponent(vm, options);
          }
          else {
              vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
          }
          /* istanbul ignore else */
          {
              initProxy(vm);
          }
          // expose real self
          vm._self = vm;
          initLifecycle(vm);
          initEvents(vm);
          initRender(vm);
          callHook$1(vm, 'beforeCreate', undefined, false /* setContext */);
          initInjections(vm); // resolve injections before data/props
          initState(vm);
          initProvide(vm); // resolve provide after data/props
          callHook$1(vm, 'created');
          /* istanbul ignore if */
          if (config.performance && mark) {
              vm._name = formatComponentName(vm, false);
              mark(endTag);
              measure("vue ".concat(vm._name, " init"), startTag, endTag);
          }
          if (vm.$options.el) {
              vm.$mount(vm.$options.el);
          }
      };
  }
  function initInternalComponent(vm, options) {
      var opts = (vm.$options = Object.create(vm.constructor.options));
      // doing this because it's faster than dynamic enumeration.
      var parentVnode = options._parentVnode;
      opts.parent = options.parent;
      opts._parentVnode = parentVnode;
      var vnodeComponentOptions = parentVnode.componentOptions;
      opts.propsData = vnodeComponentOptions.propsData;
      opts._parentListeners = vnodeComponentOptions.listeners;
      opts._renderChildren = vnodeComponentOptions.children;
      opts._componentTag = vnodeComponentOptions.tag;
      if (options.render) {
          opts.render = options.render;
          opts.staticRenderFns = options.staticRenderFns;
      }
  }
  function resolveConstructorOptions(Ctor) {
      var options = Ctor.options;
      if (Ctor.super) {
          var superOptions = resolveConstructorOptions(Ctor.super);
          var cachedSuperOptions = Ctor.superOptions;
          if (superOptions !== cachedSuperOptions) {
              // super option changed,
              // need to resolve new options.
              Ctor.superOptions = superOptions;
              // check if there are any late-modified/attached options (#4976)
              var modifiedOptions = resolveModifiedOptions(Ctor);
              // update base extend options
              if (modifiedOptions) {
                  extend(Ctor.extendOptions, modifiedOptions);
              }
              options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
              if (options.name) {
                  options.components[options.name] = Ctor;
              }
          }
      }
      return options;
  }
  function resolveModifiedOptions(Ctor) {
      var modified;
      var latest = Ctor.options;
      var sealed = Ctor.sealedOptions;
      for (var key in latest) {
          if (latest[key] !== sealed[key]) {
              if (!modified)
                  modified = {};
              modified[key] = latest[key];
          }
      }
      return modified;
  }

  function FunctionalRenderContext(data, props, children, parent, Ctor) {
      var _this = this;
      var options = Ctor.options;
      // ensure the createElement function in functional components
      // gets a unique context - this is necessary for correct named slot check
      var contextVm;
      if (hasOwn(parent, '_uid')) {
          contextVm = Object.create(parent);
          contextVm._original = parent;
      }
      else {
          // the context vm passed in is a functional context as well.
          // in this case we want to make sure we are able to get a hold to the
          // real context instance.
          contextVm = parent;
          // @ts-ignore
          parent = parent._original;
      }
      var isCompiled = isTrue(options._compiled);
      var needNormalization = !isCompiled;
      this.data = data;
      this.props = props;
      this.children = children;
      this.parent = parent;
      this.listeners = data.on || emptyObject;
      this.injections = resolveInject(options.inject, parent);
      this.slots = function () {
          if (!_this.$slots) {
              normalizeScopedSlots(parent, data.scopedSlots, (_this.$slots = resolveSlots(children, parent)));
          }
          return _this.$slots;
      };
      Object.defineProperty(this, 'scopedSlots', {
          enumerable: true,
          get: function () {
              return normalizeScopedSlots(parent, data.scopedSlots, this.slots());
          }
      });
      // support for compiled functional template
      if (isCompiled) {
          // exposing $options for renderStatic()
          this.$options = options;
          // pre-resolve slots for renderSlot()
          this.$slots = this.slots();
          this.$scopedSlots = normalizeScopedSlots(parent, data.scopedSlots, this.$slots);
      }
      if (options._scopeId) {
          this._c = function (a, b, c, d) {
              var vnode = createElement$1(contextVm, a, b, c, d, needNormalization);
              if (vnode && !isArray(vnode)) {
                  vnode.fnScopeId = options._scopeId;
                  vnode.fnContext = parent;
              }
              return vnode;
          };
      }
      else {
          this._c = function (a, b, c, d) {
              return createElement$1(contextVm, a, b, c, d, needNormalization);
          };
      }
  }
  installRenderHelpers(FunctionalRenderContext.prototype);
  function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
      var options = Ctor.options;
      var props = {};
      var propOptions = options.props;
      if (isDef(propOptions)) {
          for (var key in propOptions) {
              props[key] = validateProp(key, propOptions, propsData || emptyObject);
          }
      }
      else {
          if (isDef(data.attrs))
              mergeProps(props, data.attrs);
          if (isDef(data.props))
              mergeProps(props, data.props);
      }
      var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
      var vnode = options.render.call(null, renderContext._c, renderContext);
      if (vnode instanceof VNode) {
          return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
      }
      else if (isArray(vnode)) {
          var vnodes = normalizeChildren(vnode) || [];
          var res = new Array(vnodes.length);
          for (var i = 0; i < vnodes.length; i++) {
              res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
          }
          return res;
      }
  }
  function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
      // #7817 clone node before setting fnContext, otherwise if the node is reused
      // (e.g. it was from a cached normal slot) the fnContext causes named slots
      // that should not be matched to match.
      var clone = cloneVNode(vnode);
      clone.fnContext = contextVm;
      clone.fnOptions = options;
      {
          (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext =
              renderContext;
      }
      if (data.slot) {
          (clone.data || (clone.data = {})).slot = data.slot;
      }
      return clone;
  }
  function mergeProps(to, from) {
      for (var key in from) {
          to[camelize(key)] = from[key];
      }
  }

  function getComponentName(options) {
      return options.name || options.__name || options._componentTag;
  }
  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
      init: function (vnode, hydrating) {
          if (vnode.componentInstance &&
              !vnode.componentInstance._isDestroyed &&
              vnode.data.keepAlive) {
              // kept-alive components, treat as a patch
              var mountedNode = vnode; // work around flow
              componentVNodeHooks.prepatch(mountedNode, mountedNode);
          }
          else {
              var child = (vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance));
              child.$mount(hydrating ? vnode.elm : undefined, hydrating);
          }
      },
      prepatch: function (oldVnode, vnode) {
          var options = vnode.componentOptions;
          var child = (vnode.componentInstance = oldVnode.componentInstance);
          updateChildComponent(child, options.propsData, // updated props
          options.listeners, // updated listeners
          vnode, // new parent vnode
          options.children // new children
          );
      },
      insert: function (vnode) {
          var context = vnode.context, componentInstance = vnode.componentInstance;
          if (!componentInstance._isMounted) {
              componentInstance._isMounted = true;
              callHook$1(componentInstance, 'mounted');
          }
          if (vnode.data.keepAlive) {
              if (context._isMounted) {
                  // vue-router#1212
                  // During updates, a kept-alive component's child components may
                  // change, so directly walking the tree here may call activated hooks
                  // on incorrect children. Instead we push them into a queue which will
                  // be processed after the whole patch process ended.
                  queueActivatedComponent(componentInstance);
              }
              else {
                  activateChildComponent(componentInstance, true /* direct */);
              }
          }
      },
      destroy: function (vnode) {
          var componentInstance = vnode.componentInstance;
          if (!componentInstance._isDestroyed) {
              if (!vnode.data.keepAlive) {
                  componentInstance.$destroy();
              }
              else {
                  deactivateChildComponent(componentInstance, true /* direct */);
              }
          }
      }
  };
  var hooksToMerge = Object.keys(componentVNodeHooks);
  function createComponent(Ctor, data, context, children, tag) {
      if (isUndef(Ctor)) {
          return;
      }
      var baseCtor = context.$options._base;
      // plain options object: turn it into a constructor
      if (isObject(Ctor)) {
          Ctor = baseCtor.extend(Ctor);
      }
      // if at this stage it's not a constructor or an async component factory,
      // reject.
      if (typeof Ctor !== 'function') {
          {
              warn$2("Invalid Component definition: ".concat(String(Ctor)), context);
          }
          return;
      }
      // async component
      var asyncFactory;
      // @ts-expect-error
      if (isUndef(Ctor.cid)) {
          asyncFactory = Ctor;
          Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
          if (Ctor === undefined) {
              // return a placeholder node for async component, which is rendered
              // as a comment node but preserves all the raw information for the node.
              // the information will be used for async server-rendering and hydration.
              return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
          }
      }
      data = data || {};
      // resolve constructor options in case global mixins are applied after
      // component constructor creation
      resolveConstructorOptions(Ctor);
      // transform component v-model data into props & events
      if (isDef(data.model)) {
          // @ts-expect-error
          transformModel(Ctor.options, data);
      }
      // extract props
      // @ts-expect-error
      var propsData = extractPropsFromVNodeData(data, Ctor, tag);
      // functional component
      // @ts-expect-error
      if (isTrue(Ctor.options.functional)) {
          return createFunctionalComponent(Ctor, propsData, data, context, children);
      }
      // extract listeners, since these needs to be treated as
      // child component listeners instead of DOM listeners
      var listeners = data.on;
      // replace with listeners with .native modifier
      // so it gets processed during parent component patch.
      data.on = data.nativeOn;
      // @ts-expect-error
      if (isTrue(Ctor.options.abstract)) {
          // abstract components do not keep anything
          // other than props & listeners & slot
          // work around flow
          var slot = data.slot;
          data = {};
          if (slot) {
              data.slot = slot;
          }
      }
      // install component management hooks onto the placeholder node
      installComponentHooks(data);
      // return a placeholder vnode
      // @ts-expect-error
      var name = getComponentName(Ctor.options) || tag;
      var vnode = new VNode(
      // @ts-expect-error
      "vue-component-".concat(Ctor.cid).concat(name ? "-".concat(name) : ''), data, undefined, undefined, undefined, context, 
      // @ts-expect-error
      { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);
      return vnode;
  }
  function createComponentInstanceForVnode(
  // we know it's MountedComponentVNode but flow doesn't
  vnode, 
  // activeInstance in lifecycle state
  parent) {
      var options = {
          _isComponent: true,
          _parentVnode: vnode,
          parent: parent
      };
      // check inline-template render functions
      var inlineTemplate = vnode.data.inlineTemplate;
      if (isDef(inlineTemplate)) {
          options.render = inlineTemplate.render;
          options.staticRenderFns = inlineTemplate.staticRenderFns;
      }
      return new vnode.componentOptions.Ctor(options);
  }
  function installComponentHooks(data) {
      var hooks = data.hook || (data.hook = {});
      for (var i = 0; i < hooksToMerge.length; i++) {
          var key = hooksToMerge[i];
          var existing = hooks[key];
          var toMerge = componentVNodeHooks[key];
          // @ts-expect-error
          if (existing !== toMerge && !(existing && existing._merged)) {
              hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge;
          }
      }
  }
  function mergeHook(f1, f2) {
      var merged = function (a, b) {
          // flow complains about extra args which is why we use any
          f1(a, b);
          f2(a, b);
      };
      merged._merged = true;
      return merged;
  }
  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel(options, data) {
      var prop = (options.model && options.model.prop) || 'value';
      var event = (options.model && options.model.event) || 'input';
      (data.attrs || (data.attrs = {}))[prop] = data.model.value;
      var on = data.on || (data.on = {});
      var existing = on[event];
      var callback = data.model.callback;
      if (isDef(existing)) {
          if (isArray(existing)
              ? existing.indexOf(callback) === -1
              : existing !== callback) {
              on[event] = [callback].concat(existing);
          }
      }
      else {
          on[event] = callback;
      }
  }

  var warn$2 = noop;
  var tip = noop;
  var generateComponentTrace; // work around flow check
  var formatComponentName;
  {
      var hasConsole_1 = typeof console !== 'undefined';
      var classifyRE_1 = /(?:^|[-_])(\w)/g;
      var classify_1 = function (str) {
          return str.replace(classifyRE_1, function (c) { return c.toUpperCase(); }).replace(/[-_]/g, '');
      };
      warn$2 = function (msg, vm) {
          if (vm === void 0) { vm = currentInstance; }
          var trace = vm ? generateComponentTrace(vm) : '';
          if (config.warnHandler) {
              config.warnHandler.call(null, msg, vm, trace);
          }
          else if (hasConsole_1 && !config.silent) {
              console.error("[Vue warn]: ".concat(msg).concat(trace));
          }
      };
      tip = function (msg, vm) {
          if (hasConsole_1 && !config.silent) {
              console.warn("[Vue tip]: ".concat(msg) + (vm ? generateComponentTrace(vm) : ''));
          }
      };
      formatComponentName = function (vm, includeFile) {
          if (vm.$root === vm) {
              return '<Root>';
          }
          var options = isFunction(vm) && vm.cid != null
              ? vm.options
              : vm._isVue
                  ? vm.$options || vm.constructor.options
                  : vm;
          var name = getComponentName(options);
          var file = options.__file;
          if (!name && file) {
              var match = file.match(/([^/\\]+)\.vue$/);
              name = match && match[1];
          }
          return ((name ? "<".concat(classify_1(name), ">") : "<Anonymous>") +
              (file && includeFile !== false ? " at ".concat(file) : ''));
      };
      var repeat_1 = function (str, n) {
          var res = '';
          while (n) {
              if (n % 2 === 1)
                  res += str;
              if (n > 1)
                  str += str;
              n >>= 1;
          }
          return res;
      };
      generateComponentTrace = function (vm) {
          if (vm._isVue && vm.$parent) {
              var tree = [];
              var currentRecursiveSequence = 0;
              while (vm) {
                  if (tree.length > 0) {
                      var last = tree[tree.length - 1];
                      if (last.constructor === vm.constructor) {
                          currentRecursiveSequence++;
                          vm = vm.$parent;
                          continue;
                      }
                      else if (currentRecursiveSequence > 0) {
                          tree[tree.length - 1] = [last, currentRecursiveSequence];
                          currentRecursiveSequence = 0;
                      }
                  }
                  tree.push(vm);
                  vm = vm.$parent;
              }
              return ('\n\nfound in\n\n' +
                  tree
                      .map(function (vm, i) {
                      return "".concat(i === 0 ? '---> ' : repeat_1(' ', 5 + i * 2)).concat(isArray(vm)
                          ? "".concat(formatComponentName(vm[0]), "... (").concat(vm[1], " recursive calls)")
                          : formatComponentName(vm));
                  })
                      .join('\n'));
          }
          else {
              return "\n\n(found in ".concat(formatComponentName(vm), ")");
          }
      };
  }

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;
  /**
   * Options with restrictions
   */
  {
      strats.el = strats.propsData = function (parent, child, vm, key) {
          if (!vm) {
              warn$2("option \"".concat(key, "\" can only be used during instance ") +
                  'creation with the `new` keyword.');
          }
          return defaultStrat(parent, child);
      };
  }
  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData(to, from, recursive) {
      if (recursive === void 0) { recursive = true; }
      if (!from)
          return to;
      var key, toVal, fromVal;
      var keys = hasSymbol
          ? Reflect.ownKeys(from)
          : Object.keys(from);
      for (var i = 0; i < keys.length; i++) {
          key = keys[i];
          // in case the object is already observed...
          if (key === '__ob__')
              continue;
          toVal = to[key];
          fromVal = from[key];
          if (!recursive || !hasOwn(to, key)) {
              set(to, key, fromVal);
          }
          else if (toVal !== fromVal &&
              isPlainObject(toVal) &&
              isPlainObject(fromVal)) {
              mergeData(toVal, fromVal);
          }
      }
      return to;
  }
  /**
   * Data
   */
  function mergeDataOrFn(parentVal, childVal, vm) {
      if (!vm) {
          // in a Vue.extend merge, both should be functions
          if (!childVal) {
              return parentVal;
          }
          if (!parentVal) {
              return childVal;
          }
          // when parentVal & childVal are both present,
          // we need to return a function that returns the
          // merged result of both functions... no need to
          // check if parentVal is a function here because
          // it has to be a function to pass previous merges.
          return function mergedDataFn() {
              return mergeData(isFunction(childVal) ? childVal.call(this, this) : childVal, isFunction(parentVal) ? parentVal.call(this, this) : parentVal);
          };
      }
      else {
          return function mergedInstanceDataFn() {
              // instance merge
              var instanceData = isFunction(childVal)
                  ? childVal.call(vm, vm)
                  : childVal;
              var defaultData = isFunction(parentVal)
                  ? parentVal.call(vm, vm)
                  : parentVal;
              if (instanceData) {
                  return mergeData(instanceData, defaultData);
              }
              else {
                  return defaultData;
              }
          };
      }
  }
  strats.data = function (parentVal, childVal, vm) {
      if (!vm) {
          if (childVal && typeof childVal !== 'function') {
              warn$2('The "data" option should be a function ' +
                      'that returns a per-instance value in component ' +
                      'definitions.', vm);
              return parentVal;
          }
          return mergeDataOrFn(parentVal, childVal);
      }
      return mergeDataOrFn(parentVal, childVal, vm);
  };
  /**
   * Hooks and props are merged as arrays.
   */
  function mergeLifecycleHook(parentVal, childVal) {
      var res = childVal
          ? parentVal
              ? parentVal.concat(childVal)
              : isArray(childVal)
                  ? childVal
                  : [childVal]
          : parentVal;
      return res ? dedupeHooks(res) : res;
  }
  function dedupeHooks(hooks) {
      var res = [];
      for (var i = 0; i < hooks.length; i++) {
          if (res.indexOf(hooks[i]) === -1) {
              res.push(hooks[i]);
          }
      }
      return res;
  }
  LIFECYCLE_HOOKS.forEach(function (hook) {
      strats[hook] = mergeLifecycleHook;
  });
  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets(parentVal, childVal, vm, key) {
      var res = Object.create(parentVal || null);
      if (childVal) {
          assertObjectType(key, childVal, vm);
          return extend(res, childVal);
      }
      else {
          return res;
      }
  }
  ASSET_TYPES.forEach(function (type) {
      strats[type + 's'] = mergeAssets;
  });
  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (parentVal, childVal, vm, key) {
      // work around Firefox's Object.prototype.watch...
      //@ts-expect-error work around
      if (parentVal === nativeWatch)
          parentVal = undefined;
      //@ts-expect-error work around
      if (childVal === nativeWatch)
          childVal = undefined;
      /* istanbul ignore if */
      if (!childVal)
          return Object.create(parentVal || null);
      {
          assertObjectType(key, childVal, vm);
      }
      if (!parentVal)
          return childVal;
      var ret = {};
      extend(ret, parentVal);
      for (var key_1 in childVal) {
          var parent_1 = ret[key_1];
          var child = childVal[key_1];
          if (parent_1 && !isArray(parent_1)) {
              parent_1 = [parent_1];
          }
          ret[key_1] = parent_1 ? parent_1.concat(child) : isArray(child) ? child : [child];
      }
      return ret;
  };
  /**
   * Other object hashes.
   */
  strats.props =
      strats.methods =
          strats.inject =
              strats.computed =
                  function (parentVal, childVal, vm, key) {
                      if (childVal && true) {
                          assertObjectType(key, childVal, vm);
                      }
                      if (!parentVal)
                          return childVal;
                      var ret = Object.create(null);
                      extend(ret, parentVal);
                      if (childVal)
                          extend(ret, childVal);
                      return ret;
                  };
  strats.provide = function (parentVal, childVal) {
      if (!parentVal)
          return childVal;
      return function () {
          var ret = Object.create(null);
          mergeData(ret, isFunction(parentVal) ? parentVal.call(this) : parentVal);
          if (childVal) {
              mergeData(ret, isFunction(childVal) ? childVal.call(this) : childVal, false // non-recursive
              );
          }
          return ret;
      };
  };
  /**
   * Default strategy.
   */
  var defaultStrat = function (parentVal, childVal) {
      return childVal === undefined ? parentVal : childVal;
  };
  /**
   * Validate component names
   */
  function checkComponents(options) {
      for (var key in options.components) {
          validateComponentName(key);
      }
  }
  function validateComponentName(name) {
      if (!new RegExp("^[a-zA-Z][\\-\\.0-9_".concat(unicodeRegExp.source, "]*$")).test(name)) {
          warn$2('Invalid component name: "' +
              name +
              '". Component names ' +
              'should conform to valid custom element name in html5 specification.');
      }
      if (isBuiltInTag(name) || config.isReservedTag(name)) {
          warn$2('Do not use built-in or reserved HTML elements as component ' +
              'id: ' +
              name);
      }
  }
  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps(options, vm) {
      var props = options.props;
      if (!props)
          return;
      var res = {};
      var i, val, name;
      if (isArray(props)) {
          i = props.length;
          while (i--) {
              val = props[i];
              if (typeof val === 'string') {
                  name = camelize(val);
                  res[name] = { type: null };
              }
              else {
                  warn$2('props must be strings when using array syntax.');
              }
          }
      }
      else if (isPlainObject(props)) {
          for (var key in props) {
              val = props[key];
              name = camelize(key);
              res[name] = isPlainObject(val) ? val : { type: val };
          }
      }
      else {
          warn$2("Invalid value for option \"props\": expected an Array or an Object, " +
              "but got ".concat(toRawType(props), "."), vm);
      }
      options.props = res;
  }
  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject(options, vm) {
      var inject = options.inject;
      if (!inject)
          return;
      var normalized = (options.inject = {});
      if (isArray(inject)) {
          for (var i = 0; i < inject.length; i++) {
              normalized[inject[i]] = { from: inject[i] };
          }
      }
      else if (isPlainObject(inject)) {
          for (var key in inject) {
              var val = inject[key];
              normalized[key] = isPlainObject(val)
                  ? extend({ from: key }, val)
                  : { from: val };
          }
      }
      else {
          warn$2("Invalid value for option \"inject\": expected an Array or an Object, " +
              "but got ".concat(toRawType(inject), "."), vm);
      }
  }
  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives$1(options) {
      var dirs = options.directives;
      if (dirs) {
          for (var key in dirs) {
              var def = dirs[key];
              if (isFunction(def)) {
                  dirs[key] = { bind: def, update: def };
              }
          }
      }
  }
  function assertObjectType(name, value, vm) {
      if (!isPlainObject(value)) {
          warn$2("Invalid value for option \"".concat(name, "\": expected an Object, ") +
              "but got ".concat(toRawType(value), "."), vm);
      }
  }
  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions(parent, child, vm) {
      {
          checkComponents(child);
      }
      if (isFunction(child)) {
          // @ts-expect-error
          child = child.options;
      }
      normalizeProps(child, vm);
      normalizeInject(child, vm);
      normalizeDirectives$1(child);
      // Apply extends and mixins on the child options,
      // but only if it is a raw options object that isn't
      // the result of another mergeOptions call.
      // Only merged options has the _base property.
      if (!child._base) {
          if (child.extends) {
              parent = mergeOptions(parent, child.extends, vm);
          }
          if (child.mixins) {
              for (var i = 0, l = child.mixins.length; i < l; i++) {
                  parent = mergeOptions(parent, child.mixins[i], vm);
              }
          }
      }
      var options = {};
      var key;
      for (key in parent) {
          mergeField(key);
      }
      for (key in child) {
          if (!hasOwn(parent, key)) {
              mergeField(key);
          }
      }
      function mergeField(key) {
          var strat = strats[key] || defaultStrat;
          options[key] = strat(parent[key], child[key], vm, key);
      }
      return options;
  }
  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset(options, type, id, warnMissing) {
      /* istanbul ignore if */
      if (typeof id !== 'string') {
          return;
      }
      var assets = options[type];
      // check local registration variations first
      if (hasOwn(assets, id))
          return assets[id];
      var camelizedId = camelize(id);
      if (hasOwn(assets, camelizedId))
          return assets[camelizedId];
      var PascalCaseId = capitalize(camelizedId);
      if (hasOwn(assets, PascalCaseId))
          return assets[PascalCaseId];
      // fallback to prototype chain
      var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
      if (warnMissing && !res) {
          warn$2('Failed to resolve ' + type.slice(0, -1) + ': ' + id);
      }
      return res;
  }

  function validateProp(key, propOptions, propsData, vm) {
      var prop = propOptions[key];
      var absent = !hasOwn(propsData, key);
      var value = propsData[key];
      // boolean casting
      var booleanIndex = getTypeIndex(Boolean, prop.type);
      if (booleanIndex > -1) {
          if (absent && !hasOwn(prop, 'default')) {
              value = false;
          }
          else if (value === '' || value === hyphenate(key)) {
              // only cast empty string / same name to boolean if
              // boolean has higher priority
              var stringIndex = getTypeIndex(String, prop.type);
              if (stringIndex < 0 || booleanIndex < stringIndex) {
                  value = true;
              }
          }
      }
      // check default value
      if (value === undefined) {
          value = getPropDefaultValue(vm, prop, key);
          // since the default value is a fresh copy,
          // make sure to observe it.
          var prevShouldObserve = shouldObserve;
          toggleObserving(true);
          observe(value);
          toggleObserving(prevShouldObserve);
      }
      {
          assertProp(prop, key, value, vm, absent);
      }
      return value;
  }
  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue(vm, prop, key) {
      // no default, return undefined
      if (!hasOwn(prop, 'default')) {
          return undefined;
      }
      var def = prop.default;
      // warn against non-factory defaults for Object & Array
      if (isObject(def)) {
          warn$2('Invalid default value for prop "' +
              key +
              '": ' +
              'Props with type Object/Array must use a factory function ' +
              'to return the default value.', vm);
      }
      // the raw prop value was also undefined from previous render,
      // return previous default value to avoid unnecessary watcher trigger
      if (vm &&
          vm.$options.propsData &&
          vm.$options.propsData[key] === undefined &&
          vm._props[key] !== undefined) {
          return vm._props[key];
      }
      // call factory function for non-Function types
      // a value is Function if its prototype is function even across different execution context
      return isFunction(def) && getType(prop.type) !== 'Function'
          ? def.call(vm)
          : def;
  }
  /**
   * Assert whether a prop is valid.
   */
  function assertProp(prop, name, value, vm, absent) {
      if (prop.required && absent) {
          warn$2('Missing required prop: "' + name + '"', vm);
          return;
      }
      if (value == null && !prop.required) {
          return;
      }
      var type = prop.type;
      var valid = !type || type === true;
      var expectedTypes = [];
      if (type) {
          if (!isArray(type)) {
              type = [type];
          }
          for (var i = 0; i < type.length && !valid; i++) {
              var assertedType = assertType(value, type[i], vm);
              expectedTypes.push(assertedType.expectedType || '');
              valid = assertedType.valid;
          }
      }
      var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
      if (!valid && haveExpectedTypes) {
          warn$2(getInvalidTypeMessage(name, value, expectedTypes), vm);
          return;
      }
      var validator = prop.validator;
      if (validator) {
          if (!validator(value)) {
              warn$2('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
          }
      }
  }
  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;
  function assertType(value, type, vm) {
      var valid;
      var expectedType = getType(type);
      if (simpleCheckRE.test(expectedType)) {
          var t = typeof value;
          valid = t === expectedType.toLowerCase();
          // for primitive wrapper objects
          if (!valid && t === 'object') {
              valid = value instanceof type;
          }
      }
      else if (expectedType === 'Object') {
          valid = isPlainObject(value);
      }
      else if (expectedType === 'Array') {
          valid = isArray(value);
      }
      else {
          try {
              valid = value instanceof type;
          }
          catch (e) {
              warn$2('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
              valid = false;
          }
      }
      return {
          valid: valid,
          expectedType: expectedType
      };
  }
  var functionTypeCheckRE = /^\s*function (\w+)/;
  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType(fn) {
      var match = fn && fn.toString().match(functionTypeCheckRE);
      return match ? match[1] : '';
  }
  function isSameType(a, b) {
      return getType(a) === getType(b);
  }
  function getTypeIndex(type, expectedTypes) {
      if (!isArray(expectedTypes)) {
          return isSameType(expectedTypes, type) ? 0 : -1;
      }
      for (var i = 0, len = expectedTypes.length; i < len; i++) {
          if (isSameType(expectedTypes[i], type)) {
              return i;
          }
      }
      return -1;
  }
  function getInvalidTypeMessage(name, value, expectedTypes) {
      var message = "Invalid prop: type check failed for prop \"".concat(name, "\".") +
          " Expected ".concat(expectedTypes.map(capitalize).join(', '));
      var expectedType = expectedTypes[0];
      var receivedType = toRawType(value);
      // check if we need to specify expected value
      if (expectedTypes.length === 1 &&
          isExplicable(expectedType) &&
          isExplicable(typeof value) &&
          !isBoolean(expectedType, receivedType)) {
          message += " with value ".concat(styleValue(value, expectedType));
      }
      message += ", got ".concat(receivedType, " ");
      // check if we need to specify received value
      if (isExplicable(receivedType)) {
          message += "with value ".concat(styleValue(value, receivedType), ".");
      }
      return message;
  }
  function styleValue(value, type) {
      if (type === 'String') {
          return "\"".concat(value, "\"");
      }
      else if (type === 'Number') {
          return "".concat(Number(value));
      }
      else {
          return "".concat(value);
      }
  }
  var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
  function isExplicable(value) {
      return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; });
  }
  function isBoolean() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
      }
      return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; });
  }

  function Vue(options) {
      if (!(this instanceof Vue)) {
          warn$2('Vue is a constructor and should be called with the `new` keyword');
      }
      this._init(options);
  }
  //@ts-expect-error Vue has function type
  initMixin$1(Vue);
  //@ts-expect-error Vue has function type
  stateMixin(Vue);
  //@ts-expect-error Vue has function type
  eventsMixin(Vue);
  //@ts-expect-error Vue has function type
  lifecycleMixin(Vue);
  //@ts-expect-error Vue has function type
  renderMixin(Vue);

  function initUse(Vue) {
      Vue.use = function (plugin) {
          var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
          if (installedPlugins.indexOf(plugin) > -1) {
              return this;
          }
          // additional parameters
          var args = toArray(arguments, 1);
          args.unshift(this);
          if (isFunction(plugin.install)) {
              plugin.install.apply(plugin, args);
          }
          else if (isFunction(plugin)) {
              plugin.apply(null, args);
          }
          installedPlugins.push(plugin);
          return this;
      };
  }

  function initMixin(Vue) {
      Vue.mixin = function (mixin) {
          this.options = mergeOptions(this.options, mixin);
          return this;
      };
  }

  function initExtend(Vue) {
      /**
       * Each instance constructor, including Vue, has a unique
       * cid. This enables us to create wrapped "child
       * constructors" for prototypal inheritance and cache them.
       */
      Vue.cid = 0;
      var cid = 1;
      /**
       * Class inheritance
       */
      Vue.extend = function (extendOptions) {
          extendOptions = extendOptions || {};
          var Super = this;
          var SuperId = Super.cid;
          var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
          if (cachedCtors[SuperId]) {
              return cachedCtors[SuperId];
          }
          var name = getComponentName(extendOptions) || getComponentName(Super.options);
          if (name) {
              validateComponentName(name);
          }
          var Sub = function VueComponent(options) {
              this._init(options);
          };
          Sub.prototype = Object.create(Super.prototype);
          Sub.prototype.constructor = Sub;
          Sub.cid = cid++;
          Sub.options = mergeOptions(Super.options, extendOptions);
          Sub['super'] = Super;
          // For props and computed properties, we define the proxy getters on
          // the Vue instances at extension time, on the extended prototype. This
          // avoids Object.defineProperty calls for each instance created.
          if (Sub.options.props) {
              initProps(Sub);
          }
          if (Sub.options.computed) {
              initComputed(Sub);
          }
          // allow further extension/mixin/plugin usage
          Sub.extend = Super.extend;
          Sub.mixin = Super.mixin;
          Sub.use = Super.use;
          // create asset registers, so extended classes
          // can have their private assets too.
          ASSET_TYPES.forEach(function (type) {
              Sub[type] = Super[type];
          });
          // enable recursive self-lookup
          if (name) {
              Sub.options.components[name] = Sub;
          }
          // keep a reference to the super options at extension time.
          // later at instantiation we can check if Super's options have
          // been updated.
          Sub.superOptions = Super.options;
          Sub.extendOptions = extendOptions;
          Sub.sealedOptions = extend({}, Sub.options);
          // cache constructor
          cachedCtors[SuperId] = Sub;
          return Sub;
      };
  }
  function initProps(Comp) {
      var props = Comp.options.props;
      for (var key in props) {
          proxy(Comp.prototype, "_props", key);
      }
  }
  function initComputed(Comp) {
      var computed = Comp.options.computed;
      for (var key in computed) {
          defineComputed(Comp.prototype, key, computed[key]);
      }
  }

  function initAssetRegisters(Vue) {
      /**
       * Create asset registration methods.
       */
      ASSET_TYPES.forEach(function (type) {
          // @ts-expect-error function is not exact same type
          Vue[type] = function (id, definition) {
              if (!definition) {
                  return this.options[type + 's'][id];
              }
              else {
                  /* istanbul ignore if */
                  if (type === 'component') {
                      validateComponentName(id);
                  }
                  if (type === 'component' && isPlainObject(definition)) {
                      // @ts-expect-error
                      definition.name = definition.name || id;
                      definition = this.options._base.extend(definition);
                  }
                  if (type === 'directive' && isFunction(definition)) {
                      definition = { bind: definition, update: definition };
                  }
                  this.options[type + 's'][id] = definition;
                  return definition;
              }
          };
      });
  }

  function _getComponentName(opts) {
      return opts && (getComponentName(opts.Ctor.options) || opts.tag);
  }
  function matches(pattern, name) {
      if (isArray(pattern)) {
          return pattern.indexOf(name) > -1;
      }
      else if (typeof pattern === 'string') {
          return pattern.split(',').indexOf(name) > -1;
      }
      else if (isRegExp(pattern)) {
          return pattern.test(name);
      }
      /* istanbul ignore next */
      return false;
  }
  function pruneCache(keepAliveInstance, filter) {
      var cache = keepAliveInstance.cache, keys = keepAliveInstance.keys, _vnode = keepAliveInstance._vnode, $vnode = keepAliveInstance.$vnode;
      for (var key in cache) {
          var entry = cache[key];
          if (entry) {
              var name_1 = entry.name;
              if (name_1 && !filter(name_1)) {
                  pruneCacheEntry(cache, key, keys, _vnode);
              }
          }
      }
      $vnode.componentOptions.children = undefined;
  }
  function pruneCacheEntry(cache, key, keys, current) {
      var entry = cache[key];
      if (entry && (!current || entry.tag !== current.tag)) {
          // @ts-expect-error can be undefined
          entry.componentInstance.$destroy();
      }
      cache[key] = null;
      remove$2(keys, key);
  }
  var patternTypes = [String, RegExp, Array];
  // TODO defineComponent
  var KeepAlive = {
      name: 'keep-alive',
      abstract: true,
      props: {
          include: patternTypes,
          exclude: patternTypes,
          max: [String, Number]
      },
      methods: {
          cacheVNode: function () {
              var _a = this, cache = _a.cache, keys = _a.keys, vnodeToCache = _a.vnodeToCache, keyToCache = _a.keyToCache;
              if (vnodeToCache) {
                  var tag = vnodeToCache.tag, componentInstance = vnodeToCache.componentInstance, componentOptions = vnodeToCache.componentOptions;
                  cache[keyToCache] = {
                      name: _getComponentName(componentOptions),
                      tag: tag,
                      componentInstance: componentInstance
                  };
                  keys.push(keyToCache);
                  // prune oldest entry
                  if (this.max && keys.length > parseInt(this.max)) {
                      pruneCacheEntry(cache, keys[0], keys, this._vnode);
                  }
                  this.vnodeToCache = null;
              }
          }
      },
      created: function () {
          this.cache = Object.create(null);
          this.keys = [];
      },
      destroyed: function () {
          for (var key in this.cache) {
              pruneCacheEntry(this.cache, key, this.keys);
          }
      },
      mounted: function () {
          var _this = this;
          this.cacheVNode();
          this.$watch('include', function (val) {
              pruneCache(_this, function (name) { return matches(val, name); });
          });
          this.$watch('exclude', function (val) {
              pruneCache(_this, function (name) { return !matches(val, name); });
          });
      },
      updated: function () {
          this.cacheVNode();
      },
      render: function () {
          var slot = this.$slots.default;
          var vnode = getFirstComponentChild(slot);
          var componentOptions = vnode && vnode.componentOptions;
          if (componentOptions) {
              // check pattern
              var name_2 = _getComponentName(componentOptions);
              var _a = this, include = _a.include, exclude = _a.exclude;
              if (
              // not included
              (include && (!name_2 || !matches(include, name_2))) ||
                  // excluded
                  (exclude && name_2 && matches(exclude, name_2))) {
                  return vnode;
              }
              var _b = this, cache = _b.cache, keys = _b.keys;
              var key = vnode.key == null
                  ? // same constructor may get registered as different local components
                      // so cid alone is not enough (#3269)
                      componentOptions.Ctor.cid +
                          (componentOptions.tag ? "::".concat(componentOptions.tag) : '')
                  : vnode.key;
              if (cache[key]) {
                  vnode.componentInstance = cache[key].componentInstance;
                  // make current key freshest
                  remove$2(keys, key);
                  keys.push(key);
              }
              else {
                  // delay setting the cache until update
                  this.vnodeToCache = vnode;
                  this.keyToCache = key;
              }
              // @ts-expect-error can vnode.data can be undefined
              vnode.data.keepAlive = true;
          }
          return vnode || (slot && slot[0]);
      }
  };

  var builtInComponents = {
      KeepAlive: KeepAlive
  };

  function initGlobalAPI(Vue) {
      // config
      var configDef = {};
      configDef.get = function () { return config; };
      {
          configDef.set = function () {
              warn$2('Do not replace the Vue.config object, set individual fields instead.');
          };
      }
      Object.defineProperty(Vue, 'config', configDef);
      // exposed util methods.
      // NOTE: these are not considered part of the public API - avoid relying on
      // them unless you are aware of the risk.
      Vue.util = {
          warn: warn$2,
          extend: extend,
          mergeOptions: mergeOptions,
          defineReactive: defineReactive
      };
      Vue.set = set;
      Vue.delete = del;
      Vue.nextTick = nextTick;
      // 2.6 explicit observable API
      Vue.observable = function (obj) {
          observe(obj);
          return obj;
      };
      Vue.options = Object.create(null);
      ASSET_TYPES.forEach(function (type) {
          Vue.options[type + 's'] = Object.create(null);
      });
      // this is used to identify the "base" constructor to extend all plain-object
      // components with in Weex's multi-instance scenarios.
      Vue.options._base = Vue;
      extend(Vue.options.components, builtInComponents);
      initUse(Vue);
      initMixin(Vue);
      initExtend(Vue);
      initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);
  Object.defineProperty(Vue.prototype, '$isServer', {
      get: isServerRendering
  });
  Object.defineProperty(Vue.prototype, '$ssrContext', {
      get: function () {
          /* istanbul ignore next */
          return this.$vnode && this.$vnode.ssrContext;
      }
  });
  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
      value: FunctionalRenderContext
  });
  Vue.version = version;

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');
  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function (tag, type, attr) {
      return ((attr === 'value' && acceptValue(tag) && type !== 'button') ||
          (attr === 'selected' && tag === 'option') ||
          (attr === 'checked' && tag === 'input') ||
          (attr === 'muted' && tag === 'video'));
  };
  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');
  var convertEnumeratedValue = function (key, value) {
      return isFalsyAttrValue(value) || value === 'false'
          ? 'false'
          : // allow arbitrary string value for contenteditable
              key === 'contenteditable' && isValidContentEditableValue(value)
                  ? value
                  : 'true';
  };
  var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
      'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
      'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
      'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
      'required,reversed,scoped,seamless,selected,sortable,' +
      'truespeed,typemustmatch,visible');
  var xlinkNS = 'http://www.w3.org/1999/xlink';
  var isXlink = function (name) {
      return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
  };
  var getXlinkProp = function (name) {
      return isXlink(name) ? name.slice(6, name.length) : '';
  };
  var isFalsyAttrValue = function (val) {
      return val == null || val === false;
  };

  function genClassForVnode(vnode) {
      var data = vnode.data;
      var parentNode = vnode;
      var childNode = vnode;
      while (isDef(childNode.componentInstance)) {
          childNode = childNode.componentInstance._vnode;
          if (childNode && childNode.data) {
              data = mergeClassData(childNode.data, data);
          }
      }
      // @ts-expect-error parentNode.parent not VNodeWithData
      while (isDef((parentNode = parentNode.parent))) {
          if (parentNode && parentNode.data) {
              data = mergeClassData(data, parentNode.data);
          }
      }
      return renderClass(data.staticClass, data.class);
  }
  function mergeClassData(child, parent) {
      return {
          staticClass: concat(child.staticClass, parent.staticClass),
          class: isDef(child.class) ? [child.class, parent.class] : parent.class
      };
  }
  function renderClass(staticClass, dynamicClass) {
      if (isDef(staticClass) || isDef(dynamicClass)) {
          return concat(staticClass, stringifyClass(dynamicClass));
      }
      /* istanbul ignore next */
      return '';
  }
  function concat(a, b) {
      return a ? (b ? a + ' ' + b : a) : b || '';
  }
  function stringifyClass(value) {
      if (Array.isArray(value)) {
          return stringifyArray(value);
      }
      if (isObject(value)) {
          return stringifyObject(value);
      }
      if (typeof value === 'string') {
          return value;
      }
      /* istanbul ignore next */
      return '';
  }
  function stringifyArray(value) {
      var res = '';
      var stringified;
      for (var i = 0, l = value.length; i < l; i++) {
          if (isDef((stringified = stringifyClass(value[i]))) && stringified !== '') {
              if (res)
                  res += ' ';
              res += stringified;
          }
      }
      return res;
  }
  function stringifyObject(value) {
      var res = '';
      for (var key in value) {
          if (value[key]) {
              if (res)
                  res += ' ';
              res += key;
          }
      }
      return res;
  }

  var namespaceMap = {
      svg: 'http://www.w3.org/2000/svg',
      math: 'http://www.w3.org/1998/Math/MathML'
  };
  var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' +
      'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
      'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
      'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
      's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
      'embed,object,param,source,canvas,script,noscript,del,ins,' +
      'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
      'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
      'output,progress,select,textarea,' +
      'details,dialog,menu,menuitem,summary,' +
      'content,element,shadow,template,blockquote,iframe,tfoot');
  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
      'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
      'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);
  var isPreTag = function (tag) { return tag === 'pre'; };
  var isReservedTag = function (tag) {
      return isHTMLTag(tag) || isSVG(tag);
  };
  function getTagNamespace(tag) {
      if (isSVG(tag)) {
          return 'svg';
      }
      // basic support for MathML
      // note it doesn't support other MathML elements being component roots
      if (tag === 'math') {
          return 'math';
      }
  }
  var unknownElementCache = Object.create(null);
  function isUnknownElement(tag) {
      /* istanbul ignore if */
      if (!inBrowser) {
          return true;
      }
      if (isReservedTag(tag)) {
          return false;
      }
      tag = tag.toLowerCase();
      /* istanbul ignore if */
      if (unknownElementCache[tag] != null) {
          return unknownElementCache[tag];
      }
      var el = document.createElement(tag);
      if (tag.indexOf('-') > -1) {
          // https://stackoverflow.com/a/28210364/1070244
          return (unknownElementCache[tag] =
              el.constructor === window.HTMLUnknownElement ||
                  el.constructor === window.HTMLElement);
      }
      else {
          return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()));
      }
  }
  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /**
   * Query an element selector if it's not an element already.
   */
  function query(el) {
      if (typeof el === 'string') {
          var selected = document.querySelector(el);
          if (!selected) {
              warn$2('Cannot find element: ' + el);
              return document.createElement('div');
          }
          return selected;
      }
      else {
          return el;
      }
  }

  function createElement(tagName, vnode) {
      var elm = document.createElement(tagName);
      if (tagName !== 'select') {
          return elm;
      }
      // false or null will remove the attribute but undefined will not
      if (vnode.data &&
          vnode.data.attrs &&
          vnode.data.attrs.multiple !== undefined) {
          elm.setAttribute('multiple', 'multiple');
      }
      return elm;
  }
  function createElementNS(namespace, tagName) {
      return document.createElementNS(namespaceMap[namespace], tagName);
  }
  function createTextNode(text) {
      return document.createTextNode(text);
  }
  function createComment(text) {
      return document.createComment(text);
  }
  function insertBefore(parentNode, newNode, referenceNode) {
      parentNode.insertBefore(newNode, referenceNode);
  }
  function removeChild(node, child) {
      node.removeChild(child);
  }
  function appendChild(node, child) {
      node.appendChild(child);
  }
  function parentNode(node) {
      return node.parentNode;
  }
  function nextSibling(node) {
      return node.nextSibling;
  }
  function tagName(node) {
      return node.tagName;
  }
  function setTextContent(node, text) {
      node.textContent = text;
  }
  function setStyleScope(node, scopeId) {
      node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createElement: createElement,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  var ref = {
      create: function (_, vnode) {
          registerRef(vnode);
      },
      update: function (oldVnode, vnode) {
          if (oldVnode.data.ref !== vnode.data.ref) {
              registerRef(oldVnode, true);
              registerRef(vnode);
          }
      },
      destroy: function (vnode) {
          registerRef(vnode, true);
      }
  };
  function registerRef(vnode, isRemoval) {
      var ref = vnode.data.ref;
      if (!isDef(ref))
          return;
      var vm = vnode.context;
      var refValue = vnode.componentInstance || vnode.elm;
      var value = isRemoval ? null : refValue;
      var $refsValue = isRemoval ? undefined : refValue;
      if (isFunction(ref)) {
          invokeWithErrorHandling(ref, vm, [value], vm, "template ref function");
          return;
      }
      var isFor = vnode.data.refInFor;
      var _isString = typeof ref === 'string' || typeof ref === 'number';
      var _isRef = isRef(ref);
      var refs = vm.$refs;
      if (_isString || _isRef) {
          if (isFor) {
              var existing = _isString ? refs[ref] : ref.value;
              if (isRemoval) {
                  isArray(existing) && remove$2(existing, refValue);
              }
              else {
                  if (!isArray(existing)) {
                      if (_isString) {
                          refs[ref] = [refValue];
                          setSetupRef(vm, ref, refs[ref]);
                      }
                      else {
                          ref.value = [refValue];
                      }
                  }
                  else if (!existing.includes(refValue)) {
                      existing.push(refValue);
                  }
              }
          }
          else if (_isString) {
              if (isRemoval && refs[ref] !== refValue) {
                  return;
              }
              refs[ref] = $refsValue;
              setSetupRef(vm, ref, value);
          }
          else if (_isRef) {
              if (isRemoval && ref.value !== refValue) {
                  return;
              }
              ref.value = value;
          }
          else {
              warn$2("Invalid template ref type: ".concat(typeof ref));
          }
      }
  }
  function setSetupRef(_a, key, val) {
      var _setupState = _a._setupState;
      if (_setupState && hasOwn(_setupState, key)) {
          if (isRef(_setupState[key])) {
              _setupState[key].value = val;
          }
          else {
              _setupState[key] = val;
          }
      }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */
  var emptyNode = new VNode('', {}, []);
  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];
  function sameVnode(a, b) {
      return (a.key === b.key &&
          a.asyncFactory === b.asyncFactory &&
          ((a.tag === b.tag &&
              a.isComment === b.isComment &&
              isDef(a.data) === isDef(b.data) &&
              sameInputType(a, b)) ||
              (isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error))));
  }
  function sameInputType(a, b) {
      if (a.tag !== 'input')
          return true;
      var i;
      var typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type;
      var typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type;
      return typeA === typeB || (isTextInputType(typeA) && isTextInputType(typeB));
  }
  function createKeyToOldIdx(children, beginIdx, endIdx) {
      var i, key;
      var map = {};
      for (i = beginIdx; i <= endIdx; ++i) {
          key = children[i].key;
          if (isDef(key))
              map[key] = i;
      }
      return map;
  }
  function createPatchFunction(backend) {
      var i, j;
      var cbs = {};
      var modules = backend.modules, nodeOps = backend.nodeOps;
      for (i = 0; i < hooks.length; ++i) {
          cbs[hooks[i]] = [];
          for (j = 0; j < modules.length; ++j) {
              if (isDef(modules[j][hooks[i]])) {
                  cbs[hooks[i]].push(modules[j][hooks[i]]);
              }
          }
      }
      function emptyNodeAt(elm) {
          return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
      }
      function createRmCb(childElm, listeners) {
          function remove() {
              if (--remove.listeners === 0) {
                  removeNode(childElm);
              }
          }
          remove.listeners = listeners;
          return remove;
      }
      function removeNode(el) {
          var parent = nodeOps.parentNode(el);
          // element may have already been removed due to v-html / v-text
          if (isDef(parent)) {
              nodeOps.removeChild(parent, el);
          }
      }
      function isUnknownElement(vnode, inVPre) {
          return (!inVPre &&
              !vnode.ns &&
              !(config.ignoredElements.length &&
                  config.ignoredElements.some(function (ignore) {
                      return isRegExp(ignore)
                          ? ignore.test(vnode.tag)
                          : ignore === vnode.tag;
                  })) &&
              config.isUnknownElement(vnode.tag));
      }
      var creatingElmInVPre = 0;
      function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
          if (isDef(vnode.elm) && isDef(ownerArray)) {
              // This vnode was used in a previous render!
              // now it's used as a new node, overwriting its elm would cause
              // potential patch errors down the road when it's used as an insertion
              // reference node. Instead, we clone the node on-demand before creating
              // associated DOM element for it.
              vnode = ownerArray[index] = cloneVNode(vnode);
          }
          vnode.isRootInsert = !nested; // for transition enter check
          if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
              return;
          }
          var data = vnode.data;
          var children = vnode.children;
          var tag = vnode.tag;
          if (isDef(tag)) {
              {
                  if (data && data.pre) {
                      creatingElmInVPre++;
                  }
                  if (isUnknownElement(vnode, creatingElmInVPre)) {
                      warn$2('Unknown custom element: <' +
                          tag +
                          '> - did you ' +
                          'register the component correctly? For recursive components, ' +
                          'make sure to provide the "name" option.', vnode.context);
                  }
              }
              vnode.elm = vnode.ns
                  ? nodeOps.createElementNS(vnode.ns, tag)
                  : nodeOps.createElement(tag, vnode);
              setScope(vnode);
              createChildren(vnode, children, insertedVnodeQueue);
              if (isDef(data)) {
                  invokeCreateHooks(vnode, insertedVnodeQueue);
              }
              insert(parentElm, vnode.elm, refElm);
              if (data && data.pre) {
                  creatingElmInVPre--;
              }
          }
          else if (isTrue(vnode.isComment)) {
              vnode.elm = nodeOps.createComment(vnode.text);
              insert(parentElm, vnode.elm, refElm);
          }
          else {
              vnode.elm = nodeOps.createTextNode(vnode.text);
              insert(parentElm, vnode.elm, refElm);
          }
      }
      function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
          var i = vnode.data;
          if (isDef(i)) {
              var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
              if (isDef((i = i.hook)) && isDef((i = i.init))) {
                  i(vnode, false /* hydrating */);
              }
              // after calling the init hook, if the vnode is a child component
              // it should've created a child instance and mounted it. the child
              // component also has set the placeholder vnode's elm.
              // in that case we can just return the element and be done.
              if (isDef(vnode.componentInstance)) {
                  initComponent(vnode, insertedVnodeQueue);
                  insert(parentElm, vnode.elm, refElm);
                  if (isTrue(isReactivated)) {
                      reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
                  }
                  return true;
              }
          }
      }
      function initComponent(vnode, insertedVnodeQueue) {
          if (isDef(vnode.data.pendingInsert)) {
              insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
              vnode.data.pendingInsert = null;
          }
          vnode.elm = vnode.componentInstance.$el;
          if (isPatchable(vnode)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
              setScope(vnode);
          }
          else {
              // empty component root.
              // skip all element-related modules except for ref (#3455)
              registerRef(vnode);
              // make sure to invoke the insert hook
              insertedVnodeQueue.push(vnode);
          }
      }
      function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
          var i;
          // hack for #4339: a reactivated component with inner transition
          // does not trigger because the inner node's created hooks are not called
          // again. It's not ideal to involve module-specific logic in here but
          // there doesn't seem to be a better way to do it.
          var innerNode = vnode;
          while (innerNode.componentInstance) {
              innerNode = innerNode.componentInstance._vnode;
              if (isDef((i = innerNode.data)) && isDef((i = i.transition))) {
                  for (i = 0; i < cbs.activate.length; ++i) {
                      cbs.activate[i](emptyNode, innerNode);
                  }
                  insertedVnodeQueue.push(innerNode);
                  break;
              }
          }
          // unlike a newly created component,
          // a reactivated keep-alive component doesn't insert itself
          insert(parentElm, vnode.elm, refElm);
      }
      function insert(parent, elm, ref) {
          if (isDef(parent)) {
              if (isDef(ref)) {
                  if (nodeOps.parentNode(ref) === parent) {
                      nodeOps.insertBefore(parent, elm, ref);
                  }
              }
              else {
                  nodeOps.appendChild(parent, elm);
              }
          }
      }
      function createChildren(vnode, children, insertedVnodeQueue) {
          if (isArray(children)) {
              {
                  checkDuplicateKeys(children);
              }
              for (var i_1 = 0; i_1 < children.length; ++i_1) {
                  createElm(children[i_1], insertedVnodeQueue, vnode.elm, null, true, children, i_1);
              }
          }
          else if (isPrimitive(vnode.text)) {
              nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
          }
      }
      function isPatchable(vnode) {
          while (vnode.componentInstance) {
              vnode = vnode.componentInstance._vnode;
          }
          return isDef(vnode.tag);
      }
      function invokeCreateHooks(vnode, insertedVnodeQueue) {
          for (var i_2 = 0; i_2 < cbs.create.length; ++i_2) {
              cbs.create[i_2](emptyNode, vnode);
          }
          i = vnode.data.hook; // Reuse variable
          if (isDef(i)) {
              if (isDef(i.create))
                  i.create(emptyNode, vnode);
              if (isDef(i.insert))
                  insertedVnodeQueue.push(vnode);
          }
      }
      // set scope id attribute for scoped CSS.
      // this is implemented as a special case to avoid the overhead
      // of going through the normal attribute patching process.
      function setScope(vnode) {
          var i;
          if (isDef((i = vnode.fnScopeId))) {
              nodeOps.setStyleScope(vnode.elm, i);
          }
          else {
              var ancestor = vnode;
              while (ancestor) {
                  if (isDef((i = ancestor.context)) && isDef((i = i.$options._scopeId))) {
                      nodeOps.setStyleScope(vnode.elm, i);
                  }
                  ancestor = ancestor.parent;
              }
          }
          // for slot content they should also get the scopeId from the host instance.
          if (isDef((i = activeInstance)) &&
              i !== vnode.context &&
              i !== vnode.fnContext &&
              isDef((i = i.$options._scopeId))) {
              nodeOps.setStyleScope(vnode.elm, i);
          }
      }
      function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
          for (; startIdx <= endIdx; ++startIdx) {
              createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
          }
      }
      function invokeDestroyHook(vnode) {
          var i, j;
          var data = vnode.data;
          if (isDef(data)) {
              if (isDef((i = data.hook)) && isDef((i = i.destroy)))
                  i(vnode);
              for (i = 0; i < cbs.destroy.length; ++i)
                  cbs.destroy[i](vnode);
          }
          if (isDef((i = vnode.children))) {
              for (j = 0; j < vnode.children.length; ++j) {
                  invokeDestroyHook(vnode.children[j]);
              }
          }
      }
      function removeVnodes(vnodes, startIdx, endIdx) {
          for (; startIdx <= endIdx; ++startIdx) {
              var ch = vnodes[startIdx];
              if (isDef(ch)) {
                  if (isDef(ch.tag)) {
                      removeAndInvokeRemoveHook(ch);
                      invokeDestroyHook(ch);
                  }
                  else {
                      // Text node
                      removeNode(ch.elm);
                  }
              }
          }
      }
      function removeAndInvokeRemoveHook(vnode, rm) {
          if (isDef(rm) || isDef(vnode.data)) {
              var i_3;
              var listeners = cbs.remove.length + 1;
              if (isDef(rm)) {
                  // we have a recursively passed down rm callback
                  // increase the listeners count
                  rm.listeners += listeners;
              }
              else {
                  // directly removing
                  rm = createRmCb(vnode.elm, listeners);
              }
              // recursively invoke hooks on child component root node
              if (isDef((i_3 = vnode.componentInstance)) &&
                  isDef((i_3 = i_3._vnode)) &&
                  isDef(i_3.data)) {
                  removeAndInvokeRemoveHook(i_3, rm);
              }
              for (i_3 = 0; i_3 < cbs.remove.length; ++i_3) {
                  cbs.remove[i_3](vnode, rm);
              }
              if (isDef((i_3 = vnode.data.hook)) && isDef((i_3 = i_3.remove))) {
                  i_3(vnode, rm);
              }
              else {
                  rm();
              }
          }
          else {
              removeNode(vnode.elm);
          }
      }
      function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
          var oldStartIdx = 0;
          var newStartIdx = 0;
          var oldEndIdx = oldCh.length - 1;
          var oldStartVnode = oldCh[0];
          var oldEndVnode = oldCh[oldEndIdx];
          var newEndIdx = newCh.length - 1;
          var newStartVnode = newCh[0];
          var newEndVnode = newCh[newEndIdx];
          var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
          // removeOnly is a special flag used only by <transition-group>
          // to ensure removed elements stay in correct relative positions
          // during leaving transitions
          var canMove = !removeOnly;
          {
              checkDuplicateKeys(newCh);
          }
          while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
              if (isUndef(oldStartVnode)) {
                  oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
              }
              else if (isUndef(oldEndVnode)) {
                  oldEndVnode = oldCh[--oldEndIdx];
              }
              else if (sameVnode(oldStartVnode, newStartVnode)) {
                  patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                  oldStartVnode = oldCh[++oldStartIdx];
                  newStartVnode = newCh[++newStartIdx];
              }
              else if (sameVnode(oldEndVnode, newEndVnode)) {
                  patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                  oldEndVnode = oldCh[--oldEndIdx];
                  newEndVnode = newCh[--newEndIdx];
              }
              else if (sameVnode(oldStartVnode, newEndVnode)) {
                  // Vnode moved right
                  patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                  canMove &&
                      nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
                  oldStartVnode = oldCh[++oldStartIdx];
                  newEndVnode = newCh[--newEndIdx];
              }
              else if (sameVnode(oldEndVnode, newStartVnode)) {
                  // Vnode moved left
                  patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                  canMove &&
                      nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                  oldEndVnode = oldCh[--oldEndIdx];
                  newStartVnode = newCh[++newStartIdx];
              }
              else {
                  if (isUndef(oldKeyToIdx))
                      oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                  idxInOld = isDef(newStartVnode.key)
                      ? oldKeyToIdx[newStartVnode.key]
                      : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
                  if (isUndef(idxInOld)) {
                      // New element
                      createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                  }
                  else {
                      vnodeToMove = oldCh[idxInOld];
                      if (sameVnode(vnodeToMove, newStartVnode)) {
                          patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                          oldCh[idxInOld] = undefined;
                          canMove &&
                              nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
                      }
                      else {
                          // same key but different element. treat as new element
                          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                      }
                  }
                  newStartVnode = newCh[++newStartIdx];
              }
          }
          if (oldStartIdx > oldEndIdx) {
              refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
              addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
          }
          else if (newStartIdx > newEndIdx) {
              removeVnodes(oldCh, oldStartIdx, oldEndIdx);
          }
      }
      function checkDuplicateKeys(children) {
          var seenKeys = {};
          for (var i_4 = 0; i_4 < children.length; i_4++) {
              var vnode = children[i_4];
              var key = vnode.key;
              if (isDef(key)) {
                  if (seenKeys[key]) {
                      warn$2("Duplicate keys detected: '".concat(key, "'. This may cause an update error."), vnode.context);
                  }
                  else {
                      seenKeys[key] = true;
                  }
              }
          }
      }
      function findIdxInOld(node, oldCh, start, end) {
          for (var i_5 = start; i_5 < end; i_5++) {
              var c = oldCh[i_5];
              if (isDef(c) && sameVnode(node, c))
                  return i_5;
          }
      }
      function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
          if (oldVnode === vnode) {
              return;
          }
          if (isDef(vnode.elm) && isDef(ownerArray)) {
              // clone reused vnode
              vnode = ownerArray[index] = cloneVNode(vnode);
          }
          var elm = (vnode.elm = oldVnode.elm);
          if (isTrue(oldVnode.isAsyncPlaceholder)) {
              if (isDef(vnode.asyncFactory.resolved)) {
                  hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
              }
              else {
                  vnode.isAsyncPlaceholder = true;
              }
              return;
          }
          // reuse element for static trees.
          // note we only do this if the vnode is cloned -
          // if the new node is not cloned it means the render functions have been
          // reset by the hot-reload-api and we need to do a proper re-render.
          if (isTrue(vnode.isStatic) &&
              isTrue(oldVnode.isStatic) &&
              vnode.key === oldVnode.key &&
              (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
              vnode.componentInstance = oldVnode.componentInstance;
              return;
          }
          var i;
          var data = vnode.data;
          if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
              i(oldVnode, vnode);
          }
          var oldCh = oldVnode.children;
          var ch = vnode.children;
          if (isDef(data) && isPatchable(vnode)) {
              for (i = 0; i < cbs.update.length; ++i)
                  cbs.update[i](oldVnode, vnode);
              if (isDef((i = data.hook)) && isDef((i = i.update)))
                  i(oldVnode, vnode);
          }
          if (isUndef(vnode.text)) {
              if (isDef(oldCh) && isDef(ch)) {
                  if (oldCh !== ch)
                      updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
              }
              else if (isDef(ch)) {
                  {
                      checkDuplicateKeys(ch);
                  }
                  if (isDef(oldVnode.text))
                      nodeOps.setTextContent(elm, '');
                  addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
              }
              else if (isDef(oldCh)) {
                  removeVnodes(oldCh, 0, oldCh.length - 1);
              }
              else if (isDef(oldVnode.text)) {
                  nodeOps.setTextContent(elm, '');
              }
          }
          else if (oldVnode.text !== vnode.text) {
              nodeOps.setTextContent(elm, vnode.text);
          }
          if (isDef(data)) {
              if (isDef((i = data.hook)) && isDef((i = i.postpatch)))
                  i(oldVnode, vnode);
          }
      }
      function invokeInsertHook(vnode, queue, initial) {
          // delay insert hooks for component root nodes, invoke them after the
          // element is really inserted
          if (isTrue(initial) && isDef(vnode.parent)) {
              vnode.parent.data.pendingInsert = queue;
          }
          else {
              for (var i_6 = 0; i_6 < queue.length; ++i_6) {
                  queue[i_6].data.hook.insert(queue[i_6]);
              }
          }
      }
      var hydrationBailed = false;
      // list of modules that can skip create hook during hydration because they
      // are already rendered on the client or has no need for initialization
      // Note: style is excluded because it relies on initial clone for future
      // deep updates (#7063).
      var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');
      // Note: this is a browser-only function so we can assume elms are DOM nodes.
      function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
          var i;
          var tag = vnode.tag, data = vnode.data, children = vnode.children;
          inVPre = inVPre || (data && data.pre);
          vnode.elm = elm;
          if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
              vnode.isAsyncPlaceholder = true;
              return true;
          }
          // assert node match
          {
              if (!assertNodeMatch(elm, vnode, inVPre)) {
                  return false;
              }
          }
          if (isDef(data)) {
              if (isDef((i = data.hook)) && isDef((i = i.init)))
                  i(vnode, true /* hydrating */);
              if (isDef((i = vnode.componentInstance))) {
                  // child component. it should have hydrated its own tree.
                  initComponent(vnode, insertedVnodeQueue);
                  return true;
              }
          }
          if (isDef(tag)) {
              if (isDef(children)) {
                  // empty element, allow client to pick up and populate children
                  if (!elm.hasChildNodes()) {
                      createChildren(vnode, children, insertedVnodeQueue);
                  }
                  else {
                      // v-html and domProps: innerHTML
                      if (isDef((i = data)) &&
                          isDef((i = i.domProps)) &&
                          isDef((i = i.innerHTML))) {
                          if (i !== elm.innerHTML) {
                              /* istanbul ignore if */
                              if (typeof console !== 'undefined' &&
                                  !hydrationBailed) {
                                  hydrationBailed = true;
                                  console.warn('Parent: ', elm);
                                  console.warn('server innerHTML: ', i);
                                  console.warn('client innerHTML: ', elm.innerHTML);
                              }
                              return false;
                          }
                      }
                      else {
                          // iterate and compare children lists
                          var childrenMatch = true;
                          var childNode = elm.firstChild;
                          for (var i_7 = 0; i_7 < children.length; i_7++) {
                              if (!childNode ||
                                  !hydrate(childNode, children[i_7], insertedVnodeQueue, inVPre)) {
                                  childrenMatch = false;
                                  break;
                              }
                              childNode = childNode.nextSibling;
                          }
                          // if childNode is not null, it means the actual childNodes list is
                          // longer than the virtual children list.
                          if (!childrenMatch || childNode) {
                              /* istanbul ignore if */
                              if (typeof console !== 'undefined' &&
                                  !hydrationBailed) {
                                  hydrationBailed = true;
                                  console.warn('Parent: ', elm);
                                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                              }
                              return false;
                          }
                      }
                  }
              }
              if (isDef(data)) {
                  var fullInvoke = false;
                  for (var key in data) {
                      if (!isRenderedModule(key)) {
                          fullInvoke = true;
                          invokeCreateHooks(vnode, insertedVnodeQueue);
                          break;
                      }
                  }
                  if (!fullInvoke && data['class']) {
                      // ensure collecting deps for deep class bindings for future updates
                      traverse(data['class']);
                  }
              }
          }
          else if (elm.data !== vnode.text) {
              elm.data = vnode.text;
          }
          return true;
      }
      function assertNodeMatch(node, vnode, inVPre) {
          if (isDef(vnode.tag)) {
              return (vnode.tag.indexOf('vue-component') === 0 ||
                  (!isUnknownElement(vnode, inVPre) &&
                      vnode.tag.toLowerCase() ===
                          (node.tagName && node.tagName.toLowerCase())));
          }
          else {
              return node.nodeType === (vnode.isComment ? 8 : 3);
          }
      }
      return function patch(oldVnode, vnode, hydrating, removeOnly) {
          if (isUndef(vnode)) {
              if (isDef(oldVnode))
                  invokeDestroyHook(oldVnode);
              return;
          }
          var isInitialPatch = false;
          var insertedVnodeQueue = [];
          if (isUndef(oldVnode)) {
              // empty mount (likely as component), create new root element
              isInitialPatch = true;
              createElm(vnode, insertedVnodeQueue);
          }
          else {
              var isRealElement = isDef(oldVnode.nodeType);
              if (!isRealElement && sameVnode(oldVnode, vnode)) {
                  // patch existing root node
                  patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
              }
              else {
                  if (isRealElement) {
                      // mounting to a real element
                      // check if this is server-rendered content and if we can perform
                      // a successful hydration.
                      if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                          oldVnode.removeAttribute(SSR_ATTR);
                          hydrating = true;
                      }
                      if (isTrue(hydrating)) {
                          if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                              invokeInsertHook(vnode, insertedVnodeQueue, true);
                              return oldVnode;
                          }
                          else {
                              warn$2('The client-side rendered virtual DOM tree is not matching ' +
                                  'server-rendered content. This is likely caused by incorrect ' +
                                  'HTML markup, for example nesting block-level elements inside ' +
                                  '<p>, or missing <tbody>. Bailing hydration and performing ' +
                                  'full client-side render.');
                          }
                      }
                      // either not server-rendered, or hydration failed.
                      // create an empty node and replace it
                      oldVnode = emptyNodeAt(oldVnode);
                  }
                  // replacing existing element
                  var oldElm = oldVnode.elm;
                  var parentElm = nodeOps.parentNode(oldElm);
                  // create new node
                  createElm(vnode, insertedVnodeQueue, 
                  // extremely rare edge case: do not insert if old element is in a
                  // leaving transition. Only happens when combining transition +
                  // keep-alive + HOCs. (#4590)
                  oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm));
                  // update parent placeholder node element, recursively
                  if (isDef(vnode.parent)) {
                      var ancestor = vnode.parent;
                      var patchable = isPatchable(vnode);
                      while (ancestor) {
                          for (var i_8 = 0; i_8 < cbs.destroy.length; ++i_8) {
                              cbs.destroy[i_8](ancestor);
                          }
                          ancestor.elm = vnode.elm;
                          if (patchable) {
                              for (var i_9 = 0; i_9 < cbs.create.length; ++i_9) {
                                  cbs.create[i_9](emptyNode, ancestor);
                              }
                              // #6513
                              // invoke insert hooks that may have been merged by create hooks.
                              // e.g. for directives that uses the "inserted" hook.
                              var insert_1 = ancestor.data.hook.insert;
                              if (insert_1.merged) {
                                  // start at index 1 to avoid re-invoking component mounted hook
                                  // clone insert hooks to avoid being mutated during iteration.
                                  // e.g. for customed directives under transition group.
                                  var cloned = insert_1.fns.slice(1);
                                  for (var i_10 = 0; i_10 < cloned.length; i_10++) {
                                      cloned[i_10]();
                                  }
                              }
                          }
                          else {
                              registerRef(ancestor);
                          }
                          ancestor = ancestor.parent;
                      }
                  }
                  // destroy old node
                  if (isDef(parentElm)) {
                      removeVnodes([oldVnode], 0, 0);
                  }
                  else if (isDef(oldVnode.tag)) {
                      invokeDestroyHook(oldVnode);
                  }
              }
          }
          invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
          return vnode.elm;
      };
  }

  var directives$1 = {
      create: updateDirectives,
      update: updateDirectives,
      destroy: function unbindDirectives(vnode) {
          // @ts-expect-error emptyNode is not VNodeWithData
          updateDirectives(vnode, emptyNode);
      }
  };
  function updateDirectives(oldVnode, vnode) {
      if (oldVnode.data.directives || vnode.data.directives) {
          _update(oldVnode, vnode);
      }
  }
  function _update(oldVnode, vnode) {
      var isCreate = oldVnode === emptyNode;
      var isDestroy = vnode === emptyNode;
      var oldDirs = normalizeDirectives(oldVnode.data.directives, oldVnode.context);
      var newDirs = normalizeDirectives(vnode.data.directives, vnode.context);
      var dirsWithInsert = [];
      var dirsWithPostpatch = [];
      var key, oldDir, dir;
      for (key in newDirs) {
          oldDir = oldDirs[key];
          dir = newDirs[key];
          if (!oldDir) {
              // new directive, bind
              callHook(dir, 'bind', vnode, oldVnode);
              if (dir.def && dir.def.inserted) {
                  dirsWithInsert.push(dir);
              }
          }
          else {
              // existing directive, update
              dir.oldValue = oldDir.value;
              dir.oldArg = oldDir.arg;
              callHook(dir, 'update', vnode, oldVnode);
              if (dir.def && dir.def.componentUpdated) {
                  dirsWithPostpatch.push(dir);
              }
          }
      }
      if (dirsWithInsert.length) {
          var callInsert = function () {
              for (var i = 0; i < dirsWithInsert.length; i++) {
                  callHook(dirsWithInsert[i], 'inserted', vnode, oldVnode);
              }
          };
          if (isCreate) {
              mergeVNodeHook(vnode, 'insert', callInsert);
          }
          else {
              callInsert();
          }
      }
      if (dirsWithPostpatch.length) {
          mergeVNodeHook(vnode, 'postpatch', function () {
              for (var i = 0; i < dirsWithPostpatch.length; i++) {
                  callHook(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
              }
          });
      }
      if (!isCreate) {
          for (key in oldDirs) {
              if (!newDirs[key]) {
                  // no longer present, unbind
                  callHook(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
              }
          }
      }
  }
  var emptyModifiers = Object.create(null);
  function normalizeDirectives(dirs, vm) {
      var res = Object.create(null);
      if (!dirs) {
          // $flow-disable-line
          return res;
      }
      var i, dir;
      for (i = 0; i < dirs.length; i++) {
          dir = dirs[i];
          if (!dir.modifiers) {
              // $flow-disable-line
              dir.modifiers = emptyModifiers;
          }
          res[getRawDirName(dir)] = dir;
          if (vm._setupState && vm._setupState.__sfc) {
              var setupDef = dir.def || resolveAsset(vm, '_setupState', 'v-' + dir.name);
              if (typeof setupDef === 'function') {
                  dir.def = {
                      bind: setupDef,
                      update: setupDef,
                  };
              }
              else {
                  dir.def = setupDef;
              }
          }
          dir.def = dir.def || resolveAsset(vm.$options, 'directives', dir.name, true);
      }
      // $flow-disable-line
      return res;
  }
  function getRawDirName(dir) {
      return (dir.rawName || "".concat(dir.name, ".").concat(Object.keys(dir.modifiers || {}).join('.')));
  }
  function callHook(dir, hook, vnode, oldVnode, isDestroy) {
      var fn = dir.def && dir.def[hook];
      if (fn) {
          try {
              fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
          }
          catch (e) {
              handleError(e, vnode.context, "directive ".concat(dir.name, " ").concat(hook, " hook"));
          }
      }
  }

  var baseModules = [ref, directives$1];

  function updateAttrs(oldVnode, vnode) {
      var opts = vnode.componentOptions;
      if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
          return;
      }
      if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
          return;
      }
      var key, cur, old;
      var elm = vnode.elm;
      var oldAttrs = oldVnode.data.attrs || {};
      var attrs = vnode.data.attrs || {};
      // clone observed objects, as the user probably wants to mutate it
      if (isDef(attrs.__ob__) || isTrue(attrs._v_attr_proxy)) {
          attrs = vnode.data.attrs = extend({}, attrs);
      }
      for (key in attrs) {
          cur = attrs[key];
          old = oldAttrs[key];
          if (old !== cur) {
              setAttr(elm, key, cur, vnode.data.pre);
          }
      }
      // #4391: in IE9, setting type can reset value for input[type=radio]
      // #6666: IE/Edge forces progress value down to 1 before setting a max
      /* istanbul ignore if */
      if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
          setAttr(elm, 'value', attrs.value);
      }
      for (key in oldAttrs) {
          if (isUndef(attrs[key])) {
              if (isXlink(key)) {
                  elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
              }
              else if (!isEnumeratedAttr(key)) {
                  elm.removeAttribute(key);
              }
          }
      }
  }
  function setAttr(el, key, value, isInPre) {
      if (isInPre || el.tagName.indexOf('-') > -1) {
          baseSetAttr(el, key, value);
      }
      else if (isBooleanAttr(key)) {
          // set attribute for blank value
          // e.g. <option disabled>Select one</option>
          if (isFalsyAttrValue(value)) {
              el.removeAttribute(key);
          }
          else {
              // technically allowfullscreen is a boolean attribute for <iframe>,
              // but Flash expects a value of "true" when used on <embed> tag
              value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
              el.setAttribute(key, value);
          }
      }
      else if (isEnumeratedAttr(key)) {
          el.setAttribute(key, convertEnumeratedValue(key, value));
      }
      else if (isXlink(key)) {
          if (isFalsyAttrValue(value)) {
              el.removeAttributeNS(xlinkNS, getXlinkProp(key));
          }
          else {
              el.setAttributeNS(xlinkNS, key, value);
          }
      }
      else {
          baseSetAttr(el, key, value);
      }
  }
  function baseSetAttr(el, key, value) {
      if (isFalsyAttrValue(value)) {
          el.removeAttribute(key);
      }
      else {
          // #7138: IE10 & 11 fires input event when setting placeholder on
          // <textarea>... block the first input event and remove the blocker
          // immediately.
          /* istanbul ignore if */
          if (isIE &&
              !isIE9 &&
              el.tagName === 'TEXTAREA' &&
              key === 'placeholder' &&
              value !== '' &&
              !el.__ieph) {
              var blocker_1 = function (e) {
                  e.stopImmediatePropagation();
                  el.removeEventListener('input', blocker_1);
              };
              el.addEventListener('input', blocker_1);
              // $flow-disable-line
              el.__ieph = true; /* IE placeholder patched */
          }
          el.setAttribute(key, value);
      }
  }
  var attrs = {
      create: updateAttrs,
      update: updateAttrs
  };

  function updateClass(oldVnode, vnode) {
      var el = vnode.elm;
      var data = vnode.data;
      var oldData = oldVnode.data;
      if (isUndef(data.staticClass) &&
          isUndef(data.class) &&
          (isUndef(oldData) ||
              (isUndef(oldData.staticClass) && isUndef(oldData.class)))) {
          return;
      }
      var cls = genClassForVnode(vnode);
      // handle transition classes
      var transitionClass = el._transitionClasses;
      if (isDef(transitionClass)) {
          cls = concat(cls, stringifyClass(transitionClass));
      }
      // set the class
      if (cls !== el._prevClass) {
          el.setAttribute('class', cls);
          el._prevClass = cls;
      }
  }
  var klass$1 = {
      create: updateClass,
      update: updateClass
  };

  var validDivisionCharRE = /[\w).+\-_$\]]/;
  function parseFilters(exp) {
      var inSingle = false;
      var inDouble = false;
      var inTemplateString = false;
      var inRegex = false;
      var curly = 0;
      var square = 0;
      var paren = 0;
      var lastFilterIndex = 0;
      var c, prev, i, expression, filters;
      for (i = 0; i < exp.length; i++) {
          prev = c;
          c = exp.charCodeAt(i);
          if (inSingle) {
              if (c === 0x27 && prev !== 0x5c)
                  inSingle = false;
          }
          else if (inDouble) {
              if (c === 0x22 && prev !== 0x5c)
                  inDouble = false;
          }
          else if (inTemplateString) {
              if (c === 0x60 && prev !== 0x5c)
                  inTemplateString = false;
          }
          else if (inRegex) {
              if (c === 0x2f && prev !== 0x5c)
                  inRegex = false;
          }
          else if (c === 0x7c && // pipe
              exp.charCodeAt(i + 1) !== 0x7c &&
              exp.charCodeAt(i - 1) !== 0x7c &&
              !curly &&
              !square &&
              !paren) {
              if (expression === undefined) {
                  // first filter, end of expression
                  lastFilterIndex = i + 1;
                  expression = exp.slice(0, i).trim();
              }
              else {
                  pushFilter();
              }
          }
          else {
              switch (c) {
                  case 0x22:
                      inDouble = true;
                      break; // "
                  case 0x27:
                      inSingle = true;
                      break; // '
                  case 0x60:
                      inTemplateString = true;
                      break; // `
                  case 0x28:
                      paren++;
                      break; // (
                  case 0x29:
                      paren--;
                      break; // )
                  case 0x5b:
                      square++;
                      break; // [
                  case 0x5d:
                      square--;
                      break; // ]
                  case 0x7b:
                      curly++;
                      break; // {
                  case 0x7d:
                      curly--;
                      break; // }
              }
              if (c === 0x2f) {
                  // /
                  var j = i - 1;
                  var p 
                  // find first non-whitespace prev char
                  = void 0;
                  // find first non-whitespace prev char
                  for (; j >= 0; j--) {
                      p = exp.charAt(j);
                      if (p !== ' ')
                          break;
                  }
                  if (!p || !validDivisionCharRE.test(p)) {
                      inRegex = true;
                  }
              }
          }
      }
      if (expression === undefined) {
          expression = exp.slice(0, i).trim();
      }
      else if (lastFilterIndex !== 0) {
          pushFilter();
      }
      function pushFilter() {
          (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
          lastFilterIndex = i + 1;
      }
      if (filters) {
          for (i = 0; i < filters.length; i++) {
              expression = wrapFilter(expression, filters[i]);
          }
      }
      return expression;
  }
  function wrapFilter(exp, filter) {
      var i = filter.indexOf('(');
      if (i < 0) {
          // _f: resolveFilter
          return "_f(\"".concat(filter, "\")(").concat(exp, ")");
      }
      else {
          var name_1 = filter.slice(0, i);
          var args = filter.slice(i + 1);
          return "_f(\"".concat(name_1, "\")(").concat(exp).concat(args !== ')' ? ',' + args : args);
      }
  }

  /* eslint-disable no-unused-vars */
  function baseWarn(msg, range) {
      console.error("[Vue compiler]: ".concat(msg));
  }
  /* eslint-enable no-unused-vars */
  function pluckModuleFunction(modules, key) {
      return modules ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; }) : [];
  }
  function addProp(el, name, value, range, dynamic) {
      (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
      el.plain = false;
  }
  function addAttr(el, name, value, range, dynamic) {
      var attrs = dynamic
          ? el.dynamicAttrs || (el.dynamicAttrs = [])
          : el.attrs || (el.attrs = []);
      attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
      el.plain = false;
  }
  // add a raw attr (use this in preTransforms)
  function addRawAttr(el, name, value, range) {
      el.attrsMap[name] = value;
      el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
  }
  function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range) {
      (el.directives || (el.directives = [])).push(rangeSetItem({
          name: name,
          rawName: rawName,
          value: value,
          arg: arg,
          isDynamicArg: isDynamicArg,
          modifiers: modifiers
      }, range));
      el.plain = false;
  }
  function prependModifierMarker(symbol, name, dynamic) {
      return dynamic ? "_p(".concat(name, ",\"").concat(symbol, "\")") : symbol + name; // mark the event as captured
  }
  function addHandler(el, name, value, modifiers, important, warn, range, dynamic) {
      modifiers = modifiers || emptyObject;
      // warn prevent and passive modifier
      /* istanbul ignore if */
      if (warn && modifiers.prevent && modifiers.passive) {
          warn("passive and prevent can't be used together. " +
              "Passive handler can't prevent default event.", range);
      }
      // normalize click.right and click.middle since they don't actually fire
      // this is technically browser-specific, but at least for now browsers are
      // the only target envs that have right/middle clicks.
      if (modifiers.right) {
          if (dynamic) {
              name = "(".concat(name, ")==='click'?'contextmenu':(").concat(name, ")");
          }
          else if (name === 'click') {
              name = 'contextmenu';
              delete modifiers.right;
          }
      }
      else if (modifiers.middle) {
          if (dynamic) {
              name = "(".concat(name, ")==='click'?'mouseup':(").concat(name, ")");
          }
          else if (name === 'click') {
              name = 'mouseup';
          }
      }
      // check capture modifier
      if (modifiers.capture) {
          delete modifiers.capture;
          name = prependModifierMarker('!', name, dynamic);
      }
      if (modifiers.once) {
          delete modifiers.once;
          name = prependModifierMarker('~', name, dynamic);
      }
      /* istanbul ignore if */
      if (modifiers.passive) {
          delete modifiers.passive;
          name = prependModifierMarker('&', name, dynamic);
      }
      var events;
      if (modifiers.native) {
          delete modifiers.native;
          events = el.nativeEvents || (el.nativeEvents = {});
      }
      else {
          events = el.events || (el.events = {});
      }
      var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
      if (modifiers !== emptyObject) {
          newHandler.modifiers = modifiers;
      }
      var handlers = events[name];
      /* istanbul ignore if */
      if (Array.isArray(handlers)) {
          important ? handlers.unshift(newHandler) : handlers.push(newHandler);
      }
      else if (handlers) {
          events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
      }
      else {
          events[name] = newHandler;
      }
      el.plain = false;
  }
  function getRawBindingAttr(el, name) {
      return (el.rawAttrsMap[':' + name] ||
          el.rawAttrsMap['v-bind:' + name] ||
          el.rawAttrsMap[name]);
  }
  function getBindingAttr(el, name, getStatic) {
      var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
      if (dynamicValue != null) {
          return parseFilters(dynamicValue);
      }
      else if (getStatic !== false) {
          var staticValue = getAndRemoveAttr(el, name);
          if (staticValue != null) {
              return JSON.stringify(staticValue);
          }
      }
  }
  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr(el, name, removeFromMap) {
      var val;
      if ((val = el.attrsMap[name]) != null) {
          var list = el.attrsList;
          for (var i = 0, l = list.length; i < l; i++) {
              if (list[i].name === name) {
                  list.splice(i, 1);
                  break;
              }
          }
      }
      if (removeFromMap) {
          delete el.attrsMap[name];
      }
      return val;
  }
  function getAndRemoveAttrByRegex(el, name) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
          var attr = list[i];
          if (name.test(attr.name)) {
              list.splice(i, 1);
              return attr;
          }
      }
  }
  function rangeSetItem(item, range) {
      if (range) {
          if (range.start != null) {
              item.start = range.start;
          }
          if (range.end != null) {
              item.end = range.end;
          }
      }
      return item;
  }

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel(el, value, modifiers) {
      var _a = modifiers || {}, number = _a.number, trim = _a.trim;
      var baseValueExpression = '$$v';
      var valueExpression = baseValueExpression;
      if (trim) {
          valueExpression =
              "(typeof ".concat(baseValueExpression, " === 'string'") +
                  "? ".concat(baseValueExpression, ".trim()") +
                  ": ".concat(baseValueExpression, ")");
      }
      if (number) {
          valueExpression = "_n(".concat(valueExpression, ")");
      }
      var assignment = genAssignmentCode(value, valueExpression);
      el.model = {
          value: "(".concat(value, ")"),
          expression: JSON.stringify(value),
          callback: "function (".concat(baseValueExpression, ") {").concat(assignment, "}")
      };
  }
  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode(value, assignment) {
      var res = parseModel(value);
      if (res.key === null) {
          return "".concat(value, "=").concat(assignment);
      }
      else {
          return "$set(".concat(res.exp, ", ").concat(res.key, ", ").concat(assignment, ")");
      }
  }
  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */
  var len, str, chr, index, expressionPos, expressionEndPos;
  function parseModel(val) {
      // Fix https://github.com/vuejs/vue/pull/7730
      // allow v-model="obj.val " (trailing whitespace)
      val = val.trim();
      len = val.length;
      if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
          index = val.lastIndexOf('.');
          if (index > -1) {
              return {
                  exp: val.slice(0, index),
                  key: '"' + val.slice(index + 1) + '"'
              };
          }
          else {
              return {
                  exp: val,
                  key: null
              };
          }
      }
      str = val;
      index = expressionPos = expressionEndPos = 0;
      while (!eof()) {
          chr = next();
          /* istanbul ignore if */
          if (isStringStart(chr)) {
              parseString(chr);
          }
          else if (chr === 0x5b) {
              parseBracket(chr);
          }
      }
      return {
          exp: val.slice(0, expressionPos),
          key: val.slice(expressionPos + 1, expressionEndPos)
      };
  }
  function next() {
      return str.charCodeAt(++index);
  }
  function eof() {
      return index >= len;
  }
  function isStringStart(chr) {
      return chr === 0x22 || chr === 0x27;
  }
  function parseBracket(chr) {
      var inBracket = 1;
      expressionPos = index;
      while (!eof()) {
          chr = next();
          if (isStringStart(chr)) {
              parseString(chr);
              continue;
          }
          if (chr === 0x5b)
              inBracket++;
          if (chr === 0x5d)
              inBracket--;
          if (inBracket === 0) {
              expressionEndPos = index;
              break;
          }
      }
  }
  function parseString(chr) {
      var stringQuote = chr;
      while (!eof()) {
          chr = next();
          if (chr === stringQuote) {
              break;
          }
      }
  }

  var warn$1;
  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';
  function model$1(el, dir, _warn) {
      warn$1 = _warn;
      var value = dir.value;
      var modifiers = dir.modifiers;
      var tag = el.tag;
      var type = el.attrsMap.type;
      {
          // inputs with type="file" are read only and setting the input's
          // value will throw an error.
          if (tag === 'input' && type === 'file') {
              warn$1("<".concat(el.tag, " v-model=\"").concat(value, "\" type=\"file\">:\n") +
                  "File inputs are read only. Use a v-on:change listener instead.", el.rawAttrsMap['v-model']);
          }
      }
      if (el.component) {
          genComponentModel(el, value, modifiers);
          // component v-model doesn't need extra runtime
          return false;
      }
      else if (tag === 'select') {
          genSelect(el, value, modifiers);
      }
      else if (tag === 'input' && type === 'checkbox') {
          genCheckboxModel(el, value, modifiers);
      }
      else if (tag === 'input' && type === 'radio') {
          genRadioModel(el, value, modifiers);
      }
      else if (tag === 'input' || tag === 'textarea') {
          genDefaultModel(el, value, modifiers);
      }
      else if (!config.isReservedTag(tag)) {
          genComponentModel(el, value, modifiers);
          // component v-model doesn't need extra runtime
          return false;
      }
      else {
          warn$1("<".concat(el.tag, " v-model=\"").concat(value, "\">: ") +
              "v-model is not supported on this element type. " +
              "If you are working with contenteditable, it's recommended to " +
              'wrap a library dedicated for that purpose inside a custom component.', el.rawAttrsMap['v-model']);
      }
      // ensure runtime directive metadata
      return true;
  }
  function genCheckboxModel(el, value, modifiers) {
      var number = modifiers && modifiers.number;
      var valueBinding = getBindingAttr(el, 'value') || 'null';
      var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
      var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
      addProp(el, 'checked', "Array.isArray(".concat(value, ")") +
          "?_i(".concat(value, ",").concat(valueBinding, ")>-1") +
          (trueValueBinding === 'true'
              ? ":(".concat(value, ")")
              : ":_q(".concat(value, ",").concat(trueValueBinding, ")")));
      addHandler(el, 'change', "var $$a=".concat(value, ",") +
          '$$el=$event.target,' +
          "$$c=$$el.checked?(".concat(trueValueBinding, "):(").concat(falseValueBinding, ");") +
          'if(Array.isArray($$a)){' +
          "var $$v=".concat(number ? '_n(' + valueBinding + ')' : valueBinding, ",") +
          '$$i=_i($$a,$$v);' +
          "if($$el.checked){$$i<0&&(".concat(genAssignmentCode(value, '$$a.concat([$$v])'), ")}") +
          "else{$$i>-1&&(".concat(genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))'), ")}") +
          "}else{".concat(genAssignmentCode(value, '$$c'), "}"), null, true);
  }
  function genRadioModel(el, value, modifiers) {
      var number = modifiers && modifiers.number;
      var valueBinding = getBindingAttr(el, 'value') || 'null';
      valueBinding = number ? "_n(".concat(valueBinding, ")") : valueBinding;
      addProp(el, 'checked', "_q(".concat(value, ",").concat(valueBinding, ")"));
      addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }
  function genSelect(el, value, modifiers) {
      var number = modifiers && modifiers.number;
      var selectedVal = "Array.prototype.filter" +
          ".call($event.target.options,function(o){return o.selected})" +
          ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
          "return ".concat(number ? '_n(val)' : 'val', "})");
      var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
      var code = "var $$selectedVal = ".concat(selectedVal, ";");
      code = "".concat(code, " ").concat(genAssignmentCode(value, assignment));
      addHandler(el, 'change', code, null, true);
  }
  function genDefaultModel(el, value, modifiers) {
      var type = el.attrsMap.type;
      // warn if v-bind:value conflicts with v-model
      // except for inputs with v-bind:type
      {
          var value_1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
          var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
          if (value_1 && !typeBinding) {
              var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
              warn$1("".concat(binding, "=\"").concat(value_1, "\" conflicts with v-model on the same element ") +
                  'because the latter already expands to a value binding internally', el.rawAttrsMap[binding]);
          }
      }
      var _a = modifiers || {}, lazy = _a.lazy, number = _a.number, trim = _a.trim;
      var needCompositionGuard = !lazy && type !== 'range';
      var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';
      var valueExpression = '$event.target.value';
      if (trim) {
          valueExpression = "$event.target.value.trim()";
      }
      if (number) {
          valueExpression = "_n(".concat(valueExpression, ")");
      }
      var code = genAssignmentCode(value, valueExpression);
      if (needCompositionGuard) {
          code = "if($event.target.composing)return;".concat(code);
      }
      addProp(el, 'value', "(".concat(value, ")"));
      addHandler(el, event, code, null, true);
      if (trim || number) {
          addHandler(el, 'blur', '$forceUpdate()');
      }
  }

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents(on) {
      /* istanbul ignore if */
      if (isDef(on[RANGE_TOKEN])) {
          // IE input[type=range] only supports `change` event
          var event_1 = isIE ? 'change' : 'input';
          on[event_1] = [].concat(on[RANGE_TOKEN], on[event_1] || []);
          delete on[RANGE_TOKEN];
      }
      // This was originally intended to fix #4521 but no longer necessary
      // after 2.5. Keeping it for backwards compat with generated code from < 2.4
      /* istanbul ignore if */
      if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
          on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
          delete on[CHECKBOX_RADIO_TOKEN];
      }
  }
  var target;
  function createOnceHandler(event, handler, capture) {
      var _target = target; // save current target element in closure
      return function onceHandler() {
          var res = handler.apply(null, arguments);
          if (res !== null) {
              remove(event, onceHandler, capture, _target);
          }
      };
  }
  // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.
  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
  function add(name, handler, capture, passive) {
      // async edge case #6566: inner click event triggers patch, event handler
      // attached to outer element during patch, and triggered again. This
      // happens because browsers fire microtask ticks between event propagation.
      // the solution is simple: we save the timestamp when a handler is attached,
      // and the handler would only fire if the event passed to it was fired
      // AFTER it was attached.
      if (useMicrotaskFix) {
          var attachedTimestamp_1 = currentFlushTimestamp;
          var original_1 = handler;
          //@ts-expect-error
          handler = original_1._wrapper = function (e) {
              if (
              // no bubbling, should always fire.
              // this is just a safety net in case event.timeStamp is unreliable in
              // certain weird environments...
              e.target === e.currentTarget ||
                  // event is fired after handler attachment
                  e.timeStamp >= attachedTimestamp_1 ||
                  // bail for environments that have buggy event.timeStamp implementations
                  // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
                  // #9681 QtWebEngine event.timeStamp is negative value
                  e.timeStamp <= 0 ||
                  // #9448 bail if event is fired in another document in a multi-page
                  // electron/nw.js app, since event.timeStamp will be using a different
                  // starting reference
                  e.target.ownerDocument !== document) {
                  return original_1.apply(this, arguments);
              }
          };
      }
      target.addEventListener(name, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
  }
  function remove(name, handler, capture, _target) {
      (_target || target).removeEventListener(name, 
      //@ts-expect-error
      handler._wrapper || handler, capture);
  }
  function updateDOMListeners(oldVnode, vnode) {
      if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
          return;
      }
      var on = vnode.data.on || {};
      var oldOn = oldVnode.data.on || {};
      // vnode is empty when removing all listeners,
      // and use old vnode dom element
      target = vnode.elm || oldVnode.elm;
      normalizeEvents(on);
      updateListeners(on, oldOn, add, remove, createOnceHandler, vnode.context);
      target = undefined;
  }
  var events = {
      create: updateDOMListeners,
      update: updateDOMListeners,
      // @ts-expect-error emptyNode has actually data
      destroy: function (vnode) { return updateDOMListeners(vnode, emptyNode); }
  };

  var svgContainer;
  function updateDOMProps(oldVnode, vnode) {
      if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
          return;
      }
      var key, cur;
      var elm = vnode.elm;
      var oldProps = oldVnode.data.domProps || {};
      var props = vnode.data.domProps || {};
      // clone observed objects, as the user probably wants to mutate it
      if (isDef(props.__ob__) || isTrue(props._v_attr_proxy)) {
          props = vnode.data.domProps = extend({}, props);
      }
      for (key in oldProps) {
          if (!(key in props)) {
              elm[key] = '';
          }
      }
      for (key in props) {
          cur = props[key];
          // ignore children if the node has textContent or innerHTML,
          // as these will throw away existing DOM nodes and cause removal errors
          // on subsequent patches (#3360)
          if (key === 'textContent' || key === 'innerHTML') {
              if (vnode.children)
                  vnode.children.length = 0;
              if (cur === oldProps[key])
                  continue;
              // #6601 work around Chrome version <= 55 bug where single textNode
              // replaced by innerHTML/textContent retains its parentNode property
              if (elm.childNodes.length === 1) {
                  elm.removeChild(elm.childNodes[0]);
              }
          }
          if (key === 'value' && elm.tagName !== 'PROGRESS') {
              // store value as _value as well since
              // non-string values will be stringified
              elm._value = cur;
              // avoid resetting cursor position when value is the same
              var strCur = isUndef(cur) ? '' : String(cur);
              if (shouldUpdateValue(elm, strCur)) {
                  elm.value = strCur;
              }
          }
          else if (key === 'innerHTML' &&
              isSVG(elm.tagName) &&
              isUndef(elm.innerHTML)) {
              // IE doesn't support innerHTML for SVG elements
              svgContainer = svgContainer || document.createElement('div');
              svgContainer.innerHTML = "<svg>".concat(cur, "</svg>");
              var svg = svgContainer.firstChild;
              while (elm.firstChild) {
                  elm.removeChild(elm.firstChild);
              }
              while (svg.firstChild) {
                  elm.appendChild(svg.firstChild);
              }
          }
          else if (
          // skip the update if old and new VDOM state is the same.
          // `value` is handled separately because the DOM value may be temporarily
          // out of sync with VDOM state due to focus, composition and modifiers.
          // This  #4521 by skipping the unnecessary `checked` update.
          cur !== oldProps[key]) {
              // some property updates can throw
              // e.g. `value` on <progress> w/ non-finite value
              try {
                  elm[key] = cur;
              }
              catch (e) { }
          }
      }
  }
  function shouldUpdateValue(elm, checkVal) {
      return (
      //@ts-expect-error
      !elm.composing &&
          (elm.tagName === 'OPTION' ||
              isNotInFocusAndDirty(elm, checkVal) ||
              isDirtyWithModifiers(elm, checkVal)));
  }
  function isNotInFocusAndDirty(elm, checkVal) {
      // return true when textbox (.number and .trim) loses focus and its value is
      // not equal to the updated value
      var notInFocus = true;
      // #6157
      // work around IE bug when accessing document.activeElement in an iframe
      try {
          notInFocus = document.activeElement !== elm;
      }
      catch (e) { }
      return notInFocus && elm.value !== checkVal;
  }
  function isDirtyWithModifiers(elm, newVal) {
      var value = elm.value;
      var modifiers = elm._vModifiers; // injected by v-model runtime
      if (isDef(modifiers)) {
          if (modifiers.number) {
              return toNumber(value) !== toNumber(newVal);
          }
          if (modifiers.trim) {
              return value.trim() !== newVal.trim();
          }
      }
      return value !== newVal;
  }
  var domProps = {
      create: updateDOMProps,
      update: updateDOMProps
  };

  var parseStyleText = cached(function (cssText) {
      var res = {};
      var listDelimiter = /;(?![^(]*\))/g;
      var propertyDelimiter = /:(.+)/;
      cssText.split(listDelimiter).forEach(function (item) {
          if (item) {
              var tmp = item.split(propertyDelimiter);
              tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
          }
      });
      return res;
  });
  // merge static and dynamic style data on the same vnode
  function normalizeStyleData(data) {
      var style = normalizeStyleBinding(data.style);
      // static style is pre-processed into an object during compilation
      // and is always a fresh object, so it's safe to merge into it
      return data.staticStyle ? extend(data.staticStyle, style) : style;
  }
  // normalize possible array / string values into Object
  function normalizeStyleBinding(bindingStyle) {
      if (Array.isArray(bindingStyle)) {
          return toObject(bindingStyle);
      }
      if (typeof bindingStyle === 'string') {
          return parseStyleText(bindingStyle);
      }
      return bindingStyle;
  }
  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle(vnode, checkChild) {
      var res = {};
      var styleData;
      if (checkChild) {
          var childNode = vnode;
          while (childNode.componentInstance) {
              childNode = childNode.componentInstance._vnode;
              if (childNode &&
                  childNode.data &&
                  (styleData = normalizeStyleData(childNode.data))) {
                  extend(res, styleData);
              }
          }
      }
      if ((styleData = normalizeStyleData(vnode.data))) {
          extend(res, styleData);
      }
      var parentNode = vnode;
      // @ts-expect-error parentNode.parent not VNodeWithData
      while ((parentNode = parentNode.parent)) {
          if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
              extend(res, styleData);
          }
      }
      return res;
  }

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function (el, name, val) {
      /* istanbul ignore if */
      if (cssVarRE.test(name)) {
          el.style.setProperty(name, val);
      }
      else if (importantRE.test(val)) {
          el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
      }
      else {
          var normalizedName = normalize(name);
          if (Array.isArray(val)) {
              // Support values array created by autoprefixer, e.g.
              // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
              // Set them one by one, and the browser will only set those it can recognize
              for (var i = 0, len = val.length; i < len; i++) {
                  el.style[normalizedName] = val[i];
              }
          }
          else {
              el.style[normalizedName] = val;
          }
      }
  };
  var vendorNames = ['Webkit', 'Moz', 'ms'];
  var emptyStyle;
  var normalize = cached(function (prop) {
      emptyStyle = emptyStyle || document.createElement('div').style;
      prop = camelize(prop);
      if (prop !== 'filter' && prop in emptyStyle) {
          return prop;
      }
      var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
      for (var i = 0; i < vendorNames.length; i++) {
          var name_1 = vendorNames[i] + capName;
          if (name_1 in emptyStyle) {
              return name_1;
          }
      }
  });
  function updateStyle(oldVnode, vnode) {
      var data = vnode.data;
      var oldData = oldVnode.data;
      if (isUndef(data.staticStyle) &&
          isUndef(data.style) &&
          isUndef(oldData.staticStyle) &&
          isUndef(oldData.style)) {
          return;
      }
      var cur, name;
      var el = vnode.elm;
      var oldStaticStyle = oldData.staticStyle;
      var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
      // if static style exists, stylebinding already merged into it when doing normalizeStyleData
      var oldStyle = oldStaticStyle || oldStyleBinding;
      var style = normalizeStyleBinding(vnode.data.style) || {};
      // store normalized style under a different key for next diff
      // make sure to clone it if it's reactive, since the user likely wants
      // to mutate it.
      vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
      var newStyle = getStyle(vnode, true);
      for (name in oldStyle) {
          if (isUndef(newStyle[name])) {
              setProp(el, name, '');
          }
      }
      for (name in newStyle) {
          cur = newStyle[name];
          // ie9 setting to null has no effect, must use empty string
          setProp(el, name, cur == null ? '' : cur);
      }
  }
  var style$1 = {
      create: updateStyle,
      update: updateStyle
  };

  var whitespaceRE$1 = /\s+/;
  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass(el, cls) {
      /* istanbul ignore if */
      if (!cls || !(cls = cls.trim())) {
          return;
      }
      /* istanbul ignore else */
      if (el.classList) {
          if (cls.indexOf(' ') > -1) {
              cls.split(whitespaceRE$1).forEach(function (c) { return el.classList.add(c); });
          }
          else {
              el.classList.add(cls);
          }
      }
      else {
          var cur = " ".concat(el.getAttribute('class') || '', " ");
          if (cur.indexOf(' ' + cls + ' ') < 0) {
              el.setAttribute('class', (cur + cls).trim());
          }
      }
  }
  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass(el, cls) {
      /* istanbul ignore if */
      if (!cls || !(cls = cls.trim())) {
          return;
      }
      /* istanbul ignore else */
      if (el.classList) {
          if (cls.indexOf(' ') > -1) {
              cls.split(whitespaceRE$1).forEach(function (c) { return el.classList.remove(c); });
          }
          else {
              el.classList.remove(cls);
          }
          if (!el.classList.length) {
              el.removeAttribute('class');
          }
      }
      else {
          var cur = " ".concat(el.getAttribute('class') || '', " ");
          var tar = ' ' + cls + ' ';
          while (cur.indexOf(tar) >= 0) {
              cur = cur.replace(tar, ' ');
          }
          cur = cur.trim();
          if (cur) {
              el.setAttribute('class', cur);
          }
          else {
              el.removeAttribute('class');
          }
      }
  }

  function resolveTransition(def) {
      if (!def) {
          return;
      }
      /* istanbul ignore else */
      if (typeof def === 'object') {
          var res = {};
          if (def.css !== false) {
              extend(res, autoCssTransition(def.name || 'v'));
          }
          extend(res, def);
          return res;
      }
      else if (typeof def === 'string') {
          return autoCssTransition(def);
      }
  }
  var autoCssTransition = cached(function (name) {
      return {
          enterClass: "".concat(name, "-enter"),
          enterToClass: "".concat(name, "-enter-to"),
          enterActiveClass: "".concat(name, "-enter-active"),
          leaveClass: "".concat(name, "-leave"),
          leaveToClass: "".concat(name, "-leave-to"),
          leaveActiveClass: "".concat(name, "-leave-active")
      };
  });
  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';
  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
      /* istanbul ignore if */
      if (window.ontransitionend === undefined &&
          window.onwebkittransitionend !== undefined) {
          transitionProp = 'WebkitTransition';
          transitionEndEvent = 'webkitTransitionEnd';
      }
      if (window.onanimationend === undefined &&
          window.onwebkitanimationend !== undefined) {
          animationProp = 'WebkitAnimation';
          animationEndEvent = 'webkitAnimationEnd';
      }
  }
  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser
      ? window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : setTimeout
      : /* istanbul ignore next */ function (/* istanbul ignore next */ fn) { return fn(); };
  function nextFrame(fn) {
      raf(function () {
          // @ts-expect-error
          raf(fn);
      });
  }
  function addTransitionClass(el, cls) {
      var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
      if (transitionClasses.indexOf(cls) < 0) {
          transitionClasses.push(cls);
          addClass(el, cls);
      }
  }
  function removeTransitionClass(el, cls) {
      if (el._transitionClasses) {
          remove$2(el._transitionClasses, cls);
      }
      removeClass(el, cls);
  }
  function whenTransitionEnds(el, expectedType, cb) {
      var _a = getTransitionInfo(el, expectedType), type = _a.type, timeout = _a.timeout, propCount = _a.propCount;
      if (!type)
          return cb();
      var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
      var ended = 0;
      var end = function () {
          el.removeEventListener(event, onEnd);
          cb();
      };
      var onEnd = function (e) {
          if (e.target === el) {
              if (++ended >= propCount) {
                  end();
              }
          }
      };
      setTimeout(function () {
          if (ended < propCount) {
              end();
          }
      }, timeout + 1);
      el.addEventListener(event, onEnd);
  }
  var transformRE = /\b(transform|all)(,|$)/;
  function getTransitionInfo(el, expectedType) {
      var styles = window.getComputedStyle(el);
      // JSDOM may return undefined for transition properties
      var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
      var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
      var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
      var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
      var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
      var animationTimeout = getTimeout(animationDelays, animationDurations);
      var type;
      var timeout = 0;
      var propCount = 0;
      /* istanbul ignore if */
      if (expectedType === TRANSITION) {
          if (transitionTimeout > 0) {
              type = TRANSITION;
              timeout = transitionTimeout;
              propCount = transitionDurations.length;
          }
      }
      else if (expectedType === ANIMATION) {
          if (animationTimeout > 0) {
              type = ANIMATION;
              timeout = animationTimeout;
              propCount = animationDurations.length;
          }
      }
      else {
          timeout = Math.max(transitionTimeout, animationTimeout);
          type =
              timeout > 0
                  ? transitionTimeout > animationTimeout
                      ? TRANSITION
                      : ANIMATION
                  : null;
          propCount = type
              ? type === TRANSITION
                  ? transitionDurations.length
                  : animationDurations.length
              : 0;
      }
      var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
      return {
          type: type,
          timeout: timeout,
          propCount: propCount,
          hasTransform: hasTransform
      };
  }
  function getTimeout(delays, durations) {
      /* istanbul ignore next */
      while (delays.length < durations.length) {
          delays = delays.concat(delays);
      }
      return Math.max.apply(null, durations.map(function (d, i) {
          return toMs(d) + toMs(delays[i]);
      }));
  }
  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs(s) {
      return Number(s.slice(0, -1).replace(',', '.')) * 1000;
  }

  function enter(vnode, toggleDisplay) {
      var el = vnode.elm;
      // call leave callback now
      if (isDef(el._leaveCb)) {
          el._leaveCb.cancelled = true;
          el._leaveCb();
      }
      var data = resolveTransition(vnode.data.transition);
      if (isUndef(data)) {
          return;
      }
      /* istanbul ignore if */
      if (isDef(el._enterCb) || el.nodeType !== 1) {
          return;
      }
      var css = data.css, type = data.type, enterClass = data.enterClass, enterToClass = data.enterToClass, enterActiveClass = data.enterActiveClass, appearClass = data.appearClass, appearToClass = data.appearToClass, appearActiveClass = data.appearActiveClass, beforeEnter = data.beforeEnter, enter = data.enter, afterEnter = data.afterEnter, enterCancelled = data.enterCancelled, beforeAppear = data.beforeAppear, appear = data.appear, afterAppear = data.afterAppear, appearCancelled = data.appearCancelled, duration = data.duration;
      // activeInstance will always be the <transition> component managing this
      // transition. One edge case to check is when the <transition> is placed
      // as the root node of a child component. In that case we need to check
      // <transition>'s parent for appear check.
      var context = activeInstance;
      var transitionNode = activeInstance.$vnode;
      while (transitionNode && transitionNode.parent) {
          context = transitionNode.context;
          transitionNode = transitionNode.parent;
      }
      var isAppear = !context._isMounted || !vnode.isRootInsert;
      if (isAppear && !appear && appear !== '') {
          return;
      }
      var startClass = isAppear && appearClass ? appearClass : enterClass;
      var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
      var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
      var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
      var enterHook = isAppear ? (isFunction(appear) ? appear : enter) : enter;
      var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
      var enterCancelledHook = isAppear
          ? appearCancelled || enterCancelled
          : enterCancelled;
      var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
      if (explicitEnterDuration != null) {
          checkDuration(explicitEnterDuration, 'enter', vnode);
      }
      var expectsCSS = css !== false && !isIE9;
      var userWantsControl = getHookArgumentsLength(enterHook);
      var cb = (el._enterCb = once(function () {
          if (expectsCSS) {
              removeTransitionClass(el, toClass);
              removeTransitionClass(el, activeClass);
          }
          // @ts-expect-error
          if (cb.cancelled) {
              if (expectsCSS) {
                  removeTransitionClass(el, startClass);
              }
              enterCancelledHook && enterCancelledHook(el);
          }
          else {
              afterEnterHook && afterEnterHook(el);
          }
          el._enterCb = null;
      }));
      if (!vnode.data.show) {
          // remove pending leave element on enter by injecting an insert hook
          mergeVNodeHook(vnode, 'insert', function () {
              var parent = el.parentNode;
              var pendingNode = parent && parent._pending && parent._pending[vnode.key];
              if (pendingNode &&
                  pendingNode.tag === vnode.tag &&
                  pendingNode.elm._leaveCb) {
                  pendingNode.elm._leaveCb();
              }
              enterHook && enterHook(el, cb);
          });
      }
      // start enter transition
      beforeEnterHook && beforeEnterHook(el);
      if (expectsCSS) {
          addTransitionClass(el, startClass);
          addTransitionClass(el, activeClass);
          nextFrame(function () {
              removeTransitionClass(el, startClass);
              // @ts-expect-error
              if (!cb.cancelled) {
                  addTransitionClass(el, toClass);
                  if (!userWantsControl) {
                      if (isValidDuration(explicitEnterDuration)) {
                          setTimeout(cb, explicitEnterDuration);
                      }
                      else {
                          whenTransitionEnds(el, type, cb);
                      }
                  }
              }
          });
      }
      if (vnode.data.show) {
          toggleDisplay && toggleDisplay();
          enterHook && enterHook(el, cb);
      }
      if (!expectsCSS && !userWantsControl) {
          cb();
      }
  }
  function leave(vnode, rm) {
      var el = vnode.elm;
      // call enter callback now
      if (isDef(el._enterCb)) {
          el._enterCb.cancelled = true;
          el._enterCb();
      }
      var data = resolveTransition(vnode.data.transition);
      if (isUndef(data) || el.nodeType !== 1) {
          return rm();
      }
      /* istanbul ignore if */
      if (isDef(el._leaveCb)) {
          return;
      }
      var css = data.css, type = data.type, leaveClass = data.leaveClass, leaveToClass = data.leaveToClass, leaveActiveClass = data.leaveActiveClass, beforeLeave = data.beforeLeave, leave = data.leave, afterLeave = data.afterLeave, leaveCancelled = data.leaveCancelled, delayLeave = data.delayLeave, duration = data.duration;
      var expectsCSS = css !== false && !isIE9;
      var userWantsControl = getHookArgumentsLength(leave);
      var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
      if (isDef(explicitLeaveDuration)) {
          checkDuration(explicitLeaveDuration, 'leave', vnode);
      }
      var cb = (el._leaveCb = once(function () {
          if (el.parentNode && el.parentNode._pending) {
              el.parentNode._pending[vnode.key] = null;
          }
          if (expectsCSS) {
              removeTransitionClass(el, leaveToClass);
              removeTransitionClass(el, leaveActiveClass);
          }
          // @ts-expect-error
          if (cb.cancelled) {
              if (expectsCSS) {
                  removeTransitionClass(el, leaveClass);
              }
              leaveCancelled && leaveCancelled(el);
          }
          else {
              rm();
              afterLeave && afterLeave(el);
          }
          el._leaveCb = null;
      }));
      if (delayLeave) {
          delayLeave(performLeave);
      }
      else {
          performLeave();
      }
      function performLeave() {
          // the delayed leave may have already been cancelled
          // @ts-expect-error
          if (cb.cancelled) {
              return;
          }
          // record leaving element
          if (!vnode.data.show && el.parentNode) {
              (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] =
                  vnode;
          }
          beforeLeave && beforeLeave(el);
          if (expectsCSS) {
              addTransitionClass(el, leaveClass);
              addTransitionClass(el, leaveActiveClass);
              nextFrame(function () {
                  removeTransitionClass(el, leaveClass);
                  // @ts-expect-error
                  if (!cb.cancelled) {
                      addTransitionClass(el, leaveToClass);
                      if (!userWantsControl) {
                          if (isValidDuration(explicitLeaveDuration)) {
                              setTimeout(cb, explicitLeaveDuration);
                          }
                          else {
                              whenTransitionEnds(el, type, cb);
                          }
                      }
                  }
              });
          }
          leave && leave(el, cb);
          if (!expectsCSS && !userWantsControl) {
              cb();
          }
      }
  }
  // only used in dev mode
  function checkDuration(val, name, vnode) {
      if (typeof val !== 'number') {
          warn$2("<transition> explicit ".concat(name, " duration is not a valid number - ") +
              "got ".concat(JSON.stringify(val), "."), vnode.context);
      }
      else if (isNaN(val)) {
          warn$2("<transition> explicit ".concat(name, " duration is NaN - ") +
              'the duration expression might be incorrect.', vnode.context);
      }
  }
  function isValidDuration(val) {
      return typeof val === 'number' && !isNaN(val);
  }
  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength(fn) {
      if (isUndef(fn)) {
          return false;
      }
      // @ts-expect-error
      var invokerFns = fn.fns;
      if (isDef(invokerFns)) {
          // invoker
          return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
      }
      else {
          // @ts-expect-error
          return (fn._length || fn.length) > 1;
      }
  }
  function _enter(_, vnode) {
      if (vnode.data.show !== true) {
          enter(vnode);
      }
  }
  var transition = inBrowser
      ? {
          create: _enter,
          activate: _enter,
          remove: function (vnode, rm) {
              /* istanbul ignore else */
              if (vnode.data.show !== true) {
                  // @ts-expect-error
                  leave(vnode, rm);
              }
              else {
                  rm();
              }
          }
      }
      : {};

  var platformModules = [attrs, klass$1, events, domProps, style$1, transition];

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules$1 = platformModules.concat(baseModules);
  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules$1 });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */
  /* istanbul ignore if */
  if (isIE9) {
      // http://www.matts411.com/post/internet-explorer-9-oninput/
      document.addEventListener('selectionchange', function () {
          var el = document.activeElement;
          // @ts-expect-error
          if (el && el.vmodel) {
              trigger(el, 'input');
          }
      });
  }
  var directive = {
      inserted: function (el, binding, vnode, oldVnode) {
          if (vnode.tag === 'select') {
              // #6903
              if (oldVnode.elm && !oldVnode.elm._vOptions) {
                  mergeVNodeHook(vnode, 'postpatch', function () {
                      directive.componentUpdated(el, binding, vnode);
                  });
              }
              else {
                  setSelected(el, binding, vnode.context);
              }
              el._vOptions = [].map.call(el.options, getValue);
          }
          else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
              el._vModifiers = binding.modifiers;
              if (!binding.modifiers.lazy) {
                  el.addEventListener('compositionstart', onCompositionStart);
                  el.addEventListener('compositionend', onCompositionEnd);
                  // Safari < 10.2 & UIWebView doesn't fire compositionend when
                  // switching focus before confirming composition choice
                  // this also fixes the issue where some browsers e.g. iOS Chrome
                  // fires "change" instead of "input" on autocomplete.
                  el.addEventListener('change', onCompositionEnd);
                  /* istanbul ignore if */
                  if (isIE9) {
                      el.vmodel = true;
                  }
              }
          }
      },
      componentUpdated: function (el, binding, vnode) {
          if (vnode.tag === 'select') {
              setSelected(el, binding, vnode.context);
              // in case the options rendered by v-for have changed,
              // it's possible that the value is out-of-sync with the rendered options.
              // detect such cases and filter out values that no longer has a matching
              // option in the DOM.
              var prevOptions_1 = el._vOptions;
              var curOptions_1 = (el._vOptions = [].map.call(el.options, getValue));
              if (curOptions_1.some(function (o, i) { return !looseEqual(o, prevOptions_1[i]); })) {
                  // trigger change event if
                  // no matching option found for at least one value
                  var needReset = el.multiple
                      ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions_1); })
                      : binding.value !== binding.oldValue &&
                          hasNoMatchingOption(binding.value, curOptions_1);
                  if (needReset) {
                      trigger(el, 'change');
                  }
              }
          }
      }
  };
  function setSelected(el, binding, vm) {
      actuallySetSelected(el, binding, vm);
      /* istanbul ignore if */
      if (isIE || isEdge) {
          setTimeout(function () {
              actuallySetSelected(el, binding, vm);
          }, 0);
      }
  }
  function actuallySetSelected(el, binding, vm) {
      var value = binding.value;
      var isMultiple = el.multiple;
      if (isMultiple && !Array.isArray(value)) {
          warn$2("<select multiple v-model=\"".concat(binding.expression, "\"> ") +
                  "expects an Array value for its binding, but got ".concat(Object.prototype.toString
                      .call(value)
                      .slice(8, -1)), vm);
          return;
      }
      var selected, option;
      for (var i = 0, l = el.options.length; i < l; i++) {
          option = el.options[i];
          if (isMultiple) {
              selected = looseIndexOf(value, getValue(option)) > -1;
              if (option.selected !== selected) {
                  option.selected = selected;
              }
          }
          else {
              if (looseEqual(getValue(option), value)) {
                  if (el.selectedIndex !== i) {
                      el.selectedIndex = i;
                  }
                  return;
              }
          }
      }
      if (!isMultiple) {
          el.selectedIndex = -1;
      }
  }
  function hasNoMatchingOption(value, options) {
      return options.every(function (o) { return !looseEqual(o, value); });
  }
  function getValue(option) {
      return '_value' in option ? option._value : option.value;
  }
  function onCompositionStart(e) {
      e.target.composing = true;
  }
  function onCompositionEnd(e) {
      // prevent triggering an input event for no reason
      if (!e.target.composing)
          return;
      e.target.composing = false;
      trigger(e.target, 'input');
  }
  function trigger(el, type) {
      var e = document.createEvent('HTMLEvents');
      e.initEvent(type, true, true);
      el.dispatchEvent(e);
  }

  // recursively search for possible transition defined inside the component root
  function locateNode(vnode) {
      // @ts-expect-error
      return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
          ? locateNode(vnode.componentInstance._vnode)
          : vnode;
  }
  var show = {
      bind: function (el, _a, vnode) {
          var value = _a.value;
          vnode = locateNode(vnode);
          var transition = vnode.data && vnode.data.transition;
          var originalDisplay = (el.__vOriginalDisplay =
              el.style.display === 'none' ? '' : el.style.display);
          if (value && transition) {
              vnode.data.show = true;
              enter(vnode, function () {
                  el.style.display = originalDisplay;
              });
          }
          else {
              el.style.display = value ? originalDisplay : 'none';
          }
      },
      update: function (el, _a, vnode) {
          var value = _a.value, oldValue = _a.oldValue;
          /* istanbul ignore if */
          if (!value === !oldValue)
              return;
          vnode = locateNode(vnode);
          var transition = vnode.data && vnode.data.transition;
          if (transition) {
              vnode.data.show = true;
              if (value) {
                  enter(vnode, function () {
                      el.style.display = el.__vOriginalDisplay;
                  });
              }
              else {
                  leave(vnode, function () {
                      el.style.display = 'none';
                  });
              }
          }
          else {
              el.style.display = value ? el.__vOriginalDisplay : 'none';
          }
      },
      unbind: function (el, binding, vnode, oldVnode, isDestroy) {
          if (!isDestroy) {
              el.style.display = el.__vOriginalDisplay;
          }
      }
  };

  var platformDirectives = {
      model: directive,
      show: show
  };

  // Provides transition support for a single element/component.
  var transitionProps = {
      name: String,
      appear: Boolean,
      css: Boolean,
      mode: String,
      type: String,
      enterClass: String,
      leaveClass: String,
      enterToClass: String,
      leaveToClass: String,
      enterActiveClass: String,
      leaveActiveClass: String,
      appearClass: String,
      appearActiveClass: String,
      appearToClass: String,
      duration: [Number, String, Object]
  };
  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild(vnode) {
      var compOptions = vnode && vnode.componentOptions;
      if (compOptions && compOptions.Ctor.options.abstract) {
          return getRealChild(getFirstComponentChild(compOptions.children));
      }
      else {
          return vnode;
      }
  }
  function extractTransitionData(comp) {
      var data = {};
      var options = comp.$options;
      // props
      for (var key in options.propsData) {
          data[key] = comp[key];
      }
      // events.
      // extract listeners and pass them directly to the transition methods
      var listeners = options._parentListeners;
      for (var key in listeners) {
          data[camelize(key)] = listeners[key];
      }
      return data;
  }
  function placeholder(h, rawChild) {
      // @ts-expect-error
      if (/\d-keep-alive$/.test(rawChild.tag)) {
          return h('keep-alive', {
              props: rawChild.componentOptions.propsData
          });
      }
  }
  function hasParentTransition(vnode) {
      while ((vnode = vnode.parent)) {
          if (vnode.data.transition) {
              return true;
          }
      }
  }
  function isSameChild(child, oldChild) {
      return oldChild.key === child.key && oldChild.tag === child.tag;
  }
  var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };
  var isVShowDirective = function (d) { return d.name === 'show'; };
  var Transition = {
      name: 'transition',
      props: transitionProps,
      abstract: true,
      render: function (h) {
          var _this = this;
          var children = this.$slots.default;
          if (!children) {
              return;
          }
          // filter out text nodes (possible whitespaces)
          children = children.filter(isNotTextNode);
          /* istanbul ignore if */
          if (!children.length) {
              return;
          }
          // warn multiple elements
          if (children.length > 1) {
              warn$2('<transition> can only be used on a single element. Use ' +
                  '<transition-group> for lists.', this.$parent);
          }
          var mode = this.mode;
          // warn invalid mode
          if (mode && mode !== 'in-out' && mode !== 'out-in') {
              warn$2('invalid <transition> mode: ' + mode, this.$parent);
          }
          var rawChild = children[0];
          // if this is a component root node and the component's
          // parent container node also has transition, skip.
          if (hasParentTransition(this.$vnode)) {
              return rawChild;
          }
          // apply transition data to child
          // use getRealChild() to ignore abstract components e.g. keep-alive
          var child = getRealChild(rawChild);
          /* istanbul ignore if */
          if (!child) {
              return rawChild;
          }
          if (this._leaving) {
              return placeholder(h, rawChild);
          }
          // ensure a key that is unique to the vnode type and to this transition
          // component instance. This key will be used to remove pending leaving nodes
          // during entering.
          var id = "__transition-".concat(this._uid, "-");
          child.key =
              child.key == null
                  ? child.isComment
                      ? id + 'comment'
                      : id + child.tag
                  : isPrimitive(child.key)
                      ? String(child.key).indexOf(id) === 0
                          ? child.key
                          : id + child.key
                      : child.key;
          var data = ((child.data || (child.data = {})).transition =
              extractTransitionData(this));
          var oldRawChild = this._vnode;
          var oldChild = getRealChild(oldRawChild);
          // mark v-show
          // so that the transition module can hand over the control to the directive
          if (child.data.directives && child.data.directives.some(isVShowDirective)) {
              child.data.show = true;
          }
          if (oldChild &&
              oldChild.data &&
              !isSameChild(child, oldChild) &&
              !isAsyncPlaceholder(oldChild) &&
              // #6687 component root is a comment node
              !(oldChild.componentInstance &&
                  oldChild.componentInstance._vnode.isComment)) {
              // replace old child transition data with fresh one
              // important for dynamic transitions!
              var oldData = (oldChild.data.transition = extend({}, data));
              // handle transition mode
              if (mode === 'out-in') {
                  // return placeholder node and queue update when leave finishes
                  this._leaving = true;
                  mergeVNodeHook(oldData, 'afterLeave', function () {
                      _this._leaving = false;
                      _this.$forceUpdate();
                  });
                  return placeholder(h, rawChild);
              }
              else if (mode === 'in-out') {
                  if (isAsyncPlaceholder(child)) {
                      return oldRawChild;
                  }
                  var delayedLeave_1;
                  var performLeave = function () {
                      delayedLeave_1();
                  };
                  mergeVNodeHook(data, 'afterEnter', performLeave);
                  mergeVNodeHook(data, 'enterCancelled', performLeave);
                  mergeVNodeHook(oldData, 'delayLeave', function (leave) {
                      delayedLeave_1 = leave;
                  });
              }
          }
          return rawChild;
      }
  };

  // Provides transition support for list items.
  var props = extend({
      tag: String,
      moveClass: String
  }, transitionProps);
  delete props.mode;
  var TransitionGroup = {
      props: props,
      beforeMount: function () {
          var _this = this;
          var update = this._update;
          this._update = function (vnode, hydrating) {
              var restoreActiveInstance = setActiveInstance(_this);
              // force removing pass
              _this.__patch__(_this._vnode, _this.kept, false, // hydrating
              true // removeOnly (!important, avoids unnecessary moves)
              );
              _this._vnode = _this.kept;
              restoreActiveInstance();
              update.call(_this, vnode, hydrating);
          };
      },
      render: function (h) {
          var tag = this.tag || this.$vnode.data.tag || 'span';
          var map = Object.create(null);
          var prevChildren = (this.prevChildren = this.children);
          var rawChildren = this.$slots.default || [];
          var children = (this.children = []);
          var transitionData = extractTransitionData(this);
          for (var i = 0; i < rawChildren.length; i++) {
              var c = rawChildren[i];
              if (c.tag) {
                  if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
                      children.push(c);
                      map[c.key] = c;
                      (c.data || (c.data = {})).transition = transitionData;
                  }
                  else {
                      var opts = c.componentOptions;
                      var name_1 = opts
                          ? getComponentName(opts.Ctor.options) || opts.tag || ''
                          : c.tag;
                      warn$2("<transition-group> children must be keyed: <".concat(name_1, ">"));
                  }
              }
          }
          if (prevChildren) {
              var kept = [];
              var removed = [];
              for (var i = 0; i < prevChildren.length; i++) {
                  var c = prevChildren[i];
                  c.data.transition = transitionData;
                  // @ts-expect-error .getBoundingClientRect is not typed in Node
                  c.data.pos = c.elm.getBoundingClientRect();
                  if (map[c.key]) {
                      kept.push(c);
                  }
                  else {
                      removed.push(c);
                  }
              }
              this.kept = h(tag, null, kept);
              this.removed = removed;
          }
          return h(tag, null, children);
      },
      updated: function () {
          var children = this.prevChildren;
          var moveClass = this.moveClass || (this.name || 'v') + '-move';
          if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
              return;
          }
          // we divide the work into three loops to avoid mixing DOM reads and writes
          // in each iteration - which helps prevent layout thrashing.
          children.forEach(callPendingCbs);
          children.forEach(recordPosition);
          children.forEach(applyTranslation);
          // force reflow to put everything in position
          // assign to this to avoid being removed in tree-shaking
          // $flow-disable-line
          this._reflow = document.body.offsetHeight;
          children.forEach(function (c) {
              if (c.data.moved) {
                  var el_1 = c.elm;
                  var s = el_1.style;
                  addTransitionClass(el_1, moveClass);
                  s.transform = s.WebkitTransform = s.transitionDuration = '';
                  el_1.addEventListener(transitionEndEvent, (el_1._moveCb = function cb(e) {
                      if (e && e.target !== el_1) {
                          return;
                      }
                      if (!e || /transform$/.test(e.propertyName)) {
                          el_1.removeEventListener(transitionEndEvent, cb);
                          el_1._moveCb = null;
                          removeTransitionClass(el_1, moveClass);
                      }
                  }));
              }
          });
      },
      methods: {
          hasMove: function (el, moveClass) {
              /* istanbul ignore if */
              if (!hasTransition) {
                  return false;
              }
              /* istanbul ignore if */
              if (this._hasMove) {
                  return this._hasMove;
              }
              // Detect whether an element with the move class applied has
              // CSS transitions. Since the element may be inside an entering
              // transition at this very moment, we make a clone of it and remove
              // all other transition classes applied to ensure only the move class
              // is applied.
              var clone = el.cloneNode();
              if (el._transitionClasses) {
                  el._transitionClasses.forEach(function (cls) {
                      removeClass(clone, cls);
                  });
              }
              addClass(clone, moveClass);
              clone.style.display = 'none';
              this.$el.appendChild(clone);
              var info = getTransitionInfo(clone);
              this.$el.removeChild(clone);
              return (this._hasMove = info.hasTransform);
          }
      }
  };
  function callPendingCbs(c) {
      /* istanbul ignore if */
      if (c.elm._moveCb) {
          c.elm._moveCb();
      }
      /* istanbul ignore if */
      if (c.elm._enterCb) {
          c.elm._enterCb();
      }
  }
  function recordPosition(c) {
      c.data.newPos = c.elm.getBoundingClientRect();
  }
  function applyTranslation(c) {
      var oldPos = c.data.pos;
      var newPos = c.data.newPos;
      var dx = oldPos.left - newPos.left;
      var dy = oldPos.top - newPos.top;
      if (dx || dy) {
          c.data.moved = true;
          var s = c.elm.style;
          s.transform = s.WebkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
          s.transitionDuration = '0s';
      }
  }

  var platformComponents = {
      Transition: Transition,
      TransitionGroup: TransitionGroup
  };

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;
  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);
  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;
  // public mount method
  Vue.prototype.$mount = function (el, hydrating) {
      el = el && inBrowser ? query(el) : undefined;
      return mountComponent(this, el, hydrating);
  };
  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
      setTimeout(function () {
          if (config.devtools) {
              if (devtools) {
                  devtools.emit('init', Vue);
              }
              else {
                  // @ts-expect-error
                  console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' +
                      'https://github.com/vuejs/vue-devtools');
              }
          }
          if (config.productionTip !== false &&
              typeof console !== 'undefined') {
              // @ts-expect-error
              console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" +
                  "Make sure to turn on production mode when deploying for production.\n" +
                  "See more tips at https://vuejs.org/guide/deployment.html");
          }
      }, 0);
  }

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
  var buildRegex = cached(function (delimiters) {
      var open = delimiters[0].replace(regexEscapeRE, '\\$&');
      var close = delimiters[1].replace(regexEscapeRE, '\\$&');
      return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
  });
  function parseText(text, delimiters) {
      //@ts-expect-error
      var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
      if (!tagRE.test(text)) {
          return;
      }
      var tokens = [];
      var rawTokens = [];
      var lastIndex = (tagRE.lastIndex = 0);
      var match, index, tokenValue;
      while ((match = tagRE.exec(text))) {
          index = match.index;
          // push text token
          if (index > lastIndex) {
              rawTokens.push((tokenValue = text.slice(lastIndex, index)));
              tokens.push(JSON.stringify(tokenValue));
          }
          // tag token
          var exp = parseFilters(match[1].trim());
          tokens.push("_s(".concat(exp, ")"));
          rawTokens.push({ '@binding': exp });
          lastIndex = index + match[0].length;
      }
      if (lastIndex < text.length) {
          rawTokens.push((tokenValue = text.slice(lastIndex)));
          tokens.push(JSON.stringify(tokenValue));
      }
      return {
          expression: tokens.join('+'),
          tokens: rawTokens
      };
  }

  function transformNode$1(el, options) {
      var warn = options.warn || baseWarn;
      var staticClass = getAndRemoveAttr(el, 'class');
      if (staticClass) {
          var res = parseText(staticClass, options.delimiters);
          if (res) {
              warn("class=\"".concat(staticClass, "\": ") +
                  'Interpolation inside attributes has been removed. ' +
                  'Use v-bind or the colon shorthand instead. For example, ' +
                  'instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap['class']);
          }
      }
      if (staticClass) {
          el.staticClass = JSON.stringify(staticClass.replace(/\s+/g, ' ').trim());
      }
      var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
      if (classBinding) {
          el.classBinding = classBinding;
      }
  }
  function genData$2(el) {
      var data = '';
      if (el.staticClass) {
          data += "staticClass:".concat(el.staticClass, ",");
      }
      if (el.classBinding) {
          data += "class:".concat(el.classBinding, ",");
      }
      return data;
  }
  var klass = {
      staticKeys: ['staticClass'],
      transformNode: transformNode$1,
      genData: genData$2
  };

  function transformNode(el, options) {
      var warn = options.warn || baseWarn;
      var staticStyle = getAndRemoveAttr(el, 'style');
      if (staticStyle) {
          /* istanbul ignore if */
          {
              var res = parseText(staticStyle, options.delimiters);
              if (res) {
                  warn("style=\"".concat(staticStyle, "\": ") +
                      'Interpolation inside attributes has been removed. ' +
                      'Use v-bind or the colon shorthand instead. For example, ' +
                      'instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap['style']);
              }
          }
          el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
      }
      var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
      if (styleBinding) {
          el.styleBinding = styleBinding;
      }
  }
  function genData$1(el) {
      var data = '';
      if (el.staticStyle) {
          data += "staticStyle:".concat(el.staticStyle, ",");
      }
      if (el.styleBinding) {
          data += "style:(".concat(el.styleBinding, "),");
      }
      return data;
  }
  var style = {
      staticKeys: ['staticStyle'],
      transformNode: transformNode,
      genData: genData$1
  };

  var decoder;
  var he = {
      decode: function (html) {
          decoder = decoder || document.createElement('div');
          decoder.innerHTML = html;
          return decoder.textContent;
      }
  };

  var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
      'link,meta,param,source,track,wbr');
  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');
  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
      'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
      'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
      'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
      'title,tr,track');

  /**
   * Not type-checking this file because it's mostly vendor code.
   */
  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z".concat(unicodeRegExp.source, "]*");
  var qnameCapture = "((?:".concat(ncname, "\\:)?").concat(ncname, ")");
  var startTagOpen = new RegExp("^<".concat(qnameCapture));
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp("^<\\/".concat(qnameCapture, "[^>]*>"));
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being passed as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;
  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};
  var decodingMap = {
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&amp;': '&',
      '&#10;': '\n',
      '&#9;': '\t',
      '&#39;': "'"
  };
  var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;
  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function (tag, html) {
      return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
  };
  function decodeAttr(value, shouldDecodeNewlines) {
      var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
      return value.replace(re, function (match) { return decodingMap[match]; });
  }
  function parseHTML(html, options) {
      var stack = [];
      var expectHTML = options.expectHTML;
      var isUnaryTag = options.isUnaryTag || no;
      var canBeLeftOpenTag = options.canBeLeftOpenTag || no;
      var index = 0;
      var last, lastTag;
      var _loop_1 = function () {
          last = html;
          // Make sure we're not in a plaintext content element like script/style
          if (!lastTag || !isPlainTextElement(lastTag)) {
              var textEnd = html.indexOf('<');
              if (textEnd === 0) {
                  // Comment:
                  if (comment.test(html)) {
                      var commentEnd = html.indexOf('-->');
                      if (commentEnd >= 0) {
                          if (options.shouldKeepComment && options.comment) {
                              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
                          }
                          advance(commentEnd + 3);
                          return "continue";
                      }
                  }
                  // https://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
                  if (conditionalComment.test(html)) {
                      var conditionalEnd = html.indexOf(']>');
                      if (conditionalEnd >= 0) {
                          advance(conditionalEnd + 2);
                          return "continue";
                      }
                  }
                  // Doctype:
                  var doctypeMatch = html.match(doctype);
                  if (doctypeMatch) {
                      advance(doctypeMatch[0].length);
                      return "continue";
                  }
                  // End tag:
                  var endTagMatch = html.match(endTag);
                  if (endTagMatch) {
                      var curIndex = index;
                      advance(endTagMatch[0].length);
                      parseEndTag(endTagMatch[1], curIndex, index);
                      return "continue";
                  }
                  // Start tag:
                  var startTagMatch = parseStartTag();
                  if (startTagMatch) {
                      handleStartTag(startTagMatch);
                      if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
                          advance(1);
                      }
                      return "continue";
                  }
              }
              var text = void 0, rest = void 0, next = void 0;
              if (textEnd >= 0) {
                  rest = html.slice(textEnd);
                  while (!endTag.test(rest) &&
                      !startTagOpen.test(rest) &&
                      !comment.test(rest) &&
                      !conditionalComment.test(rest)) {
                      // < in plain text, be forgiving and treat it as text
                      next = rest.indexOf('<', 1);
                      if (next < 0)
                          break;
                      textEnd += next;
                      rest = html.slice(textEnd);
                  }
                  text = html.substring(0, textEnd);
              }
              if (textEnd < 0) {
                  text = html;
              }
              if (text) {
                  advance(text.length);
              }
              if (options.chars && text) {
                  options.chars(text, index - text.length, index);
              }
          }
          else {
              var endTagLength_1 = 0;
              var stackedTag_1 = lastTag.toLowerCase();
              var reStackedTag = reCache[stackedTag_1] ||
                  (reCache[stackedTag_1] = new RegExp('([\\s\\S]*?)(</' + stackedTag_1 + '[^>]*>)', 'i'));
              var rest = html.replace(reStackedTag, function (all, text, endTag) {
                  endTagLength_1 = endTag.length;
                  if (!isPlainTextElement(stackedTag_1) && stackedTag_1 !== 'noscript') {
                      text = text
                          .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
                          .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
                  }
                  if (shouldIgnoreFirstNewline(stackedTag_1, text)) {
                      text = text.slice(1);
                  }
                  if (options.chars) {
                      options.chars(text);
                  }
                  return '';
              });
              index += html.length - rest.length;
              html = rest;
              parseEndTag(stackedTag_1, index - endTagLength_1, index);
          }
          if (html === last) {
              options.chars && options.chars(html);
              if (!stack.length && options.warn) {
                  options.warn("Mal-formatted tag at end of template: \"".concat(html, "\""), {
                      start: index + html.length
                  });
              }
              return "break";
          }
      };
      while (html) {
          var state_1 = _loop_1();
          if (state_1 === "break")
              break;
      }
      // Clean up any remaining tags
      parseEndTag();
      function advance(n) {
          index += n;
          html = html.substring(n);
      }
      function parseStartTag() {
          var start = html.match(startTagOpen);
          if (start) {
              var match = {
                  tagName: start[1],
                  attrs: [],
                  start: index
              };
              advance(start[0].length);
              var end = void 0, attr = void 0;
              while (!(end = html.match(startTagClose)) &&
                  (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
                  attr.start = index;
                  advance(attr[0].length);
                  attr.end = index;
                  match.attrs.push(attr);
              }
              if (end) {
                  match.unarySlash = end[1];
                  advance(end[0].length);
                  match.end = index;
                  return match;
              }
          }
      }
      function handleStartTag(match) {
          var tagName = match.tagName;
          var unarySlash = match.unarySlash;
          if (expectHTML) {
              if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
                  parseEndTag(lastTag);
              }
              if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
                  parseEndTag(tagName);
              }
          }
          var unary = isUnaryTag(tagName) || !!unarySlash;
          var l = match.attrs.length;
          var attrs = new Array(l);
          for (var i = 0; i < l; i++) {
              var args = match.attrs[i];
              var value = args[3] || args[4] || args[5] || '';
              var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
                  ? options.shouldDecodeNewlinesForHref
                  : options.shouldDecodeNewlines;
              attrs[i] = {
                  name: args[1],
                  value: decodeAttr(value, shouldDecodeNewlines)
              };
              if (options.outputSourceRange) {
                  attrs[i].start = args.start + args[0].match(/^\s*/).length;
                  attrs[i].end = args.end;
              }
          }
          if (!unary) {
              stack.push({
                  tag: tagName,
                  lowerCasedTag: tagName.toLowerCase(),
                  attrs: attrs,
                  start: match.start,
                  end: match.end
              });
              lastTag = tagName;
          }
          if (options.start) {
              options.start(tagName, attrs, unary, match.start, match.end);
          }
      }
      function parseEndTag(tagName, start, end) {
          var pos, lowerCasedTagName;
          if (start == null)
              start = index;
          if (end == null)
              end = index;
          // Find the closest opened tag of the same type
          if (tagName) {
              lowerCasedTagName = tagName.toLowerCase();
              for (pos = stack.length - 1; pos >= 0; pos--) {
                  if (stack[pos].lowerCasedTag === lowerCasedTagName) {
                      break;
                  }
              }
          }
          else {
              // If no tag name is provided, clean shop
              pos = 0;
          }
          if (pos >= 0) {
              // Close all the open elements, up the stack
              for (var i = stack.length - 1; i >= pos; i--) {
                  if ((i > pos || !tagName) && options.warn) {
                      options.warn("tag <".concat(stack[i].tag, "> has no matching end tag."), {
                          start: stack[i].start,
                          end: stack[i].end
                      });
                  }
                  if (options.end) {
                      options.end(stack[i].tag, start, end);
                  }
              }
              // Remove the open elements from the stack
              stack.length = pos;
              lastTag = pos && stack[pos - 1].tag;
          }
          else if (lowerCasedTagName === 'br') {
              if (options.start) {
                  options.start(tagName, [], true, start, end);
              }
          }
          else if (lowerCasedTagName === 'p') {
              if (options.start) {
                  options.start(tagName, [], false, start, end);
              }
              if (options.end) {
                  options.end(tagName, start, end);
              }
          }
      }
  }

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:|^#/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var dynamicArgRE = /^\[.*\]$/;
  var argRE = /:(.*)$/;
  var bindRE = /^:|^\.|^v-bind:/;
  var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
  var slotRE = /^v-slot(:|$)|^#/;
  var lineBreakRE = /[\r\n]/;
  var whitespaceRE = /[ \f\t\r\n]+/g;
  var invalidAttributeRE = /[\s"'<>\/=]/;
  var decodeHTMLCached = cached(he.decode);
  var emptySlotScopeToken = "_empty_";
  // configurable state
  var warn;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;
  var maybeComponent;
  function createASTElement(tag, attrs, parent) {
      return {
          type: 1,
          tag: tag,
          attrsList: attrs,
          attrsMap: makeAttrsMap(attrs),
          rawAttrsMap: {},
          parent: parent,
          children: []
      };
  }
  /**
   * Convert HTML string to AST.
   */
  function parse(template, options) {
      warn = options.warn || baseWarn;
      platformIsPreTag = options.isPreTag || no;
      platformMustUseProp = options.mustUseProp || no;
      platformGetTagNamespace = options.getTagNamespace || no;
      var isReservedTag = options.isReservedTag || no;
      maybeComponent = function (el) {
          return !!(el.component ||
              el.attrsMap[':is'] ||
              el.attrsMap['v-bind:is'] ||
              !(el.attrsMap.is ? isReservedTag(el.attrsMap.is) : isReservedTag(el.tag)));
      };
      transforms = pluckModuleFunction(options.modules, 'transformNode');
      preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
      postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
      delimiters = options.delimiters;
      var stack = [];
      var preserveWhitespace = options.preserveWhitespace !== false;
      var whitespaceOption = options.whitespace;
      var root;
      var currentParent;
      var inVPre = false;
      var inPre = false;
      var warned = false;
      function warnOnce(msg, range) {
          if (!warned) {
              warned = true;
              warn(msg, range);
          }
      }
      function closeElement(element) {
          trimEndingWhitespace(element);
          if (!inVPre && !element.processed) {
              element = processElement(element, options);
          }
          // tree management
          if (!stack.length && element !== root) {
              // allow root elements with v-if, v-else-if and v-else
              if (root.if && (element.elseif || element.else)) {
                  {
                      checkRootConstraints(element);
                  }
                  addIfCondition(root, {
                      exp: element.elseif,
                      block: element
                  });
              }
              else {
                  warnOnce("Component template should contain exactly one root element. " +
                      "If you are using v-if on multiple elements, " +
                      "use v-else-if to chain them instead.", { start: element.start });
              }
          }
          if (currentParent && !element.forbidden) {
              if (element.elseif || element.else) {
                  processIfConditions(element, currentParent);
              }
              else {
                  if (element.slotScope) {
                      // scoped slot
                      // keep it in the children list so that v-else(-if) conditions can
                      // find it as the prev node.
                      var name_1 = element.slotTarget || '"default"';
                      (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name_1] = element;
                  }
                  currentParent.children.push(element);
                  element.parent = currentParent;
              }
          }
          // final children cleanup
          // filter out scoped slots
          element.children = element.children.filter(function (c) { return !c.slotScope; });
          // remove trailing whitespace node again
          trimEndingWhitespace(element);
          // check pre state
          if (element.pre) {
              inVPre = false;
          }
          if (platformIsPreTag(element.tag)) {
              inPre = false;
          }
          // apply post-transforms
          for (var i = 0; i < postTransforms.length; i++) {
              postTransforms[i](element, options);
          }
      }
      function trimEndingWhitespace(el) {
          // remove trailing whitespace node
          if (!inPre) {
              var lastNode = void 0;
              while ((lastNode = el.children[el.children.length - 1]) &&
                  lastNode.type === 3 &&
                  lastNode.text === ' ') {
                  el.children.pop();
              }
          }
      }
      function checkRootConstraints(el) {
          if (el.tag === 'slot' || el.tag === 'template') {
              warnOnce("Cannot use <".concat(el.tag, "> as component root element because it may ") +
                  'contain multiple nodes.', { start: el.start });
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
              warnOnce('Cannot use v-for on stateful component root element because ' +
                  'it renders multiple elements.', el.rawAttrsMap['v-for']);
          }
      }
      parseHTML(template, {
          warn: warn,
          expectHTML: options.expectHTML,
          isUnaryTag: options.isUnaryTag,
          canBeLeftOpenTag: options.canBeLeftOpenTag,
          shouldDecodeNewlines: options.shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
          shouldKeepComment: options.comments,
          outputSourceRange: options.outputSourceRange,
          start: function (tag, attrs, unary, start, end) {
              // check namespace.
              // inherit parent ns if there is one
              var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);
              // handle IE svg bug
              /* istanbul ignore if */
              if (isIE && ns === 'svg') {
                  attrs = guardIESVGBug(attrs);
              }
              var element = createASTElement(tag, attrs, currentParent);
              if (ns) {
                  element.ns = ns;
              }
              {
                  if (options.outputSourceRange) {
                      element.start = start;
                      element.end = end;
                      element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
                          cumulated[attr.name] = attr;
                          return cumulated;
                      }, {});
                  }
                  attrs.forEach(function (attr) {
                      if (invalidAttributeRE.test(attr.name)) {
                          warn("Invalid dynamic argument expression: attribute names cannot contain " +
                              "spaces, quotes, <, >, / or =.", options.outputSourceRange
                              ? {
                                  start: attr.start + attr.name.indexOf("["),
                                  end: attr.start + attr.name.length
                              }
                              : undefined);
                      }
                  });
              }
              if (isForbiddenTag(element) && !isServerRendering()) {
                  element.forbidden = true;
                  warn('Templates should only be responsible for mapping the state to the ' +
                          'UI. Avoid placing tags with side-effects in your templates, such as ' +
                          "<".concat(tag, ">") +
                          ', as they will not be parsed.', { start: element.start });
              }
              // apply pre-transforms
              for (var i = 0; i < preTransforms.length; i++) {
                  element = preTransforms[i](element, options) || element;
              }
              if (!inVPre) {
                  processPre(element);
                  if (element.pre) {
                      inVPre = true;
                  }
              }
              if (platformIsPreTag(element.tag)) {
                  inPre = true;
              }
              if (inVPre) {
                  processRawAttrs(element);
              }
              else if (!element.processed) {
                  // structural directives
                  processFor(element);
                  processIf(element);
                  processOnce(element);
              }
              if (!root) {
                  root = element;
                  {
                      checkRootConstraints(root);
                  }
              }
              if (!unary) {
                  currentParent = element;
                  stack.push(element);
              }
              else {
                  closeElement(element);
              }
          },
          end: function (tag, start, end) {
              var element = stack[stack.length - 1];
              // pop stack
              stack.length -= 1;
              currentParent = stack[stack.length - 1];
              if (options.outputSourceRange) {
                  element.end = end;
              }
              closeElement(element);
          },
          chars: function (text, start, end) {
              if (!currentParent) {
                  {
                      if (text === template) {
                          warnOnce('Component template requires a root element, rather than just text.', { start: start });
                      }
                      else if ((text = text.trim())) {
                          warnOnce("text \"".concat(text, "\" outside root element will be ignored."), {
                              start: start
                          });
                      }
                  }
                  return;
              }
              // IE textarea placeholder bug
              /* istanbul ignore if */
              if (isIE &&
                  currentParent.tag === 'textarea' &&
                  currentParent.attrsMap.placeholder === text) {
                  return;
              }
              var children = currentParent.children;
              if (inPre || text.trim()) {
                  text = isTextTag(currentParent)
                      ? text
                      : decodeHTMLCached(text);
              }
              else if (!children.length) {
                  // remove the whitespace-only node right after an opening tag
                  text = '';
              }
              else if (whitespaceOption) {
                  if (whitespaceOption === 'condense') {
                      // in condense mode, remove the whitespace node if it contains
                      // line break, otherwise condense to a single space
                      text = lineBreakRE.test(text) ? '' : ' ';
                  }
                  else {
                      text = ' ';
                  }
              }
              else {
                  text = preserveWhitespace ? ' ' : '';
              }
              if (text) {
                  if (!inPre && whitespaceOption === 'condense') {
                      // condense consecutive whitespaces into single space
                      text = text.replace(whitespaceRE, ' ');
                  }
                  var res = void 0;
                  var child = void 0;
                  if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
                      child = {
                          type: 2,
                          expression: res.expression,
                          tokens: res.tokens,
                          text: text
                      };
                  }
                  else if (text !== ' ' ||
                      !children.length ||
                      children[children.length - 1].text !== ' ') {
                      child = {
                          type: 3,
                          text: text
                      };
                  }
                  if (child) {
                      if (options.outputSourceRange) {
                          child.start = start;
                          child.end = end;
                      }
                      children.push(child);
                  }
              }
          },
          comment: function (text, start, end) {
              // adding anything as a sibling to the root node is forbidden
              // comments should still be allowed, but ignored
              if (currentParent) {
                  var child = {
                      type: 3,
                      text: text,
                      isComment: true
                  };
                  if (options.outputSourceRange) {
                      child.start = start;
                      child.end = end;
                  }
                  currentParent.children.push(child);
              }
          }
      });
      return root;
  }
  function processPre(el) {
      if (getAndRemoveAttr(el, 'v-pre') != null) {
          el.pre = true;
      }
  }
  function processRawAttrs(el) {
      var list = el.attrsList;
      var len = list.length;
      if (len) {
          var attrs = (el.attrs = new Array(len));
          for (var i = 0; i < len; i++) {
              attrs[i] = {
                  name: list[i].name,
                  value: JSON.stringify(list[i].value)
              };
              if (list[i].start != null) {
                  attrs[i].start = list[i].start;
                  attrs[i].end = list[i].end;
              }
          }
      }
      else if (!el.pre) {
          // non root node in pre blocks with no attributes
          el.plain = true;
      }
  }
  function processElement(element, options) {
      processKey(element);
      // determine whether this is a plain element after
      // removing structural attributes
      element.plain =
          !element.key && !element.scopedSlots && !element.attrsList.length;
      processRef(element);
      processSlotContent(element);
      processSlotOutlet(element);
      processComponent(element);
      for (var i = 0; i < transforms.length; i++) {
          element = transforms[i](element, options) || element;
      }
      processAttrs(element);
      return element;
  }
  function processKey(el) {
      var exp = getBindingAttr(el, 'key');
      if (exp) {
          {
              if (el.tag === 'template') {
                  warn("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, 'key'));
              }
              if (el.for) {
                  var iterator = el.iterator2 || el.iterator1;
                  var parent_1 = el.parent;
                  if (iterator &&
                      iterator === exp &&
                      parent_1 &&
                      parent_1.tag === 'transition-group') {
                      warn("Do not use v-for index as key on <transition-group> children, " +
                          "this is the same as not using keys.", getRawBindingAttr(el, 'key'), true /* tip */);
                  }
              }
          }
          el.key = exp;
      }
  }
  function processRef(el) {
      var ref = getBindingAttr(el, 'ref');
      if (ref) {
          el.ref = ref;
          el.refInFor = checkInFor(el);
      }
  }
  function processFor(el) {
      var exp;
      if ((exp = getAndRemoveAttr(el, 'v-for'))) {
          var res = parseFor(exp);
          if (res) {
              extend(el, res);
          }
          else {
              warn("Invalid v-for expression: ".concat(exp), el.rawAttrsMap['v-for']);
          }
      }
  }
  function parseFor(exp) {
      var inMatch = exp.match(forAliasRE);
      if (!inMatch)
          return;
      var res = {};
      res.for = inMatch[2].trim();
      var alias = inMatch[1].trim().replace(stripParensRE, '');
      var iteratorMatch = alias.match(forIteratorRE);
      if (iteratorMatch) {
          res.alias = alias.replace(forIteratorRE, '').trim();
          res.iterator1 = iteratorMatch[1].trim();
          if (iteratorMatch[2]) {
              res.iterator2 = iteratorMatch[2].trim();
          }
      }
      else {
          res.alias = alias;
      }
      return res;
  }
  function processIf(el) {
      var exp = getAndRemoveAttr(el, 'v-if');
      if (exp) {
          el.if = exp;
          addIfCondition(el, {
              exp: exp,
              block: el
          });
      }
      else {
          if (getAndRemoveAttr(el, 'v-else') != null) {
              el.else = true;
          }
          var elseif = getAndRemoveAttr(el, 'v-else-if');
          if (elseif) {
              el.elseif = elseif;
          }
      }
  }
  function processIfConditions(el, parent) {
      var prev = findPrevElement(parent.children);
      if (prev && prev.if) {
          addIfCondition(prev, {
              exp: el.elseif,
              block: el
          });
      }
      else {
          warn("v-".concat(el.elseif ? 'else-if="' + el.elseif + '"' : 'else', " ") +
              "used on element <".concat(el.tag, "> without corresponding v-if."), el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']);
      }
  }
  function findPrevElement(children) {
      var i = children.length;
      while (i--) {
          if (children[i].type === 1) {
              return children[i];
          }
          else {
              if (children[i].text !== ' ') {
                  warn("text \"".concat(children[i].text.trim(), "\" between v-if and v-else(-if) ") +
                      "will be ignored.", children[i]);
              }
              children.pop();
          }
      }
  }
  function addIfCondition(el, condition) {
      if (!el.ifConditions) {
          el.ifConditions = [];
      }
      el.ifConditions.push(condition);
  }
  function processOnce(el) {
      var once = getAndRemoveAttr(el, 'v-once');
      if (once != null) {
          el.once = true;
      }
  }
  // handle content being passed to a component as slot,
  // e.g. <template slot="xxx">, <div slot-scope="xxx">
  function processSlotContent(el) {
      var slotScope;
      if (el.tag === 'template') {
          slotScope = getAndRemoveAttr(el, 'scope');
          /* istanbul ignore if */
          if (slotScope) {
              warn("the \"scope\" attribute for scoped slots have been deprecated and " +
                  "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
                  "can also be used on plain elements in addition to <template> to " +
                  "denote scoped slots.", el.rawAttrsMap['scope'], true);
          }
          el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
      }
      else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
          /* istanbul ignore if */
          if (el.attrsMap['v-for']) {
              warn("Ambiguous combined usage of slot-scope and v-for on <".concat(el.tag, "> ") +
                  "(v-for takes higher priority). Use a wrapper <template> for the " +
                  "scoped slot to make it clearer.", el.rawAttrsMap['slot-scope'], true);
          }
          el.slotScope = slotScope;
      }
      // slot="xxx"
      var slotTarget = getBindingAttr(el, 'slot');
      if (slotTarget) {
          el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
          el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
          // preserve slot as an attribute for native shadow DOM compat
          // only for non-scoped slots.
          if (el.tag !== 'template' && !el.slotScope) {
              addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
          }
      }
      // 2.6 v-slot syntax
      {
          if (el.tag === 'template') {
              // v-slot on <template>
              var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
              if (slotBinding) {
                  {
                      if (el.slotTarget || el.slotScope) {
                          warn("Unexpected mixed usage of different slot syntaxes.", el);
                      }
                      if (el.parent && !maybeComponent(el.parent)) {
                          warn("<template v-slot> can only appear at the root level inside " +
                              "the receiving component", el);
                      }
                  }
                  var _a = getSlotName(slotBinding), name_2 = _a.name, dynamic = _a.dynamic;
                  el.slotTarget = name_2;
                  el.slotTargetDynamic = dynamic;
                  el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
              }
          }
          else {
              // v-slot on component, denotes default slot
              var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
              if (slotBinding) {
                  {
                      if (!maybeComponent(el)) {
                          warn("v-slot can only be used on components or <template>.", slotBinding);
                      }
                      if (el.slotScope || el.slotTarget) {
                          warn("Unexpected mixed usage of different slot syntaxes.", el);
                      }
                      if (el.scopedSlots) {
                          warn("To avoid scope ambiguity, the default slot should also use " +
                              "<template> syntax when there are other named slots.", slotBinding);
                      }
                  }
                  // add the component's children to its default slot
                  var slots = el.scopedSlots || (el.scopedSlots = {});
                  var _b = getSlotName(slotBinding), name_3 = _b.name, dynamic = _b.dynamic;
                  var slotContainer_1 = (slots[name_3] = createASTElement('template', [], el));
                  slotContainer_1.slotTarget = name_3;
                  slotContainer_1.slotTargetDynamic = dynamic;
                  slotContainer_1.children = el.children.filter(function (c) {
                      if (!c.slotScope) {
                          c.parent = slotContainer_1;
                          return true;
                      }
                  });
                  slotContainer_1.slotScope = slotBinding.value || emptySlotScopeToken;
                  // remove children as they are returned from scopedSlots now
                  el.children = [];
                  // mark el non-plain so data gets generated
                  el.plain = false;
              }
          }
      }
  }
  function getSlotName(binding) {
      var name = binding.name.replace(slotRE, '');
      if (!name) {
          if (binding.name[0] !== '#') {
              name = 'default';
          }
          else {
              warn("v-slot shorthand syntax requires a slot name.", binding);
          }
      }
      return dynamicArgRE.test(name)
          ? // dynamic [name]
              { name: name.slice(1, -1), dynamic: true }
          : // static name
              { name: "\"".concat(name, "\""), dynamic: false };
  }
  // handle <slot/> outlets
  function processSlotOutlet(el) {
      if (el.tag === 'slot') {
          el.slotName = getBindingAttr(el, 'name');
          if (el.key) {
              warn("`key` does not work on <slot> because slots are abstract outlets " +
                  "and can possibly expand into multiple elements. " +
                  "Use the key on a wrapping element instead.", getRawBindingAttr(el, 'key'));
          }
      }
  }
  function processComponent(el) {
      var binding;
      if ((binding = getBindingAttr(el, 'is'))) {
          el.component = binding;
      }
      if (getAndRemoveAttr(el, 'inline-template') != null) {
          el.inlineTemplate = true;
      }
  }
  function processAttrs(el) {
      var list = el.attrsList;
      var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
      for (i = 0, l = list.length; i < l; i++) {
          name = rawName = list[i].name;
          value = list[i].value;
          if (dirRE.test(name)) {
              // mark element as dynamic
              el.hasBindings = true;
              // modifiers
              modifiers = parseModifiers(name.replace(dirRE, ''));
              // support .foo shorthand syntax for the .prop modifier
              if (modifiers) {
                  name = name.replace(modifierRE, '');
              }
              if (bindRE.test(name)) {
                  // v-bind
                  name = name.replace(bindRE, '');
                  value = parseFilters(value);
                  isDynamic = dynamicArgRE.test(name);
                  if (isDynamic) {
                      name = name.slice(1, -1);
                  }
                  if (value.trim().length === 0) {
                      warn("The value for a v-bind expression cannot be empty. Found in \"v-bind:".concat(name, "\""));
                  }
                  if (modifiers) {
                      if (modifiers.prop && !isDynamic) {
                          name = camelize(name);
                          if (name === 'innerHtml')
                              name = 'innerHTML';
                      }
                      if (modifiers.camel && !isDynamic) {
                          name = camelize(name);
                      }
                      if (modifiers.sync) {
                          syncGen = genAssignmentCode(value, "$event");
                          if (!isDynamic) {
                              addHandler(el, "update:".concat(camelize(name)), syncGen, null, false, warn, list[i]);
                              if (hyphenate(name) !== camelize(name)) {
                                  addHandler(el, "update:".concat(hyphenate(name)), syncGen, null, false, warn, list[i]);
                              }
                          }
                          else {
                              // handler w/ dynamic event name
                              addHandler(el, "\"update:\"+(".concat(name, ")"), syncGen, null, false, warn, list[i], true // dynamic
                              );
                          }
                      }
                  }
                  if ((modifiers && modifiers.prop) ||
                      (!el.component && platformMustUseProp(el.tag, el.attrsMap.type, name))) {
                      addProp(el, name, value, list[i], isDynamic);
                  }
                  else {
                      addAttr(el, name, value, list[i], isDynamic);
                  }
              }
              else if (onRE.test(name)) {
                  // v-on
                  name = name.replace(onRE, '');
                  isDynamic = dynamicArgRE.test(name);
                  if (isDynamic) {
                      name = name.slice(1, -1);
                  }
                  addHandler(el, name, value, modifiers, false, warn, list[i], isDynamic);
              }
              else {
                  // normal directives
                  name = name.replace(dirRE, '');
                  // parse arg
                  var argMatch = name.match(argRE);
                  var arg = argMatch && argMatch[1];
                  isDynamic = false;
                  if (arg) {
                      name = name.slice(0, -(arg.length + 1));
                      if (dynamicArgRE.test(arg)) {
                          arg = arg.slice(1, -1);
                          isDynamic = true;
                      }
                  }
                  addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
                  if (name === 'model') {
                      checkForAliasModel(el, value);
                  }
              }
          }
          else {
              // literal attribute
              {
                  var res = parseText(value, delimiters);
                  if (res) {
                      warn("".concat(name, "=\"").concat(value, "\": ") +
                          'Interpolation inside attributes has been removed. ' +
                          'Use v-bind or the colon shorthand instead. For example, ' +
                          'instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
                  }
              }
              addAttr(el, name, JSON.stringify(value), list[i]);
              // #6887 firefox doesn't update muted state if set via attribute
              // even immediately after element creation
              if (!el.component &&
                  name === 'muted' &&
                  platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                  addProp(el, name, 'true', list[i]);
              }
          }
      }
  }
  function checkInFor(el) {
      var parent = el;
      while (parent) {
          if (parent.for !== undefined) {
              return true;
          }
          parent = parent.parent;
      }
      return false;
  }
  function parseModifiers(name) {
      var match = name.match(modifierRE);
      if (match) {
          var ret_1 = {};
          match.forEach(function (m) {
              ret_1[m.slice(1)] = true;
          });
          return ret_1;
      }
  }
  function makeAttrsMap(attrs) {
      var map = {};
      for (var i = 0, l = attrs.length; i < l; i++) {
          if (map[attrs[i].name] && !isIE && !isEdge) {
              warn('duplicate attribute: ' + attrs[i].name, attrs[i]);
          }
          map[attrs[i].name] = attrs[i].value;
      }
      return map;
  }
  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag(el) {
      return el.tag === 'script' || el.tag === 'style';
  }
  function isForbiddenTag(el) {
      return (el.tag === 'style' ||
          (el.tag === 'script' &&
              (!el.attrsMap.type || el.attrsMap.type === 'text/javascript')));
  }
  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;
  /* istanbul ignore next */
  function guardIESVGBug(attrs) {
      var res = [];
      for (var i = 0; i < attrs.length; i++) {
          var attr = attrs[i];
          if (!ieNSBug.test(attr.name)) {
              attr.name = attr.name.replace(ieNSPrefix, '');
              res.push(attr);
          }
      }
      return res;
  }
  function checkForAliasModel(el, value) {
      var _el = el;
      while (_el) {
          if (_el.for && _el.alias === value) {
              warn("<".concat(el.tag, " v-model=\"").concat(value, "\">: ") +
                  "You are binding v-model directly to a v-for iteration alias. " +
                  "This will not be able to modify the v-for source array because " +
                  "writing to the alias is like modifying a function local variable. " +
                  "Consider using an array of objects and use v-model on an object property instead.", el.rawAttrsMap['v-model']);
          }
          _el = _el.parent;
      }
  }

  /**
   * Expand input[v-model] with dynamic type bindings into v-if-else chains
   * Turn this:
   *   <input v-model="data[type]" :type="type">
   * into this:
   *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
   *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
   *   <input v-else :type="type" v-model="data[type]">
   */
  function preTransformNode(el, options) {
      if (el.tag === 'input') {
          var map = el.attrsMap;
          if (!map['v-model']) {
              return;
          }
          var typeBinding = void 0;
          if (map[':type'] || map['v-bind:type']) {
              typeBinding = getBindingAttr(el, 'type');
          }
          if (!map.type && !typeBinding && map['v-bind']) {
              typeBinding = "(".concat(map['v-bind'], ").type");
          }
          if (typeBinding) {
              var ifCondition = getAndRemoveAttr(el, 'v-if', true);
              var ifConditionExtra = ifCondition ? "&&(".concat(ifCondition, ")") : "";
              var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
              var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
              // 1. checkbox
              var branch0 = cloneASTElement(el);
              // process for on the main node
              processFor(branch0);
              addRawAttr(branch0, 'type', 'checkbox');
              processElement(branch0, options);
              branch0.processed = true; // prevent it from double-processed
              branch0.if = "(".concat(typeBinding, ")==='checkbox'") + ifConditionExtra;
              addIfCondition(branch0, {
                  exp: branch0.if,
                  block: branch0
              });
              // 2. add radio else-if condition
              var branch1 = cloneASTElement(el);
              getAndRemoveAttr(branch1, 'v-for', true);
              addRawAttr(branch1, 'type', 'radio');
              processElement(branch1, options);
              addIfCondition(branch0, {
                  exp: "(".concat(typeBinding, ")==='radio'") + ifConditionExtra,
                  block: branch1
              });
              // 3. other
              var branch2 = cloneASTElement(el);
              getAndRemoveAttr(branch2, 'v-for', true);
              addRawAttr(branch2, ':type', typeBinding);
              processElement(branch2, options);
              addIfCondition(branch0, {
                  exp: ifCondition,
                  block: branch2
              });
              if (hasElse) {
                  branch0.else = true;
              }
              else if (elseIfCondition) {
                  branch0.elseif = elseIfCondition;
              }
              return branch0;
          }
      }
  }
  function cloneASTElement(el) {
      return createASTElement(el.tag, el.attrsList.slice(), el.parent);
  }
  var model = {
      preTransformNode: preTransformNode
  };

  var modules = [klass, style, model];

  function text(el, dir) {
      if (dir.value) {
          addProp(el, 'textContent', "_s(".concat(dir.value, ")"), dir);
      }
  }

  function html(el, dir) {
      if (dir.value) {
          addProp(el, 'innerHTML', "_s(".concat(dir.value, ")"), dir);
      }
  }

  var directives = {
      model: model$1,
      text: text,
      html: html
  };

  var baseOptions = {
      expectHTML: true,
      modules: modules,
      directives: directives,
      isPreTag: isPreTag,
      isUnaryTag: isUnaryTag,
      mustUseProp: mustUseProp,
      canBeLeftOpenTag: canBeLeftOpenTag,
      isReservedTag: isReservedTag,
      getTagNamespace: getTagNamespace,
      staticKeys: genStaticKeys$1(modules)
  };

  var isStaticKey;
  var isPlatformReservedTag;
  var genStaticKeysCached = cached(genStaticKeys);
  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize(root, options) {
      if (!root)
          return;
      isStaticKey = genStaticKeysCached(options.staticKeys || '');
      isPlatformReservedTag = options.isReservedTag || no;
      // first pass: mark all non-static nodes.
      markStatic(root);
      // second pass: mark static roots.
      markStaticRoots(root, false);
  }
  function genStaticKeys(keys) {
      return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
          (keys ? ',' + keys : ''));
  }
  function markStatic(node) {
      node.static = isStatic(node);
      if (node.type === 1) {
          // do not make component slot content static. this avoids
          // 1. components not able to mutate slot nodes
          // 2. static slot content fails for hot-reloading
          if (!isPlatformReservedTag(node.tag) &&
              node.tag !== 'slot' &&
              node.attrsMap['inline-template'] == null) {
              return;
          }
          for (var i = 0, l = node.children.length; i < l; i++) {
              var child = node.children[i];
              markStatic(child);
              if (!child.static) {
                  node.static = false;
              }
          }
          if (node.ifConditions) {
              for (var i = 1, l = node.ifConditions.length; i < l; i++) {
                  var block = node.ifConditions[i].block;
                  markStatic(block);
                  if (!block.static) {
                      node.static = false;
                  }
              }
          }
      }
  }
  function markStaticRoots(node, isInFor) {
      if (node.type === 1) {
          if (node.static || node.once) {
              node.staticInFor = isInFor;
          }
          // For a node to qualify as a static root, it should have children that
          // are not just static text. Otherwise the cost of hoisting out will
          // outweigh the benefits and it's better off to just always render it fresh.
          if (node.static &&
              node.children.length &&
              !(node.children.length === 1 && node.children[0].type === 3)) {
              node.staticRoot = true;
              return;
          }
          else {
              node.staticRoot = false;
          }
          if (node.children) {
              for (var i = 0, l = node.children.length; i < l; i++) {
                  markStaticRoots(node.children[i], isInFor || !!node.for);
              }
          }
          if (node.ifConditions) {
              for (var i = 1, l = node.ifConditions.length; i < l; i++) {
                  markStaticRoots(node.ifConditions[i].block, isInFor);
              }
          }
      }
  }
  function isStatic(node) {
      if (node.type === 2) {
          // expression
          return false;
      }
      if (node.type === 3) {
          // text
          return true;
      }
      return !!(node.pre ||
          (!node.hasBindings && // no dynamic bindings
              !node.if &&
              !node.for && // not v-if or v-for or v-else
              !isBuiltInTag(node.tag) && // not a built-in
              isPlatformReservedTag(node.tag) && // not a component
              !isDirectChildOfTemplateFor(node) &&
              Object.keys(node).every(isStaticKey)));
  }
  function isDirectChildOfTemplateFor(node) {
      while (node.parent) {
          node = node.parent;
          if (node.tag !== 'template') {
              return false;
          }
          if (node.for) {
              return true;
          }
      }
      return false;
  }

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
  var fnInvokeRE = /\([^)]*?\);*$/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
  // KeyboardEvent.keyCode aliases
  var keyCodes = {
      esc: 27,
      tab: 9,
      enter: 13,
      space: 32,
      up: 38,
      left: 37,
      right: 39,
      down: 40,
      delete: [8, 46]
  };
  // KeyboardEvent.key aliases
  var keyNames = {
      // #7880: IE11 and Edge use `Esc` for Escape key name.
      esc: ['Esc', 'Escape'],
      tab: 'Tab',
      enter: 'Enter',
      // #9112: IE11 uses `Spacebar` for Space key name.
      space: [' ', 'Spacebar'],
      // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
      up: ['Up', 'ArrowUp'],
      left: ['Left', 'ArrowLeft'],
      right: ['Right', 'ArrowRight'],
      down: ['Down', 'ArrowDown'],
      // #9112: IE11 uses `Del` for Delete key name.
      delete: ['Backspace', 'Delete', 'Del']
  };
  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function (condition) { return "if(".concat(condition, ")return null;"); };
  var modifierCode = {
      stop: '$event.stopPropagation();',
      prevent: '$event.preventDefault();',
      self: genGuard("$event.target !== $event.currentTarget"),
      ctrl: genGuard("!$event.ctrlKey"),
      shift: genGuard("!$event.shiftKey"),
      alt: genGuard("!$event.altKey"),
      meta: genGuard("!$event.metaKey"),
      left: genGuard("'button' in $event && $event.button !== 0"),
      middle: genGuard("'button' in $event && $event.button !== 1"),
      right: genGuard("'button' in $event && $event.button !== 2")
  };
  function genHandlers(events, isNative) {
      var prefix = isNative ? 'nativeOn:' : 'on:';
      var staticHandlers = "";
      var dynamicHandlers = "";
      for (var name_1 in events) {
          var handlerCode = genHandler(events[name_1]);
          //@ts-expect-error
          if (events[name_1] && events[name_1].dynamic) {
              dynamicHandlers += "".concat(name_1, ",").concat(handlerCode, ",");
          }
          else {
              staticHandlers += "\"".concat(name_1, "\":").concat(handlerCode, ",");
          }
      }
      staticHandlers = "{".concat(staticHandlers.slice(0, -1), "}");
      if (dynamicHandlers) {
          return prefix + "_d(".concat(staticHandlers, ",[").concat(dynamicHandlers.slice(0, -1), "])");
      }
      else {
          return prefix + staticHandlers;
      }
  }
  function genHandler(handler) {
      if (!handler) {
          return 'function(){}';
      }
      if (Array.isArray(handler)) {
          return "[".concat(handler.map(function (handler) { return genHandler(handler); }).join(','), "]");
      }
      var isMethodPath = simplePathRE.test(handler.value);
      var isFunctionExpression = fnExpRE.test(handler.value);
      var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));
      if (!handler.modifiers) {
          if (isMethodPath || isFunctionExpression) {
              return handler.value;
          }
          return "function($event){".concat(isFunctionInvocation ? "return ".concat(handler.value) : handler.value, "}"); // inline statement
      }
      else {
          var code = '';
          var genModifierCode = '';
          var keys = [];
          var _loop_1 = function (key) {
              if (modifierCode[key]) {
                  genModifierCode += modifierCode[key];
                  // left/right
                  if (keyCodes[key]) {
                      keys.push(key);
                  }
              }
              else if (key === 'exact') {
                  var modifiers_1 = handler.modifiers;
                  genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta']
                      .filter(function (keyModifier) { return !modifiers_1[keyModifier]; })
                      .map(function (keyModifier) { return "$event.".concat(keyModifier, "Key"); })
                      .join('||'));
              }
              else {
                  keys.push(key);
              }
          };
          for (var key in handler.modifiers) {
              _loop_1(key);
          }
          if (keys.length) {
              code += genKeyFilter(keys);
          }
          // Make sure modifiers like prevent and stop get executed after key filtering
          if (genModifierCode) {
              code += genModifierCode;
          }
          var handlerCode = isMethodPath
              ? "return ".concat(handler.value, ".apply(null, arguments)")
              : isFunctionExpression
                  ? "return (".concat(handler.value, ").apply(null, arguments)")
                  : isFunctionInvocation
                      ? "return ".concat(handler.value)
                      : handler.value;
          return "function($event){".concat(code).concat(handlerCode, "}");
      }
  }
  function genKeyFilter(keys) {
      return (
      // make sure the key filters only apply to KeyboardEvents
      // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
      // key events that do not have keyCode property...
      "if(!$event.type.indexOf('key')&&" +
          "".concat(keys.map(genFilterCode).join('&&'), ")return null;"));
  }
  function genFilterCode(key) {
      var keyVal = parseInt(key, 10);
      if (keyVal) {
          return "$event.keyCode!==".concat(keyVal);
      }
      var keyCode = keyCodes[key];
      var keyName = keyNames[key];
      return ("_k($event.keyCode," +
          "".concat(JSON.stringify(key), ",") +
          "".concat(JSON.stringify(keyCode), ",") +
          "$event.key," +
          "".concat(JSON.stringify(keyName)) +
          ")");
  }

  function on(el, dir) {
      if (dir.modifiers) {
          warn$2("v-on without argument does not support modifiers.");
      }
      el.wrapListeners = function (code) { return "_g(".concat(code, ",").concat(dir.value, ")"); };
  }

  function bind(el, dir) {
      el.wrapData = function (code) {
          return "_b(".concat(code, ",'").concat(el.tag, "',").concat(dir.value, ",").concat(dir.modifiers && dir.modifiers.prop ? 'true' : 'false').concat(dir.modifiers && dir.modifiers.sync ? ',true' : '', ")");
      };
  }

  var baseDirectives = {
      on: on,
      bind: bind,
      cloak: noop
  };

  var CodegenState = /** @class */ (function () {
      function CodegenState(options) {
          this.options = options;
          this.warn = options.warn || baseWarn;
          this.transforms = pluckModuleFunction(options.modules, 'transformCode');
          this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
          this.directives = extend(extend({}, baseDirectives), options.directives);
          var isReservedTag = options.isReservedTag || no;
          this.maybeComponent = function (el) {
              return !!el.component || !isReservedTag(el.tag);
          };
          this.onceId = 0;
          this.staticRenderFns = [];
          this.pre = false;
      }
      return CodegenState;
  }());
  function generate(ast, options) {
      var state = new CodegenState(options);
      // fix #11483, Root level <script> tags should not be rendered.
      var code = ast
          ? ast.tag === 'script'
              ? 'null'
              : genElement(ast, state)
          : '_c("div")';
      return {
          render: "with(this){return ".concat(code, "}"),
          staticRenderFns: state.staticRenderFns
      };
  }
  function genElement(el, state) {
      if (el.parent) {
          el.pre = el.pre || el.parent.pre;
      }
      if (el.staticRoot && !el.staticProcessed) {
          return genStatic(el, state);
      }
      else if (el.once && !el.onceProcessed) {
          return genOnce(el, state);
      }
      else if (el.for && !el.forProcessed) {
          return genFor(el, state);
      }
      else if (el.if && !el.ifProcessed) {
          return genIf(el, state);
      }
      else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
          return genChildren(el, state) || 'void 0';
      }
      else if (el.tag === 'slot') {
          return genSlot(el, state);
      }
      else {
          // component or element
          var code = void 0;
          if (el.component) {
              code = genComponent(el.component, el, state);
          }
          else {
              var data = void 0;
              var maybeComponent = state.maybeComponent(el);
              if (!el.plain || (el.pre && maybeComponent)) {
                  data = genData(el, state);
              }
              var tag 
              // check if this is a component in <script setup>
              = void 0;
              // check if this is a component in <script setup>
              var bindings = state.options.bindings;
              if (maybeComponent && bindings && bindings.__isScriptSetup !== false) {
                  tag = checkBindingType(bindings, el.tag);
              }
              if (!tag)
                  tag = "'".concat(el.tag, "'");
              var children = el.inlineTemplate ? null : genChildren(el, state, true);
              code = "_c(".concat(tag).concat(data ? ",".concat(data) : '' // data
              ).concat(children ? ",".concat(children) : '' // children
              , ")");
          }
          // module transforms
          for (var i = 0; i < state.transforms.length; i++) {
              code = state.transforms[i](el, code);
          }
          return code;
      }
  }
  function checkBindingType(bindings, key) {
      var camelName = camelize(key);
      var PascalName = capitalize(camelName);
      var checkType = function (type) {
          if (bindings[key] === type) {
              return key;
          }
          if (bindings[camelName] === type) {
              return camelName;
          }
          if (bindings[PascalName] === type) {
              return PascalName;
          }
      };
      var fromConst = checkType("setup-const" /* BindingTypes.SETUP_CONST */) ||
          checkType("setup-reactive-const" /* BindingTypes.SETUP_REACTIVE_CONST */);
      if (fromConst) {
          return fromConst;
      }
      var fromMaybeRef = checkType("setup-let" /* BindingTypes.SETUP_LET */) ||
          checkType("setup-ref" /* BindingTypes.SETUP_REF */) ||
          checkType("setup-maybe-ref" /* BindingTypes.SETUP_MAYBE_REF */);
      if (fromMaybeRef) {
          return fromMaybeRef;
      }
  }
  // hoist static sub-trees out
  function genStatic(el, state) {
      el.staticProcessed = true;
      // Some elements (templates) need to behave differently inside of a v-pre
      // node.  All pre nodes are static roots, so we can use this as a location to
      // wrap a state change and reset it upon exiting the pre node.
      var originalPreState = state.pre;
      if (el.pre) {
          state.pre = el.pre;
      }
      state.staticRenderFns.push("with(this){return ".concat(genElement(el, state), "}"));
      state.pre = originalPreState;
      return "_m(".concat(state.staticRenderFns.length - 1).concat(el.staticInFor ? ',true' : '', ")");
  }
  // v-once
  function genOnce(el, state) {
      el.onceProcessed = true;
      if (el.if && !el.ifProcessed) {
          return genIf(el, state);
      }
      else if (el.staticInFor) {
          var key = '';
          var parent_1 = el.parent;
          while (parent_1) {
              if (parent_1.for) {
                  key = parent_1.key;
                  break;
              }
              parent_1 = parent_1.parent;
          }
          if (!key) {
              state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap['v-once']);
              return genElement(el, state);
          }
          return "_o(".concat(genElement(el, state), ",").concat(state.onceId++, ",").concat(key, ")");
      }
      else {
          return genStatic(el, state);
      }
  }
  function genIf(el, state, altGen, altEmpty) {
      el.ifProcessed = true; // avoid recursion
      return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
  }
  function genIfConditions(conditions, state, altGen, altEmpty) {
      if (!conditions.length) {
          return altEmpty || '_e()';
      }
      var condition = conditions.shift();
      if (condition.exp) {
          return "(".concat(condition.exp, ")?").concat(genTernaryExp(condition.block), ":").concat(genIfConditions(conditions, state, altGen, altEmpty));
      }
      else {
          return "".concat(genTernaryExp(condition.block));
      }
      // v-if with v-once should generate code like (a)?_m(0):_m(1)
      function genTernaryExp(el) {
          return altGen
              ? altGen(el, state)
              : el.once
                  ? genOnce(el, state)
                  : genElement(el, state);
      }
  }
  function genFor(el, state, altGen, altHelper) {
      var exp = el.for;
      var alias = el.alias;
      var iterator1 = el.iterator1 ? ",".concat(el.iterator1) : '';
      var iterator2 = el.iterator2 ? ",".concat(el.iterator2) : '';
      if (state.maybeComponent(el) &&
          el.tag !== 'slot' &&
          el.tag !== 'template' &&
          !el.key) {
          state.warn("<".concat(el.tag, " v-for=\"").concat(alias, " in ").concat(exp, "\">: component lists rendered with ") +
              "v-for should have explicit keys. " +
              "See https://v2.vuejs.org/v2/guide/list.html#key for more info.", el.rawAttrsMap['v-for'], true /* tip */);
      }
      el.forProcessed = true; // avoid recursion
      return ("".concat(altHelper || '_l', "((").concat(exp, "),") +
          "function(".concat(alias).concat(iterator1).concat(iterator2, "){") +
          "return ".concat((altGen || genElement)(el, state)) +
          '})');
  }
  function genData(el, state) {
      var data = '{';
      // directives first.
      // directives may mutate the el's other properties before they are generated.
      var dirs = genDirectives(el, state);
      if (dirs)
          data += dirs + ',';
      // key
      if (el.key) {
          data += "key:".concat(el.key, ",");
      }
      // ref
      if (el.ref) {
          data += "ref:".concat(el.ref, ",");
      }
      if (el.refInFor) {
          data += "refInFor:true,";
      }
      // pre
      if (el.pre) {
          data += "pre:true,";
      }
      // record original tag name for components using "is" attribute
      if (el.component) {
          data += "tag:\"".concat(el.tag, "\",");
      }
      // module data generation functions
      for (var i = 0; i < state.dataGenFns.length; i++) {
          data += state.dataGenFns[i](el);
      }
      // attributes
      if (el.attrs) {
          data += "attrs:".concat(genProps(el.attrs), ",");
      }
      // DOM props
      if (el.props) {
          data += "domProps:".concat(genProps(el.props), ",");
      }
      // event handlers
      if (el.events) {
          data += "".concat(genHandlers(el.events, false), ",");
      }
      if (el.nativeEvents) {
          data += "".concat(genHandlers(el.nativeEvents, true), ",");
      }
      // slot target
      // only for non-scoped slots
      if (el.slotTarget && !el.slotScope) {
          data += "slot:".concat(el.slotTarget, ",");
      }
      // scoped slots
      if (el.scopedSlots) {
          data += "".concat(genScopedSlots(el, el.scopedSlots, state), ",");
      }
      // component v-model
      if (el.model) {
          data += "model:{value:".concat(el.model.value, ",callback:").concat(el.model.callback, ",expression:").concat(el.model.expression, "},");
      }
      // inline-template
      if (el.inlineTemplate) {
          var inlineTemplate = genInlineTemplate(el, state);
          if (inlineTemplate) {
              data += "".concat(inlineTemplate, ",");
          }
      }
      data = data.replace(/,$/, '') + '}';
      // v-bind dynamic argument wrap
      // v-bind with dynamic arguments must be applied using the same v-bind object
      // merge helper so that class/style/mustUseProp attrs are handled correctly.
      if (el.dynamicAttrs) {
          data = "_b(".concat(data, ",\"").concat(el.tag, "\",").concat(genProps(el.dynamicAttrs), ")");
      }
      // v-bind data wrap
      if (el.wrapData) {
          data = el.wrapData(data);
      }
      // v-on data wrap
      if (el.wrapListeners) {
          data = el.wrapListeners(data);
      }
      return data;
  }
  function genDirectives(el, state) {
      var dirs = el.directives;
      if (!dirs)
          return;
      var res = 'directives:[';
      var hasRuntime = false;
      var i, l, dir, needRuntime;
      for (i = 0, l = dirs.length; i < l; i++) {
          dir = dirs[i];
          needRuntime = true;
          var gen = state.directives[dir.name];
          if (gen) {
              // compile-time directive that manipulates AST.
              // returns true if it also needs a runtime counterpart.
              needRuntime = !!gen(el, dir, state.warn);
          }
          if (needRuntime) {
              hasRuntime = true;
              res += "{name:\"".concat(dir.name, "\",rawName:\"").concat(dir.rawName, "\"").concat(dir.value
                  ? ",value:(".concat(dir.value, "),expression:").concat(JSON.stringify(dir.value))
                  : '').concat(dir.arg ? ",arg:".concat(dir.isDynamicArg ? dir.arg : "\"".concat(dir.arg, "\"")) : '').concat(dir.modifiers ? ",modifiers:".concat(JSON.stringify(dir.modifiers)) : '', "},");
          }
      }
      if (hasRuntime) {
          return res.slice(0, -1) + ']';
      }
  }
  function genInlineTemplate(el, state) {
      var ast = el.children[0];
      if ((el.children.length !== 1 || ast.type !== 1)) {
          state.warn('Inline-template components must have exactly one child element.', { start: el.start });
      }
      if (ast && ast.type === 1) {
          var inlineRenderFns = generate(ast, state.options);
          return "inlineTemplate:{render:function(){".concat(inlineRenderFns.render, "},staticRenderFns:[").concat(inlineRenderFns.staticRenderFns
              .map(function (code) { return "function(){".concat(code, "}"); })
              .join(','), "]}");
      }
  }
  function genScopedSlots(el, slots, state) {
      // by default scoped slots are considered "stable", this allows child
      // components with only scoped slots to skip forced updates from parent.
      // but in some cases we have to bail-out of this optimization
      // for example if the slot contains dynamic names, has v-if or v-for on them...
      var needsForceUpdate = el.for ||
          Object.keys(slots).some(function (key) {
              var slot = slots[key];
              return (slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot) // is passing down slot from parent which may be dynamic
              );
          });
      // #9534: if a component with scoped slots is inside a conditional branch,
      // it's possible for the same component to be reused but with different
      // compiled slot content. To avoid that, we generate a unique key based on
      // the generated code of all the slot contents.
      var needsKey = !!el.if;
      // OR when it is inside another scoped slot or v-for (the reactivity may be
      // disconnected due to the intermediate scope variable)
      // #9438, #9506
      // TODO: this can be further optimized by properly analyzing in-scope bindings
      // and skip force updating ones that do not actually use scope variables.
      if (!needsForceUpdate) {
          var parent_2 = el.parent;
          while (parent_2) {
              if ((parent_2.slotScope && parent_2.slotScope !== emptySlotScopeToken) ||
                  parent_2.for) {
                  needsForceUpdate = true;
                  break;
              }
              if (parent_2.if) {
                  needsKey = true;
              }
              parent_2 = parent_2.parent;
          }
      }
      var generatedSlots = Object.keys(slots)
          .map(function (key) { return genScopedSlot(slots[key], state); })
          .join(',');
      return "scopedSlots:_u([".concat(generatedSlots, "]").concat(needsForceUpdate ? ",null,true" : "").concat(!needsForceUpdate && needsKey ? ",null,false,".concat(hash(generatedSlots)) : "", ")");
  }
  function hash(str) {
      var hash = 5381;
      var i = str.length;
      while (i) {
          hash = (hash * 33) ^ str.charCodeAt(--i);
      }
      return hash >>> 0;
  }
  function containsSlotChild(el) {
      if (el.type === 1) {
          if (el.tag === 'slot') {
              return true;
          }
          return el.children.some(containsSlotChild);
      }
      return false;
  }
  function genScopedSlot(el, state) {
      var isLegacySyntax = el.attrsMap['slot-scope'];
      if (el.if && !el.ifProcessed && !isLegacySyntax) {
          return genIf(el, state, genScopedSlot, "null");
      }
      if (el.for && !el.forProcessed) {
          return genFor(el, state, genScopedSlot);
      }
      var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
      var fn = "function(".concat(slotScope, "){") +
          "return ".concat(el.tag === 'template'
              ? el.if && isLegacySyntax
                  ? "(".concat(el.if, ")?").concat(genChildren(el, state) || 'undefined', ":undefined")
                  : genChildren(el, state) || 'undefined'
              : genElement(el, state), "}");
      // reverse proxy v-slot without scope on this.$slots
      var reverseProxy = slotScope ? "" : ",proxy:true";
      return "{key:".concat(el.slotTarget || "\"default\"", ",fn:").concat(fn).concat(reverseProxy, "}");
  }
  function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
      var children = el.children;
      if (children.length) {
          var el_1 = children[0];
          // optimize single v-for
          if (children.length === 1 &&
              el_1.for &&
              el_1.tag !== 'template' &&
              el_1.tag !== 'slot') {
              var normalizationType_1 = checkSkip
                  ? state.maybeComponent(el_1)
                      ? ",1"
                      : ",0"
                  : "";
              return "".concat((altGenElement || genElement)(el_1, state)).concat(normalizationType_1);
          }
          var normalizationType = checkSkip
              ? getNormalizationType(children, state.maybeComponent)
              : 0;
          var gen_1 = altGenNode || genNode;
          return "[".concat(children.map(function (c) { return gen_1(c, state); }).join(','), "]").concat(normalizationType ? ",".concat(normalizationType) : '');
      }
  }
  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType(children, maybeComponent) {
      var res = 0;
      for (var i = 0; i < children.length; i++) {
          var el = children[i];
          if (el.type !== 1) {
              continue;
          }
          if (needsNormalization(el) ||
              (el.ifConditions &&
                  el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
              res = 2;
              break;
          }
          if (maybeComponent(el) ||
              (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
              res = 1;
          }
      }
      return res;
  }
  function needsNormalization(el) {
      return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
  }
  function genNode(node, state) {
      if (node.type === 1) {
          return genElement(node, state);
      }
      else if (node.type === 3 && node.isComment) {
          return genComment(node);
      }
      else {
          return genText(node);
      }
  }
  function genText(text) {
      return "_v(".concat(text.type === 2
          ? text.expression // no need for () because already wrapped in _s()
          : transformSpecialNewlines(JSON.stringify(text.text)), ")");
  }
  function genComment(comment) {
      return "_e(".concat(JSON.stringify(comment.text), ")");
  }
  function genSlot(el, state) {
      var slotName = el.slotName || '"default"';
      var children = genChildren(el, state);
      var res = "_t(".concat(slotName).concat(children ? ",function(){return ".concat(children, "}") : '');
      var attrs = el.attrs || el.dynamicAttrs
          ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
              // slot props are camelized
              name: camelize(attr.name),
              value: attr.value,
              dynamic: attr.dynamic
          }); }))
          : null;
      var bind = el.attrsMap['v-bind'];
      if ((attrs || bind) && !children) {
          res += ",null";
      }
      if (attrs) {
          res += ",".concat(attrs);
      }
      if (bind) {
          res += "".concat(attrs ? '' : ',null', ",").concat(bind);
      }
      return res + ')';
  }
  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent(componentName, el, state) {
      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      return "_c(".concat(componentName, ",").concat(genData(el, state)).concat(children ? ",".concat(children) : '', ")");
  }
  function genProps(props) {
      var staticProps = "";
      var dynamicProps = "";
      for (var i = 0; i < props.length; i++) {
          var prop = props[i];
          var value = transformSpecialNewlines(prop.value);
          if (prop.dynamic) {
              dynamicProps += "".concat(prop.name, ",").concat(value, ",");
          }
          else {
              staticProps += "\"".concat(prop.name, "\":").concat(value, ",");
          }
      }
      staticProps = "{".concat(staticProps.slice(0, -1), "}");
      if (dynamicProps) {
          return "_d(".concat(staticProps, ",[").concat(dynamicProps.slice(0, -1), "])");
      }
      else {
          return staticProps;
      }
  }
  // #3895, #4268
  function transformSpecialNewlines(text) {
      return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  }

  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' +
      ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
          'super,throw,while,yield,delete,export,import,return,switch,default,' +
          'extends,finally,continue,debugger,function,arguments')
          .split(',')
          .join('\\b|\\b') +
      '\\b');
  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' +
      'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') +
      '\\s*\\([^\\)]*\\)');
  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
  // detect problematic expressions in a template
  function detectErrors(ast, warn) {
      if (ast) {
          checkNode(ast, warn);
      }
  }
  function checkNode(node, warn) {
      if (node.type === 1) {
          for (var name_1 in node.attrsMap) {
              if (dirRE.test(name_1)) {
                  var value = node.attrsMap[name_1];
                  if (value) {
                      var range = node.rawAttrsMap[name_1];
                      if (name_1 === 'v-for') {
                          checkFor(node, "v-for=\"".concat(value, "\""), warn, range);
                      }
                      else if (name_1 === 'v-slot' || name_1[0] === '#') {
                          checkFunctionParameterExpression(value, "".concat(name_1, "=\"").concat(value, "\""), warn, range);
                      }
                      else if (onRE.test(name_1)) {
                          checkEvent(value, "".concat(name_1, "=\"").concat(value, "\""), warn, range);
                      }
                      else {
                          checkExpression(value, "".concat(name_1, "=\"").concat(value, "\""), warn, range);
                      }
                  }
              }
          }
          if (node.children) {
              for (var i = 0; i < node.children.length; i++) {
                  checkNode(node.children[i], warn);
              }
          }
      }
      else if (node.type === 2) {
          checkExpression(node.expression, node.text, warn, node);
      }
  }
  function checkEvent(exp, text, warn, range) {
      var stripped = exp.replace(stripStringRE, '');
      var keywordMatch = stripped.match(unaryOperatorsRE);
      if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
          warn("avoid using JavaScript unary operator as property name: " +
              "\"".concat(keywordMatch[0], "\" in expression ").concat(text.trim()), range);
      }
      checkExpression(exp, text, warn, range);
  }
  function checkFor(node, text, warn, range) {
      checkExpression(node.for || '', text, warn, range);
      checkIdentifier(node.alias, 'v-for alias', text, warn, range);
      checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
      checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
  }
  function checkIdentifier(ident, type, text, warn, range) {
      if (typeof ident === 'string') {
          try {
              new Function("var ".concat(ident, "=_"));
          }
          catch (e) {
              warn("invalid ".concat(type, " \"").concat(ident, "\" in expression: ").concat(text.trim()), range);
          }
      }
  }
  function checkExpression(exp, text, warn, range) {
      try {
          new Function("return ".concat(exp));
      }
      catch (e) {
          var keywordMatch = exp
              .replace(stripStringRE, '')
              .match(prohibitedKeywordRE);
          if (keywordMatch) {
              warn("avoid using JavaScript keyword as property name: " +
                  "\"".concat(keywordMatch[0], "\"\n  Raw expression: ").concat(text.trim()), range);
          }
          else {
              warn("invalid expression: ".concat(e.message, " in\n\n") +
                  "    ".concat(exp, "\n\n") +
                  "  Raw expression: ".concat(text.trim(), "\n"), range);
          }
      }
  }
  function checkFunctionParameterExpression(exp, text, warn, range) {
      try {
          new Function(exp, '');
      }
      catch (e) {
          warn("invalid function parameter expression: ".concat(e.message, " in\n\n") +
              "    ".concat(exp, "\n\n") +
              "  Raw expression: ".concat(text.trim(), "\n"), range);
      }
  }

  var range = 2;
  function generateCodeFrame(source, start, end) {
      if (start === void 0) { start = 0; }
      if (end === void 0) { end = source.length; }
      var lines = source.split(/\r?\n/);
      var count = 0;
      var res = [];
      for (var i = 0; i < lines.length; i++) {
          count += lines[i].length + 1;
          if (count >= start) {
              for (var j = i - range; j <= i + range || end > count; j++) {
                  if (j < 0 || j >= lines.length)
                      continue;
                  res.push("".concat(j + 1).concat(repeat(" ", 3 - String(j + 1).length), "|  ").concat(lines[j]));
                  var lineLength = lines[j].length;
                  if (j === i) {
                      // push underline
                      var pad = start - (count - lineLength) + 1;
                      var length_1 = end > count ? lineLength - pad : end - start;
                      res.push("   |  " + repeat(" ", pad) + repeat("^", length_1));
                  }
                  else if (j > i) {
                      if (end > count) {
                          var length_2 = Math.min(end - count, lineLength);
                          res.push("   |  " + repeat("^", length_2));
                      }
                      count += lineLength + 1;
                  }
              }
              break;
          }
      }
      return res.join('\n');
  }
  function repeat(str, n) {
      var result = '';
      if (n > 0) {
          // eslint-disable-next-line no-constant-condition
          while (true) {
              // eslint-disable-line
              if (n & 1)
                  result += str;
              n >>>= 1;
              if (n <= 0)
                  break;
              str += str;
          }
      }
      return result;
  }

  function createFunction(code, errors) {
      try {
          return new Function(code);
      }
      catch (err) {
          errors.push({ err: err, code: code });
          return noop;
      }
  }
  function createCompileToFunctionFn(compile) {
      var cache = Object.create(null);
      return function compileToFunctions(template, options, vm) {
          options = extend({}, options);
          var warn = options.warn || warn$2;
          delete options.warn;
          /* istanbul ignore if */
          {
              // detect possible CSP restriction
              try {
                  new Function('return 1');
              }
              catch (e) {
                  if (e.toString().match(/unsafe-eval|CSP/)) {
                      warn('It seems you are using the standalone build of Vue.js in an ' +
                          'environment with Content Security Policy that prohibits unsafe-eval. ' +
                          'The template compiler cannot work in this environment. Consider ' +
                          'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
                          'templates into render functions.');
                  }
              }
          }
          // check cache
          var key = options.delimiters
              ? String(options.delimiters) + template
              : template;
          if (cache[key]) {
              return cache[key];
          }
          // compile
          var compiled = compile(template, options);
          // check compilation errors/tips
          {
              if (compiled.errors && compiled.errors.length) {
                  if (options.outputSourceRange) {
                      compiled.errors.forEach(function (e) {
                          warn("Error compiling template:\n\n".concat(e.msg, "\n\n") +
                              generateCodeFrame(template, e.start, e.end), vm);
                      });
                  }
                  else {
                      warn("Error compiling template:\n\n".concat(template, "\n\n") +
                          compiled.errors.map(function (e) { return "- ".concat(e); }).join('\n') +
                          '\n', vm);
                  }
              }
              if (compiled.tips && compiled.tips.length) {
                  if (options.outputSourceRange) {
                      compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
                  }
                  else {
                      compiled.tips.forEach(function (msg) { return tip(msg, vm); });
                  }
              }
          }
          // turn code into functions
          var res = {};
          var fnGenErrors = [];
          res.render = createFunction(compiled.render, fnGenErrors);
          res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
              return createFunction(code, fnGenErrors);
          });
          // check function generation errors.
          // this should only happen if there is a bug in the compiler itself.
          // mostly for codegen development use
          /* istanbul ignore if */
          {
              if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
                  warn("Failed to generate render function:\n\n" +
                      fnGenErrors
                          .map(function (_a) {
                          var err = _a.err, code = _a.code;
                          return "".concat(err.toString(), " in\n\n").concat(code, "\n");
                      })
                          .join('\n'), vm);
              }
          }
          return (cache[key] = res);
      };
  }

  function createCompilerCreator(baseCompile) {
      return function createCompiler(baseOptions) {
          function compile(template, options) {
              var finalOptions = Object.create(baseOptions);
              var errors = [];
              var tips = [];
              var warn = function (msg, range, tip) {
                  (tip ? tips : errors).push(msg);
              };
              if (options) {
                  if (options.outputSourceRange) {
                      // $flow-disable-line
                      var leadingSpaceLength_1 = template.match(/^\s*/)[0].length;
                      warn = function (msg, range, tip) {
                          var data = typeof msg === 'string' ? { msg: msg } : msg;
                          if (range) {
                              if (range.start != null) {
                                  data.start = range.start + leadingSpaceLength_1;
                              }
                              if (range.end != null) {
                                  data.end = range.end + leadingSpaceLength_1;
                              }
                          }
                          (tip ? tips : errors).push(data);
                      };
                  }
                  // merge custom modules
                  if (options.modules) {
                      finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
                  }
                  // merge custom directives
                  if (options.directives) {
                      finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
                  }
                  // copy other options
                  for (var key in options) {
                      if (key !== 'modules' && key !== 'directives') {
                          finalOptions[key] = options[key];
                      }
                  }
              }
              finalOptions.warn = warn;
              var compiled = baseCompile(template.trim(), finalOptions);
              {
                  detectErrors(compiled.ast, warn);
              }
              compiled.errors = errors;
              compiled.tips = tips;
              return compiled;
          }
          return {
              compile: compile,
              compileToFunctions: createCompileToFunctionFn(compile)
          };
      };
  }

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile(template, options) {
      var ast = parse(template.trim(), options);
      if (options.optimize !== false) {
          optimize(ast, options);
      }
      var code = generate(ast, options);
      return {
          ast: ast,
          render: code.render,
          staticRenderFns: code.staticRenderFns
      };
  });

  var _a = createCompiler(baseOptions), compileToFunctions = _a.compileToFunctions;

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode(href) {
      div = div || document.createElement('div');
      div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
      return div.innerHTML.indexOf('&#10;') > 0;
  }
  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser
      ? getShouldDecode(true)
      : false;

  var idToTemplate = cached(function (id) {
      var el = query(id);
      return el && el.innerHTML;
  });
  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (el, hydrating) {
      el = el && query(el);
      /* istanbul ignore if */
      if (el === document.body || el === document.documentElement) {
          warn$2("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
          return this;
      }
      var options = this.$options;
      // resolve template/el and convert to render function
      if (!options.render) {
          var template = options.template;
          if (template) {
              if (typeof template === 'string') {
                  if (template.charAt(0) === '#') {
                      template = idToTemplate(template);
                      /* istanbul ignore if */
                      if (!template) {
                          warn$2("Template element not found or is empty: ".concat(options.template), this);
                      }
                  }
              }
              else if (template.nodeType) {
                  template = template.innerHTML;
              }
              else {
                  {
                      warn$2('invalid template option:' + template, this);
                  }
                  return this;
              }
          }
          else if (el) {
              // @ts-expect-error
              template = getOuterHTML(el);
          }
          if (template) {
              /* istanbul ignore if */
              if (config.performance && mark) {
                  mark('compile');
              }
              var _a = compileToFunctions(template, {
                  outputSourceRange: true,
                  shouldDecodeNewlines: shouldDecodeNewlines,
                  shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
                  delimiters: options.delimiters,
                  comments: options.comments
              }, this), render = _a.render, staticRenderFns = _a.staticRenderFns;
              options.render = render;
              options.staticRenderFns = staticRenderFns;
              /* istanbul ignore if */
              if (config.performance && mark) {
                  mark('compile end');
                  measure("vue ".concat(this._name, " compile"), 'compile', 'compile end');
              }
          }
      }
      return mount.call(this, el, hydrating);
  };
  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML(el) {
      if (el.outerHTML) {
          return el.outerHTML;
      }
      else {
          var container = document.createElement('div');
          container.appendChild(el.cloneNode(true));
          return container.innerHTML;
      }
  }
  Vue.compile = compileToFunctions;

  // export type EffectScheduler = (...args: any[]) => any
  /**
   * @internal since we are not exposing this in Vue 2, it's used only for
   * internal testing.
   */
  function effect(fn, scheduler) {
      var watcher = new Watcher(currentInstance, fn, noop, {
          sync: true
      });
      if (scheduler) {
          watcher.update = function () {
              scheduler(function () { return watcher.run(); });
          };
      }
  }

  extend(Vue, vca);
  Vue.effect = effect;

  return Vue;

}));

(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window["BasicLogger"] = mod;
  }
  if (typeof global !== 'undefined') {
    global["BasicLogger"] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {
  const Logger = class {
    static create(...args) {
      return new this(...args);
    }
    static defaultOptions = {
      log: true,
      debug: true,
      trace: false
    };
    constructor(id, options = {}) {
      if(typeof id !== "string") {
        throw new Error("Required parameter «id» to be a string on «Logger.constructor»");
      }
      this.id = id;
      this.options = Object.assign({}, this.constructor.defaultOptions, options);
    }
    log(...args) {
      if (this.options.log) {
        console.log("[LOG][" + this.id + "]", ...args);
      }
    }
    trace(method, args) {
      if(typeof method !== "string") {
        throw new Error("Required parameter «method» to be a string on «Logger.trace»");
      }
      if (this.options.trace) {
        console.log("[TRACE][" + this.id + "][" + method + "]", args.length + ": (" + Array.from(args).map(arg => (typeof arg)).join(", ") + ")");
      }
    }
    debug(...args) {
      if (this.options.debug) {
        console.log("[DEBUG][" + this.id + "]", ...args);
      }
    }
    error(error) {
      console.log("[ERROR.name] " + error.name);
      console.log("[ERROR.code] " + error.message);
      console.log("[ERROR.stack] " + error.stack);
    }
  }
  Logger.default = Logger;
  return Logger;
});
(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window["ensure"] = mod;
  }
  if (typeof global !== 'undefined') {
    global["ensure"] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {
  const ensure = function (source) {
    return new Ensurement(source);
  };
  class Ensurement {
    constructor(source) {
      if(typeof source !== "object") {
        throw new Error("Ensurement only accepts 1 object");
      }
      const sourceKeys = Object.keys(source);
      if(sourceKeys.length !== 1) {
        throw new Error("Ensurement only accepts 1 object with 1 property");
      }
      const id = sourceKeys[0];
      this.$subjectId = id;
      this.$subject = source[id];
      this.$operation = undefined;
      this.$objectation = undefined;
      this.$can = undefined;
      this.$cant = undefined;
      this.$is = undefined;
      this.$isnt = undefined;
      this.$throws = undefined;
      this.$doesntThrow = undefined;
    }
    type(value) {
      return this.$resolveOperation("type", value);
    }
    notType(value) {
      return this.$resolveOperation("notType", value);
    }
    is(is) {
      return this.$resolveOperation("is", is);
    }
    isnt(isnt) {
      return this.$resolveOperation("isnt", isnt);
    }
    can(can) {
      return this.$resolveOperation("can", can);
    }
    cant(cant) {
      return this.$resolveOperation("cant", cant);
    }
    throws(throws) {
      return this.$resolveOperation("throws", throws);
    }
    doesntThrow(doesntThrow) {
      return this.$resolveOperation("doesntThrow", doesntThrow);
    }
    $throwError() {
      throw new Error("could not ensure «" + this.$subjectId + " " + this.$operation + " " + this.$objectation + "»");
    }
    $resolveOperation(op, objectation) {
      this.$operation = op;
      this.$objectation = objectation;
      if (op === "type") {
        if(typeof this.$subject !== objectation) {
          this.$throwError();
        }
      } else if (op === "notType") {
        if (typeof this.$subject === objectation) {
          this.$throwError();
        }
      } else if (op === "is") {
        if (this.$subject !== objectation) {
          this.$throwError();
        }
      } else if (op === "isnt") {
        if (this.$subject === objectation) {
          this.$throwError();
        }
      } else if (op === "can") {
        if (!objectation(this.$subject)) {
          this.$throwError();
        }
      } else if (op === "cant") {
        if (objectation(this.$subject)) {
          this.$throwError();
        }
      } else if (op === "throws") {
        try {
          objectation(this.$subject);
          this.$throwError();
        } catch (error) { }
      } else if (op === "doesntThrow") {
        try {
          objectation(this.$subject);
        } catch (error) {
          this.$throwError();
        }
      } else {
        throw new Error("Ensure operation not admited: " + op);
      }
      return this;
    }
  }
  return ensure;
});
(function (factory) {
  const name = "UFS_manager";
  const modulo = factory();
  if (typeof window !== 'undefined') {
    window[name] = modulo;
  }
  if (typeof module !== 'undefined') {
    module.exports = modulo;
  }
  if (typeof global !== 'undefined') {
    global[name] = modulo;
  }
  return modulo;
})(function () {
  const FilesystemError = class extends Error {
      constructor(...args) {
          super(...args);
          this.name = "FilesystemError";
      }
  }
  const UFS_manager_for_node = class {
    constructor() {
      // @OK
    }
    trace(method) {
      console.log("[ufs][" + method + "]");
    }
    resolve_path(...args) {
      this.trace("resolve_path");
      return require("path").resolve(...args);
    }
    get_current_directory() {
      this.trace("get_current_directory");
      return process.cwd();
    }
    change_directory(node) {
      this.trace("change_directory");
      return process.chdir(node);
    }
    rename(node, node2) {
      this.trace("rename");
      return require("fs").renameSync(node, node2);
    }
    read_directory(node) {
      this.trace("read_directory");
      return require("fs").readdirSync(node).reduce((out, item) => {
        const subnode_fullpath = require("path").resolve(node, item);
        out[item] = require("fs").lstatSync(subnode_fullpath).isFile() ? "..." : {};
        return out;
      }, {});
    }
    read_file(node) {
      this.trace("read_file");
      return require("fs").readFileSync(node).toString();
    }
    make_directory(node) {
      this.trace("make_directory");
      return require("fs").mkdirSync(node);
    }
    write_file(node, contents) {
      this.trace("write_file");
      return require("fs").writeFileSync(node, contents);
    }
    exists(node) {
      this.trace("exists");
      return require("fs").existsSync(node);
    }
    is_file(node) {
      this.trace("is_file");
      return require("fs").lstatSync(node).isFile();
    }
    is_directory(node) {
      this.trace("is_directory");
      return require("fs").lstatSync(node).isDirectory();
    }
    delete_file(node) {
      this.trace("delete_file");
      return require("fs").unlinkSync(node);
    }
    delete_directory(node) {
      this.trace("delete_directory");
      return require("fs").rmdirSync(node, { recursive: true });
    }
  }
  const UFS_manager_for_browser = class extends UFS_manager_for_node {
    constructor(storage_id = "ufs_main_storage") {
      super();
      this.storage_id = storage_id;
      this.current_directory = this.environment === "node" ? process.cwd : "/";
    }
    get_persisted_data() {
      this.trace("get_persisted_data");
      if(!(this.storage_id in localStorage)) {
        localStorage[this.storage_id] = '{"files":{}}';
      }
      const data = JSON.parse(localStorage[this.storage_id]);
      return data;
    }
    set_persisted_data(data) {
      this.trace("set_persisted_data");
      localStorage[this.storage_id] = JSON.stringify(data);
    }
    remove_slash_end(txt) {
      // this.trace("remove_slash_end");
      const txt2 = txt.replace(/\/$/g, "");
      if(txt2.length === 0) {
        return "/";
      }
      return txt2;
    }
    remove_repeated_slahes(txt) {
      // this.trace("remove_repeated_slahes");
      return txt.replace(/\/(\/)+/g, "/");
    }
    resolve_path(...args) {
      this.trace("resolve_path");
      Validate_args: {
        if(args.length === 0) {
          throw new Error("Method «resolve_path» requires 1 or more parameters");
        }
        for(let index_parameter=0; index_parameter<args.length; index_parameter++) {
          const arg = args[index_parameter];
          if(typeof arg !== "string") {
            throw new Error("Method «resolve_path» requires only strings as parameters (on index «" + index_parameter + "»)");
          }
        }
      }
      let path_parts = [];
      Format_path: {
        const replace_last_slash_for_nothing = arg => this.remove_slash_end(arg);
        path_parts = args.map(replace_last_slash_for_nothing);
        if(!path_parts[0].startsWith("/")) {
          path_parts.unshift(this.current_directory.replace(/\/$/g, ""));
        }
      }
      let path_text = "";
      Join_path: {
        const replace_fist_slash_for_nothing = arg => arg.replace(/^\//g, "");
        for(let index_part=0; index_part<path_parts.length; index_part++) {
          const path_part = path_parts[index_part];
          if(path_part.startsWith("/")) {
            path_text = path_part;
          } else {
            if(path_text !== "/") {
              path_text += "/";
            }
            path_text += path_part.replace(replace_fist_slash_for_nothing);
          }
        }
      }
      Fix_slash_repetitions: {
        path_text = this.remove_repeated_slahes(path_text);
      }
      Resolve_double_dots: {
        const parts = path_text.split("/");
        const stack = [];
        Iterating_parts:
        for(const part of parts) {
          if(part === "" || part === ".") {
            continue Iterating_parts;
          } else if(part === "..") {
            if(stack.length > 0) {
              stack.pop();
            }
          } else {
            stack.push(part);
          }
        }
        path_text = "/" + stack.join("/");
      }
      return path_text;
    }
    get_current_directory() {
      this.trace("get_current_directory");
      return this.resolve_path(this.current_directory);
    }
    change_directory(node) {
      this.trace("change_directory");
      const is_directory = this.exists(node);
      if(!is_directory) {
        throw new FilesystemError("Cannot «change_directory» because destination does not exist at: «" + this.resolve_path(node) + "»");
      }
      this.current_directory = this.resolve_path(node);
      return this.current_directory;
    }
    operate_on_node(node, callback, should_persist = true) {
      this.trace("operate_on_node");
      const data = this.get_persisted_data();
      const node_solved = this.resolve_path(node);
      const node_parts = node_solved.split("/").filter(p => p !== "");
      const root = data.files;
      const current_index = ["data"];
      let pivot = root;
      let output = undefined;
      if(node_parts.length === 0) {
        output = callback(data, "files", current_index);
      } else {
        for(let index_part=0; index_part<node_parts.length; index_part++) {
          const node_part = node_parts[index_part];
          if(index_part === (node_parts.length-1)) {
            output = callback(pivot, node_part, current_index);
          } else {
            pivot = pivot[node_part];
          }
          current_index.push(node_part);
        }
      }
      if(should_persist) {
        this.set_persisted_data(data);
      }
      return output;
    }
    read_directory(node) {
      this.trace("read_directory");
      return this.operate_on_node(node, (pivot, last_property, index) => {
        if(!(last_property in pivot)) {
          throw new FilesystemError("Cannot «read_directory» because node does not exist at: «" + this.resolve_path(node) + "»");
        }
        if(typeof pivot[last_property] !== "object") {
          throw new FilesystemError("Cannot «read_directory» because node is a file at: «" + this.resolve_path(node) + "»");
        }
        return pivot[last_property];
      });
    }
    read_file(node) {
      this.trace("read_file");
      return this.operate_on_node(node, (pivot, last_property, index) => {
        if(!(last_property in pivot)) {
          throw new FilesystemError("Cannot «read_file» because node does not exist at: «" + this.resolve_path(node) + "»");
        }
        if(typeof pivot[last_property] !== "string") {
          throw new FilesystemError("Cannot «read_file» because node is a directory at: «" + this.resolve_path(node) + "»");
        }
        return pivot[last_property];
      });
    }
    make_directory(node) {
      this.trace("make_directory");
      this.operate_on_node(node, (pivot, last_property, index) => {
        if(last_property in pivot) {
          throw new FilesystemError("Cannot «make_directory» because node already exists at: «" + this.resolve_path(node) + "»");
        }
        pivot[last_property] = {};
      });
    }
    write_file(node, contents) {
      this.trace("write_file");
      this.operate_on_node(node, (pivot, last_property, index) => {
        if(last_property in pivot) {
          if(typeof pivot[last_property] !== "string") {
            throw new FilesystemError("Cannot «write_file» because node is a directory at: «" + this.resolve_path(node) + "»");
          }
        }
        pivot[last_property] = contents;
      });
    }
    exists(node) {
      this.trace("exists");
      return this.operate_on_node(node, (pivot, last_property, index) => {
        if(!(last_property in pivot)) {
          return false;
        }
        return true;
      }, false);
    }
    is_file(node) {
      this.trace("is_file");
      return this.operate_on_node(node, (pivot, last_property, index) => {
        if(!(last_property in pivot)) {
          return false;
        }
        if(typeof pivot[last_property] !== "string") {
          return false;
        }
        return true;
      }, false);
    }
    is_directory(node) {
      this.trace("is_directory");
      return this.operate_on_node(node, (pivot, last_property, index) => {
        if(!(last_property in pivot)) {
          return false;
        }
        if(typeof pivot[last_property] !== "object") {
          return false;
        }
        return true;
      }, false);
    }
    delete_file(node) {
      this.trace("delete_file");
      return this.operate_on_node(node, (pivot, last_property, index) => {
        if(typeof pivot[last_property] === "undefined") {
          throw new FilesystemError("Cannot «delete_file» because node does not exist at: «" + this.resolve_path(node) + "»");
        }
        if(typeof pivot[last_property] !== "string") {
          throw new FilesystemError("Cannot «delete_file» because node is a directory at: «" + this.resolve_path(node) + "»");
        }
        delete pivot[last_property];
        return true;
      }, true);
    }
    delete_directory(node) {
      this.trace("delete_directory");
      return this.operate_on_node(node, (pivot, last_property, index) => {
        if(typeof pivot[last_property] === "undefined") {
          console.log(pivot);
          console.log(last_property);
          throw new FilesystemError("Cannot «delete_directory» because does not exists at: «" + this.resolve_path(node) + "»");
        }
        if(typeof pivot[last_property] !== "object") {
          throw new FilesystemError("Cannot «delete_directory» because node is a file at: «" + this.resolve_path(node) + "»");
        }
        delete pivot[last_property];
        return true;
      }, true);
    }
    rename(node, node2) {
      this.trace("rename");
      const last_name = this.resolve_path(node2).split("/").filter(p => p !== "").pop();
      return this.operate_on_node(node, (pivot, last_property, index) => {
        if(typeof pivot[last_property] === "undefined") {
          throw new FilesystemError("Cannot «rename» because does not exists at: «" + this.resolve_path(node) + "»");
        }
        pivot[last_name] = pivot[last_property];
        pivot[last_property] = undefined;
        delete pivot[last_property];
        return true;
      }, true);
    }
  }
  return {
    node_driver: UFS_manager_for_node,
    browser_driver: UFS_manager_for_browser,
    create(...args) {
      const clazz = typeof global !== "undefined" ? UFS_manager_for_node : UFS_manager_for_browser;
      return new clazz(...args);
    }
  };
});
(function (factory) {

  const mod = factory();

  if (typeof window !== "undefined") {
    window.UniversalStore = mod;
  }
  if (typeof global !== "undefined") {
    global.UniversalStore = mod;
  }
  if (typeof module !== "undefined") {
    module.exports = mod;
  }

})(function () {
const Store = class {

  static create(...args) {
    return new this(...args);
  }

  constructor(initialState = {}, path_to_store = "original_store.json") {
    this.$store = initialState;
    this.$ufs = UFS_manager.create(path_to_store);
    this.events = {};
  }

  _triggerParentEvents(event, path, value) {
    const originalPath = path.join(".");
    if (this.events[originalPath]) {
      this.events[originalPath].forEach((callback) => {
        return callback(event, path, value);
      });
    }
    while (path.length > 0) {
      path.pop();
      const parentPath = path.join(".");
      if (this.events[parentPath]) {
        this.events[parentPath].forEach((callback) => {
          const value = this.get(path);
          return callback(event, path, value);
        });
      }
    }
  }

  get(path) {
    return path.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), this.$store);
  }

  set(path, value) {
    if (!Array.isArray(path) || path.length === 0) {
      throw new Error("La ruta debe ser un array de strings no vacío.");
    }
    const lastKey = path.pop();
    const target = path.reduce((acc, key) => {
      if (!acc[key]) acc[key] = {};
      return acc[key];
    }, this.$store);
    target[lastKey] = value;
    path.push(lastKey);
    this._triggerParentEvents("set", path, value);
  }

  watch(path, callback) {
    const key = path.join(".");
    if (!this.events[key]) {
      this.events[key] = [];
    }
    this.events[key].push(callback);
  }

  unwatch(path, callback) {
    const key = path.join(".");
    if (this.events[key]) {
      this.events[key] = this.events[key].filter((cb) => {
        return cb !== callback;
      });
      if (this.events[key].length === 0) {
        delete this.events[key];
      }
    }
  }

  delete(path) {
    if (!Array.isArray(path) || path.length === 0) {
      throw new Error("La ruta debe ser un array de strings no vacío.");
    }
    const lastKey = path.pop();
    const target = this.get(path);
    if (target && target.hasOwnProperty(lastKey)) {
      delete target[lastKey];
      this._triggerParentEvents("delete", path);
    }
  }

  push(path, value) {
    const array = this.get(path);
    if (Array.isArray(array)) {
      array.push(value);
      this._triggerParentEvents("push", path, array);
    }
  }

  pop(path) {
    const array = this.get(path);
    if (Array.isArray(array)) {
      const value = array.pop();
      this._triggerParentEvents("pop", path, array);
      return value;
    }
  }

  unshift(path, value) {
    const array = this.get(path);
    if (Array.isArray(array)) {
      array.unshift(value);
      this._triggerParentEvents("unshift", path, array);
    }
  }

  shift(path) {
    const array = this.get(path);
    if (Array.isArray(array)) {
      const value = array.shift();
      this._triggerParentEvents("shift", path, array);
      return value;
    }
  }

  add(path, key, value) {
    const object = this.get(path);
    if (object && typeof object === 'object' && !Array.isArray(object)) {
      object[key] = value;
      this._triggerParentEvents("add", path, object);
    }
  }

  remove(path, key) {
    const object = this.get(path);
    if (object && typeof object === 'object' && !Array.isArray(object)) {
      delete object[key];
      this._triggerParentEvents("remove", path, object);
    }
  }

  splice(path, start, deleteCount, ...items) {
    const array = this.get(path);
    if (Array.isArray(array)) {
      const result = array.splice(start, deleteCount, ...items);
      this._triggerParentEvents("splice", path, array);
      return result;
    }
  }

  extend(path, newProps) {
    const object = this.get(path);
    if (object && typeof object === 'object' && !Array.isArray(object)) {
      Object.assign(object, newProps);
      this._triggerParentEvents("extend", path, object);
    }
  }

  modify(path, modifier) {
    const currentValue = this.get(path);
    const newValue = modifier(currentValue);
    if (newValue !== currentValue) {
      this.set(path, newValue);
    }
  }

  hydrate(file) {
    this.$store = JSON.parse(this.$ufs.read_file(file));
  }

  dehydrate(file) {
    this.$ufs.write_file(file, JSON.stringify(this.$store));
  }

};

Store.default = Store;

return Store;
});

(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window["Browsie"] = mod;
  }
  if (typeof global !== 'undefined') {
    // global["Browsie"] = mod;
  }
  if (typeof module !== 'undefined') {
    // module.exports = mod;
  }
})(function () {

  class BrowsieStaticAPI {

    static openedConnections = [];

    static _trace = true;

    static trace(methodName, args = []) {
      if (this._trace) {
        console.log("[TRACE][" + methodName + "]", args.length + " args: " + Array.from(args).map(arg => typeof (arg)).join(", "));
      }
    }

    static addOpenedConnection(connection) {

    }

    static removeOpenedConnection(connection) {

    }

    static async listDatabases() {
      this.trace("Browsie.listDatabases", arguments);
      try {
        const databases = await indexedDB.databases();
        return databases;
      } catch (error) {
        console.error('Error al obtener las bases de datos:', error);
      }
    }

    // Crea la base de datos con el esquema final
    static createDatabase(dbName, storeDefinitions) {
      this.trace("Browsie.createDatabase", arguments);
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName);
        request.onsuccess = () => {
          request.result.close();
          resolve(request.result);
        };
        request.onerror = (error) => reject(error);

        // Establecemos el esquema final
        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          const storeKeys = Object.keys(storeDefinitions);
          storeKeys.forEach(storeKey => {
            const store = storeDefinitions[storeKey];
            if (!db.objectStoreNames.contains(storeKey)) {
              const objectStore = db.createObjectStore(storeKey, {
                keyPath: "id",
                autoIncrement: true,
              });
              for (let storeIndex of store) {
                const storeName = storeIndex.replace(/^\!/g, "");
                objectStore.createIndex(storeName, storeName, {
                  unique: storeIndex.startsWith("!")
                });
              }
            }
          });
        };
      });
    }

    static async getDatabaseSize(dbName) {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName);
        request.onsuccess = async (event) => {
          const db = event.target.result;
          if(!db.objectStoreNames.length) {
            return resolve(0);
          }
          const transaction = db.transaction(db.objectStoreNames, 'readonly');
          let totalSize = 0;
    
          try {
            for (const storeName of db.objectStoreNames) {
              const store = transaction.objectStore(storeName);
              const allRecords = store.getAll();
    
              allRecords.onsuccess = (event) => {
                const records = event.target.result;
                for (const record of records) {
                  totalSize += new Blob([JSON.stringify(record)]).size;
                }
              };
            }
    
            transaction.oncomplete = () => {
              db.close();
              resolve(totalSize);
            };
          } catch (error) {
            reject(error);
          }
        };
    
        request.onerror = (event) => {
          reject(event.target.error);
        };
      });
    }

    // Obtener todos los datos de un store
    static async getAllDataFromStore(dbName, storeName) {
      this.trace("Browsie.getAllDataFromStore", arguments);
      return await new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName);

        request.onsuccess = (event) => {
          const db = event.target.result;
          const transaction = db.transaction(storeName, 'readonly');
          const store = transaction.objectStore(storeName);

          const getAllRequest = store.getAll();
          getAllRequest.onsuccess = () => resolve(getAllRequest.result);
          getAllRequest.onerror = () => {
            db.close();
            reject(new Error('Error al obtener los datos del store'));
          };
        };

        request.onerror = () => {
          reject(new Error('Error al abrir la base de datos'));
        };
      });
    }

    // Insertar datos en un store
    static async insertDataIntoStore(dbName, storeName, data) {
      this.trace("Browsie.insertDataIntoStore", arguments);
      return await new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName);

        request.onsuccess = (event) => {
          const db = event.target.result;
          const transaction = db.transaction(storeName, 'readwrite');
          const store = transaction.objectStore(storeName);

          data.forEach(item => store.add(item));

          transaction.oncomplete = () => resolve();
          transaction.onerror = () => {
            db.close();
            reject(new Error('Error al insertar los datos en el store'));
          };
        };

        request.onerror = () => {
          reject(new Error('Error al abrir la base de datos'));
        };
      });
    }

    // Eliminar una base de datos
    static deleteDatabase(dbName) {
      this.trace("Browsie.deleteDatabase", arguments);
      return new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(dbName);

        request.onblocked = () => {
          db.close();
          reject(new Error("Error al eliminar la base de datos porque está bloqueada"));
        };
        request.onsuccess = () => resolve();
        request.onerror = () => {
          db.close();
          reject(new Error('Error al eliminar la base de datos'));
        };
      });
    }

    static async getSchema(dbName) {
      this.trace("Browsie.getSchema", arguments);
      let db = undefined;
      try {
        // Abrir la base de datos en modo solo lectura
        const request = indexedDB.open(dbName);

        db = await new Promise((resolve, reject) => {
          request.onsuccess = (event) => resolve(event.target.result);
          request.onerror = () => {
            reject(new Error('Error al abrir la base de datos'));
          };
        });

        // Construir el esquema a partir de los almacenes
        const schema = {};
        const objectStoreNames = Array.from(db.objectStoreNames); // Lista de stores

        objectStoreNames.forEach(storeName => {
          const transaction = db.transaction(storeName, 'readonly');
          const store = transaction.objectStore(storeName);

          const storeInfo = {
            keyPath: store.keyPath,
            autoIncrement: store.autoIncrement,
            indexes: []
          };

          // Recorrer los índices del store
          const indexNames = Array.from(store.indexNames); // Lista de índices
          indexNames.forEach(indexName => {
            const index = store.index(indexName);
            storeInfo.indexes.push({
              name: index.name,
              keyPath: index.keyPath,
              unique: index.unique,
              multiEntry: index.multiEntry
            });
          });

          schema[storeName] = storeInfo;
        });

        return schema;
      } catch (error) {
        console.error('Error al obtener el esquema:', error);
        throw error;
      } finally {
        if (db) {
          db.close();
        }
      }
    }

  }

  class Browsie extends BrowsieStaticAPI {

    static async open(...args) {
      this.trace("Browsie.open", arguments);
      const db = new this(...args);
      await db.open();
      this.addOpenedConnection(db);
      return db;
    }

    // Constructor que abre la base de datos
    constructor(dbName, trace = false) {
      super();
      this.dbName = dbName;
      this.db = null;
      this._trace = trace;
    }

    // Abre la base de datos
    open() {
      this.constructor.trace("browsie.open", arguments);
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(this.dbName);

        request.onsuccess = () => {
          this.db = request.result;
          resolve(this.db);
        };
        request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.open» operation over database «${this.dbName}»: `));
      });
    }

    close(...args) {
      this.constructor.trace("browsie.close", arguments);
      return this.db.close(...args);
    }

    // Método para seleccionar elementos de un store con un filtro
    select(store, filter) {
      this.constructor.trace("browsie.select", arguments);
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(store, 'readonly');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.getAll();

        request.onsuccess = () => {
          const result = request.result.filter(item => {
            return Object.keys(filter).every(key => item[key] === filter[key]);
          });
          resolve(result);
        };
        request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.select» operation over store «${store}»: `));
      });
    }

    // Método para insertar un solo item en un store
    insert(store, item) {
      this.constructor.trace("browsie.insert", arguments);
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(store, 'readwrite');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.add(item);

        request.onsuccess = () => resolve(request.result);
        request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.insert» operation over store «${store}»: `));
      });
    }

    // Método para actualizar un item en un store
    update(store, id, item) {
      this.constructor.trace("browsie.update", arguments);
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(store, 'readwrite');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.put({ ...item, id });

        request.onsuccess = () => resolve(request.result);
        request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.update» operation over store «${store}»: `));
      });
    }

    // Método para eliminar un item de un store por ID
    delete(store, id) {
      this.constructor.trace("browsie.delete", arguments);
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(store, 'readwrite');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.delete(id);

        request.onsuccess = () => resolve();
        request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.delete» operation over store «${store}»: `));
      });
    }

    _expandError(errorObject, baseMessage = false) {
      this.constructor.trace("browsie._expandError", arguments);
      let error = errorObject;
      if (errorObject instanceof Error) {
        error = errorObject;
      } else if (errorObject.target && errorObject.target.error) {
        error = errorObject.target.error;
      } else {
        error = new Error(errorObject);
      }
      if (baseMessage) {
        const errorTemp = new Error(error.message ?? error);
        Object.assign(errorTemp, error);
        errorTemp.message = baseMessage + errorTemp.message;
        error = errorTemp;
      }
      return error;
    }

    // Método para insertar varios items en un store
    insertMany(store, items) {
      this.constructor.trace("browsie.insertMany", arguments);
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(store, 'readwrite');
        const objectStore = transaction.objectStore(store);
        let insertedCount = 0;

        items.forEach(item => {
          const request = objectStore.add(item);
          request.onsuccess = () => {
            insertedCount++;
            if (insertedCount === items.length) resolve();
          };
          request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.insertMany» operation over store «${store}» inserting «${items.length}» items: `));
        });
      });
    }

    // Método para actualizar varios items en un store
    updateMany(store, filter, item) {
      this.constructor.trace("browsie.updateMany", arguments);
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(store, 'readwrite');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.openCursor();
        let updatedCount = 0;
        request.onsuccess = () => {
          const cursor = request.result;
          if (cursor) {
            if (Object.keys(filter).every(key => cursor.value[key] === filter[key])) {
              const updatedItem = { ...cursor.value, ...item };
              const updateRequest = cursor.update(updatedItem);
              updateRequest.onsuccess = () => {
                updatedCount++;
                if (updatedCount === cursor.value.length) resolve();
              };
            }
            cursor.continue();
          }
        };

        request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.updateMany» operation over store «${store}»: `));
      });
    }

    // Método para eliminar varios items de un store según un filtro
    deleteMany(store, filter) {
      this.constructor.trace("browsie.deleteMany", arguments);
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(store, 'readwrite');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.openCursor();

        let deletedCount = 0;
        request.onsuccess = () => {
          const cursor = request.result;
          if (cursor) {
            if (Object.keys(filter).every(key => cursor.value[key] === filter[key])) {
              const deleteRequest = cursor.delete();
              deleteRequest.onsuccess = () => {
                deletedCount++;
                if (deletedCount === cursor.value.length) resolve();
              };
            }
            cursor.continue();
          }
        };

        request.onerror = (error) => reject(this._expandError(error, `Error on «browsie.deleteMany» operation over store «${store}»: `));
      });
    }
  }

  Browsie.default = Browsie;

  return Browsie;

});

// We are modularizing this manually because the current modularize setting in Emscripten has some issues:
// https://github.com/kripken/emscripten/issues/5820
// In addition, When you use emcc's modularization, it still expects to export a global object called `Module`,
// which is able to be used/called before the WASM is loaded.
// The modularization below exports a promise that loads and resolves to the actual sql.js module.
// That way, this module can't be used before the WASM is finished loading.

// We are going to define a function that a user will call to start loading initializing our Sql.js library
// However, that function might be called multiple times, and on subsequent calls, we don't actually want it to instantiate a new instance of the Module
// Instead, we want to return the previously loaded module

// TODO: Make this not declare a global if used in the browser
var initSqlJsPromise = undefined;

var initSqlJs = function (moduleConfig) {

    if (initSqlJsPromise){
      return initSqlJsPromise;
    }
    // If we're here, we've never called this function before
    initSqlJsPromise = new Promise(function (resolveModule, reject) {

        // We are modularizing this manually because the current modularize setting in Emscripten has some issues:
        // https://github.com/kripken/emscripten/issues/5820

        // The way to affect the loading of emcc compiled modules is to create a variable called `Module` and add
        // properties to it, like `preRun`, `postRun`, etc
        // We are using that to get notified when the WASM has finished loading.
        // Only then will we return our promise

        // If they passed in a moduleConfig object, use that
        // Otherwise, initialize Module to the empty object
        var Module = typeof moduleConfig !== 'undefined' ? moduleConfig : {};

        // EMCC only allows for a single onAbort function (not an array of functions)
        // So if the user defined their own onAbort function, we remember it and call it
        var originalOnAbortFunction = Module['onAbort'];
        Module['onAbort'] = function (errorThatCausedAbort) {
            reject(new Error(errorThatCausedAbort));
            if (originalOnAbortFunction){
              originalOnAbortFunction(errorThatCausedAbort);
            }
        };

        Module['postRun'] = Module['postRun'] || [];
        Module['postRun'].push(function () {
            // When Emscripted calls postRun, this promise resolves with the built Module
            resolveModule(Module);
        });

        // There is a section of code in the emcc-generated code below that looks like this:
        // (Note that this is lowercase `module`)
        // if (typeof module !== 'undefined') {
        //     module['exports'] = Module;
        // }
        // When that runs, it's going to overwrite our own modularization export efforts in shell-post.js!
        // The only way to tell emcc not to emit it is to pass the MODULARIZE=1 or MODULARIZE_INSTANCE=1 flags,
        // but that carries with it additional unnecessary baggage/bugs we don't want either.
        // So, we have three options:
        // 1) We undefine `module`
        // 2) We remember what `module['exports']` was at the beginning of this function and we restore it later
        // 3) We write a script to remove those lines of code as part of the Make process.
        //
        // Since those are the only lines of code that care about module, we will undefine it. It's the most straightforward
        // of the options, and has the side effect of reducing emcc's efforts to modify the module if its output were to change in the future.
        // That's a nice side effect since we're handling the modularization efforts ourselves
        module = undefined;

        // The emcc-generated code and shell-post.js code goes below,
        // meaning that all of it runs inside of this promise. If anything throws an exception, our promise will abort
var f;f||=typeof Module != 'undefined' ? Module : {};var aa="object"==typeof window,ba="function"==typeof importScripts,ca="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node;"use strict";
f.onRuntimeInitialized=function(){function a(g,l){switch(typeof l){case "boolean":fc(g,l?1:0);break;case "number":gc(g,l);break;case "string":hc(g,l,-1,-1);break;case "object":if(null===l)ib(g);else if(null!=l.length){var n=da(l,ea);ic(g,n,l.length,-1);fa(n)}else xa(g,"Wrong API use : tried to return a value of an unknown type ("+l+").",-1);break;default:ib(g)}}function b(g,l){for(var n=[],t=0;t<g;t+=1){var w=m(l+4*t,"i32"),A=jc(w);if(1===A||2===A)w=kc(w);else if(3===A)w=lc(w);else if(4===A){A=w;
w=mc(A);A=nc(A);for(var N=new Uint8Array(w),M=0;M<w;M+=1)N[M]=p[A+M];w=N}else w=null;n.push(w)}return n}function c(g,l){this.Ka=g;this.db=l;this.Ia=1;this.eb=[]}function d(g,l){this.db=l;l=ha(g)+1;this.Xa=ia(l);if(null===this.Xa)throw Error("Unable to allocate memory for the SQL string");q(g,u,this.Xa,l);this.cb=this.Xa;this.Ta=this.hb=null}function e(g){this.filename="dbfile_"+(4294967295*Math.random()>>>0);if(null!=g){var l=this.filename,n="/",t=l;n&&(n="string"==typeof n?n:ja(n),t=l?x(n+"/"+l):
n);l=ka(!0,!0);t=la(t,(void 0!==l?l:438)&4095|32768,0);if(g){if("string"==typeof g){n=Array(g.length);for(var w=0,A=g.length;w<A;++w)n[w]=g.charCodeAt(w);g=n}ma(t,l|146);n=na(t,577);oa(n,g,0,g.length,0);pa(n);ma(t,l)}}this.handleError(r(this.filename,h));this.db=m(h,"i32");lb(this.db);this.Ya={};this.Ma={}}var h=y(4),k=f.cwrap,r=k("sqlite3_open","number",["string","number"]),z=k("sqlite3_close_v2","number",["number"]),v=k("sqlite3_exec","number",["number","string","number","number","number"]),E=k("sqlite3_changes",
"number",["number"]),H=k("sqlite3_prepare_v2","number",["number","string","number","number","number"]),mb=k("sqlite3_sql","string",["number"]),oc=k("sqlite3_normalized_sql","string",["number"]),nb=k("sqlite3_prepare_v2","number",["number","number","number","number","number"]),pc=k("sqlite3_bind_text","number",["number","number","number","number","number"]),ob=k("sqlite3_bind_blob","number",["number","number","number","number","number"]),qc=k("sqlite3_bind_double","number",["number","number","number"]),
rc=k("sqlite3_bind_int","number",["number","number","number"]),sc=k("sqlite3_bind_parameter_index","number",["number","string"]),tc=k("sqlite3_step","number",["number"]),uc=k("sqlite3_errmsg","string",["number"]),vc=k("sqlite3_column_count","number",["number"]),wc=k("sqlite3_data_count","number",["number"]),xc=k("sqlite3_column_double","number",["number","number"]),pb=k("sqlite3_column_text","string",["number","number"]),yc=k("sqlite3_column_blob","number",["number","number"]),zc=k("sqlite3_column_bytes",
"number",["number","number"]),Ac=k("sqlite3_column_type","number",["number","number"]),Bc=k("sqlite3_column_name","string",["number","number"]),Cc=k("sqlite3_reset","number",["number"]),Dc=k("sqlite3_clear_bindings","number",["number"]),Ec=k("sqlite3_finalize","number",["number"]),qb=k("sqlite3_create_function_v2","number","number string number number number number number number number".split(" ")),jc=k("sqlite3_value_type","number",["number"]),mc=k("sqlite3_value_bytes","number",["number"]),lc=k("sqlite3_value_text",
"string",["number"]),nc=k("sqlite3_value_blob","number",["number"]),kc=k("sqlite3_value_double","number",["number"]),gc=k("sqlite3_result_double","",["number","number"]),ib=k("sqlite3_result_null","",["number"]),hc=k("sqlite3_result_text","",["number","string","number","number"]),ic=k("sqlite3_result_blob","",["number","number","number","number"]),fc=k("sqlite3_result_int","",["number","number"]),xa=k("sqlite3_result_error","",["number","string","number"]),rb=k("sqlite3_aggregate_context","number",
["number","number"]),lb=k("RegisterExtensionFunctions","number",["number"]);c.prototype.bind=function(g){if(!this.Ka)throw"Statement closed";this.reset();return Array.isArray(g)?this.vb(g):null!=g&&"object"===typeof g?this.wb(g):!0};c.prototype.step=function(){if(!this.Ka)throw"Statement closed";this.Ia=1;var g=tc(this.Ka);switch(g){case 100:return!0;case 101:return!1;default:throw this.db.handleError(g);}};c.prototype.qb=function(g){null==g&&(g=this.Ia,this.Ia+=1);return xc(this.Ka,g)};c.prototype.zb=
function(g){null==g&&(g=this.Ia,this.Ia+=1);g=pb(this.Ka,g);if("function"!==typeof BigInt)throw Error("BigInt is not supported");return BigInt(g)};c.prototype.Ab=function(g){null==g&&(g=this.Ia,this.Ia+=1);return pb(this.Ka,g)};c.prototype.getBlob=function(g){null==g&&(g=this.Ia,this.Ia+=1);var l=zc(this.Ka,g);g=yc(this.Ka,g);for(var n=new Uint8Array(l),t=0;t<l;t+=1)n[t]=p[g+t];return n};c.prototype.get=function(g,l){l=l||{};null!=g&&this.bind(g)&&this.step();g=[];for(var n=wc(this.Ka),t=0;t<n;t+=
1)switch(Ac(this.Ka,t)){case 1:var w=l.useBigInt?this.zb(t):this.qb(t);g.push(w);break;case 2:g.push(this.qb(t));break;case 3:g.push(this.Ab(t));break;case 4:g.push(this.getBlob(t));break;default:g.push(null)}return g};c.prototype.getColumnNames=function(){for(var g=[],l=vc(this.Ka),n=0;n<l;n+=1)g.push(Bc(this.Ka,n));return g};c.prototype.getAsObject=function(g,l){g=this.get(g,l);l=this.getColumnNames();for(var n={},t=0;t<l.length;t+=1)n[l[t]]=g[t];return n};c.prototype.getSQL=function(){return mb(this.Ka)};
c.prototype.getNormalizedSQL=function(){return oc(this.Ka)};c.prototype.run=function(g){null!=g&&this.bind(g);this.step();return this.reset()};c.prototype.mb=function(g,l){null==l&&(l=this.Ia,this.Ia+=1);g=qa(g);var n=da(g,ea);this.eb.push(n);this.db.handleError(pc(this.Ka,l,n,g.length-1,0))};c.prototype.ub=function(g,l){null==l&&(l=this.Ia,this.Ia+=1);var n=da(g,ea);this.eb.push(n);this.db.handleError(ob(this.Ka,l,n,g.length,0))};c.prototype.lb=function(g,l){null==l&&(l=this.Ia,this.Ia+=1);this.db.handleError((g===
(g|0)?rc:qc)(this.Ka,l,g))};c.prototype.xb=function(g){null==g&&(g=this.Ia,this.Ia+=1);ob(this.Ka,g,0,0,0)};c.prototype.nb=function(g,l){null==l&&(l=this.Ia,this.Ia+=1);switch(typeof g){case "string":this.mb(g,l);return;case "number":this.lb(g,l);return;case "bigint":this.mb(g.toString(),l);return;case "boolean":this.lb(g+0,l);return;case "object":if(null===g){this.xb(l);return}if(null!=g.length){this.ub(g,l);return}}throw"Wrong API use : tried to bind a value of an unknown type ("+g+").";};c.prototype.wb=
function(g){var l=this;Object.keys(g).forEach(function(n){var t=sc(l.Ka,n);0!==t&&l.nb(g[n],t)});return!0};c.prototype.vb=function(g){for(var l=0;l<g.length;l+=1)this.nb(g[l],l+1);return!0};c.prototype.reset=function(){this.freemem();return 0===Dc(this.Ka)&&0===Cc(this.Ka)};c.prototype.freemem=function(){for(var g;void 0!==(g=this.eb.pop());)fa(g)};c.prototype.free=function(){this.freemem();var g=0===Ec(this.Ka);delete this.db.Ya[this.Ka];this.Ka=0;return g};d.prototype.next=function(){if(null===
this.Xa)return{done:!0};null!==this.Ta&&(this.Ta.free(),this.Ta=null);if(!this.db.db)throw this.fb(),Error("Database closed");var g=ra(),l=y(4);sa(h);sa(l);try{this.db.handleError(nb(this.db.db,this.cb,-1,h,l));this.cb=m(l,"i32");var n=m(h,"i32");if(0===n)return this.fb(),{done:!0};this.Ta=new c(n,this.db);this.db.Ya[n]=this.Ta;return{value:this.Ta,done:!1}}catch(t){throw this.hb=ta(this.cb),this.fb(),t;}finally{ua(g)}};d.prototype.fb=function(){fa(this.Xa);this.Xa=null};d.prototype.getRemainingSQL=
function(){return null!==this.hb?this.hb:ta(this.cb)};"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator&&(d.prototype[Symbol.iterator]=function(){return this});e.prototype.run=function(g,l){if(!this.db)throw"Database closed";if(l){g=this.prepare(g,l);try{g.step()}finally{g.free()}}else this.handleError(v(this.db,g,0,0,h));return this};e.prototype.exec=function(g,l,n){if(!this.db)throw"Database closed";var t=ra(),w=null;try{var A=va(g),N=y(4);for(g=[];0!==m(A,"i8");){sa(h);sa(N);this.handleError(nb(this.db,
A,-1,h,N));var M=m(h,"i32");A=m(N,"i32");if(0!==M){var K=null;w=new c(M,this);for(null!=l&&w.bind(l);w.step();)null===K&&(K={columns:w.getColumnNames(),values:[]},g.push(K)),K.values.push(w.get(null,n));w.free()}}return g}catch(O){throw w&&w.free(),O;}finally{ua(t)}};e.prototype.each=function(g,l,n,t,w){"function"===typeof l&&(t=n,n=l,l=void 0);g=this.prepare(g,l);try{for(;g.step();)n(g.getAsObject(null,w))}finally{g.free()}if("function"===typeof t)return t()};e.prototype.prepare=function(g,l){sa(h);
this.handleError(H(this.db,g,-1,h,0));g=m(h,"i32");if(0===g)throw"Nothing to prepare";var n=new c(g,this);null!=l&&n.bind(l);return this.Ya[g]=n};e.prototype.iterateStatements=function(g){return new d(g,this)};e.prototype["export"]=function(){Object.values(this.Ya).forEach(function(l){l.free()});Object.values(this.Ma).forEach(wa);this.Ma={};this.handleError(z(this.db));var g=ya(this.filename);this.handleError(r(this.filename,h));this.db=m(h,"i32");lb(this.db);return g};e.prototype.close=function(){null!==
this.db&&(Object.values(this.Ya).forEach(function(g){g.free()}),Object.values(this.Ma).forEach(wa),this.Ma={},this.handleError(z(this.db)),za("/"+this.filename),this.db=null)};e.prototype.handleError=function(g){if(0===g)return null;g=uc(this.db);throw Error(g);};e.prototype.getRowsModified=function(){return E(this.db)};e.prototype.create_function=function(g,l){Object.prototype.hasOwnProperty.call(this.Ma,g)&&(wa(this.Ma[g]),delete this.Ma[g]);var n=Aa(function(t,w,A){w=b(w,A);try{var N=l.apply(null,
w)}catch(M){xa(t,M,-1);return}a(t,N)},"viii");this.Ma[g]=n;this.handleError(qb(this.db,g,l.length,1,0,n,0,0,0));return this};e.prototype.create_aggregate=function(g,l){var n=l.init||function(){return null},t=l.finalize||function(K){return K},w=l.step;if(!w)throw"An aggregate function must have a step function in "+g;var A={};Object.hasOwnProperty.call(this.Ma,g)&&(wa(this.Ma[g]),delete this.Ma[g]);l=g+"__finalize";Object.hasOwnProperty.call(this.Ma,l)&&(wa(this.Ma[l]),delete this.Ma[l]);var N=Aa(function(K,
O,Ra){var Y=rb(K,1);Object.hasOwnProperty.call(A,Y)||(A[Y]=n());O=b(O,Ra);O=[A[Y]].concat(O);try{A[Y]=w.apply(null,O)}catch(Gc){delete A[Y],xa(K,Gc,-1)}},"viii"),M=Aa(function(K){var O=rb(K,1);try{var Ra=t(A[O])}catch(Y){delete A[O];xa(K,Y,-1);return}a(K,Ra);delete A[O]},"vi");this.Ma[g]=N;this.Ma[l]=M;this.handleError(qb(this.db,g,w.length-1,1,0,0,N,M,0));return this};f.Database=e};var Ba=Object.assign({},f),Ca="./this.program",B="",Da,Ea;
if(ca){var fs=require("fs"),Fa=require("path");B=__dirname+"/";Ea=a=>{a=Ga(a)?new URL(a):Fa.normalize(a);return fs.readFileSync(a)};Da=a=>{a=Ga(a)?new URL(a):Fa.normalize(a);return new Promise((b,c)=>{fs.readFile(a,void 0,(d,e)=>{d?c(d):b(e.buffer)})})};!f.thisProgram&&1<process.argv.length&&(Ca=process.argv[1].replace(/\\/g,"/"));process.argv.slice(2);"undefined"!=typeof module&&(module.exports=f)}else if(aa||ba)ba?B=self.location.href:"undefined"!=typeof document&&document.currentScript&&(B=document.currentScript.src),
B=B.startsWith("blob:")?"":B.substr(0,B.replace(/[?#].*/,"").lastIndexOf("/")+1),ba&&(Ea=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),Da=a=>Ga(a)?new Promise((b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{(200==d.status||0==d.status&&d.response)&&c(d.response);b(d.status)};d.onerror=b;d.send(null)}):fetch(a,{credentials:"same-origin"}).then(b=>b.ok?b.arrayBuffer():Promise.reject(Error(b.status+
" : "+b.url)));var Ha=f.print||console.log.bind(console),C=f.printErr||console.error.bind(console);Object.assign(f,Ba);Ba=null;f.thisProgram&&(Ca=f.thisProgram);var Ia;f.wasmBinary&&(Ia=f.wasmBinary);var Ja,Ka=!1,p,u,La,D,F,Ma,Na;
function Oa(){var a=Ja.buffer;f.HEAP8=p=new Int8Array(a);f.HEAP16=La=new Int16Array(a);f.HEAPU8=u=new Uint8Array(a);f.HEAPU16=new Uint16Array(a);f.HEAP32=D=new Int32Array(a);f.HEAPU32=F=new Uint32Array(a);f.HEAPF32=Ma=new Float32Array(a);f.HEAPF64=Na=new Float64Array(a)}var Pa=[],Qa=[],Sa=[];function Ta(){var a=f.preRun.shift();Pa.unshift(a)}var Ua=0,Va=null,Wa=null;
function G(a){f.onAbort?.(a);a="Aborted("+a+")";C(a);Ka=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}var Xa=a=>a.startsWith("data:application/octet-stream;base64,"),Ga=a=>a.startsWith("file://"),Ya;function Za(a){if(a==Ya&&Ia)return new Uint8Array(Ia);if(Ea)return Ea(a);throw"both async and sync fetching of the wasm failed";}function $a(a){return Ia?Promise.resolve().then(()=>Za(a)):Da(a).then(b=>new Uint8Array(b),()=>Za(a))}
function ab(a,b,c){return $a(a).then(d=>WebAssembly.instantiate(d,b)).then(c,d=>{C(`failed to asynchronously prepare wasm: ${d}`);G(d)})}function bb(a,b){var c=Ya;Ia||"function"!=typeof WebAssembly.instantiateStreaming||Xa(c)||Ga(c)||ca||"function"!=typeof fetch?ab(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){C(`wasm streaming compile failed: ${e}`);C("falling back to ArrayBuffer instantiation");return ab(c,a,b)}))}
var I,J,cb=a=>{for(;0<a.length;)a.shift()(f)};function m(a,b="i8"){b.endsWith("*")&&(b="*");switch(b){case "i1":return p[a];case "i8":return p[a];case "i16":return La[a>>1];case "i32":return D[a>>2];case "i64":G("to do getValue(i64) use WASM_BIGINT");case "float":return Ma[a>>2];case "double":return Na[a>>3];case "*":return F[a>>2];default:G(`invalid type for getValue: ${b}`)}}
function sa(a){var b="i32";b.endsWith("*")&&(b="*");switch(b){case "i1":p[a]=0;break;case "i8":p[a]=0;break;case "i16":La[a>>1]=0;break;case "i32":D[a>>2]=0;break;case "i64":G("to do setValue(i64) use WASM_BIGINT");case "float":Ma[a>>2]=0;break;case "double":Na[a>>3]=0;break;case "*":F[a>>2]=0;break;default:G(`invalid type for setValue: ${b}`)}}
var db="undefined"!=typeof TextDecoder?new TextDecoder:void 0,L=(a,b,c)=>{var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&db)return db.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var k=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|k:(e&7)<<18|h<<12|k<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},ta=(a,
b)=>a?L(u,a,b):"",eb=(a,b)=>{for(var c=0,d=a.length-1;0<=d;d--){var e=a[d];"."===e?a.splice(d,1):".."===e?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c;c--)a.unshift("..");return a},x=a=>{var b="/"===a.charAt(0),c="/"===a.substr(-1);(a=eb(a.split("/").filter(d=>!!d),!b).join("/"))||b||(a=".");a&&c&&(a+="/");return(b?"/":"")+a},fb=a=>{var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&=b.substr(0,b.length-1);return a+
b},gb=a=>{if("/"===a)return"/";a=x(a);a=a.replace(/\/$/,"");var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)},hb=()=>{if("object"==typeof crypto&&"function"==typeof crypto.getRandomValues)return c=>crypto.getRandomValues(c);if(ca)try{var a=require("crypto");if(a.randomFillSync)return c=>a.randomFillSync(c);var b=a.randomBytes;return c=>(c.set(b(c.byteLength)),c)}catch(c){}G("initRandomDevice")},jb=a=>(jb=hb())(a),kb=(...a)=>{for(var b="",c=!1,d=a.length-1;-1<=d&&!c;d--){c=0<=d?a[d]:"/";if("string"!=
typeof c)throw new TypeError("Arguments to path.resolve must be strings");if(!c)return"";b=c+"/"+b;c="/"===c.charAt(0)}b=eb(b.split("/").filter(e=>!!e),!c).join("/");return(c?"/":"")+b||"."},sb=[],ha=a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b},q=(a,b,c,d)=>{if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var k=a.charCodeAt(h);if(55296<=k&&57343>=k){var r=a.charCodeAt(++h);k=65536+((k&1023)<<10)|r&1023}if(127>=
k){if(c>=d)break;b[c++]=k}else{if(2047>=k){if(c+1>=d)break;b[c++]=192|k>>6}else{if(65535>=k){if(c+2>=d)break;b[c++]=224|k>>12}else{if(c+3>=d)break;b[c++]=240|k>>18;b[c++]=128|k>>12&63}b[c++]=128|k>>6&63}b[c++]=128|k&63}}b[c]=0;return c-e};function qa(a,b){var c=Array(ha(a)+1);a=q(a,c,0,c.length);b&&(c.length=a);return c}var tb=[];function ub(a,b){tb[a]={input:[],output:[],Wa:b};vb(a,wb)}
var wb={open(a){var b=tb[a.node.rdev];if(!b)throw new P(43);a.tty=b;a.seekable=!1},close(a){a.tty.Wa.fsync(a.tty)},fsync(a){a.tty.Wa.fsync(a.tty)},read(a,b,c,d){if(!a.tty||!a.tty.Wa.rb)throw new P(60);for(var e=0,h=0;h<d;h++){try{var k=a.tty.Wa.rb(a.tty)}catch(r){throw new P(29);}if(void 0===k&&0===e)throw new P(6);if(null===k||void 0===k)break;e++;b[c+h]=k}e&&(a.node.timestamp=Date.now());return e},write(a,b,c,d){if(!a.tty||!a.tty.Wa.ib)throw new P(60);try{for(var e=0;e<d;e++)a.tty.Wa.ib(a.tty,b[c+
e])}catch(h){throw new P(29);}d&&(a.node.timestamp=Date.now());return e}},xb={rb(){a:{if(!sb.length){var a=null;if(ca){var b=Buffer.alloc(256),c=0,d=process.stdin.fd;try{c=fs.readSync(d,b,0,256)}catch(e){if(e.toString().includes("EOF"))c=0;else throw e;}0<c&&(a=b.slice(0,c).toString("utf-8"))}else"undefined"!=typeof window&&"function"==typeof window.prompt&&(a=window.prompt("Input: "),null!==a&&(a+="\n"));if(!a){a=null;break a}sb=qa(a,!0)}a=sb.shift()}return a},ib(a,b){null===b||10===b?(Ha(L(a.output,
0)),a.output=[]):0!=b&&a.output.push(b)},fsync(a){a.output&&0<a.output.length&&(Ha(L(a.output,0)),a.output=[])},Lb(){return{Gb:25856,Ib:5,Fb:191,Hb:35387,Eb:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Mb(){return 0},Nb(){return[24,80]}},yb={ib(a,b){null===b||10===b?(C(L(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},fsync(a){a.output&&0<a.output.length&&(C(L(a.output,0)),a.output=[])}};
function zb(a,b){var c=a.Ha?a.Ha.length:0;c>=b||(b=Math.max(b,c*(1048576>c?2:1.125)>>>0),0!=c&&(b=Math.max(b,256)),c=a.Ha,a.Ha=new Uint8Array(b),0<a.La&&a.Ha.set(c.subarray(0,a.La),0))}
var Q={Pa:null,Qa(){return Q.createNode(null,"/",16895,0)},createNode(a,b,c,d){if(24576===(c&61440)||4096===(c&61440))throw new P(63);Q.Pa||(Q.Pa={dir:{node:{Oa:Q.Fa.Oa,Na:Q.Fa.Na,lookup:Q.Fa.lookup,$a:Q.Fa.$a,rename:Q.Fa.rename,unlink:Q.Fa.unlink,rmdir:Q.Fa.rmdir,readdir:Q.Fa.readdir,symlink:Q.Fa.symlink},stream:{Sa:Q.Ga.Sa}},file:{node:{Oa:Q.Fa.Oa,Na:Q.Fa.Na},stream:{Sa:Q.Ga.Sa,read:Q.Ga.read,write:Q.Ga.write,kb:Q.Ga.kb,ab:Q.Ga.ab,bb:Q.Ga.bb}},link:{node:{Oa:Q.Fa.Oa,Na:Q.Fa.Na,readlink:Q.Fa.readlink},
stream:{}},ob:{node:{Oa:Q.Fa.Oa,Na:Q.Fa.Na},stream:Ab}});c=Bb(a,b,c,d);R(c.mode)?(c.Fa=Q.Pa.dir.node,c.Ga=Q.Pa.dir.stream,c.Ha={}):32768===(c.mode&61440)?(c.Fa=Q.Pa.file.node,c.Ga=Q.Pa.file.stream,c.La=0,c.Ha=null):40960===(c.mode&61440)?(c.Fa=Q.Pa.link.node,c.Ga=Q.Pa.link.stream):8192===(c.mode&61440)&&(c.Fa=Q.Pa.ob.node,c.Ga=Q.Pa.ob.stream);c.timestamp=Date.now();a&&(a.Ha[b]=c,a.timestamp=c.timestamp);return c},Kb(a){return a.Ha?a.Ha.subarray?a.Ha.subarray(0,a.La):new Uint8Array(a.Ha):new Uint8Array(0)},
Fa:{Oa(a){var b={};b.dev=8192===(a.mode&61440)?a.id:1;b.ino=a.id;b.mode=a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;R(a.mode)?b.size=4096:32768===(a.mode&61440)?b.size=a.La:40960===(a.mode&61440)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);b.ctime=new Date(a.timestamp);b.yb=4096;b.blocks=Math.ceil(b.size/b.yb);return b},Na(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);if(void 0!==b.size&&(b=b.size,a.La!=b))if(0==
b)a.Ha=null,a.La=0;else{var c=a.Ha;a.Ha=new Uint8Array(b);c&&a.Ha.set(c.subarray(0,Math.min(b,a.La)));a.La=b}},lookup(){throw Cb[44];},$a(a,b,c,d){return Q.createNode(a,b,c,d)},rename(a,b,c){if(R(a.mode)){try{var d=Db(b,c)}catch(h){}if(d)for(var e in d.Ha)throw new P(55);}delete a.parent.Ha[a.name];a.parent.timestamp=Date.now();a.name=c;b.Ha[c]=a;b.timestamp=a.parent.timestamp},unlink(a,b){delete a.Ha[b];a.timestamp=Date.now()},rmdir(a,b){var c=Db(a,b),d;for(d in c.Ha)throw new P(55);delete a.Ha[b];
a.timestamp=Date.now()},readdir(a){var b=[".",".."],c;for(c of Object.keys(a.Ha))b.push(c);return b},symlink(a,b,c){a=Q.createNode(a,b,41471,0);a.link=c;return a},readlink(a){if(40960!==(a.mode&61440))throw new P(28);return a.link}},Ga:{read(a,b,c,d,e){var h=a.node.Ha;if(e>=a.node.La)return 0;a=Math.min(a.node.La-e,d);if(8<a&&h.subarray)b.set(h.subarray(e,e+a),c);else for(d=0;d<a;d++)b[c+d]=h[e+d];return a},write(a,b,c,d,e,h){b.buffer===p.buffer&&(h=!1);if(!d)return 0;a=a.node;a.timestamp=Date.now();
if(b.subarray&&(!a.Ha||a.Ha.subarray)){if(h)return a.Ha=b.subarray(c,c+d),a.La=d;if(0===a.La&&0===e)return a.Ha=b.slice(c,c+d),a.La=d;if(e+d<=a.La)return a.Ha.set(b.subarray(c,c+d),e),d}zb(a,e+d);if(a.Ha.subarray&&b.subarray)a.Ha.set(b.subarray(c,c+d),e);else for(h=0;h<d;h++)a.Ha[e+h]=b[c+h];a.La=Math.max(a.La,e+d);return d},Sa(a,b,c){1===c?b+=a.position:2===c&&32768===(a.node.mode&61440)&&(b+=a.node.La);if(0>b)throw new P(28);return b},kb(a,b,c){zb(a.node,b+c);a.node.La=Math.max(a.node.La,b+c)},
ab(a,b,c,d,e){if(32768!==(a.node.mode&61440))throw new P(43);a=a.node.Ha;if(e&2||a.buffer!==p.buffer){if(0<c||c+b<a.length)a.subarray?a=a.subarray(c,c+b):a=Array.prototype.slice.call(a,c,c+b);c=!0;b=65536*Math.ceil(b/65536);(e=Eb(65536,b))?(u.fill(0,e,e+b),b=e):b=0;if(!b)throw new P(48);p.set(a,b)}else c=!1,b=a.byteOffset;return{Cb:b,tb:c}},bb(a,b,c,d){Q.Ga.write(a,b,0,d,c,!1);return 0}}},ka=(a,b)=>{var c=0;a&&(c|=365);b&&(c|=146);return c},Fb=null,Gb={},Hb=[],Ib=1,S=null,Jb=!0,P=class{constructor(a){this.name=
"ErrnoError";this.Ja=a}},Cb={},Kb=class{constructor(){this.Za={};this.node=null}get flags(){return this.Za.flags}set flags(a){this.Za.flags=a}get position(){return this.Za.position}set position(a){this.Za.position=a}},Lb=class{constructor(a,b,c,d){a||=this;this.parent=a;this.Qa=a.Qa;this.Ua=null;this.id=Ib++;this.name=b;this.mode=c;this.Fa={};this.Ga={};this.rdev=d}get read(){return 365===(this.mode&365)}set read(a){a?this.mode|=365:this.mode&=-366}get write(){return 146===(this.mode&146)}set write(a){a?
this.mode|=146:this.mode&=-147}};function T(a,b={}){a=kb(a);if(!a)return{path:"",node:null};b=Object.assign({pb:!0,jb:0},b);if(8<b.jb)throw new P(32);a=a.split("/").filter(k=>!!k);for(var c=Fb,d="/",e=0;e<a.length;e++){var h=e===a.length-1;if(h&&b.parent)break;c=Db(c,a[e]);d=x(d+"/"+a[e]);c.Ua&&(!h||h&&b.pb)&&(c=c.Ua.root);if(!h||b.Ra)for(h=0;40960===(c.mode&61440);)if(c=Mb(d),d=kb(fb(d),c),c=T(d,{jb:b.jb+1}).node,40<h++)throw new P(32);}return{path:d,node:c}}
function ja(a){for(var b;;){if(a===a.parent)return a=a.Qa.sb,b?"/"!==a[a.length-1]?`${a}/${b}`:a+b:a;b=b?`${a.name}/${b}`:a.name;a=a.parent}}function Nb(a,b){for(var c=0,d=0;d<b.length;d++)c=(c<<5)-c+b.charCodeAt(d)|0;return(a+c>>>0)%S.length}function Ob(a){var b=Nb(a.parent.id,a.name);if(S[b]===a)S[b]=a.Va;else for(b=S[b];b;){if(b.Va===a){b.Va=a.Va;break}b=b.Va}}
function Db(a,b){var c=R(a.mode)?(c=Pb(a,"x"))?c:a.Fa.lookup?0:2:54;if(c)throw new P(c);for(c=S[Nb(a.id,b)];c;c=c.Va){var d=c.name;if(c.parent.id===a.id&&d===b)return c}return a.Fa.lookup(a,b)}function Bb(a,b,c,d){a=new Lb(a,b,c,d);b=Nb(a.parent.id,a.name);a.Va=S[b];return S[b]=a}function R(a){return 16384===(a&61440)}function Qb(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b}
function Pb(a,b){if(Jb)return 0;if(!b.includes("r")||a.mode&292){if(b.includes("w")&&!(a.mode&146)||b.includes("x")&&!(a.mode&73))return 2}else return 2;return 0}function Rb(a,b){try{return Db(a,b),20}catch(c){}return Pb(a,"wx")}function Sb(a,b,c){try{var d=Db(a,b)}catch(e){return e.Ja}if(a=Pb(a,"wx"))return a;if(c){if(!R(d.mode))return 54;if(d===d.parent||"/"===ja(d))return 10}else if(R(d.mode))return 31;return 0}function U(a){a=Hb[a];if(!a)throw new P(8);return a}
function Tb(a,b=-1){a=Object.assign(new Kb,a);if(-1==b)a:{for(b=0;4096>=b;b++)if(!Hb[b])break a;throw new P(33);}a.fd=b;return Hb[b]=a}function Ub(a,b=-1){a=Tb(a,b);a.Ga?.Jb?.(a);return a}var Ab={open(a){a.Ga=Gb[a.node.rdev].Ga;a.Ga.open?.(a)},Sa(){throw new P(70);}};function vb(a,b){Gb[a]={Ga:b}}
function Vb(a,b){var c="/"===b;if(c&&Fb)throw new P(10);if(!c&&b){var d=T(b,{pb:!1});b=d.path;d=d.node;if(d.Ua)throw new P(10);if(!R(d.mode))throw new P(54);}b={type:a,Ob:{},sb:b,Bb:[]};a=a.Qa(b);a.Qa=b;b.root=a;c?Fb=a:d&&(d.Ua=b,d.Qa&&d.Qa.Bb.push(b))}function la(a,b,c){var d=T(a,{parent:!0}).node;a=gb(a);if(!a||"."===a||".."===a)throw new P(28);var e=Rb(d,a);if(e)throw new P(e);if(!d.Fa.$a)throw new P(63);return d.Fa.$a(d,a,b,c)}function V(a,b){return la(a,(void 0!==b?b:511)&1023|16384,0)}
function Wb(a,b,c){"undefined"==typeof c&&(c=b,b=438);la(a,b|8192,c)}function Xb(a,b){if(!kb(a))throw new P(44);var c=T(b,{parent:!0}).node;if(!c)throw new P(44);b=gb(b);var d=Rb(c,b);if(d)throw new P(d);if(!c.Fa.symlink)throw new P(63);c.Fa.symlink(c,b,a)}function Yb(a){var b=T(a,{parent:!0}).node;a=gb(a);var c=Db(b,a),d=Sb(b,a,!0);if(d)throw new P(d);if(!b.Fa.rmdir)throw new P(63);if(c.Ua)throw new P(10);b.Fa.rmdir(b,a);Ob(c)}
function za(a){var b=T(a,{parent:!0}).node;if(!b)throw new P(44);a=gb(a);var c=Db(b,a),d=Sb(b,a,!1);if(d)throw new P(d);if(!b.Fa.unlink)throw new P(63);if(c.Ua)throw new P(10);b.Fa.unlink(b,a);Ob(c)}function Mb(a){a=T(a).node;if(!a)throw new P(44);if(!a.Fa.readlink)throw new P(28);return kb(ja(a.parent),a.Fa.readlink(a))}function Zb(a,b){a=T(a,{Ra:!b}).node;if(!a)throw new P(44);if(!a.Fa.Oa)throw new P(63);return a.Fa.Oa(a)}function $b(a){return Zb(a,!0)}
function ma(a,b){a="string"==typeof a?T(a,{Ra:!0}).node:a;if(!a.Fa.Na)throw new P(63);a.Fa.Na(a,{mode:b&4095|a.mode&-4096,timestamp:Date.now()})}function ac(a,b){if(0>b)throw new P(28);a="string"==typeof a?T(a,{Ra:!0}).node:a;if(!a.Fa.Na)throw new P(63);if(R(a.mode))throw new P(31);if(32768!==(a.mode&61440))throw new P(28);var c=Pb(a,"w");if(c)throw new P(c);a.Fa.Na(a,{size:b,timestamp:Date.now()})}
function na(a,b,c){if(""===a)throw new P(44);if("string"==typeof b){var d={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[b];if("undefined"==typeof d)throw Error(`Unknown file open mode: ${b}`);b=d}c=b&64?("undefined"==typeof c?438:c)&4095|32768:0;if("object"==typeof a)var e=a;else{a=x(a);try{e=T(a,{Ra:!(b&131072)}).node}catch(h){}}d=!1;if(b&64)if(e){if(b&128)throw new P(20);}else e=la(a,c,0),d=!0;if(!e)throw new P(44);8192===(e.mode&61440)&&(b&=-513);if(b&65536&&!R(e.mode))throw new P(54);if(!d&&(c=
e?40960===(e.mode&61440)?32:R(e.mode)&&("r"!==Qb(b)||b&512)?31:Pb(e,Qb(b)):44))throw new P(c);b&512&&!d&&ac(e,0);b&=-131713;e=Tb({node:e,path:ja(e),flags:b,seekable:!0,position:0,Ga:e.Ga,Db:[],error:!1});e.Ga.open&&e.Ga.open(e);!f.logReadFiles||b&1||(bc||={},a in bc||(bc[a]=1));return e}function pa(a){if(null===a.fd)throw new P(8);a.gb&&(a.gb=null);try{a.Ga.close&&a.Ga.close(a)}catch(b){throw b;}finally{Hb[a.fd]=null}a.fd=null}
function cc(a,b,c){if(null===a.fd)throw new P(8);if(!a.seekable||!a.Ga.Sa)throw new P(70);if(0!=c&&1!=c&&2!=c)throw new P(28);a.position=a.Ga.Sa(a,b,c);a.Db=[]}function dc(a,b,c,d,e){if(0>d||0>e)throw new P(28);if(null===a.fd)throw new P(8);if(1===(a.flags&2097155))throw new P(8);if(R(a.node.mode))throw new P(31);if(!a.Ga.read)throw new P(28);var h="undefined"!=typeof e;if(!h)e=a.position;else if(!a.seekable)throw new P(70);b=a.Ga.read(a,b,c,d,e);h||(a.position+=b);return b}
function oa(a,b,c,d,e){if(0>d||0>e)throw new P(28);if(null===a.fd)throw new P(8);if(0===(a.flags&2097155))throw new P(8);if(R(a.node.mode))throw new P(31);if(!a.Ga.write)throw new P(28);a.seekable&&a.flags&1024&&cc(a,0,2);var h="undefined"!=typeof e;if(!h)e=a.position;else if(!a.seekable)throw new P(70);b=a.Ga.write(a,b,c,d,e,void 0);h||(a.position+=b);return b}
function ya(a){var b="binary";if("utf8"!==b&&"binary"!==b)throw Error(`Invalid encoding type "${b}"`);var c;var d=na(a,d||0);a=Zb(a).size;var e=new Uint8Array(a);dc(d,e,0,a,0);"utf8"===b?c=L(e,0):"binary"===b&&(c=e);pa(d);return c}var ec;
function Fc(a,b,c){a=x("/dev/"+a);var d=ka(!!b,!!c);Hc||=64;var e=Hc++<<8|0;vb(e,{open(h){h.seekable=!1},close(){c?.buffer?.length&&c(10)},read(h,k,r,z){for(var v=0,E=0;E<z;E++){try{var H=b()}catch(mb){throw new P(29);}if(void 0===H&&0===v)throw new P(6);if(null===H||void 0===H)break;v++;k[r+E]=H}v&&(h.node.timestamp=Date.now());return v},write(h,k,r,z){for(var v=0;v<z;v++)try{c(k[r+v])}catch(E){throw new P(29);}z&&(h.node.timestamp=Date.now());return v}});Wb(a,d,e)}var Hc,W={},bc;
function Ic(a,b,c){if("/"===b.charAt(0))return b;a=-100===a?"/":U(a).path;if(0==b.length){if(!c)throw new P(44);return a}return x(a+"/"+b)}
function Jc(a,b,c){a=a(b);D[c>>2]=a.dev;D[c+4>>2]=a.mode;F[c+8>>2]=a.nlink;D[c+12>>2]=a.uid;D[c+16>>2]=a.gid;D[c+20>>2]=a.rdev;J=[a.size>>>0,(I=a.size,1<=+Math.abs(I)?0<I?+Math.floor(I/4294967296)>>>0:~~+Math.ceil((I-+(~~I>>>0))/4294967296)>>>0:0)];D[c+24>>2]=J[0];D[c+28>>2]=J[1];D[c+32>>2]=4096;D[c+36>>2]=a.blocks;b=a.atime.getTime();var d=a.mtime.getTime(),e=a.ctime.getTime();J=[Math.floor(b/1E3)>>>0,(I=Math.floor(b/1E3),1<=+Math.abs(I)?0<I?+Math.floor(I/4294967296)>>>0:~~+Math.ceil((I-+(~~I>>>
0))/4294967296)>>>0:0)];D[c+40>>2]=J[0];D[c+44>>2]=J[1];F[c+48>>2]=b%1E3*1E3;J=[Math.floor(d/1E3)>>>0,(I=Math.floor(d/1E3),1<=+Math.abs(I)?0<I?+Math.floor(I/4294967296)>>>0:~~+Math.ceil((I-+(~~I>>>0))/4294967296)>>>0:0)];D[c+56>>2]=J[0];D[c+60>>2]=J[1];F[c+64>>2]=d%1E3*1E3;J=[Math.floor(e/1E3)>>>0,(I=Math.floor(e/1E3),1<=+Math.abs(I)?0<I?+Math.floor(I/4294967296)>>>0:~~+Math.ceil((I-+(~~I>>>0))/4294967296)>>>0:0)];D[c+72>>2]=J[0];D[c+76>>2]=J[1];F[c+80>>2]=e%1E3*1E3;J=[a.ino>>>0,(I=a.ino,1<=+Math.abs(I)?
0<I?+Math.floor(I/4294967296)>>>0:~~+Math.ceil((I-+(~~I>>>0))/4294967296)>>>0:0)];D[c+88>>2]=J[0];D[c+92>>2]=J[1];return 0}var Kc=void 0;function Lc(){var a=D[+Kc>>2];Kc+=4;return a}
var Mc=(a,b)=>b+2097152>>>0<4194305-!!a?(a>>>0)+4294967296*b:NaN,Nc=[0,31,60,91,121,152,182,213,244,274,305,335],Oc=[0,31,59,90,120,151,181,212,243,273,304,334],Pc={},Rc=()=>{if(!Qc){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:Ca||"./this.program"},b;for(b in Pc)void 0===Pc[b]?delete a[b]:a[b]=Pc[b];var c=[];for(b in a)c.push(`${b}=${a[b]}`);Qc=c}return Qc},
Qc,va=a=>{var b=ha(a)+1,c=y(b);q(a,u,c,b);return c},Sc=(a,b,c,d)=>{var e={string:v=>{var E=0;null!==v&&void 0!==v&&0!==v&&(E=va(v));return E},array:v=>{var E=y(v.length);p.set(v,E);return E}};a=f["_"+a];var h=[],k=0;if(d)for(var r=0;r<d.length;r++){var z=e[c[r]];z?(0===k&&(k=ra()),h[r]=z(d[r])):h[r]=d[r]}c=a(...h);return c=function(v){0!==k&&ua(k);return"string"===b?v?L(u,v):"":"boolean"===b?!!v:v}(c)},ea=0,da=(a,b)=>{b=1==b?y(a.length):ia(a.length);a.subarray||a.slice||(a=new Uint8Array(a));u.set(a,
b);return b},Tc,Uc=[],X,wa=a=>{Tc.delete(X.get(a));X.set(a,null);Uc.push(a)},Aa=(a,b)=>{if(!Tc){Tc=new WeakMap;var c=X.length;if(Tc)for(var d=0;d<0+c;d++){var e=X.get(d);e&&Tc.set(e,d)}}if(c=Tc.get(a)||0)return c;if(Uc.length)c=Uc.pop();else{try{X.grow(1)}catch(r){if(!(r instanceof RangeError))throw r;throw"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";}c=X.length-1}try{X.set(c,a)}catch(r){if(!(r instanceof TypeError))throw r;if("function"==typeof WebAssembly.Function){d=WebAssembly.Function;
e={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"};for(var h={parameters:[],results:"v"==b[0]?[]:[e[b[0]]]},k=1;k<b.length;++k)h.parameters.push(e[b[k]]);b=new d(h,a)}else{d=[1];e=b.slice(0,1);b=b.slice(1);h={i:127,p:127,j:126,f:125,d:124,e:111};d.push(96);k=b.length;128>k?d.push(k):d.push(k%128|128,k>>7);for(k=0;k<b.length;++k)d.push(h[b[k]]);"v"==e?d.push(0):d.push(1,h[e]);b=[0,97,115,109,1,0,0,0,1];e=d.length;128>e?b.push(e):b.push(e%128|128,e>>7);b.push(...d);b.push(2,7,1,1,101,1,102,0,
0,7,5,1,1,102,0,0);b=new WebAssembly.Module(new Uint8Array(b));b=(new WebAssembly.Instance(b,{e:{f:a}})).exports.f}X.set(c,b)}Tc.set(a,c);return c};[44].forEach(a=>{Cb[a]=new P(a);Cb[a].stack="<generic error, no stack>"});S=Array(4096);Vb(Q,"/");V("/tmp");V("/home");V("/home/web_user");
(function(){V("/dev");vb(259,{read:()=>0,write:(d,e,h,k)=>k});Wb("/dev/null",259);ub(1280,xb);ub(1536,yb);Wb("/dev/tty",1280);Wb("/dev/tty1",1536);var a=new Uint8Array(1024),b=0,c=()=>{0===b&&(b=jb(a).byteLength);return a[--b]};Fc("random",c);Fc("urandom",c);V("/dev/shm");V("/dev/shm/tmp")})();
(function(){V("/proc");var a=V("/proc/self");V("/proc/self/fd");Vb({Qa(){var b=Bb(a,"fd",16895,73);b.Fa={lookup(c,d){var e=U(+d);c={parent:null,Qa:{sb:"fake"},Fa:{readlink:()=>e.path}};return c.parent=c}};return b}},"/proc/self/fd")})();
var Vc={a:(a,b,c,d)=>{G(`Assertion failed: ${a?L(u,a):""}, at: `+[b?b?L(u,b):"":"unknown filename",c,d?d?L(u,d):"":"unknown function"])},h:function(a,b){try{return a=a?L(u,a):"",ma(a,b),0}catch(c){if("undefined"==typeof W||"ErrnoError"!==c.name)throw c;return-c.Ja}},H:function(a,b,c){try{b=b?L(u,b):"";b=Ic(a,b);if(c&-8)return-28;var d=T(b,{Ra:!0}).node;if(!d)return-44;a="";c&4&&(a+="r");c&2&&(a+="w");c&1&&(a+="x");return a&&Pb(d,a)?-2:0}catch(e){if("undefined"==typeof W||"ErrnoError"!==e.name)throw e;
return-e.Ja}},i:function(a,b){try{var c=U(a);ma(c.node,b);return 0}catch(d){if("undefined"==typeof W||"ErrnoError"!==d.name)throw d;return-d.Ja}},g:function(a){try{var b=U(a).node;var c="string"==typeof b?T(b,{Ra:!0}).node:b;if(!c.Fa.Na)throw new P(63);c.Fa.Na(c,{timestamp:Date.now()});return 0}catch(d){if("undefined"==typeof W||"ErrnoError"!==d.name)throw d;return-d.Ja}},b:function(a,b,c){Kc=c;try{var d=U(a);switch(b){case 0:var e=Lc();if(0>e)break;for(;Hb[e];)e++;return Ub(d,e).fd;case 1:case 2:return 0;
case 3:return d.flags;case 4:return e=Lc(),d.flags|=e,0;case 12:return e=Lc(),La[e+0>>1]=2,0;case 13:case 14:return 0}return-28}catch(h){if("undefined"==typeof W||"ErrnoError"!==h.name)throw h;return-h.Ja}},f:function(a,b){try{var c=U(a);return Jc(Zb,c.path,b)}catch(d){if("undefined"==typeof W||"ErrnoError"!==d.name)throw d;return-d.Ja}},n:function(a,b,c){b=Mc(b,c);try{if(isNaN(b))return 61;var d=U(a);if(0===(d.flags&2097155))throw new P(28);ac(d.node,b);return 0}catch(e){if("undefined"==typeof W||
"ErrnoError"!==e.name)throw e;return-e.Ja}},C:function(a,b){try{if(0===b)return-28;var c=ha("/")+1;if(b<c)return-68;q("/",u,a,b);return c}catch(d){if("undefined"==typeof W||"ErrnoError"!==d.name)throw d;return-d.Ja}},F:function(a,b){try{return a=a?L(u,a):"",Jc($b,a,b)}catch(c){if("undefined"==typeof W||"ErrnoError"!==c.name)throw c;return-c.Ja}},z:function(a,b,c){try{return b=b?L(u,b):"",b=Ic(a,b),b=x(b),"/"===b[b.length-1]&&(b=b.substr(0,b.length-1)),V(b,c),0}catch(d){if("undefined"==typeof W||"ErrnoError"!==
d.name)throw d;return-d.Ja}},E:function(a,b,c,d){try{b=b?L(u,b):"";var e=d&256;b=Ic(a,b,d&4096);return Jc(e?$b:Zb,b,c)}catch(h){if("undefined"==typeof W||"ErrnoError"!==h.name)throw h;return-h.Ja}},x:function(a,b,c,d){Kc=d;try{b=b?L(u,b):"";b=Ic(a,b);var e=d?Lc():0;return na(b,c,e).fd}catch(h){if("undefined"==typeof W||"ErrnoError"!==h.name)throw h;return-h.Ja}},v:function(a,b,c,d){try{b=b?L(u,b):"";b=Ic(a,b);if(0>=d)return-28;var e=Mb(b),h=Math.min(d,ha(e)),k=p[c+h];q(e,u,c,d+1);p[c+h]=k;return h}catch(r){if("undefined"==
typeof W||"ErrnoError"!==r.name)throw r;return-r.Ja}},u:function(a){try{return a=a?L(u,a):"",Yb(a),0}catch(b){if("undefined"==typeof W||"ErrnoError"!==b.name)throw b;return-b.Ja}},G:function(a,b){try{return a=a?L(u,a):"",Jc(Zb,a,b)}catch(c){if("undefined"==typeof W||"ErrnoError"!==c.name)throw c;return-c.Ja}},r:function(a,b,c){try{return b=b?L(u,b):"",b=Ic(a,b),0===c?za(b):512===c?Yb(b):G("Invalid flags passed to unlinkat"),0}catch(d){if("undefined"==typeof W||"ErrnoError"!==d.name)throw d;return-d.Ja}},
q:function(a,b,c){try{b=b?L(u,b):"";b=Ic(a,b,!0);if(c){var d=F[c>>2]+4294967296*D[c+4>>2],e=D[c+8>>2];h=1E3*d+e/1E6;c+=16;d=F[c>>2]+4294967296*D[c+4>>2];e=D[c+8>>2];k=1E3*d+e/1E6}else var h=Date.now(),k=h;a=h;var r=T(b,{Ra:!0}).node;r.Fa.Na(r,{timestamp:Math.max(a,k)});return 0}catch(z){if("undefined"==typeof W||"ErrnoError"!==z.name)throw z;return-z.Ja}},l:function(a,b,c){a=new Date(1E3*Mc(a,b));D[c>>2]=a.getSeconds();D[c+4>>2]=a.getMinutes();D[c+8>>2]=a.getHours();D[c+12>>2]=a.getDate();D[c+16>>
2]=a.getMonth();D[c+20>>2]=a.getFullYear()-1900;D[c+24>>2]=a.getDay();b=a.getFullYear();D[c+28>>2]=(0!==b%4||0===b%100&&0!==b%400?Oc:Nc)[a.getMonth()]+a.getDate()-1|0;D[c+36>>2]=-(60*a.getTimezoneOffset());b=(new Date(a.getFullYear(),6,1)).getTimezoneOffset();var d=(new Date(a.getFullYear(),0,1)).getTimezoneOffset();D[c+32>>2]=(b!=d&&a.getTimezoneOffset()==Math.min(d,b))|0},j:function(a,b,c,d,e,h,k,r){e=Mc(e,h);try{if(isNaN(e))return 61;var z=U(d);if(0!==(b&2)&&0===(c&2)&&2!==(z.flags&2097155))throw new P(2);
if(1===(z.flags&2097155))throw new P(2);if(!z.Ga.ab)throw new P(43);var v=z.Ga.ab(z,a,e,b,c);var E=v.Cb;D[k>>2]=v.tb;F[r>>2]=E;return 0}catch(H){if("undefined"==typeof W||"ErrnoError"!==H.name)throw H;return-H.Ja}},k:function(a,b,c,d,e,h,k){h=Mc(h,k);try{var r=U(e);if(c&2){if(32768!==(r.node.mode&61440))throw new P(43);if(!(d&2)){var z=u.slice(a,a+b);r.Ga.bb&&r.Ga.bb(r,z,h,b,d)}}}catch(v){if("undefined"==typeof W||"ErrnoError"!==v.name)throw v;return-v.Ja}},y:(a,b,c,d)=>{var e=(new Date).getFullYear(),
h=(new Date(e,0,1)).getTimezoneOffset();e=(new Date(e,6,1)).getTimezoneOffset();F[a>>2]=60*Math.max(h,e);D[b>>2]=Number(h!=e);b=k=>{var r=Math.abs(k);return`UTC${0<=k?"-":"+"}${String(Math.floor(r/60)).padStart(2,"0")}${String(r%60).padStart(2,"0")}`};a=b(h);b=b(e);e<h?(q(a,u,c,17),q(b,u,d,17)):(q(a,u,d,17),q(b,u,c,17))},d:()=>Date.now(),s:()=>2147483648,c:()=>performance.now(),o:a=>{var b=u.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=
Math;d=Math.max(a,d);a:{e=(e.min.call(e,2147483648,d+(65536-d%65536)%65536)-Ja.buffer.byteLength+65535)/65536;try{Ja.grow(e);Oa();var h=1;break a}catch(k){}h=void 0}if(h)return!0}return!1},A:(a,b)=>{var c=0;Rc().forEach((d,e)=>{var h=b+c;e=F[a+4*e>>2]=h;for(h=0;h<d.length;++h)p[e++]=d.charCodeAt(h);p[e]=0;c+=d.length+1});return 0},B:(a,b)=>{var c=Rc();F[a>>2]=c.length;var d=0;c.forEach(e=>d+=e.length+1);F[b>>2]=d;return 0},e:function(a){try{var b=U(a);pa(b);return 0}catch(c){if("undefined"==typeof W||
"ErrnoError"!==c.name)throw c;return c.Ja}},p:function(a,b){try{var c=U(a);p[b]=c.tty?2:R(c.mode)?3:40960===(c.mode&61440)?7:4;La[b+2>>1]=0;J=[0,(I=0,1<=+Math.abs(I)?0<I?+Math.floor(I/4294967296)>>>0:~~+Math.ceil((I-+(~~I>>>0))/4294967296)>>>0:0)];D[b+8>>2]=J[0];D[b+12>>2]=J[1];J=[0,(I=0,1<=+Math.abs(I)?0<I?+Math.floor(I/4294967296)>>>0:~~+Math.ceil((I-+(~~I>>>0))/4294967296)>>>0:0)];D[b+16>>2]=J[0];D[b+20>>2]=J[1];return 0}catch(d){if("undefined"==typeof W||"ErrnoError"!==d.name)throw d;return d.Ja}},
w:function(a,b,c,d){try{a:{var e=U(a);a=b;for(var h,k=b=0;k<c;k++){var r=F[a>>2],z=F[a+4>>2];a+=8;var v=dc(e,p,r,z,h);if(0>v){var E=-1;break a}b+=v;if(v<z)break;"undefined"!=typeof h&&(h+=v)}E=b}F[d>>2]=E;return 0}catch(H){if("undefined"==typeof W||"ErrnoError"!==H.name)throw H;return H.Ja}},m:function(a,b,c,d,e){b=Mc(b,c);try{if(isNaN(b))return 61;var h=U(a);cc(h,b,d);J=[h.position>>>0,(I=h.position,1<=+Math.abs(I)?0<I?+Math.floor(I/4294967296)>>>0:~~+Math.ceil((I-+(~~I>>>0))/4294967296)>>>0:0)];
D[e>>2]=J[0];D[e+4>>2]=J[1];h.gb&&0===b&&0===d&&(h.gb=null);return 0}catch(k){if("undefined"==typeof W||"ErrnoError"!==k.name)throw k;return k.Ja}},D:function(a){try{var b=U(a);return b.Ga?.fsync?b.Ga.fsync(b):0}catch(c){if("undefined"==typeof W||"ErrnoError"!==c.name)throw c;return c.Ja}},t:function(a,b,c,d){try{a:{var e=U(a);a=b;for(var h,k=b=0;k<c;k++){var r=F[a>>2],z=F[a+4>>2];a+=8;var v=oa(e,p,r,z,h);if(0>v){var E=-1;break a}b+=v;"undefined"!=typeof h&&(h+=v)}E=b}F[d>>2]=E;return 0}catch(H){if("undefined"==
typeof W||"ErrnoError"!==H.name)throw H;return H.Ja}}},Z=function(){function a(c){Z=c.exports;Ja=Z.I;Oa();X=Z.K;Qa.unshift(Z.J);Ua--;f.monitorRunDependencies?.(Ua);0==Ua&&(null!==Va&&(clearInterval(Va),Va=null),Wa&&(c=Wa,Wa=null,c()));return Z}var b={a:Vc};Ua++;f.monitorRunDependencies?.(Ua);if(f.instantiateWasm)try{return f.instantiateWasm(b,a)}catch(c){return C(`Module.instantiateWasm callback failed with error: ${c}`),!1}Ya||=Xa("sql-wasm.wasm")?"sql-wasm.wasm":f.locateFile?f.locateFile("sql-wasm.wasm",
B):B+"sql-wasm.wasm";bb(b,function(c){a(c.instance)});return{}}();f._sqlite3_free=a=>(f._sqlite3_free=Z.L)(a);f._sqlite3_value_text=a=>(f._sqlite3_value_text=Z.M)(a);f._sqlite3_prepare_v2=(a,b,c,d,e)=>(f._sqlite3_prepare_v2=Z.N)(a,b,c,d,e);f._sqlite3_step=a=>(f._sqlite3_step=Z.O)(a);f._sqlite3_reset=a=>(f._sqlite3_reset=Z.P)(a);f._sqlite3_exec=(a,b,c,d,e)=>(f._sqlite3_exec=Z.Q)(a,b,c,d,e);f._sqlite3_finalize=a=>(f._sqlite3_finalize=Z.R)(a);
f._sqlite3_column_name=(a,b)=>(f._sqlite3_column_name=Z.S)(a,b);f._sqlite3_column_text=(a,b)=>(f._sqlite3_column_text=Z.T)(a,b);f._sqlite3_column_type=(a,b)=>(f._sqlite3_column_type=Z.U)(a,b);f._sqlite3_errmsg=a=>(f._sqlite3_errmsg=Z.V)(a);f._sqlite3_clear_bindings=a=>(f._sqlite3_clear_bindings=Z.W)(a);f._sqlite3_value_blob=a=>(f._sqlite3_value_blob=Z.X)(a);f._sqlite3_value_bytes=a=>(f._sqlite3_value_bytes=Z.Y)(a);f._sqlite3_value_double=a=>(f._sqlite3_value_double=Z.Z)(a);
f._sqlite3_value_int=a=>(f._sqlite3_value_int=Z._)(a);f._sqlite3_value_type=a=>(f._sqlite3_value_type=Z.$)(a);f._sqlite3_result_blob=(a,b,c,d)=>(f._sqlite3_result_blob=Z.aa)(a,b,c,d);f._sqlite3_result_double=(a,b)=>(f._sqlite3_result_double=Z.ba)(a,b);f._sqlite3_result_error=(a,b,c)=>(f._sqlite3_result_error=Z.ca)(a,b,c);f._sqlite3_result_int=(a,b)=>(f._sqlite3_result_int=Z.da)(a,b);f._sqlite3_result_int64=(a,b,c)=>(f._sqlite3_result_int64=Z.ea)(a,b,c);
f._sqlite3_result_null=a=>(f._sqlite3_result_null=Z.fa)(a);f._sqlite3_result_text=(a,b,c,d)=>(f._sqlite3_result_text=Z.ga)(a,b,c,d);f._sqlite3_aggregate_context=(a,b)=>(f._sqlite3_aggregate_context=Z.ha)(a,b);f._sqlite3_column_count=a=>(f._sqlite3_column_count=Z.ia)(a);f._sqlite3_data_count=a=>(f._sqlite3_data_count=Z.ja)(a);f._sqlite3_column_blob=(a,b)=>(f._sqlite3_column_blob=Z.ka)(a,b);f._sqlite3_column_bytes=(a,b)=>(f._sqlite3_column_bytes=Z.la)(a,b);
f._sqlite3_column_double=(a,b)=>(f._sqlite3_column_double=Z.ma)(a,b);f._sqlite3_bind_blob=(a,b,c,d,e)=>(f._sqlite3_bind_blob=Z.na)(a,b,c,d,e);f._sqlite3_bind_double=(a,b,c)=>(f._sqlite3_bind_double=Z.oa)(a,b,c);f._sqlite3_bind_int=(a,b,c)=>(f._sqlite3_bind_int=Z.pa)(a,b,c);f._sqlite3_bind_text=(a,b,c,d,e)=>(f._sqlite3_bind_text=Z.qa)(a,b,c,d,e);f._sqlite3_bind_parameter_index=(a,b)=>(f._sqlite3_bind_parameter_index=Z.ra)(a,b);f._sqlite3_sql=a=>(f._sqlite3_sql=Z.sa)(a);
f._sqlite3_normalized_sql=a=>(f._sqlite3_normalized_sql=Z.ta)(a);f._sqlite3_changes=a=>(f._sqlite3_changes=Z.ua)(a);f._sqlite3_close_v2=a=>(f._sqlite3_close_v2=Z.va)(a);f._sqlite3_create_function_v2=(a,b,c,d,e,h,k,r,z)=>(f._sqlite3_create_function_v2=Z.wa)(a,b,c,d,e,h,k,r,z);f._sqlite3_open=(a,b)=>(f._sqlite3_open=Z.xa)(a,b);var ia=f._malloc=a=>(ia=f._malloc=Z.ya)(a),fa=f._free=a=>(fa=f._free=Z.za)(a);f._RegisterExtensionFunctions=a=>(f._RegisterExtensionFunctions=Z.Aa)(a);
var Eb=(a,b)=>(Eb=Z.Ba)(a,b),ua=a=>(ua=Z.Ca)(a),y=a=>(y=Z.Da)(a),ra=()=>(ra=Z.Ea)();f.stackSave=()=>ra();f.stackRestore=a=>ua(a);f.stackAlloc=a=>y(a);f.cwrap=(a,b,c,d)=>{var e=!c||c.every(h=>"number"===h||"boolean"===h);return"string"!==b&&e&&!d?f["_"+a]:(...h)=>Sc(a,b,c,h)};f.addFunction=Aa;f.removeFunction=wa;f.UTF8ToString=ta;f.ALLOC_NORMAL=ea;f.allocate=da;f.allocateUTF8OnStack=va;var Wc;Wa=function Xc(){Wc||Yc();Wc||(Wa=Xc)};
function Yc(){function a(){if(!Wc&&(Wc=!0,f.calledRun=!0,!Ka)){f.noFSInit||ec||(ec=!0,f.stdin=f.stdin,f.stdout=f.stdout,f.stderr=f.stderr,f.stdin?Fc("stdin",f.stdin):Xb("/dev/tty","/dev/stdin"),f.stdout?Fc("stdout",null,f.stdout):Xb("/dev/tty","/dev/stdout"),f.stderr?Fc("stderr",null,f.stderr):Xb("/dev/tty1","/dev/stderr"),na("/dev/stdin",0),na("/dev/stdout",1),na("/dev/stderr",1));Jb=!1;cb(Qa);f.onRuntimeInitialized?.();if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=
f.postRun.shift();Sa.unshift(b)}cb(Sa)}}if(!(0<Ua)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ta();cb(Pa);0<Ua||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);a()},1)):a())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();Yc();


        // The shell-pre.js and emcc-generated code goes above
        return Module;
    }); // The end of the promise being returned

  return initSqlJsPromise;
} // The end of our initSqlJs function

// This bit below is copied almost exactly from what you get when you use the MODULARIZE=1 flag with emcc
// However, we don't want to use the emcc modularization. See shell-pre.js
if (typeof exports === 'object' && typeof module === 'object'){
    module.exports = initSqlJs;
    // This will allow the module to be used in ES6 or CommonJS
    module.exports.default = initSqlJs;
}
else if (typeof define === 'function' && define['amd']) {
    define([], function() { return initSqlJs; });
}
else if (typeof exports === 'object'){
    exports["Module"] = initSqlJs;
}

/**
 * From: https://github.com/allnulled/sqlite-polyfill
 * Also: https://www.npmjs.com/package/@allnulled/sqlite-polyfill
 */
(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window["SQLitePolyfill"] = mod;
  }
  if (typeof global !== 'undefined') {
    global["SQLitePolyfill"] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  class SQLitePolyfill {
    constructor() {
      this.db = null;
      this.isBrowser = typeof window !== 'undefined';
    }

    async init(dbName = ':memory:', wasm_path = "$filename") {
      Validate_parameters: {
        if (typeof dbName !== "string") {
          throw new Error("Required parameter 1 on «sqlitePolyfill.init()» to be a string with the name of the database");
        }
        if (typeof wasm_path !== "string") {
          throw new Error("Required parameter 2 on «sqlitePolyfill.init()» to be a string with the path of the «sql-wasm.wasm» file");
        }
      }
      // Set the database name as localStorage key:
      Set_localStorage_key: {
        this.localStorageKey = dbName;
      }
      if (this.isBrowser) {
        if (!window.initSqlJs) {
          throw new Error("sql.js is required in the browser. Make sure it's loaded.");
        }
        const SQL = await window.initSqlJs({
          locateFile: function (filename) {
            return wasm_path.replace("$filename", filename);
          }
        });
        this._loadFromLocalStorage(SQL);
      } else {
        const sqlite3 = require("sqlite3");
        this.db = new sqlite3.Database(dbName, (err) => {
          if (err) {
            throw new Error(`Failed to open database: ${err.message}`);
          }
        });
      }
    }

    run(query, params = []) {
      if (this.isBrowser) {
        this._ensureDbInitialized();
        const statement = this.db.prepare(query);
        statement.bind(params);
        while (statement.step()) {
          // No-op for run in browser
        }
        statement.free();
        return Promise.resolve();
      } else {
        return new Promise((resolve, reject) => {
          this.db.run(query, params, function (err) {
            if (err) {
              reject(err);
            } else {
              resolve(this);
            }
          });
        });
      }
    }

    all(query, params = []) {
      if (this.isBrowser) {
        this._ensureDbInitialized();
        const results = [];
        const statement = this.db.prepare(query);
        statement.bind(params);
        while (statement.step()) {
          results.push(statement.getAsObject());
        }
        statement.free();
        this._persistToLocalStorage();
        return Promise.resolve(results);
      } else {
        return new Promise((resolve, reject) => {
          this.db.all(query, params, (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
          });
        });
      }
    }

    get(query, params = []) {
      if (this.isBrowser) {
        return this.all(query, params).then((results) => results[0] || null);
      } else {
        return new Promise((resolve, reject) => {
          this.db.get(query, params, (err, row) => {
            if (err) {
              reject(err);
            } else {
              resolve(row);
            }
          });
        });
      }
    }

    close() {
      if (this.isBrowser) {
        this._ensureDbInitialized();
        this.db.close();
        this.db = null;
        return Promise.resolve();
      } else {
        return new Promise((resolve, reject) => {
          this.db.close((err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      }
    }

    _ensureDbInitialized() {
      if (!this.db) {
        throw new Error("Database is not initialized. Call 'init()' first.");
      }
    }

    // Método para cargar la base de datos desde localStorage
    _loadFromLocalStorage(SQL) {
      const savedDb = localStorage.getItem(this.localStorageKey);
      if (savedDb) {
        const buffer = Uint8Array.from(atob(savedDb), c => c.charCodeAt(0));
        this.db = new SQL.Database(buffer);
      } else {
        this.db = new SQL.Database();
      }
    }

    // Método para persistir la base de datos en localStorage
    _persistToLocalStorage() {
      const dbData = this.db.export();  // Exportar la base de datos
      const dbString = btoa(String.fromCharCode.apply(null, new Uint8Array(dbData)));  // Convertir a base64
      localStorage.setItem(this.localStorageKey, dbString);  // Guardar en localStorage
    }

  }

  return SQLitePolyfill;

});
(function(factory) {
  const mod = factory();
  if(typeof window !== 'undefined') {
    window["SqliteDataSystem"] = mod;
  }
  if(typeof global !== 'undefined') {
    global["SqliteDataSystem"] = mod;
  }
  if(typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function() {
const Auth = class {

  constructor(dbName = ":memory:", wasmPath = "$filename", sqlitePolyfill = false) {
    this.db = sqlitePolyfill || new SQLitePolyfill();
    this.dbName = dbName;
    this.wasmPath = wasmPath;
    this.initialized = false;
  }

  async init() {
    if (!this.initialized) {
      await this.db.init(this.dbName, this.wasmPath);
      this.initialized = true;
    }
    const wasPreviouslyCreated = !await this._createSchema();
    if(wasPreviouslyCreated) {
      await this._runInitialMigration();
    }
  }

  async _createSchema() {
    
    let wasPreviouslyCreated = false

    try {
      await this.db.run(`SELECT * FROM users LIMIT 1;`);
      wasPreviouslyCreated = true;
    } catch (error) {
      wasPreviouslyCreated = false;
    }

    if(wasPreviouslyCreated) {
      return true;
    }

    await this.db.run(`
      CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `);

    await this.db.run(`
      CREATE TABLE groups (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
      );
    `);

    await this.db.run(`
      CREATE TABLE permissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
      );
    `);

    await this.db.run(`
      CREATE TABLE groups_de_user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        group_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (group_id) REFERENCES groups(id),
        UNIQUE (user_id, group_id)
      );
    `);

    await this.db.run(`
      CREATE TABLE permissions_de_group (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        group_id INTEGER NOT NULL,
        permission_id INTEGER NOT NULL,
        FOREIGN KEY (group_id) REFERENCES groups(id),
        FOREIGN KEY (permission_id) REFERENCES permissions(id),
        UNIQUE (group_id, permission_id)
      );
    `);

    await this.db.run(`
      CREATE TABLE sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        token TEXT NOT NULL UNIQUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `);

    return false;
  }

  async _runInitialMigration() {
    await this.db.run(`INSERT INTO users (name, password) VALUES (?, ?)`, ['admin', 'admin']);
    await this.db.run(`INSERT INTO groups (name) VALUES (?)`, ['administradores']);
    await this.db.run(`INSERT INTO permissions (name) VALUES (?)`, ['administrar']);

    const adminUserId = (await this.db.get(`SELECT id FROM users WHERE name = ?`, ['admin'])).id;
    const adminGroupId = (await this.db.get(`SELECT id FROM groups WHERE name = ?`, ['administradores'])).id;
    const adminPermId = (await this.db.get(`SELECT id FROM permissions WHERE name = ?`, ['administrar'])).id;

    await this.db.run(`INSERT INTO groups_de_user (user_id, group_id) VALUES (?, ?)`, [adminUserId, adminGroupId]);
    await this.db.run(`INSERT INTO permissions_de_group (group_id, permission_id) VALUES (?, ?)`, [adminGroupId, adminPermId]);
  }

  async openSession(name, password) {
    const user = await this.db.get(`SELECT * FROM users WHERE name = ? AND password = ?`, [name, password]);
    if (!user) throw new Error(`Credenciales inválidas: ${name} + ${password}`);

    const token = this._generateToken();
    await this.db.run(`INSERT INTO sessions (user_id, token) VALUES (?, ?)`, [user.id, token]);
    return { user: user.name, token };
  }

  async closeSession(token) {
    await this.db.run(`DELETE FROM sessions WHERE token = ?`, [token]);
  }

  async refreshSession(token) {
    const session = await this.db.get(`SELECT * FROM sessions WHERE token = ?`, [token]);
    if (!session) throw new Error('Sesión inválida.');

    const newToken = this._generateToken();
    await this.db.run(`UPDATE sessions SET token = ? WHERE id = ?`, [newToken, session.id]);
    return { nuevoToken: newToken };
  }

  async registerUser(name, password) {
    await this.db.run(`INSERT INTO users (name, password) VALUES (?, ?)`, [name, password]);
  }

  async deregisterUser(token) {
    const session = await this.db.get(`SELECT * FROM sessions WHERE token = ?`, [token]);
    if (!session) throw new Error('Sesión inválida.');

    const userId = session.user_id;

    await this.db.run(`DELETE FROM sessions WHERE user_id = ?`, [userId]);
    await this.db.run(`DELETE FROM groups_de_user WHERE user_id = ?`, [userId]);
    await this.db.run(`DELETE FROM users WHERE id = ?`, [userId]);
  }

  _generateToken() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return Array.from({ length: 100 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
  }

}

const Rest = class {

  constructor(dbName = ":memory:", wasmPath = "$filename", sqlitePolyfill = false) {
    this.db = sqlitePolyfill || new SQLitePolyfill();
    this.dbName = dbName;
    this.wasmPath = wasmPath;
    this.initialized = false;
  }

  async init() {
    if (!this.initialized) {
      await this.db.init(this.dbName, this.wasmPath);
      this.initialized = true;
    }
  }

  async getSchema(force = false) {
    await this.init();
    const result = { tables: {} };

    try {
      // Obtener la lista de tablas
      const tables = await this.db.all("SELECT name FROM sqlite_master WHERE type='table';");

      // Procesar cada tabla
      for (const table of tables) {
        const tableName = table.name;
        result.tables[tableName] = { columns: {}, foreignKeys: {} };

        // Obtener columnas de la tabla
        const columns = await this.db.all(`PRAGMA table_info(${tableName});`);
        for (const column of columns) {
          result.tables[tableName].columns[column.name] = {
            type: column.type,
            notNull: column.notnull === 1,
            default: column.dflt_value,
            primaryKey: column.pk === 1,
          };
        }

        // Obtener claves foráneas de la tabla
        const foreignKeys = await this.db.all(`PRAGMA foreign_key_list(${tableName});`);
        for (const foreignKey of foreignKeys) {
          result.tables[tableName].foreignKeys[foreignKey.id] = {
            from: foreignKey.from,
            to: foreignKey.to,
            table: foreignKey.table,
            onDelete: foreignKey.on_delete,
            onUpdate: foreignKey.on_update,
          };
        }
      }

      return result;

    } catch (err) {
      throw err;
    }
  }

  async select({ table, where = [], orderBy = [["id", "ASC"]] }) {
    await this.init();
    const whereClause = where.length
      ? `WHERE ` + where.map(([col, op, val]) => `${col} ${op} ?`).join(" AND ")
      : "";
    const orderClause = orderBy.length
      ? `ORDER BY ` + orderBy.map(([col, dir]) => `${col} ${dir}`).join(", ")
      : "";

    const query = `SELECT * FROM ${table} ${whereClause} ${orderClause}`;
    const params = where.map(([, , val]) => val);

    return this.db.all(query, params);
  }

  async insert({ table, item = {}, items = [] }) {
    await this.init();
    const rows = items.length ? items : [item];

    if (rows.length === 0) {
      throw new Error("No data provided for insertion.");
    }

    const columns = Object.keys(rows[0]);
    const placeholders = columns.map(() => "?").join(", ");
    const query = `INSERT INTO ${table} (${columns.join(", ")}) VALUES (${placeholders})`;

    for (const row of rows) {
      await this.db.run(query, Object.values(row));
    }

    return { inserted: rows.length };
  }

  async update({ table, values, where = [] }) {
    await this.init();
    const setClause = Object.keys(values)
      .map((col) => `${col} = ?`)
      .join(", ");
    const whereClause = where.length
      ? `WHERE ` + where.map(([col, op, val]) => `${col} ${op} ?`).join(" AND ")
      : "";

    const query = `UPDATE ${table} SET ${setClause} ${whereClause}`;
    const params = [...Object.values(values), ...where.map(([, , val]) => val)];

    const result = await this.db.run(query, params);
    return { changes: result.changes || 0 };
  }

  async delete({ table, where = [] }) {
    await this.init();
    const whereClause = where.length
      ? `WHERE ` + where.map(([col, op, val]) => `${col} ${op} ?`).join(" AND ")
      : "";

    const query = `DELETE FROM ${table} ${whereClause}`;
    const params = where.map(([, , val]) => val);

    const result = await this.db.run(query, params);
    return { deleted: result.changes || 0 };
  }
}
const create = function(dbName, wasmPath) {
  const db = new SQLitePolyfill();
  return {
    db: db,
    auth: new Auth(dbName, wasmPath, db),
    rest: new Rest(dbName, wasmPath, db),
  };
}
return { Auth, Rest, create };
});

Vue.directive("autofocus", {
  inserted(el) {
    el.focus();
  }
});

window.Enciclopedia_local_utils = new Vue({
  data() {
    return {
      
    };
  },
  methods: {
    generateErrorType(errorName, errorMessage, errorMetadata = {}, errorBase = {}) {
      const errorClass = class extends Error {
        constructor(message) {
          super(message);
          this.name = errorName;
        }
      }
      
      const errorObject = new errorClass(errorMessage);
      Object.assign(errorBase, errorObject, errorMetadata);
    }
  },
  watch: {}
});
window.CDialogs = new Vue({
  data() {
    return {
      tickets: 1
    };
  },
  methods: {
    getTicket() {
      return this.tickets++;
    }
  },
  watch: {}
});
window.CBadges = new Vue({
  data() {
    return {
      tickets: 1
    };
  },
  methods: {
    getTicket() {
      return this.tickets++;
    }
  },
  watch: {}
});
(function(factory) {
  const mod = factory();
  if(typeof window !== 'undefined') {
    window["Litestarter_app_components"] = mod;
  }
  if(typeof global !== 'undefined') {
    global["Litestarter_app_components"] = mod;
  }
  if(typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function() {
Vue.component("app", {
  name: "app",
  template: `<div class="app">
    <!--Contenido del componente-->
    <wiki-page></wiki-page>
</div>`,
  props: {},
  data() {
    return {}
  },
  methods: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    Arranque_automatico_para_tests: {
      break Arranque_automatico_para_tests;
      document.querySelector("button").click();
    }
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  deactivated() {},
});
const noop = () => {};
const defaultData = {
  is_active: false,
  promise: Promise.resolve(),
  resolve: noop,
  reject: noop,
  value: undefined
};
Vue.component("c-dialog", {
  name: "c-dialog",
  template: `<div class="c-dialog">
    <dialog class="window_dialog">
        <div class="window_container">
            <div class="window_viewer">
                <transition name="fade">
                    <div class="window modal"
                        v-if="is_active">
                        <div class="title-bar">
                            <div class="title-bar-text">
                                <slot name="title"></slot>
                            </div>
                            <div class="title-bar-controls">
                                <button aria-label="Close"
                                    v-on:click="() => set(undefined).close()"></button>
                            </div>
                        </div>
                        <div class="window-body">
                            <div style="display: flex; flex-direction: column; height: 100%;">
                                <div style="flex: 100; overflow: scroll; padding: 4px 6px;">
                                    <slot name="body"></slot>
                                </div>
                                <div class="bodyfooter" style="flex: 1;"
                                    v-if="$slots.bodyfooter">
                                    <div class="error_container" style="position: relative;" v-if="error" v-on:click="clearError">
                                        <div class="error_content" style="position: absolute; top: auto; bottom: 0; left: 0; right: 0;">
                                            <div class="error_box" v-if="error instanceof $window.Error">
                                                <div class="error_info_item">
                                                    <pre class="default_codeviewer">{{ error.name }}: {{ error.message }}.
{{ formatAndGroupStackTrace(error.stack) }}</pre>
                                                </div>
                                            </div>
                                            <div class="error_box" v-else="">
                                                <div class="error_info_item">{{ error }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <slot name="bodyfooter"></slot>
                                </div>
                            </div>
                        </div>
                        <div class="status-bar">
                            <div class="status-bar-field">
                                <template v-if="$slots.footer">
                                    <slot name="footer"></slot>
                                </template>
                                <template v-else>
                                    Powered by <a href="https://github.com/allnulled">allnulled</a>
                                </template>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </dialog>
</div>`,
  data() {
    return Object.assign({}, defaultData, {
      priority: 1,
      error: false,
    });
  },
  methods: {
    open() {
      const priority = this.$dialogs.getTicket();
      let resolve = noop;
      let reject = noop;
      const promise = new Promise((_resolve, _reject) => {
        resolve = _resolve;
        reject = _reject;
      });
      this.resolve = resolve;
      this.reject = reject;
      this.promise = promise;
      this.value = undefined;
      this.priority = priority;
      this._show();
      this.is_active = true;
      return this.promise;
    },
    set(value) {
      this.value = value;
      return this;
    },
    close() {
      const value = this.value;
      this.resolve(value);
      this.reset();
      return value;
    },
    reset() {
      Object.assign(this, defaultData, {is_active:true});
      this.is_active = false;
      this._close();
      return this;
    },
    _show() {
      this.$el.querySelector("dialog").show();
    },
    _close() {
      this.$el.querySelector("dialog").close();
    },
    setError(error) {
      this.error = error;
    },
    clearError() {
      this.error = false;
    },
    formatStackTrace(stackTrace) {
      // Dividir por líneas y limpiar espacios extra
      const lines = stackTrace.split(/\s+/).filter(Boolean);
    
      // Procesar cada línea para hacerla más legible
      const formatted = lines.map((line) => {
        // Separar el método, archivo y ubicación (si aplica)
        const match = line.match(/^(.*?)(@|$)(.*?):(\d+):(\d+)$/);
        if (match) {
          const [, method, , file, line, column] = match;
          return `@${file}\n  ${line}:${column}:${(method || "(anonymous)").trim()}`;
        }
        return line; // Si no coincide con el patrón esperado
      });
    
      // Unir líneas procesadas
      return formatted.join("\n");
    },
    formatAndGroupStackTrace(stackTrace) {
      // Dividir por líneas y limpiar espacios extra
      const lines = stackTrace.split(/\s+/).filter(Boolean);
    
      // Mapa para agrupar por archivo
      const grouped = {};
    
      lines.forEach((line) => {
        const match = line.match(/^(.*?)(@|$)(.*?):(\d+):(\d+)$/);
        if (match) {
          const [, method, , file, line, column] = match;
          const location = {
            method: method || "(anonymous)",
            line: parseInt(line, 10),
            column: parseInt(column, 10),
          };
    
          // Agrupar por archivo
          if (!grouped[file]) grouped[file] = [];
          grouped[file].push(location);
        }
      });
    
      // Construir salida agrupada y ordenada
      let result = "";
      for (const file in grouped) {
        // Ordenar ubicaciones por número de línea
        grouped[file].sort((a, b) => a.line - b.line || a.column - b.column);
    
        // Construir sección del archivo
        result += `File: ${file}\n`;
        grouped[file].forEach(({ line, column, method }) => {
          result += `  @${line}:${column}::${method}\n`;
        });
        result += "\n";
      }
    
      return result.trim();
    }    
  },
  watch: {}
});
Vue.component("c-title", {
  name: "c-title",
  template: `<div class="c-title">
    <h3><slot></slot></h3>
</div>`,
  props: {},
  data() {
    return {}
  },
  methods: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  deactivated() {},
});
Vue.component("wiki-page", {
  name: "wiki-page",
  template: `<div class="wiki-page">
    <div class="wiki_title">
        <span class="wiki_title_text">Enciclopedia local</span>
        <div class="wiki_controls">
            
            <button class="stretch_button" v-on:click="() => selectPage('wiki-home-page')" v-if="selected_page !== 'wiki-home-page'" style="min-width: 30px; margin-right: 2px;">◂</button>
            <button class="stretch_button" v-on:click="() => $refs.dialogo_de_menu_principal.open()" style="min-width: 30px;">☰</button>
        </div>
    </div>
    <div class="" style="border: 0px solid #333; box-sizing: border-box; min-height: 550px; overflow: scroll;">
        <component :is="selected_page" :root="this"></component>
    </div>
    <c-dialog ref="dialogo_de_menu_principal">
        <template slot="title">Secciones generales</template>
        <template slot="body">
            <div class="">
                <div class="wiki_paragraph_no_spaces">Escoge la sección a donde quieres ir:</div>
                <ul>
                    <li>
                        <a href="#" v-on:click="() => selectPage('wiki-home-page')">Sección de inicio</a>
                    </li>
                    <li>
                        <a href="#" v-on:click="() => selectPage('wiki-searcher-page')">Sección de buscador</a>
                    </li>
                    <li>
                        <a href="#" v-on:click="() => selectPage('wiki-settings-page')">Sección de configuraciones</a>
                    </li>
                </ul>
            </div>
        </template>
        <template slot="bodyfooter">
            <div style="text-align: right; padding: 4px;">
                <button v-on:click="() => $refs.dialogo_de_menu_principal.close()">Cancelar</button>
            </div>
        </template>
        <template slot="footer">
            <span class="status-bar-field">Estás en el menú principal.</span>
        </template>
    </c-dialog>
</div>`,
  props: {},
  data() {
    return {
      selected_page: 'wiki-home-page',
      selected_database: undefined,
    }
  },
  methods: {
    selectPage(page) {
      if(this.$refs.dialogo_de_menu_principal) {
        this.$refs.dialogo_de_menu_principal.close();
      }
      this.selected_page = page;
    },
    selectDatabase(db) {
      this.selected_database = db;
      this.selected_page = 'wiki-database-page';
    },
    async listDatabases() {
      this.$logger.trace("wiki-page.listDatabases", arguments);
      return await this.$browsie.constructor.listDatabases();
    },
    async createDatabase(name, schema = {}) {
      this.$logger.trace("wiki-page.createDatabase", arguments);
      this.$ensure({ name }).type("string");
      this.$ensure({ schema }).type("object");
      return await this.$browsie.constructor.createDatabase(name, schema);
    },
    async deleteDatabase(name) {
      this.$logger.trace("wiki-page.deleteDatabase", arguments);
      this.$ensure({ name }).type("string");
      return await this.$browsie.constructor.deleteDatabase(name);
    }
  },
  watch: {},
  beforeCreate() { },
  created() { },
  beforeMount() { },
  mounted() {
      this.$logger.trace("wiki-page.mounted", arguments);
      this.$window.c = this;
  },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
  deactivated() { },
});
Vue.component("wiki-home-page", {
  name: "wiki-home-page",
  template: `<div class="wiki-home-page">
    <div class="wiki_viewer">
        <div class="wiki_content">
            <!--div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Inicio</span>
            </div-->
            <div class="wiki_paragraph">Bienvenid@ a enciclopedia-local <sup><a href="#references">[ 1 ]</a></sup>.</div>
            <div class="wiki_space_3"></div>
            <div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Bases de datos disponibles</span>
                <span class="wiki_controls">
                    <button class="stretch_button"
                        v-on:click="loadDatabases">⟳</button>
                </span>
            </div>
            <input v-model="database_text_filter"
                style="width: 100%;"
                type="search"
                v-autofocus
                placeholder="Filtra bases de datos aquí" />
            <div class="wiki_list_viewer"
                style="padding: 0px;">
                <div v-if="!filtered_databases">No hay bases de datos creadas. Crea una <a href="#">aquí</a>.</div>
                <ul v-else="">
                    <template v-for="db, dbIndex in filtered_databases">
                        <li v-bind:key="'available_database_' + dbIndex">
                            <a class="accessible_text display_block"
                                v-on:click="() => root.selectDatabase(db.name)"
                                href="#">{{ db.name }}</a>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="wiki_space_3"></div>
            <div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Otras operaciones disponibles</span>
            </div>
            <ul style="padding-top: 0px;">
                <li><a href="#"
                        v-on:click="_onClickCreateDatabase">Crear base de datos</a></li>
                <!--li><a href="#"
                        v-on:click="_onClickRenameDatabase">Renombrar base de datos</a></li-->
                <li><a class="danger_text"
                        href="#"
                        v-on:click="_onClickDeleteDatabase">Eliminar base de datos</a></li>
            </ul>
            <c-dialog ref="dialogo_crear_base_de_datos">
                <template slot="title">Crear base de datos</template>
                <template slot="body">
                    <div class="">
                        <div class="wiki_paragraph"><b>Paso 1.</b> Escribe el nombre de la nueva base de datos:</div>
                        <input style="width:100%;"
                            type="text"
                            v-model="new_database_name"
                            v-autofocus
                            v-on:keypress.enter="_onClickAcceptCreateDatabase"
                            v-on:keyup.esc="_onClickCancelCreateDatabase" />
                        <div class="wiki_paragraph"><b>Paso 2.</b> Clica a <a href="#"
                                v-on:click="_onClickAcceptCreateDatabase">Crear</a>.</div>
                    </div>
                </template>
                <template slot="bodyfooter">
                    <div style="text-align: right; padding: 4px;">
                        <button v-on:click="_onClickAcceptCreateDatabase">Crear</button>
                        <button v-on:click="_onClickCancelCreateDatabase">Cancelar</button>
                    </div>
                </template>
                <template slot="footer">
                    <span class="status-bar-field">Estás por crear una base de datos.</span>
                </template>
            </c-dialog>
            <c-dialog ref="dialogo_renombrar_base_de_datos">
                <template slot="title">Renombrar base de datos</template>
                <template slot="body">
                    <div class="">
                        <div class="wiki_paragraph"><b>Paso 1.</b> Escoge la base de datos a renombrar:</div>
                        <div class="wiki_list_viewer"
                            style="padding: 0px;">
                            <div v-if="!filtered_databases">No hay bases de datos creadas. Crea una <a href="#">aquí</a>.</div>
                            <ol v-else="">
                                <template v-for="db, dbIndex in filtered_databases">
                                    <li v-bind:key="'available_database_' + dbIndex">
                                        <a class="accessible_text display_block"
                                        :class="{marked:rename_database_name === db.name}"
                                        v-on:click="() => _setAsDatabaseToRename(db.name)"
                                            href="#">{{ db.name }}</a>
                                    </li>
                                </template>
                            </ol>
                        </div>
                        <div class="wiki_paragraph"><b>Paso 2.</b> Escribe el nuevo nombre de la base de datos:</div>
                        <input style="width:100%;"
                            type="text"
                            ref="rename_database_input"
                            v-model="rename_database_name_new"
                            v-autofocus
                            v-on:keypress.enter="_onClickAcceptRenameDatabase"
                            v-on:keyup.esc="_onClickCancelRenameDatabase" />
                        <div class="wiki_paragraph"><b>Paso 3.</b> Clica a <a href="#"
                                v-on:click="_onClickAcceptRenameDatabase">Renombrar</a>.</div>
                    </div>
                </template>
                <template slot="bodyfooter">
                    <div style="text-align: right; padding: 4px;">
                        <button v-on:click="_onClickAcceptRenameDatabase">Renombrar</button>
                        <button v-on:click="_onClickCancelRenameDatabase">Cancelar</button>
                    </div>
                </template>
                <template slot="footer">
                    <span class="status-bar-field">Estás en el diálogo de renombrar base de datos.</span>
                </template>
            </c-dialog>
            <c-dialog ref="dialogo_eliminar_base_de_datos">
                <template slot="title">Eliminar base de datos</template>
                <template slot="body">
                    <div class="">
                        <div class="wiki_paragraph"><b>Paso 1.</b> Selecciona la base de datos a eliminar:</div>
                        <div class="wiki_list_viewer"
                            style="padding: 0px;">
                            <div v-if="!filtered_databases">No hay bases de datos creadas. Crea una <a href="#">aquí</a>.</div>
                            <ol v-else="">
                                <template v-for="db, dbIndex in filtered_databases">
                                    <li v-bind:key="'available_database_' + dbIndex">
                                        <a class="accessible_text display_block danger_text"
                                        :class="{marked:delete_database_name === db.name}"
                                        v-on:click="() => _setAsDatabaseToDelete(db.name)"
                                        href="#">{{ db.name }}</a>
                                    </li>
                                </template>
                            </ol>
                        </div>
                        <div class="wiki_paragraph"><b>Paso 2.</b> Clica a <a href="#" v-on:click="_onClickAcceptDeleteDatabase">Eliminar</a>.</div>
                    </div>
                </template>
                <template slot="bodyfooter">
                    <div style="text-align: right; padding: 4px;">
                        <button v-on:click="_onClickAcceptDeleteDatabase">Eliminar</button>
                        <button v-on:click="_onClickCancelDeleteDatabase">Cancelar</button>
                    </div>
                </template>
                <template slot="footer">
                    <span class="status-bar-field">Estás por eliminar una base de datos.</span>
                </template>
            </c-dialog>
            <div class="wiki_space_3"></div>
            <div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Referencias</span>
            </div>
            <div class="wiki_references">
                <ol>
                    <li>
                        <div>Documentación oficial de «enciclopedia-local» en:</div>
                        <ul class="inner">
                            <li>
                                <a
                                    href="https://github.com/allnulled/enciclopedia-local">https://github.com/allnulled/enciclopedia-local</a>
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</div>`,
  props: {
    root: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      database_text_filter: "",
      omitted_databases_by_text_filter: [],
      available_databases: [],
      filtered_databases: [],
      new_database_name: "",
      rename_database_name: undefined,
      rename_database_name_new: undefined,
      delete_database_name: undefined
    }
  },
  methods: {
    async loadDatabases() {
      this.$logger.trace("wiki-home-page.loadDatabases", arguments);
      this.available_databases = await this.root.listDatabases();
      this._synchronizeFilteredDatabases();
    },
    _setAsDatabaseToRename(db) {
      this.$logger.trace("wiki-home-page._setAsDatabaseToRename", arguments);
      this.rename_database_name = db;
      this.rename_database_name_new = db;
    },
    _setAsDatabaseToDelete(db) {
      this.$logger.trace("wiki-home-page._setAsDatabaseToDelete", arguments);
      this.delete_database_name = db;
    },
    async _onClickCreateDatabase() {
      this.$logger.trace("wiki-home-page._onClickCreateDatabase", arguments);
      this.new_database_name = "";
      const respuesta = await this.$refs.dialogo_crear_base_de_datos.open();
      if (typeof respuesta !== "undefined") {
        // // No esto:
        // await this.$window.Webmarket.open(respuesta);
        // // Sino esto:
        await this.root.createDatabase(respuesta);
        await this.loadDatabases();
      }
      return respuesta;
    },
    async _onClickDeleteDatabase() {
      this.$logger.trace("wiki-home-page._onClickDeleteDatabase", arguments);
      this.delete_database_name = undefined;
      await this.$refs.dialogo_eliminar_base_de_datos.open();
      return;
    },
    _onClickAcceptCreateDatabase() {
      this.$logger.trace("wiki-home-page._onClickAcceptCreateDatabase", arguments);
      if(!this.new_database_name) {
        this.$refs.dialogo_crear_base_de_datos.setError(new Error("Debe de haber un nombre de base de datos antes de poder crearla"));
        return;
      }
      return this.$refs.dialogo_crear_base_de_datos.set(this.new_database_name).close();
    },
    _onClickCancelCreateDatabase() {
      this.$logger.trace("wiki-home-page._onClickCancelCreateDatabase", arguments);
      return this.$refs.dialogo_crear_base_de_datos.close();
    },
    _onClickRenameDatabase() {
      this.$logger.trace("wiki-home-page._onClickRenameDatabase", arguments);
      this.$refs.dialogo_renombrar_base_de_datos.open();
      return this._setAsDatabaseToRename("");
    },
    _onClickAcceptRenameDatabase() {
      this.$logger.trace("wiki-home-page._onClickAcceptRenameDatabase", arguments);
      if(!this.rename_database_name) {
        this.$refs.dialogo_renombrar_base_de_datos.setError(new Error("El nombre de la base de datos no puede estar vacío"));
        return;
      }
      return this.$refs.dialogo_renombrar_base_de_datos.close();
    },
    _onClickCancelRenameDatabase() {
      this.$logger.trace("wiki-home-page._onClickCancelRenameDatabase", arguments);
      return this.$refs.dialogo_renombrar_base_de_datos.close();
    },
    async _onClickAcceptDeleteDatabase() {
      this.$logger.trace("wiki-home-page._onClickAcceptDeleteDatabase", arguments);
      if(!this.delete_database_name) {
        this.$refs.dialogo_eliminar_base_de_datos.setError(new Error("Debe de haber una base de datos seleccionada antes de poder eliminarla"));
        return;
      }
      await this.root.deleteDatabase(this.delete_database_name);
      return this.$refs.dialogo_eliminar_base_de_datos.close();
    },
    _onClickCancelDeleteDatabase() {
      this.$logger.trace("wiki-home-page._onClickCancelDeleteDatabase", arguments);
      return this.$refs.dialogo_eliminar_base_de_datos.close();
    },
    _synchronizeFilteredDatabases() {
      this.$logger.trace("wiki-home-page._synchronizeFilteredDatabases", arguments);
      const databaseList = [];
      const textFilter = this.database_text_filter;
      if (textFilter.length !== 0) {
        for (let index = 0; index < this.available_databases.length; index++) {
          const db = this.available_databases[index];
          const hasMatch = JSON.stringify(db).toLowerCase().indexOf(textFilter.toLowerCase()) === -1;
          if (hasMatch) {
            databaseList.push(db);
          }
        }
      }
      omitted_databases_by_text_filter = databaseList;
      let sorted_databases = [];
      if (textFilter.length !== 0) {
        sorted_databases = this.available_databases.filter(db => omitted_databases_by_text_filter.indexOf(db) === -1).sort();
      } else {
        sorted_databases = this.available_databases.sort();
      }
      this.filtered_databases = sorted_databases;
    }
  },
  watch: {
    database_text_filter() {
      this.$logger.trace("wiki-home-page.watch.database_text_filter", arguments);
      this._synchronizeFilteredDatabases();
    }
  },
  beforeCreate() { },
  created() { },
  beforeMount() { },
  mounted() {
    this.$logger.trace("wiki-home-page.mounted", arguments);
    this.loadDatabases();
  },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
  deactivated() { },
});
Vue.component("wiki-settings-page", {
  name: "wiki-settings-page",
  template: `<div class="wiki-settings-page">
    <div class="wiki_viewer">
        <div class="wiki_content">
            <!--div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Inicio</span>
            </div-->
            Settings page
            <div class="wiki_paragraph">Esto es la página de configuraciones <sup><a href="#references">[ 1 ]</a></sup>. Para ir a inicio, clica <a href="#" v-on:click="() => root.selectPage('wiki-home-page')">aquí</a></div>
            <div class="wiki_space_3"></div>
            <div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Bases de datos disponibles</span>
                <span class="wiki_controls">
                    <button class="stretch_button">⟳</button>
                </span>
            </div>
        </div>
    </div>
</div>`,
  props: {
    root: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  watch: {
    
  },
  beforeCreate() { },
  created() { },
  beforeMount() { },
  mounted() {
    this.$logger.trace("wiki-settings-page.mounted", arguments);
  },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
  deactivated() { },
});
Vue.component("wiki-searcher-page", {
  name: "wiki-searcher-page",
  template: `<div class="wiki-searcher-page">
    <div class="wiki_viewer">
        <div class="wiki_content">
            <!--div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Inicio</span>
            </div-->
            Searcher page
            <div class="wiki_paragraph">Esto es la página de configuraciones <sup><a href="#references">[ 1 ]</a></sup>. Para ir a inicio, clica <a href="#" v-on:click="() => root.selectPage('wiki-home-page')">aquí</a></div>
            <div class="wiki_space_3"></div>
            <div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Bases de datos disponibles</span>
                <span class="wiki_controls">
                    <button class="stretch_button">⟳</button>
                </span>
            </div>
        </div>
    </div>
</div>`,
  props: {
    root: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  watch: {
    
  },
  beforeCreate() { },
  created() { },
  beforeMount() { },
  mounted() {
    this.$logger.trace("wiki-searcher-page.mounted", arguments);
  },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
  deactivated() { },
});
Vue.component("wiki-database-page", {
  name: "wiki-database-page",
  template: `<div class="wiki-database-page">
    <div class="wiki_viewer">
        <div class="wiki_content">
            <!--div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Inicio</span>
            </div-->
            
            <div class="wiki_paragraph">Estás en: <b>{{ root.selected_database }}</b>.</div>
            <div class="wiki_paragraph"></div>
            <div class="wiki_space_3"></div>
            <div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Tamaño</span>
            </div>
            <div class="wiki_paragraph" v-if="typeof selected_database_size === 'number'">La base de datos ocupa {{ selected_database_size }} bytes.</div>
            <template v-if="selected_database_schema && Object.keys(selected_database_schema).length">
                <div class="wiki_space_3"></div>
                <div class="wiki_subtitle">
                    <span class="wiki_subtitle_text">Tablas</span>
                    <span class="wiki_controls">
                        <button class="stretch_button">⟳</button>
                    </span>
                </div>
                <ul>
                    <li v-for="table, table_name in selected_database_schema" v-bind:key="'table_item_in_choosable_' + table_name">
                        <a href="#">{{ table_name }}</a>
                    </li>
                </ul>
            </template>
            <div class="wiki_space_3"></div>
            <div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Esquema</span>
            </div>
            <div class="wiki_paragraph" v-if="typeof selected_database_size === 'number' && selected_database_size !== 0">La base de datos tiene el siguiente esquema:</div>
            <div class="wiki_paragraph" v-else>La base de datos no tiene esquema actualmente.</div>
            <ul v-if="selected_database_schema">
                <li v-for="table, table_name in selected_database_schema" v-bind:key="'table_item_' + table_name">
                    <div>
                        <span>{{ table_name }}</span>
                    </div>
                    <ul v-if="table.indexes">
                        <li v-if="table.keyPath">
                            <div>
                                <span><u><b>{{ table.keyPath }}</b></u> <sup v-if="table.autoIncrement">autoincremental</sup></span>
                            </div>
                        </li>
                        <li v-for="table_index, table_index_order in table.indexes" v-bind:key="'table_index_item_' + table_index_order">
                            <div>
                                <span>{{ table_index.keyPath }}</span>
                                <span>{{ table_index.unique ? " (unique)" : "" }}</span>
                                <span>{{ table_index.multiEntry ? " (multientry)" : "" }}</span>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>`,
  props: {
    root: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selected_database: undefined,
      selected_database_size: undefined,
      selected_database_schema: undefined,
    }
  },
  methods: {
    async loadDatabaseInfo() {
      this.selected_database = this.root.selected_database;
      this.selected_database_size = await this.$browsie.constructor.getDatabaseSize(this.selected_database);
      this.selected_database_schema = await this.$browsie.constructor.getSchema(this.selected_database);
    }
  },
  watch: {
    
  },
  beforeCreate() { },
  created() { },
  beforeMount() { },
  async mounted() {
    this.$logger.trace("wiki-database-page.mounted", arguments);
    await this.loadDatabaseInfo();
  },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
  deactivated() { },
});
});

