import { HTTP_STATUS_CODE } from '../utils/constants.js';

class ExistUserError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = HTTP_STATUS_CODE.userExist;
  }
}

export default ExistUserError;
