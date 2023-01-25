import { ERRORS_MESSAGE, HTTP_STATUS_CODE } from '../utils/constants.js';

class BadRequestError extends Error {
  constructor(message = ERRORS_MESSAGE.incorrectData) {
    super(message);
    this.statusCode = HTTP_STATUS_CODE.badRequest;
  }
}

export default BadRequestError;
