var _ = require('lodash')
module.exports = {
  models : require("./models"),
  listen : {
    "mark.create.before" : function checkCreator( mark ){
      var bus = this
      if( !bus.session('user') ){
        return bus.error(406, "please login")
      }

      mark.user = _.cloneDeep( bus.session('user') )
    }
  }
}