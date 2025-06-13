import { hasDigits } from '../../helpers';
abstract class Name {
  protected constructor(private readonly value: string, nameType: string) {
    if (this.value.trim().length < 3) {
      throw new Error(`${nameType} should be at least 3 characters long`);
    }
    if (hasDigits(this.value)) {
      throw new Error(`${nameType} should not contain numbers`);
    }
  }
}

export class FirstName extends Name {
  constructor(firstName: string) {
    super(firstName, 'First Name');
  }
}

export class LastName extends Name {
  constructor(lastName: string) {
    super(lastName, 'Last Name');
  }
}
