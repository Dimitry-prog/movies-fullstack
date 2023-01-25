import { HTTP_STATUS_CODE } from '../utils/constants.js';

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = HTTP_STATUS_CODE.forbidden;
  }
}

export default ForbiddenError;
