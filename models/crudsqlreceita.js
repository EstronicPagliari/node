const db = require('../util/database');


module.exports = class receita{
  constructor(id,nomereceita, settempo1, settemperatura1, settempo2, settemperatura2,settempo3,settemperatura3,settempo4,settemperatura4,settempo5,settemperatura5
    ,settempo6,settemperatura6,settempo7,settemperatura7,settempo8,settemperatura8){
    this.id = id;
    this.nomereceita = nomereceita;
    this.settempo1 = settempo1;
    this.settemperatura1 = settemperatura1;
    this.settempo2 = settempo2;
    this.settemperatura2 = settemperatura2;
    this.settempo3 = settempo3;
    this.settemperatura3 = settemperatura3;
    this.settempo4 = settempo4;
    this.settemperatura4 = settemperatura4;
    this.settempo5 = settempo5;
    this.settemperatura5 = settemperatura5;
    this.settempo6 = settempo6;
    this.settemperatura6 = settemperatura6;
    this.settempo7 = settempo7;
    this.settemperatura7 = settemperatura7;
    this.settempo8 = settempo8;
    this.settemperatura8 = settemperatura8;
    }

    static selectreceitaid(id){
      return db.execute('select * from receita where id= ?', [id]);
    }

    static carregarreceita(idreceita){
    return db.execute('update receitacarregar set idreceita= ?', [idreceita]);
    }

    static selectreceitacarregada(){
      return db.execute('select * from receitacarregada;')
    }

}