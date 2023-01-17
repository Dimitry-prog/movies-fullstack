import { ERRORS_MESSAGE, HTTP_STATUS_CODE } from '../utils/constants.js';

const handleErrors = (err, req, res, next) => {
  const { statusCode = HTTP_STATUS_CODE.serverCrashed, message } = err;

  res
    .status(statusCode)
    .send({
      message: statusCode === HTTP_STATUS_CODE.serverCrashed
        ? ERRORS_MESSAGE.serverCrashed
        : message,
    });

  next();
};

export default handleErrors;
