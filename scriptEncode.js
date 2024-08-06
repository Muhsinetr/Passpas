let encodradi0 = document.getElementById("encode");
let decoderadi0 = document.getElementById("decode");
let textAR = document.querySelector(".txtarea");
let resultAR = document.querySelector(".Ssection");

function flagCheck(val, flag) {
  if (val == "*") {
    if (flag == false) {
      flag = true;
    } else {
      flag = false;
    }
  }
  return flag;
}

function Convert() {
  let texts = textAR.value;
  if (texts) {
    let operation = "";
    let flag = false;
    if (encodradi0.checked == true) {
      for (var i = 0; i < texts.length; i++) {
        let letter = texts.charAt(i);
        flag = flagCheck(letter, flag);
        if (!flag) {
          switch (letter) {
            case "a":
              operation = operation + "n";
              break;
            case "b":
              operation = operation + "q";
              break;
            case "c":
              operation = operation + "u";
              break;
            case "d":
              operation = operation + "s";
              break;
            case "e":
              operation = operation + "o";
              break;
            case "f":
              operation = operation + "x";
              break;
            case "g":
              operation = operation + "1";
              break;
            case "h":
              operation = operation + "e";
              break;
            case "i":
              operation = operation + "z";
              break;
            case "j":
              operation = operation + "2";
              break;
            case "k":
              operation = operation + "p";
              break;
            case "l":
              operation = operation + "4";
              break;
            case "m":
              operation = operation + "g";
              break;
            case "n":
              operation = operation + "6";
              break;
            case "o":
              operation = operation + "l";
              break;
            case "p":
              operation = operation + "a";
              break;
            case "q":
              operation = operation + "j";
              break;
            case "r":
              operation = operation + "v";
              break;
            case "s":
              operation = operation + ":";
              break;
            case "t":
              operation = operation + ".";
              break;
            case "u":
              operation = operation + ";";
              break;
            case "v":
              operation = operation + "@";
              break;
            case "w":
              operation = operation + ",";
              break;
            case "x":
              operation = operation + "i";
              break;
            case "y":
              operation = operation + "0";
              break;
            case "z":
              operation = operation + "8";
              break;
            case "1":
              operation = operation + "y";
              break;
            case "2":
              operation = operation + "d";
              break;
            case "3":
              operation = operation + "5";
              break;
            case "4":
              operation = operation + "r";
              break;
            case "5":
              operation = operation + "7";
              break;
            case "6":
              operation = operation + "t";
              break;
            case "7":
              operation = operation + "3";
              break;
            case "8":
              operation = operation + "b";
              break;
            case "9":
              operation = operation + "h";
              break;
            case "0":
              operation = operation + "w";
              break;
            case "@":
              operation = operation + "k";
              break;
            case ".":
              operation = operation + "f";
              break;
            case ",":
              operation = operation + "m";
              break;
            case ";":
              operation = operation + "a";
              break;
            case ":":
              operation = operation + "c";
              break;
            case " ":
              operation = operation + "?";
              break;
            default:
              operation = operation + letter;
          }
        } else {
          operation = operation + letter;
        }
      }
      resultAR.innerText = operation;
    } else if (decoderadi0.checked == true) {
      for (var i = 0; i < texts.length; i++) {
        let letter = texts.charAt(i);
        flag = flagCheck(letter, flag);
        if (!flag) {
          switch (letter) {
            case "n":
              operation = operation + "a";
              break;
            case "q":
              operation = operation + "b";
              break;
            case "u":
              operation = operation + "c";
              break;
            case "s":
              operation = operation + "d";
              break;
            case "o":
              operation = operation + "e";
              break;
            case "x":
              operation = operation + "f";
              break;
            case "1":
              operation = operation + "g";
              break;
            case "e":
              operation = operation + "h";
              break;
            case "z":
              operation = operation + "i";
              break;
            case "2":
              operation = operation + "j";
              break;
            case "p":
              operation = operation + "k";
              break;
            case "4":
              operation = operation + "l";
              break;
            case "g":
              operation = operation + "m";
              break;
            case "6":
              operation = operation + "n";
              break;
            case "l":
              operation = operation + "o";
              break;
            case "a":
              operation = operation + "p";
              break;
            case "j":
              operation = operation + "q";
              break;
            case "v":
              operation = operation + "r";
              break;
            case ":":
              operation = operation + "s";
              break;
            case ".":
              operation = operation + "t";
              break;
            case ";":
              operation = operation + "u";
              break;
            case "@":
              operation = operation + "v";
              break;
            case ",":
              operation = operation + "w";
              break;
            case "i":
              operation = operation + "x";
              break;
            case "0":
              operation = operation + "y";
              break;
            case "8":
              operation = operation + "z";
              break;
            case "y":
              operation = operation + "1";
              break;
            case "d":
              operation = operation + "2";
              break;
            case "5":
              operation = operation + "3";
              break;
            case "r":
              operation = operation + "4";
              break;
            case "7":
              operation = operation + "5";
              break;
            case "t":
              operation = operation + "6";
              break;
            case "3":
              operation = operation + "7";
              break;
            case "b":
              operation = operation + "8";
              break;
            case "h":
              operation = operation + "9";
              break;
            case "w":
              operation = operation + "0";
              break;
            case "k":
              operation = operation + "@";
              break;
            case "f":
              operation = operation + ".";
              break;
            case "m":
              operation = operation + ",";
              break;
            case "a":
              operation = operation + ";";
              break;
            case "c":
              operation = operation + ":";
              break;
            case "?":
              operation = operation + " ";
              break;
            default:
              operation = operation + letter;
          }
        }else{
            operation = operation + letter;
        }
      }
      resultAR.innerText = operation;
    }
  }
}
