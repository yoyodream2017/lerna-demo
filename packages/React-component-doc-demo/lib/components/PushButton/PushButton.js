'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = PushButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./PushButton.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An example-less button.
 */
function PushButton(_ref) {
	var color = _ref.color,
	    size = _ref.size,
	    children = _ref.children;

	var styles = {
		color: color,
		fontSize: PushButton.sizes[size]
	};

	return _react2.default.createElement(
		'button',
		{ className: 'push-button', style: styles },
		children
	);
}
PushButton.propTypes = {
	/**
  * PushButton label.
  */
	children: _propTypes2.default.string.isRequired,
	color: _propTypes2.default.string,
	size: _propTypes2.default.oneOf(['small', 'normal', 'large'])
};
PushButton.defaultProps = {
	color: '#333',
	size: 'normal'
};
PushButton.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px'
};