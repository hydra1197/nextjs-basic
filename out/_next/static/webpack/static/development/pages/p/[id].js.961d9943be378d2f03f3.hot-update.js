webpackHotUpdate("static/development/pages/p/[id].js",{

/***/ "./pages/p/[id].js":
/*!*************************!*\
  !*** ./pages/p/[id].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Meta */ "./components/Meta.js");

var _jsxFileName = "/Users/ylinkee-pc/Desktop/nextjs-basic/pages/p/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Post = function Post(_ref) {
  var show = _ref.show,
      seo = _ref.seo;
  console.log(seo);
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: seo.metaTitle,
    description: seo.metaDescription,
    image: seo.metaImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, show.name), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, show.summary.replace(/<[/]?[pb]>/g, '')), show.image ? __jsx("img", {
    src: show.image.medium,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }) : null);
};

Post.getInitialProps = function _callee(context) {
  var id, res, show, name, summary, image;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = context.query.id;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("https://api.tvmaze.com/shows/".concat(id)));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          show = _context.sent;
          console.log("Fetched show: ".concat(show.name));
          name = show.name, summary = show.summary, image = show.image;
          return _context.abrupt("return", {
            show: show,
            seo: {
              metaTitle: name,
              metaDescription: summary,
              metaImage: image.medium
            }
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.961d9943be378d2f03f3.hot-update.js.map