import { default_m3u_filter, type TSources } from './utils';

export const guovin_sources: TSources = [
  {
    name: 'Guovin/iptv-api',
    f_name: 'guovin',
    url: 'https://raw.githubusercontent.com/Guovin/iptv-api/gd/output/result.m3u',
    filter: default_m3u_filter,
  },
  {
    name: 'Guovin/iptv-api IPv4',
    f_name: 'guovin_ipv4',
    url: 'https://raw.githubusercontent.com/Guovin/iptv-api/gd/output/ipv4/result.m3u',
    filter: default_m3u_filter,
  },
];
