import { hasDigits } from '../../helpers';
abstract class Name {
  protected constructor(private readonly value: string, nameType: string, nameLength: number) {
    if (this.value.trim().length < nameLength) {
      throw new Error(`${nameType} should be at least ${nameLength} characters long`);
    }
    if (hasDigits(this.value)) {
      throw new Error(`${nameType} should not contain numbers`);
    }
  }
}

export class FirstName extends Name {
  constructor(firstName: string) {
    super(firstName, 'First Name', 3);
  }
}

export class LastName extends Name {
  constructor(lastName: string) {
    super(lastName, 'Last Name', 3);
  }
}

export class FullName extends Name {
  constructor(fullName: string) {
    super(fullName, 'Full Name', 6);
  }
}

export class UserName extends Name {
  constructor(userName: string) {
    super(userName, 'User Name', 3);
  }
}
