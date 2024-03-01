export class UserNotFound extends Error {
  code: number;
  constructor() {
    super("User Not Found");
    this.name = "UserNotFound";
    Object.setPrototypeOf(this, UserNotFound.prototype);
    this.code = 404;
  }
}
