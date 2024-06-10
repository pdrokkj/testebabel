"use strict";

var saudacao = function saudacao(nome) {
  return "Ol\xE1 ".concat(nome);
};
var usuario = 'Pedro';
console.log(saudacao(usuario));