'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sample = require('lodash/sample');

var _sample2 = _interopRequireDefault(_sample);

require('./RandomButton.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Button that changes label on every click.
 */
var RandomButton = function (_Component) {
	_inherits(RandomButton, _Component);

	function RandomButton(props) {
		_classCallCheck(this, RandomButton);

		var _this = _possibleConstructorReturn(this, (RandomButton.__proto__ || Object.getPrototypeOf(RandomButton)).call(this));

		_this.state = {
			label: (0, _sample2.default)(props.variants)
		};
		return _this;
	}

	_createClass(RandomButton, [{
		key: 'handleClick',
		value: function handleClick() {
			this.setState({
				label: (0, _sample2.default)(this.props.variants)
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'button',
				{ className: 'random-button', onClick: this.handleClick.bind(this) },
				this.state.label
			);
		}
	}]);

	return RandomButton;
}(_react.Component);

RandomButton.propTypes = {
	/**
  * List of possible labels.
  */
	variants: _propTypes2.default.array.isRequired
};
exports.default = RandomButton;