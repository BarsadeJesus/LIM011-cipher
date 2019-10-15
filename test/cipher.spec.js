global.window = global;
require('../src/cipher');
/* global cipher */
/* eslint no-undef: ["error", { "typeof": true }] */
describe('cipher', () => {
  it('debería ser un object', () => {
    expect(typeof cipher).toBe('object');
  });
  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.encode).toBe('function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33)).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('debería retornar "HIJ KLMNOPQRSTUVWXYZABCDEFG" para "ABC DEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect(cipher.encode('ABC DEFGHIJKLMNOPQRSTUVWXYZ', 33)).toBe('HIJ KLMNOPQRSTUVWXYZABCDEFG');
    });
    it('debería ser una función', () => {
      expect(typeof cipher.encodeDni).toBe('function');
    });
    it('debería retornar "34567890" para "01234567"', () => {
      expect(cipher.encodeDni('01234567', 33)).toBe('34567890');
    });
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para
    // "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
    //   expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    // });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    //
    // it('debería retornar " !@" para " !@"', () => {
    //   expect(cipher.encode(33, ' !@')).toBe(' !@');
    // });
  });
  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.decode).toBe('function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      // escribe aquí tus test
      expect(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33)).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
    it('debería retornar "ABC DEFGHIJKLMNOPQRSTUVWXYZ" para "HIJ KLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      // escribe aquí tus test
      expect(cipher.decode('HIJ KLMNOPQRSTUVWXYZABCDEFG', 33)).toBe('ABC DEFGHIJKLMNOPQRSTUVWXYZ');
    });
    it('debería ser una función', () => {
      expect(typeof cipher.encodeDni).toBe('function');
    });
    it('debería retornar "01234567" para "34567890" con offset 33', () => {
      // escribe aquí tus test
      expect(cipher.decodeDni('34567890', 33)).toBe('01234567');
    });
    //
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    //
    // it('debería retornar "abcdefghijklmnopqrstuvwxyz" para
    // "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
    //   expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
    // });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    //
    // it('debería retornar " !@" para " !@"', () => {
    //   expect(cipher.decode(33, ' !@')).toBe(' !@');
    // });
  });
});
