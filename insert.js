var AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-1',
    accessKeyId:'*********************',
    secretAccessKey :'****************************'
})

var ddb = new AWS.DynamoDB();

var params = {
    TableName: 'CUSTOMER_LIST',
    Item: {
      'CUSTOMER_ID' : {N: '1'},
      'CUSTOMER_NAME' : {S: 'praneeth'},
      'CUSTOMER_AGE' : {N: '21'}
    }
  };
  ddb.putItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });