//BLOCO 01
let primeiroNome = 'John';
let ultimoNome = 'Doe';
let nomeCompleto = primeiroNome + ' ' + ultimoNome; // Usando o +
let nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`; // Using template literal

//console.log(nomeCompletoTemplate);

//criem 3 blocos de variáveis qu contenham 1 - (Países e Capitais); 2 - ( Tipos de Dados Bancários); 3 - (Renda Familiar)

//Tarefa (1 - Países e Capitais)
let ch = 'China';
let peq = 'Pequim';
let jp = 'japão';
let tq = 'Tóquio';
let cs = 'Coréia do Sul';
let sl = 'Seul';
let paisesOrientais = `${ch}, ${jp} e ${cs} são países Orientais, suas Capitais são respectivamente, ${peq}, ${tq} e ${sl}.`

//console.log(paisesOrientais);

//Tarefa(2 - Dados Bancários)
let cod = 'Código do Banco:';
let nm = 260 ;
let ag = 'Agência:';
let nu = 0001;
let tc = 'Tipo de Conta:';
let cp = 'Conta Poupança';
let nr = 'Numero da Conta:';
let no = '012345-43'
let dadosBancarios = `Para acessarmos sua conta precisamos das seguintes informações, ${cod} ${nm}, ${ag} ${nu}, ${tc} ${cp} e ${nr} ${no}.`

//console.log(dadosBancarios);

//Tarefa(3 - Renda Familiar)
let mrd = 'Marido';
let esp = 'Esposa';
let fnt = 5500 ;
let rnd = 3800 ;
let rendaFamiliar = `Renda familiar ${mrd} com ${fnt} e ${esp}, com ${rnd}.`

console.log(rendaFamiliar);

