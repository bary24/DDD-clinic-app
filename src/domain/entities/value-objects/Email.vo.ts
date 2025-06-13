export class Email {
  constructor(private readonly email: string) {
    if (!this.isValidEmail(this.email)) {
      throw new Error("Email is not valid");
    }
  }
  private isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }
}
