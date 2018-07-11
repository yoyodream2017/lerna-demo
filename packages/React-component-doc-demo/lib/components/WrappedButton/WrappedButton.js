'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A button wrapped by a Decorator/Enhancer
 *
 * @version 1.0.1
 * @author [Jeremy Gayed](https://github.com/tizmagik)
 * @deprecated Use the [only true button](#button) instead
 */
var WrappedButton = function WrappedButton(_ref) {
	var color = _ref.color,
	    size = _ref.size,
	    children = _ref.children;

	var styles = {
		color: color,
		fontSize: WrappedButton.sizes[size]
	};

	return _react2.default.createElement(
		'button',
		{ className: 'wrapped-button', style: styles },
		children
	);
};
WrappedButton.propTypes = {
	/**
  * Button label.
  */
	children: _propTypes2.default.string.isRequired,
	/**
  * The color for the button
  *
  * @see Check [Wikipedia](https://en.wikipedia.org/wiki/Web_colors#HTML_color_names) for a list of color names
  */
	color: _propTypes2.default.string,
	/**
  * The size of the Button
  *
  * @since Version 1.0.1
  */
	size: _propTypes2.default.oneOf(['small', 'normal', 'large']),
	/**
  * The width of the button
  *
  * @deprecated Do not use! Use size instead!
  */
	width: _propTypes2.default.number,
	/**
  * Gets called when the user clicks on the button
  *
  * @param { SyntheticEvent } event The react `SyntheticEvent`
  * @return { SyntheticEvent } The `onClick` `SyntheticEvent`
  */
	onClick: _propTypes2.default.func,
	/**
  * A prop that should not be visible in the doc.
  * @ignore
  */
	ignoredProp: _propTypes2.default.bool
};
WrappedButton.defaultProps = {
	color: '#333',
	size: 'normal'
};
WrappedButton.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px'
};

var Decorator = function Decorator(Composed) {
	return function (_Component) {
		_inherits(MyHOC, _Component);

		function MyHOC() {
			_classCallCheck(this, MyHOC);

			return _possibleConstructorReturn(this, (MyHOC.__proto__ || Object.getPrototypeOf(MyHOC)).apply(this, arguments));
		}

		_createClass(MyHOC, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(Composed, this.props);
			}
		}]);

		return MyHOC;
	}(_react.Component);
};

exports.default = Decorator(WrappedButton);