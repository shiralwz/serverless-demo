'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'This is v1.0',
      },
      null,
      2
    ),
  };
};

module.exports.imageResize = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'resized your image',
      },
      null,
      2
    ),
  };
};
