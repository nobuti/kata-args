// Generated by CoffeeScript 1.3.3
(function() {
  var Kata;

  Kata = (function() {

    function Kata(input) {
      this.input = input;
      this.reg = /(-[a-z])(?:\s+)?((-?\d(,?))+|([\w/,]+))?/g;
      this.flags = [];
      this.values = [];
      this.defaults = [];
      this;

    }

    Kata.prototype.parse = function() {
      var matches;
      while ((matches = this.reg.exec(this.input)) !== null) {
        this.flags.push(matches[1]);
        this.values.push(matches[2]);
      }
      return this;
    };

    Kata.prototype.render = function() {
      var flag, i, output, valor, _i, _len, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
      output = '';
      _ref = this.flags;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        flag = _ref[i];
        if (flag === '-d') {
          if (this.is_dir(this.values[i])) {
            valor = (_ref1 = this.values[i]) != null ? _ref1 : '/';
            output += "directorio=" + valor + "\n";
          } else {
            valor = (_ref2 = this.values[i]) != null ? _ref2 : '0';
            output += "digitos=" + valor + "\n";
          }
        } else if (flag === '-l') {
          valor = (_ref3 = this.values[i]) != null ? _ref3 : 'true';
          output += "loggin=" + valor + "\n";
        } else if (flag === '-p') {
          valor = (_ref4 = this.values[i]) != null ? _ref4 : '8888';
          output += "port=" + valor + "\n";
        } else if (flag === '-g') {
          valor = (_ref5 = this.values[i]) != null ? _ref5 : '';
          output += "string=" + valor + "\n";
        } else {
          output += "" + (flag.substr(1)) + "=" + this.values[i] + "\n";
        }
      }
      return output;
    };

    Kata.prototype.is_dir = function(str) {
      return str.indexOf(',') === -1;
    };

    return Kata;

  })();

  window.Kata = Kata;

}).call(this);