
// # response resistance

var jsonSelect = require('mongoose-json-select');
var mongoosePaginate = require('mongoose-paginate');

exports = module.exports = function(mongoose, iglooMongoosePlugin) {

  var ResponseResistance = new mongoose.Schema({
    RIN: {
      type: Number,
      required: false
    },
    PrimaryKey: {
      type: Number,
      required: true
    },
    DateOccurred: {
      type: Date,
      required: true
    },
    TimeOccurred: {
      type: Date,
      required: true
    },
    Location: {
      type: Text,
      required: true
    },
    AreaCommand: {
      type: Text,
      required: false
    },
    NatureOfContact: {
      type: Text,
      required: false
    },
    ReasonDesc: {
      type: Text,
      required: false
    },
    R2RLevel: {
      type: Text,
      required: false
    },
    MasterSubjectID: {
      type: Number,
      required: false
    },
    SubjectSex: {
      type: Text,
      required: false
    },
    SubjectRace: {
      type: Text,
      required: false
    },
    SubjectEthnicity: {
      type: Text,
      required: false
    },
    SubjectRole: {
      type: Text,
      required: false
    },
    SubjectConductDesc: {
      type: Text,
      required: false
    },
    SubjectResistance: {
      type: Text,
      required: false
    },
    WeaponUsed1: {
      type: Text,
      required: false
    },
    WeaponUsed2: {
      type: Text,
      required: false
    },
    WeaponUsed3: {
      type: Text,
      required: false
    },
    WeaponUsed4: {
      type: Text,
      required: false
    },
    WeaponUsed5: {
      type: Text,
      required: false
    },
    NumberShots: {
      type: Text,
      required: false
    },
    SubjectEffects: {
      type: Text,
      required: false
    },
    EffectOnOfficer: {
      type: Text,
      required: false
    },
    OfficerOrganizationDesc: {
      type: Text,
      required: false
    },
    OfficerCommissionDate: {
      type: Date,
      required: false
    },
    OfficerYrsOfService: {
      type: Number,
      required: false
    },
    X_Coordinate: {
      type: Number,
      required: false
    },
    Y_Coordinate: {
      type: Number,
      required: false
    }
  });

  // virtuals
  ResponseResistance.virtual('object').get(function() {
    return 'response_resistance';
  });

  // plugins
  //ResponseResistance.plugin(jsonSelect, '-_group -salt -hash');
  ResponseResistance.plugin(mongoosePaginate);

  // keep last
  ResponseResistance.plugin(iglooMongoosePlugin);

  return mongoose.model('ResponseResistance', ResponseResistance);
};

exports['@singleton'] = true;
exports['@require'] = [ 'igloo/mongo', 'igloo/mongoose-plugin' ];
