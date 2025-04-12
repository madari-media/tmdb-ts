import { ReviewDetails } from '../types';
import { BaseEndpoint } from './base';

export class ReviewEndpoint extends BaseEndpoint {
  constructor(
    accessToken: string,
    private readonly baseURL: string,
  ) {
    super(accessToken, baseURL);
  }

  async details(id: string): Promise<ReviewDetails> {
    return await this.api.get<ReviewDetails>(`/review/${id}`);
  }
}
