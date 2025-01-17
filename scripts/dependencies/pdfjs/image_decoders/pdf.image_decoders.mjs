/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2023 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */

/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = globalThis.pdfjsImageDecoders = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Jbig2Error: () => (/* reexport */ Jbig2Error),
  Jbig2Image: () => (/* reexport */ Jbig2Image),
  JpegError: () => (/* reexport */ JpegError),
  JpegImage: () => (/* reexport */ JpegImage),
  JpxError: () => (/* reexport */ JpxError),
  JpxImage: () => (/* reexport */ JpxImage),
  VerbosityLevel: () => (/* reexport */ VerbosityLevel),
  getVerbosityLevel: () => (/* reexport */ getVerbosityLevel),
  setVerbosityLevel: () => (/* reexport */ setVerbosityLevel)
});

;// CONCATENATED MODULE: ./src/shared/util.js
const isNodeJS = typeof process === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
const IDENTITY_MATRIX = (/* unused pure expression or super */ null && ([1, 0, 0, 1, 0, 0]));
const FONT_IDENTITY_MATRIX = (/* unused pure expression or super */ null && ([0.001, 0, 0, 0.001, 0, 0]));
const MAX_IMAGE_SIZE_TO_CACHE = 10e6;
const LINE_FACTOR = 1.35;
const LINE_DESCENT_FACTOR = 0.35;
const BASELINE_FACTOR = LINE_DESCENT_FACTOR / LINE_FACTOR;
const RenderingIntentFlag = {
  ANY: 0x01,
  DISPLAY: 0x02,
  PRINT: 0x04,
  SAVE: 0x08,
  ANNOTATIONS_FORMS: 0x10,
  ANNOTATIONS_STORAGE: 0x20,
  ANNOTATIONS_DISABLE: 0x40,
  OPLIST: 0x100
};
const AnnotationMode = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
};
const util_AnnotationEditorPrefix = "pdfjs_internal_editor_";
const AnnotationEditorType = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
};
const AnnotationEditorParamsType = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35
};
const PermissionFlag = {
  PRINT: 0x04,
  MODIFY_CONTENTS: 0x08,
  COPY: 0x10,
  MODIFY_ANNOTATIONS: 0x20,
  FILL_INTERACTIVE_FORMS: 0x100,
  COPY_FOR_ACCESSIBILITY: 0x200,
  ASSEMBLE: 0x400,
  PRINT_HIGH_QUALITY: 0x800
};
const TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
const util_ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
const AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
const AnnotationReplyType = {
  GROUP: "Group",
  REPLY: "R"
};
const AnnotationFlag = {
  INVISIBLE: 0x01,
  HIDDEN: 0x02,
  PRINT: 0x04,
  NOZOOM: 0x08,
  NOROTATE: 0x10,
  NOVIEW: 0x20,
  READONLY: 0x40,
  LOCKED: 0x80,
  TOGGLENOVIEW: 0x100,
  LOCKEDCONTENTS: 0x200
};
const AnnotationFieldFlag = {
  READONLY: 0x0000001,
  REQUIRED: 0x0000002,
  NOEXPORT: 0x0000004,
  MULTILINE: 0x0001000,
  PASSWORD: 0x0002000,
  NOTOGGLETOOFF: 0x0004000,
  RADIO: 0x0008000,
  PUSHBUTTON: 0x0010000,
  COMBO: 0x0020000,
  EDIT: 0x0040000,
  SORT: 0x0080000,
  FILESELECT: 0x0100000,
  MULTISELECT: 0x0200000,
  DONOTSPELLCHECK: 0x0400000,
  DONOTSCROLL: 0x0800000,
  COMB: 0x1000000,
  RICHTEXT: 0x2000000,
  RADIOSINUNISON: 0x2000000,
  COMMITONSELCHANGE: 0x4000000
};
const AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
const AnnotationActionEventType = {
  E: "Mouse Enter",
  X: "Mouse Exit",
  D: "Mouse Down",
  U: "Mouse Up",
  Fo: "Focus",
  Bl: "Blur",
  PO: "PageOpen",
  PC: "PageClose",
  PV: "PageVisible",
  PI: "PageInvisible",
  K: "Keystroke",
  F: "Format",
  V: "Validate",
  C: "Calculate"
};
const DocumentActionEventType = {
  WC: "WillClose",
  WS: "WillSave",
  DS: "DidSave",
  WP: "WillPrint",
  DP: "DidPrint"
};
const PageActionEventType = {
  O: "PageOpen",
  C: "PageClose"
};
const VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
};
const CMapCompressionType = {
  NONE: 0,
  BINARY: 1
};
const OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
};
const PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let verbosity = VerbosityLevel.WARNINGS;
function setVerbosityLevel(level) {
  if (Number.isInteger(level)) {
    verbosity = level;
  }
}
function getVerbosityLevel() {
  return verbosity;
}
function info(msg) {
  if (verbosity >= VerbosityLevel.INFOS) {
    console.log(`Info: ${msg}`);
  }
}
function util_warn(msg) {
  if (verbosity >= VerbosityLevel.WARNINGS) {
    console.log(`Warning: ${msg}`);
  }
}
function util_unreachable(msg) {
  throw new Error(msg);
}
function util_assert(cond, msg) {
  if (!cond) {
    util_unreachable(msg);
  }
}
function _isValidProtocol(url) {
  switch (url?.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return true;
    default:
      return false;
  }
}
function createValidAbsoluteUrl(url, baseUrl = null, options = null) {
  if (!url) {
    return null;
  }
  try {
    if (options && typeof url === "string") {
      if (options.addDefaultProtocol && url.startsWith("www.")) {
        const dots = url.match(/\./g);
        if (dots?.length >= 2) {
          url = `http://${url}`;
        }
      }
      if (options.tryConvertEncoding) {
        try {
          url = stringToUTF8String(url);
        } catch {}
      }
    }
    const absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);
    if (_isValidProtocol(absoluteUrl)) {
      return absoluteUrl;
    }
  } catch {}
  return null;
}
function util_shadow(obj, prop, value, nonSerializable = false) {
  Object.defineProperty(obj, prop, {
    value,
    enumerable: !nonSerializable,
    configurable: true,
    writable: false
  });
  return value;
}
const BaseException = function BaseExceptionClosure() {
  function BaseException(message, name) {
    if (this.constructor === BaseException) {
      util_unreachable("Cannot initialize BaseException.");
    }
    this.message = message;
    this.name = name;
  }
  BaseException.prototype = new Error();
  BaseException.constructor = BaseException;
  return BaseException;
}();
class PasswordException extends BaseException {
  constructor(msg, code) {
    super(msg, "PasswordException");
    this.code = code;
  }
}
class UnknownErrorException extends BaseException {
  constructor(msg, details) {
    super(msg, "UnknownErrorException");
    this.details = details;
  }
}
class InvalidPDFException extends BaseException {
  constructor(msg) {
    super(msg, "InvalidPDFException");
  }
}
class MissingPDFException extends BaseException {
  constructor(msg) {
    super(msg, "MissingPDFException");
  }
}
class UnexpectedResponseException extends BaseException {
  constructor(msg, status) {
    super(msg, "UnexpectedResponseException");
    this.status = status;
  }
}
class FormatError extends BaseException {
  constructor(msg) {
    super(msg, "FormatError");
  }
}
class AbortException extends BaseException {
  constructor(msg) {
    super(msg, "AbortException");
  }
}
function bytesToString(bytes) {
  if (typeof bytes !== "object" || bytes?.length === undefined) {
    util_unreachable("Invalid argument for bytesToString");
  }
  const length = bytes.length;
  const MAX_ARGUMENT_COUNT = 8192;
  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }
  const strBuf = [];
  for (let i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    const chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    const chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }
  return strBuf.join("");
}
function stringToBytes(str) {
  if (typeof str !== "string") {
    util_unreachable("Invalid argument for stringToBytes");
  }
  const length = str.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 0xff;
  }
  return bytes;
}
function string32(value) {
  return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
}
function util_objectSize(obj) {
  return Object.keys(obj).length;
}
function objectFromMap(map) {
  const obj = Object.create(null);
  for (const [key, value] of map) {
    obj[key] = value;
  }
  return obj;
}
function isLittleEndian() {
  const buffer8 = new Uint8Array(4);
  buffer8[0] = 1;
  const view32 = new Uint32Array(buffer8.buffer, 0, 1);
  return view32[0] === 1;
}
function isEvalSupported() {
  try {
    new Function("");
    return true;
  } catch {
    return false;
  }
}
class util_FeatureTest {
  static get isLittleEndian() {
    return util_shadow(this, "isLittleEndian", isLittleEndian());
  }
  static get isEvalSupported() {
    return util_shadow(this, "isEvalSupported", isEvalSupported());
  }
  static get isOffscreenCanvasSupported() {
    return util_shadow(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas !== "undefined");
  }
  static get platform() {
    if (typeof navigator !== "undefined" && typeof navigator?.platform === "string") {
      return util_shadow(this, "platform", {
        isMac: navigator.platform.includes("Mac")
      });
    }
    return util_shadow(this, "platform", {
      isMac: false
    });
  }
  static get isCSSRoundSupported() {
    return util_shadow(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
  }
}
const hexNumbers = Array.from(Array(256).keys(), n => n.toString(16).padStart(2, "0"));
class util_Util {
  static makeHexColor(r, g, b) {
    return `#${hexNumbers[r]}${hexNumbers[g]}${hexNumbers[b]}`;
  }
  static scaleMinMax(transform, minMax) {
    let temp;
    if (transform[0]) {
      if (transform[0] < 0) {
        temp = minMax[0];
        minMax[0] = minMax[2];
        minMax[2] = temp;
      }
      minMax[0] *= transform[0];
      minMax[2] *= transform[0];
      if (transform[3] < 0) {
        temp = minMax[1];
        minMax[1] = minMax[3];
        minMax[3] = temp;
      }
      minMax[1] *= transform[3];
      minMax[3] *= transform[3];
    } else {
      temp = minMax[0];
      minMax[0] = minMax[1];
      minMax[1] = temp;
      temp = minMax[2];
      minMax[2] = minMax[3];
      minMax[3] = temp;
      if (transform[1] < 0) {
        temp = minMax[1];
        minMax[1] = minMax[3];
        minMax[3] = temp;
      }
      minMax[1] *= transform[1];
      minMax[3] *= transform[1];
      if (transform[2] < 0) {
        temp = minMax[0];
        minMax[0] = minMax[2];
        minMax[2] = temp;
      }
      minMax[0] *= transform[2];
      minMax[2] *= transform[2];
    }
    minMax[0] += transform[4];
    minMax[1] += transform[5];
    minMax[2] += transform[4];
    minMax[3] += transform[5];
  }
  static transform(m1, m2) {
    return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
  }
  static applyTransform(p, m) {
    const xt = p[0] * m[0] + p[1] * m[2] + m[4];
    const yt = p[0] * m[1] + p[1] * m[3] + m[5];
    return [xt, yt];
  }
  static applyInverseTransform(p, m) {
    const d = m[0] * m[3] - m[1] * m[2];
    const xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
    const yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
    return [xt, yt];
  }
  static getAxialAlignedBoundingBox(r, m) {
    const p1 = this.applyTransform(r, m);
    const p2 = this.applyTransform(r.slice(2, 4), m);
    const p3 = this.applyTransform([r[0], r[3]], m);
    const p4 = this.applyTransform([r[2], r[1]], m);
    return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
  }
  static inverseTransform(m) {
    const d = m[0] * m[3] - m[1] * m[2];
    return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
  }
  static singularValueDecompose2dScale(m) {
    const transpose = [m[0], m[2], m[1], m[3]];
    const a = m[0] * transpose[0] + m[1] * transpose[2];
    const b = m[0] * transpose[1] + m[1] * transpose[3];
    const c = m[2] * transpose[0] + m[3] * transpose[2];
    const d = m[2] * transpose[1] + m[3] * transpose[3];
    const first = (a + d) / 2;
    const second = Math.sqrt((a + d) ** 2 - 4 * (a * d - c * b)) / 2;
    const sx = first + second || 1;
    const sy = first - second || 1;
    return [Math.sqrt(sx), Math.sqrt(sy)];
  }
  static normalizeRect(rect) {
    const r = rect.slice(0);
    if (rect[0] > rect[2]) {
      r[0] = rect[2];
      r[2] = rect[0];
    }
    if (rect[1] > rect[3]) {
      r[1] = rect[3];
      r[3] = rect[1];
    }
    return r;
  }
  static intersect(rect1, rect2) {
    const xLow = Math.max(Math.min(rect1[0], rect1[2]), Math.min(rect2[0], rect2[2]));
    const xHigh = Math.min(Math.max(rect1[0], rect1[2]), Math.max(rect2[0], rect2[2]));
    if (xLow > xHigh) {
      return null;
    }
    const yLow = Math.max(Math.min(rect1[1], rect1[3]), Math.min(rect2[1], rect2[3]));
    const yHigh = Math.min(Math.max(rect1[1], rect1[3]), Math.max(rect2[1], rect2[3]));
    if (yLow > yHigh) {
      return null;
    }
    return [xLow, yLow, xHigh, yHigh];
  }
  static #getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, t, minMax) {
    if (t <= 0 || t >= 1) {
      return;
    }
    const mt = 1 - t;
    const tt = t * t;
    const ttt = tt * t;
    const x = mt * (mt * (mt * x0 + 3 * t * x1) + 3 * tt * x2) + ttt * x3;
    const y = mt * (mt * (mt * y0 + 3 * t * y1) + 3 * tt * y2) + ttt * y3;
    minMax[0] = Math.min(minMax[0], x);
    minMax[1] = Math.min(minMax[1], y);
    minMax[2] = Math.max(minMax[2], x);
    minMax[3] = Math.max(minMax[3], y);
  }
  static #getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, a, b, c, minMax) {
    if (Math.abs(a) < 1e-12) {
      if (Math.abs(b) >= 1e-12) {
        this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, -c / b, minMax);
      }
      return;
    }
    const delta = b ** 2 - 4 * c * a;
    if (delta < 0) {
      return;
    }
    const sqrtDelta = Math.sqrt(delta);
    const a2 = 2 * a;
    this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, (-b + sqrtDelta) / a2, minMax);
    this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, (-b - sqrtDelta) / a2, minMax);
  }
  static bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3, minMax) {
    if (minMax) {
      minMax[0] = Math.min(minMax[0], x0, x3);
      minMax[1] = Math.min(minMax[1], y0, y3);
      minMax[2] = Math.max(minMax[2], x0, x3);
      minMax[3] = Math.max(minMax[3], y0, y3);
    } else {
      minMax = [Math.min(x0, x3), Math.min(y0, y3), Math.max(x0, x3), Math.max(y0, y3)];
    }
    this.#getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-x0 + 3 * (x1 - x2) + x3), 6 * (x0 - 2 * x1 + x2), 3 * (x1 - x0), minMax);
    this.#getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-y0 + 3 * (y1 - y2) + y3), 6 * (y0 - 2 * y1 + y2), 3 * (y1 - y0), minMax);
    return minMax;
  }
}
const PDFStringTranslateTable = (/* unused pure expression or super */ null && ([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2d8, 0x2c7, 0x2c6, 0x2d9, 0x2dd, 0x2db, 0x2da, 0x2dc, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203a, 0x2212, 0x2030, 0x201e, 0x201c, 0x201d, 0x2018, 0x2019, 0x201a, 0x2122, 0xfb01, 0xfb02, 0x141, 0x152, 0x160, 0x178, 0x17d, 0x131, 0x142, 0x153, 0x161, 0x17e, 0, 0x20ac]));
function util_stringToPDFString(str) {
  if (str[0] >= "\xEF") {
    let encoding;
    if (str[0] === "\xFE" && str[1] === "\xFF") {
      encoding = "utf-16be";
      if (str.length % 2 === 1) {
        str = str.slice(0, -1);
      }
    } else if (str[0] === "\xFF" && str[1] === "\xFE") {
      encoding = "utf-16le";
      if (str.length % 2 === 1) {
        str = str.slice(0, -1);
      }
    } else if (str[0] === "\xEF" && str[1] === "\xBB" && str[2] === "\xBF") {
      encoding = "utf-8";
    }
    if (encoding) {
      try {
        const decoder = new TextDecoder(encoding, {
          fatal: true
        });
        const buffer = stringToBytes(str);
        const decoded = decoder.decode(buffer);
        if (!decoded.includes("\x1b")) {
          return decoded;
        }
        return decoded.replaceAll(/\x1b[^\x1b]*(?:\x1b|$)/g, "");
      } catch (ex) {
        util_warn(`stringToPDFString: "${ex}".`);
      }
    }
  }
  const strBuf = [];
  for (let i = 0, ii = str.length; i < ii; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode === 0x1b) {
      while (++i < ii && str.charCodeAt(i) !== 0x1b) {}
      continue;
    }
    const code = PDFStringTranslateTable[charCode];
    strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
  }
  return strBuf.join("");
}
function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}
function utf8StringToString(str) {
  return unescape(encodeURIComponent(str));
}
function isArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0, ii = arr1.length; i < ii; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
function getModificationDate(date = new Date()) {
  const buffer = [date.getUTCFullYear().toString(), (date.getUTCMonth() + 1).toString().padStart(2, "0"), date.getUTCDate().toString().padStart(2, "0"), date.getUTCHours().toString().padStart(2, "0"), date.getUTCMinutes().toString().padStart(2, "0"), date.getUTCSeconds().toString().padStart(2, "0")];
  return buffer.join("");
}
let NormalizeRegex = null;
let NormalizationMap = null;
function normalizeUnicode(str) {
  if (!NormalizeRegex) {
    NormalizeRegex = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
    NormalizationMap = new Map([["ﬅ", "ſt"]]);
  }
  return str.replaceAll(NormalizeRegex, (_, p1, p2) => p1 ? p1.normalize("NFKC") : NormalizationMap.get(p2));
}
function getUuid() {
  if (typeof crypto !== "undefined" && typeof crypto?.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const buf = new Uint8Array(32);
  if (typeof crypto !== "undefined" && typeof crypto?.getRandomValues === "function") {
    crypto.getRandomValues(buf);
  } else {
    for (let i = 0; i < 32; i++) {
      buf[i] = Math.floor(Math.random() * 255);
    }
  }
  return bytesToString(buf);
}
const AnnotationPrefix = "pdfjs_internal_id_";
const FontRenderOps = {
  BEZIER_CURVE_TO: 0,
  MOVE_TO: 1,
  LINE_TO: 2,
  QUADRATIC_CURVE_TO: 3,
  RESTORE: 4,
  SAVE: 5,
  SCALE: 6,
  TRANSFORM: 7,
  TRANSLATE: 8
};

;// CONCATENATED MODULE: ./src/core/primitives.js

const CIRCULAR_REF = Symbol("CIRCULAR_REF");
const EOF = Symbol("EOF");
let CmdCache = Object.create(null);
let NameCache = Object.create(null);
let RefCache = Object.create(null);
function clearPrimitiveCaches() {
  CmdCache = Object.create(null);
  NameCache = Object.create(null);
  RefCache = Object.create(null);
}
class Name {
  constructor(name) {
    this.name = name;
  }
  static get(name) {
    return NameCache[name] ||= new Name(name);
  }
}
class Cmd {
  constructor(cmd) {
    this.cmd = cmd;
  }
  static get(cmd) {
    return CmdCache[cmd] ||= new Cmd(cmd);
  }
}
const nonSerializable = function nonSerializableClosure() {
  return nonSerializable;
};
class primitives_Dict {
  constructor(xref = null) {
    this._map = Object.create(null);
    this.xref = xref;
    this.objId = null;
    this.suppressEncryption = false;
    this.__nonSerializable__ = nonSerializable;
  }
  assignXref(newXref) {
    this.xref = newXref;
  }
  get size() {
    return Object.keys(this._map).length;
  }
  get(key1, key2, key3) {
    let value = this._map[key1];
    if (value === undefined && key2 !== undefined) {
      value = this._map[key2];
      if (value === undefined && key3 !== undefined) {
        value = this._map[key3];
      }
    }
    if (value instanceof primitives_Ref && this.xref) {
      return this.xref.fetch(value, this.suppressEncryption);
    }
    return value;
  }
  async getAsync(key1, key2, key3) {
    let value = this._map[key1];
    if (value === undefined && key2 !== undefined) {
      value = this._map[key2];
      if (value === undefined && key3 !== undefined) {
        value = this._map[key3];
      }
    }
    if (value instanceof primitives_Ref && this.xref) {
      return this.xref.fetchAsync(value, this.suppressEncryption);
    }
    return value;
  }
  getArray(key1, key2, key3) {
    let value = this._map[key1];
    if (value === undefined && key2 !== undefined) {
      value = this._map[key2];
      if (value === undefined && key3 !== undefined) {
        value = this._map[key3];
      }
    }
    if (value instanceof primitives_Ref && this.xref) {
      value = this.xref.fetch(value, this.suppressEncryption);
    }
    if (Array.isArray(value)) {
      value = value.slice();
      for (let i = 0, ii = value.length; i < ii; i++) {
        if (value[i] instanceof primitives_Ref && this.xref) {
          value[i] = this.xref.fetch(value[i], this.suppressEncryption);
        }
      }
    }
    return value;
  }
  getRaw(key) {
    return this._map[key];
  }
  getKeys() {
    return Object.keys(this._map);
  }
  getRawValues() {
    return Object.values(this._map);
  }
  set(key, value) {
    this._map[key] = value;
  }
  has(key) {
    return this._map[key] !== undefined;
  }
  forEach(callback) {
    for (const key in this._map) {
      callback(key, this.get(key));
    }
  }
  static get empty() {
    const emptyDict = new primitives_Dict(null);
    emptyDict.set = (key, value) => {
      unreachable("Should not call `set` on the empty dictionary.");
    };
    return shadow(this, "empty", emptyDict);
  }
  static merge({
    xref,
    dictArray,
    mergeSubDicts = false
  }) {
    const mergedDict = new primitives_Dict(xref),
      properties = new Map();
    for (const dict of dictArray) {
      if (!(dict instanceof primitives_Dict)) {
        continue;
      }
      for (const [key, value] of Object.entries(dict._map)) {
        let property = properties.get(key);
        if (property === undefined) {
          property = [];
          properties.set(key, property);
        } else if (!mergeSubDicts || !(value instanceof primitives_Dict)) {
          continue;
        }
        property.push(value);
      }
    }
    for (const [name, values] of properties) {
      if (values.length === 1 || !(values[0] instanceof primitives_Dict)) {
        mergedDict._map[name] = values[0];
        continue;
      }
      const subDict = new primitives_Dict(xref);
      for (const dict of values) {
        for (const [key, value] of Object.entries(dict._map)) {
          if (subDict._map[key] === undefined) {
            subDict._map[key] = value;
          }
        }
      }
      if (subDict.size > 0) {
        mergedDict._map[name] = subDict;
      }
    }
    properties.clear();
    return mergedDict.size > 0 ? mergedDict : primitives_Dict.empty;
  }
  clone() {
    const dict = new primitives_Dict(this.xref);
    for (const key of this.getKeys()) {
      dict.set(key, this.getRaw(key));
    }
    return dict;
  }
}
class primitives_Ref {
  constructor(num, gen) {
    this.num = num;
    this.gen = gen;
  }
  toString() {
    if (this.gen === 0) {
      return `${this.num}R`;
    }
    return `${this.num}R${this.gen}`;
  }
  static fromString(str) {
    const ref = RefCache[str];
    if (ref) {
      return ref;
    }
    const m = /^(\d+)R(\d*)$/.exec(str);
    if (!m || m[1] === "0") {
      return null;
    }
    return RefCache[str] = new primitives_Ref(parseInt(m[1]), !m[2] ? 0 : parseInt(m[2]));
  }
  static get(num, gen) {
    const key = gen === 0 ? `${num}R` : `${num}R${gen}`;
    return RefCache[key] ||= new primitives_Ref(num, gen);
  }
}
class primitives_RefSet {
  constructor(parent = null) {
    this._set = new Set(parent?._set);
  }
  has(ref) {
    return this._set.has(ref.toString());
  }
  put(ref) {
    this._set.add(ref.toString());
  }
  remove(ref) {
    this._set.delete(ref.toString());
  }
  [Symbol.iterator]() {
    return this._set.values();
  }
  clear() {
    this._set.clear();
  }
}
class RefSetCache {
  constructor() {
    this._map = new Map();
  }
  get size() {
    return this._map.size;
  }
  get(ref) {
    return this._map.get(ref.toString());
  }
  has(ref) {
    return this._map.has(ref.toString());
  }
  put(ref, obj) {
    this._map.set(ref.toString(), obj);
  }
  putAlias(ref, aliasRef) {
    this._map.set(ref.toString(), this.get(aliasRef));
  }
  [Symbol.iterator]() {
    return this._map.values();
  }
  clear() {
    this._map.clear();
  }
  *items() {
    for (const [ref, value] of this._map) {
      yield [primitives_Ref.fromString(ref), value];
    }
  }
}
function primitives_isName(v, name) {
  return v instanceof Name && (name === undefined || v.name === name);
}
function isCmd(v, cmd) {
  return v instanceof Cmd && (cmd === undefined || v.cmd === cmd);
}
function isDict(v, type) {
  return v instanceof primitives_Dict && (type === undefined || primitives_isName(v.get("Type"), type));
}
function isRefsEqual(v1, v2) {
  return v1.num === v2.num && v1.gen === v2.gen;
}

;// CONCATENATED MODULE: ./src/core/base_stream.js

class base_stream_BaseStream {
  constructor() {
    if (this.constructor === base_stream_BaseStream) {
      util_unreachable("Cannot initialize BaseStream.");
    }
  }
  get length() {
    util_unreachable("Abstract getter `length` accessed");
  }
  get isEmpty() {
    util_unreachable("Abstract getter `isEmpty` accessed");
  }
  get isDataLoaded() {
    return util_shadow(this, "isDataLoaded", true);
  }
  getByte() {
    util_unreachable("Abstract method `getByte` called");
  }
  getBytes(length) {
    util_unreachable("Abstract method `getBytes` called");
  }
  peekByte() {
    const peekedByte = this.getByte();
    if (peekedByte !== -1) {
      this.pos--;
    }
    return peekedByte;
  }
  peekBytes(length) {
    const bytes = this.getBytes(length);
    this.pos -= bytes.length;
    return bytes;
  }
  getUint16() {
    const b0 = this.getByte();
    const b1 = this.getByte();
    if (b0 === -1 || b1 === -1) {
      return -1;
    }
    return (b0 << 8) + b1;
  }
  getInt32() {
    const b0 = this.getByte();
    const b1 = this.getByte();
    const b2 = this.getByte();
    const b3 = this.getByte();
    return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
  }
  getByteRange(begin, end) {
    util_unreachable("Abstract method `getByteRange` called");
  }
  getString(length) {
    return bytesToString(this.getBytes(length));
  }
  skip(n) {
    this.pos += n || 1;
  }
  reset() {
    util_unreachable("Abstract method `reset` called");
  }
  moveStart() {
    util_unreachable("Abstract method `moveStart` called");
  }
  makeSubStream(start, length, dict = null) {
    util_unreachable("Abstract method `makeSubStream` called");
  }
  getBaseStreams() {
    return null;
  }
}

;// CONCATENATED MODULE: ./src/core/core_utils.js



const PDF_VERSION_REGEXP = /^[1-9]\.\d$/;
function getLookupTableFactory(initializer) {
  let lookup;
  return function () {
    if (initializer) {
      lookup = Object.create(null);
      initializer(lookup);
      initializer = null;
    }
    return lookup;
  };
}
class MissingDataException extends BaseException {
  constructor(begin, end) {
    super(`Missing data [${begin}, ${end})`, "MissingDataException");
    this.begin = begin;
    this.end = end;
  }
}
class ParserEOFException extends BaseException {
  constructor(msg) {
    super(msg, "ParserEOFException");
  }
}
class XRefEntryException extends BaseException {
  constructor(msg) {
    super(msg, "XRefEntryException");
  }
}
class XRefParseException extends BaseException {
  constructor(msg) {
    super(msg, "XRefParseException");
  }
}
function arrayBuffersToBytes(arr) {
  const length = arr.length;
  if (length === 0) {
    return new Uint8Array(0);
  }
  if (length === 1) {
    return new Uint8Array(arr[0]);
  }
  let dataLength = 0;
  for (let i = 0; i < length; i++) {
    dataLength += arr[i].byteLength;
  }
  const data = new Uint8Array(dataLength);
  let pos = 0;
  for (let i = 0; i < length; i++) {
    const item = new Uint8Array(arr[i]);
    data.set(item, pos);
    pos += item.byteLength;
  }
  return data;
}
function getInheritableProperty({
  dict,
  key,
  getArray = false,
  stopWhenFound = true
}) {
  let values;
  const visited = new RefSet();
  while (dict instanceof Dict && !(dict.objId && visited.has(dict.objId))) {
    if (dict.objId) {
      visited.put(dict.objId);
    }
    const value = getArray ? dict.getArray(key) : dict.get(key);
    if (value !== undefined) {
      if (stopWhenFound) {
        return value;
      }
      (values ||= []).push(value);
    }
    dict = dict.get("Parent");
  }
  return values;
}
const ROMAN_NUMBER_MAP = (/* unused pure expression or super */ null && (["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]));
function toRomanNumerals(number, lowerCase = false) {
  assert(Number.isInteger(number) && number > 0, "The number should be a positive integer.");
  const romanBuf = [];
  let pos;
  while (number >= 1000) {
    number -= 1000;
    romanBuf.push("M");
  }
  pos = number / 100 | 0;
  number %= 100;
  romanBuf.push(ROMAN_NUMBER_MAP[pos]);
  pos = number / 10 | 0;
  number %= 10;
  romanBuf.push(ROMAN_NUMBER_MAP[10 + pos]);
  romanBuf.push(ROMAN_NUMBER_MAP[20 + number]);
  const romanStr = romanBuf.join("");
  return lowerCase ? romanStr.toLowerCase() : romanStr;
}
function log2(x) {
  if (x <= 0) {
    return 0;
  }
  return Math.ceil(Math.log2(x));
}
function readInt8(data, offset) {
  return data[offset] << 24 >> 24;
}
function readUint16(data, offset) {
  return data[offset] << 8 | data[offset + 1];
}
function readUint32(data, offset) {
  return (data[offset] << 24 | data[offset + 1] << 16 | data[offset + 2] << 8 | data[offset + 3]) >>> 0;
}
function isWhiteSpace(ch) {
  return ch === 0x20 || ch === 0x09 || ch === 0x0d || ch === 0x0a;
}
function isBooleanArray(arr, len) {
  return Array.isArray(arr) && (len === null || arr.length === len) && arr.every(x => typeof x === "boolean");
}
function isNumberArray(arr, len) {
  return Array.isArray(arr) && (len === null || arr.length === len) && arr.every(x => typeof x === "number");
}
function lookupMatrix(arr, fallback) {
  return isNumberArray(arr, 6) ? arr : fallback;
}
function lookupRect(arr, fallback) {
  return isNumberArray(arr, 4) ? arr : fallback;
}
function lookupNormalRect(arr, fallback) {
  return isNumberArray(arr, 4) ? Util.normalizeRect(arr) : fallback;
}
function parseXFAPath(path) {
  const positionPattern = /(.+)\[(\d+)\]$/;
  return path.split(".").map(component => {
    const m = component.match(positionPattern);
    if (m) {
      return {
        name: m[1],
        pos: parseInt(m[2], 10)
      };
    }
    return {
      name: component,
      pos: 0
    };
  });
}
function escapePDFName(str) {
  const buffer = [];
  let start = 0;
  for (let i = 0, ii = str.length; i < ii; i++) {
    const char = str.charCodeAt(i);
    if (char < 0x21 || char > 0x7e || char === 0x23 || char === 0x28 || char === 0x29 || char === 0x3c || char === 0x3e || char === 0x5b || char === 0x5d || char === 0x7b || char === 0x7d || char === 0x2f || char === 0x25) {
      if (start < i) {
        buffer.push(str.substring(start, i));
      }
      buffer.push(`#${char.toString(16)}`);
      start = i + 1;
    }
  }
  if (buffer.length === 0) {
    return str;
  }
  if (start < str.length) {
    buffer.push(str.substring(start, str.length));
  }
  return buffer.join("");
}
function escapeString(str) {
  return str.replaceAll(/([()\\\n\r])/g, match => {
    if (match === "\n") {
      return "\\n";
    } else if (match === "\r") {
      return "\\r";
    }
    return `\\${match}`;
  });
}
function _collectJS(entry, xref, list, parents) {
  if (!entry) {
    return;
  }
  let parent = null;
  if (entry instanceof Ref) {
    if (parents.has(entry)) {
      return;
    }
    parent = entry;
    parents.put(parent);
    entry = xref.fetch(entry);
  }
  if (Array.isArray(entry)) {
    for (const element of entry) {
      _collectJS(element, xref, list, parents);
    }
  } else if (entry instanceof Dict) {
    if (isName(entry.get("S"), "JavaScript")) {
      const js = entry.get("JS");
      let code;
      if (js instanceof BaseStream) {
        code = js.getString();
      } else if (typeof js === "string") {
        code = js;
      }
      code &&= stringToPDFString(code).replaceAll("\x00", "");
      if (code) {
        list.push(code);
      }
    }
    _collectJS(entry.getRaw("Next"), xref, list, parents);
  }
  if (parent) {
    parents.remove(parent);
  }
}
function collectActions(xref, dict, eventType) {
  const actions = Object.create(null);
  const additionalActionsDicts = getInheritableProperty({
    dict,
    key: "AA",
    stopWhenFound: false
  });
  if (additionalActionsDicts) {
    for (let i = additionalActionsDicts.length - 1; i >= 0; i--) {
      const additionalActions = additionalActionsDicts[i];
      if (!(additionalActions instanceof Dict)) {
        continue;
      }
      for (const key of additionalActions.getKeys()) {
        const action = eventType[key];
        if (!action) {
          continue;
        }
        const actionDict = additionalActions.getRaw(key);
        const parents = new RefSet();
        const list = [];
        _collectJS(actionDict, xref, list, parents);
        if (list.length > 0) {
          actions[action] = list;
        }
      }
    }
  }
  if (dict.has("A")) {
    const actionDict = dict.get("A");
    const parents = new RefSet();
    const list = [];
    _collectJS(actionDict, xref, list, parents);
    if (list.length > 0) {
      actions.Action = list;
    }
  }
  return objectSize(actions) > 0 ? actions : null;
}
const XMLEntities = {
  0x3c: "&lt;",
  0x3e: "&gt;",
  0x26: "&amp;",
  0x22: "&quot;",
  0x27: "&apos;"
};
function* codePointIter(str) {
  for (let i = 0, ii = str.length; i < ii; i++) {
    const char = str.codePointAt(i);
    if (char > 0xd7ff && (char < 0xe000 || char > 0xfffd)) {
      i++;
    }
    yield char;
  }
}
function encodeToXmlString(str) {
  const buffer = [];
  let start = 0;
  for (let i = 0, ii = str.length; i < ii; i++) {
    const char = str.codePointAt(i);
    if (0x20 <= char && char <= 0x7e) {
      const entity = XMLEntities[char];
      if (entity) {
        if (start < i) {
          buffer.push(str.substring(start, i));
        }
        buffer.push(entity);
        start = i + 1;
      }
    } else {
      if (start < i) {
        buffer.push(str.substring(start, i));
      }
      buffer.push(`&#x${char.toString(16).toUpperCase()};`);
      if (char > 0xd7ff && (char < 0xe000 || char > 0xfffd)) {
        i++;
      }
      start = i + 1;
    }
  }
  if (buffer.length === 0) {
    return str;
  }
  if (start < str.length) {
    buffer.push(str.substring(start, str.length));
  }
  return buffer.join("");
}
function validateFontName(fontFamily, mustWarn = false) {
  const m = /^("|').*("|')$/.exec(fontFamily);
  if (m && m[1] === m[2]) {
    const re = new RegExp(`[^\\\\]${m[1]}`);
    if (re.test(fontFamily.slice(1, -1))) {
      if (mustWarn) {
        warn(`FontFamily contains unescaped ${m[1]}: ${fontFamily}.`);
      }
      return false;
    }
  } else {
    for (const ident of fontFamily.split(/[ \t]+/)) {
      if (/^(\d|(-(\d|-)))/.test(ident) || !/^[\w-\\]+$/.test(ident)) {
        if (mustWarn) {
          warn(`FontFamily contains invalid <custom-ident>: ${fontFamily}.`);
        }
        return false;
      }
    }
  }
  return true;
}
function validateCSSFont(cssFontInfo) {
  const DEFAULT_CSS_FONT_OBLIQUE = "14";
  const DEFAULT_CSS_FONT_WEIGHT = "400";
  const CSS_FONT_WEIGHT_VALUES = new Set(["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000", "normal", "bold", "bolder", "lighter"]);
  const {
    fontFamily,
    fontWeight,
    italicAngle
  } = cssFontInfo;
  if (!validateFontName(fontFamily, true)) {
    return false;
  }
  const weight = fontWeight ? fontWeight.toString() : "";
  cssFontInfo.fontWeight = CSS_FONT_WEIGHT_VALUES.has(weight) ? weight : DEFAULT_CSS_FONT_WEIGHT;
  const angle = parseFloat(italicAngle);
  cssFontInfo.italicAngle = isNaN(angle) || angle < -90 || angle > 90 ? DEFAULT_CSS_FONT_OBLIQUE : italicAngle.toString();
  return true;
}
function recoverJsURL(str) {
  const URL_OPEN_METHODS = ["app.launchURL", "window.open", "xfa.host.gotoURL"];
  const regex = new RegExp("^\\s*(" + URL_OPEN_METHODS.join("|").replaceAll(".", "\\.") + ")\\((?:'|\")([^'\"]*)(?:'|\")(?:,\\s*(\\w+)\\)|\\))", "i");
  const jsUrl = regex.exec(str);
  if (jsUrl?.[2]) {
    const url = jsUrl[2];
    let newWindow = false;
    if (jsUrl[3] === "true" && jsUrl[1] === "app.launchURL") {
      newWindow = true;
    }
    return {
      url,
      newWindow
    };
  }
  return null;
}
function numberToString(value) {
  if (Number.isInteger(value)) {
    return value.toString();
  }
  const roundedValue = Math.round(value * 100);
  if (roundedValue % 100 === 0) {
    return (roundedValue / 100).toString();
  }
  if (roundedValue % 10 === 0) {
    return value.toFixed(1);
  }
  return value.toFixed(2);
}
function getNewAnnotationsMap(annotationStorage) {
  if (!annotationStorage) {
    return null;
  }
  const newAnnotationsByPage = new Map();
  for (const [key, value] of annotationStorage) {
    if (!key.startsWith(AnnotationEditorPrefix)) {
      continue;
    }
    let annotations = newAnnotationsByPage.get(value.pageIndex);
    if (!annotations) {
      annotations = [];
      newAnnotationsByPage.set(value.pageIndex, annotations);
    }
    annotations.push(value);
  }
  return newAnnotationsByPage.size > 0 ? newAnnotationsByPage : null;
}
function isAscii(str) {
  return /^[\x00-\x7F]*$/.test(str);
}
function stringToUTF16HexString(str) {
  const buf = [];
  for (let i = 0, ii = str.length; i < ii; i++) {
    const char = str.charCodeAt(i);
    buf.push((char >> 8 & 0xff).toString(16).padStart(2, "0"), (char & 0xff).toString(16).padStart(2, "0"));
  }
  return buf.join("");
}
function stringToUTF16String(str, bigEndian = false) {
  const buf = [];
  if (bigEndian) {
    buf.push("\xFE\xFF");
  }
  for (let i = 0, ii = str.length; i < ii; i++) {
    const char = str.charCodeAt(i);
    buf.push(String.fromCharCode(char >> 8 & 0xff), String.fromCharCode(char & 0xff));
  }
  return buf.join("");
}
function getRotationMatrix(rotation, width, height) {
  switch (rotation) {
    case 90:
      return [0, 1, -1, 0, width, 0];
    case 180:
      return [-1, 0, 0, -1, width, height];
    case 270:
      return [0, -1, 1, 0, 0, height];
    default:
      throw new Error("Invalid rotation");
  }
}
function getSizeInBytes(x) {
  return Math.ceil(Math.ceil(Math.log2(1 + x)) / 8);
}

;// CONCATENATED MODULE: ./src/core/arithmetic_decoder.js
const QeTable = [{
  qe: 0x5601,
  nmps: 1,
  nlps: 1,
  switchFlag: 1
}, {
  qe: 0x3401,
  nmps: 2,
  nlps: 6,
  switchFlag: 0
}, {
  qe: 0x1801,
  nmps: 3,
  nlps: 9,
  switchFlag: 0
}, {
  qe: 0x0ac1,
  nmps: 4,
  nlps: 12,
  switchFlag: 0
}, {
  qe: 0x0521,
  nmps: 5,
  nlps: 29,
  switchFlag: 0
}, {
  qe: 0x0221,
  nmps: 38,
  nlps: 33,
  switchFlag: 0
}, {
  qe: 0x5601,
  nmps: 7,
  nlps: 6,
  switchFlag: 1
}, {
  qe: 0x5401,
  nmps: 8,
  nlps: 14,
  switchFlag: 0
}, {
  qe: 0x4801,
  nmps: 9,
  nlps: 14,
  switchFlag: 0
}, {
  qe: 0x3801,
  nmps: 10,
  nlps: 14,
  switchFlag: 0
}, {
  qe: 0x3001,
  nmps: 11,
  nlps: 17,
  switchFlag: 0
}, {
  qe: 0x2401,
  nmps: 12,
  nlps: 18,
  switchFlag: 0
}, {
  qe: 0x1c01,
  nmps: 13,
  nlps: 20,
  switchFlag: 0
}, {
  qe: 0x1601,
  nmps: 29,
  nlps: 21,
  switchFlag: 0
}, {
  qe: 0x5601,
  nmps: 15,
  nlps: 14,
  switchFlag: 1
}, {
  qe: 0x5401,
  nmps: 16,
  nlps: 14,
  switchFlag: 0
}, {
  qe: 0x5101,
  nmps: 17,
  nlps: 15,
  switchFlag: 0
}, {
  qe: 0x4801,
  nmps: 18,
  nlps: 16,
  switchFlag: 0
}, {
  qe: 0x3801,
  nmps: 19,
  nlps: 17,
  switchFlag: 0
}, {
  qe: 0x3401,
  nmps: 20,
  nlps: 18,
  switchFlag: 0
}, {
  qe: 0x3001,
  nmps: 21,
  nlps: 19,
  switchFlag: 0
}, {
  qe: 0x2801,
  nmps: 22,
  nlps: 19,
  switchFlag: 0
}, {
  qe: 0x2401,
  nmps: 23,
  nlps: 20,
  switchFlag: 0
}, {
  qe: 0x2201,
  nmps: 24,
  nlps: 21,
  switchFlag: 0
}, {
  qe: 0x1c01,
  nmps: 25,
  nlps: 22,
  switchFlag: 0
}, {
  qe: 0x1801,
  nmps: 26,
  nlps: 23,
  switchFlag: 0
}, {
  qe: 0x1601,
  nmps: 27,
  nlps: 24,
  switchFlag: 0
}, {
  qe: 0x1401,
  nmps: 28,
  nlps: 25,
  switchFlag: 0
}, {
  qe: 0x1201,
  nmps: 29,
  nlps: 26,
  switchFlag: 0
}, {
  qe: 0x1101,
  nmps: 30,
  nlps: 27,
  switchFlag: 0
}, {
  qe: 0x0ac1,
  nmps: 31,
  nlps: 28,
  switchFlag: 0
}, {
  qe: 0x09c1,
  nmps: 32,
  nlps: 29,
  switchFlag: 0
}, {
  qe: 0x08a1,
  nmps: 33,
  nlps: 30,
  switchFlag: 0
}, {
  qe: 0x0521,
  nmps: 34,
  nlps: 31,
  switchFlag: 0
}, {
  qe: 0x0441,
  nmps: 35,
  nlps: 32,
  switchFlag: 0
}, {
  qe: 0x02a1,
  nmps: 36,
  nlps: 33,
  switchFlag: 0
}, {
  qe: 0x0221,
  nmps: 37,
  nlps: 34,
  switchFlag: 0
}, {
  qe: 0x0141,
  nmps: 38,
  nlps: 35,
  switchFlag: 0
}, {
  qe: 0x0111,
  nmps: 39,
  nlps: 36,
  switchFlag: 0
}, {
  qe: 0x0085,
  nmps: 40,
  nlps: 37,
  switchFlag: 0
}, {
  qe: 0x0049,
  nmps: 41,
  nlps: 38,
  switchFlag: 0
}, {
  qe: 0x0025,
  nmps: 42,
  nlps: 39,
  switchFlag: 0
}, {
  qe: 0x0015,
  nmps: 43,
  nlps: 40,
  switchFlag: 0
}, {
  qe: 0x0009,
  nmps: 44,
  nlps: 41,
  switchFlag: 0
}, {
  qe: 0x0005,
  nmps: 45,
  nlps: 42,
  switchFlag: 0
}, {
  qe: 0x0001,
  nmps: 45,
  nlps: 43,
  switchFlag: 0
}, {
  qe: 0x5601,
  nmps: 46,
  nlps: 46,
  switchFlag: 0
}];
class ArithmeticDecoder {
  constructor(data, start, end) {
    this.data = data;
    this.bp = start;
    this.dataEnd = end;
    this.chigh = data[start];
    this.clow = 0;
    this.byteIn();
    this.chigh = this.chigh << 7 & 0xffff | this.clow >> 9 & 0x7f;
    this.clow = this.clow << 7 & 0xffff;
    this.ct -= 7;
    this.a = 0x8000;
  }
  byteIn() {
    const data = this.data;
    let bp = this.bp;
    if (data[bp] === 0xff) {
      if (data[bp + 1] > 0x8f) {
        this.clow += 0xff00;
        this.ct = 8;
      } else {
        bp++;
        this.clow += data[bp] << 9;
        this.ct = 7;
        this.bp = bp;
      }
    } else {
      bp++;
      this.clow += bp < this.dataEnd ? data[bp] << 8 : 0xff00;
      this.ct = 8;
      this.bp = bp;
    }
    if (this.clow > 0xffff) {
      this.chigh += this.clow >> 16;
      this.clow &= 0xffff;
    }
  }
  readBit(contexts, pos) {
    let cx_index = contexts[pos] >> 1,
      cx_mps = contexts[pos] & 1;
    const qeTableIcx = QeTable[cx_index];
    const qeIcx = qeTableIcx.qe;
    let d;
    let a = this.a - qeIcx;
    if (this.chigh < qeIcx) {
      if (a < qeIcx) {
        a = qeIcx;
        d = cx_mps;
        cx_index = qeTableIcx.nmps;
      } else {
        a = qeIcx;
        d = 1 ^ cx_mps;
        if (qeTableIcx.switchFlag === 1) {
          cx_mps = d;
        }
        cx_index = qeTableIcx.nlps;
      }
    } else {
      this.chigh -= qeIcx;
      if ((a & 0x8000) !== 0) {
        this.a = a;
        return cx_mps;
      }
      if (a < qeIcx) {
        d = 1 ^ cx_mps;
        if (qeTableIcx.switchFlag === 1) {
          cx_mps = d;
        }
        cx_index = qeTableIcx.nlps;
      } else {
        d = cx_mps;
        cx_index = qeTableIcx.nmps;
      }
    }
    do {
      if (this.ct === 0) {
        this.byteIn();
      }
      a <<= 1;
      this.chigh = this.chigh << 1 & 0xffff | this.clow >> 15 & 1;
      this.clow = this.clow << 1 & 0xffff;
      this.ct--;
    } while ((a & 0x8000) === 0);
    this.a = a;
    contexts[pos] = cx_index << 1 | cx_mps;
    return d;
  }
}

;// CONCATENATED MODULE: ./src/core/ccitt.js

const ccittEOL = -2;
const ccittEOF = -1;
const twoDimPass = 0;
const twoDimHoriz = 1;
const twoDimVert0 = 2;
const twoDimVertR1 = 3;
const twoDimVertL1 = 4;
const twoDimVertR2 = 5;
const twoDimVertL2 = 6;
const twoDimVertR3 = 7;
const twoDimVertL3 = 8;
const twoDimTable = [[-1, -1], [-1, -1], [7, twoDimVertL3], [7, twoDimVertR3], [6, twoDimVertL2], [6, twoDimVertL2], [6, twoDimVertR2], [6, twoDimVertR2], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0]];
const whiteTable1 = [[-1, -1], [12, ccittEOL], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [11, 1792], [11, 1792], [12, 1984], [12, 2048], [12, 2112], [12, 2176], [12, 2240], [12, 2304], [11, 1856], [11, 1856], [11, 1920], [11, 1920], [12, 2368], [12, 2432], [12, 2496], [12, 2560]];
const whiteTable2 = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [8, 29], [8, 29], [8, 30], [8, 30], [8, 45], [8, 45], [8, 46], [8, 46], [7, 22], [7, 22], [7, 22], [7, 22], [7, 23], [7, 23], [7, 23], [7, 23], [8, 47], [8, 47], [8, 48], [8, 48], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [7, 20], [7, 20], [7, 20], [7, 20], [8, 33], [8, 33], [8, 34], [8, 34], [8, 35], [8, 35], [8, 36], [8, 36], [8, 37], [8, 37], [8, 38], [8, 38], [7, 19], [7, 19], [7, 19], [7, 19], [8, 31], [8, 31], [8, 32], [8, 32], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [8, 53], [8, 53], [8, 54], [8, 54], [7, 26], [7, 26], [7, 26], [7, 26], [8, 39], [8, 39], [8, 40], [8, 40], [8, 41], [8, 41], [8, 42], [8, 42], [8, 43], [8, 43], [8, 44], [8, 44], [7, 21], [7, 21], [7, 21], [7, 21], [7, 28], [7, 28], [7, 28], [7, 28], [8, 61], [8, 61], [8, 62], [8, 62], [8, 63], [8, 63], [8, 0], [8, 0], [8, 320], [8, 320], [8, 384], [8, 384], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [7, 27], [7, 27], [7, 27], [7, 27], [8, 59], [8, 59], [8, 60], [8, 60], [9, 1472], [9, 1536], [9, 1600], [9, 1728], [7, 18], [7, 18], [7, 18], [7, 18], [7, 24], [7, 24], [7, 24], [7, 24], [8, 49], [8, 49], [8, 50], [8, 50], [8, 51], [8, 51], [8, 52], [8, 52], [7, 25], [7, 25], [7, 25], [7, 25], [8, 55], [8, 55], [8, 56], [8, 56], [8, 57], [8, 57], [8, 58], [8, 58], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [8, 448], [8, 448], [8, 512], [8, 512], [9, 704], [9, 768], [8, 640], [8, 640], [8, 576], [8, 576], [9, 832], [9, 896], [9, 960], [9, 1024], [9, 1088], [9, 1152], [9, 1216], [9, 1280], [9, 1344], [9, 1408], [7, 256], [7, 256], [7, 256], [7, 256], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7]];
const blackTable1 = [[-1, -1], [-1, -1], [12, ccittEOL], [12, ccittEOL], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [11, 1792], [11, 1792], [11, 1792], [11, 1792], [12, 1984], [12, 1984], [12, 2048], [12, 2048], [12, 2112], [12, 2112], [12, 2176], [12, 2176], [12, 2240], [12, 2240], [12, 2304], [12, 2304], [11, 1856], [11, 1856], [11, 1856], [11, 1856], [11, 1920], [11, 1920], [11, 1920], [11, 1920], [12, 2368], [12, 2368], [12, 2432], [12, 2432], [12, 2496], [12, 2496], [12, 2560], [12, 2560], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [12, 52], [12, 52], [13, 640], [13, 704], [13, 768], [13, 832], [12, 55], [12, 55], [12, 56], [12, 56], [13, 1280], [13, 1344], [13, 1408], [13, 1472], [12, 59], [12, 59], [12, 60], [12, 60], [13, 1536], [13, 1600], [11, 24], [11, 24], [11, 24], [11, 24], [11, 25], [11, 25], [11, 25], [11, 25], [13, 1664], [13, 1728], [12, 320], [12, 320], [12, 384], [12, 384], [12, 448], [12, 448], [13, 512], [13, 576], [12, 53], [12, 53], [12, 54], [12, 54], [13, 896], [13, 960], [13, 1024], [13, 1088], [13, 1152], [13, 1216], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64]];
const blackTable2 = [[8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [11, 23], [11, 23], [12, 50], [12, 51], [12, 44], [12, 45], [12, 46], [12, 47], [12, 57], [12, 58], [12, 61], [12, 256], [10, 16], [10, 16], [10, 16], [10, 16], [10, 17], [10, 17], [10, 17], [10, 17], [12, 48], [12, 49], [12, 62], [12, 63], [12, 30], [12, 31], [12, 32], [12, 33], [12, 40], [12, 41], [11, 22], [11, 22], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [12, 128], [12, 192], [12, 26], [12, 27], [12, 28], [12, 29], [11, 19], [11, 19], [11, 20], [11, 20], [12, 34], [12, 35], [12, 36], [12, 37], [12, 38], [12, 39], [11, 21], [11, 21], [12, 42], [12, 43], [10, 0], [10, 0], [10, 0], [10, 0], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12]];
const blackTable3 = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [6, 9], [6, 8], [5, 7], [5, 7], [4, 6], [4, 6], [4, 6], [4, 6], [4, 5], [4, 5], [4, 5], [4, 5], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]];
class CCITTFaxDecoder {
  constructor(source, options = {}) {
    if (!source || typeof source.next !== "function") {
      throw new Error('CCITTFaxDecoder - invalid "source" parameter.');
    }
    this.source = source;
    this.eof = false;
    this.encoding = options.K || 0;
    this.eoline = options.EndOfLine || false;
    this.byteAlign = options.EncodedByteAlign || false;
    this.columns = options.Columns || 1728;
    this.rows = options.Rows || 0;
    this.eoblock = options.EndOfBlock ?? true;
    this.black = options.BlackIs1 || false;
    this.codingLine = new Uint32Array(this.columns + 1);
    this.refLine = new Uint32Array(this.columns + 2);
    this.codingLine[0] = this.columns;
    this.codingPos = 0;
    this.row = 0;
    this.nextLine2D = this.encoding < 0;
    this.inputBits = 0;
    this.inputBuf = 0;
    this.outputBits = 0;
    this.rowsDone = false;
    let code1;
    while ((code1 = this._lookBits(12)) === 0) {
      this._eatBits(1);
    }
    if (code1 === 1) {
      this._eatBits(12);
    }
    if (this.encoding > 0) {
      this.nextLine2D = !this._lookBits(1);
      this._eatBits(1);
    }
  }
  readNextChar() {
    if (this.eof) {
      return -1;
    }
    const refLine = this.refLine;
    const codingLine = this.codingLine;
    const columns = this.columns;
    let refPos, blackPixels, bits, i;
    if (this.outputBits === 0) {
      if (this.rowsDone) {
        this.eof = true;
      }
      if (this.eof) {
        return -1;
      }
      this.err = false;
      let code1, code2, code3;
      if (this.nextLine2D) {
        for (i = 0; codingLine[i] < columns; ++i) {
          refLine[i] = codingLine[i];
        }
        refLine[i++] = columns;
        refLine[i] = columns;
        codingLine[0] = 0;
        this.codingPos = 0;
        refPos = 0;
        blackPixels = 0;
        while (codingLine[this.codingPos] < columns) {
          code1 = this._getTwoDimCode();
          switch (code1) {
            case twoDimPass:
              this._addPixels(refLine[refPos + 1], blackPixels);
              if (refLine[refPos + 1] < columns) {
                refPos += 2;
              }
              break;
            case twoDimHoriz:
              code1 = code2 = 0;
              if (blackPixels) {
                do {
                  code1 += code3 = this._getBlackCode();
                } while (code3 >= 64);
                do {
                  code2 += code3 = this._getWhiteCode();
                } while (code3 >= 64);
              } else {
                do {
                  code1 += code3 = this._getWhiteCode();
                } while (code3 >= 64);
                do {
                  code2 += code3 = this._getBlackCode();
                } while (code3 >= 64);
              }
              this._addPixels(codingLine[this.codingPos] + code1, blackPixels);
              if (codingLine[this.codingPos] < columns) {
                this._addPixels(codingLine[this.codingPos] + code2, blackPixels ^ 1);
              }
              while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                refPos += 2;
              }
              break;
            case twoDimVertR3:
              this._addPixels(refLine[refPos] + 3, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                ++refPos;
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertR2:
              this._addPixels(refLine[refPos] + 2, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                ++refPos;
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertR1:
              this._addPixels(refLine[refPos] + 1, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                ++refPos;
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVert0:
              this._addPixels(refLine[refPos], blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                ++refPos;
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertL3:
              this._addPixelsNeg(refLine[refPos] - 3, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                if (refPos > 0) {
                  --refPos;
                } else {
                  ++refPos;
                }
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertL2:
              this._addPixelsNeg(refLine[refPos] - 2, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                if (refPos > 0) {
                  --refPos;
                } else {
                  ++refPos;
                }
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertL1:
              this._addPixelsNeg(refLine[refPos] - 1, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                if (refPos > 0) {
                  --refPos;
                } else {
                  ++refPos;
                }
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case ccittEOF:
              this._addPixels(columns, 0);
              this.eof = true;
              break;
            default:
              info("bad 2d code");
              this._addPixels(columns, 0);
              this.err = true;
          }
        }
      } else {
        codingLine[0] = 0;
        this.codingPos = 0;
        blackPixels = 0;
        while (codingLine[this.codingPos] < columns) {
          code1 = 0;
          if (blackPixels) {
            do {
              code1 += code3 = this._getBlackCode();
            } while (code3 >= 64);
          } else {
            do {
              code1 += code3 = this._getWhiteCode();
            } while (code3 >= 64);
          }
          this._addPixels(codingLine[this.codingPos] + code1, blackPixels);
          blackPixels ^= 1;
        }
      }
      let gotEOL = false;
      if (this.byteAlign) {
        this.inputBits &= ~7;
      }
      if (!this.eoblock && this.row === this.rows - 1) {
        this.rowsDone = true;
      } else {
        code1 = this._lookBits(12);
        if (this.eoline) {
          while (code1 !== ccittEOF && code1 !== 1) {
            this._eatBits(1);
            code1 = this._lookBits(12);
          }
        } else {
          while (code1 === 0) {
            this._eatBits(1);
            code1 = this._lookBits(12);
          }
        }
        if (code1 === 1) {
          this._eatBits(12);
          gotEOL = true;
        } else if (code1 === ccittEOF) {
          this.eof = true;
        }
      }
      if (!this.eof && this.encoding > 0 && !this.rowsDone) {
        this.nextLine2D = !this._lookBits(1);
        this._eatBits(1);
      }
      if (this.eoblock && gotEOL && this.byteAlign) {
        code1 = this._lookBits(12);
        if (code1 === 1) {
          this._eatBits(12);
          if (this.encoding > 0) {
            this._lookBits(1);
            this._eatBits(1);
          }
          if (this.encoding >= 0) {
            for (i = 0; i < 4; ++i) {
              code1 = this._lookBits(12);
              if (code1 !== 1) {
                info("bad rtc code: " + code1);
              }
              this._eatBits(12);
              if (this.encoding > 0) {
                this._lookBits(1);
                this._eatBits(1);
              }
            }
          }
          this.eof = true;
        }
      } else if (this.err && this.eoline) {
        while (true) {
          code1 = this._lookBits(13);
          if (code1 === ccittEOF) {
            this.eof = true;
            return -1;
          }
          if (code1 >> 1 === 1) {
            break;
          }
          this._eatBits(1);
        }
        this._eatBits(12);
        if (this.encoding > 0) {
          this._eatBits(1);
          this.nextLine2D = !(code1 & 1);
        }
      }
      this.outputBits = codingLine[0] > 0 ? codingLine[this.codingPos = 0] : codingLine[this.codingPos = 1];
      this.row++;
    }
    let c;
    if (this.outputBits >= 8) {
      c = this.codingPos & 1 ? 0 : 0xff;
      this.outputBits -= 8;
      if (this.outputBits === 0 && codingLine[this.codingPos] < columns) {
        this.codingPos++;
        this.outputBits = codingLine[this.codingPos] - codingLine[this.codingPos - 1];
      }
    } else {
      bits = 8;
      c = 0;
      do {
        if (typeof this.outputBits !== "number") {
          throw new FormatError('Invalid /CCITTFaxDecode data, "outputBits" must be a number.');
        }
        if (this.outputBits > bits) {
          c <<= bits;
          if (!(this.codingPos & 1)) {
            c |= 0xff >> 8 - bits;
          }
          this.outputBits -= bits;
          bits = 0;
        } else {
          c <<= this.outputBits;
          if (!(this.codingPos & 1)) {
            c |= 0xff >> 8 - this.outputBits;
          }
          bits -= this.outputBits;
          this.outputBits = 0;
          if (codingLine[this.codingPos] < columns) {
            this.codingPos++;
            this.outputBits = codingLine[this.codingPos] - codingLine[this.codingPos - 1];
          } else if (bits > 0) {
            c <<= bits;
            bits = 0;
          }
        }
      } while (bits);
    }
    if (this.black) {
      c ^= 0xff;
    }
    return c;
  }
  _addPixels(a1, blackPixels) {
    const codingLine = this.codingLine;
    let codingPos = this.codingPos;
    if (a1 > codingLine[codingPos]) {
      if (a1 > this.columns) {
        info("row is wrong length");
        this.err = true;
        a1 = this.columns;
      }
      if (codingPos & 1 ^ blackPixels) {
        ++codingPos;
      }
      codingLine[codingPos] = a1;
    }
    this.codingPos = codingPos;
  }
  _addPixelsNeg(a1, blackPixels) {
    const codingLine = this.codingLine;
    let codingPos = this.codingPos;
    if (a1 > codingLine[codingPos]) {
      if (a1 > this.columns) {
        info("row is wrong length");
        this.err = true;
        a1 = this.columns;
      }
      if (codingPos & 1 ^ blackPixels) {
        ++codingPos;
      }
      codingLine[codingPos] = a1;
    } else if (a1 < codingLine[codingPos]) {
      if (a1 < 0) {
        info("invalid code");
        this.err = true;
        a1 = 0;
      }
      while (codingPos > 0 && a1 < codingLine[codingPos - 1]) {
        --codingPos;
      }
      codingLine[codingPos] = a1;
    }
    this.codingPos = codingPos;
  }
  _findTableCode(start, end, table, limit) {
    const limitValue = limit || 0;
    for (let i = start; i <= end; ++i) {
      let code = this._lookBits(i);
      if (code === ccittEOF) {
        return [true, 1, false];
      }
      if (i < end) {
        code <<= end - i;
      }
      if (!limitValue || code >= limitValue) {
        const p = table[code - limitValue];
        if (p[0] === i) {
          this._eatBits(i);
          return [true, p[1], true];
        }
      }
    }
    return [false, 0, false];
  }
  _getTwoDimCode() {
    let code = 0;
    let p;
    if (this.eoblock) {
      code = this._lookBits(7);
      p = twoDimTable[code];
      if (p?.[0] > 0) {
        this._eatBits(p[0]);
        return p[1];
      }
    } else {
      const result = this._findTableCode(1, 7, twoDimTable);
      if (result[0] && result[2]) {
        return result[1];
      }
    }
    info("Bad two dim code");
    return ccittEOF;
  }
  _getWhiteCode() {
    let code = 0;
    let p;
    if (this.eoblock) {
      code = this._lookBits(12);
      if (code === ccittEOF) {
        return 1;
      }
      p = code >> 5 === 0 ? whiteTable1[code] : whiteTable2[code >> 3];
      if (p[0] > 0) {
        this._eatBits(p[0]);
        return p[1];
      }
    } else {
      let result = this._findTableCode(1, 9, whiteTable2);
      if (result[0]) {
        return result[1];
      }
      result = this._findTableCode(11, 12, whiteTable1);
      if (result[0]) {
        return result[1];
      }
    }
    info("bad white code");
    this._eatBits(1);
    return 1;
  }
  _getBlackCode() {
    let code, p;
    if (this.eoblock) {
      code = this._lookBits(13);
      if (code === ccittEOF) {
        return 1;
      }
      if (code >> 7 === 0) {
        p = blackTable1[code];
      } else if (code >> 9 === 0 && code >> 7 !== 0) {
        p = blackTable2[(code >> 1) - 64];
      } else {
        p = blackTable3[code >> 7];
      }
      if (p[0] > 0) {
        this._eatBits(p[0]);
        return p[1];
      }
    } else {
      let result = this._findTableCode(2, 6, blackTable3);
      if (result[0]) {
        return result[1];
      }
      result = this._findTableCode(7, 12, blackTable2, 64);
      if (result[0]) {
        return result[1];
      }
      result = this._findTableCode(10, 13, blackTable1);
      if (result[0]) {
        return result[1];
      }
    }
    info("bad black code");
    this._eatBits(1);
    return 1;
  }
  _lookBits(n) {
    let c;
    while (this.inputBits < n) {
      if ((c = this.source.next()) === -1) {
        if (this.inputBits === 0) {
          return ccittEOF;
        }
        return this.inputBuf << n - this.inputBits & 0xffff >> 16 - n;
      }
      this.inputBuf = this.inputBuf << 8 | c;
      this.inputBits += 8;
    }
    return this.inputBuf >> this.inputBits - n & 0xffff >> 16 - n;
  }
  _eatBits(n) {
    if ((this.inputBits -= n) < 0) {
      this.inputBits = 0;
    }
  }
}

;// CONCATENATED MODULE: ./src/core/jbig2.js




class Jbig2Error extends BaseException {
  constructor(msg) {
    super(msg, "Jbig2Error");
  }
}
class ContextCache {
  getContexts(id) {
    if (id in this) {
      return this[id];
    }
    return this[id] = new Int8Array(1 << 16);
  }
}
class DecodingContext {
  constructor(data, start, end) {
    this.data = data;
    this.start = start;
    this.end = end;
  }
  get decoder() {
    const decoder = new ArithmeticDecoder(this.data, this.start, this.end);
    return util_shadow(this, "decoder", decoder);
  }
  get contextCache() {
    const cache = new ContextCache();
    return util_shadow(this, "contextCache", cache);
  }
}
const MAX_INT_32 = 2 ** 31 - 1;
const MIN_INT_32 = -(2 ** 31);
function decodeInteger(contextCache, procedure, decoder) {
  const contexts = contextCache.getContexts(procedure);
  let prev = 1;
  function readBits(length) {
    let v = 0;
    for (let i = 0; i < length; i++) {
      const bit = decoder.readBit(contexts, prev);
      prev = prev < 256 ? prev << 1 | bit : (prev << 1 | bit) & 511 | 256;
      v = v << 1 | bit;
    }
    return v >>> 0;
  }
  const sign = readBits(1);
  const value = readBits(1) ? readBits(1) ? readBits(1) ? readBits(1) ? readBits(1) ? readBits(32) + 4436 : readBits(12) + 340 : readBits(8) + 84 : readBits(6) + 20 : readBits(4) + 4 : readBits(2);
  let signedValue;
  if (sign === 0) {
    signedValue = value;
  } else if (value > 0) {
    signedValue = -value;
  }
  if (signedValue >= MIN_INT_32 && signedValue <= MAX_INT_32) {
    return signedValue;
  }
  return null;
}
function decodeIAID(contextCache, decoder, codeLength) {
  const contexts = contextCache.getContexts("IAID");
  let prev = 1;
  for (let i = 0; i < codeLength; i++) {
    const bit = decoder.readBit(contexts, prev);
    prev = prev << 1 | bit;
  }
  if (codeLength < 31) {
    return prev & (1 << codeLength) - 1;
  }
  return prev & 0x7fffffff;
}
const SegmentTypes = ["SymbolDictionary", null, null, null, "IntermediateTextRegion", null, "ImmediateTextRegion", "ImmediateLosslessTextRegion", null, null, null, null, null, null, null, null, "PatternDictionary", null, null, null, "IntermediateHalftoneRegion", null, "ImmediateHalftoneRegion", "ImmediateLosslessHalftoneRegion", null, null, null, null, null, null, null, null, null, null, null, null, "IntermediateGenericRegion", null, "ImmediateGenericRegion", "ImmediateLosslessGenericRegion", "IntermediateGenericRefinementRegion", null, "ImmediateGenericRefinementRegion", "ImmediateLosslessGenericRefinementRegion", null, null, null, null, "PageInformation", "EndOfPage", "EndOfStripe", "EndOfFile", "Profiles", "Tables", null, null, null, null, null, null, null, null, "Extension"];
const CodingTemplates = [[{
  x: -1,
  y: -2
}, {
  x: 0,
  y: -2
}, {
  x: 1,
  y: -2
}, {
  x: -2,
  y: -1
}, {
  x: -1,
  y: -1
}, {
  x: 0,
  y: -1
}, {
  x: 1,
  y: -1
}, {
  x: 2,
  y: -1
}, {
  x: -4,
  y: 0
}, {
  x: -3,
  y: 0
}, {
  x: -2,
  y: 0
}, {
  x: -1,
  y: 0
}], [{
  x: -1,
  y: -2
}, {
  x: 0,
  y: -2
}, {
  x: 1,
  y: -2
}, {
  x: 2,
  y: -2
}, {
  x: -2,
  y: -1
}, {
  x: -1,
  y: -1
}, {
  x: 0,
  y: -1
}, {
  x: 1,
  y: -1
}, {
  x: 2,
  y: -1
}, {
  x: -3,
  y: 0
}, {
  x: -2,
  y: 0
}, {
  x: -1,
  y: 0
}], [{
  x: -1,
  y: -2
}, {
  x: 0,
  y: -2
}, {
  x: 1,
  y: -2
}, {
  x: -2,
  y: -1
}, {
  x: -1,
  y: -1
}, {
  x: 0,
  y: -1
}, {
  x: 1,
  y: -1
}, {
  x: -2,
  y: 0
}, {
  x: -1,
  y: 0
}], [{
  x: -3,
  y: -1
}, {
  x: -2,
  y: -1
}, {
  x: -1,
  y: -1
}, {
  x: 0,
  y: -1
}, {
  x: 1,
  y: -1
}, {
  x: -4,
  y: 0
}, {
  x: -3,
  y: 0
}, {
  x: -2,
  y: 0
}, {
  x: -1,
  y: 0
}]];
const RefinementTemplates = [{
  coding: [{
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: -1,
    y: 0
  }],
  reference: [{
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: -1,
    y: 0
  }, {
    x: 0,
    y: 0
  }, {
    x: 1,
    y: 0
  }, {
    x: -1,
    y: 1
  }, {
    x: 0,
    y: 1
  }, {
    x: 1,
    y: 1
  }]
}, {
  coding: [{
    x: -1,
    y: -1
  }, {
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: -1,
    y: 0
  }],
  reference: [{
    x: 0,
    y: -1
  }, {
    x: -1,
    y: 0
  }, {
    x: 0,
    y: 0
  }, {
    x: 1,
    y: 0
  }, {
    x: 0,
    y: 1
  }, {
    x: 1,
    y: 1
  }]
}];
const ReusedContexts = [0x9b25, 0x0795, 0x00e5, 0x0195];
const RefinementReusedContexts = [0x0020, 0x0008];
function decodeBitmapTemplate0(width, height, decodingContext) {
  const decoder = decodingContext.decoder;
  const contexts = decodingContext.contextCache.getContexts("GB");
  const bitmap = [];
  let contextLabel, i, j, pixel, row, row1, row2;
  const OLD_PIXEL_MASK = 0x7bf7;
  for (i = 0; i < height; i++) {
    row = bitmap[i] = new Uint8Array(width);
    row1 = i < 1 ? row : bitmap[i - 1];
    row2 = i < 2 ? row : bitmap[i - 2];
    contextLabel = row2[0] << 13 | row2[1] << 12 | row2[2] << 11 | row1[0] << 7 | row1[1] << 6 | row1[2] << 5 | row1[3] << 4;
    for (j = 0; j < width; j++) {
      row[j] = pixel = decoder.readBit(contexts, contextLabel);
      contextLabel = (contextLabel & OLD_PIXEL_MASK) << 1 | (j + 3 < width ? row2[j + 3] << 11 : 0) | (j + 4 < width ? row1[j + 4] << 4 : 0) | pixel;
    }
  }
  return bitmap;
}
function decodeBitmap(mmr, width, height, templateIndex, prediction, skip, at, decodingContext) {
  if (mmr) {
    const input = new Reader(decodingContext.data, decodingContext.start, decodingContext.end);
    return decodeMMRBitmap(input, width, height, false);
  }
  if (templateIndex === 0 && !skip && !prediction && at.length === 4 && at[0].x === 3 && at[0].y === -1 && at[1].x === -3 && at[1].y === -1 && at[2].x === 2 && at[2].y === -2 && at[3].x === -2 && at[3].y === -2) {
    return decodeBitmapTemplate0(width, height, decodingContext);
  }
  const useskip = !!skip;
  const template = CodingTemplates[templateIndex].concat(at);
  template.sort(function (a, b) {
    return a.y - b.y || a.x - b.x;
  });
  const templateLength = template.length;
  const templateX = new Int8Array(templateLength);
  const templateY = new Int8Array(templateLength);
  const changingTemplateEntries = [];
  let reuseMask = 0,
    minX = 0,
    maxX = 0,
    minY = 0;
  let c, k;
  for (k = 0; k < templateLength; k++) {
    templateX[k] = template[k].x;
    templateY[k] = template[k].y;
    minX = Math.min(minX, template[k].x);
    maxX = Math.max(maxX, template[k].x);
    minY = Math.min(minY, template[k].y);
    if (k < templateLength - 1 && template[k].y === template[k + 1].y && template[k].x === template[k + 1].x - 1) {
      reuseMask |= 1 << templateLength - 1 - k;
    } else {
      changingTemplateEntries.push(k);
    }
  }
  const changingEntriesLength = changingTemplateEntries.length;
  const changingTemplateX = new Int8Array(changingEntriesLength);
  const changingTemplateY = new Int8Array(changingEntriesLength);
  const changingTemplateBit = new Uint16Array(changingEntriesLength);
  for (c = 0; c < changingEntriesLength; c++) {
    k = changingTemplateEntries[c];
    changingTemplateX[c] = template[k].x;
    changingTemplateY[c] = template[k].y;
    changingTemplateBit[c] = 1 << templateLength - 1 - k;
  }
  const sbb_left = -minX;
  const sbb_top = -minY;
  const sbb_right = width - maxX;
  const pseudoPixelContext = ReusedContexts[templateIndex];
  let row = new Uint8Array(width);
  const bitmap = [];
  const decoder = decodingContext.decoder;
  const contexts = decodingContext.contextCache.getContexts("GB");
  let ltp = 0,
    j,
    i0,
    j0,
    contextLabel = 0,
    bit,
    shift;
  for (let i = 0; i < height; i++) {
    if (prediction) {
      const sltp = decoder.readBit(contexts, pseudoPixelContext);
      ltp ^= sltp;
      if (ltp) {
        bitmap.push(row);
        continue;
      }
    }
    row = new Uint8Array(row);
    bitmap.push(row);
    for (j = 0; j < width; j++) {
      if (useskip && skip[i][j]) {
        row[j] = 0;
        continue;
      }
      if (j >= sbb_left && j < sbb_right && i >= sbb_top) {
        contextLabel = contextLabel << 1 & reuseMask;
        for (k = 0; k < changingEntriesLength; k++) {
          i0 = i + changingTemplateY[k];
          j0 = j + changingTemplateX[k];
          bit = bitmap[i0][j0];
          if (bit) {
            bit = changingTemplateBit[k];
            contextLabel |= bit;
          }
        }
      } else {
        contextLabel = 0;
        shift = templateLength - 1;
        for (k = 0; k < templateLength; k++, shift--) {
          j0 = j + templateX[k];
          if (j0 >= 0 && j0 < width) {
            i0 = i + templateY[k];
            if (i0 >= 0) {
              bit = bitmap[i0][j0];
              if (bit) {
                contextLabel |= bit << shift;
              }
            }
          }
        }
      }
      const pixel = decoder.readBit(contexts, contextLabel);
      row[j] = pixel;
    }
  }
  return bitmap;
}
function decodeRefinement(width, height, templateIndex, referenceBitmap, offsetX, offsetY, prediction, at, decodingContext) {
  let codingTemplate = RefinementTemplates[templateIndex].coding;
  if (templateIndex === 0) {
    codingTemplate = codingTemplate.concat([at[0]]);
  }
  const codingTemplateLength = codingTemplate.length;
  const codingTemplateX = new Int32Array(codingTemplateLength);
  const codingTemplateY = new Int32Array(codingTemplateLength);
  let k;
  for (k = 0; k < codingTemplateLength; k++) {
    codingTemplateX[k] = codingTemplate[k].x;
    codingTemplateY[k] = codingTemplate[k].y;
  }
  let referenceTemplate = RefinementTemplates[templateIndex].reference;
  if (templateIndex === 0) {
    referenceTemplate = referenceTemplate.concat([at[1]]);
  }
  const referenceTemplateLength = referenceTemplate.length;
  const referenceTemplateX = new Int32Array(referenceTemplateLength);
  const referenceTemplateY = new Int32Array(referenceTemplateLength);
  for (k = 0; k < referenceTemplateLength; k++) {
    referenceTemplateX[k] = referenceTemplate[k].x;
    referenceTemplateY[k] = referenceTemplate[k].y;
  }
  const referenceWidth = referenceBitmap[0].length;
  const referenceHeight = referenceBitmap.length;
  const pseudoPixelContext = RefinementReusedContexts[templateIndex];
  const bitmap = [];
  const decoder = decodingContext.decoder;
  const contexts = decodingContext.contextCache.getContexts("GR");
  let ltp = 0;
  for (let i = 0; i < height; i++) {
    if (prediction) {
      const sltp = decoder.readBit(contexts, pseudoPixelContext);
      ltp ^= sltp;
      if (ltp) {
        throw new Jbig2Error("prediction is not supported");
      }
    }
    const row = new Uint8Array(width);
    bitmap.push(row);
    for (let j = 0; j < width; j++) {
      let i0, j0;
      let contextLabel = 0;
      for (k = 0; k < codingTemplateLength; k++) {
        i0 = i + codingTemplateY[k];
        j0 = j + codingTemplateX[k];
        if (i0 < 0 || j0 < 0 || j0 >= width) {
          contextLabel <<= 1;
        } else {
          contextLabel = contextLabel << 1 | bitmap[i0][j0];
        }
      }
      for (k = 0; k < referenceTemplateLength; k++) {
        i0 = i + referenceTemplateY[k] - offsetY;
        j0 = j + referenceTemplateX[k] - offsetX;
        if (i0 < 0 || i0 >= referenceHeight || j0 < 0 || j0 >= referenceWidth) {
          contextLabel <<= 1;
        } else {
          contextLabel = contextLabel << 1 | referenceBitmap[i0][j0];
        }
      }
      const pixel = decoder.readBit(contexts, contextLabel);
      row[j] = pixel;
    }
  }
  return bitmap;
}
function decodeSymbolDictionary(huffman, refinement, symbols, numberOfNewSymbols, numberOfExportedSymbols, huffmanTables, templateIndex, at, refinementTemplateIndex, refinementAt, decodingContext, huffmanInput) {
  if (huffman && refinement) {
    throw new Jbig2Error("symbol refinement with Huffman is not supported");
  }
  const newSymbols = [];
  let currentHeight = 0;
  let symbolCodeLength = log2(symbols.length + numberOfNewSymbols);
  const decoder = decodingContext.decoder;
  const contextCache = decodingContext.contextCache;
  let tableB1, symbolWidths;
  if (huffman) {
    tableB1 = getStandardTable(1);
    symbolWidths = [];
    symbolCodeLength = Math.max(symbolCodeLength, 1);
  }
  while (newSymbols.length < numberOfNewSymbols) {
    const deltaHeight = huffman ? huffmanTables.tableDeltaHeight.decode(huffmanInput) : decodeInteger(contextCache, "IADH", decoder);
    currentHeight += deltaHeight;
    let currentWidth = 0,
      totalWidth = 0;
    const firstSymbol = huffman ? symbolWidths.length : 0;
    while (true) {
      const deltaWidth = huffman ? huffmanTables.tableDeltaWidth.decode(huffmanInput) : decodeInteger(contextCache, "IADW", decoder);
      if (deltaWidth === null) {
        break;
      }
      currentWidth += deltaWidth;
      totalWidth += currentWidth;
      let bitmap;
      if (refinement) {
        const numberOfInstances = decodeInteger(contextCache, "IAAI", decoder);
        if (numberOfInstances > 1) {
          bitmap = decodeTextRegion(huffman, refinement, currentWidth, currentHeight, 0, numberOfInstances, 1, symbols.concat(newSymbols), symbolCodeLength, 0, 0, 1, 0, huffmanTables, refinementTemplateIndex, refinementAt, decodingContext, 0, huffmanInput);
        } else {
          const symbolId = decodeIAID(contextCache, decoder, symbolCodeLength);
          const rdx = decodeInteger(contextCache, "IARDX", decoder);
          const rdy = decodeInteger(contextCache, "IARDY", decoder);
          const symbol = symbolId < symbols.length ? symbols[symbolId] : newSymbols[symbolId - symbols.length];
          bitmap = decodeRefinement(currentWidth, currentHeight, refinementTemplateIndex, symbol, rdx, rdy, false, refinementAt, decodingContext);
        }
        newSymbols.push(bitmap);
      } else if (huffman) {
        symbolWidths.push(currentWidth);
      } else {
        bitmap = decodeBitmap(false, currentWidth, currentHeight, templateIndex, false, null, at, decodingContext);
        newSymbols.push(bitmap);
      }
    }
    if (huffman && !refinement) {
      const bitmapSize = huffmanTables.tableBitmapSize.decode(huffmanInput);
      huffmanInput.byteAlign();
      let collectiveBitmap;
      if (bitmapSize === 0) {
        collectiveBitmap = readUncompressedBitmap(huffmanInput, totalWidth, currentHeight);
      } else {
        const originalEnd = huffmanInput.end;
        const bitmapEnd = huffmanInput.position + bitmapSize;
        huffmanInput.end = bitmapEnd;
        collectiveBitmap = decodeMMRBitmap(huffmanInput, totalWidth, currentHeight, false);
        huffmanInput.end = originalEnd;
        huffmanInput.position = bitmapEnd;
      }
      const numberOfSymbolsDecoded = symbolWidths.length;
      if (firstSymbol === numberOfSymbolsDecoded - 1) {
        newSymbols.push(collectiveBitmap);
      } else {
        let i,
          y,
          xMin = 0,
          xMax,
          bitmapWidth,
          symbolBitmap;
        for (i = firstSymbol; i < numberOfSymbolsDecoded; i++) {
          bitmapWidth = symbolWidths[i];
          xMax = xMin + bitmapWidth;
          symbolBitmap = [];
          for (y = 0; y < currentHeight; y++) {
            symbolBitmap.push(collectiveBitmap[y].subarray(xMin, xMax));
          }
          newSymbols.push(symbolBitmap);
          xMin = xMax;
        }
      }
    }
  }
  const exportedSymbols = [],
    flags = [];
  let currentFlag = false,
    i,
    ii;
  const totalSymbolsLength = symbols.length + numberOfNewSymbols;
  while (flags.length < totalSymbolsLength) {
    let runLength = huffman ? tableB1.decode(huffmanInput) : decodeInteger(contextCache, "IAEX", decoder);
    while (runLength--) {
      flags.push(currentFlag);
    }
    currentFlag = !currentFlag;
  }
  for (i = 0, ii = symbols.length; i < ii; i++) {
    if (flags[i]) {
      exportedSymbols.push(symbols[i]);
    }
  }
  for (let j = 0; j < numberOfNewSymbols; i++, j++) {
    if (flags[i]) {
      exportedSymbols.push(newSymbols[j]);
    }
  }
  return exportedSymbols;
}
function decodeTextRegion(huffman, refinement, width, height, defaultPixelValue, numberOfSymbolInstances, stripSize, inputSymbols, symbolCodeLength, transposed, dsOffset, referenceCorner, combinationOperator, huffmanTables, refinementTemplateIndex, refinementAt, decodingContext, logStripSize, huffmanInput) {
  if (huffman && refinement) {
    throw new Jbig2Error("refinement with Huffman is not supported");
  }
  const bitmap = [];
  let i, row;
  for (i = 0; i < height; i++) {
    row = new Uint8Array(width);
    if (defaultPixelValue) {
      for (let j = 0; j < width; j++) {
        row[j] = defaultPixelValue;
      }
    }
    bitmap.push(row);
  }
  const decoder = decodingContext.decoder;
  const contextCache = decodingContext.contextCache;
  let stripT = huffman ? -huffmanTables.tableDeltaT.decode(huffmanInput) : -decodeInteger(contextCache, "IADT", decoder);
  let firstS = 0;
  i = 0;
  while (i < numberOfSymbolInstances) {
    const deltaT = huffman ? huffmanTables.tableDeltaT.decode(huffmanInput) : decodeInteger(contextCache, "IADT", decoder);
    stripT += deltaT;
    const deltaFirstS = huffman ? huffmanTables.tableFirstS.decode(huffmanInput) : decodeInteger(contextCache, "IAFS", decoder);
    firstS += deltaFirstS;
    let currentS = firstS;
    do {
      let currentT = 0;
      if (stripSize > 1) {
        currentT = huffman ? huffmanInput.readBits(logStripSize) : decodeInteger(contextCache, "IAIT", decoder);
      }
      const t = stripSize * stripT + currentT;
      const symbolId = huffman ? huffmanTables.symbolIDTable.decode(huffmanInput) : decodeIAID(contextCache, decoder, symbolCodeLength);
      const applyRefinement = refinement && (huffman ? huffmanInput.readBit() : decodeInteger(contextCache, "IARI", decoder));
      let symbolBitmap = inputSymbols[symbolId];
      let symbolWidth = symbolBitmap[0].length;
      let symbolHeight = symbolBitmap.length;
      if (applyRefinement) {
        const rdw = decodeInteger(contextCache, "IARDW", decoder);
        const rdh = decodeInteger(contextCache, "IARDH", decoder);
        const rdx = decodeInteger(contextCache, "IARDX", decoder);
        const rdy = decodeInteger(contextCache, "IARDY", decoder);
        symbolWidth += rdw;
        symbolHeight += rdh;
        symbolBitmap = decodeRefinement(symbolWidth, symbolHeight, refinementTemplateIndex, symbolBitmap, (rdw >> 1) + rdx, (rdh >> 1) + rdy, false, refinementAt, decodingContext);
      }
      let increment = 0;
      if (!transposed) {
        if (referenceCorner > 1) {
          currentS += symbolWidth - 1;
        } else {
          increment = symbolWidth - 1;
        }
      } else if (!(referenceCorner & 1)) {
        currentS += symbolHeight - 1;
      } else {
        increment = symbolHeight - 1;
      }
      const offsetT = t - (referenceCorner & 1 ? 0 : symbolHeight - 1);
      const offsetS = currentS - (referenceCorner & 2 ? symbolWidth - 1 : 0);
      let s2, t2, symbolRow;
      if (transposed) {
        for (s2 = 0; s2 < symbolHeight; s2++) {
          row = bitmap[offsetS + s2];
          if (!row) {
            continue;
          }
          symbolRow = symbolBitmap[s2];
          const maxWidth = Math.min(width - offsetT, symbolWidth);
          switch (combinationOperator) {
            case 0:
              for (t2 = 0; t2 < maxWidth; t2++) {
                row[offsetT + t2] |= symbolRow[t2];
              }
              break;
            case 2:
              for (t2 = 0; t2 < maxWidth; t2++) {
                row[offsetT + t2] ^= symbolRow[t2];
              }
              break;
            default:
              throw new Jbig2Error(`operator ${combinationOperator} is not supported`);
          }
        }
      } else {
        for (t2 = 0; t2 < symbolHeight; t2++) {
          row = bitmap[offsetT + t2];
          if (!row) {
            continue;
          }
          symbolRow = symbolBitmap[t2];
          switch (combinationOperator) {
            case 0:
              for (s2 = 0; s2 < symbolWidth; s2++) {
                row[offsetS + s2] |= symbolRow[s2];
              }
              break;
            case 2:
              for (s2 = 0; s2 < symbolWidth; s2++) {
                row[offsetS + s2] ^= symbolRow[s2];
              }
              break;
            default:
              throw new Jbig2Error(`operator ${combinationOperator} is not supported`);
          }
        }
      }
      i++;
      const deltaS = huffman ? huffmanTables.tableDeltaS.decode(huffmanInput) : decodeInteger(contextCache, "IADS", decoder);
      if (deltaS === null) {
        break;
      }
      currentS += increment + deltaS + dsOffset;
    } while (true);
  }
  return bitmap;
}
function decodePatternDictionary(mmr, patternWidth, patternHeight, maxPatternIndex, template, decodingContext) {
  const at = [];
  if (!mmr) {
    at.push({
      x: -patternWidth,
      y: 0
    });
    if (template === 0) {
      at.push({
        x: -3,
        y: -1
      }, {
        x: 2,
        y: -2
      }, {
        x: -2,
        y: -2
      });
    }
  }
  const collectiveWidth = (maxPatternIndex + 1) * patternWidth;
  const collectiveBitmap = decodeBitmap(mmr, collectiveWidth, patternHeight, template, false, null, at, decodingContext);
  const patterns = [];
  for (let i = 0; i <= maxPatternIndex; i++) {
    const patternBitmap = [];
    const xMin = patternWidth * i;
    const xMax = xMin + patternWidth;
    for (let y = 0; y < patternHeight; y++) {
      patternBitmap.push(collectiveBitmap[y].subarray(xMin, xMax));
    }
    patterns.push(patternBitmap);
  }
  return patterns;
}
function decodeHalftoneRegion(mmr, patterns, template, regionWidth, regionHeight, defaultPixelValue, enableSkip, combinationOperator, gridWidth, gridHeight, gridOffsetX, gridOffsetY, gridVectorX, gridVectorY, decodingContext) {
  const skip = null;
  if (enableSkip) {
    throw new Jbig2Error("skip is not supported");
  }
  if (combinationOperator !== 0) {
    throw new Jbig2Error(`operator "${combinationOperator}" is not supported in halftone region`);
  }
  const regionBitmap = [];
  let i, j, row;
  for (i = 0; i < regionHeight; i++) {
    row = new Uint8Array(regionWidth);
    if (defaultPixelValue) {
      for (j = 0; j < regionWidth; j++) {
        row[j] = defaultPixelValue;
      }
    }
    regionBitmap.push(row);
  }
  const numberOfPatterns = patterns.length;
  const pattern0 = patterns[0];
  const patternWidth = pattern0[0].length,
    patternHeight = pattern0.length;
  const bitsPerValue = log2(numberOfPatterns);
  const at = [];
  if (!mmr) {
    at.push({
      x: template <= 1 ? 3 : 2,
      y: -1
    });
    if (template === 0) {
      at.push({
        x: -3,
        y: -1
      }, {
        x: 2,
        y: -2
      }, {
        x: -2,
        y: -2
      });
    }
  }
  const grayScaleBitPlanes = [];
  let mmrInput, bitmap;
  if (mmr) {
    mmrInput = new Reader(decodingContext.data, decodingContext.start, decodingContext.end);
  }
  for (i = bitsPerValue - 1; i >= 0; i--) {
    if (mmr) {
      bitmap = decodeMMRBitmap(mmrInput, gridWidth, gridHeight, true);
    } else {
      bitmap = decodeBitmap(false, gridWidth, gridHeight, template, false, skip, at, decodingContext);
    }
    grayScaleBitPlanes[i] = bitmap;
  }
  let mg, ng, bit, patternIndex, patternBitmap, x, y, patternRow, regionRow;
  for (mg = 0; mg < gridHeight; mg++) {
    for (ng = 0; ng < gridWidth; ng++) {
      bit = 0;
      patternIndex = 0;
      for (j = bitsPerValue - 1; j >= 0; j--) {
        bit ^= grayScaleBitPlanes[j][mg][ng];
        patternIndex |= bit << j;
      }
      patternBitmap = patterns[patternIndex];
      x = gridOffsetX + mg * gridVectorY + ng * gridVectorX >> 8;
      y = gridOffsetY + mg * gridVectorX - ng * gridVectorY >> 8;
      if (x >= 0 && x + patternWidth <= regionWidth && y >= 0 && y + patternHeight <= regionHeight) {
        for (i = 0; i < patternHeight; i++) {
          regionRow = regionBitmap[y + i];
          patternRow = patternBitmap[i];
          for (j = 0; j < patternWidth; j++) {
            regionRow[x + j] |= patternRow[j];
          }
        }
      } else {
        let regionX, regionY;
        for (i = 0; i < patternHeight; i++) {
          regionY = y + i;
          if (regionY < 0 || regionY >= regionHeight) {
            continue;
          }
          regionRow = regionBitmap[regionY];
          patternRow = patternBitmap[i];
          for (j = 0; j < patternWidth; j++) {
            regionX = x + j;
            if (regionX >= 0 && regionX < regionWidth) {
              regionRow[regionX] |= patternRow[j];
            }
          }
        }
      }
    }
  }
  return regionBitmap;
}
function readSegmentHeader(data, start) {
  const segmentHeader = {};
  segmentHeader.number = readUint32(data, start);
  const flags = data[start + 4];
  const segmentType = flags & 0x3f;
  if (!SegmentTypes[segmentType]) {
    throw new Jbig2Error("invalid segment type: " + segmentType);
  }
  segmentHeader.type = segmentType;
  segmentHeader.typeName = SegmentTypes[segmentType];
  segmentHeader.deferredNonRetain = !!(flags & 0x80);
  const pageAssociationFieldSize = !!(flags & 0x40);
  const referredFlags = data[start + 5];
  let referredToCount = referredFlags >> 5 & 7;
  const retainBits = [referredFlags & 31];
  let position = start + 6;
  if (referredFlags === 7) {
    referredToCount = readUint32(data, position - 1) & 0x1fffffff;
    position += 3;
    let bytes = referredToCount + 7 >> 3;
    retainBits[0] = data[position++];
    while (--bytes > 0) {
      retainBits.push(data[position++]);
    }
  } else if (referredFlags === 5 || referredFlags === 6) {
    throw new Jbig2Error("invalid referred-to flags");
  }
  segmentHeader.retainBits = retainBits;
  let referredToSegmentNumberSize = 4;
  if (segmentHeader.number <= 256) {
    referredToSegmentNumberSize = 1;
  } else if (segmentHeader.number <= 65536) {
    referredToSegmentNumberSize = 2;
  }
  const referredTo = [];
  let i, ii;
  for (i = 0; i < referredToCount; i++) {
    let number;
    if (referredToSegmentNumberSize === 1) {
      number = data[position];
    } else if (referredToSegmentNumberSize === 2) {
      number = readUint16(data, position);
    } else {
      number = readUint32(data, position);
    }
    referredTo.push(number);
    position += referredToSegmentNumberSize;
  }
  segmentHeader.referredTo = referredTo;
  if (!pageAssociationFieldSize) {
    segmentHeader.pageAssociation = data[position++];
  } else {
    segmentHeader.pageAssociation = readUint32(data, position);
    position += 4;
  }
  segmentHeader.length = readUint32(data, position);
  position += 4;
  if (segmentHeader.length === 0xffffffff) {
    if (segmentType === 38) {
      const genericRegionInfo = readRegionSegmentInformation(data, position);
      const genericRegionSegmentFlags = data[position + RegionSegmentInformationFieldLength];
      const genericRegionMmr = !!(genericRegionSegmentFlags & 1);
      const searchPatternLength = 6;
      const searchPattern = new Uint8Array(searchPatternLength);
      if (!genericRegionMmr) {
        searchPattern[0] = 0xff;
        searchPattern[1] = 0xac;
      }
      searchPattern[2] = genericRegionInfo.height >>> 24 & 0xff;
      searchPattern[3] = genericRegionInfo.height >> 16 & 0xff;
      searchPattern[4] = genericRegionInfo.height >> 8 & 0xff;
      searchPattern[5] = genericRegionInfo.height & 0xff;
      for (i = position, ii = data.length; i < ii; i++) {
        let j = 0;
        while (j < searchPatternLength && searchPattern[j] === data[i + j]) {
          j++;
        }
        if (j === searchPatternLength) {
          segmentHeader.length = i + searchPatternLength;
          break;
        }
      }
      if (segmentHeader.length === 0xffffffff) {
        throw new Jbig2Error("segment end was not found");
      }
    } else {
      throw new Jbig2Error("invalid unknown segment length");
    }
  }
  segmentHeader.headerEnd = position;
  return segmentHeader;
}
function readSegments(header, data, start, end) {
  const segments = [];
  let position = start;
  while (position < end) {
    const segmentHeader = readSegmentHeader(data, position);
    position = segmentHeader.headerEnd;
    const segment = {
      header: segmentHeader,
      data
    };
    if (!header.randomAccess) {
      segment.start = position;
      position += segmentHeader.length;
      segment.end = position;
    }
    segments.push(segment);
    if (segmentHeader.type === 51) {
      break;
    }
  }
  if (header.randomAccess) {
    for (let i = 0, ii = segments.length; i < ii; i++) {
      segments[i].start = position;
      position += segments[i].header.length;
      segments[i].end = position;
    }
  }
  return segments;
}
function readRegionSegmentInformation(data, start) {
  return {
    width: readUint32(data, start),
    height: readUint32(data, start + 4),
    x: readUint32(data, start + 8),
    y: readUint32(data, start + 12),
    combinationOperator: data[start + 16] & 7
  };
}
const RegionSegmentInformationFieldLength = 17;
function processSegment(segment, visitor) {
  const header = segment.header;
  const data = segment.data,
    end = segment.end;
  let position = segment.start;
  let args, at, i, atLength;
  switch (header.type) {
    case 0:
      const dictionary = {};
      const dictionaryFlags = readUint16(data, position);
      dictionary.huffman = !!(dictionaryFlags & 1);
      dictionary.refinement = !!(dictionaryFlags & 2);
      dictionary.huffmanDHSelector = dictionaryFlags >> 2 & 3;
      dictionary.huffmanDWSelector = dictionaryFlags >> 4 & 3;
      dictionary.bitmapSizeSelector = dictionaryFlags >> 6 & 1;
      dictionary.aggregationInstancesSelector = dictionaryFlags >> 7 & 1;
      dictionary.bitmapCodingContextUsed = !!(dictionaryFlags & 256);
      dictionary.bitmapCodingContextRetained = !!(dictionaryFlags & 512);
      dictionary.template = dictionaryFlags >> 10 & 3;
      dictionary.refinementTemplate = dictionaryFlags >> 12 & 1;
      position += 2;
      if (!dictionary.huffman) {
        atLength = dictionary.template === 0 ? 4 : 1;
        at = [];
        for (i = 0; i < atLength; i++) {
          at.push({
            x: readInt8(data, position),
            y: readInt8(data, position + 1)
          });
          position += 2;
        }
        dictionary.at = at;
      }
      if (dictionary.refinement && !dictionary.refinementTemplate) {
        at = [];
        for (i = 0; i < 2; i++) {
          at.push({
            x: readInt8(data, position),
            y: readInt8(data, position + 1)
          });
          position += 2;
        }
        dictionary.refinementAt = at;
      }
      dictionary.numberOfExportedSymbols = readUint32(data, position);
      position += 4;
      dictionary.numberOfNewSymbols = readUint32(data, position);
      position += 4;
      args = [dictionary, header.number, header.referredTo, data, position, end];
      break;
    case 6:
    case 7:
      const textRegion = {};
      textRegion.info = readRegionSegmentInformation(data, position);
      position += RegionSegmentInformationFieldLength;
      const textRegionSegmentFlags = readUint16(data, position);
      position += 2;
      textRegion.huffman = !!(textRegionSegmentFlags & 1);
      textRegion.refinement = !!(textRegionSegmentFlags & 2);
      textRegion.logStripSize = textRegionSegmentFlags >> 2 & 3;
      textRegion.stripSize = 1 << textRegion.logStripSize;
      textRegion.referenceCorner = textRegionSegmentFlags >> 4 & 3;
      textRegion.transposed = !!(textRegionSegmentFlags & 64);
      textRegion.combinationOperator = textRegionSegmentFlags >> 7 & 3;
      textRegion.defaultPixelValue = textRegionSegmentFlags >> 9 & 1;
      textRegion.dsOffset = textRegionSegmentFlags << 17 >> 27;
      textRegion.refinementTemplate = textRegionSegmentFlags >> 15 & 1;
      if (textRegion.huffman) {
        const textRegionHuffmanFlags = readUint16(data, position);
        position += 2;
        textRegion.huffmanFS = textRegionHuffmanFlags & 3;
        textRegion.huffmanDS = textRegionHuffmanFlags >> 2 & 3;
        textRegion.huffmanDT = textRegionHuffmanFlags >> 4 & 3;
        textRegion.huffmanRefinementDW = textRegionHuffmanFlags >> 6 & 3;
        textRegion.huffmanRefinementDH = textRegionHuffmanFlags >> 8 & 3;
        textRegion.huffmanRefinementDX = textRegionHuffmanFlags >> 10 & 3;
        textRegion.huffmanRefinementDY = textRegionHuffmanFlags >> 12 & 3;
        textRegion.huffmanRefinementSizeSelector = !!(textRegionHuffmanFlags & 0x4000);
      }
      if (textRegion.refinement && !textRegion.refinementTemplate) {
        at = [];
        for (i = 0; i < 2; i++) {
          at.push({
            x: readInt8(data, position),
            y: readInt8(data, position + 1)
          });
          position += 2;
        }
        textRegion.refinementAt = at;
      }
      textRegion.numberOfSymbolInstances = readUint32(data, position);
      position += 4;
      args = [textRegion, header.referredTo, data, position, end];
      break;
    case 16:
      const patternDictionary = {};
      const patternDictionaryFlags = data[position++];
      patternDictionary.mmr = !!(patternDictionaryFlags & 1);
      patternDictionary.template = patternDictionaryFlags >> 1 & 3;
      patternDictionary.patternWidth = data[position++];
      patternDictionary.patternHeight = data[position++];
      patternDictionary.maxPatternIndex = readUint32(data, position);
      position += 4;
      args = [patternDictionary, header.number, data, position, end];
      break;
    case 22:
    case 23:
      const halftoneRegion = {};
      halftoneRegion.info = readRegionSegmentInformation(data, position);
      position += RegionSegmentInformationFieldLength;
      const halftoneRegionFlags = data[position++];
      halftoneRegion.mmr = !!(halftoneRegionFlags & 1);
      halftoneRegion.template = halftoneRegionFlags >> 1 & 3;
      halftoneRegion.enableSkip = !!(halftoneRegionFlags & 8);
      halftoneRegion.combinationOperator = halftoneRegionFlags >> 4 & 7;
      halftoneRegion.defaultPixelValue = halftoneRegionFlags >> 7 & 1;
      halftoneRegion.gridWidth = readUint32(data, position);
      position += 4;
      halftoneRegion.gridHeight = readUint32(data, position);
      position += 4;
      halftoneRegion.gridOffsetX = readUint32(data, position) & 0xffffffff;
      position += 4;
      halftoneRegion.gridOffsetY = readUint32(data, position) & 0xffffffff;
      position += 4;
      halftoneRegion.gridVectorX = readUint16(data, position);
      position += 2;
      halftoneRegion.gridVectorY = readUint16(data, position);
      position += 2;
      args = [halftoneRegion, header.referredTo, data, position, end];
      break;
    case 38:
    case 39:
      const genericRegion = {};
      genericRegion.info = readRegionSegmentInformation(data, position);
      position += RegionSegmentInformationFieldLength;
      const genericRegionSegmentFlags = data[position++];
      genericRegion.mmr = !!(genericRegionSegmentFlags & 1);
      genericRegion.template = genericRegionSegmentFlags >> 1 & 3;
      genericRegion.prediction = !!(genericRegionSegmentFlags & 8);
      if (!genericRegion.mmr) {
        atLength = genericRegion.template === 0 ? 4 : 1;
        at = [];
        for (i = 0; i < atLength; i++) {
          at.push({
            x: readInt8(data, position),
            y: readInt8(data, position + 1)
          });
          position += 2;
        }
        genericRegion.at = at;
      }
      args = [genericRegion, data, position, end];
      break;
    case 48:
      const pageInfo = {
        width: readUint32(data, position),
        height: readUint32(data, position + 4),
        resolutionX: readUint32(data, position + 8),
        resolutionY: readUint32(data, position + 12)
      };
      if (pageInfo.height === 0xffffffff) {
        delete pageInfo.height;
      }
      const pageSegmentFlags = data[position + 16];
      readUint16(data, position + 17);
      pageInfo.lossless = !!(pageSegmentFlags & 1);
      pageInfo.refinement = !!(pageSegmentFlags & 2);
      pageInfo.defaultPixelValue = pageSegmentFlags >> 2 & 1;
      pageInfo.combinationOperator = pageSegmentFlags >> 3 & 3;
      pageInfo.requiresBuffer = !!(pageSegmentFlags & 32);
      pageInfo.combinationOperatorOverride = !!(pageSegmentFlags & 64);
      args = [pageInfo];
      break;
    case 49:
      break;
    case 50:
      break;
    case 51:
      break;
    case 53:
      args = [header.number, data, position, end];
      break;
    case 62:
      break;
    default:
      throw new Jbig2Error(`segment type ${header.typeName}(${header.type}) is not implemented`);
  }
  const callbackName = "on" + header.typeName;
  if (callbackName in visitor) {
    visitor[callbackName].apply(visitor, args);
  }
}
function processSegments(segments, visitor) {
  for (let i = 0, ii = segments.length; i < ii; i++) {
    processSegment(segments[i], visitor);
  }
}
function parseJbig2Chunks(chunks) {
  const visitor = new SimpleSegmentVisitor();
  for (let i = 0, ii = chunks.length; i < ii; i++) {
    const chunk = chunks[i];
    const segments = readSegments({}, chunk.data, chunk.start, chunk.end);
    processSegments(segments, visitor);
  }
  return visitor.buffer;
}
function parseJbig2(data) {
  const end = data.length;
  let position = 0;
  if (data[position] !== 0x97 || data[position + 1] !== 0x4a || data[position + 2] !== 0x42 || data[position + 3] !== 0x32 || data[position + 4] !== 0x0d || data[position + 5] !== 0x0a || data[position + 6] !== 0x1a || data[position + 7] !== 0x0a) {
    throw new Jbig2Error("parseJbig2 - invalid header.");
  }
  const header = Object.create(null);
  position += 8;
  const flags = data[position++];
  header.randomAccess = !(flags & 1);
  if (!(flags & 2)) {
    header.numberOfPages = readUint32(data, position);
    position += 4;
  }
  const segments = readSegments(header, data, position, end);
  const visitor = new SimpleSegmentVisitor();
  processSegments(segments, visitor);
  const {
    width,
    height
  } = visitor.currentPageInfo;
  const bitPacked = visitor.buffer;
  const imgData = new Uint8ClampedArray(width * height);
  let q = 0,
    k = 0;
  for (let i = 0; i < height; i++) {
    let mask = 0,
      buffer;
    for (let j = 0; j < width; j++) {
      if (!mask) {
        mask = 128;
        buffer = bitPacked[k++];
      }
      imgData[q++] = buffer & mask ? 0 : 255;
      mask >>= 1;
    }
  }
  return {
    imgData,
    width,
    height
  };
}
class SimpleSegmentVisitor {
  onPageInformation(info) {
    this.currentPageInfo = info;
    const rowSize = info.width + 7 >> 3;
    const buffer = new Uint8ClampedArray(rowSize * info.height);
    if (info.defaultPixelValue) {
      buffer.fill(0xff);
    }
    this.buffer = buffer;
  }
  drawBitmap(regionInfo, bitmap) {
    const pageInfo = this.currentPageInfo;
    const width = regionInfo.width,
      height = regionInfo.height;
    const rowSize = pageInfo.width + 7 >> 3;
    const combinationOperator = pageInfo.combinationOperatorOverride ? regionInfo.combinationOperator : pageInfo.combinationOperator;
    const buffer = this.buffer;
    const mask0 = 128 >> (regionInfo.x & 7);
    let offset0 = regionInfo.y * rowSize + (regionInfo.x >> 3);
    let i, j, mask, offset;
    switch (combinationOperator) {
      case 0:
        for (i = 0; i < height; i++) {
          mask = mask0;
          offset = offset0;
          for (j = 0; j < width; j++) {
            if (bitmap[i][j]) {
              buffer[offset] |= mask;
            }
            mask >>= 1;
            if (!mask) {
              mask = 128;
              offset++;
            }
          }
          offset0 += rowSize;
        }
        break;
      case 2:
        for (i = 0; i < height; i++) {
          mask = mask0;
          offset = offset0;
          for (j = 0; j < width; j++) {
            if (bitmap[i][j]) {
              buffer[offset] ^= mask;
            }
            mask >>= 1;
            if (!mask) {
              mask = 128;
              offset++;
            }
          }
          offset0 += rowSize;
        }
        break;
      default:
        throw new Jbig2Error(`operator ${combinationOperator} is not supported`);
    }
  }
  onImmediateGenericRegion(region, data, start, end) {
    const regionInfo = region.info;
    const decodingContext = new DecodingContext(data, start, end);
    const bitmap = decodeBitmap(region.mmr, regionInfo.width, regionInfo.height, region.template, region.prediction, null, region.at, decodingContext);
    this.drawBitmap(regionInfo, bitmap);
  }
  onImmediateLosslessGenericRegion() {
    this.onImmediateGenericRegion(...arguments);
  }
  onSymbolDictionary(dictionary, currentSegment, referredSegments, data, start, end) {
    let huffmanTables, huffmanInput;
    if (dictionary.huffman) {
      huffmanTables = getSymbolDictionaryHuffmanTables(dictionary, referredSegments, this.customTables);
      huffmanInput = new Reader(data, start, end);
    }
    let symbols = this.symbols;
    if (!symbols) {
      this.symbols = symbols = {};
    }
    const inputSymbols = [];
    for (const referredSegment of referredSegments) {
      const referredSymbols = symbols[referredSegment];
      if (referredSymbols) {
        inputSymbols.push(...referredSymbols);
      }
    }
    const decodingContext = new DecodingContext(data, start, end);
    symbols[currentSegment] = decodeSymbolDictionary(dictionary.huffman, dictionary.refinement, inputSymbols, dictionary.numberOfNewSymbols, dictionary.numberOfExportedSymbols, huffmanTables, dictionary.template, dictionary.at, dictionary.refinementTemplate, dictionary.refinementAt, decodingContext, huffmanInput);
  }
  onImmediateTextRegion(region, referredSegments, data, start, end) {
    const regionInfo = region.info;
    let huffmanTables, huffmanInput;
    const symbols = this.symbols;
    const inputSymbols = [];
    for (const referredSegment of referredSegments) {
      const referredSymbols = symbols[referredSegment];
      if (referredSymbols) {
        inputSymbols.push(...referredSymbols);
      }
    }
    const symbolCodeLength = log2(inputSymbols.length);
    if (region.huffman) {
      huffmanInput = new Reader(data, start, end);
      huffmanTables = getTextRegionHuffmanTables(region, referredSegments, this.customTables, inputSymbols.length, huffmanInput);
    }
    const decodingContext = new DecodingContext(data, start, end);
    const bitmap = decodeTextRegion(region.huffman, region.refinement, regionInfo.width, regionInfo.height, region.defaultPixelValue, region.numberOfSymbolInstances, region.stripSize, inputSymbols, symbolCodeLength, region.transposed, region.dsOffset, region.referenceCorner, region.combinationOperator, huffmanTables, region.refinementTemplate, region.refinementAt, decodingContext, region.logStripSize, huffmanInput);
    this.drawBitmap(regionInfo, bitmap);
  }
  onImmediateLosslessTextRegion() {
    this.onImmediateTextRegion(...arguments);
  }
  onPatternDictionary(dictionary, currentSegment, data, start, end) {
    let patterns = this.patterns;
    if (!patterns) {
      this.patterns = patterns = {};
    }
    const decodingContext = new DecodingContext(data, start, end);
    patterns[currentSegment] = decodePatternDictionary(dictionary.mmr, dictionary.patternWidth, dictionary.patternHeight, dictionary.maxPatternIndex, dictionary.template, decodingContext);
  }
  onImmediateHalftoneRegion(region, referredSegments, data, start, end) {
    const patterns = this.patterns[referredSegments[0]];
    const regionInfo = region.info;
    const decodingContext = new DecodingContext(data, start, end);
    const bitmap = decodeHalftoneRegion(region.mmr, patterns, region.template, regionInfo.width, regionInfo.height, region.defaultPixelValue, region.enableSkip, region.combinationOperator, region.gridWidth, region.gridHeight, region.gridOffsetX, region.gridOffsetY, region.gridVectorX, region.gridVectorY, decodingContext);
    this.drawBitmap(regionInfo, bitmap);
  }
  onImmediateLosslessHalftoneRegion() {
    this.onImmediateHalftoneRegion(...arguments);
  }
  onTables(currentSegment, data, start, end) {
    let customTables = this.customTables;
    if (!customTables) {
      this.customTables = customTables = {};
    }
    customTables[currentSegment] = decodeTablesSegment(data, start, end);
  }
}
class HuffmanLine {
  constructor(lineData) {
    if (lineData.length === 2) {
      this.isOOB = true;
      this.rangeLow = 0;
      this.prefixLength = lineData[0];
      this.rangeLength = 0;
      this.prefixCode = lineData[1];
      this.isLowerRange = false;
    } else {
      this.isOOB = false;
      this.rangeLow = lineData[0];
      this.prefixLength = lineData[1];
      this.rangeLength = lineData[2];
      this.prefixCode = lineData[3];
      this.isLowerRange = lineData[4] === "lower";
    }
  }
}
class HuffmanTreeNode {
  constructor(line) {
    this.children = [];
    if (line) {
      this.isLeaf = true;
      this.rangeLength = line.rangeLength;
      this.rangeLow = line.rangeLow;
      this.isLowerRange = line.isLowerRange;
      this.isOOB = line.isOOB;
    } else {
      this.isLeaf = false;
    }
  }
  buildTree(line, shift) {
    const bit = line.prefixCode >> shift & 1;
    if (shift <= 0) {
      this.children[bit] = new HuffmanTreeNode(line);
    } else {
      let node = this.children[bit];
      if (!node) {
        this.children[bit] = node = new HuffmanTreeNode(null);
      }
      node.buildTree(line, shift - 1);
    }
  }
  decodeNode(reader) {
    if (this.isLeaf) {
      if (this.isOOB) {
        return null;
      }
      const htOffset = reader.readBits(this.rangeLength);
      return this.rangeLow + (this.isLowerRange ? -htOffset : htOffset);
    }
    const node = this.children[reader.readBit()];
    if (!node) {
      throw new Jbig2Error("invalid Huffman data");
    }
    return node.decodeNode(reader);
  }
}
class HuffmanTable {
  constructor(lines, prefixCodesDone) {
    if (!prefixCodesDone) {
      this.assignPrefixCodes(lines);
    }
    this.rootNode = new HuffmanTreeNode(null);
    for (let i = 0, ii = lines.length; i < ii; i++) {
      const line = lines[i];
      if (line.prefixLength > 0) {
        this.rootNode.buildTree(line, line.prefixLength - 1);
      }
    }
  }
  decode(reader) {
    return this.rootNode.decodeNode(reader);
  }
  assignPrefixCodes(lines) {
    const linesLength = lines.length;
    let prefixLengthMax = 0;
    for (let i = 0; i < linesLength; i++) {
      prefixLengthMax = Math.max(prefixLengthMax, lines[i].prefixLength);
    }
    const histogram = new Uint32Array(prefixLengthMax + 1);
    for (let i = 0; i < linesLength; i++) {
      histogram[lines[i].prefixLength]++;
    }
    let currentLength = 1,
      firstCode = 0,
      currentCode,
      currentTemp,
      line;
    histogram[0] = 0;
    while (currentLength <= prefixLengthMax) {
      firstCode = firstCode + histogram[currentLength - 1] << 1;
      currentCode = firstCode;
      currentTemp = 0;
      while (currentTemp < linesLength) {
        line = lines[currentTemp];
        if (line.prefixLength === currentLength) {
          line.prefixCode = currentCode;
          currentCode++;
        }
        currentTemp++;
      }
      currentLength++;
    }
  }
}
function decodeTablesSegment(data, start, end) {
  const flags = data[start];
  const lowestValue = readUint32(data, start + 1) & 0xffffffff;
  const highestValue = readUint32(data, start + 5) & 0xffffffff;
  const reader = new Reader(data, start + 9, end);
  const prefixSizeBits = (flags >> 1 & 7) + 1;
  const rangeSizeBits = (flags >> 4 & 7) + 1;
  const lines = [];
  let prefixLength,
    rangeLength,
    currentRangeLow = lowestValue;
  do {
    prefixLength = reader.readBits(prefixSizeBits);
    rangeLength = reader.readBits(rangeSizeBits);
    lines.push(new HuffmanLine([currentRangeLow, prefixLength, rangeLength, 0]));
    currentRangeLow += 1 << rangeLength;
  } while (currentRangeLow < highestValue);
  prefixLength = reader.readBits(prefixSizeBits);
  lines.push(new HuffmanLine([lowestValue - 1, prefixLength, 32, 0, "lower"]));
  prefixLength = reader.readBits(prefixSizeBits);
  lines.push(new HuffmanLine([highestValue, prefixLength, 32, 0]));
  if (flags & 1) {
    prefixLength = reader.readBits(prefixSizeBits);
    lines.push(new HuffmanLine([prefixLength, 0]));
  }
  return new HuffmanTable(lines, false);
}
const standardTablesCache = {};
function getStandardTable(number) {
  let table = standardTablesCache[number];
  if (table) {
    return table;
  }
  let lines;
  switch (number) {
    case 1:
      lines = [[0, 1, 4, 0x0], [16, 2, 8, 0x2], [272, 3, 16, 0x6], [65808, 3, 32, 0x7]];
      break;
    case 2:
      lines = [[0, 1, 0, 0x0], [1, 2, 0, 0x2], [2, 3, 0, 0x6], [3, 4, 3, 0xe], [11, 5, 6, 0x1e], [75, 6, 32, 0x3e], [6, 0x3f]];
      break;
    case 3:
      lines = [[-256, 8, 8, 0xfe], [0, 1, 0, 0x0], [1, 2, 0, 0x2], [2, 3, 0, 0x6], [3, 4, 3, 0xe], [11, 5, 6, 0x1e], [-257, 8, 32, 0xff, "lower"], [75, 7, 32, 0x7e], [6, 0x3e]];
      break;
    case 4:
      lines = [[1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 0, 0x6], [4, 4, 3, 0xe], [12, 5, 6, 0x1e], [76, 5, 32, 0x1f]];
      break;
    case 5:
      lines = [[-255, 7, 8, 0x7e], [1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 0, 0x6], [4, 4, 3, 0xe], [12, 5, 6, 0x1e], [-256, 7, 32, 0x7f, "lower"], [76, 6, 32, 0x3e]];
      break;
    case 6:
      lines = [[-2048, 5, 10, 0x1c], [-1024, 4, 9, 0x8], [-512, 4, 8, 0x9], [-256, 4, 7, 0xa], [-128, 5, 6, 0x1d], [-64, 5, 5, 0x1e], [-32, 4, 5, 0xb], [0, 2, 7, 0x0], [128, 3, 7, 0x2], [256, 3, 8, 0x3], [512, 4, 9, 0xc], [1024, 4, 10, 0xd], [-2049, 6, 32, 0x3e, "lower"], [2048, 6, 32, 0x3f]];
      break;
    case 7:
      lines = [[-1024, 4, 9, 0x8], [-512, 3, 8, 0x0], [-256, 4, 7, 0x9], [-128, 5, 6, 0x1a], [-64, 5, 5, 0x1b], [-32, 4, 5, 0xa], [0, 4, 5, 0xb], [32, 5, 5, 0x1c], [64, 5, 6, 0x1d], [128, 4, 7, 0xc], [256, 3, 8, 0x1], [512, 3, 9, 0x2], [1024, 3, 10, 0x3], [-1025, 5, 32, 0x1e, "lower"], [2048, 5, 32, 0x1f]];
      break;
    case 8:
      lines = [[-15, 8, 3, 0xfc], [-7, 9, 1, 0x1fc], [-5, 8, 1, 0xfd], [-3, 9, 0, 0x1fd], [-2, 7, 0, 0x7c], [-1, 4, 0, 0xa], [0, 2, 1, 0x0], [2, 5, 0, 0x1a], [3, 6, 0, 0x3a], [4, 3, 4, 0x4], [20, 6, 1, 0x3b], [22, 4, 4, 0xb], [38, 4, 5, 0xc], [70, 5, 6, 0x1b], [134, 5, 7, 0x1c], [262, 6, 7, 0x3c], [390, 7, 8, 0x7d], [646, 6, 10, 0x3d], [-16, 9, 32, 0x1fe, "lower"], [1670, 9, 32, 0x1ff], [2, 0x1]];
      break;
    case 9:
      lines = [[-31, 8, 4, 0xfc], [-15, 9, 2, 0x1fc], [-11, 8, 2, 0xfd], [-7, 9, 1, 0x1fd], [-5, 7, 1, 0x7c], [-3, 4, 1, 0xa], [-1, 3, 1, 0x2], [1, 3, 1, 0x3], [3, 5, 1, 0x1a], [5, 6, 1, 0x3a], [7, 3, 5, 0x4], [39, 6, 2, 0x3b], [43, 4, 5, 0xb], [75, 4, 6, 0xc], [139, 5, 7, 0x1b], [267, 5, 8, 0x1c], [523, 6, 8, 0x3c], [779, 7, 9, 0x7d], [1291, 6, 11, 0x3d], [-32, 9, 32, 0x1fe, "lower"], [3339, 9, 32, 0x1ff], [2, 0x0]];
      break;
    case 10:
      lines = [[-21, 7, 4, 0x7a], [-5, 8, 0, 0xfc], [-4, 7, 0, 0x7b], [-3, 5, 0, 0x18], [-2, 2, 2, 0x0], [2, 5, 0, 0x19], [3, 6, 0, 0x36], [4, 7, 0, 0x7c], [5, 8, 0, 0xfd], [6, 2, 6, 0x1], [70, 5, 5, 0x1a], [102, 6, 5, 0x37], [134, 6, 6, 0x38], [198, 6, 7, 0x39], [326, 6, 8, 0x3a], [582, 6, 9, 0x3b], [1094, 6, 10, 0x3c], [2118, 7, 11, 0x7d], [-22, 8, 32, 0xfe, "lower"], [4166, 8, 32, 0xff], [2, 0x2]];
      break;
    case 11:
      lines = [[1, 1, 0, 0x0], [2, 2, 1, 0x2], [4, 4, 0, 0xc], [5, 4, 1, 0xd], [7, 5, 1, 0x1c], [9, 5, 2, 0x1d], [13, 6, 2, 0x3c], [17, 7, 2, 0x7a], [21, 7, 3, 0x7b], [29, 7, 4, 0x7c], [45, 7, 5, 0x7d], [77, 7, 6, 0x7e], [141, 7, 32, 0x7f]];
      break;
    case 12:
      lines = [[1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 1, 0x6], [5, 5, 0, 0x1c], [6, 5, 1, 0x1d], [8, 6, 1, 0x3c], [10, 7, 0, 0x7a], [11, 7, 1, 0x7b], [13, 7, 2, 0x7c], [17, 7, 3, 0x7d], [25, 7, 4, 0x7e], [41, 8, 5, 0xfe], [73, 8, 32, 0xff]];
      break;
    case 13:
      lines = [[1, 1, 0, 0x0], [2, 3, 0, 0x4], [3, 4, 0, 0xc], [4, 5, 0, 0x1c], [5, 4, 1, 0xd], [7, 3, 3, 0x5], [15, 6, 1, 0x3a], [17, 6, 2, 0x3b], [21, 6, 3, 0x3c], [29, 6, 4, 0x3d], [45, 6, 5, 0x3e], [77, 7, 6, 0x7e], [141, 7, 32, 0x7f]];
      break;
    case 14:
      lines = [[-2, 3, 0, 0x4], [-1, 3, 0, 0x5], [0, 1, 0, 0x0], [1, 3, 0, 0x6], [2, 3, 0, 0x7]];
      break;
    case 15:
      lines = [[-24, 7, 4, 0x7c], [-8, 6, 2, 0x3c], [-4, 5, 1, 0x1c], [-2, 4, 0, 0xc], [-1, 3, 0, 0x4], [0, 1, 0, 0x0], [1, 3, 0, 0x5], [2, 4, 0, 0xd], [3, 5, 1, 0x1d], [5, 6, 2, 0x3d], [9, 7, 4, 0x7d], [-25, 7, 32, 0x7e, "lower"], [25, 7, 32, 0x7f]];
      break;
    default:
      throw new Jbig2Error(`standard table B.${number} does not exist`);
  }
  for (let i = 0, ii = lines.length; i < ii; i++) {
    lines[i] = new HuffmanLine(lines[i]);
  }
  table = new HuffmanTable(lines, true);
  standardTablesCache[number] = table;
  return table;
}
class Reader {
  constructor(data, start, end) {
    this.data = data;
    this.start = start;
    this.end = end;
    this.position = start;
    this.shift = -1;
    this.currentByte = 0;
  }
  readBit() {
    if (this.shift < 0) {
      if (this.position >= this.end) {
        throw new Jbig2Error("end of data while reading bit");
      }
      this.currentByte = this.data[this.position++];
      this.shift = 7;
    }
    const bit = this.currentByte >> this.shift & 1;
    this.shift--;
    return bit;
  }
  readBits(numBits) {
    let result = 0,
      i;
    for (i = numBits - 1; i >= 0; i--) {
      result |= this.readBit() << i;
    }
    return result;
  }
  byteAlign() {
    this.shift = -1;
  }
  next() {
    if (this.position >= this.end) {
      return -1;
    }
    return this.data[this.position++];
  }
}
function getCustomHuffmanTable(index, referredTo, customTables) {
  let currentIndex = 0;
  for (let i = 0, ii = referredTo.length; i < ii; i++) {
    const table = customTables[referredTo[i]];
    if (table) {
      if (index === currentIndex) {
        return table;
      }
      currentIndex++;
    }
  }
  throw new Jbig2Error("can't find custom Huffman table");
}
function getTextRegionHuffmanTables(textRegion, referredTo, customTables, numberOfSymbols, reader) {
  const codes = [];
  for (let i = 0; i <= 34; i++) {
    const codeLength = reader.readBits(4);
    codes.push(new HuffmanLine([i, codeLength, 0, 0]));
  }
  const runCodesTable = new HuffmanTable(codes, false);
  codes.length = 0;
  for (let i = 0; i < numberOfSymbols;) {
    const codeLength = runCodesTable.decode(reader);
    if (codeLength >= 32) {
      let repeatedLength, numberOfRepeats, j;
      switch (codeLength) {
        case 32:
          if (i === 0) {
            throw new Jbig2Error("no previous value in symbol ID table");
          }
          numberOfRepeats = reader.readBits(2) + 3;
          repeatedLength = codes[i - 1].prefixLength;
          break;
        case 33:
          numberOfRepeats = reader.readBits(3) + 3;
          repeatedLength = 0;
          break;
        case 34:
          numberOfRepeats = reader.readBits(7) + 11;
          repeatedLength = 0;
          break;
        default:
          throw new Jbig2Error("invalid code length in symbol ID table");
      }
      for (j = 0; j < numberOfRepeats; j++) {
        codes.push(new HuffmanLine([i, repeatedLength, 0, 0]));
        i++;
      }
    } else {
      codes.push(new HuffmanLine([i, codeLength, 0, 0]));
      i++;
    }
  }
  reader.byteAlign();
  const symbolIDTable = new HuffmanTable(codes, false);
  let customIndex = 0,
    tableFirstS,
    tableDeltaS,
    tableDeltaT;
  switch (textRegion.huffmanFS) {
    case 0:
    case 1:
      tableFirstS = getStandardTable(textRegion.huffmanFS + 6);
      break;
    case 3:
      tableFirstS = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
      break;
    default:
      throw new Jbig2Error("invalid Huffman FS selector");
  }
  switch (textRegion.huffmanDS) {
    case 0:
    case 1:
    case 2:
      tableDeltaS = getStandardTable(textRegion.huffmanDS + 8);
      break;
    case 3:
      tableDeltaS = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
      break;
    default:
      throw new Jbig2Error("invalid Huffman DS selector");
  }
  switch (textRegion.huffmanDT) {
    case 0:
    case 1:
    case 2:
      tableDeltaT = getStandardTable(textRegion.huffmanDT + 11);
      break;
    case 3:
      tableDeltaT = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
      break;
    default:
      throw new Jbig2Error("invalid Huffman DT selector");
  }
  if (textRegion.refinement) {
    throw new Jbig2Error("refinement with Huffman is not supported");
  }
  return {
    symbolIDTable,
    tableFirstS,
    tableDeltaS,
    tableDeltaT
  };
}
function getSymbolDictionaryHuffmanTables(dictionary, referredTo, customTables) {
  let customIndex = 0,
    tableDeltaHeight,
    tableDeltaWidth;
  switch (dictionary.huffmanDHSelector) {
    case 0:
    case 1:
      tableDeltaHeight = getStandardTable(dictionary.huffmanDHSelector + 4);
      break;
    case 3:
      tableDeltaHeight = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
      break;
    default:
      throw new Jbig2Error("invalid Huffman DH selector");
  }
  switch (dictionary.huffmanDWSelector) {
    case 0:
    case 1:
      tableDeltaWidth = getStandardTable(dictionary.huffmanDWSelector + 2);
      break;
    case 3:
      tableDeltaWidth = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
      break;
    default:
      throw new Jbig2Error("invalid Huffman DW selector");
  }
  let tableBitmapSize, tableAggregateInstances;
  if (dictionary.bitmapSizeSelector) {
    tableBitmapSize = getCustomHuffmanTable(customIndex, referredTo, customTables);
    customIndex++;
  } else {
    tableBitmapSize = getStandardTable(1);
  }
  if (dictionary.aggregationInstancesSelector) {
    tableAggregateInstances = getCustomHuffmanTable(customIndex, referredTo, customTables);
  } else {
    tableAggregateInstances = getStandardTable(1);
  }
  return {
    tableDeltaHeight,
    tableDeltaWidth,
    tableBitmapSize,
    tableAggregateInstances
  };
}
function readUncompressedBitmap(reader, width, height) {
  const bitmap = [];
  for (let y = 0; y < height; y++) {
    const row = new Uint8Array(width);
    bitmap.push(row);
    for (let x = 0; x < width; x++) {
      row[x] = reader.readBit();
    }
    reader.byteAlign();
  }
  return bitmap;
}
function decodeMMRBitmap(input, width, height, endOfBlock) {
  const params = {
    K: -1,
    Columns: width,
    Rows: height,
    BlackIs1: true,
    EndOfBlock: endOfBlock
  };
  const decoder = new CCITTFaxDecoder(input, params);
  const bitmap = [];
  let currentByte,
    eof = false;
  for (let y = 0; y < height; y++) {
    const row = new Uint8Array(width);
    bitmap.push(row);
    let shift = -1;
    for (let x = 0; x < width; x++) {
      if (shift < 0) {
        currentByte = decoder.readNextChar();
        if (currentByte === -1) {
          currentByte = 0;
          eof = true;
        }
        shift = 7;
      }
      row[x] = currentByte >> shift & 1;
      shift--;
    }
  }
  if (endOfBlock && !eof) {
    const lookForEOFLimit = 5;
    for (let i = 0; i < lookForEOFLimit; i++) {
      if (decoder.readNextChar() === -1) {
        break;
      }
    }
  }
  return bitmap;
}
class Jbig2Image {
  parseChunks(chunks) {
    return parseJbig2Chunks(chunks);
  }
  parse(data) {
    const {
      imgData,
      width,
      height
    } = parseJbig2(data);
    this.width = width;
    this.height = height;
    return imgData;
  }
}

;// CONCATENATED MODULE: ./src/shared/image_utils.js

function convertToRGBA(params) {
  switch (params.kind) {
    case ImageKind.GRAYSCALE_1BPP:
      return convertBlackAndWhiteToRGBA(params);
    case ImageKind.RGB_24BPP:
      return convertRGBToRGBA(params);
  }
  return null;
}
function convertBlackAndWhiteToRGBA({
  src,
  srcPos = 0,
  dest,
  width,
  height,
  nonBlackColor = 0xffffffff,
  inverseDecode = false
}) {
  const black = FeatureTest.isLittleEndian ? 0xff000000 : 0x000000ff;
  const [zeroMapping, oneMapping] = inverseDecode ? [nonBlackColor, black] : [black, nonBlackColor];
  const widthInSource = width >> 3;
  const widthRemainder = width & 7;
  const srcLength = src.length;
  dest = new Uint32Array(dest.buffer);
  let destPos = 0;
  for (let i = 0; i < height; i++) {
    for (const max = srcPos + widthInSource; srcPos < max; srcPos++) {
      const elem = srcPos < srcLength ? src[srcPos] : 255;
      dest[destPos++] = elem & 0b10000000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b1000000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b100000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b10000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b1000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b100 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b10 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b1 ? oneMapping : zeroMapping;
    }
    if (widthRemainder === 0) {
      continue;
    }
    const elem = srcPos < srcLength ? src[srcPos++] : 255;
    for (let j = 0; j < widthRemainder; j++) {
      dest[destPos++] = elem & 1 << 7 - j ? oneMapping : zeroMapping;
    }
  }
  return {
    srcPos,
    destPos
  };
}
function convertRGBToRGBA({
  src,
  srcPos = 0,
  dest,
  destPos = 0,
  width,
  height
}) {
  let i = 0;
  const len32 = src.length >> 2;
  const src32 = new Uint32Array(src.buffer, srcPos, len32);
  if (FeatureTest.isLittleEndian) {
    for (; i < len32 - 2; i += 3, destPos += 4) {
      const s1 = src32[i];
      const s2 = src32[i + 1];
      const s3 = src32[i + 2];
      dest[destPos] = s1 | 0xff000000;
      dest[destPos + 1] = s1 >>> 24 | s2 << 8 | 0xff000000;
      dest[destPos + 2] = s2 >>> 16 | s3 << 16 | 0xff000000;
      dest[destPos + 3] = s3 >>> 8 | 0xff000000;
    }
    for (let j = i * 4, jj = src.length; j < jj; j += 3) {
      dest[destPos++] = src[j] | src[j + 1] << 8 | src[j + 2] << 16 | 0xff000000;
    }
  } else {
    for (; i < len32 - 2; i += 3, destPos += 4) {
      const s1 = src32[i];
      const s2 = src32[i + 1];
      const s3 = src32[i + 2];
      dest[destPos] = s1 | 0xff;
      dest[destPos + 1] = s1 << 24 | s2 >>> 8 | 0xff;
      dest[destPos + 2] = s2 << 16 | s3 >>> 16 | 0xff;
      dest[destPos + 3] = s3 << 8 | 0xff;
    }
    for (let j = i * 4, jj = src.length; j < jj; j += 3) {
      dest[destPos++] = src[j] << 24 | src[j + 1] << 16 | src[j + 2] << 8 | 0xff;
    }
  }
  return {
    srcPos,
    destPos
  };
}
function grayToRGBA(src, dest) {
  if (util_FeatureTest.isLittleEndian) {
    for (let i = 0, ii = src.length; i < ii; i++) {
      dest[i] = src[i] * 0x10101 | 0xff000000;
    }
  } else {
    for (let i = 0, ii = src.length; i < ii; i++) {
      dest[i] = src[i] * 0x1010100 | 0x000000ff;
    }
  }
}

;// CONCATENATED MODULE: ./src/core/jpg.js



class JpegError extends BaseException {
  constructor(msg) {
    super(msg, "JpegError");
  }
}
class DNLMarkerError extends BaseException {
  constructor(message, scanLines) {
    super(message, "DNLMarkerError");
    this.scanLines = scanLines;
  }
}
class EOIMarkerError extends BaseException {
  constructor(msg) {
    super(msg, "EOIMarkerError");
  }
}
const dctZigZag = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);
const dctCos1 = 4017;
const dctSin1 = 799;
const dctCos3 = 3406;
const dctSin3 = 2276;
const dctCos6 = 1567;
const dctSin6 = 3784;
const dctSqrt2 = 5793;
const dctSqrt1d2 = 2896;
function buildHuffmanTable(codeLengths, values) {
  let k = 0,
    i,
    j,
    length = 16;
  while (length > 0 && !codeLengths[length - 1]) {
    length--;
  }
  const code = [{
    children: [],
    index: 0
  }];
  let p = code[0],
    q;
  for (i = 0; i < length; i++) {
    for (j = 0; j < codeLengths[i]; j++) {
      p = code.pop();
      p.children[p.index] = values[k];
      while (p.index > 0) {
        p = code.pop();
      }
      p.index++;
      code.push(p);
      while (code.length <= i) {
        code.push(q = {
          children: [],
          index: 0
        });
        p.children[p.index] = q.children;
        p = q;
      }
      k++;
    }
    if (i + 1 < length) {
      code.push(q = {
        children: [],
        index: 0
      });
      p.children[p.index] = q.children;
      p = q;
    }
  }
  return code[0].children;
}
function getBlockBufferOffset(component, row, col) {
  return 64 * ((component.blocksPerLine + 1) * row + col);
}
function decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successivePrev, successive, parseDNLMarker = false) {
  const mcusPerLine = frame.mcusPerLine;
  const progressive = frame.progressive;
  const startOffset = offset;
  let bitsData = 0,
    bitsCount = 0;
  function readBit() {
    if (bitsCount > 0) {
      bitsCount--;
      return bitsData >> bitsCount & 1;
    }
    bitsData = data[offset++];
    if (bitsData === 0xff) {
      const nextByte = data[offset++];
      if (nextByte) {
        if (nextByte === 0xdc && parseDNLMarker) {
          offset += 2;
          const scanLines = readUint16(data, offset);
          offset += 2;
          if (scanLines > 0 && scanLines !== frame.scanLines) {
            throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data", scanLines);
          }
        } else if (nextByte === 0xd9) {
          if (parseDNLMarker) {
            const maybeScanLines = blockRow * (frame.precision === 8 ? 8 : 0);
            if (maybeScanLines > 0 && Math.round(frame.scanLines / maybeScanLines) >= 5) {
              throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, " + "possibly caused by incorrect `scanLines` parameter", maybeScanLines);
            }
          }
          throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data");
        }
        throw new JpegError(`unexpected marker ${(bitsData << 8 | nextByte).toString(16)}`);
      }
    }
    bitsCount = 7;
    return bitsData >>> 7;
  }
  function decodeHuffman(tree) {
    let node = tree;
    while (true) {
      node = node[readBit()];
      switch (typeof node) {
        case "number":
          return node;
        case "object":
          continue;
      }
      throw new JpegError("invalid huffman sequence");
    }
  }
  function receive(length) {
    let n = 0;
    while (length > 0) {
      n = n << 1 | readBit();
      length--;
    }
    return n;
  }
  function receiveAndExtend(length) {
    if (length === 1) {
      return readBit() === 1 ? 1 : -1;
    }
    const n = receive(length);
    if (n >= 1 << length - 1) {
      return n;
    }
    return n + (-1 << length) + 1;
  }
  function decodeBaseline(component, blockOffset) {
    const t = decodeHuffman(component.huffmanTableDC);
    const diff = t === 0 ? 0 : receiveAndExtend(t);
    component.blockData[blockOffset] = component.pred += diff;
    let k = 1;
    while (k < 64) {
      const rs = decodeHuffman(component.huffmanTableAC);
      const s = rs & 15,
        r = rs >> 4;
      if (s === 0) {
        if (r < 15) {
          break;
        }
        k += 16;
        continue;
      }
      k += r;
      const z = dctZigZag[k];
      component.blockData[blockOffset + z] = receiveAndExtend(s);
      k++;
    }
  }
  function decodeDCFirst(component, blockOffset) {
    const t = decodeHuffman(component.huffmanTableDC);
    const diff = t === 0 ? 0 : receiveAndExtend(t) << successive;
    component.blockData[blockOffset] = component.pred += diff;
  }
  function decodeDCSuccessive(component, blockOffset) {
    component.blockData[blockOffset] |= readBit() << successive;
  }
  let eobrun = 0;
  function decodeACFirst(component, blockOffset) {
    if (eobrun > 0) {
      eobrun--;
      return;
    }
    let k = spectralStart;
    const e = spectralEnd;
    while (k <= e) {
      const rs = decodeHuffman(component.huffmanTableAC);
      const s = rs & 15,
        r = rs >> 4;
      if (s === 0) {
        if (r < 15) {
          eobrun = receive(r) + (1 << r) - 1;
          break;
        }
        k += 16;
        continue;
      }
      k += r;
      const z = dctZigZag[k];
      component.blockData[blockOffset + z] = receiveAndExtend(s) * (1 << successive);
      k++;
    }
  }
  let successiveACState = 0,
    successiveACNextValue;
  function decodeACSuccessive(component, blockOffset) {
    let k = spectralStart;
    const e = spectralEnd;
    let r = 0;
    let s;
    let rs;
    while (k <= e) {
      const offsetZ = blockOffset + dctZigZag[k];
      const sign = component.blockData[offsetZ] < 0 ? -1 : 1;
      switch (successiveACState) {
        case 0:
          rs = decodeHuffman(component.huffmanTableAC);
          s = rs & 15;
          r = rs >> 4;
          if (s === 0) {
            if (r < 15) {
              eobrun = receive(r) + (1 << r);
              successiveACState = 4;
            } else {
              r = 16;
              successiveACState = 1;
            }
          } else {
            if (s !== 1) {
              throw new JpegError("invalid ACn encoding");
            }
            successiveACNextValue = receiveAndExtend(s);
            successiveACState = r ? 2 : 3;
          }
          continue;
        case 1:
        case 2:
          if (component.blockData[offsetZ]) {
            component.blockData[offsetZ] += sign * (readBit() << successive);
          } else {
            r--;
            if (r === 0) {
              successiveACState = successiveACState === 2 ? 3 : 0;
            }
          }
          break;
        case 3:
          if (component.blockData[offsetZ]) {
            component.blockData[offsetZ] += sign * (readBit() << successive);
          } else {
            component.blockData[offsetZ] = successiveACNextValue << successive;
            successiveACState = 0;
          }
          break;
        case 4:
          if (component.blockData[offsetZ]) {
            component.blockData[offsetZ] += sign * (readBit() << successive);
          }
          break;
      }
      k++;
    }
    if (successiveACState === 4) {
      eobrun--;
      if (eobrun === 0) {
        successiveACState = 0;
      }
    }
  }
  let blockRow = 0;
  function decodeMcu(component, decode, mcu, row, col) {
    const mcuRow = mcu / mcusPerLine | 0;
    const mcuCol = mcu % mcusPerLine;
    blockRow = mcuRow * component.v + row;
    const blockCol = mcuCol * component.h + col;
    const blockOffset = getBlockBufferOffset(component, blockRow, blockCol);
    decode(component, blockOffset);
  }
  function decodeBlock(component, decode, mcu) {
    blockRow = mcu / component.blocksPerLine | 0;
    const blockCol = mcu % component.blocksPerLine;
    const blockOffset = getBlockBufferOffset(component, blockRow, blockCol);
    decode(component, blockOffset);
  }
  const componentsLength = components.length;
  let component, i, j, k, n;
  let decodeFn;
  if (progressive) {
    if (spectralStart === 0) {
      decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
    } else {
      decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
    }
  } else {
    decodeFn = decodeBaseline;
  }
  let mcu = 0,
    fileMarker;
  const mcuExpected = componentsLength === 1 ? components[0].blocksPerLine * components[0].blocksPerColumn : mcusPerLine * frame.mcusPerColumn;
  let h, v;
  while (mcu <= mcuExpected) {
    const mcuToRead = resetInterval ? Math.min(mcuExpected - mcu, resetInterval) : mcuExpected;
    if (mcuToRead > 0) {
      for (i = 0; i < componentsLength; i++) {
        components[i].pred = 0;
      }
      eobrun = 0;
      if (componentsLength === 1) {
        component = components[0];
        for (n = 0; n < mcuToRead; n++) {
          decodeBlock(component, decodeFn, mcu);
          mcu++;
        }
      } else {
        for (n = 0; n < mcuToRead; n++) {
          for (i = 0; i < componentsLength; i++) {
            component = components[i];
            h = component.h;
            v = component.v;
            for (j = 0; j < v; j++) {
              for (k = 0; k < h; k++) {
                decodeMcu(component, decodeFn, mcu, j, k);
              }
            }
          }
          mcu++;
        }
      }
    }
    bitsCount = 0;
    fileMarker = findNextFileMarker(data, offset);
    if (!fileMarker) {
      break;
    }
    if (fileMarker.invalid) {
      const partialMsg = mcuToRead > 0 ? "unexpected" : "excessive";
      util_warn(`decodeScan - ${partialMsg} MCU data, current marker is: ${fileMarker.invalid}`);
      offset = fileMarker.offset;
    }
    if (fileMarker.marker >= 0xffd0 && fileMarker.marker <= 0xffd7) {
      offset += 2;
    } else {
      break;
    }
  }
  return offset - startOffset;
}
function quantizeAndInverse(component, blockBufferOffset, p) {
  const qt = component.quantizationTable,
    blockData = component.blockData;
  let v0, v1, v2, v3, v4, v5, v6, v7;
  let p0, p1, p2, p3, p4, p5, p6, p7;
  let t;
  if (!qt) {
    throw new JpegError("missing required Quantization Table.");
  }
  for (let row = 0; row < 64; row += 8) {
    p0 = blockData[blockBufferOffset + row];
    p1 = blockData[blockBufferOffset + row + 1];
    p2 = blockData[blockBufferOffset + row + 2];
    p3 = blockData[blockBufferOffset + row + 3];
    p4 = blockData[blockBufferOffset + row + 4];
    p5 = blockData[blockBufferOffset + row + 5];
    p6 = blockData[blockBufferOffset + row + 6];
    p7 = blockData[blockBufferOffset + row + 7];
    p0 *= qt[row];
    if ((p1 | p2 | p3 | p4 | p5 | p6 | p7) === 0) {
      t = dctSqrt2 * p0 + 512 >> 10;
      p[row] = t;
      p[row + 1] = t;
      p[row + 2] = t;
      p[row + 3] = t;
      p[row + 4] = t;
      p[row + 5] = t;
      p[row + 6] = t;
      p[row + 7] = t;
      continue;
    }
    p1 *= qt[row + 1];
    p2 *= qt[row + 2];
    p3 *= qt[row + 3];
    p4 *= qt[row + 4];
    p5 *= qt[row + 5];
    p6 *= qt[row + 6];
    p7 *= qt[row + 7];
    v0 = dctSqrt2 * p0 + 128 >> 8;
    v1 = dctSqrt2 * p4 + 128 >> 8;
    v2 = p2;
    v3 = p6;
    v4 = dctSqrt1d2 * (p1 - p7) + 128 >> 8;
    v7 = dctSqrt1d2 * (p1 + p7) + 128 >> 8;
    v5 = p3 << 4;
    v6 = p5 << 4;
    v0 = v0 + v1 + 1 >> 1;
    v1 = v0 - v1;
    t = v2 * dctSin6 + v3 * dctCos6 + 128 >> 8;
    v2 = v2 * dctCos6 - v3 * dctSin6 + 128 >> 8;
    v3 = t;
    v4 = v4 + v6 + 1 >> 1;
    v6 = v4 - v6;
    v7 = v7 + v5 + 1 >> 1;
    v5 = v7 - v5;
    v0 = v0 + v3 + 1 >> 1;
    v3 = v0 - v3;
    v1 = v1 + v2 + 1 >> 1;
    v2 = v1 - v2;
    t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
    v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
    v7 = t;
    t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
    v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
    v6 = t;
    p[row] = v0 + v7;
    p[row + 7] = v0 - v7;
    p[row + 1] = v1 + v6;
    p[row + 6] = v1 - v6;
    p[row + 2] = v2 + v5;
    p[row + 5] = v2 - v5;
    p[row + 3] = v3 + v4;
    p[row + 4] = v3 - v4;
  }
  for (let col = 0; col < 8; ++col) {
    p0 = p[col];
    p1 = p[col + 8];
    p2 = p[col + 16];
    p3 = p[col + 24];
    p4 = p[col + 32];
    p5 = p[col + 40];
    p6 = p[col + 48];
    p7 = p[col + 56];
    if ((p1 | p2 | p3 | p4 | p5 | p6 | p7) === 0) {
      t = dctSqrt2 * p0 + 8192 >> 14;
      if (t < -2040) {
        t = 0;
      } else if (t >= 2024) {
        t = 255;
      } else {
        t = t + 2056 >> 4;
      }
      blockData[blockBufferOffset + col] = t;
      blockData[blockBufferOffset + col + 8] = t;
      blockData[blockBufferOffset + col + 16] = t;
      blockData[blockBufferOffset + col + 24] = t;
      blockData[blockBufferOffset + col + 32] = t;
      blockData[blockBufferOffset + col + 40] = t;
      blockData[blockBufferOffset + col + 48] = t;
      blockData[blockBufferOffset + col + 56] = t;
      continue;
    }
    v0 = dctSqrt2 * p0 + 2048 >> 12;
    v1 = dctSqrt2 * p4 + 2048 >> 12;
    v2 = p2;
    v3 = p6;
    v4 = dctSqrt1d2 * (p1 - p7) + 2048 >> 12;
    v7 = dctSqrt1d2 * (p1 + p7) + 2048 >> 12;
    v5 = p3;
    v6 = p5;
    v0 = (v0 + v1 + 1 >> 1) + 4112;
    v1 = v0 - v1;
    t = v2 * dctSin6 + v3 * dctCos6 + 2048 >> 12;
    v2 = v2 * dctCos6 - v3 * dctSin6 + 2048 >> 12;
    v3 = t;
    v4 = v4 + v6 + 1 >> 1;
    v6 = v4 - v6;
    v7 = v7 + v5 + 1 >> 1;
    v5 = v7 - v5;
    v0 = v0 + v3 + 1 >> 1;
    v3 = v0 - v3;
    v1 = v1 + v2 + 1 >> 1;
    v2 = v1 - v2;
    t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
    v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
    v7 = t;
    t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
    v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
    v6 = t;
    p0 = v0 + v7;
    p7 = v0 - v7;
    p1 = v1 + v6;
    p6 = v1 - v6;
    p2 = v2 + v5;
    p5 = v2 - v5;
    p3 = v3 + v4;
    p4 = v3 - v4;
    if (p0 < 16) {
      p0 = 0;
    } else if (p0 >= 4080) {
      p0 = 255;
    } else {
      p0 >>= 4;
    }
    if (p1 < 16) {
      p1 = 0;
    } else if (p1 >= 4080) {
      p1 = 255;
    } else {
      p1 >>= 4;
    }
    if (p2 < 16) {
      p2 = 0;
    } else if (p2 >= 4080) {
      p2 = 255;
    } else {
      p2 >>= 4;
    }
    if (p3 < 16) {
      p3 = 0;
    } else if (p3 >= 4080) {
      p3 = 255;
    } else {
      p3 >>= 4;
    }
    if (p4 < 16) {
      p4 = 0;
    } else if (p4 >= 4080) {
      p4 = 255;
    } else {
      p4 >>= 4;
    }
    if (p5 < 16) {
      p5 = 0;
    } else if (p5 >= 4080) {
      p5 = 255;
    } else {
      p5 >>= 4;
    }
    if (p6 < 16) {
      p6 = 0;
    } else if (p6 >= 4080) {
      p6 = 255;
    } else {
      p6 >>= 4;
    }
    if (p7 < 16) {
      p7 = 0;
    } else if (p7 >= 4080) {
      p7 = 255;
    } else {
      p7 >>= 4;
    }
    blockData[blockBufferOffset + col] = p0;
    blockData[blockBufferOffset + col + 8] = p1;
    blockData[blockBufferOffset + col + 16] = p2;
    blockData[blockBufferOffset + col + 24] = p3;
    blockData[blockBufferOffset + col + 32] = p4;
    blockData[blockBufferOffset + col + 40] = p5;
    blockData[blockBufferOffset + col + 48] = p6;
    blockData[blockBufferOffset + col + 56] = p7;
  }
}
function buildComponentData(frame, component) {
  const blocksPerLine = component.blocksPerLine;
  const blocksPerColumn = component.blocksPerColumn;
  const computationBuffer = new Int16Array(64);
  for (let blockRow = 0; blockRow < blocksPerColumn; blockRow++) {
    for (let blockCol = 0; blockCol < blocksPerLine; blockCol++) {
      const offset = getBlockBufferOffset(component, blockRow, blockCol);
      quantizeAndInverse(component, offset, computationBuffer);
    }
  }
  return component.blockData;
}
function findNextFileMarker(data, currentPos, startPos = currentPos) {
  const maxPos = data.length - 1;
  let newPos = startPos < currentPos ? startPos : currentPos;
  if (currentPos >= maxPos) {
    return null;
  }
  const currentMarker = readUint16(data, currentPos);
  if (currentMarker >= 0xffc0 && currentMarker <= 0xfffe) {
    return {
      invalid: null,
      marker: currentMarker,
      offset: currentPos
    };
  }
  let newMarker = readUint16(data, newPos);
  while (!(newMarker >= 0xffc0 && newMarker <= 0xfffe)) {
    if (++newPos >= maxPos) {
      return null;
    }
    newMarker = readUint16(data, newPos);
  }
  return {
    invalid: currentMarker.toString(16),
    marker: newMarker,
    offset: newPos
  };
}
class JpegImage {
  constructor({
    decodeTransform = null,
    colorTransform = -1
  } = {}) {
    this._decodeTransform = decodeTransform;
    this._colorTransform = colorTransform;
  }
  parse(data, {
    dnlScanLines = null
  } = {}) {
    function readDataBlock() {
      const length = readUint16(data, offset);
      offset += 2;
      let endOffset = offset + length - 2;
      const fileMarker = findNextFileMarker(data, endOffset, offset);
      if (fileMarker?.invalid) {
        util_warn("readDataBlock - incorrect length, current marker is: " + fileMarker.invalid);
        endOffset = fileMarker.offset;
      }
      const array = data.subarray(offset, endOffset);
      offset += array.length;
      return array;
    }
    function prepareComponents(frame) {
      const mcusPerLine = Math.ceil(frame.samplesPerLine / 8 / frame.maxH);
      const mcusPerColumn = Math.ceil(frame.scanLines / 8 / frame.maxV);
      for (const component of frame.components) {
        const blocksPerLine = Math.ceil(Math.ceil(frame.samplesPerLine / 8) * component.h / frame.maxH);
        const blocksPerColumn = Math.ceil(Math.ceil(frame.scanLines / 8) * component.v / frame.maxV);
        const blocksPerLineForMcu = mcusPerLine * component.h;
        const blocksPerColumnForMcu = mcusPerColumn * component.v;
        const blocksBufferSize = 64 * blocksPerColumnForMcu * (blocksPerLineForMcu + 1);
        component.blockData = new Int16Array(blocksBufferSize);
        component.blocksPerLine = blocksPerLine;
        component.blocksPerColumn = blocksPerColumn;
      }
      frame.mcusPerLine = mcusPerLine;
      frame.mcusPerColumn = mcusPerColumn;
    }
    let offset = 0;
    let jfif = null;
    let adobe = null;
    let frame, resetInterval;
    let numSOSMarkers = 0;
    const quantizationTables = [];
    const huffmanTablesAC = [],
      huffmanTablesDC = [];
    let fileMarker = readUint16(data, offset);
    offset += 2;
    if (fileMarker !== 0xffd8) {
      throw new JpegError("SOI not found");
    }
    fileMarker = readUint16(data, offset);
    offset += 2;
    markerLoop: while (fileMarker !== 0xffd9) {
      let i, j, l;
      switch (fileMarker) {
        case 0xffe0:
        case 0xffe1:
        case 0xffe2:
        case 0xffe3:
        case 0xffe4:
        case 0xffe5:
        case 0xffe6:
        case 0xffe7:
        case 0xffe8:
        case 0xffe9:
        case 0xffea:
        case 0xffeb:
        case 0xffec:
        case 0xffed:
        case 0xffee:
        case 0xffef:
        case 0xfffe:
          const appData = readDataBlock();
          if (fileMarker === 0xffe0) {
            if (appData[0] === 0x4a && appData[1] === 0x46 && appData[2] === 0x49 && appData[3] === 0x46 && appData[4] === 0) {
              jfif = {
                version: {
                  major: appData[5],
                  minor: appData[6]
                },
                densityUnits: appData[7],
                xDensity: appData[8] << 8 | appData[9],
                yDensity: appData[10] << 8 | appData[11],
                thumbWidth: appData[12],
                thumbHeight: appData[13],
                thumbData: appData.subarray(14, 14 + 3 * appData[12] * appData[13])
              };
            }
          }
          if (fileMarker === 0xffee) {
            if (appData[0] === 0x41 && appData[1] === 0x64 && appData[2] === 0x6f && appData[3] === 0x62 && appData[4] === 0x65) {
              adobe = {
                version: appData[5] << 8 | appData[6],
                flags0: appData[7] << 8 | appData[8],
                flags1: appData[9] << 8 | appData[10],
                transformCode: appData[11]
              };
            }
          }
          break;
        case 0xffdb:
          const quantizationTablesLength = readUint16(data, offset);
          offset += 2;
          const quantizationTablesEnd = quantizationTablesLength + offset - 2;
          let z;
          while (offset < quantizationTablesEnd) {
            const quantizationTableSpec = data[offset++];
            const tableData = new Uint16Array(64);
            if (quantizationTableSpec >> 4 === 0) {
              for (j = 0; j < 64; j++) {
                z = dctZigZag[j];
                tableData[z] = data[offset++];
              }
            } else if (quantizationTableSpec >> 4 === 1) {
              for (j = 0; j < 64; j++) {
                z = dctZigZag[j];
                tableData[z] = readUint16(data, offset);
                offset += 2;
              }
            } else {
              throw new JpegError("DQT - invalid table spec");
            }
            quantizationTables[quantizationTableSpec & 15] = tableData;
          }
          break;
        case 0xffc0:
        case 0xffc1:
        case 0xffc2:
          if (frame) {
            throw new JpegError("Only single frame JPEGs supported");
          }
          offset += 2;
          frame = {};
          frame.extended = fileMarker === 0xffc1;
          frame.progressive = fileMarker === 0xffc2;
          frame.precision = data[offset++];
          const sofScanLines = readUint16(data, offset);
          offset += 2;
          frame.scanLines = dnlScanLines || sofScanLines;
          frame.samplesPerLine = readUint16(data, offset);
          offset += 2;
          frame.components = [];
          frame.componentIds = {};
          const componentsCount = data[offset++];
          let maxH = 0,
            maxV = 0;
          for (i = 0; i < componentsCount; i++) {
            const componentId = data[offset];
            const h = data[offset + 1] >> 4;
            const v = data[offset + 1] & 15;
            if (maxH < h) {
              maxH = h;
            }
            if (maxV < v) {
              maxV = v;
            }
            const qId = data[offset + 2];
            l = frame.components.push({
              h,
              v,
              quantizationId: qId,
              quantizationTable: null
            });
            frame.componentIds[componentId] = l - 1;
            offset += 3;
          }
          frame.maxH = maxH;
          frame.maxV = maxV;
          prepareComponents(frame);
          break;
        case 0xffc4:
          const huffmanLength = readUint16(data, offset);
          offset += 2;
          for (i = 2; i < huffmanLength;) {
            const huffmanTableSpec = data[offset++];
            const codeLengths = new Uint8Array(16);
            let codeLengthSum = 0;
            for (j = 0; j < 16; j++, offset++) {
              codeLengthSum += codeLengths[j] = data[offset];
            }
            const huffmanValues = new Uint8Array(codeLengthSum);
            for (j = 0; j < codeLengthSum; j++, offset++) {
              huffmanValues[j] = data[offset];
            }
            i += 17 + codeLengthSum;
            (huffmanTableSpec >> 4 === 0 ? huffmanTablesDC : huffmanTablesAC)[huffmanTableSpec & 15] = buildHuffmanTable(codeLengths, huffmanValues);
          }
          break;
        case 0xffdd:
          offset += 2;
          resetInterval = readUint16(data, offset);
          offset += 2;
          break;
        case 0xffda:
          const parseDNLMarker = ++numSOSMarkers === 1 && !dnlScanLines;
          offset += 2;
          const selectorsCount = data[offset++],
            components = [];
          for (i = 0; i < selectorsCount; i++) {
            const index = data[offset++];
            const componentIndex = frame.componentIds[index];
            const component = frame.components[componentIndex];
            component.index = index;
            const tableSpec = data[offset++];
            component.huffmanTableDC = huffmanTablesDC[tableSpec >> 4];
            component.huffmanTableAC = huffmanTablesAC[tableSpec & 15];
            components.push(component);
          }
          const spectralStart = data[offset++],
            spectralEnd = data[offset++],
            successiveApproximation = data[offset++];
          try {
            const processed = decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successiveApproximation >> 4, successiveApproximation & 15, parseDNLMarker);
            offset += processed;
          } catch (ex) {
            if (ex instanceof DNLMarkerError) {
              util_warn(`${ex.message} -- attempting to re-parse the JPEG image.`);
              return this.parse(data, {
                dnlScanLines: ex.scanLines
              });
            } else if (ex instanceof EOIMarkerError) {
              util_warn(`${ex.message} -- ignoring the rest of the image data.`);
              break markerLoop;
            }
            throw ex;
          }
          break;
        case 0xffdc:
          offset += 4;
          break;
        case 0xffff:
          if (data[offset] !== 0xff) {
            offset--;
          }
          break;
        default:
          const nextFileMarker = findNextFileMarker(data, offset - 2, offset - 3);
          if (nextFileMarker?.invalid) {
            util_warn("JpegImage.parse - unexpected data, current marker is: " + nextFileMarker.invalid);
            offset = nextFileMarker.offset;
            break;
          }
          if (!nextFileMarker || offset >= data.length - 1) {
            util_warn("JpegImage.parse - reached the end of the image data " + "without finding an EOI marker (0xFFD9).");
            break markerLoop;
          }
          throw new JpegError("JpegImage.parse - unknown marker: " + fileMarker.toString(16));
      }
      fileMarker = readUint16(data, offset);
      offset += 2;
    }
    if (!frame) {
      throw new JpegError("JpegImage.parse - no frame data found.");
    }
    this.width = frame.samplesPerLine;
    this.height = frame.scanLines;
    this.jfif = jfif;
    this.adobe = adobe;
    this.components = [];
    for (const component of frame.components) {
      const quantizationTable = quantizationTables[component.quantizationId];
      if (quantizationTable) {
        component.quantizationTable = quantizationTable;
      }
      this.components.push({
        index: component.index,
        output: buildComponentData(frame, component),
        scaleX: component.h / frame.maxH,
        scaleY: component.v / frame.maxV,
        blocksPerLine: component.blocksPerLine,
        blocksPerColumn: component.blocksPerColumn
      });
    }
    this.numComponents = this.components.length;
    return undefined;
  }
  _getLinearizedBlockData(width, height, isSourcePDF = false) {
    const scaleX = this.width / width,
      scaleY = this.height / height;
    let component, componentScaleX, componentScaleY, blocksPerScanline;
    let x, y, i, j, k;
    let index;
    let offset = 0;
    let output;
    const numComponents = this.components.length;
    const dataLength = width * height * numComponents;
    const data = new Uint8ClampedArray(dataLength);
    const xScaleBlockOffset = new Uint32Array(width);
    const mask3LSB = 0xfffffff8;
    let lastComponentScaleX;
    for (i = 0; i < numComponents; i++) {
      component = this.components[i];
      componentScaleX = component.scaleX * scaleX;
      componentScaleY = component.scaleY * scaleY;
      offset = i;
      output = component.output;
      blocksPerScanline = component.blocksPerLine + 1 << 3;
      if (componentScaleX !== lastComponentScaleX) {
        for (x = 0; x < width; x++) {
          j = 0 | x * componentScaleX;
          xScaleBlockOffset[x] = (j & mask3LSB) << 3 | j & 7;
        }
        lastComponentScaleX = componentScaleX;
      }
      for (y = 0; y < height; y++) {
        j = 0 | y * componentScaleY;
        index = blocksPerScanline * (j & mask3LSB) | (j & 7) << 3;
        for (x = 0; x < width; x++) {
          data[offset] = output[index + xScaleBlockOffset[x]];
          offset += numComponents;
        }
      }
    }
    let transform = this._decodeTransform;
    if (!isSourcePDF && numComponents === 4 && !transform) {
      transform = new Int32Array([-256, 255, -256, 255, -256, 255, -256, 255]);
    }
    if (transform) {
      for (i = 0; i < dataLength;) {
        for (j = 0, k = 0; j < numComponents; j++, i++, k += 2) {
          data[i] = (data[i] * transform[k] >> 8) + transform[k + 1];
        }
      }
    }
    return data;
  }
  get _isColorConversionNeeded() {
    if (this.adobe) {
      return !!this.adobe.transformCode;
    }
    if (this.numComponents === 3) {
      if (this._colorTransform === 0) {
        return false;
      } else if (this.components[0].index === 0x52 && this.components[1].index === 0x47 && this.components[2].index === 0x42) {
        return false;
      }
      return true;
    }
    if (this._colorTransform === 1) {
      return true;
    }
    return false;
  }
  _convertYccToRgb(data) {
    let Y, Cb, Cr;
    for (let i = 0, length = data.length; i < length; i += 3) {
      Y = data[i];
      Cb = data[i + 1];
      Cr = data[i + 2];
      data[i] = Y - 179.456 + 1.402 * Cr;
      data[i + 1] = Y + 135.459 - 0.344 * Cb - 0.714 * Cr;
      data[i + 2] = Y - 226.816 + 1.772 * Cb;
    }
    return data;
  }
  _convertYccToRgba(data, out) {
    for (let i = 0, j = 0, length = data.length; i < length; i += 3, j += 4) {
      const Y = data[i];
      const Cb = data[i + 1];
      const Cr = data[i + 2];
      out[j] = Y - 179.456 + 1.402 * Cr;
      out[j + 1] = Y + 135.459 - 0.344 * Cb - 0.714 * Cr;
      out[j + 2] = Y - 226.816 + 1.772 * Cb;
      out[j + 3] = 255;
    }
    return out;
  }
  _convertYcckToRgb(data) {
    let Y, Cb, Cr, k;
    let offset = 0;
    for (let i = 0, length = data.length; i < length; i += 4) {
      Y = data[i];
      Cb = data[i + 1];
      Cr = data[i + 2];
      k = data[i + 3];
      data[offset++] = -122.67195406894 + Cb * (-6.60635669420364e-5 * Cb + 0.000437130475926232 * Cr - 5.4080610064599e-5 * Y + 0.00048449797120281 * k - 0.154362151871126) + Cr * (-0.000957964378445773 * Cr + 0.000817076911346625 * Y - 0.00477271405408747 * k + 1.53380253221734) + Y * (0.000961250184130688 * Y - 0.00266257332283933 * k + 0.48357088451265) + k * (-0.000336197177618394 * k + 0.484791561490776);
      data[offset++] = 107.268039397724 + Cb * (2.19927104525741e-5 * Cb - 0.000640992018297945 * Cr + 0.000659397001245577 * Y + 0.000426105652938837 * k - 0.176491792462875) + Cr * (-0.000778269941513683 * Cr + 0.00130872261408275 * Y + 0.000770482631801132 * k - 0.151051492775562) + Y * (0.00126935368114843 * Y - 0.00265090189010898 * k + 0.25802910206845) + k * (-0.000318913117588328 * k - 0.213742400323665);
      data[offset++] = -20.810012546947 + Cb * (-0.000570115196973677 * Cb - 2.63409051004589e-5 * Cr + 0.0020741088115012 * Y - 0.00288260236853442 * k + 0.814272968359295) + Cr * (-1.53496057440975e-5 * Cr - 0.000132689043961446 * Y + 0.000560833691242812 * k - 0.195152027534049) + Y * (0.00174418132927582 * Y - 0.00255243321439347 * k + 0.116935020465145) + k * (-0.000343531996510555 * k + 0.24165260232407);
    }
    return data.subarray(0, offset);
  }
  _convertYcckToRgba(data) {
    for (let i = 0, length = data.length; i < length; i += 4) {
      const Y = data[i];
      const Cb = data[i + 1];
      const Cr = data[i + 2];
      const k = data[i + 3];
      data[i] = -122.67195406894 + Cb * (-6.60635669420364e-5 * Cb + 0.000437130475926232 * Cr - 5.4080610064599e-5 * Y + 0.00048449797120281 * k - 0.154362151871126) + Cr * (-0.000957964378445773 * Cr + 0.000817076911346625 * Y - 0.00477271405408747 * k + 1.53380253221734) + Y * (0.000961250184130688 * Y - 0.00266257332283933 * k + 0.48357088451265) + k * (-0.000336197177618394 * k + 0.484791561490776);
      data[i + 1] = 107.268039397724 + Cb * (2.19927104525741e-5 * Cb - 0.000640992018297945 * Cr + 0.000659397001245577 * Y + 0.000426105652938837 * k - 0.176491792462875) + Cr * (-0.000778269941513683 * Cr + 0.00130872261408275 * Y + 0.000770482631801132 * k - 0.151051492775562) + Y * (0.00126935368114843 * Y - 0.00265090189010898 * k + 0.25802910206845) + k * (-0.000318913117588328 * k - 0.213742400323665);
      data[i + 2] = -20.810012546947 + Cb * (-0.000570115196973677 * Cb - 2.63409051004589e-5 * Cr + 0.0020741088115012 * Y - 0.00288260236853442 * k + 0.814272968359295) + Cr * (-1.53496057440975e-5 * Cr - 0.000132689043961446 * Y + 0.000560833691242812 * k - 0.195152027534049) + Y * (0.00174418132927582 * Y - 0.00255243321439347 * k + 0.116935020465145) + k * (-0.000343531996510555 * k + 0.24165260232407);
      data[i + 3] = 255;
    }
    return data;
  }
  _convertYcckToCmyk(data) {
    let Y, Cb, Cr;
    for (let i = 0, length = data.length; i < length; i += 4) {
      Y = data[i];
      Cb = data[i + 1];
      Cr = data[i + 2];
      data[i] = 434.456 - Y - 1.402 * Cr;
      data[i + 1] = 119.541 - Y + 0.344 * Cb + 0.714 * Cr;
      data[i + 2] = 481.816 - Y - 1.772 * Cb;
    }
    return data;
  }
  _convertCmykToRgb(data) {
    let c, m, y, k;
    let offset = 0;
    for (let i = 0, length = data.length; i < length; i += 4) {
      c = data[i];
      m = data[i + 1];
      y = data[i + 2];
      k = data[i + 3];
      data[offset++] = 255 + c * (-0.00006747147073602441 * c + 0.0008379262121013727 * m + 0.0002894718188643294 * y + 0.003264231057537806 * k - 1.1185611867203937) + m * (0.000026374107616089405 * m - 0.00008626949158638572 * y - 0.0002748769067499491 * k - 0.02155688794978967) + y * (-0.00003878099212869363 * y - 0.0003267808279485286 * k + 0.0686742238595345) - k * (0.0003361971776183937 * k + 0.7430659151342254);
      data[offset++] = 255 + c * (0.00013596372813588848 * c + 0.000924537132573585 * m + 0.00010567359618683593 * y + 0.0004791864687436512 * k - 0.3109689587515875) + m * (-0.00023545346108370344 * m + 0.0002702845253534714 * y + 0.0020200308977307156 * k - 0.7488052167015494) + y * (0.00006834815998235662 * y + 0.00015168452363460973 * k - 0.09751927774728933) - k * (0.0003189131175883281 * k + 0.7364883807733168);
      data[offset++] = 255 + c * (0.000013598650411385307 * c + 0.00012423956175490851 * m + 0.0004751985097583589 * y - 0.0000036729317476630422 * k - 0.05562186980264034) + m * (0.00016141380598724676 * m + 0.0009692239130725186 * y + 0.0007782692450036253 * k - 0.44015232367526463) + y * (5.068882914068769e-7 * y + 0.0017778369011375071 * k - 0.7591454649749609) - k * (0.0003435319965105553 * k + 0.7063770186160144);
    }
    return data.subarray(0, offset);
  }
  _convertCmykToRgba(data) {
    for (let i = 0, length = data.length; i < length; i += 4) {
      const c = data[i];
      const m = data[i + 1];
      const y = data[i + 2];
      const k = data[i + 3];
      data[i] = 255 + c * (-0.00006747147073602441 * c + 0.0008379262121013727 * m + 0.0002894718188643294 * y + 0.003264231057537806 * k - 1.1185611867203937) + m * (0.000026374107616089405 * m - 0.00008626949158638572 * y - 0.0002748769067499491 * k - 0.02155688794978967) + y * (-0.00003878099212869363 * y - 0.0003267808279485286 * k + 0.0686742238595345) - k * (0.0003361971776183937 * k + 0.7430659151342254);
      data[i + 1] = 255 + c * (0.00013596372813588848 * c + 0.000924537132573585 * m + 0.00010567359618683593 * y + 0.0004791864687436512 * k - 0.3109689587515875) + m * (-0.00023545346108370344 * m + 0.0002702845253534714 * y + 0.0020200308977307156 * k - 0.7488052167015494) + y * (0.00006834815998235662 * y + 0.00015168452363460973 * k - 0.09751927774728933) - k * (0.0003189131175883281 * k + 0.7364883807733168);
      data[i + 2] = 255 + c * (0.000013598650411385307 * c + 0.00012423956175490851 * m + 0.0004751985097583589 * y - 0.0000036729317476630422 * k - 0.05562186980264034) + m * (0.00016141380598724676 * m + 0.0009692239130725186 * y + 0.0007782692450036253 * k - 0.44015232367526463) + y * (5.068882914068769e-7 * y + 0.0017778369011375071 * k - 0.7591454649749609) - k * (0.0003435319965105553 * k + 0.7063770186160144);
      data[i + 3] = 255;
    }
    return data;
  }
  getData({
    width,
    height,
    forceRGBA = false,
    forceRGB = false,
    isSourcePDF = false
  }) {
    if (this.numComponents > 4) {
      throw new JpegError("Unsupported color mode");
    }
    const data = this._getLinearizedBlockData(width, height, isSourcePDF);
    if (this.numComponents === 1 && (forceRGBA || forceRGB)) {
      const len = data.length * (forceRGBA ? 4 : 3);
      const rgbaData = new Uint8ClampedArray(len);
      let offset = 0;
      if (forceRGBA) {
        grayToRGBA(data, new Uint32Array(rgbaData.buffer));
      } else {
        for (const grayColor of data) {
          rgbaData[offset++] = grayColor;
          rgbaData[offset++] = grayColor;
          rgbaData[offset++] = grayColor;
        }
      }
      return rgbaData;
    } else if (this.numComponents === 3 && this._isColorConversionNeeded) {
      if (forceRGBA) {
        const rgbaData = new Uint8ClampedArray(data.length / 3 * 4);
        return this._convertYccToRgba(data, rgbaData);
      }
      return this._convertYccToRgb(data);
    } else if (this.numComponents === 4) {
      if (this._isColorConversionNeeded) {
        if (forceRGBA) {
          return this._convertYcckToRgba(data);
        }
        if (forceRGB) {
          return this._convertYcckToRgb(data);
        }
        return this._convertYcckToCmyk(data);
      } else if (forceRGBA) {
        return this._convertCmykToRgba(data);
      } else if (forceRGB) {
        return this._convertCmykToRgb(data);
      }
    }
    return data;
  }
}

;// CONCATENATED MODULE: ./external/openjpeg/openjpeg.js
var OpenJPEG = (() => {
  var _scriptName = typeof document != 'undefined' ? document.currentScript?.src : undefined;
  return function (moduleArg = {}) {
    var moduleRtn;
    var Module = Object.assign({}, moduleArg);
    var readyPromiseResolve, readyPromiseReject;
    var readyPromise = new Promise((resolve, reject) => {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });
    var ENVIRONMENT_IS_WEB = true;
    var ENVIRONMENT_IS_WORKER = false;
    Module.decode = function (bytes, ignoreColorSpace) {
      const size = bytes.length;
      const ptr = Module._malloc(size);
      Module.HEAPU8.set(bytes, ptr);
      const ret = Module._jp2_decode(ptr, size, ignoreColorSpace ? 1 : 0);
      Module._free(ptr);
      if (ret) {
        const {
          errorMessages: errorMessages
        } = Module;
        if (errorMessages) {
          delete Module.errorMessages;
          return errorMessages;
        }
        return "Unknown error";
      }
      const {
        imageData: imageData
      } = Module;
      Module.imageData = null;
      return imageData;
    };
    var moduleOverrides = Object.assign({}, Module);
    var arguments_ = [];
    var thisProgram = "./this.program";
    var quit_ = (status, toThrow) => {
      throw toThrow;
    };
    var scriptDirectory = "";
    var read_, readAsync, readBinary;
    if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (typeof document != "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptName) {
        scriptDirectory = _scriptName;
      }
      if (scriptDirectory.startsWith("blob:")) {
        scriptDirectory = "";
      } else {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
      }
      read_ = url => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.send(null);
        return xhr.responseText;
      };
      if (ENVIRONMENT_IS_WORKER) {
        readBinary = url => {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.responseType = "arraybuffer";
          xhr.send(null);
          return new Uint8Array(xhr.response);
        };
      }
      readAsync = (url, onload, onerror) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";
        xhr.onload = () => {
          if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
            onload(xhr.response);
            return;
          }
          onerror();
        };
        xhr.onerror = onerror;
        xhr.send(null);
      };
    } else {}
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.error.bind(console);
    Object.assign(Module, moduleOverrides);
    moduleOverrides = null;
    if (Module["arguments"]) arguments_ = Module["arguments"];
    if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
    if (Module["quit"]) quit_ = Module["quit"];
    var wasmBinary;
    if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
    function intArrayFromBase64(s) {
      var decoded = atob(s);
      var bytes = new Uint8Array(decoded.length);
      for (var i = 0; i < decoded.length; ++i) {
        bytes[i] = decoded.charCodeAt(i);
      }
      return bytes;
    }
    function tryParseAsDataURI(filename) {
      if (!isDataURI(filename)) {
        return;
      }
      return intArrayFromBase64(filename.slice(dataURIPrefix.length));
    }
    var wasmMemory;
    var ABORT = false;
    var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateMemoryViews() {
      var b = wasmMemory.buffer;
      Module["HEAP8"] = HEAP8 = new Int8Array(b);
      Module["HEAP16"] = HEAP16 = new Int16Array(b);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
      Module["HEAP32"] = HEAP32 = new Int32Array(b);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
    }
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      runtimeInitialized = true;
      callRuntimeCallbacks(__ATINIT__);
    }
    function postRun() {
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnInit(cb) {
      __ATINIT__.unshift(cb);
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;
    function addRunDependency(id) {
      runDependencies++;
      Module["monitorRunDependencies"]?.(runDependencies);
    }
    function removeRunDependency(id) {
      runDependencies--;
      Module["monitorRunDependencies"]?.(runDependencies);
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    var dataURIPrefix = "data:application/octet-stream;base64,";
    var isDataURI = filename => filename.startsWith(dataURIPrefix);
    function findWasmBinary() {
      var f = "data:application/octet-stream;base64,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dEGwnQFqKAIAIQICfiAAKQMIIg5CAFMEQEEMIAFBAWogAUELThshBCADQQFrIQNBfyACdEF/c0EBdCEBQgEMAQsgAUEBa0EAIAFBAUobIQQgDkE/IAJrrYinQX8gAnRBf3NxQQF0QQFyIQEgAyACQQFqIgJrIQMgAq0LIQ8gACADNgIQIAAgBDYCHCAAIA4gD4Y3AwggACAAKQMoQv//////QIMgAa1CI4aENwMoQQYhBSADQQZIDQAgACgCHCIBQQJ0QbCdAWooAgAhAgJ+IAApAwgiDkIAUwRAQQwgAUEBaiABQQtOGyEEIANBAWshA0F/IAJ0QX9zQQF0IQFCAQwBCyABQQFrQQAgAUEBShshBCAOQT8gAmutiKdBfyACdEF/c3FBAXRBAXIhASADIAJBAWoiAmshAyACrQshDyAAIAM2AhAgACAENgIcIAAgDiAPhjcDCCAAIAApAyhC////////QIMgAa1CKoaENwMoQQchBSADQQZIDQAgACgCHCIBQQJ0QbCdAWooAgAhAgJ+IAApAwgiDkIAUwRAQQwgAUEBaiABQQtOGyEEIANBAWshA0F/IAJ0QX9zQQF0IQFCAQwBCyABQQFrQQAgAUEBShshBCAOQT8gAmutiKdBfyACdEF/c3FBAXRBAXIhASADIAJBAWoiAmshAyACrQshDyAAIAM2AhAgACAENgIcIAAgDiAPhjcDCCAAIAApAyhC/////////0CDIAGtQjGGhDcDKEEIIQULIAAgBUEBazYCICAAIAApAygiDkIHiDcDKCAOp0H/AHELIgEBfyAABEAgACgCDCIBBEAgARAJIABBADYCDAsgABAJCwuFAQIFfwF+AkAgAEKAgICAEFQEQCAAIQcMAQsDQCABQQFrIgEgAEIKgCIHQvYBfiAAfKdBMHI6AAAgAEL/////nwFWIQUgByEAIAUNAAsLIAenIgIEQANAIAFBAWsiASACQQpuIgNB9gFsIAJqQTByOgAAIAJBCUshBiADIQIgBg0ACwsgAQv54gEEen8Gewh+AX0jAEEQayJOJAACQCAALQAIQYABcUUNACAAKALMASABRw0AIAAoApwBIAFBjCxsaiJPKALcKyIVRQRAIE8QKQwBCyAAKALIARogACgC0AEhGSAAKAJMIgdFBEAgACgCSCEHCyAHKAIAIQYgBygCBCELIAco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AAACAAAA/a4BQQL9rAH9sQH9CwIAIAEiBkEBaiIBIA9HDQALIA8hBwsgByAbTg0AA0AgB0EDdCEBIAcgLEghBgJAIAdBAEwEQCA2KAIAIQogB0EATgRAIBQgAUECdCIBaiIyIDIoAgAgCiABIDZqIEUgBhsoAgBqQQJqQQJ1azYCACABICRqIgogCigCACAgKAIAIAEgIGogPCAGGygCAGpBAmpBAnVrNgIAIAEgKmoiCiAKKAIAIB8oAgAgASAfaiA6IAYbKAIAakECakECdWs2AgAgQygCACABIENqICYgBhsoAgBqQQJqIQYgASApaiEBDAILIBQgAUECdCIBaiIGIAYoAgAgCkEBdEECakECdWs2AgAgASAkaiIGIAYoAgAgFCgCFEEBdEECakECdWs2AgAgASAqaiIGIAYoAgAgFCgCGEEBdEECakECdWs2AgAgASApaiEBIBQoAhxBAXRBAmohBgwBCyAUIAcgLCAGG0EDdEEEa0ECdCIKaigCACEyIAZFBEAgFCABQQJ0IgFqIgYgBigCACAyIEUoAgBqQQJqQQJ1azYCACABICRqIgYgBigCACAKICRqKAIAIDwoAgBqQQJqQQJ1azYCACABICpqIgYgBigCACAKICpqKAIAIDooAgBqQQJqQQJ1azYCACABIClqIQEgCiApaigCACAmKAIAakECaiEGDAELIBQgAUECdCIBaiIGIAYoAgAgMiAGKAIQakECakECdWs2AgAgASAkaiIGIAYoAgAgCiAkaigCACAGKAIQakECakECdWs2AgAgASAqaiIGIAYoAgAgCiAqaigCACAGKAIQakECakECdWs2AgAgCiApaigCACABIClqIgEoAhBqQQJqIQYLIAEgASgCACAGQQJ1azYCACAHQQFqIgcgG0cNAAsLIA4gHE4NACAMIA4iASIHSgRAA0AgFCABQQV0aiIHIAf9AAIgIAf9AAIA/a4BQQH9rAEgB/0AAhD9rgH9CwIQIAFBAWoiASAMRw0ACyAMIQcLIAcgHE4NAANAIEMgB0EDdCIBQQJ0aiIyAn8gB0EASARAIBQoAgAhBiAHQX9HBEAgNiABQQJ0IgFqIgogCigCACAGajYCACABICBqIgYgBigCACAkKAIAajYCACABIB9qIgEgASgCACAqKAIAajYCACApKAIADAILIDYgAUECdCIB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LQAAQYD+A3I2AgwLIABBADYCEEEBCwtJAQF/AkBBAUEsEAwiAQRAIAFBADYCEAJAIABBAEwEQCABQQFBCBAMIgA2AiQgAEUNAQwDCyABQQA2AgwLIAEQCQtBACEBCyABC34CAX8BfiAAvSIDQjSIp0H/D3EiAkH/D0cEfCACRQRAIAEgAEQAAAAAAAAAAGEEf0EABSAARAAAAAAAAPBDoiABEF8hACABKAIAQUBqCzYCACAADwsgASACQf4HazYCACADQv////////+HgH+DQoCAgICAgIDwP4S/BSAACwuRAgAgAEUEQEEADwsCfwJAIAFB/wBNDQACQEGUzwEoAgAoAgBFBEAgAUGAf3FBgL8DRg0CDAELIAFB/w9NBEAgACABQT9xQYABcjoAASAAIAFBBnZBwAFyOgAAQQIMAwsgAUGAQHFBgMADRyABQYCwA09xRQRAIAAgAUE/cUGAAXI6AAIgACABQQx2QeABcjoAACAAIAFBBnZBP3FBgAFyOgABQQMMAwsgAUGAgARrQf//P00EQCAAIAFBP3FBgAFyOgADIAAgAUESdkHwAXI6AAAgACABQQZ2QT9xQYABcjoAAiAAIAFBDHZBP3FBgAFyOgABQQQMAwsLQZTGAUEZNgIAQX8MAQsgACABOgAAQQELC7wCAAJAAkACQAJAAkACQAJAAkACQAJAAkAgAUEJaw4SAAgJCggJAQIDBAoJCgoICQUGBwsgAiACKAIAIgFBBGo2AgAgACABKAIANgIADwsgAiACKAIAIgFBBGo2AgAgACABMgEANwMADwsgAiACKAIAIgFBBGo2AgAgACABMwEANwMADwsgAiACKAIAIgFBBGo2AgAgACABMAAANwMADwsgAiACKAIAIgFBBGo2AgAgACABMQAANwMADwsgAiACKAIAQQdqQXhxIgFBCGo2AgAgACABKwMAOQMADwsgACACIAMRAwALDwsgAiACKAIAIgFBBGo2AgAgACABNAIANwMADwsgAiACKAIAIgFBBGo2AgAgACABNQIANwMADwsgAiACKAIAQQdqQXhxIgFBCGo2AgAgACABKQMANwMAC3MBBn8gACgCACIDLAAAQTBrIgFBCUsEQEEADwsDQEF/IQQgAkHMmbPmAE0EQEF/IAEgAkEKbCIFaiABIAVB/////wdzSxshBAsgACADQQFqIgU2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VP0gAiACKgJ0/SAD/QsCACABIAMgF2pBAnRqIAL9CQIYIAIqAjj9IAEgAioCWP0gAiACKgJ4/SAD/QsCACABIAMgFmpBAnRqIAL9CQIcIAIqAjz9IAEgAioCXP0gAiACKgJ8/SAD/QsCACADQQRqIgMgBEcNAAsgBCALRg0BCwNAIAEgBCAbakECdGogBiAEQQV0aiIDKgIQOAIAIAEgBCAYakECdGogAyoCFDgCACABIAQgF2pBAnRqIAMqAhg4AgAgASAEIBZqQQJ0aiADKgIcOAIAIARBAWoiBCALRw0ACwsgHUEBaiEdIAEgJEECdGohASAcQQhqIhwgACgCLE0NAAsLIAAoAgAQCSAAEAkLcwECfyAAKAIcIgFBCGoiAyAAKAIgIgJNBEADQCAAIAAoAhggAUECdGogACgCFEEIECsgAyIBQQhqIgMgACgCICICTQ0ACwsgASACSQRAIAAgACgCGCABQQJ0aiAAKAIUIAIgAWsQKwsgACgCABAJIAAQCQtEACAAKAIcIgEgACgCIEkEQANAIAAgACgCGCAAKAIUIAFsQQJ0ahBWIAFBAWoiASAAKAIgSQ0ACwsgACgCABAJIAAQCQuoAQEFfyAAKAJUIgMoAgAhBSADKAIEIgQgACgCFCAAKAIcIgdrIgYgBCAGSRsiBgRAIAUgByAGEAsaIAMgAygCACAGaiIFNgIAIAMgAygCBCAGayIENgIECyAEIAIgAiAESxsiBARAIAUgASAEEAsaIAMgAygCACAEaiIFNgIAIAMgAygCBCAEazYCBAsgBUEAOgAAIAAgACgCLCIBNgIcIAAgATYCFCACC54FAgZ+BH8gASABKAIAQQdqQXhxIgFBEGo2AgAgACELIAEpAwAhAyABKQMIIQcjAEEgayIIJAAgB0L///////8/gyEEAn4gB0IwiEL//wGDIgWnIgpBgfgAa0H9D00EQCAEQgSGIANCPIiEIQIgCkGA+ABrrSEFAkAgA0L//////////w+DIgNCgYCAgICAgIAIWgRAIAJCAXwhAgwBCyADQoCAgICAgICACFINACACQgGDIAJ8IQILQgAgAiACQv////////8HViIAGyECIACtIAV8DAELAkAgAyAEhFANACAFQv//AVINACAEQgSGIANCPIiEQoCAgICAgIAEhCECQv8PDAELQv8PIApB/ocB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JWQpIAAlc30KAAkJIH0KAFtERVZdIER1bXAgYW4gaW1hZ2VfY29tcF9oZWFkZXIgc3RydWN0IHsKAFtERVZdIER1bXAgYW4gaW1hZ2VfaGVhZGVyIHN0cnVjdCB7CgBJbWFnZSBpbmZvIHsKAAkgZGVmYXVsdCB0aWxlIHsKACVzCSBjb21wb25lbnQgJWQgewoACQkgY29tcCAlZCB7CgAJIFRpbGUgaW5kZXg6IHsKAAkgTWFya2VyIGxpc3Q6IHsKAENvZGVzdHJlYW0gaW5kZXggZnJvbSBtYWluIGhlYWRlcjogewoAQ29kZXN0cmVhbSBpbmZvIGZyb20gbWFpbiBoZWFkZXI6IHsKAFN0cmVhbSBlcnJvciB3aGlsZSByZWFkaW5nIEpQMiBIZWFkZXIgYm94CgBGb3VuZCBhIG1pc3BsYWNlZCAnJWMlYyVjJWMnIGJveCBvdXRzaWRlIGpwMmggYm94CgBNYWxmb3JtZWQgSlAyIGZpbGUgZm9ybWF0OiBmaXJzdCBib3ggbXVzdCBiZSBKUEVHIDIwMDAgc2lnbmF0dXJlIGJveAoATWFsZm9ybWVkIEpQMiBmaWxlIGZvcm1hdDogc2Vjb25kIGJveCBtdXN0IGJlIGZpbGUgdHlwZSBib3gKAE5vdCBlbm91Z2ggbWVtb3J5IHRvIGhhbmRsZSBqcGVnMjAwMCBib3gKAE5vdCBlbm91Z2ggbWVtb3J5IHdpdGggRlRZUCBCb3gKAEEgbWFya2VyIElEIHdhcyBleHBlY3RlZCAoMHhmZi0tKSBpbnN0ZWFkIG9mICUuOHgKAAkJIG1jdD0leAoACQkJIGNibGtzdHk9JSN4CgAJCQkgY3N0eT0lI3gKAAkJIHByZz0lI3gKAEludGVnZXIgb3ZlcmZsb3cKAAkgdGR4PSV1LCB0ZHk9JXUKAAkgdHc9JXUsIHRoPSV1CgAJIHR4MD0ldSwgdHkwPSV1CgBJbnZhbGlkIGNvbXBvbmVudCBpbmRleDogJXUKAFN0cmVhbSB0b28gc2hvcnQKAE1hcmtlciBoYW5kbGVyIGZ1bmN0aW9uIGZhaWxlZCB0byByZWFkIHRoZSBtYXJrZXIgc2VnbWVudAoATm90IGVub3VnaCBtZW1vcnkgZm9yIGN1cnJlbnQgcHJlY2luY3QgY29kZWJsb2NrIGVsZW1lbnQKAEVycm9yIHJlYWRpbmcgU1BDb2QgU1BDb2MgZWxlbWVudAoARXJyb3IgcmVhZGluZyBTUWNkIG9yIFNRY2MgZWxlbWVudAoAQSBCUENDIGhlYWRlciBib3ggaXMgYXZhaWxhYmxlIGFsdGhvdWdoIEJQQyBnaXZlbiBieSB0aGUgSUhEUiBib3ggKCVkKSBpbmRpY2F0ZSBjb21wb25lbnRzIGJpdCBkZXB0aCBpcyBjb25zdGFudAoARXJyb3Igd2l0aCBTSVogbWFya2VyOiBpbGxlZ2FsIHRpbGUgb2Zmc2V0CgBJbnZhbGlkIHByZWNpbmN0CgBOb3QgZW5vdWdoIG1lbW9yeSB0byBoYW5kbGUgYmFuZCBwcmVjaW50cwoARmFpbGVkIHRvIGRlY29kZSBhbGwgdXNlZCBjb21wb25lbnRzCgBTaXplIG9mIGNvZGUgYmxvY2sgZGF0YSBleGNlZWRzIHN5c3RlbSBsaW1pdHMKAFNpemUgb2YgdGlsZSBkYXRhIGV4Y2VlZHMgc3lzdGVtIGxpbWl0cwoAQ2Fubm90IHRha2UgaW4gY2hhcmdlIG11bHRpcGxlIE1DVCBtYXJrZXJzCgBDb3JydXB0ZWQgUFBNIG1hcmtlcnMKAE5vdCBlbm91Z2ggbWVtb3J5IGZvciB0aWxlIHJlc29sdXRpb25zCgBDYW5ub3QgdGFrZSBpbiBjaGFyZ2UgbXVsdGlwbGUgY29sbGVjdGlvbnMKAEludmFsaWQgUENMUiBib3guIFJlcG9ydHMgMCBwYWxldHRlIGNvbHVtbnMKAFdlIGRvIG5vdCBzdXBwb3J0IFJPSSBpbiBkZWNvZGluZyBIVCBjb2RlYmxvY2tzCgBDYW5ub3QgaGFuZGxlIGJveCBvZiB1bmRlZmluZWQgc2l6ZXMKAENhbm5vdCB0YWtlIGluIGNoYXJnZSBjb2xsZWN0aW9ucyB3aXRob3V0IHNhbWUgbnVtYmVyIG9mIGluZGl4ZXMKAEludmFsaWQgdGlsZWMtPndpbl94eHggdmFsdWVzCgBDYW5ub3QgaGFuZGxlIGJveCBvZiBsZXNzIHRoYW4gOCBieXRlcwoAQ2Fubm90IGhhbmRsZSBYTCBib3ggb2YgbGVzcyB0aGFuIDE2IGJ5dGVzCgBDb21wb25lbnQgaW5kZXggJXUgdXNlZCBzZXZlcmFsIHRpbWVzCgBJbnZhbGlkIFBDTFIgYm94LiBSZXBvcnRzICVkIGVudHJpZXMKAE5vdCBlbm91Z2ggbWVtb3J5IHRvIGNyZWF0ZSBUYWctdHJlZSBub2RlcwoAQ2Fubm90IHRha2UgaW4gY2hhcmdlIG1jdCBkYXRhIHdpdGhpbiBtdWx0aXBsZSBNQ1QgcmVjb3JkcwoAQ2Fubm90IGRlY29kZSB0aWxlLCBtZW1vcnkgZXJyb3IKAG9wal9qMmtfYXBwbHlfbmJfdGlsZV9wYXJ0c19jb3JyZWN0aW9uIGVycm9yCgBQcm9ibGVtIHdpdGggc2tpcHBpbmcgSlBFRzIwMDAgYm94LCBzdHJlYW0gZXJyb3IKAFByb2JsZW0gd2l0aCByZWFkaW5nIEpQRUcyMDAwIGJveCwgc3RyZWFtIGVycm9yCgBVbmtub3duIG1hcmtlcgoATm90IGVub3VnaCBtZW1vcnkgdG8gYWRkIHRsIG1hcmtlcgoATm90IGVub3VnaCBtZW1vcnkgdG8gYWRkIG1oIG1hcmtlcgoATm90IGVub3VnaCBtZW1vcnkgdG8gdGFrZSBpbiBjaGFyZ2UgU0laIG1hcmtlcgoARXJyb3IgcmVhZGluZyBQUFQgbWFya2VyCgBOb3QgZW5vdWdoIG1lbW9yeSB0byByZWFkIFBQVCBtYXJrZXIKAEVycm9yIHJlYWRpbmcgU09UIG1hcmtlcgoARXJyb3IgcmVhZGluZyBQTFQgbWFya2VyCgBFcnJvciByZWFkaW5nIE1DVCBtYXJrZXIKAE5vdCBlbm91Z2ggbWVtb3J5IHRvIHJlYWQgTUNUIG1hcmtlcgoATm90IGVub3VnaCBzcGFjZSBmb3IgZXhwZWN0ZWQgU09QIG1hcmtlcgoARXhwZWN0ZWQgU09QIG1hcmtlcgoARXJyb3IgcmVhZGluZyBNQ08gbWFya2VyCgBFcnJvciByZWFkaW5nIFJHTiBtYXJrZXIKAEVycm9yIHJlYWRpbmcgUFBNIG1hcmtlcgoATm90IGVub3VnaCBtZW1vcnkgdG8gcmVhZCBQUE0gbWFya2VyCgBFcnJvciByZWFkaW5nIFRMTSBtYXJrZXIKAEVycm9yIHJlYWRpbmcgUExNIG1hcmtlcgoATm90IGVub3VnaCBzcGFjZSBmb3IgZXhwZWN0ZWQgRVBIIG1hcmtlcgoARXhwZWN0ZWQgRVBIIG1hcmtlcgoARXJyb3IgcmVhZGluZyBDUkcgbWFya2VyCgBVbmtub3duIHByb2dyZXNzaW9uIG9yZGVyIGluIENPRCBtYXJrZXIKAFVua25vd24gU2NvZCB2YWx1ZSBpbiBDT0QgbWFya2VyCgBFcnJvciByZWFkaW5nIENPRCBtYXJrZXIKAEVycm9yIHJlYWRpbmcgUUNEIG1hcmtlcgoAQ3Jyb3IgcmVhZGluZyBDQkQgbWFya2VyCgBFcnJvciByZWFkaW5nIFBPQyBtYXJrZXIKAEVycm9yIHJlYWRpbmcgQ09DIG1hcmtlcgoARXJyb3IgcmVhZGluZyBRQ0MgbWFya2VyCgBFcnJvciByZWFkaW5nIE1DQyBtYXJrZXIKAE5vdCBlbm91Z2ggbWVtb3J5IHRvIHJlYWQgTUNDIG1hcmtlcgoAcmVxdWlyZWQgU0laIG1hcmtlciBub3QgZm91bmQgaW4gbWFpbiBoZWFkZXIKAHJlcXVpcmVkIENPRCBtYXJrZXIgbm90IGZvdW5kIGluIG1haW4gaGVhZGVyCgByZXF1aXJlZCBRQ0QgbWFya2VyIG5vdCBmb3VuZCBpbiBtYWluIGhlYWRlcgoATm90IGVub3VnaCBtZW1vcnkgdG8gaGFuZGxlIGpwZWcyMDAwIGZpbGUgaGVhZGVyCgBOb3QgZW5vdWdoIG1lbW9yeSB0byByZWFkIGhlYWRlcgoARXJyb3Igd2l0aCBKUCBTaWduYXR1cmUgOiBiYWQgbWFnaWMgbnVtYmVyCgBJbiBTT1QgbWFya2VyLCBUUFNvdCAoJWQpIGlzIG5vdCB2YWxpZCByZWdhcmRzIHRvIHRoZSBjdXJyZW50IG51bWJlciBvZiB0aWxlLXBhcnQgKCVkKSwgZ2l2aW5nIHVwCgBJbiBTT1QgbWFya2VyLCBUUFNvdCAoJWQpIGlzIG5vdCB2YWxpZCByZWdhcmRzIHRvIHRoZSBwcmV2aW91cyBudW1iZXIgb2YgdGlsZS1wYXJ0ICglZCksIGdpdmluZyB1cAoASW4gU09UIG1hcmtlciwgVFBTb3QgKCVkKSBpcyBub3QgdmFsaWQgcmVnYXJkcyB0byB0aGUgY3VycmVudCBudW1iZXIgb2YgdGlsZS1wYXJ0IChoZWFkZXIpICglZCksIGdpdmluZyB1cAoAdGlsZXMgcmVxdWlyZSBhdCBsZWFzdCBvbmUgcmVzb2x1dGlvbgoATWFya2VyIGlzIG5vdCBjb21wbGlhbnQgd2l0aCBpdHMgcG9zaXRpb24KAFByb2JsZW0gd2l0aCBzZWVrIGZ1bmN0aW9uCgBFcnJvciByZWFkaW5nIFNQQ29kIFNQQ29jIGVsZW1lbnQsIEludmFsaWQgY2Jsa3cvY2Jsa2ggY29tYmluYXRpb24KAEludmFsaWQgbXVsdGlwbGUgY29tcG9uZW50IHRyYW5zZm9ybWF0aW9uCgBDYW5ub3QgdGFrZSBpbiBjaGFyZ2UgY29sbGVjdGlvbnMgb3RoZXIgdGhhbiBhcnJheSBkZWNvcnJlbGF0aW9uCgBUb28gbGFyZ2UgdmFsdWUgZm9yIE5wcG0KAE5vdCBlbm91Z2ggYnl0ZXMgdG8gcmVhZCBOcHBtCgBiYWQgcGxhY2VkIGpwZWcgY29kZXN0cmVhbQoACSBNYWluIGhlYWRlciBzdGFydCBwb3NpdGlvbj0lbGxpCgkgTWFpbiBoZWFkZXIgZW5kIHBvc2l0aW9uPSVsbGkKAE1hcmtlciBzaXplIGluY29uc2lzdGVudCB3aXRoIHN0cmVhbSBsZW5ndGgKAFRpbGUgcGFydCBsZW5ndGggc2l6ZSBpbmNvbnNpc3RlbnQgd2l0aCBzdHJlYW0gbGVuZ3RoCgBDYW5ub3QgdGFrZSBpbiBjaGFyZ2UgbXVsdGlwbGUgZGF0YSBzcGFubmluZwoAV3JvbmcgZmxhZwoARXJyb3Igd2l0aCBGVFlQIHNpZ25hdHVyZSBCb3ggc2l6ZQoARXJyb3Igd2l0aCBKUCBzaWduYXR1cmUgQm94IHNpemUKAEludmFsaWQgcHJlY2luY3Qgc2l6ZQoASW5jb25zaXN0ZW50IG1hcmtlciBzaXplCgBJbnZhbGlkIG1hcmtlciBzaXplCgBFcnJvciB3aXRoIFNJWiBtYXJrZXIgc2l6ZQoATm90IGVub3VnaCBtZW1vcnkgdG8gYWRkIGEgbmV3IHZhbGlkYXRpb24gcHJvY2VkdXJlCgBOb3QgZW5vdWdoIG1lbW9yeSB0byBkZWNvZGUgdGlsZQoARmFpbGVkIHRvIGRlY29kZSB0aGUgY29kZXN0cmVhbSBpbiB0aGUgSlAyIGZpbGUKAENhbm5vdCB0YWtlIGluIGNoYXJnZSBjb2xsZWN0aW9ucyB3aXRoIGluZGl4IHNodWZmbGUKAENhbm5vdCBhbGxvY2F0ZSBUaWVyIDEgaGFuZGxlCgBObyBkZWNvZGVkIGFyZWEgcGFyYW1ldGVycywgc2V0IHRoZSBkZWNvZGVkIGFyZWEgdG8gdGhlIHdob2xlIGltYWdlCgBOb3QgZW5vdWdoIG1lbW9yeSB0byBjcmVhdGUgVGFnLXRyZWUKAE5vdCBlbm91Z2ggbWVtb3J5IHRvIHJlaW5pdGlhbGl6ZSB0aGUgdGFnIHRyZWUKAEVycm9yIHJlYWRpbmcgU1BDb2QgU1BDb2MgZWxlbWVudCwgSW52YWxpZCB0cmFuc2Zvcm1hdGlvbiBmb3VuZAoARXJyb3IgcmVhZGluZyBTUENvZCBTUENvYyBlbGVtZW50LiBVbnN1cHBvcnRlZCBNaXhlZCBIVCBjb2RlLWJsb2NrIHN0eWxlIGZvdW5kCgBUaWxlIFkgY29vcmRpbmF0ZXMgYXJlIG5vdCBzdXBwb3J0ZWQKAFRpbGUgWCBjb29yZGluYXRlcyBhcmUgbm90IHN1cHBvcnRlZAoASW1hZ2UgY29vcmRpbmF0ZXMgYWJvdmUgSU5UX01BWCBhcmUgbm90IHN1cHBvcnRlZAoASlBFRzIwMDAgSGVhZGVyIGJveCBub3QgcmVhZCB5ZXQsICclYyVjJWMlYycgYm94IHdpbGwgYmUgaWdub3JlZAoAb3BqX2oya19tZXJnZV9wcHQoKSBoYXMgYWxyZWFkeSBiZWVuIGNhbGxlZAoATm90IGVub3VnaCBtZW1vcnkgdG8gcmVhZCBTT1QgbWFya2VyLiBUaWxlIGluZGV4IGFsbG9jYXRpb24gZmFpbGVkCgBJZ25vcmluZyBpaGRyIGJveC4gRmlyc3QgaWhkciBib3ggYWxyZWFkeSByZWFkCgBacHB0ICV1IGFscmVhZHkgcmVhZAoAWnBwbSAldSBhbHJlYWR5IHJlYWQKAFBURVJNIGNoZWNrIGZhaWx1cmU6ICVkIHN5bnRoZXRpemVkIDB4RkYgbWFya2VycyByZWFkCgAJCQkgY2Jsa3c9Ml4lZAoACQkJIGNibGtoPTJeJWQKAAkJCSBxbnRzdHk9JWQKACVzIGR4PSVkLCBkeT0lZAoACQkJIHJvaXNoaWZ0PSVkCgAJCQkgbnVtZ2JpdHM9JWQKAAkJIG51bWxheWVycz0lZAoAJXMgbnVtY29tcHM9JWQKAG9wal9qcDJfYXBwbHlfY2RlZjogYWNuPSVkLCBudW1jb21wcz0lZAoAb3BqX2pwMl9hcHBseV9jZGVmOiBjbj0lZCwgbnVtY29tcHM9JWQKAAkJCSBudW1yZXNvbHV0aW9ucz0lZAoACQkgdHlwZT0lI3gsIHBvcz0lbGxpLCBsZW49JWQKACVzIHNnbmQ9JWQKAAkJCSBxbWZiaWQ9JWQKACVzIHByZWM9JWQKAAkJIG5iIG9mIHRpbGUtcGFydCBpbiB0aWxlIFslZF09JWQKACVzIHgxPSVkLCB5MT0lZAoAJXMgeDA9JWQsIHkwPSVkCgBGYWlsZWQgdG8gZGVjb2RlIHRpbGUgJWQvJWQKAFNldHRpbmcgZGVjb2RpbmcgYXJlYSB0byAlZCwlZCwlZCwlZAoARmFpbGVkIHRvIGRlY29kZSBjb21wb25lbnQgJWQKAEludmFsaWQgdmFsdWUgZm9yIG51bXJlc29sdXRpb25zIDogJWQsIG1heCB2YWx1ZSBpcyBzZXQgaW4gb3BlbmpwZWcuaCBhdCAlZAoASW52YWxpZCBjb21wb25lbnQgbnVtYmVyOiAlZCwgcmVnYXJkaW5nIHRoZSBudW1iZXIgb2YgY29tcG9uZW50cyAlZAoAVG9vIG1hbnkgUE9DcyAlZAoASW52YWxpZCB0aWxlIG51bWJlciAlZAoASW52YWxpZCB0aWxlIHBhcnQgaW5kZXggZm9yIHRpbGUgbnVtYmVyICVkLiBHb3QgJWQsIGV4cGVjdGVkICVkCgBFcnJvciB3aXRoIFNJWiBtYXJrZXI6IG51bWJlciBvZiBjb21wb25lbnQgaXMgaWxsZWdhbCAtPiAlZAoATm90IGVub3VnaCBtZW1vcnkgZm9yIGNpZWxhYgoAQ2Fubm90IGFsbG9jYXRlIGNibGstPmRlY29kZWRfZGF0YQoARmFpbGVkIHRvIG1lcmdlIFBQVCBkYXRhCgBGYWlsZWQgdG8gbWVyZ2UgUFBNIGRhdGEKAEludmFsaWQgbnVtYmVyIG9mIGxheWVycyBpbiBDT0QgbWFya2VyIDogJWQgbm90IGluIHJhbmdlIFsxLTY1NTM1XQoAU3RyZWFtIHRvbyBzaG9ydCwgZXhwZWN0ZWQgU09UCgBVbmFibGUgdG8gc2V0IHQxIGhhbmRsZSBhcyBUTFMKAFN0cmVhbSBkb2VzIG5vdCBlbmQgd2l0aCBFT0MKAENhbm5vdCBoYW5kbGUgYm94IHNpemVzIGhpZ2hlciB0aGFuIDJeMzIKAG9wal9waV9uZXh0X2xyY3AoKTogaW52YWxpZCBjb21wbm8wL2NvbXBubzEKAG9wal9waV9uZXh0X3JsY3AoKTogaW52YWxpZCBjb21wbm8wL2NvbXBubzEKAG9wal9waV9uZXh0X2NwcmwoKTogaW52YWxpZCBjb21wbm8wL2NvbXBubzEKAG9wal9waV9uZXh0X3BjcmwoKTogaW52YWxpZCBjb21wbm8wL2NvbXBubzEKAG9wal9waV9uZXh0X3JwY2woKTogaW52YWxpZCBjb21wbm8wL2NvbXBubzEKAG9wal90MV9kZWNvZGVfY2JsaygpOiB1bnN1cHBvcnRlZCBicG5vX3BsdXNfb25lID0gJWQgPj0gMzEKAEZhaWxlZCB0byBkZWNvZGUgdGlsZSAxLzEKAEluc3VmZmljaWVudCBkYXRhIGZvciBDTUFQIGJveC4KAE5lZWQgdG8gcmVhZCBhIFBDTFIgYm94IGJlZm9yZSB0aGUgQ01BUCBib3guCgBJbnN1ZmZpY2llbnQgZGF0YSBmb3IgQ0RFRiBib3guCgBOdW1iZXIgb2YgY2hhbm5lbCBkZXNjcmlwdGlvbiBpcyBlcXVhbCB0byB6ZXJvIGluIENERUYgYm94LgoAU3RyZWFtIGVycm9yIHdoaWxlIHJlYWRpbmcgSlAyIEhlYWRlciBib3g6IG5vICdpaGRyJyBib3guCgBOb24gY29uZm9ybWFudCBjb2Rlc3RyZWFtIFRQc290PT1UTnNvdC4KAFN0cmVhbSBlcnJvciB3aGlsZSByZWFkaW5nIEpQMiBIZWFkZXIgYm94OiBib3ggbGVuZ3RoIGlzIGluY29uc2lzdGVudC4KAEJveCBsZW5ndGggaXMgaW5jb25zaXN0ZW50LgoAUmVzb2x1dGlvbiBmYWN0b3IgaXMgZ3JlYXRlciB0aGFuIHRoZSBtYXhpbXVtIHJlc29sdXRpb24gaW4gdGhlIGNvbXBvbmVudC4KAENvbXBvbmVudCBtYXBwaW5nIHNlZW1zIHdyb25nLiBUcnlpbmcgdG8gY29ycmVjdC4KAEluY29tcGxldGUgY2hhbm5lbCBkZWZpbml0aW9ucy4KAE1hbGZvcm1lZCBIVCBjb2RlYmxvY2suIEludmFsaWQgY29kZWJsb2NrIGxlbmd0aCB2YWx1ZXMuCgBXZSBkbyBub3Qgc3VwcG9ydCBtb3JlIHRoYW4gMyBjb2RpbmcgcGFzc2VzIGluIGFuIEhUIGNvZGVibG9jazsgVGhpcyBjb2RlYmxvY2tzIGhhcyAlZCBwYXNzZXMuCgBNYWxmb3JtZWQgSFQgY29kZWJsb2NrLiBEZWNvZGluZyB0aGlzIGNvZGVibG9jayBpcyBzdG9wcGVkLiBUaGVyZSBhcmUgJWQgemVybyBiaXRwbGFuZXMgaW4gJWQgYml0cGxhbmVzLgoAQ2Fubm90IHRha2UgaW4gY2hhcmdlIG11bHRpcGxlIHRyYW5zZm9ybWF0aW9uIHN0YWdlcy4KAFVua25vd24gbWFya2VyIGhhcyBiZWVuIGRldGVjdGVkIGFuZCBnZW5lcmF0ZWQgZXJyb3IuCgBDb2RlYyBwcm92aWRlZCB0byB0aGUgb3BqX3NldF9kZWNvZGVkX2NvbXBvbmVudHMgZnVuY3Rpb24gaXMgbm90IGEgZGVjb21wcmVzc29yIGhhbmRsZXIuCgBDb2RlYyBwcm92aWRlZCB0byB0aGUgb3BqX3NldHVwX2RlY29kZXIgZnVuY3Rpb24gaXMgbm90IGEgZGVjb21wcmVzc29yIGhhbmRsZXIuCgBDb2RlYyBwcm92aWRlZCB0byB0aGUgb3BqX3JlYWRfaGVhZGVyIGZ1bmN0aW9uIGlzIG5vdCBhIGRlY29tcHJlc3NvciBoYW5kbGVyLgoAVGlsZXMgZG9uJ3QgYWxsIGhhdmUgdGhlIHNhbWUgZGltZW5zaW9uLiBTa2lwIHRoZSBNQ1Qgc3RlcC4KAE51bWJlciBvZiBjb21wb25lbnRzICglZCkgaXMgaW5jb25zaXN0ZW50IHdpdGggYSBNQ1QuIFNraXAgdGhlIE1DVCBzdGVwLgoASlAyIGJveCB3aGljaCBhcmUgYWZ0ZXIgdGhlIGNvZGVzdHJlYW0gd2lsbCBub3QgYmUgcmVhZCBieSB0aGlzIGZ1bmN0aW9uLgoATWFsZm9ybWVkIEhUIGNvZGVibG9jay4gV2hlbiB0aGUgbnVtYmVyIG9mIHplcm8gcGxhbmVzIGJpdHBsYW5lcyBpcyBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIGJpdHBsYW5lcywgb25seSB0aGUgY2xlYW51cCBwYXNzIG1ha2VzIHNlbnNlLCBidXQgd2UgaGF2ZSAlZCBwYXNzZXMgaW4gdGhpcyBjb2RlYmxvY2suIFRoZXJlZm9yZSwgb25seSB0aGUgY2xlYW51cCBwYXNzIHdpbGwgYmUgZGVjb2RlZC4gVGhpcyBtZXNzYWdlIHdpbGwgbm90IGJlIGRpc3BsYXllZCBhZ2Fpbi4KAEltYWdlIGhhcyBsZXNzIGNvbXBvbmVudHMgdGhhbiBjb2Rlc3RyZWFtLgoATmVlZCB0byBkZWNvZGUgdGhlIG1haW4gaGVhZGVyIGJlZm9yZSBiZWdpbiB0byBkZWNvZGUgdGhlIHJlbWFpbmluZyBjb2Rlc3RyZWFtLgoAUHNvdCB2YWx1ZSBvZiB0aGUgY3VycmVudCB0aWxlLXBhcnQgaXMgZXF1YWwgdG8gemVybywgd2UgYXNzdW1pbmcgaXQgaXMgdGhlIGxhc3QgdGlsZS1wYXJ0IG9mIHRoZSBjb2Rlc3RyZWFtLgoAQSBtYWxmb3JtZWQgY29kZWJsb2NrIHRoYXQgaGFzIG1vcmUgdGhhbiBvbmUgY29kaW5nIHBhc3MsIGJ1dCB6ZXJvIGxlbmd0aCBmb3IgMm5kIGFuZCBwb3RlbnRpYWxseSB0aGUgM3JkIHBhc3MgaW4gYW4gSFQgY29kZWJsb2NrLgoACQkJIHRpbGUtcGFydFslZF06IHN0YXJfcG9zPSVsbGksIGVuZF9oZWFkZXI9JWxsaSwgZW5kX3Bvcz0lbGxpLgoAVGlsZSAldSBoYXMgVFBzb3QgPT0gMCBhbmQgVE5zb3QgPT0gMCwgYnV0IG5vIG90aGVyIHRpbGUtcGFydHMgd2VyZSBmb3VuZC4gRU9DIGlzIGFsc28gbWlzc2luZy4KAENvbXBvbmVudCAlZCBkb2Vzbid0IGhhdmUgYSBtYXBwaW5nLgoAQSBjb25mb3JtaW5nIEpQMiByZWFkZXIgc2hhbGwgaWdub3JlIGFsbCBDb2xvdXIgU3BlY2lmaWNhdGlvbiBib3hlcyBhZnRlciB0aGUgZmlyc3QsIHNvIHdlIGlnbm9yZSB0aGlzIG9uZS4KAFRoZSBzaWduYXR1cmUgYm94IG11c3QgYmUgdGhlIGZpcnN0IGJveCBpbiB0aGUgZmlsZS4KAFRoZSAgYm94IG11c3QgYmUgdGhlIGZpcnN0IGJveCBpbiB0aGUgZmlsZS4KAFRoZSBmdHlwIGJveCBtdXN0IGJlIHRoZSBzZWNvbmQgYm94IGluIHRoZSBmaWxlLgoARmFpbGVkIHRvIGRlY29kZS4KAE1hbGZvcm1lZCBIVCBjb2RlYmxvY2suIEluY29ycmVjdCBNRUwgc2VnbWVudCBzZXF1ZW5jZS4KAENvbXBvbmVudCAlZCBpcyBtYXBwZWQgdHdpY2UuCgBPbmx5IG9uZSBDTUFQIGJveCBpcyBhbGxvd2VkLgoAYXBwbHlfY29sb3JfdHJhbnNmb3JtcyA9IE9QSl9UUlVFIGlzIG5vdCBzdXBwb3J0ZWQuCgBXZSBuZWVkIGFuIGltYWdlIHByZXZpb3VzbHkgY3JlYXRlZC4KAElIRFIgYm94X21pc3NpbmcuIFJlcXVpcmVkLgoASlAySCBib3ggbWlzc2luZy4gUmVxdWlyZWQuCgBOb3Qgc3VyZSBob3cgdGhhdCBoYXBwZW5lZC4KAE1haW4gaGVhZGVyIGhhcyBiZWVuIGNvcnJlY3RseSBkZWNvZGVkLgoAVGlsZSAlZC8lZCBoYXMgYmVlbiBkZWNvZGVkLgoASGVhZGVyIG9mIHRpbGUgJWQgLyAlZCBoYXMgYmVlbiByZWFkLgoARW1wdHkgU09UIG1hcmtlciBkZXRlY3RlZDogUHNvdD0lZC4KAERpcmVjdCB1c2UgYXQgIyVkIGhvd2V2ZXIgcGNvbD0lZC4KAEltcGxlbWVudGF0aW9uIGxpbWl0YXRpb246IGZvciBwYWxldHRlIG1hcHBpbmcsIHBjb2xbJWRdIHNob3VsZCBiZSBlcXVhbCB0byAlZCwgYnV0IGlzIGVxdWFsIHRvICVkLgoASW52YWxpZCBjb21wb25lbnQvcGFsZXR0ZSBpbmRleCBmb3IgZGlyZWN0IG1hcHBpbmcgJWQuCgBJbnZhbGlkIHZhbHVlIGZvciBjbWFwWyVkXS5tdHlwID0gJWQuCgBQc290IHZhbHVlIGlzIG5vdCBjb3JyZWN0IHJlZ2FyZHMgdG8gdGhlIEpQRUcyMDAwIG5vcm06ICVkLgoATWFsZm9ybWVkIEhUIGNvZGVibG9jay4gVkxDIGNvZGUgcHJvZHVjZXMgc2lnbmlmaWNhbnQgc2FtcGxlcyBvdXRzaWRlIHRoZSBjb2RlYmxvY2sgYXJlYS4KAFVuZXhwZWN0ZWQgT09NLgoAMzIgYml0cyBhcmUgbm90IGVub3VnaCB0byBkZWNvZGUgdGhpcyBjb2RlYmxvY2ssIHNpbmNlIHRoZSBudW1iZXIgb2YgYml0cGxhbmUsICVkLCBpcyBsYXJnZXIgdGhhbiAzMC4KAEJvdHRvbSBwb3NpdGlvbiBvZiB0aGUgZGVjb2RlZCBhcmVhIChyZWdpb25feTE9JWQpIHNob3VsZCBiZSA+IDAuCgBSaWdodCBwb3NpdGlvbiBvZiB0aGUgZGVjb2RlZCBhcmVhIChyZWdpb25feDE9JWQpIHNob3VsZCBiZSA+IDAuCgBVcCBwb3NpdGlvbiBvZiB0aGUgZGVjb2RlZCBhcmVhIChyZWdpb25feTA9JWQpIHNob3VsZCBiZSA+PSAwLgoATGVmdCBwb3NpdGlvbiBvZiB0aGUgZGVjb2RlZCBhcmVhIChyZWdpb25feDA9JWQpIHNob3VsZCBiZSA+PSAwLgoARXJyb3IgcmVhZGluZyBQUFQgbWFya2VyOiBwYWNrZXQgaGVhZGVyIGhhdmUgYmVlbiBwcmV2aW91c2x5IGZvdW5kIGluIHRoZSBtYWluIGhlYWRlciAoUFBNIG1hcmtlcikuCgBTdGFydCB0byByZWFkIGoyayBtYWluIGhlYWRlciAoJWxsZCkuCgBCb3R0b20gcG9zaXRpb24gb2YgdGhlIGRlY29kZWQgYXJlYSAocmVnaW9uX3kxPSVkKSBpcyBvdXRzaWRlIHRoZSBpbWFnZSBhcmVhIChZc2l6PSVkKS4KAFVwIHBvc2l0aW9uIG9mIHRoZSBkZWNvZGVkIGFyZWEgKHJlZ2lvbl95MD0lZCkgaXMgb3V0c2lkZSB0aGUgaW1hZ2UgYXJlYSAoWXNpej0lZCkuCgBSaWdodCBwb3NpdGlvbiBvZiB0aGUgZGVjb2RlZCBhcmVhIChyZWdpb25feDE9JWQpIGlzIG91dHNpZGUgdGhlIGltYWdlIGFyZWEgKFhzaXo9JWQpLgoATGVmdCBwb3NpdGlvbiBvZiB0aGUgZGVjb2RlZCBhcmVhIChyZWdpb25feDA9JWQpIGlzIG91dHNpZGUgdGhlIGltYWdlIGFyZWEgKFhzaXo9JWQpLgoAQm90dG9tIHBvc2l0aW9uIG9mIHRoZSBkZWNvZGVkIGFyZWEgKHJlZ2lvbl95MT0lZCkgaXMgb3V0c2lkZSB0aGUgaW1hZ2UgYXJlYSAoWU9zaXo9JWQpLgoAVXAgcG9zaXRpb24gb2YgdGhlIGRlY29kZWQgYXJlYSAocmVnaW9uX3kwPSVkKSBpcyBvdXRzaWRlIHRoZSBpbWFnZSBhcmVhIChZT3Npej0lZCkuCgBSaWdodCBwb3NpdGlvbiBvZiB0aGUgZGVjb2RlZCBhcmVhIChyZWdpb25feDE9JWQpIGlzIG91dHNpZGUgdGhlIGltYWdlIGFyZWEgKFhPc2l6PSVkKS4KAExlZnQgcG9zaXRpb24gb2YgdGhlIGRlY29kZWQgYXJlYSAocmVnaW9uX3gwPSVkKSBpcyBvdXRzaWRlIHRoZSBpbWFnZSBhcmVhIChYT3Npej0lZCkuCgBTaXplIHggb2YgdGhlIGRlY29kZWQgY29tcG9uZW50IGltYWdlIGlzIGluY29ycmVjdCAoY29tcFslZF0udz0lZCkuCgBTaXplIHkgb2YgdGhlIGRlY29kZWQgY29tcG9uZW50IGltYWdlIGlzIGluY29ycmVjdCAoY29tcFslZF0uaD0lZCkuCgBUaWxlIHJlYWQsIGRlY29kZWQgYW5kIHVwZGF0ZWQgaXMgbm90IHRoZSBkZXNpcmVkIG9uZSAoJWQgdnMgJWQpLgoASW52YWxpZCBjb21wb25lbnQgaW5kZXggJWQgKD49ICVkKS4KAG9wal9yZWFkX2hlYWRlcigpIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIG9wal9zZXRfZGVjb2RlZF9jb21wb25lbnRzKCkuCgBNZW1vcnkgYWxsb2NhdGlvbiBmYWlsdXJlIGluIG9wal9qcDJfYXBwbHlfcGNscigpLgoAaW1hZ2UtPmNvbXBzWyVkXS5kYXRhID09IE5VTEwgaW4gb3BqX2pwMl9hcHBseV9wY2xyKCkuCgBpbnZhbGlkIGJveCBzaXplICVkICgleCkKAEZhaWwgdG8gcmVhZCB0aGUgY3VycmVudCBtYXJrZXIgc2VnbWVudCAoJSN4KQoARXJyb3Igd2l0aCBTSVogbWFya2VyOiBJSERSIHcoJXUpIGgoJXUpIHZzLiBTSVogdygldSkgaCgldSkKAEVycm9yIHJlYWRpbmcgQ09DIG1hcmtlciAoYmFkIG51bWJlciBvZiBjb21wb25lbnRzKQoASW52YWxpZCBudW1iZXIgb2YgdGlsZXMgOiAldSB4ICV1IChtYXhpbXVtIGZpeGVkIGJ5IGpwZWcyMDAwIG5vcm0gaXMgNjU1MzUgdGlsZXMpCgBJbnZhbGlkIG51bWJlciBvZiBjb21wb25lbnRzIChpaGRyKQoATm90IGVub3VnaCBtZW1vcnkgdG8gaGFuZGxlIGltYWdlIGhlYWRlciAoaWhkcikKAFdyb25nIHZhbHVlcyBmb3I6IHcoJWQpIGgoJWQpIG51bWNvbXBzKCVkKSAoaWhkcikKAEludmFsaWQgdmFsdWVzIGZvciBjb21wID0gJWQgOiBkeD0ldSBkeT0ldSAoc2hvdWxkIGJlIGJldHdlZW4gMSBhbmQgMjU1IGFjY29yZGluZyB0byB0aGUgSlBFRzIwMDAgbm9ybSkKAEJhZCBpbWFnZSBoZWFkZXIgYm94IChiYWQgc2l6ZSkKAEJhZCBDT0xSIGhlYWRlciBib3ggKGJhZCBzaXplKQoAQmFkIEJQQ0MgaGVhZGVyIGJveCAoYmFkIHNpemUpCgBFcnJvciB3aXRoIFNJWiBtYXJrZXI6IG5lZ2F0aXZlIG9yIHplcm8gaW1hZ2Ugc2l6ZSAoJWxsZCB4ICVsbGQpCgBza2lwOiBzZWdtZW50IHRvbyBsb25nICglZCkgd2l0aCBtYXggKCVkKSBmb3IgY29kZWJsb2NrICVkIChwPSVkLCBiPSVkLCByPSVkLCBjPSVkKQoAcmVhZDogc2VnbWVudCB0b28gbG9uZyAoJWQpIHdpdGggbWF4ICglZCkgZm9yIGNvZGVibG9jayAlZCAocD0lZCwgYj0lZCwgcj0lZCwgYz0lZCkKAERlc3BpdGUgSlAyIEJQQyE9MjU1LCBwcmVjaXNpb24gYW5kL29yIHNnbmQgdmFsdWVzIGZvciBjb21wWyVkXSBpcyBkaWZmZXJlbnQgdGhhbiBjb21wWzBdOgogICAgICAgIFswXSBwcmVjKCVkKSBzZ25kKCVkKSBbJWRdIHByZWMoJWQpIHNnbmQoJWQpCgBiYWQgY29tcG9uZW50IG51bWJlciBpbiBSR04gKCVkIHdoZW4gdGhlcmUgYXJlIG9ubHkgJWQpCgBFcnJvciB3aXRoIFNJWiBtYXJrZXI6IG51bWJlciBvZiBjb21wb25lbnQgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgcmVtYWluaW5nIG51bWJlciBvZiBwYXJhbWV0ZXJzICggJWQgdnMgJWQpCgBFcnJvciB3aXRoIFNJWiBtYXJrZXI6IGludmFsaWQgdGlsZSBzaXplICh0ZHg6ICVkLCB0ZHk6ICVkKQoAQmFkIENPTFIgaGVhZGVyIGJveCAoYmFkIHNpemU6ICVkKQoAQmFkIENPTFIgaGVhZGVyIGJveCAoQ0lFTGFiLCBiYWQgc2l6ZTogJWQpCgBQVEVSTSBjaGVjayBmYWlsdXJlOiAlZCByZW1haW5pbmcgYnl0ZXMgaW4gY29kZSBibG9jayAoJWQgdXNlZCAvICVkKQoATWFsZm9ybWVkIEhUIGNvZGVibG9jay4gT25lIG9mIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uIGlzIG5vdCBtZXQ6IDIgPD0gU2N1cCA8PSBtaW4oTGN1cCwgNDA3OSkKAEludmFsaWQgdmFsdWVzIGZvciBjb21wID0gJWQgOiBwcmVjPSV1IChzaG91bGQgYmUgYmV0d2VlbiAxIGFuZCAzOCBhY2NvcmRpbmcgdG8gdGhlIEpQRUcyMDAwIG5vcm0uIE9wZW5KcGVnIG9ubHkgc3VwcG9ydHMgdXAgdG8gMzEpCgBJbnZhbGlkIGJpdCBudW1iZXIgJWQgaW4gb3BqX3QyX3JlYWRfcGFja2V0X2hlYWRlcigpCgBTdHJlYW0gZXJyb3IhCgBFcnJvciBvbiB3cml0aW5nIHN0cmVhbSEKAFN0cmVhbSByZWFjaGVkIGl0cyBlbmQgIQoARXhwZWN0ZWQgYSBTT0MgbWFya2VyIAoASW52YWxpZCBib3ggc2l6ZSAlZCBmb3IgYm94ICclYyVjJWMlYycuIE5lZWQgJWQgYnl0ZXMsICVkIGJ5dGVzIHJlbWFpbmluZyAKAE1hbGZvcm1lZCBIVCBjb2RlYmxvY2suIERlY29kaW5nIHRoaXMgY29kZWJsb2NrIGlzIHN0b3BwZWQuIFVfcSBpcyBsYXJnZXIgdGhhbiB6ZXJvIGJpdHBsYW5lcyArIDEgCgBNYWxmb3JtZWQgSFQgY29kZWJsb2NrLiBEZWNvZGluZyB0aGlzIGNvZGVibG9jayBpcyBzdG9wcGVkLiBVX3EgaXNsYXJnZXIgdGhhbiBiaXRwbGFuZXMgKyAxIAoAQ09MUiBCT1ggbWV0aCB2YWx1ZSBpcyBub3QgYSByZWd1bGFyIHZhbHVlICglZCksIHNvIHdlIHdpbGwgaWdub3JlIHRoZSBlbnRpcmUgQ29sb3VyIFNwZWNpZmljYXRpb24gYm94LiAKAFdoaWxlIHJlYWRpbmcgQ0NQX1FOVFNUWSBlbGVtZW50IGluc2lkZSBRQ0Qgb3IgUUNDIG1hcmtlciBzZWdtZW50LCBudW1iZXIgb2Ygc3ViYmFuZHMgKCVkKSBpcyBncmVhdGVyIHRvIE9QSl9KMktfTUFYQkFORFMgKCVkKS4gU28gd2UgbGltaXQgdGhlIG51bWJlciBvZiBlbGVtZW50cyBzdG9yZWQgdG8gT1BKX0oyS19NQVhCQU5EUyAoJWQpIGFuZCBza2lwIHRoZSByZXN0LiAKAEpQMiBJSERSIGJveDogY29tcHJlc3Npb24gdHlwZSBpbmRpY2F0ZSB0aGF0IHRoZSBmaWxlIGlzIG5vdCBhIGNvbmZvcm1pbmcgSlAyIGZpbGUgKCVkKSAKAFRpbGUgaW5kZXggcHJvdmlkZWQgYnkgdGhlIHVzZXIgaXMgaW5jb3JyZWN0ICVkIChtYXggPSAlZCkgCgBFcnJvciBkZWNvZGluZyBjb21wb25lbnQgJWQuClRoZSBudW1iZXIgb2YgcmVzb2x1dGlvbnMgdG8gcmVtb3ZlICglZCkgaXMgZ3JlYXRlciBvciBlcXVhbCB0aGFuIHRoZSBudW1iZXIgb2YgcmVzb2x1dGlvbnMgb2YgdGhpcyBjb21wb25lbnQgKCVkKQpNb2RpZnkgdGhlIGNwX3JlZHVjZSBwYXJhbWV0ZXIuCgoASW1hZ2UgZGF0YSBoYXMgYmVlbiB1cGRhdGVkIHdpdGggdGlsZSAlZC4KCgBBsP0AC4AgIwClAEMAZgCDAO6oFADf2CMAvhBDAP/1gwB+IFUAX1EjADUAQwBORIMAzsQUAM/MIwD+4kMA/5mDAJYAxQA/MSMApQBDAF5EgwDOyBQA3xEjAP70QwD//IMAngBVAHcAIwA1AEMA//GDAK6IFAC3ACMA/vhDAO/kgwCOiMUAHxEjAKUAQwBmAIMA7qgUAN9UIwC+EEMA7yKDAH4gVQB/IiMANQBDAE5EgwDOxBQAvxEjAP7iQwD3AIMAlgDFAD8iIwClAEMAXkSDAM7IFADXACMA/vRDAP+6gwCeAFUAbwAjADUAQwD/5oMArogUAK+iIwD++EMA5wCDAI6IxQAvIgIAxQCEAH4gAgDOxCQA9wACAP6iRABWAAIAngAUANcAAgC+EIQAZgACAK6IJADfEQIA7qhEADYAAgCOiBQAHxECAMUAhABuAAIAzogkAP+IAgD+uEQATkQCAJYAFAC3AAIA/uSEAF5EAgCmACQA5wACAN5URAAuIgIAPgAUAHcAAgDFAIQAfiACAM7EJAD/8QIA/qJEAFYAAgCeABQAvxECAL4QhABmAAIArogkAO8iAgDuqEQANgACAI6IFAB/IgIAxQCEAG4AAgDOiCQA7+QCAP64RABORAIAlgAUAK+iAgD+5IQAXkQCAKYAJADf2AIA3lREAC4iAgA+ABQAX1ECAFUAhABmAAIA3ogkAP8yAgD+EUQATkQCAK4AFAC3AAIAfjGEAF5RAgDGACQA1wACAO4gRAAeEQIAngAUAHcAAgBVAIQAXlQCAM5EJADnAAIA/vFEADYAAgCmABQAX1UCAP50hAA+EQIAviAkAH90AgDexEQA//gCAJYAFAAvIgIAVQCEAGYAAgDeiCQA9wACAP4RRABORAIArgAUAI+IAgB+MYQAXlECAMYAJADPyAIA7iBEAB4RAgCeABQAbwACAFUAhABeVAIAzkQkAN/RAgD+8UQANgACAKYAFAB/IgIA/nSEAD4RAgC+ICQAvyICAN7ERADvIgIAlgAUAD8yAwDe1P30//wUAD4RVQCPiAMAvjKFAOcAJQBeUf6qf3IDAM5E/fjvRBQAfmRFAK+iAwCmAF1V35n98TYA/vVvYgMA3tH99P/mFAB+cVUAv7EDAK6IhQDf1SUATkT+8n9mAwDGAP347+IUAF5URQCfEQMAlgBdVc/I/fEeEe7IZwADAN7U/fT/8xQAPhFVAL8RAwC+MoUA39glAF5R/qovIgMAzkT9+PcAFAB+ZEUAn5gDAKYAXVXXAP3xNgD+9W9EAwDe0f30/7kUAH5xVQC3AAMAroiFAN/cJQBORP7ydwADAMYA/fjv5BQAXlRFAH9zAwCWAF1Vv7j98R4R7sg/MgIApQCEAH5AAgDeECQA3xECAP5yRABWAAIArqgUAL+yAgCWAIQAZgACAMYAJADnAAIA7shEAC4iAgCOiBQAdwACAKUAhABuAAIAzogkAPcAAgD+kUQANgACAK6iFACvqgIA/riEAF4AAgC+ACQAz8QCAO5ERAD/9AIAPiIUAB8RAgClAIQAfkACAN4QJAD/mQIA/nJEAFYAAgCuqBQAtwACAJYAhABmAAIAxgAkANcAAgDuyEQALiICAI6IFABPRAIApQCEAG4AAgDOiCQA7+ICAP6RRAA2AAIArqIUAH9EAgD+uIQAXgACAL4AJACfAAIA7kREAP92AgA+IhQAPzEDAMYAhQD/2f3yfmT+8b+ZAwCuoiUA72b99FYA7uJ/cwMAvphFAPcA/fhmAP52n4gDAI6IFQDf1aUALiLemE9EAwC+soUA//z98m4ilgC3AAMArqolAN/R/fQ2AN7Ub2QDAK6oRQDv6v34XkTu6H9xAwA+MhUAz8SlAP/6zog/MQMAxgCFAP93/fJ+ZP7xv7MDAK6iJQDnAP30VgDu4ncAAwC+mEUA7+T9+GYA/nZ/ZgMAjogVANcApQAuIt6YPzMDAL6yhQD/df3ybiKWAJ+RAwCuqiUA35n99DYA3tRfUQMArqhFAO/s/fheRO7of3IDAD4yFQC/saUA//POiB8RAwDeVP3yHhEUAH5k/vjPzAMAvpFFAO8iJQAuIv7zj4gDAMYAhQD3ABQAXhH+/K+oAwCmADUA38j98T4x/mZvZAMAzsj98v/1FABmAP70v7oDAK4iRQDnACUAPjL+6n9zAwC+soUA31UUAFYAfnGfEQMAlgA1AM/E/fE+M+7oT0QDAN5U/fIeERQAfmT++L+ZAwC+kUUA7+IlAC4i/vN/ZgMAxgCFAO/kFABeEf78n5gDAKYANQDXAP3xPjH+Zm8iAwDOyP3y/7kUAGYA/vS3AAMAriJFAN/RJQA+Mv7qdwADAL6yhQDv7BQAVgB+cX9yAwCWADUAv7j98T4z7uhfVPzx3tH9+tcA/PgWAP3/f3T89H5x/fO/s/zy7+ru6E9E/PGuIgUAv7j8+PcA/vx3APz0XhH99X91/PLf2O7iPzP88b6y/frPiPz4//v9/39z/PRuAP3ztwD88u9m/vk/MfzxngAFAL+6/Pj//f72ZwD89CYA/fWPiPzy39ze1C8i/PHe0f36z8T8+BYA/f9/cvz0fnH987+Z/PLv7O7oRwD88a4iBQCnAPz4//f+/FcA/PReEf31lwD88t/V7uI3APzxvrL9+scA/Pj//v3/f2b89G4A/fOvqPzy5wD++T8y/PGeAAUAv7H8+O/k/vZfVPz0JgD99YcA/PLfmd7UHxETAGUAQwDeAIMAjYgjAE5EEwClAEMAroiDADUAIwDXABMAxQBDAJ4AgwBVACMALiITAJUAQwB+AIMA/hAjAHcAEwBlAEMAzoiDAI2IIwAeERMApQBDAF4AgwA1ACMA5wATAMUAQwC+AIMAVQAjAP8REwCVAEMAPgCDAO5AIwCvohMAZQBDAN4AgwCNiCMATkQTAKUAQwCuiIMANQAjAO9EEwDFAEMAngCDAFUAIwAuIhMAlQBDAH4AgwD+ECMAtwATAGUAQwDOiIMAjYgjAB4REwClAEMAXgCDADUAIwDPxBMAxQBDAL4AgwBVACMA9wATAJUAQwA+AIMA7kAjAG8AAQCEAAEAVgABABQAAQDXAAEAJAABAJYAAQBFAAEAdwABAIQAAQDGAAEAFAABAI+IAQAkAAEA9wABADUAAQAvIgEAhAABAP5AAQAUAAEAtwABACQAAQC/AAEARQABAGcAAQCEAAEApgABABQAAQBPRAEAJAABAOcAAQA1AAEAPxEBAIQAAQBWAAEAFAABAM8AAQAkAAEAlgABAEUAAQBvAAEAhAABAMYAAQAUAAEAnwABACQAAQDvAAEANQABAD8yAQCEAAEA/kABABQAAQCvAAEAJAABAP9EAQBFAAEAXwABAIQAAQCmAAEAFAABAH8AAQAkAAEA3wABADUAAQAfEQEAJAABAFYAAQCFAAEAvwABABQAAQD3AAEAxgABAHcAAQAkAAEA//gBAEUAAQB/AAEAFAABAN8AAQCmAAEAPzEBACQAAQAuIgEAhQABALcAAQAUAAEA70QBAK6iAQBnAAEAJAABAP9RAQBFAAEAlwABABQAAQDPAAEANgABAD8iAQAkAAEAVgABAIUAAQC/sgEAFAABAO9AAQDGAAEAbwABACQAAQD/cgEARQABAJ8AAQAUAAEA1wABAKYAAQBPRAEAJAABAC4iAQCFAAEAr6gBABQAAQDnAAEArqIBAF8AAQAkAAEA/0QBAEUAAQCPiAEAFAABAK+qAQA2AAEAHxECAP74JABWAAIAtgCFAP9mAgDOABQAHhECAJYANQCvqAIA9gAkAD4xAgCmAEUAv7MCAL6yFAD/9QIAZgB+UV9UAgD+8iQALiICAK4ihQDvRAIAxgAUAP/0AgB2ADUAf0QCAN5AJAA+MgIAngBFANcAAgC+iBQA//oCAF4R/vFPRAIA/vgkAFYAAgC2AIUA78gCAM4AFAAeEQIAlgA1AI+IAgD2ACQAPjECAKYARQDfRAIAvrIUAP+oAgBmAH5RbwACAP7yJAAuIgIAriKFAOcAAgDGABQA7+ICAHYANQB/cgIA3kAkAD4yAgCeAEUAv7ECAL6IFAD/cwIAXhH+8T8zAQCEAAEA7iABAMUAAQDPxAEARAABAP8yAQAVAAEAj4gBAIQAAQBmAAEAJQABAK8AAQBEAAEA7yIBAKYAAQBfAAEAhAABAE5EAQDFAAEAz8wBAEQAAQD3AAEAFQABAG8AAQCEAAEAVgABACUAAQCfAAEARAABAN8AAQD+MAEALyIBAIQAAQDuIAEAxQABAM/IAQBEAAEA/xEBABUAAQB3AAEAhAABAGYAAQAlAAEAfwABAEQAAQDnAAEApgABADcAAQCEAAEATkQBAMUAAQC3AAEARAABAL8AAQAVAAEAPwABAIQAAQBWAAEAJQABAJcAAQBEAAEA1wABAP4wAQAfEQIA7qhEAI6IAgDWAMUA//MCAP78JQA+AAIAtgBVAN/YAgD++EQAZgACAH4ghQD/mQIA5gD1ADYAAgCmABUAnwACAP7yRAB2AAIAzkTFAP92AgD+8SUATkQCAK4AVQDPyAIA/vREAF5EAgC+EIUA7+QCAN5U9QAeEQIAlgAVAC8iAgDuqEQAjogCANYAxQD/+gIA/vwlAD4AAgC2AFUAvxECAP74RABmAAIAfiCFAO8iAgDmAPUANgACAKYAFQB/IgIA/vJEAHYAAgDORMUA/9UCAP7xJQBORAIArgBVAG8AAgD+9EQAXkQCAL4QhQDfEQIA3lT1AB4RAgCWABUAX1EDAPYAFAAeEUQAjoilAN/UAwCuolUA/3YkAD4itgCvqgMA5gAUAP/1RABmAIUAz8wDAJ4AxQDvRCQANgD++H8xAwDu6BQA//FEAHYApQDPxAMAfiJVAN/RJABORP70X1EDANYAFADv4kQAXkSFAL8iAwCWAMUA38gkAC4i/vJvIgMA9gAUAB4RRACOiKUAv7EDAK6iVQD/MyQAPiK2AK+oAwDmABQA/7lEAGYAhQC/qAMAngDFAO/kJAA2AP74b2QDAO7oFAD//EQAdgClAM/IAwB+IlUA7+okAE5E/vR/dAMA1gAUAP/6RABeRIUAv7IDAJYAxQDfRCQALiL+8j8x8wD++v3xNgAEAL4ydQDfEfMA3lT98u/k1QB+cf78f3PzAP7z/fgeEQQAlgBVAL+x8wDOALUA39j99GYA/rlfVPMA/nb98SYABACmAHUAnwDzAK4A/fL/99UARgD+9X908wDmAP34FgAEAIYAVQCPiPMAxgC1AO/i/fReEe6oPxHzAP76/fE2AAQAvjJ1AN/R8wDeVP3y//vVAH5x/vx/RPMA/vP9+B4RBACWAFUAf3LzAM4AtQDvIv30ZgD+uU9E8wD+dv3xJgAEAKYAdQC/EfMArgD98v//1QBGAP71PzLzAOYA/fgWAAQAhgBVAG8A8wDGALUAv7j99F4R7qgvIgBBvJ0BC6QeAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAwAAAAMAAAAEAAAABQAAALchQiFnIUIhERERETMzMzN3d3d3AAAAAAAAAAABVgAAAAAAACBPAAAwTwAAAVYAAAEAAAAwTwAAIE8AAAE0AAAAAAAAQE8AAMBPAAABNAAAAQAAAFBPAADQTwAAARgAAAAAAABgTwAAIFAAAAEYAAABAAAAcE8AADBQAADBCgAAAAAAAIBPAACAUAAAwQoAAAEAAACQTwAAkFAAACEFAAAAAAAAoE8AAKBSAAAhBQAAAQAAALBPAACwUgAAIQIAAAAAAADAUwAAIFMAACECAAABAAAA0FMAADBTAAABVgAAAAAAAOBPAADQTwAAAVYAAAEAAADwTwAAwE8AAAFUAAAAAAAAAFAAAMBQAAABVAAAAQAAABBQAADQUAAAAUgAAAAAAAAgUAAAwFAAAAFIAAABAAAAMFAAANBQAAABOAAAAAAAAEBQAADAUAAAATgAAAEAAABQUAAA0FAAAAEwAAAAAAAAYFAAACBRAAABMAAAAQAAAHBQAAAwUQAAASQAAAAAAACAUAAAQFEAAAEkAAABAAAAkFAAAFBRAAABHAAAAAAAAKBQAACAUQAAARwAAAEAAACwUAAAkFEAAAEWAAAAAAAAoFIAAKBRAAABFgAAAQAAALBSAACwUQAAAVYAAAAAAADgUAAA0FAAAAFWAAABAAAA8FAAAMBQAAABVAAAAAAAAABRAADAUAAAAVQAAAEAAAAQUQAA0FAAAAFRAAAAAAAAIFEAAOBQAAABUQAAAQAAADBRAADwUAAAAUgAAAAAAABAUQAAAFEAAAFIAAABAAAAUFEAABBRAAABOAAAAAAAAGBRAAAgUQAAATgAAAEAAABwUQAAMFEAAAE0AAAAAAAAgFEAAEBRAAABNAAAAQAAAJBRAABQUQAAATAAAAAAAACgUQAAYFEAAAEwAAABAAAAsFEAAHBRAAABKAAAAAAAAMBRAABgUQAAASgAAAEAAADQUQAAcFEAAAEkAAAAAAAA4FEAAIBRAAABJAAAAQAAAPBRAACQUQAAASIAAAAAAAAAUgAAoFEAAAEiAAABAAAAEFIAALBRAAABHAAAAAAAACBSAADAUQAAARwAAAEAAAAwUgAA0FEAAAEYAAAAAAAAQFIAAOBRAAABGAAAAQAAAFBSAADwUQAAARYAAAAAAABgUgAAAFIAAAEWAAABAAAAcFIAABBSAAABFAAAAAAAAIBSAAAgUgAAARQAAAEAAACQUgAAMFIAAAESAAAAAAAAoFIAAEBSAAABEgAAAQAAALBSAABQUgAAAREAAAAAAADAUgAAYFIAAAERAAABAAAA0FIAAHBSAADBCgAAAAAAAOBSAACAUgAAwQoAAAEAAADwUgAAkFIAAMEJAAAAAAAAAFMAAKBSAADBCQAAAQAAABBTAACwUgAAoQgAAAAAAAAgUwAAwFIAAKEIAAABAAAAMFMAANBSAAAhBQAAAAAAAEBTAADgUgAAIQUAAAEAAABQUwAA8FIAAEEEAAAAAAAAYFMAAABTAABBBAAAAQAAAHBTAAAQUwAAoQIAAAAAAACAUwAAIFMAAKECAAABAAAAkFMAADBTAAAhAgAAAAAAAKBTAABAUwAAIQIAAAEAAACwUwAAUFMAAEEBAAAAAAAAwFMAAGBTAABBAQAAAQAAANBTAABwUwAAEQEAAAAAAADgUwAAgFMAABEBAAABAAAA8FMAAJBTAACFAAAAAAAAAABUAACgUwAAhQAAAAEAAAAQVAAAsFMAAEkAAAAAAAAAIFQAAMBTAABJAAAAAQAAADBUAADQUwAAJQAAAAAAAABAVAAA4FMAACUAAAABAAAAUFQAAPBTAAAVAAAAAAAAAGBUAAAAVAAAFQAAAAEAAABwVAAAEFQAAAkAAAAAAAAAgFQAACBUAAAJAAAAAQAAAJBUAAAwVAAABQAAAAAAAACgVAAAQFQAAAUAAAABAAAAsFQAAFBUAAABAAAAAAAAAKBUAABgVAAAAQAAAAEAAACwVAAAcFQAAAFWAAAAAAAAwFQAAMBUAAABVgAAAQAAANBUAADQVAAAAAEDAwECAwMFBgcHBgYHBwABAwMBAgMDBQYHBwYGBwcFBgcHBgYHBwgICAgICAgIBQYHBwYGBwcICAgICAgICAECAwMCAgMDBgYHBwYGBwcBAgMDAgIDAwYGBwcGBgcHBgYHBwYGBwcICAgICAgICAYGBwcGBgcHCAgICAgICAgDAwQEAwMEBAcHBwcHBwcHAwMEBAMDBAQHBwcHBwcHBwcHBwcHBwcHCAgICAgICAgHBwcHBwcHBwgICAgICAgIAwMEBAMDBAQHBwcHBwcHBwMDBAQDAwQEBwcHBwcHBwcHBwcHBwcHBwgICAgICAgIBwcHBwcHBwcICAgICAgICAECAwMCAgMDBgYHBwYGBwcBAgMDAgIDAwYGBwcGBgcHBgYHBwYGBwcICAgICAgICAYGBwcGBgcHCAgICAgICAgCAgMDAgIDAwYGBwcGBgcHAgIDAwICAwMGBgcHBgYHBwYGBwcGBgcHCAgICAgICAgGBgcHBgYHBwgICAgICAgIAwMEBAMDBAQHBwcHBwcHBwMDBAQDAwQEBwcHBwcHBwcHBwcHBwcHBwgICAgICAgIBwcHBwcHBwcICAgICAgICAMDBAQDAwQEBwcHBwcHBwcDAwQEAwMEBAcHBwcHBwcHBwcHBwcHBwcICAgICAgICAcHBwcHBwcHCAgICAgICAgAAQUGAQIGBgMDBwcDAwcHAAEFBgECBgYDAwcHAwMHBwMDBwcDAwcHBAQHBwQEBwcDAwcHAwMHBwQEBwcEBAcHAQIGBgICBgYDAwcHAwMHBwECBgYCAgYGAwMHBwMDBwcDAwcHAwMHBwQEBwcEBAcHAwMHBwMDBwcEBAcHBAQHBwUGCAgGBggIBwcICAcHCAgFBggIBgYICAcHCAgHBwgIBwcICAcHCAgHBwgIBwcICAcHCAgHBwgIBwcICAcHCAgGBggIBgYICAcHCAgHBwgIBgYICAYGCAgHBwgIBwcICAcHCAgHBwgIBwcICAcHCAgHBwgIBwcICAcHCAgHBwgIAQIGBgICBgYDAwcHAwMHBwECBgYCAgYGAwMHBwMDBwcDAwcHAwMHBwQEBwcEBAcHAwMHBwMDBwcEBAcHBAQHBwICBgYCAgYGAwMHBwMDBwcCAgYGAgIGBgMDBwcDAwcHAwMHBwMDBwcEBAcHBAQHBwMDBwcDAwcHBAQHBwQEBwcGBggIBgYICAcHCAgHBwgIBgYICAYGCAgHBwgIBwcICAcHCAgHBwgIBwcICAcHCAgHBwgIBwcICAcHCAgHBwgIBgYICAYGCAgHBwgIBwcICAYGCAgGBggIBwcICAcHCAgHBwgIBwcICAcHCAgHBwgIBwcICAcHCAgHBwgIBwcICAABAwMBAgMDBQYHBwYGBwcAAQMDAQIDAwUGBwcGBgcHBQYHBwYGBwcICAgICAgICAUGBwcGBgcHCAgICAgICAgBAgMDAgIDAwYGBwcGBgcHAQIDAwICAwMGBgcHBgYHBwYGBwcGBgcHCAgICAgICAgGBgcHBgYHBwgICAgICAgIAwMEBAMDBAQHBwcHBwcHBwMDBAQDAwQEBwcHBwcHBwcHBwcHBwcHBwgICAgICAgIBwcHBwcHBwcICAgICAgICAMDBAQDAwQEBwcHBwcHBwcDAwQEAwMEBAcHBwcHBwcHBwcHBwcHBwcICAgICAgICAcHBwcHBwcHCAgICAgICAgBAgMDAgIDAwYGBwcGBgcHAQIDAwICAwMGBgcHBgYHBwYGBwcGBgcHCAgICAgICAgGBgcHBgYHBwgICAgICAgIAgIDAwICAwMGBgcHBgYHBwICAwMCAgMDBgYHBwYGBwcGBgcHBgYHBwgICAgICAgIBgYHBwYGBwcICAgICAgICAMDBAQDAwQEBwcHBwcHBwcDAwQEAwMEBAcHBwcHBwcHBwcHBwcHBwcICAgICAgICAcHBwcHBwcHCAgICAgICAgDAwQEAwMEBAcHBwcHBwcHAwMEBAMDBAQHBwcHBwcHBwcHBwcHBwcHCAgICAgICAgHBwcHBwcHBwgICAgICAgIAAMBBAMGBAcBBAIFBAcFBwADAQQDBgQHAQQCBQQHBQcBBAIFBAcFBwIFAgUFBwUHAQQCBQQHBQcCBQIFBQcFBwMGBAcGCAcIBAcFBwcIBwgDBgQHBggHCAQHBQcHCAcIBAcFBwcIBwgFBwUHBwgHCAQHBQcHCAcIBQcFBwcIBwgBBAIFBAcFBwIFAgUFBwUHAQQCBQQHBQcCBQIFBQcFBwIFAgUFBwUHAgUCBQUHBQcCBQIFBQcFBwIFAgUFBwUHBAcFBwcIBwgFBwUHBwgHCAQHBQcHCAcIBQcFBwcIBwgFBwUHBwgHCAUHBQcHCAcIBQcFBwcIBwgFBwUHBwgHCAMGBAcGCAcIBAcFBwcIBwgDBgQHBggHCAQHBQcHCAcIBAcFBwcIBwgFBwUHBwgHCAQHBQcHCAcIBQcFBwcIBwgGCAcICAgICAcIBwgICAgIBggHCAgICAgHCAcICAgICAcIBwgICAgIBwgHCAgICAgHCAcICAgICAcIBwgICAgIBAcFBwcIBwgFBwUHBwgHCAQHBQcHCAcIBQcFBwcIBwgFBwUHBwgHCAUHBQcHCAcIBQcFBwcIBwgFBwUHBwgHCAcIBwgICAgIBwgHCAgICAgHCAcICAgICAcIBwgICAgIBwgHCAgICAgHCAcICAgICAcIBwgICAgIBwgHCAgICAgJCQoKCQkKCgwMDQsMDA0LCQkKCgkJCgoMDAsNDAwLDQwMDQ0MDAsLDAkNCgkMCgsMDAsLDAwNDQwJCwoJDAoNCQkKCgkJCgoMDA0LDAwNCwkJCgoJCQoKDAwLDQwMCw0MDA0NDAwLCwwJDQoJDAoLDAwLCwwMDQ0MCQsKCQwKDQoKCgoKCgoKDQsNCw0LDQsKCgkJCgoJCQ0LDAwNCwwMDQ0NDQsLCwsNCg0KCgsKCw0NDAwLCwwMDQoMCQoLCQwKCgkJCgoJCQsNDAwLDQwMCgoKCgoKCgoLDQsNCw0LDQsLDAwNDQwMCwoMCQoNCQwLCwsLDQ0NDQsKCwoKDQoNAEHpuwELNwEAAQABAAEAAAEBAAABAQABAAEAAQABAAAAAAEBAQEAAAAAAAEAAQAAAAABAQEBAAAAAQABAQEAQam8AQs3AQABAAEAAQAAAQEAAAEBAAEAAQABAAEAAAAAAQEBAQAAAAAAAQABAAAAAAEBAQEAAAABAAEBAQBB6bwBCwcBAAEAAQABAEH5vAELlQIBAAEAAQABAAAAAAEBAQEAAAAAAAEAAQAAAAABAQEBAAAAAAABAAEBAQAAAQEAAAABAAEAAQABAQEBAQEBAQEAAQABAAEAAQAAAAABAQEBAAEAAAEBAAEAAAAAAQEBAQABAAEBAQEBAgAAAAQAAAAEAAAACAAAAJD/AAAMAAAAGAAAAFL/AAAUAAAAGQAAAFP/AAAUAAAAGgAAAF7/AAAUAAAAGwAAAFz/AAAUAAAAHAAAAF3/AAAUAAAAHQAAAF//AAAUAAAAHgAAAFH/AAACAAAAHwAAAFX/AAAEAAAAIAAAAFf/AAAEAAAAIQAAAFj/AAAQAAAAIgAAAGD/AAAEAAAAIwAAAGH/AAAQAAAAJAAAAJH/AEGYvwELZWP/AAAEAAAAJQAAAGT/AAAUAAAAJgAAAHT/AAAUAAAAJwAAAHj/AAAEAAAAKAAAAFD/AAAEAAAAKQAAAFn/AAAEAAAAKgAAAHX/AAAUAAAAKwAAAHf/AAAUAAAALAAAAAAAAAAUAEGQwAELNS0AAAAuAAAALwAAADAAAAAxAAAAMgAAADMAAAA0AAAAICBQajYAAABweXRmNwAAAGgycGo4AEHQwAELMnJkaGk5AAAAcmxvYzoAAABjY3BiOwAAAHJsY3A8AAAAcGFtYz0AAABmZWRjPgAAAHhiAEGQwQELQRkACwAZGRkAAAAABQAAAAAAAAkAAAAACwAAAAAAAAAAGQAKChkZGQMKBwABAAkLGAAACQYLAAALAAYZAAAAGRkZAEHhwQELIQ4AAAAAAAAAABkACw0ZGRkADQAAAgAJDgAAAAkADgAADgBBm8IBCwEMAEGnwgELFRMAAAAAEwAAAAAJDAAAAAAADAAADABB1cIBCwEQAEHhwgELFQ8AAAAEDwAAAAAJEAAAAAAAEAAAEABBj8MBCwESAEGbwwELHhEAAAAAEQAAAAAJEgAAAAAAEgAAEgAAGgAAABoaGgBB0sMBCw4aAAAAGhoaAAAAAAAACQBBg8QBCwEUAEGPxAELFRcAAAAAFwAAAAAJFAAAAAAAFAAAFABBvcQBCwEWAEHJxAELJxUAAAAAFQAAAAAJFgAAAAAAFgAAFgAAMDEyMzQ1Njc4OUFCQ0RFRgBB8cQBCwhsAQAAAAAABQBBhMUBCwFpAEGcxQELDmoAAABrAAAA+GcAAAAEAEG0xQELAQEAQcTFAQsF/////wo=";
      return f;
    }
    var wasmBinaryFile;
    function getBinarySync(file) {
      if (file == wasmBinaryFile && wasmBinary) {
        return new Uint8Array(wasmBinary);
      }
      var binary = tryParseAsDataURI(file);
      if (binary) {
        return binary;
      }
      if (readBinary) {
        return readBinary(file);
      }
      throw 'sync fetching of the wasm failed: you can preload it to Module["wasmBinary"] manually, or emcc.py will do that for you when generating HTML (but not JS)';
    }
    function instantiateSync(file, info) {
      var module;
      var binary = getBinarySync(file);
      module = new WebAssembly.Module(binary);
      var instance = new WebAssembly.Instance(module, info);
      return [instance, module];
    }
    function getWasmImports() {
      return {
        "a": wasmImports
      };
    }
    function createWasm() {
      var info = getWasmImports();
      function receiveInstance(instance, module) {
        wasmExports = instance.exports;
        wasmMemory = wasmExports["i"];
        updateMemoryViews();
        addOnInit(wasmExports["j"]);
        removeRunDependency("wasm-instantiate");
        return wasmExports;
      }
      addRunDependency("wasm-instantiate");
      if (Module["instantiateWasm"]) {
        try {
          return Module["instantiateWasm"](info, receiveInstance);
        } catch (e) {
          err(`Module.instantiateWasm callback failed with error: ${e}`);
          readyPromiseReject(e);
        }
      }
      if (!wasmBinaryFile) wasmBinaryFile = findWasmBinary();
      var result = instantiateSync(wasmBinaryFile, info);
      return receiveInstance(result[0]);
    }
    var callRuntimeCallbacks = callbacks => {
      while (callbacks.length > 0) {
        callbacks.shift()(Module);
      }
    };
    var noExitRuntime = Module["noExitRuntime"] || true;
    var __emscripten_memcpy_js = (dest, src, num) => HEAPU8.copyWithin(dest, src, src + num);
    var getHeapMax = () => 2147483648;
    var growMemory = size => {
      var b = wasmMemory.buffer;
      var pages = (size - b.byteLength + 65535) / 65536;
      try {
        wasmMemory.grow(pages);
        updateMemoryViews();
        return 1;
      } catch (e) {}
    };
    var _emscripten_resize_heap = requestedSize => {
      var oldSize = HEAPU8.length;
      requestedSize >>>= 0;
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        return false;
      }
      var alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
        var replacement = growMemory(newSize);
        if (replacement) {
          return true;
        }
      }
      return false;
    };
    var ENV = {};
    var getExecutableName = () => thisProgram || "./this.program";
    var getEnvStrings = () => {
      if (!getEnvStrings.strings) {
        var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var env = {
          "USER": "web_user",
          "LOGNAME": "web_user",
          "PATH": "/",
          "PWD": "/",
          "HOME": "/home/web_user",
          "LANG": lang,
          "_": getExecutableName()
        };
        for (var x in ENV) {
          if (ENV[x] === undefined) delete env[x];else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(`${x}=${env[x]}`);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    };
    var stringToAscii = (str, buffer) => {
      for (var i = 0; i < str.length; ++i) {
        HEAP8[buffer++] = str.charCodeAt(i);
      }
      HEAP8[buffer] = 0;
    };
    var _environ_get = (__environ, environ_buf) => {
      var bufSize = 0;
      getEnvStrings().forEach((string, i) => {
        var ptr = environ_buf + bufSize;
        HEAPU32[__environ + i * 4 >> 2] = ptr;
        stringToAscii(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    };
    var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
      var strings = getEnvStrings();
      HEAPU32[penviron_count >> 2] = strings.length;
      var bufSize = 0;
      strings.forEach(string => bufSize += string.length + 1);
      HEAPU32[penviron_buf_size >> 2] = bufSize;
      return 0;
    };
    var printCharBuffers = [null, [], []];
    var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
    var UTF8ArrayToString = (heapOrArray, idx, maxBytesToRead) => {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = "";
      while (idx < endPtr) {
        var u0 = heapOrArray[idx++];
        if (!(u0 & 128)) {
          str += String.fromCharCode(u0);
          continue;
        }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 224) == 192) {
          str += String.fromCharCode((u0 & 31) << 6 | u1);
          continue;
        }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 240) == 224) {
          u0 = (u0 & 15) << 12 | u1 << 6 | u2;
        } else {
          u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
        }
        if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        }
      }
      return str;
    };
    var printChar = (stream, curr) => {
      var buffer = printCharBuffers[stream];
      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
        buffer.length = 0;
      } else {
        buffer.push(curr);
      }
    };
    var UTF8ToString = (ptr, maxBytesToRead) => ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    var _fd_write = (fd, iov, iovcnt, pnum) => {
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[iov >> 2];
        var len = HEAPU32[iov + 4 >> 2];
        iov += 8;
        for (var j = 0; j < len; j++) {
          printChar(fd, HEAPU8[ptr + j]);
        }
        num += len;
      }
      HEAPU32[pnum >> 2] = num;
      return 0;
    };
    function _jsPrintWarning(message_ptr) {
      const message = UTF8ToString(message_ptr);
      (Module.warn || console.warn)(`OpenJPEG: ${message}`);
    }
    function _setImageData(array_ptr, array_size) {
      Module.imageData = new Uint8ClampedArray(Module.HEAPU8.subarray(array_ptr, array_ptr + array_size));
    }
    function _storeErrorMessage(message_ptr) {
      const message = UTF8ToString(message_ptr);
      if (!Module.errorMessages) {
        Module.errorMessages = message;
      } else {
        Module.errorMessages += "\n" + message;
      }
    }
    var wasmImports = {
      f: __emscripten_memcpy_js,
      b: _emscripten_resize_heap,
      c: _environ_get,
      d: _environ_sizes_get,
      e: _fd_write,
      g: _jsPrintWarning,
      h: _setImageData,
      a: _storeErrorMessage
    };
    var wasmExports = createWasm();
    var ___wasm_call_ctors = wasmExports["j"];
    var _malloc = Module["_malloc"] = wasmExports["k"];
    var _free = Module["_free"] = wasmExports["l"];
    var _jp2_decode = Module["_jp2_decode"] = wasmExports["n"];
    var __emscripten_stack_restore = wasmExports["_emscripten_stack_restore"];
    var __emscripten_stack_alloc = wasmExports["_emscripten_stack_alloc"];
    var _emscripten_stack_get_current = wasmExports["emscripten_stack_get_current"];
    var calledRun;
    dependenciesFulfilled = function runCaller() {
      if (!calledRun) run();
      if (!calledRun) dependenciesFulfilled = runCaller;
    };
    function run() {
      if (runDependencies > 0) {
        return;
      }
      preRun();
      if (runDependencies > 0) {
        return;
      }
      function doRun() {
        if (calledRun) return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT) return;
        initRuntime();
        readyPromiseResolve(Module);
        if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function () {
          setTimeout(function () {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    run();
    moduleRtn = Module;
    return moduleRtn;
  };
})();
/* harmony default export */ const openjpeg = (OpenJPEG);
;// CONCATENATED MODULE: ./src/core/stream.js


class Stream extends base_stream_BaseStream {
  constructor(arrayBuffer, start, length, dict) {
    super();
    this.bytes = arrayBuffer instanceof Uint8Array ? arrayBuffer : new Uint8Array(arrayBuffer);
    this.start = start || 0;
    this.pos = this.start;
    this.end = start + length || this.bytes.length;
    this.dict = dict;
  }
  get length() {
    return this.end - this.start;
  }
  get isEmpty() {
    return this.length === 0;
  }
  getByte() {
    if (this.pos >= this.end) {
      return -1;
    }
    return this.bytes[this.pos++];
  }
  getBytes(length) {
    const bytes = this.bytes;
    const pos = this.pos;
    const strEnd = this.end;
    if (!length) {
      return bytes.subarray(pos, strEnd);
    }
    let end = pos + length;
    if (end > strEnd) {
      end = strEnd;
    }
    this.pos = end;
    return bytes.subarray(pos, end);
  }
  getByteRange(begin, end) {
    if (begin < 0) {
      begin = 0;
    }
    if (end > this.end) {
      end = this.end;
    }
    return this.bytes.subarray(begin, end);
  }
  reset() {
    this.pos = this.start;
  }
  moveStart() {
    this.start = this.pos;
  }
  makeSubStream(start, length, dict = null) {
    return new Stream(this.bytes.buffer, start, length, dict);
  }
}
class StringStream extends Stream {
  constructor(str) {
    super(stringToBytes(str));
  }
}
class NullStream extends Stream {
  constructor() {
    super(new Uint8Array(0));
  }
}

;// CONCATENATED MODULE: ./src/core/jpx.js



class JpxError extends BaseException {
  constructor(msg) {
    super(msg, "JpxError");
  }
}
class JpxImage {
  static #module = null;
  static decode(data, ignoreColorSpace = false) {
    this.#module ||= openjpeg({
      warn: util_warn
    });
    const imageData = this.#module.decode(data, ignoreColorSpace);
    if (typeof imageData === "string") {
      throw new JpxError(imageData);
    }
    return imageData;
  }
  static cleanup() {
    this.#module = null;
  }
  static parseImageProperties(stream) {
    if (stream instanceof ArrayBuffer || ArrayBuffer.isView(stream)) {
      stream = new Stream(stream);
    } else {
      throw new JpxError("Invalid data format, must be a TypedArray.");
    }
    let newByte = stream.getByte();
    while (newByte >= 0) {
      const oldByte = newByte;
      newByte = stream.getByte();
      const code = oldByte << 8 | newByte;
      if (code === 0xff51) {
        stream.skip(4);
        const Xsiz = stream.getInt32() >>> 0;
        const Ysiz = stream.getInt32() >>> 0;
        const XOsiz = stream.getInt32() >>> 0;
        const YOsiz = stream.getInt32() >>> 0;
        stream.skip(16);
        const Csiz = stream.getUint16();
        return {
          width: Xsiz - XOsiz,
          height: Ysiz - YOsiz,
          bitsPerComponent: 8,
          componentsCount: Csiz
        };
      }
    }
    throw new JpxError("No size marker found in JPX stream");
  }
}

;// CONCATENATED MODULE: ./src/pdf.image_decoders.js




const pdfjsVersion = "4.3.136";
const pdfjsBuild = "0cec64437";

var __webpack_exports__Jbig2Error = __webpack_exports__.Jbig2Error;
var __webpack_exports__Jbig2Image = __webpack_exports__.Jbig2Image;
var __webpack_exports__JpegError = __webpack_exports__.JpegError;
var __webpack_exports__JpegImage = __webpack_exports__.JpegImage;
var __webpack_exports__JpxError = __webpack_exports__.JpxError;
var __webpack_exports__JpxImage = __webpack_exports__.JpxImage;
var __webpack_exports__VerbosityLevel = __webpack_exports__.VerbosityLevel;
var __webpack_exports__getVerbosityLevel = __webpack_exports__.getVerbosityLevel;
var __webpack_exports__setVerbosityLevel = __webpack_exports__.setVerbosityLevel;
export { __webpack_exports__Jbig2Error as Jbig2Error, __webpack_exports__Jbig2Image as Jbig2Image, __webpack_exports__JpegError as JpegError, __webpack_exports__JpegImage as JpegImage, __webpack_exports__JpxError as JpxError, __webpack_exports__JpxImage as JpxImage, __webpack_exports__VerbosityLevel as VerbosityLevel, __webpack_exports__getVerbosityLevel as getVerbosityLevel, __webpack_exports__setVerbosityLevel as setVerbosityLevel };

//# sourceMappingURL=pdf.image_decoders.mjs.map