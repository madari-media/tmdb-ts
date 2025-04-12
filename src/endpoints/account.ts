import { BaseEndpoint } from './base';
import { AccountDetails } from '../types/account';

export class AccountEndpoint extends BaseEndpoint {
  constructor(
    accessToken: string,
    private baseURL: string,
  ) {
    super(accessToken, baseURL);
  }

  async details(): Promise<AccountDetails> {
    return await this.api.get('/account');
  }
}
