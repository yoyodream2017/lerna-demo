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

var GoGame = function (_Component) {
  _inherits(GoGame, _Component);

  function GoGame(props) {
    _classCallCheck(this, GoGame);

    var _this = _possibleConstructorReturn(this, (GoGame.__proto__ || Object.getPrototypeOf(GoGame)).call(this, props));

    _this.boardSize = 19;
    _this.state = {
      history: [{
        squares: Array.from({ length: _this.boardSize }).map(function () {
          return new Array(_this.boardSize).fill(null);
        }),
        block: [],
        capturedSquare: [],
        position: [],
        forbid: false
      }],
      stepNumber: 0,
      xIsNext: true
    };
    return _this;
  }

  _createClass(GoGame, [{
    key: 'calculateWinner',
    value: function calculateWinner() {
      return null;
    }

    // Clicking, say ‘X’, set new block number, use block number array in history to store it.

    // Check all states in four neighbors, set all X with same block number to the new block number.

    // Check the block number of 'O' in four directions, record the block number. Check all squares with same block number,for four directions for each square, if no space, remove them all.

    // State: three type of states: X, O, space. will not set state for border, just judge when close to border. 

    // Forbiding the suiside and ko case. suiside case, just do remove first and check death for the new block. if no block removed and death true for the new block, forbidden. 

    // Ko case: the position is the only one last killed and killed the last position only.

  }, {
    key: 'calculateCapture',
    value: function calculateCapture(i, j, squares, block, capturedSquare, position, forbid) {
      var currentState = this.currentState();
      var addedArr = []; // define the new added array for block
      var addNum = []; // define the block num for same state
      var subNum = []; // define the block num for different state

      addedArr.push([i, j]);

      if (j !== 0) {
        var left = squares[i][j - 1];
        var blockNumberLeft = this.checkBlockNumber(i, j - 1, block);

        if (currentState === left) {
          this.checkAdd(block, blockNumberLeft, addNum, addedArr);
        } else if (left !== null) {
          this.checkSub(block, blockNumberLeft, subNum, squares);
        }
      }

      if (j !== this.boardSize - 1) {
        var right = squares[i][j + 1];
        var blockNumberRight = this.checkBlockNumber(i, j + 1, block);

        if (currentState === right) {
          this.checkAdd(block, blockNumberRight, addNum, addedArr);
        } else if (right !== null) {
          this.checkSub(block, blockNumberRight, subNum, squares);
        }
      }

      if (i !== 0) {
        var top = squares[i - 1][j];
        var blockNumberTop = this.checkBlockNumber(i - 1, j, block);

        if (currentState === top) {
          this.checkAdd(block, blockNumberTop, addNum, addedArr);
        } else if (top !== null) {
          this.checkSub(block, blockNumberTop, subNum, squares);
        }
      }

      if (i !== this.boardSize - 1) {
        var bottom = squares[i + 1][j];
        var blockNumberBottom = this.checkBlockNumber(i + 1, j, block);

        if (currentState === bottom) {
          this.checkAdd(block, blockNumberBottom, addNum, addedArr);
        } else if (bottom !== null) {
          this.checkSub(block, blockNumberBottom, subNum, squares);
        }
      }

      if (this.setCapturedSquare(i, j, subNum, block, capturedSquare, position)) {
        return true;
      }

      this.setBlock(addNum, subNum, block, addedArr);

      forbid = this.checkSuisideCase(block, squares);

      return forbid;
    }
  }, {
    key: 'currentState',
    value: function currentState() {
      return this.state.xIsNext ? 'X' : 'O';
    }

    /* checkBlockNumber: check the block number of a single square
      In: square coordinate, block
      Out: the block number the square belongs to
      Algorithm: do traversal on block and find the block number of the square
    */

  }, {
    key: 'checkBlockNumber',
    value: function checkBlockNumber(i, j, block) {
      for (var k = 0; k < block.length; k++) {
        for (var z = 0; z < block[k].length; z++) {
          if (block[k][z][0] === i && block[k][z][1] === j) {
            return k;
          }
        }
      }
    }

    /* checkAdd: push array in the block with same state to addedArr, and the block to addNum
    */

  }, {
    key: 'checkAdd',
    value: function checkAdd(block, blockNumber, addNum, addedArr) {
      if (blockNumber !== undefined && !addNum.includes(blockNumber)) {

        addNum.push(blockNumber);

        block[blockNumber].forEach(function (arr) {
          addedArr.push(arr);
        });
      }
    }
    /* checkAdd: push the block number that should be removed to subNum
    */

  }, {
    key: 'checkSub',
    value: function checkSub(block, blockNumber, subNum, squares) {
      var _this2 = this;

      if (blockNumber !== undefined && !subNum.includes(blockNumber)) {
        var count = 0;

        block[blockNumber].forEach(function (arr) {
          if (_this2.checkDeath(arr, squares)) {
            count++;
          }
        });

        if (count === block[blockNumber].length) {
          block[blockNumber].forEach(function (arr) {
            squares[arr[0]][arr[1]] = null;
          });

          subNum.push(blockNumber);
        }
      }
    }

    /* getDistinctNumber: return distinct block number in addNum and subNum
    */

  }, {
    key: 'getDistinctNumber',
    value: function getDistinctNumber(addNum, subNum) {
      var totalNum = [];

      addNum.concat(subNum).forEach(function (num) {
        if (!totalNum.includes(num)) {
          totalNum.push(num);
        }
      });

      return totalNum;
    }

    /*setCapturedSquare: if single square is captured then record and prevent KO case
    */

  }, {
    key: 'setCapturedSquare',
    value: function setCapturedSquare(i, j, subNum, block, capturedSquare, position) {
      if (subNum.length === 1 && block[subNum[0]].length === 1) {
        if (capturedSquare[0] === i && capturedSquare[1] === j && block[subNum[0]][0][0] === position[0] && block[subNum[0]][0][1] === position[1]) {
          return true;
        }

        var _block$subNum$0$0$sli = block[subNum[0]][0].slice();

        var _block$subNum$0$0$sli2 = _slicedToArray(_block$subNum$0$0$sli, 2);

        capturedSquare[0] = _block$subNum$0$0$sli2[0];
        capturedSquare[1] = _block$subNum$0$0$sli2[1];
      } else {
        capturedSquare = [];
      }
    }

    /*setBlock: deal with modification of the block array
    */

  }, {
    key: 'setBlock',
    value: function setBlock(addNum, subNum, block, addedArr) {
      var totalNum = this.getDistinctNumber(addNum, subNum);

      totalNum.forEach(function (num) {
        block[num] = [];
      });

      // Array splice would cause the index disturbance, and len and i should be reduced.
      for (var i = 0, len = block.length; i < len; i++) {
        if (Object.keys(block[i]).length === 0) {
          block.splice(i, 1);
          len--;
          i--;
        }
      }

      block.push(addedArr);
    }

    /*setCapturedSquare: prevent suiside case
    */

  }, {
    key: 'checkSuisideCase',
    value: function checkSuisideCase(block, squares) {
      var _this3 = this;

      // eslint-disable-line
      var count = 0;

      block[block.length - 1].forEach(function (arr) {
        if (_this3.checkDeath(arr, squares)) {
          count++;
        }
      });

      if (count === block[block.length - 1].length) {
        return true;
      }

      return false;
    }

    /* checkDeath: check a single square is dead or not(no space can be considered dead).
      In: check square array, squares after current round
      Out: bool: true => dead.
      Algorithm: check whether there is space within all four neighbors
    */

  }, {
    key: 'checkDeath',
    value: function checkDeath(_ref, squares) {
      var _ref2 = _slicedToArray(_ref, 2),
          i = _ref2[0],
          j = _ref2[1];

      var _fill = new Array(4).fill(true),
          _fill2 = _slicedToArray(_fill, 4),
          left = _fill2[0],
          right = _fill2[1],
          top = _fill2[2],
          bottom = _fill2[3];

      if (j !== 0) {
        left = squares[i][j - 1] !== null;
      }

      if (j !== this.boardSize - 1) {
        right = squares[i][j + 1] !== null;
      }

      if (i !== 0) {
        top = squares[i - 1][j] !== null;
      }

      if (i !== this.boardSize - 1) {
        bottom = squares[i + 1][j] !== null;
      }

      return left && right && top && bottom;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(i, j) {
      var history = this.state.history.slice(0, this.state.stepNumber + 1);
      var currentMove = history.length - 1;
      var current = history[currentMove];
      var squares = JSON.parse(JSON.stringify(current.squares));
      var block = current.block.slice(); // without slice would cause history bug.
      var capturedSquare = current.capturedSquare.slice();
      var position = current.position.slice();
      var forbid = current.forbid;

      // Forbid when game is over or square's state is not null
      if (squares[i][j] || this.gameOver) {
        return;
      }

      squares[i][j] = this.currentState();

      if (this.calculateCapture(i, j, squares, block, capturedSquare, position, forbid)) {
        return;
      }

      position = [i, j];
      this.setState({
        history: history.concat([{
          squares: squares,
          block: block,
          capturedSquare: capturedSquare,
          position: position,
          forbid: forbid
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
      var _this4 = this;

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
                _this4.jumpTo(move);

                if (stepNumber > move) {
                  _this4.gameOver = false;
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
                return _this4.handleClick(i, j);
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

  return GoGame;
}(_react.Component);

exports.default = GoGame;