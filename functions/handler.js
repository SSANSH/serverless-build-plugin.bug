import test from 'test';
const responseHeaders = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin' : '*',        // Required for CORS support to work
    'Access-Control-Allow-Credentials' : true   // Required for cookies, authorization headers with HTTPS 
}
function hello() {
 return {
      'statusCode': 200,
      'headers': responseHeaders,
      'body': JSON.stringify({message: test.comment})
 };
}
exports.handler = async function (event, context, callback) {
  callback(null, await hello());
};
