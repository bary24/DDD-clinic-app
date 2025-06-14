export class Password {
  constructor(private value: string) {
    this.validate(value);
  }

  public validate(value: string): void {
    if (value.trim().length < 6) {
      throw new Error('Password must be at least 6 characters long.');
    }
  }

  public verify(candidate: string): boolean {
    return candidate === this.value;
  }
}
