'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Game2 = require('./Game');

var _Game3 = _interopRequireDefault(_Game2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToeGame = function (_Game) {
  _inherits(ToeGame, _Game);

  function ToeGame(props) {
    _classCallCheck(this, ToeGame);

    var _this = _possibleConstructorReturn(this, (ToeGame.__proto__ || Object.getPrototypeOf(ToeGame)).call(this, props));

    _this.boardSize = 3;
    _this.lines = [[[-2, -2], [-1, -1]], [[-1, -1], [1, 1]], [[1, 1], [2, 2]], [[-2, 0], [-1, 0]], [[-1, 0], [1, 0]], [[1, 0], [2, 0]], [[0, -2], [0, -1]], [[0, -1], [0, 1]], [[0, 1], [0, 2]], [[-2, 2], [-1, 1]], [[-1, 1], [1, -1]], [[1, -1], [2, -2]]];
    return _this;
  }

  _createClass(ToeGame, [{
    key: 'calculateWinner',
    value: function calculateWinner(squares, i, j) {
      if (i === undefined) {
        return null;
      }

      var check = squares[i][j];
      var lines = this.lines;
      for (var k = 0; k < lines.length; k++) {
        var _lines$k = _slicedToArray(lines[k], 2),
            a = _lines$k[0],
            b = _lines$k[1];

        if (!squares[i + a[0]] || !squares[i + b[0]]) {
          continue;
        }
        if (check === squares[i + a[0]][j + a[1]] && check === squares[i + b[0]][j + b[1]]) {
          return check;
        }
      }

      return null;
    }
  }]);

  return ToeGame;
}(_Game3.default);

exports.default = ToeGame;