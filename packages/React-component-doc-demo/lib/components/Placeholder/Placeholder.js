'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Placeholder.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Image placeholders.
 */
var Placeholder = function (_Component) {
	_inherits(Placeholder, _Component);

	function Placeholder() {
		_classCallCheck(this, Placeholder);

		return _possibleConstructorReturn(this, (Placeholder.__proto__ || Object.getPrototypeOf(Placeholder)).apply(this, arguments));
	}

	_createClass(Placeholder, [{
		key: 'getImageUrl',
		value: function getImageUrl() {
			var _props = this.props,
			    type = _props.type,
			    width = _props.width,
			    height = _props.height;

			var types = {
				animal: 'http://placeimg.com/' + width + '/' + height + '/animals',
				bacon: 'http://baconmockup.com/' + width + '/' + height,
				bear: 'http://www.placebear.com/' + width + '/' + height,
				beard: 'http://placebeard.it/' + width + '/' + height,
				cat: 'http://lorempixel.com/' + width + '/' + height + '/cats',
				city: 'http://lorempixel.com/' + width + '/' + height + '/city',
				food: 'http://lorempixel.com/' + width + '/' + height + '/food',
				nature: 'http://lorempixel.com/' + width + '/' + height + '/nature',
				people: 'http://lorempixel.com/' + width + '/' + height + '/people'
			};
			return types[type];
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    width = _props2.width,
			    height = _props2.height;

			return _react2.default.createElement('img', { className: 'placeholder', src: this.getImageUrl(), width: width, height: height, alt: '' });
		}
	}]);

	return Placeholder;
}(_react.Component);

Placeholder.propTypes = {
	type: _propTypes2.default.oneOf(['animal', 'bacon', 'beard', 'bear', 'cat', 'food', 'city', 'nature', 'people']),
	width: _propTypes2.default.number,
	height: _propTypes2.default.number
};
Placeholder.defaultProps = {
	type: 'animal',
	width: 150,
	height: 150
};
exports.default = Placeholder;