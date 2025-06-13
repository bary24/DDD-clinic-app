export class UserName {
  constructor(private readonly userName: string) {
    if (this.userName.trim().length < 5) {
      throw new Error('User name should be at least 5 characters long');
    }
  }
}
