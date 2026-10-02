import { default_m3u_filter, type ISource, type TSources } from './utils';

// 不想要的地方台：名字里带这些词的频道会被过滤掉
const BLOCKED_KEYWORDS = [
  '河南', '海南', '浙江', '河北', '广西', '山西', '安徽', '天津',
  '宁夏', '四川', '吉林', '云南', '内蒙古', '北京', '甘肃', '重庆',
  '陕西', '青海', '黑龙江', '辽宁', '贵州',
];

export const guovin_filter: ISource['filter'] = (raw, caller, collectFn) => {
  const lines = raw.split('\n');
  const kept: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('#EXTINF') && BLOCKED_KEYWORDS.some((k) => lines[i].includes(k))) {
      i++; // 连下一行的播放地址一起跳过
      continue;
    }
    kept.push(lines[i]);
  }
  return default_m3u_filter(kept.join('\n'), caller, collectFn);
};

export const guovin_sources: TSources = [
  {
    name: 'Guovin/iptv-api',
    f_name: 'guovin',
    url: 'https://raw.githubusercontent.com/Guovin/iptv-api/gd/output/result.m3u',
    filter: guovin_filter,
  },
  {
    name: 'Guovin/iptv-api IPv4',
    f_name: 'guovin_ipv4',
    url: 'https://raw.githubusercontent.com/Guovin/iptv-api/gd/output/ipv4/result.m3u',
    filter: guovin_filter,
  },
};
