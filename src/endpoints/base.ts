import { Api } from '../api';

export class BaseEndpoint {
  protected api: Api;

  constructor(
    protected readonly accessToken: string,
    baseUrl: string,
  ) {
    this.api = new Api(accessToken, baseUrl);
  }
}
