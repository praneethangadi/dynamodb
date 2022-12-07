var AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-1',
    accessKeyId:'*********************',
    secretAccessKey :'****************************'
})
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  TableName: 'CUSTOMER_LIST',
  Key: {
    'CUSTOMER_ID': {N: "1"},
  }
};

ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});