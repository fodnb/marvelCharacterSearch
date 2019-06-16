webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/Character.js":
/*!****************************!*\
  !*** ./pages/Character.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/styles.css */ "./styles/styles.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var js_md5__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! js-md5 */ "./node_modules/js-md5/src/md5.js");
/* harmony import */ var js_md5__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(js_md5__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _CharacterPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CharacterPage */ "./pages/CharacterPage.js");










var _jsxFileName = "C:\\Users\\fodnb\\Desktop\\DansProjects\\marvelCharacterSearch\\pages\\Character.js";






var publickey = "81c6ebd34a68f8a15e0f05333f23d01e";
var privatekey = "598a13c5054a75f151f34eb5923337659f0f9444";

var timestamp = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_9___default()();

var limit = 100;
js_md5__WEBPACK_IMPORTED_MODULE_14___default()(timestamp + privatekey + publickey);
var hash = js_md5__WEBPACK_IMPORTED_MODULE_14___default.a.create();
hash.update(timestamp + privatekey + publickey);
hash.hex();

var Character =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Character, _React$Component);

  function Character(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Character);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Character).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getInitialProps",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var hero, url, res, data, er, myHero;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(this.state.value);
              hero = this.state.value;
              url = "https://gateway.marvel.com/v1/public/characters?ts=" + timestamp + "&apikey=" + publickey + "&hash=" + hash + "&limit=" + limit + "&nameStartsWith=" + hero;
              _context.next = 5;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()(url);

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              data = _context.sent;
              er = false;

              if (data.code === 409 || data.data.total === 0) {
                er = true;
              }

              ;
              console.log(data.code); // console.log(data.data.results);

              console.log(data); // console.log(data.data.count)

              if (!er) {
                myHero = {
                  name: data.data.results[0].name,
                  img: "".concat(data.data.results[0].thumbnail.path, ".").concat(data.data.results[0].thumbnail.extension),
                  description: data.data.results[0].description
                };
                this.setState({
                  myHero: myHero,
                  error: ""
                });
                console.log(data.data.results[0].name);
              } else {
                this.setState({
                  error: "No results found in the Marvel Database.  Please try another Marvel Hero."
                });
              }

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _this.state = {
      myHero: null,
      value: '',
      error: ''
    };
    _this.getInitialProps = _this.getInitialProps.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.clearHero = _this.clearHero.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Character, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      console.log(this.state.value);
      this.getInitialProps();
      e.preventDefault();
      this.setState({
        value: ""
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      });
      console.log('handleChange');
    }
  }, {
    key: "clearHero",
    value: function clearHero() {
      console.log("clear");
      this.setState({
        myHero: null
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-1246223582" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, this.state.myHero ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_CharacterPage__WEBPACK_IMPORTED_MODULE_15__["default"], {
        img: this.state.myHero.img,
        name: this.state.myHero.name,
        description: this.state.myHero.description,
        clear: this.clearHero,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-1246223582",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
        name: "heroName",
        value: this.state.value,
        type: "text",
        autoComplete: "off",
        onChange: this.handleChange,
        autoFocus: true,
        className: "jsx-1246223582",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
        type: "submit",
        className: "jsx-1246223582",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), this.state.error ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
        className: "jsx-1246223582" + " " + "error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, this.state.error) : "", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "1246223582",
        __self: this
      }, "form.jsx-1246223582{margin-top:200px;text-align:center;}input.jsx-1246223582{border-radius:4px;font-size:24px;}input.jsx-1246223582:first-child{background:white;margin-right:10px;color:black;text-align:left;font-weight:700;}.center.jsx-1246223582{text-align:center;}input.jsx-1246223582:nth-child(2){width:8em;padding-top:4px;padding-bottom:4px;border:2px solid red;background:red;color:white;font-weight:700;}input.jsx-1246223582:focus{border:none;outline:none;}.error.jsx-1246223582{margin-top:25px;font-size:24px;color:red;text-shadow:2px 2px 2px maroon;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZm9kbmJcXERlc2t0b3BcXERhbnNQcm9qZWN0c1xcbWFydmVsQ2hhcmFjdGVyU2VhcmNoXFxwYWdlc1xcQ2hhcmFjdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtHNEIsQUFJMEMsQUFJQyxBQUtMLEFBT0MsQUFJUixBQVVFLEFBS1EsVUFkSixFQVVILElBS00sQ0FuQ0csQUFTSixDQUxDLEFBWW5CLE9BZUEsQ0FWbUIsS0FlTCxFQS9CZCxFQUpBLEFBU1ksTUEyQnVCLElBZmQsRUFYTCxnQkFDQSxHQVdELE1BZU8sT0F6QnRCLEVBV1ksU0FlZCxHQWRrQixnQkFDaEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxmb2RuYlxcRGVza3RvcFxcRGFuc1Byb2plY3RzXFxtYXJ2ZWxDaGFyYWN0ZXJTZWFyY2hcXHBhZ2VzXFxDaGFyYWN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBtZDUgZnJvbSAnanMtbWQ1JztcclxuaW1wb3J0IENoYXJhY3RlclBhZ2UgZnJvbSAnLi9DaGFyYWN0ZXJQYWdlJztcclxuXHJcbmNvbnN0IHB1YmxpY2tleSA9IFwiODFjNmViZDM0YTY4ZjhhMTVlMGYwNTMzM2YyM2QwMWVcIjtcclxuY29uc3QgcHJpdmF0ZWtleSA9IFwiNTk4YTEzYzUwNTRhNzVmMTUxZjM0ZWI1OTIzMzM3NjU5ZjBmOTQ0NFwiXHJcbmxldCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5sZXQgbGltaXQgPSAxMDA7XHJcblxyXG5tZDUodGltZXN0YW1wICsgcHJpdmF0ZWtleSArIHB1YmxpY2tleSk7XHJcbnZhciBoYXNoID0gbWQ1LmNyZWF0ZSgpO1xyXG5oYXNoLnVwZGF0ZSh0aW1lc3RhbXAgKyBwcml2YXRla2V5ICsgcHVibGlja2V5KTtcclxuaGFzaC5oZXgoKTtcclxuXHJcbmNsYXNzIENoYXJhY3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBteUhlcm86IG51bGwsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICAgICAgZXJyb3I6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzID0gdGhpcy5nZXRJbml0aWFsUHJvcHMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJIZXJvID0gdGhpcy5jbGVhckhlcm8uYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgICAgIGxldCBoZXJvID0gdGhpcy5zdGF0ZS52YWx1ZTtcclxuICAgICAgICBsZXQgdXJsID0gXCJodHRwczovL2dhdGV3YXkubWFydmVsLmNvbS92MS9wdWJsaWMvY2hhcmFjdGVycz90cz1cIiArIHRpbWVzdGFtcCArIFwiJmFwaWtleT1cIiArIHB1YmxpY2tleSArIFwiJmhhc2g9XCIgKyBoYXNoICsgXCImbGltaXQ9XCIgKyBsaW1pdCArIFwiJm5hbWVTdGFydHNXaXRoPVwiICsgaGVybztcclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgbGV0IGVyID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGRhdGEuY29kZSA9PT0gNDA5IHx8IGRhdGEuZGF0YS50b3RhbCA9PT0gMCkge1xyXG4gICAgICAgICAgICBlciA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmNvZGUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuZGF0YS5yZXN1bHRzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLmRhdGEuY291bnQpXHJcbiAgICAgICAgaWYgKCFlcikge1xyXG4gICAgICAgICAgICBsZXQgbXlIZXJvID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogZGF0YS5kYXRhLnJlc3VsdHNbMF0ubmFtZSxcclxuICAgICAgICAgICAgICAgIGltZzogYCR7ZGF0YS5kYXRhLnJlc3VsdHNbMF0udGh1bWJuYWlsLnBhdGh9LiR7ZGF0YS5kYXRhLnJlc3VsdHNbMF0udGh1bWJuYWlsLmV4dGVuc2lvbn1gLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGF0YS5yZXN1bHRzWzBdLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG15SGVybywgZXJyb3I6IFwiXCIgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YS5yZXN1bHRzWzBdLm5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogXCJObyByZXN1bHRzIGZvdW5kIGluIHRoZSBNYXJ2ZWwgRGF0YWJhc2UuICBQbGVhc2UgdHJ5IGFub3RoZXIgTWFydmVsIEhlcm8uXCIgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcygpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IFwiXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVDaGFuZ2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckhlcm8oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGVhclwiKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBteUhlcm86IG51bGwgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5teUhlcm8gP1xyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZz17dGhpcy5zdGF0ZS5teUhlcm8uaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLm15SGVyby5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5teUhlcm8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyPXt0aGlzLmNsZWFySGVyb31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImhlcm9OYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBhdXRvRm9jdXM9e3RydWV9Lz5cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciA/IDxwIGNsYXNzTmFtZT1cImVycm9yXCI+e3RoaXMuc3RhdGUuZXJyb3J9PC9wPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjazsgICBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmVycm9yIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggbWFyb29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\fodnb\\Desktop\\DansProjects\\marvelCharacterSearch\\pages\\Character.js */"));
    }
  }]);

  return Character;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Character);

/***/ })

})
//# sourceMappingURL=index.js.d908adf94fb56597857b.hot-update.js.map