"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Button that counts how many times it was pressed and exposes a `@public` method to reset itself.
 */
var CounterButton = function (_Component) {
	_inherits(CounterButton, _Component);

	function CounterButton() {
		_classCallCheck(this, CounterButton);

		var _this = _possibleConstructorReturn(this, (CounterButton.__proto__ || Object.getPrototypeOf(CounterButton)).call(this));

		_this.state = {
			value: 0
		};
		return _this;
	}

	/**
  * Sets the counter to a particular value.
  *
  * @public
  * @version 1.0.5
  * @param {Number} newValue New value for the counter
  * @returns {string} Test
  */


	_createClass(CounterButton, [{
		key: "set",
		value: function set(newValue) {
			this.setState({
				value: parseInt(newValue, 10)
			});
		}

		/**
   * Increments the counter. This method is not marked @public and is not visible in the styleguide.
   */

	}, {
		key: "increment",
		value: function increment() {
			this.setState({
				value: this.state.value + 1
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"button",
				{ className: "button", onClick: this.increment.bind(this) },
				this.state.value
			);
		}
	}]);

	return CounterButton;
}(_react.Component);

exports.default = CounterButton;