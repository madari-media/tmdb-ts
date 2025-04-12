import { BaseEndpoint } from './base';
import { CreditResponse } from '../types/credits';

export class CreditsEndpoint extends BaseEndpoint {
  constructor(
    protected readonly accessToken: string,
    private readonly baseURL: string,
  ) {
    super(accessToken, baseURL);
  }

  async getById(id: string): Promise<CreditResponse> {
    return await this.api.get<CreditResponse>(`/credit/${id}`);
  }
}
