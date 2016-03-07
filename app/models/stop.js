
// # stop

var jsonSelect = require('mongoose-json-select');
var mongoosePaginate = require('mongoose-paginate');

exports = module.exports = function(mongoose, iglooMongoosePlugin) {

  var Stop = new mongoose.Schema({
    name: {
      type: String,
      required: true
  },
    id: {
      type: Number
   },
    typeOfStop: {
      type: String
   },
    citationControlNumber: {
      type: Number
   },
    activityResults: {
      type: String
   },
    officerGender: {
      type: String
   },
    officerRace: {
      type: String
   },
    officerAgeRange: {
      type: String
   },
    activityDate: {
      type: Date
   },
    activityTime: {
      type: Date
   },
    activityLocation: {
      type: String
   },
    activityDivision: {
      type: String
   },
    activityBeat: {
      type: String
   },
    driverGender: {
      type: String
   },
    driverRace: {
      type: String
   },
    driverAgeRange: {
      type: String
   },
    numberOfPassengers: {
       type: String
   },
    wasVehicleSearched: {
      type: Boolean
   },
    reasonForSearch: {
       type: String
   }
  });

  // virtuals
  Stop.virtual('object').get(function() {
    return 'stop';
  });

  // plugins
  //Stop.plugin(jsonSelect, '-_group -salt -hash');
  Stop.plugin(mongoosePaginate);

  // keep last
  Stop.plugin(iglooMongoosePlugin);

  return mongoose.model('Stop', Stop);
};

exports['@singleton'] = true;
exports['@require'] = [ 'igloo/mongo', 'igloo/mongoose-plugin' ];
