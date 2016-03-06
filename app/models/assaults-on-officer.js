
// # assaults on officer

var jsonSelect = require('mongoose-json-select');
var mongoosePaginate = require('mongoose-paginate');

exports = module.exports = function(mongoose, iglooMongoosePlugin) {

  var AssaultsOnOfficer = new mongoose.Schema({
      CRNumber: {
          type: String
      },
      dispatchDateTime: {
          type: String
      },
      class: {
          type: String
      },
      classDescription: {
          type: String
      },
      policeDistrictNumber: {
          type: Number
      },
      policeDistrictName: {
          type: String
      },
      blockAddress: {
          type: String
      },
      city: {
          type: String
      },
      state: {
          type: String
      },
      zipCode: {
          type: String
      },
      agency: {
          type: String
      },
      place: {
          type: String
      },
      sector: {
          type: String
      },
      beat: {
          type: String
      },
      PRA: {
          type: String
      },
      startDateTime: {
          type: Date
      },
      endDateTime: {
          type: Date
      },
      latitude: {
          type: String
      },
      longitude: {
        type: String
      },
      location: {
        type: String
      }
  });

  // virtuals
  AssaultsOnOfficer.virtual('object').get(function() {
    return 'assaults_on_officer';
  });

  // plugins
  //AssaultsOnOfficer.plugin(jsonSelect, '-_group -salt -hash');
  AssaultsOnOfficer.plugin(mongoosePaginate);

  // keep last
  AssaultsOnOfficer.plugin(iglooMongoosePlugin);

  return mongoose.model('AssaultsOnOfficer', AssaultsOnOfficer);
};

exports['@singleton'] = true;
exports['@require'] = [ 'igloo/mongo', 'igloo/mongoose-plugin' ];
