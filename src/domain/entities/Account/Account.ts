import { Email } from '../value-objects/Email.vo';
import { FirstName } from '../value-objects/Name.vo';
import { Password } from '../value-objects/Password.vo';
import { UserName } from '../value-objects/UserName.vo';

class AccountId {
  constructor(public readonly value: string) {
    if (!value) throw new Error('AccountId cannot be empty.');
  }
}

export class Account {
  constructor(
    public readonly id: AccountId,
    public readonly firstName: FirstName,
    public readonly email: Email,
    public readonly userName: UserName,
    public readonly password: Password
  ) {}
}
