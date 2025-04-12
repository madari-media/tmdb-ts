import {
  LanguageOption,
  PageOption,
  TimeWindow,
  TrendingMediaType,
  TrendingResults,
} from '../types';
import { BaseEndpoint } from './base';

export class TrendingEndpoint extends BaseEndpoint {
  constructor(
    accessToken: string,
    private readonly baseURL: string,
  ) {
    super(accessToken, baseURL);
  }

  async trending<T extends TrendingMediaType>(
    mediaType: T,
    timeWindow: TimeWindow,
    options?: LanguageOption & PageOption,
  ): Promise<TrendingResults<T>> {
    return await this.api.get<TrendingResults<T>>(
      `/trending/${mediaType}/${timeWindow}`,
      options,
    );
  }
}
