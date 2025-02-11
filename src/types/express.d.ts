import { CustomJwtPayload } from '../utils/CustomJwtPayloads';

declare global {
  namespace Express {
    interface Request {
      user?: CustomJwtPayload;
    }
  }
}