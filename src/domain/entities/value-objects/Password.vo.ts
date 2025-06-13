export class Password {
  constructor(private value: string) {
    this.validate(value);
  }

  private validate(value: string) {
    if (value.trim().length < 6) {
      throw new Error('Password must be at least 6 characters long.');
    }
  }

  public verify(candidate: string): boolean {
    // In production, you'd use bcrypt or similar here
    return candidate === this.value;
  }

  public change(newPassword: string) {
    this.validate(newPassword);
    this.value = newPassword;
  }
}
