import { HTTP_STATUS_CODE } from '../utils/constants.js';

class RequiredAuthError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Required authorization error';
    this.statusCode = HTTP_STATUS_CODE.authRequired;
  }
}

export default RequiredAuthError;
