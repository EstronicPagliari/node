const db = require('../util/database');

module.exports = class automatico {
    constructor(id, ligar) {
      this.id = id;
      this.ligar = ligar;
    }


      static selectTbAutomatico() {
        return db.execute('select * from tb_automatico;');
      }

    static update (ligar){
        return db.execute('UPDATE tb_automatico set ligar = ? ',[ligar]);
    }
};