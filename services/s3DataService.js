var AWS = require('aws-sdk');
const s3Storage = new AWS.S3({
  accessKeyId: CONFIG.aws_access_key,
  secretAccessKey: CONFIG.aws_secret_key,
  region: CONFIG.region
});

const uploadImage = async function (image) {
  const imgBufferData = new Buffer(image.imageData.replace(/^data:image\/\w+;base64,/, ""), 'base64');
  var params = {
    Key: image.path + image.filename,
    Body: imgBufferData,
    ContentEncoding: 'base64',
    Bucket: CONFIG.aws_bucket_name
  };
  [err, imgData] = await to(s3Storage.upload(params).promise());
  if (err) TE(err.error.message);
  return imgData;
}
module.exports.uploadImage = uploadImage;

const getImage = async function (image, directoryName) {
  const filename = image.location;
  [err, data] = await to(s3Storage.getObject({
    Bucket: CONFIG.aws_bucket_name,
    Key: directoryName + filename,
    ResponseContentType: 'base64'
  }).promise());
  if (err) TE(err);
  const imageCopy = (data.Body).toString('base64');
  const imageData = 'data:image/png;base64,' + imageCopy;
  return imageData;
}
module.exports.getImage = getImage;

const getImageUrl = async function (image) {
  var params = {
    Bucket: CONFIG.aws_bucket_name,
    Key: image.path + image.filename,
    ResponseContentType: 'image/*'
  }
  const url = s3Storage.getSignedUrl('getObject', params);
  return url;
}
module.exports.getImageUrl = getImageUrl;

const uploadPDF = async function (pdfData, filename, dirName) {
  var params = {
    Key: dirName + filename,
    Body: pdfData,
    Bucket: CONFIG.aws_bucket_name
  };
  [err, data] = await to(s3Storage.upload(params).promise());
  if (err) TE(err);
  var params = {
    Bucket: CONFIG.aws_bucket_name,
    Key: dirName + filename,
    ResponseContentType: 'application/pdf'
  }
  const url = s3Storage.getSignedUrl('getObject', params);
  [err, data] = await to(s3Storage.getObject({
    Bucket: CONFIG.aws_bucket_name,
    Key: dirName + filename,
    ResponseContentType: 'application/pdf'
  }).promise());
  const pdfDataCopy = { url: url, size: data.ContentLength };
  return pdfDataCopy;
}
module.exports.uploadPDF = uploadPDF;

const deleteImage = async function (image) {
  var params = { Bucket: CONFIG.aws_bucket_name, Key: image.path + image.filename };
  s3Storage.deleteObject(params, function (err, data) {
    if (err) console.log('delete image error' + err + ',' + err.stack);
    else if (data) console.log('successfully deleted' + data);
  });
}
module.exports.deleteImage = deleteImage;