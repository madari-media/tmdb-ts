import { BaseEndpoint } from './base';
import { Certifications } from '../types/certification';

export class CertificationEndpoint extends BaseEndpoint {
  constructor(
    protected readonly accessToken: string,
    private readonly baseURL: string,
  ) {
    super(accessToken, baseURL);
  }

  async movies(): Promise<Certifications> {
    return await this.api.get<Certifications>('/certification/movie/list');
  }

  async tvShows(): Promise<Certifications> {
    return await this.api.get<Certifications>('/certification/tv/list');
  }
}
