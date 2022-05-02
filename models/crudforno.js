
const db = require('../util/database');

module.exports = class ligarforno{

    constructor(btligarforno, fornoligado){
     this.btligarforno =  btligarforno;
     this.fornoligado = fornoligado;
    }

    static selectfornoligado(){
        return db.execute ("select fornoligado from ligarforno");
    }

    static ligarforno(btligarforno){
        return db.execute("update ligarforno set btligarforno=? where id=0", [btligarforno]);
    }

    static selectetapaatual(){
        return db.execute("select * from etapaatual");
    }
}