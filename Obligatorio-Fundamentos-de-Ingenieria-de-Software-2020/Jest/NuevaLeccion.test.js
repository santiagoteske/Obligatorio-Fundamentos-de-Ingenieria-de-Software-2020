const { validarCamposRequeridosBack, validarLargoCampo, validacionCaracterAcorde, validacionCancionUnica } = require('../Src/Scripts/NuevaLeccion.js');
const { Leccion } = require('../Src/Scripts/Leccion.js');
//it => voy a testear esto
//expect (<valor>)
// matchers => sirve para comparar valor

it('Corroborar que todos los campos están completos', function () {
  const valorNombre = 'manuelita';
  const valorInterprete = 'lucas';
  const valorTempo = '80';
  expect(validarCamposRequeridosBack(valorNombre, valorInterprete, valorTempo)).toBe(true);
});
it('Corroborar que si todos los campos están incompletos falle', function () {
  const valorNombre = '';
  const valorInterprete = '';
  const valorTempo = '';
  expect(validarCamposRequeridosBack(valorNombre, valorInterprete, valorTempo)).toBe(false);
});
it('Corroborar que si algun campo están incompleto falle', function () {
  const valorNombre = '';
  const valorInterprete = 'Gilda';
  const valorTempo = '90';
  expect(validarCamposRequeridosBack(valorNombre, valorInterprete, valorTempo)).toBe(false);
});
it('Corroborar que si algun campo estan incompleto falle', function () {
  const valorNombre = 'Amame en camara lenta';
  const valorInterprete = '';
  const valorTempo = '90';
  expect(validarCamposRequeridosBack(valorNombre, valorInterprete, valorTempo)).toBe(false);
});
it('Corroborar que si algun campo estan incompleto falle', function () {
  const valorNombre = 'Bailar pegados';
  const valorInterprete = 'Paz Martinez';
  const valorTempo = '';
  expect(validarCamposRequeridosBack(valorNombre, valorInterprete, valorTempo)).toBe(false);
});
it('Corroborar que si algun campo estan incompleto falle', function () {
  const valorNombre = 'Bailar pegados';
  const valorInterprete = 'Paz Martinez';
  const valorTempo = '';
  expect(validarCamposRequeridosBack(valorNombre, valorInterprete, valorTempo)).toBe(false);
});
it('Corroborar que si algun campo estan incompleto falle', function () {
  const valorNombre = '';
  const valorInterprete = 'Paz Martinez';
  const valorTempo = '';
  expect(validarCamposRequeridosBack(valorNombre, valorInterprete, valorTempo)).toBe(false);
});
it('Corroborar que si algun campo estan incompleto falle', function () {
  const valorNombre = 'Valio la pena';
  const valorInterprete = '';
  const valorTempo = '';
  expect(validarCamposRequeridosBack(valorNombre, valorInterprete, valorTempo)).toBe(false);
});
it('Corroborar que si algun campo estan incompleto falle', function () {
  const valorNombre = 'La cucaracha';
  const valorInterprete = 'Ramoncito';
  const valorTempo = '';
  expect(validarCamposRequeridosBack(valorNombre, valorInterprete, valorTempo)).toBe(false);
});
it('Corroborar que si algun campo estan incompleto falle', function () {
  const valorNombre = 'Angie';
  const valorInterprete = 'Rolling Stones';
  const valorTempo = '120';
  expect(validarCamposRequeridosBack(valorNombre, valorInterprete, valorTempo)).toBe(true);
});
/**************************************** */
//pruebas VALIDARLARGOCAMPO

it('Corrobora que sean 5 los caracteres ingresados', function () {
  const texto = '1S2';
  const largo = 5;
  expect(validarLargoCampo(texto, largo)).toBe(true);
});
it('Corrobora que sean 5 los caracteres ingresados', function () {
  const texto = '12345';
  const largo = 5;
  expect(validarLargoCampo(texto, largo)).toBe(true);
});
it('Corrobora que sean 5 los caracteres ingresados', function () {
  const texto = '';
  const largo = 5;
  expect(validarLargoCampo(texto, largo)).toBe(true);
});
it('Corrobora que sean 5 los caracteres ingresados', function () {
  const texto = '12S22';
  const largo = 5;
  expect(validarLargoCampo(texto, largo)).toBe(true);
});
it('Corrobora que sean 5 los caracteres ingresados', function () {
  const texto = 'abcde';
  const largo = 5;
  expect(validarLargoCampo(texto, largo)).toBe(true);
});
it('Corrobora que sean 5 los caracteres ingresados', function () {
  const texto = '*****';
  const largo = 5;
  expect(validarLargoCampo(texto, largo)).toBe(true);
});
it('Corrobora que sean 5 los caracteres ingresados', function () {
  const texto = '12S221';
  const largo = 5;
  expect(validarLargoCampo(texto, largo)).toBe(false);
});

/******validacionCaracterAcorde */

it('Valida que las teclas son: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = '49';
  expect(validacionCaracterAcorde(key)).toBe(true);
});
it('Valida que las teclas son: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = '50';
  expect(validacionCaracterAcorde(key)).toBe(true);
});
it('Valida que las teclas son: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = '51';
  expect(validacionCaracterAcorde(key)).toBe(true);
});
it('Valida que las teclas son: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = '52';
  expect(validacionCaracterAcorde(key)).toBe(true);
});
it('Valida que la tecla son: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = '53';
  expect(validacionCaracterAcorde(key)).toBe(true);
});
it('Valida que la tecla son: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = '54';
  expect(validacionCaracterAcorde(key)).toBe(true);
});
it('Valida que la tecla son: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = '55';
  expect(validacionCaracterAcorde(key)).toBe(true);
});
it('Valida que la tecla son: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = '56';
  expect(validacionCaracterAcorde(key)).toBe(true);
});
it('Valida que la tecla pertenezca a: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = '57';
  expect(validacionCaracterAcorde(key)).toBe(true);
});
it('Valida que la tecla pertenezca a: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = '48';
  expect(validacionCaracterAcorde(key)).toBe(true);
});

it('tecla no es ninguna de estas: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = 'bh';
  expect(validacionCaracterAcorde(key)).toBe(false);
});
it('tecla no es ninguna de estas: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = '47';
  expect(validacionCaracterAcorde(key)).toBe(false);
});
it('tecla no es ninguna de estas: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = '58';
  expect(validacionCaracterAcorde(key)).toBe(false);
});
it('tecla no es ninguna de estas: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = '00';
  expect(validacionCaracterAcorde(key)).toBe(false);
});
it('tecla no es ninguna de estas: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = 'aaaaa';
  expect(validacionCaracterAcorde(key)).toBe(false);
});
it('tecla no es ninguna de estas: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = '34';
  expect(validacionCaracterAcorde(key)).toBe(false);
});
it('tecla no es ninguna de estas: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48', function () {
  const key = '.';
  expect(validacionCaracterAcorde(key)).toBe(false);
});
/*******************validacionCancionUnica */
it('Valida que este la cancion en la lista de canciones', function () {
  const nombreCancion = 'Besame Mucho';
  var ObjTablatura = new Array();
  expect(validacionCancionUnica(nombreCancion, [{
    cancion: 'Besame Mucho',
    interprete: 'interprete',
    dificultad: 'Dificil',
    tempo: '80', ObjTablatura: ObjTablatura
  }])).toBe(false);
});
it('Valida que no este la cancion en la lista de canciones', function () {
  const nombreCancion = 'Besame Mucho';
  var ObjTablatura = new Array();
  expect(validacionCancionUnica(nombreCancion, [{
    cancion: 'Besame',
    interprete: 'interprete',
    dificultad: 'Dificil',
    tempo: '80', ObjTablatura: ObjTablatura
  }])).toBe(true);
});
it('Valida que no este la cancion en la lista de canciones', function () {
  const nombreCancion = 'Besame Mucho';
  var ObjTablatura = new Array();
  expect(validacionCancionUnica(nombreCancion, [{
    cancion: 'Besame',
    interprete: 'Sandro',
    dificultad: 'Dificil',
    tempo: '80', ObjTablatura: ObjTablatura
  }, {
    cancion: 'Angie',
    interprete: 'RollingStones',
    dificultad: 'Dificil',
    tempo: '80', ObjTablatura: ObjTablatura
  }])).toBe(true);
});

it('Valida que este la cancion en la lista de canciones', function () {
  const nombreCancion = 'Despacito';
  var ObjTablatura = new Array();
  expect(validacionCancionUnica(nombreCancion, [{
    cancion: 'Besame',
    interprete: 'Sandro',
    dificultad: 'Dificil',
    tempo: '80', ObjTablatura: ObjTablatura
  }, {
    cancion: 'Despacito',
    interprete: 'Daddy',
    dificultad: 'Dificil',
    tempo: '80', ObjTablatura: ObjTablatura
  }, {
    cancion: 'Back in black',
    interprete: 'RollingStones',
    dificultad: 'Dificil',
    tempo: '80', ObjTablatura: ObjTablatura
  }])).toBe(false);
});