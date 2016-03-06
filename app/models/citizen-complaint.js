
// # citizen complaint

var jsonSelect = require('mongoose-json-select');
var mongoosePaginate = require('mongoose-paginate');

exports = module.exports = function(mongoose, iglooMongoosePlugin) {

  var CitizenComplaint = new mongoose.Schema({
      ComplaintType:  {
          type: String
      },
      CCACaseNumber: {
          type: String
      },
      DateReceived: {
          type: Date
      },
      HowReceived: {
          type: String
      },
      District: {
          type: String
      },
      Neighborhood: {
          type: String
      },
      allegationCode: {
          type: String
      },
      description: {
          type: String
      },
      dispositionCode: {
          type: String
      },
      respondentId: {
          type: String
      },
      officerSex: {
          type: String
      },
      officerRace: {
          type: String
      },
      complainantSex: {
          type: String
      },
      complainantRace: {
          type: String
      },
      howClosed: {
          type: String
      }
  });

  // virtuals
  CitizenComplaint.virtual('object').get(function() {
    return 'citizen_complaint';
  });

  // plugins
  //CitizenComplaint.plugin(jsonSelect, '-_group -salt -hash');
  CitizenComplaint.plugin(mongoosePaginate);

  // keep last
  CitizenComplaint.plugin(iglooMongoosePlugin);

  return mongoose.model('CitizenComplaint', CitizenComplaint);
};

exports['@singleton'] = true;
exports['@require'] = [ 'igloo/mongo', 'igloo/mongoose-plugin' ];
