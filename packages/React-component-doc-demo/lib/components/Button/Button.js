'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Button;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Button.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The only true button all around the world
 */
function Button(_ref) {
	var color = _ref.color,
	    size = _ref.size,
	    onClick = _ref.onClick,
	    disabled = _ref.disabled,
	    children = _ref.children;

	var styles = {
		color: color,
		fontSize: Button.sizes[size]
	};

	return _react2.default.createElement(
		'button',
		{ className: 'button', style: styles, onClick: onClick, disabled: disabled },
		children
	);
}
Button.defaultProps = {
	color: '#333',
	size: 'normal',
	onClick: function onClick(event) {
		// eslint-disable-next-line no-console
		console.log('You have clicked me!', event.target);
	}
};
Button.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px'
};