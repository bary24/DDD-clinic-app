import { isValidObjectId } from '../../helpers';
import { Email } from '../value-objects/Email.vo';
import { EmploymentDetails } from '../value-objects/EmploymentDetails.vo';
import { FirstName, FullName, LastName } from '../value-objects/Name.vo';
import { Password } from '../value-objects/Password.vo';
import { RoleId } from '../value-objects/RoleId.vo';
import { UserName } from '../value-objects/UserName.vo';

interface AccountProps {
  id: AccountId;
  firstName: FirstName;
  lastName: LastName;
  fullName: FullName;
  roleId: RoleId;
  jobTitle: string;
  age: number;
  address: string;
  username: UserName;
  email: Email;
  password: Password;
  phone?: number;
  profilePictureUrl?: string;
  nationalId?: number;
  employmentDetails: EmploymentDetails;
  deleted: boolean;
}

class AccountId {
  constructor(public readonly value: string) {
    if (!value) throw new Error('Account Id cannot be empty.');
    if (!isValidObjectId(value)) throw new Error('Invalid Account Id');
  }
}

export class Account {
  public readonly id: AccountId;
  public firstName: FirstName;
  public lastName: LastName;
  public fullName: FullName;
  public roleId: RoleId;
  public age: number;
  public address: string;
  public username: UserName;
  public email: Email;
  private password: Password;
  public phone?: number;
  public profilePictureUrl?: string;
  public nationalId?: number;
  public employmentDetails: EmploymentDetails;
  public deleted: boolean;

  private constructor(props: AccountProps) {
    this.id = props.id;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.fullName = props.fullName;
    this.roleId = props.roleId;
    this.age = props.age;
    this.address = props.address;
    this.username = props.username;
    this.email = props.email;
    this.password = props.password;
    this.phone = props.phone;
    this.profilePictureUrl = props.profilePictureUrl;
    this.nationalId = props.nationalId;
    this.employmentDetails = props.employmentDetails;
    this.deleted = props.deleted ?? false;
  }
  public static create(props: AccountProps): Account {
    return new Account(props);
  }
  public markAsDeleted(): void {
    this.deleted = true;
  }

  public changePassword(current: string, newPassword: string): void {
    if (!this.password.verify(current)) {
      throw new Error('Incorrect current password.');
    }
    this.password = new Password(newPassword);
  }
}
