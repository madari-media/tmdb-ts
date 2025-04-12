import fetch from 'cross-fetch';
import { parseOptions } from './utils';
import { ErrorResponse } from './types';
import { BASE_URL_V3 } from './common/constants';

export class Api {
  constructor(
    private readonly accessToken: string,
    private baseUrl = BASE_URL_V3,
  ) {
    this.accessToken = accessToken;
  }

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  async get<T>(path: string, options?: Record<string, any>): Promise<T> {
    const params = parseOptions(options);
    const response = await fetch(`${this.baseUrl}${path}?${params}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    });

    if (!response.ok) {
      return Promise.reject((await response.json()) as ErrorResponse);
    }

    return (await response.json()) as T;
  }
}
