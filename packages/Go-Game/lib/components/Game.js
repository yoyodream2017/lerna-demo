'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Board = require('./Board');

var _Board2 = _interopRequireDefault(_Board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Component) {
  _inherits(Game, _Component);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    _this.boardSize = 13;
    _this.gameOver = false;
    _this.lines = [[[-4, -4], [-3, -3], [-2, -2], [-1, -1]], [[-3, -3], [-2, -2], [-1, -1], [1, 1]], [[-2, -2], [-1, -1], [1, 1], [2, 2]], [[-1, -1], [1, 1], [2, 2], [3, 3]], [[1, 1], [2, 2], [3, 3], [4, 4]], [[-4, 0], [-3, 0], [-2, 0], [-1, 0]], [[-3, 0], [-2, 0], [-1, 0], [1, 0]], [[-2, 0], [-1, 0], [1, 0], [2, 0]], [[-1, 0], [1, 0], [2, 0], [3, 0]], [[1, 0], [2, 0], [3, 0], [4, 0]], [[0, -4], [0, -3], [0, -2], [0, -1]], [[0, -3], [0, -2], [0, -1], [0, 1]], [[0, -2], [0, -1], [0, 1], [0, 2]], [[0, -1], [0, 1], [0, 2], [0, 3]], [[0, 1], [0, 2], [0, 3], [0, 4]], [[-4, 4], [-3, 3], [-2, 2], [-1, 1]], [[-3, 3], [-2, 2], [-1, 1], [1, -1]], [[-2, 2], [-1, 1], [1, -1], [2, -2]], [[-1, 1], [1, -1], [2, -2], [3, -3]], [[1, -1], [2, -2], [3, -3], [4, -4]]];
    _this.state = {
      history: [{
        squares: Array.from({ length: _this.boardSize }).map(function () {
          return new Array(_this.boardSize).fill(null);
        }),
        position: []
      }],
      stepNumber: 0,
      xIsNext: true
    };
    return _this;
  }

  _createClass(Game, [{
    key: 'calculateWinner',
    value: function calculateWinner(squares, i, j) {
      if (i === undefined) {
        return null;
      }

      var check = squares[i][j];
      var lines = this.lines;
      for (var k = 0; k < lines.length; k++) {
        var _lines$k = _slicedToArray(lines[k], 4),
            a = _lines$k[0],
            b = _lines$k[1],
            c = _lines$k[2],
            d = _lines$k[3];

        if (!squares[i + a[0]] || !squares[i + b[0]] || !squares[i + c[0]] || !squares[i + d[0]]) {
          continue;
        }
        if (check === squares[i + a[0]][j + a[1]] && check === squares[i + b[0]][j + b[1]] && check === squares[i + c[0]][j + c[1]] && check === squares[i + d[0]][j + d[1]]) {
          return check;
        }
      }

      return null;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(i, j) {
      var history = this.state.history.slice(0, this.state.stepNumber + 1);
      var current = history[history.length - 1];
      var squares = JSON.parse(JSON.stringify(current.squares));
      var position = [i, j];

      if (squares[i][j] || this.gameOver) {
        return;
      }
      squares[i][j] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
          position: position
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  }, {
    key: 'jumpTo',
    value: function jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: step % 2 === 0
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var history = this.state.history;
      var stepNumber = this.state.stepNumber;
      var current = history[stepNumber];
      var winner = this.calculateWinner.apply(this, [current.squares].concat(_toConsumableArray(current.position)));

      if (winner && !this.gameOver) {
        this.gameOver = true;
      }

      var moves = history.map(function (step, move) {
        var desc = move ? 'Go to move #' + move : 'Go to game start';
        return _react2.default.createElement(
          'li',
          { key: move },
          _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                _this2.jumpTo(move);

                if (stepNumber > move) {
                  _this2.gameOver = false;
                }
              } },
            desc
          )
        );
      });

      var status = void 0;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { href: '/' },
            'Home'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'game' },
          _react2.default.createElement(
            'div',
            { className: 'game-board' },
            _react2.default.createElement(_Board2.default, {
              squares: current.squares,
              boardSize: this.boardSize,
              onClick: function onClick(i, j) {
                return _this2.handleClick(i, j);
              }
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'game-info' },
            _react2.default.createElement(
              'div',
              null,
              status
            ),
            _react2.default.createElement(
              'ol',
              null,
              moves
            )
          )
        )
      );
    }
  }]);

  return Game;
}(_react.Component);

exports.default = Game;