"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compare = compare;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function compare(value1, value2) {
  var cmpFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (a, b) {
    return a === b;
  };
  var firstConstructor = value1.constructor.name;
  var secondConstructor = value2.constructor.name;
  if (firstConstructor !== secondConstructor) return cmpFn(value1, value2);
  var len1 = null;
  var len2 = null;

  switch (firstConstructor) {
    case "Map":
      var map1 = value1;
      var map2 = value1;
      len1 = map1.size;
      len2 = map2.size;
      if (len1 !== len2) return false;
      var arrayMap1 = Array.from(value1.entries());
      var arrayMap2 = Array.from(value2.entries());
      return compare(arrayMap1, arrayMap2, cmpFn);

    case "Set":
      var set1 = value1;
      var set2 = value1;
      len1 = set1.size;
      len2 = set2.size;
      if (len1 !== len2) return false;

      var _iterator = _createForOfIteratorHelper(set1),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var x = _step.value;

          var _iterator2 = _createForOfIteratorHelper(set2),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var y = _step2.value;

              if (!compare(x, y, cmpFn)) {
                return false;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      break;

    case "Array":
      var array1 = value1;
      var array2 = value2;
      len1 = array1.length;
      len2 = array2.length;
      if (len1 !== len2) return cmpFn(len1, len2);

      for (var i = 0; i < ((_len = len1) !== null && _len !== void 0 ? _len : 0); i++) {
        var _len;

        if (!compare(array1[i], array2[i], cmpFn)) {
          return cmpFn(array1[i], array2[i]);
        }
      }

      break;

    case "Object":
      var obj1 = value1;
      var obj2 = value2;
      var objArray1 = Object.entries(obj1);
      var objArray2 = Object.entries(obj2);
      len1 = objArray1.length;
      len2 = objArray2.length;
      if (len1 !== len2) return cmpFn(len1, len2);
      return compare(objArray1, objArray2, cmpFn);

    default:
      return cmpFn(value1.toString(), value2.toString());
  }

  return true;
}

console.log(compare({
  1: 1
}, {
  1: 1
}));