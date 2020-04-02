//O caminho onde encontra-se o seu main.js deve estar setado no webpack.config.js
//1.1
import ClasseUsuario from '../modulo_2/exercicio#1/functions'; // caminho exato do seu arquivo functions.js.

ClasseUsuario.info();

//1.2
import { idade } from '../modulo_2/exercicio#1/functions';// caminho exato do seu arquivo functions.js.

console.log(idade);

//1.3
import ClassUser, { idade as IdadeUsuario } from '../modulo_2/exercicio#1/functions';// caminho exato do seu arquivo functions.js.

ClassUser.info();
console.log(IdadeUsuario);