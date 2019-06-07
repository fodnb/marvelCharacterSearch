webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@restart/context/mapContextToProps.js":
false,

/***/ "./node_modules/@restart/hooks/useCommittedRef.js":
false,

/***/ "./node_modules/@restart/hooks/useEventCallback.js":
false,

/***/ "./node_modules/dom-helpers/activeElement.js":
false,

/***/ "./node_modules/dom-helpers/class/addClass.js":
false,

/***/ "./node_modules/dom-helpers/class/hasClass.js":
false,

/***/ "./node_modules/dom-helpers/class/index.js":
false,

/***/ "./node_modules/dom-helpers/class/removeClass.js":
false,

/***/ "./node_modules/dom-helpers/events/filter.js":
false,

/***/ "./node_modules/dom-helpers/events/index.js":
false,

/***/ "./node_modules/dom-helpers/events/listen.js":
false,

/***/ "./node_modules/dom-helpers/events/off.js":
false,

/***/ "./node_modules/dom-helpers/events/on.js":
false,

/***/ "./node_modules/dom-helpers/ownerDocument.js":
false,

/***/ "./node_modules/dom-helpers/query/contains.js":
false,

/***/ "./node_modules/dom-helpers/query/isWindow.js":
false,

/***/ "./node_modules/dom-helpers/query/matches.js":
false,

/***/ "./node_modules/dom-helpers/query/querySelectorAll.js":
false,

/***/ "./node_modules/dom-helpers/style/getComputedStyle.js":
false,

/***/ "./node_modules/dom-helpers/style/index.js":
false,

/***/ "./node_modules/dom-helpers/style/removeStyle.js":
false,

/***/ "./node_modules/dom-helpers/transition/end.js":
false,

/***/ "./node_modules/dom-helpers/transition/index.js":
false,

/***/ "./node_modules/dom-helpers/transition/isTransform.js":
false,

/***/ "./node_modules/dom-helpers/transition/properties.js":
false,

/***/ "./node_modules/dom-helpers/util/camelize.js":
false,

/***/ "./node_modules/dom-helpers/util/camelizeStyle.js":
false,

/***/ "./node_modules/dom-helpers/util/hyphenate.js":
false,

/***/ "./node_modules/dom-helpers/util/hyphenateStyle.js":
false,

/***/ "./node_modules/dom-helpers/util/inDOM.js":
false,

/***/ "./node_modules/dom-helpers/util/scrollbarSize.js":
false,

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
false,

/***/ "./node_modules/fbjs/lib/warning.js":
false,

/***/ "./node_modules/gud/index.js":
false,

/***/ "./node_modules/invariant/browser.js":
false,

/***/ "./node_modules/object-assign/index.js":
false,

/***/ "./node_modules/popper.js/dist/esm/popper.js":
false,

/***/ "./node_modules/prop-types-extra/lib/all.js":
false,

/***/ "./node_modules/prop-types-extra/lib/componentOrElement.js":
false,

/***/ "./node_modules/prop-types-extra/lib/elementType.js":
false,

/***/ "./node_modules/prop-types-extra/lib/isRequiredForA11y.js":
false,

/***/ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-bootstrap/Jumbotron.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/Jumbotron.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/ThemeProvider.js");

var defaultProps = {
  fluid: false
};

var Jumbotron =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Jumbotron, _React$Component);

  function Jumbotron() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Jumbotron.prototype;

  _proto.render = function render() {
    var _classes;

    var _this$props = this.props,
        _this$props$as = _this$props.as,
        Component = _this$props$as === void 0 ? 'div' : _this$props$as,
        className = _this$props.className,
        fluid = _this$props.fluid,
        bsPrefix = _this$props.bsPrefix,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["as", "className", "fluid", "bsPrefix"]);
    var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, classes)
    }));
  };

  return Jumbotron;
}(_react.default.Component);

Jumbotron.defaultProps = defaultProps;

var _default = (0, _ThemeProvider.createBootstrapComponent)(Jumbotron, 'jumbotron');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/ThemeProvider.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/ThemeProvider.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useBootstrapPrefix = useBootstrapPrefix;
exports.createBootstrapComponent = createBootstrapComponent;
exports.default = exports.ThemeConsumer = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _forwardRef = _interopRequireDefault(__webpack_require__(/*! @restart/context/forwardRef */ "./node_modules/@restart/context/forwardRef.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ThemeContext = _react.default.createContext(new Map());

var Consumer = ThemeContext.Consumer,
    Provider = ThemeContext.Provider;
exports.ThemeConsumer = Consumer;

var ThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ThemeProvider, _React$Component);

  function ThemeProvider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.prefixes = new Map();
    Object.keys(_this.props.prefixes).forEach(function (key) {
      _this.prefixes.set(key, _this.props.prefixes[key]);
    });
    return _this;
  }

  var _proto = ThemeProvider.prototype;

  _proto.render = function render() {
    return _react.default.createElement(Provider, {
      value: this.prefixes
    }, this.props.children);
  };

  return ThemeProvider;
}(_react.default.Component);

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = (0, _react.useContext)(ThemeContext);
  return prefix || prefixes.get(defaultPrefix) || defaultPrefix;
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  return (0, _forwardRef.default)(function (_ref, ref) {
    var props = (0, _extends2.default)({}, _ref);
    props[forwardRefAs] = ref;
    var prefixes = (0, _react.useContext)(ThemeContext);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      // eslint-disable-next-line react/prop-types
      bsPrefix: props.bsPrefix || prefixes.get(prefix) || prefix
    }));
  }, {
    displayName: "Bootstrap(" + (Component.displayName || Component.name) + ")"
  });
}

var _default = ThemeProvider;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-bootstrap/es/AbstractNav.js":
false,

/***/ "./node_modules/react-bootstrap/es/AbstractNavItem.js":
false,

/***/ "./node_modules/react-bootstrap/es/Accordion.js":
false,

/***/ "./node_modules/react-bootstrap/es/AccordionCollapse.js":
false,

/***/ "./node_modules/react-bootstrap/es/AccordionContext.js":
false,

/***/ "./node_modules/react-bootstrap/es/AccordionToggle.js":
false,

/***/ "./node_modules/react-bootstrap/es/Alert.js":
false,

/***/ "./node_modules/react-bootstrap/es/Badge.js":
false,

/***/ "./node_modules/react-bootstrap/es/Breadcrumb.js":
false,

/***/ "./node_modules/react-bootstrap/es/BreadcrumbItem.js":
false,

/***/ "./node_modules/react-bootstrap/es/Button.js":
false,

/***/ "./node_modules/react-bootstrap/es/ButtonGroup.js":
false,

/***/ "./node_modules/react-bootstrap/es/ButtonToolbar.js":
false,

/***/ "./node_modules/react-bootstrap/es/Card.js":
false,

/***/ "./node_modules/react-bootstrap/es/CardColumns.js":
false,

/***/ "./node_modules/react-bootstrap/es/CardContext.js":
false,

/***/ "./node_modules/react-bootstrap/es/CardDeck.js":
false,

/***/ "./node_modules/react-bootstrap/es/CardGroup.js":
false,

/***/ "./node_modules/react-bootstrap/es/CardImg.js":
false,

/***/ "./node_modules/react-bootstrap/es/Carousel.js":
false,

/***/ "./node_modules/react-bootstrap/es/CarouselCaption.js":
false,

/***/ "./node_modules/react-bootstrap/es/CarouselItem.js":
false,

/***/ "./node_modules/react-bootstrap/es/CloseButton.js":
false,

/***/ "./node_modules/react-bootstrap/es/Col.js":
false,

/***/ "./node_modules/react-bootstrap/es/Collapse.js":
false,

/***/ "./node_modules/react-bootstrap/es/Container.js":
false,

/***/ "./node_modules/react-bootstrap/es/Dropdown.js":
false,

/***/ "./node_modules/react-bootstrap/es/DropdownButton.js":
false,

/***/ "./node_modules/react-bootstrap/es/DropdownItem.js":
false,

/***/ "./node_modules/react-bootstrap/es/DropdownMenu.js":
false,

/***/ "./node_modules/react-bootstrap/es/DropdownToggle.js":
false,

/***/ "./node_modules/react-bootstrap/es/Fade.js":
false,

/***/ "./node_modules/react-bootstrap/es/Feedback.js":
false,

/***/ "./node_modules/react-bootstrap/es/Figure.js":
false,

/***/ "./node_modules/react-bootstrap/es/FigureCaption.js":
false,

/***/ "./node_modules/react-bootstrap/es/FigureImage.js":
false,

/***/ "./node_modules/react-bootstrap/es/Form.js":
false,

/***/ "./node_modules/react-bootstrap/es/FormCheck.js":
false,

/***/ "./node_modules/react-bootstrap/es/FormCheckInput.js":
false,

/***/ "./node_modules/react-bootstrap/es/FormCheckLabel.js":
false,

/***/ "./node_modules/react-bootstrap/es/FormContext.js":
false,

/***/ "./node_modules/react-bootstrap/es/FormControl.js":
false,

/***/ "./node_modules/react-bootstrap/es/FormGroup.js":
false,

/***/ "./node_modules/react-bootstrap/es/FormLabel.js":
false,

/***/ "./node_modules/react-bootstrap/es/FormText.js":
false,

/***/ "./node_modules/react-bootstrap/es/Image.js":
false,

/***/ "./node_modules/react-bootstrap/es/InputGroup.js":
false,

/***/ "./node_modules/react-bootstrap/es/Jumbotron.js":
false,

/***/ "./node_modules/react-bootstrap/es/ListGroup.js":
false,

/***/ "./node_modules/react-bootstrap/es/ListGroupItem.js":
false,

/***/ "./node_modules/react-bootstrap/es/Media.js":
false,

/***/ "./node_modules/react-bootstrap/es/Modal.js":
false,

/***/ "./node_modules/react-bootstrap/es/ModalBody.js":
false,

/***/ "./node_modules/react-bootstrap/es/ModalContext.js":
false,

/***/ "./node_modules/react-bootstrap/es/ModalDialog.js":
false,

/***/ "./node_modules/react-bootstrap/es/ModalFooter.js":
false,

/***/ "./node_modules/react-bootstrap/es/ModalHeader.js":
false,

/***/ "./node_modules/react-bootstrap/es/ModalTitle.js":
false,

/***/ "./node_modules/react-bootstrap/es/Nav.js":
false,

/***/ "./node_modules/react-bootstrap/es/NavContext.js":
false,

/***/ "./node_modules/react-bootstrap/es/NavDropdown.js":
false,

/***/ "./node_modules/react-bootstrap/es/NavItem.js":
false,

/***/ "./node_modules/react-bootstrap/es/NavLink.js":
false,

/***/ "./node_modules/react-bootstrap/es/Navbar.js":
false,

/***/ "./node_modules/react-bootstrap/es/NavbarBrand.js":
false,

/***/ "./node_modules/react-bootstrap/es/NavbarCollapse.js":
false,

/***/ "./node_modules/react-bootstrap/es/NavbarContext.js":
false,

/***/ "./node_modules/react-bootstrap/es/NavbarToggle.js":
false,

/***/ "./node_modules/react-bootstrap/es/Overlay.js":
false,

/***/ "./node_modules/react-bootstrap/es/OverlayTrigger.js":
false,

/***/ "./node_modules/react-bootstrap/es/PageItem.js":
false,

/***/ "./node_modules/react-bootstrap/es/Pagination.js":
false,

/***/ "./node_modules/react-bootstrap/es/Popover.js":
false,

/***/ "./node_modules/react-bootstrap/es/ProgressBar.js":
false,

/***/ "./node_modules/react-bootstrap/es/ResponsiveEmbed.js":
false,

/***/ "./node_modules/react-bootstrap/es/Row.js":
false,

/***/ "./node_modules/react-bootstrap/es/SafeAnchor.js":
false,

/***/ "./node_modules/react-bootstrap/es/SelectableContext.js":
false,

/***/ "./node_modules/react-bootstrap/es/Spinner.js":
false,

/***/ "./node_modules/react-bootstrap/es/SplitButton.js":
false,

/***/ "./node_modules/react-bootstrap/es/Tab.js":
false,

/***/ "./node_modules/react-bootstrap/es/TabContainer.js":
false,

/***/ "./node_modules/react-bootstrap/es/TabContent.js":
false,

/***/ "./node_modules/react-bootstrap/es/TabContext.js":
false,

/***/ "./node_modules/react-bootstrap/es/TabPane.js":
false,

/***/ "./node_modules/react-bootstrap/es/Table.js":
false,

/***/ "./node_modules/react-bootstrap/es/Tabs.js":
false,

/***/ "./node_modules/react-bootstrap/es/ThemeProvider.js":
false,

/***/ "./node_modules/react-bootstrap/es/Toast.js":
false,

/***/ "./node_modules/react-bootstrap/es/ToastBody.js":
false,

/***/ "./node_modules/react-bootstrap/es/ToastContext.js":
false,

/***/ "./node_modules/react-bootstrap/es/ToastHeader.js":
false,

/***/ "./node_modules/react-bootstrap/es/ToggleButton.js":
false,

/***/ "./node_modules/react-bootstrap/es/ToggleButtonGroup.js":
false,

/***/ "./node_modules/react-bootstrap/es/Tooltip.js":
false,

/***/ "./node_modules/react-bootstrap/es/index.js":
false,

/***/ "./node_modules/react-bootstrap/es/utils/BootstrapModalManager.js":
false,

/***/ "./node_modules/react-bootstrap/es/utils/ElementChildren.js":
false,

/***/ "./node_modules/react-bootstrap/es/utils/createChainedFunction.js":
false,

/***/ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js":
false,

/***/ "./node_modules/react-bootstrap/es/utils/divWithClassName.js":
false,

/***/ "./node_modules/react-bootstrap/es/utils/triggerBrowserReflow.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/extends.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/extends.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/prop-types/index.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-context-toolbox/forwardRef.js":
false,

/***/ "./node_modules/react-context-toolbox/mapContextToProps.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/react-overlays/Dropdown.js":
false,

/***/ "./node_modules/react-overlays/DropdownContext.js":
false,

/***/ "./node_modules/react-overlays/DropdownMenu.js":
false,

/***/ "./node_modules/react-overlays/DropdownToggle.js":
false,

/***/ "./node_modules/react-overlays/Modal.js":
false,

/***/ "./node_modules/react-overlays/ModalManager.js":
false,

/***/ "./node_modules/react-overlays/Overlay.js":
false,

/***/ "./node_modules/react-overlays/Portal.js":
false,

/***/ "./node_modules/react-overlays/RootCloseWrapper.js":
false,

/***/ "./node_modules/react-overlays/WaitForContainer.js":
false,

/***/ "./node_modules/react-overlays/utils/getContainer.js":
false,

/***/ "./node_modules/react-overlays/utils/isOverflowing.js":
false,

/***/ "./node_modules/react-overlays/utils/manageAriaHidden.js":
false,

/***/ "./node_modules/react-overlays/utils/ownerDocument.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Manager.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Popper.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Reference.js":
false,

/***/ "./node_modules/react-popper/lib/esm/index.js":
false,

/***/ "./node_modules/react-popper/lib/esm/utils.js":
false,

/***/ "./node_modules/react-popper/node_modules/create-react-context/lib/implementation.js":
false,

/***/ "./node_modules/react-popper/node_modules/create-react-context/lib/index.js":
false,

/***/ "./node_modules/react-transition-group/esm/Transition.js":
false,

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
false,

/***/ "./node_modules/react-transition-group/esm/config.js":
false,

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
false,

/***/ "./node_modules/uncontrollable/hook.js":
false,

/***/ "./node_modules/uncontrollable/index.js":
false,

/***/ "./node_modules/uncontrollable/utils.js":
false,

/***/ "./node_modules/warning/warning.js":
false,

/***/ "./pages/Header.js":
/*!*************************!*\
  !*** ./pages/Header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.css */ "./styles/styles.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Jumbotron */ "./node_modules/react-bootstrap/Jumbotron.js");
/* harmony import */ var react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\fodnb\\Desktop\\DansProjects\\marvelCharacterSearch\\pages\\Header.js";




var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Marvel");
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.c8ec10c37e849341982b.hot-update.js.map