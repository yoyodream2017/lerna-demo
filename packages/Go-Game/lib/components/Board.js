'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Square = require('./Square');

var _Square2 = _interopRequireDefault(_Square);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  boardSize: _propTypes.number,
  onClick: _propTypes.func,
  squares: _propTypes.array
};

var Board = function (_Component) {
  _inherits(Board, _Component);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
  }

  _createClass(Board, [{
    key: 'renderSquare',
    value: function renderSquare(i, j) {
      var _this2 = this;

      return _react2.default.createElement(_Square2.default, {
        value: this.props.squares[i][j],
        onClick: function onClick() {
          return _this2.props.onClick(i, j);
        }
      });
    }
  }, {
    key: 'renderRow',
    value: function renderRow(i) {
      var _this3 = this;

      var boardSize = this.props.boardSize;
      var boardRow = Array.from({ length: boardSize }).map(function (item, j) {
        return _react2.default.createElement(
          'span',
          { key: 'square' + i + j },
          _this3.renderSquare(i, j)
        );
      });

      return boardRow;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var boardSize = this.props.boardSize;
      var board = new Array(boardSize).fill(null).map(function () {
        return new Array(boardSize);
      }); // add fill to use array method map,forEach etc.

      board.forEach(function (arr, i) {
        arr.push(_react2.default.createElement(
          'div',
          { className: 'board-row', key: 'square' + i },
          _this4.renderRow(i)
        ));
      });

      return _react2.default.createElement(
        'div',
        null,
        board
      );
    }
  }]);

  return Board;
}(_react.Component);

Board.propTypes = propTypes;

exports.default = Board;