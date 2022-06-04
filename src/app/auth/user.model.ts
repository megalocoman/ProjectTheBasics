export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDates: Date
  ) {}

  get token() {
    if (
      !this._tokenExpirationDates ||
      new Date() > this._tokenExpirationDates
    ) {
      return null;
    }
    return this._token;
  }
}
