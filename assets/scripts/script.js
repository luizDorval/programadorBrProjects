const copy = (textArea) => {
    navigator.clipboard.writeText(btoa(document.querySelector('#' + textArea).value)).then(() => {
        alert('Sucesso')
    }).catch((error) => {
        alert('Erro: ' + error)
    });

}

const paste = (textArea) => {
    navigator.clipboard.readText().then((text) => {
        document.querySelector('#' + textArea).value = atob(text);
        decode()
    }).catch((error) => {
        alert('Erro: ' + error)
    });
}
const encode = () => {
    let value = document.getElementById('encode').value
    const toArray = value.split("")
    value = encodeCrypto(toArray)
    document.getElementById('encodeResult').innerHTML = value
}

const encodeCrypto = (array) => {
    for (let char in array) {
        if (array[char] == "A" || array[char] == "a") {
            array[char] = 1
        } else if (array[char] == "E" || array[char] == "e") {
            array[char] = 2
        } else if (array[char] == "I" || array[char] == "i") {
            array[char] = 3
        } else if (array[char] == "O" || array[char] == "o") {
            array[char] = 4
        } else if (array[char] == "U" || array[char] == "u") {
            array[char] = 5
        } else if (array[char] == "B" || array[char] == "b") {
            if (array[char] == "B") {
                array[char] = "A"
            } else {
                array[char] = "a"
            }
        } else if (array[char] == "C" || array[char] == "c") {
            if (array[char] == "C") {
                array[char] = "B"
            } else {
                array[char] = "b"
            }
        } else if (array[char] == "D" || array[char] == "d") {
            if (array[char] == "D") {
                array[char] = "C"
            } else {
                array[char] = "c"
            }
        } else if (array[char] == "F" || array[char] == "f") {
            if (array[char] == "F") {
                array[char] = "D"
            } else {
                array[char] = "d"
            }
        } else if (array[char] == "G" || array[char] == "g") {
            if (array[char] == "G") {
                array[char] = "E"
            } else {
                array[char] = "e"
            }
        } else if (array[char] == "H" || array[char] == "h") {
            if (array[char] == "H") {
                array[char] = "F"
            } else {
                array[char] = "f"
            }
        } else if (array[char] == "J" || array[char] == "j") {
            if (array[char] == "J") {
                array[char] = "G"
            } else {
                array[char] = "g"
            }
        } else if (array[char] == "K" || array[char] == "k") {
            if (array[char] == "K") {
                array[char] = "H"
            } else {
                array[char] = "h"
            }
        } else if (array[char] == "L" || array[char] == "l") {
            if (array[char] == "L") {
                array[char] = "I"
            } else {
                array[char] = "i"
            }
        } else if (array[char] == "M" || array[char] == "m") {
            if (array[char] == "M") {
                array[char] = "J"
            } else {
                array[char] = "j"
            }
        } else if (array[char] == "N" || array[char] == "n") {
            if (array[char] == "N") {
                array[char] = "K"
            } else {
                array[char] = "k"
            }
        } else if (array[char] == "P" || array[char] == "p") {
            if (array[char] == "P") {
                array[char] = "L"
            } else {
                array[char] = "l"
            }
        } else if (array[char] == "Q" || array[char] == "q") {
            if (array[char] == "Q") {
                array[char] = "M"
            } else {
                array[char] = "m"
            }
        } else if (array[char] == "R" || array[char] == "r") {
            if (array[char] == "R") {
                array[char] = "N"
            } else {
                array[char] = "n"
            }
        } else if (array[char] == "S" || array[char] == "s") {
            if (array[char] == "S") {
                array[char] = "O"
            } else {
                array[char] = "o"
            }
        } else if (array[char] == "T" || array[char] == "t") {
            if (array[char] == "T") {
                array[char] = "P"
            } else {
                array[char] = "p"
            }
        } else if (array[char] == "V" || array[char] == "v") {
            if (array[char] == "V") {
                array[char] = "Q"
            } else {
                array[char] = "q"
            }
        } else if (array[char] == "W" || array[char] == "w") {
            if (array[char] == "W") {
                array[char] = "R"
            } else {
                array[char] = "r"
            }
        } else if (array[char] == "X" || array[char] == "x") {
            if (array[char] == "X") {
                array[char] = "S"
            } else {
                array[char] = "s"
            }
        } else if (array[char] == "Y" || array[char] == "y") {
            if (array[char] == "Y") {
                array[char] = "T"
            } else {
                array[char] = "t"
            }
        } else if (array[char] == "Z" || array[char] == "z") {
            if (array[char] == "Z") {
                array[char] = "U"
            } else {
                array[char] = "u"
            }
        }
    }
    return array.join("")
}
const decode = () => {
    let value = document.getElementById('decode').value
    const toArray = value.split("")
    value = decodeCrypto(toArray)
    document.getElementById('decodeResult').innerHTML = value
}

const decodeCrypto = (array) => {
    for (let char in array) {
        if (array[char] == "1") {
            array[char] = 'a'
        } else if (array[char] == "2") {
            array[char] = 'e'
        } else if (array[char] == "3") {
            array[char] = 'i'
        } else if (array[char] == "4") {
            array[char] = 'o'
        } else if (array[char] == "5") {
            array[char] = 'u'
        } else if (array[char] == "A" || array[char] == "a") {
            if (array[char] == "A") {
                array[char] = "B"
            } else {
                array[char] = "b"
            }
        } else if (array[char] == "B" || array[char] == "b") {
            if (array[char] == "B") {
                array[char] = "C"
            } else {
                array[char] = "c"
            }
        } else if (array[char] == "C" || array[char] == "c") {
            if (array[char] == "C") {
                array[char] = "D"
            } else {
                array[char] = "d"
            }
        } else if (array[char] == "D" || array[char] == "d") {
            if (array[char] == "D") {
                array[char] = "F"
            } else {
                array[char] = "f"
            }
        } else if (array[char] == "E" || array[char] == "e") {
            if (array[char] == "E") {
                array[char] = "G"
            } else {
                array[char] = "g"
            }
        } else if (array[char] == "F" || array[char] == "f") {
            if (array[char] == "F") {
                array[char] = "H"
            } else {
                array[char] = "h"
            }
        } else if (array[char] == "G" || array[char] == "g") {
            if (array[char] == "G") {
                array[char] = "J"
            } else {
                array[char] = "j"
            }
        } else if (array[char] == "H" || array[char] == "h") {
            if (array[char] == "H") {
                array[char] = "K"
            } else {
                array[char] = "k"
            }
        } else if (array[char] == "I" || array[char] == "i") {
            if (array[char] == "I") {
                array[char] = "L"
            } else {
                array[char] = "l"
            }
        } else if (array[char] == "J" || array[char] == "j") {
            if (array[char] == "J") {
                array[char] = "M"
            } else {
                array[char] = "m"
            }
        } else if (array[char] == "K" || array[char] == "k") {
            if (array[char] == "K") {
                array[char] = "N"
            } else {
                array[char] = "n"
            }
        } else if (array[char] == "L" || array[char] == "l") {
            if (array[char] == "L") {
                array[char] = "P"
            } else {
                array[char] = "p"
            }
        } else if (array[char] == "M" || array[char] == "m") {
            if (array[char] == "M") {
                array[char] = "Q"
            } else {
                array[char] = "q"
            }
        } else if (array[char] == "N" || array[char] == "n") {
            if (array[char] == "N") {
                array[char] = "R"
            } else {
                array[char] = "r"
            }
        } else if (array[char] == "O" || array[char] == "o") {
            if (array[char] == "O") {
                array[char] = "S"
            } else {
                array[char] = "s"
            }
        } else if (array[char] == "P" || array[char] == "p") {
            if (array[char] == "P") {
                array[char] = "T"
            } else {
                array[char] = "t"
            }
        } else if (array[char] == "Q" || array[char] == "q") {
            if (array[char] == "Q") {
                array[char] = "V"
            } else {
                array[char] = "v"
            }
        } else if (array[char] == "R" || array[char] == "r") {
            if (array[char] == "R") {
                array[char] = "W"
            } else {
                array[char] = "w"
            }
        } else if (array[char] == "S" || array[char] == "s") {
            if (array[char] == "S") {
                array[char] = "X"
            } else {
                array[char] = "x"
            }
        } else if (array[char] == "T" || array[char] == "t") {
            if (array[char] == "T") {
                array[char] = "Y"
            } else {
                array[char] = "y"
            }
        } else if (array[char] == "U" || array[char] == "u") {
            if (array[char] == "U") {
                array[char] = "Z"
            } else {
                array[char] = "z"
            }
        }
    }
    return array.join("")
}
