import { isValidObjectId } from '../../helpers';

export class RoleId {
  constructor(public readonly value: string) {
    if (!isValidObjectId(value)) {
      throw new Error(`Invalid RoleId: "${value}" is not a valid MongoDB ObjectId.`);
    }
  }
}
