import { HTTP_STATUS_CODE } from '../utils/constants.js';

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = HTTP_STATUS_CODE.notFound;
  }
}

export default NotFoundError;
