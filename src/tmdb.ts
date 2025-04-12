import {
  AccountEndpoint,
  CertificationEndpoint,
  ChangeEndpoint,
  CollectionsEndpoint,
  ConfigurationEndpoint,
  CreditsEndpoint,
  DiscoverEndpoint,
  FindEndpoint,
  GenreEndpoint,
  KeywordsEndpoint,
  MoviesEndpoint,
  PeopleEndpoint,
  ReviewEndpoint,
  SearchEndpoint,
  TrendingEndpoint,
  TvEpisodesEndpoint,
  TvSeasonsEndpoint,
  TvShowsEndpoint,
  WatchProvidersEndpoint,
} from './endpoints';
import { CompaniesEndpoint } from './endpoints/companies';
import { NetworksEndpoint } from './endpoints/networks';
import { BASE_URL_V3 } from './common/constants';

export class TMDB {
  private readonly accessToken: string;

  constructor(
    accessToken: string,
    private readonly baseURL = BASE_URL_V3,
  ) {
    this.accessToken = accessToken;
  }

  get account(): AccountEndpoint {
    return new AccountEndpoint(this.accessToken, this.baseURL);
  }

  get configuration(): ConfigurationEndpoint {
    return new ConfigurationEndpoint(this.accessToken, this.baseURL);
  }

  get certifications(): CertificationEndpoint {
    return new CertificationEndpoint(this.accessToken, this.baseURL);
  }

  get changes(): ChangeEndpoint {
    return new ChangeEndpoint(this.accessToken, this.baseURL);
  }

  get credits(): CreditsEndpoint {
    return new CreditsEndpoint(this.accessToken, this.baseURL);
  }

  get companies(): CompaniesEndpoint {
    return new CompaniesEndpoint(this.accessToken, this.baseURL);
  }

  get networks(): NetworksEndpoint {
    return new NetworksEndpoint(this.accessToken, this.baseURL);
  }

  get search(): SearchEndpoint {
    return new SearchEndpoint(this.accessToken, this.baseURL);
  }

  get genres(): GenreEndpoint {
    return new GenreEndpoint(this.accessToken, this.baseURL);
  }

  get movies(): MoviesEndpoint {
    return new MoviesEndpoint(this.accessToken, this.baseURL);
  }

  get tvShows(): TvShowsEndpoint {
    return new TvShowsEndpoint(this.accessToken, this.baseURL);
  }

  get tvEpisode(): TvEpisodesEndpoint {
    return new TvEpisodesEndpoint(this.accessToken, this.baseURL);
  }

  get discover(): DiscoverEndpoint {
    return new DiscoverEndpoint(this.accessToken, this.baseURL);
  }

  get people(): PeopleEndpoint {
    return new PeopleEndpoint(this.accessToken, this.baseURL);
  }

  get review(): ReviewEndpoint {
    return new ReviewEndpoint(this.accessToken, this.baseURL);
  }

  get trending(): TrendingEndpoint {
    return new TrendingEndpoint(this.accessToken, this.baseURL);
  }

  get find(): FindEndpoint {
    return new FindEndpoint(this.accessToken, this.baseURL);
  }

  get keywords(): KeywordsEndpoint {
    return new KeywordsEndpoint(this.accessToken, this.baseURL);
  }

  get collections(): CollectionsEndpoint {
    return new CollectionsEndpoint(this.accessToken, this.baseURL);
  }

  get tvSeasons(): TvSeasonsEndpoint {
    return new TvSeasonsEndpoint(this.accessToken, this.baseURL);
  }

  get watchProviders(): WatchProvidersEndpoint {
    return new WatchProvidersEndpoint(this.accessToken, this.baseURL);
  }
}
