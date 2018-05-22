'use strict';

module.exports = function(Quote) {
  /**
   *
   * @param {Function(Error, object)} callback
   */

  Quote.random = function(callback) {
    Quote.getDataSource().connector.connect(function(err,db){
      var collection = db.collection('Quote');
      collection.aggregate([{
        $sample: {size: 1 }}
        ], function(err, data){
          if(err) return callback(err);
          return callback(null,data);
        });
    });
  };
  //Quote.validatesLengthOf('content', {min: 10, message: {min: 'quote is too short'}});
  Quote.validate('content', function(err){
    if(this.content.indexOf('testing') != -1) err();
  },{message: 'Cannot contain the world testing'});
};
