// Write your Javascript code.
(function () {


    var result = $('.result');
    var btn = $('button');
    var invincible = '';//!!!
    var operations = {
        "<-": function () {
            let text = result.text().trim();
            result.text((text.split('').splice(0, text.length - 1).join('')));
        },
        "(":   function () { result.append('(');    },
        ")":   function () { result.append(')');    },
        "e":   function () { result.append('e');    },
        "Pi": function () { result.append('Pi');},
        ".": function () { result.append("."); },
        "=":   function () {
            let temp = result.text();
            let replaced = replAll(temp, invincible);
            let data = eval(replaced);
            if (isNaN(data)) {
                alert("Invalid input");
                invincible = "";
                result.text("");
                return;
            }
            result.text(data);
            invincible = "" + data;
        },
        "^":   function () { result.append('^');    },
        "+":   function () { result.append('+');    },
        "*":   function () { result.append('*');    },
        "√":   function () { result.append('√(');   },
        "/":   function () { result.append('/');    },
        "-":   function () { result.append('-');    },
        "C":   function () { result.text("");      }, 
        "0":   function () { result.append('0');    },
        "1":   function () { result.append('1');    },
        "2":   function () { result.append('2');    },
        "3":   function () { result.append('3');    },
        "4":   function () { result.append('4');    },
        "5":   function () { result.append('5');    },
        "6":   function () { result.append('6');    },
        "7":   function () { result.append('7');    },
        "8":   function () { result.append('8');    },
        "9":   function () { result.append('9');    },
        "tan": function () { result.append('tan('); },
        "sin": function () { result.append('sin('); },
        "cos": function () { result.append('cos('); },
        'ln':  function () { result.append('ln(');  },
        'lg':  function () { result.append('lg(');  },
        "!": function () {
            this['=']();
            let n = +invincible;
            if (n < 0) {
                alert("Invalid input");
                return;
            }

            var fact = function factorial(n) {
                return (n >= 1) ? n * factorial(n - 1) : 1;
            };
            var temp = fact(n);
            invincible = ""+temp;
            result.text(temp);
        },                        };

    btn.on('click', function () {

        operations[$(this).text()]();
    });

    function replAll(from,to) {
        to = from.split('lg').join('Math.LOG10E*Math.log')
            .split('ln').join('Math.log')
            .split('cos').join('Math.cos')
            .split('sin').join('Math.sin')
            .split('tan').join('Math.tan')
            .split('√').join('Math.sqrt')
            .split('e').join('Math.E')
            .split('^').join('**')
            .split('Pi').join('Math.PI');
        return to;
    };

})();