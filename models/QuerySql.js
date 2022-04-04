const db = require('../util/database');


module.exports = class motor{
  constructor(id,nome, ligar, retLigado, falha, manuAuto,corrente,freqSaida,freqAuto,freqManual,rearme){
    this.id = id;
    this.Nome = nome
    this.Ligar = ligar;
    this.retLigado = retLigado;
    this.falha = falha;
    this.manuAuto = manuAuto;
    this.corrente = corrente;
    this.freqSaida = freqSaida;
    this.freqAuto = freqAuto;
    this.freqManual = freqManual;
    this.rearme = rearme;
    }
    static SelectMotor(){
      return db.execute('SELECT * FROM tb_motor');
    }
    static SelectMotorFreq(){
      return db.execute('SELECT * FROM tb_motor');
    }
    static SelectRetornoLigado(){
      return db.execute('SELECT retLigado FROM tb_motor');
    }
    static ligarMotor (ligar){
      return db.execute('UPDATE tb_motor set ligar = ? ',[ligar]);
    }
    static rearmeMotor (rearme){
    return db.execute('UPDATE tb_motor set rearme = ? ',[rearme]);
    }
    static Selectbtrearme(){
    return db.execute('SELECT rearme FROM tb_motor');
    }
    static UpdateFrequencia(freqManual){
      return db.execute('Update tb_motor set FreqManual = ? ',[freqManual]);
    }
  
}