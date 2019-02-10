export const ASSETS_MOCK = window.location.origin + window.location.pathname + '/assets/mock/';

export interface TransformedAssetConfig {
  title: string;
  description: string;
}

export class ResponseConfig {
  id: string;
  page_number: number;
  page_size: number;
  items_used: number;
  type: string;
  assets: AssetConfig[];
}

export class AssetConfig {
  type: string;
  classification: string;
  channel: string;
  genre: string;
  releaseDate: string;
  subscriptionMode: string;
  episode: string;
  showname: string;
  isAdsupported: boolean;
  isdrm: boolean;
  customAction: any;
  railTitle: any;
  assetLandscapeImage: any;
  timeToUpdate: any;
  premiumDeviceList: any;
  isPremiumExcludeDeviceList: boolean;
  downloadGeoBlockCountries: any;
  deeplinkSources: any;
  allowOffline: boolean;
  eventStartDate: string;
  eventEndDate: string;
  tvBackgroundImage: any;
  liveMatchThumbnail: any;
  mastheadBillboard: any;
  squareImage: any;
  multiStreamId: string;
  enableForPartners: boolean;
  makeModelFree: string;
  ageCertificate: any;
  pwaDetails: any;
  pwaMasthead: any;
  gifImage: any;
  daiAssetKey: any;
  ssaiPartners: any;
  offlinePlayback: boolean;
  catalogueSources: any;
  publishedAt: string;
  id: string;
  vid: string;
  title: string;
  hlsUrl: string;
  tags: string[];
  posterUrl: string;
  thumbnailUrl: string;
  shortDesc: string;
  parentalRating: string;
  isdvr: boolean;
  alternateAsset: any;
  isYospace: boolean;
  siFixtureStanding: any;
  displayName: any;
  matchName: any;
  tournamentLeagueName: any;
  bannerDescription: any;
  buttonName: any;
  sportsType: any;
  fallbackPlaybackUrl: any;
  episodeRange: any;
  season: any;
  eventStatus: any;
  matchId: any;
  leagueId: any;
  duration: number;
  sportId: any;
  tourId: any;
}
