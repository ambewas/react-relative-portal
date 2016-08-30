'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _exenv = require('exenv');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function isDescendant(parent, child) {
  if (parent.isEqualNode(child)) {
    return true;
  }

  var node = child.parentNode;
  while (node !== null) {
    if (node.isEqualNode(parent)) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal(props, context) {
    _classCallCheck(this, Portal);

    var _this = _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props, context));

    if (_exenv.canUseDOM) {
      _this.node = document.createElement('div');
      document.body.appendChild(_this.node);

      _this.handleOutClick = function (e) {
        if (typeof _this.props.onOutClick === 'function') {
          if (!isDescendant(_reactDom2.default.findDOMNode(_this.element), e.target)) {
            _this.props.onOutClick();
          }
        }
      };

      document.addEventListener('click', _this.handleOutClick);
    }
    return _this;
  }

  _createClass(Portal, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(_ref) {
      var onOutClick = _ref.onOutClick;

      var props = _objectWithoutProperties(_ref, ['onOutClick']);

      // eslint-disable-line
      this.element = _reactDom2.default.render(_react2.default.createElement('div', props), this.node);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (_exenv.canUseDOM) {
        document.removeEventListener('click', this.handleOutClick);
        document.body.removeChild(this.node);
      }
    }
  }, {
    key: 'handleOutClick',
    value: function handleOutClick() {
      if (this.props.onOutClick) {
        this.props.onOutClick();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(_react2.default.Component);

Portal.propTypes = {
  onOutClick: _react.PropTypes.func
};
exports.default = Portal;

