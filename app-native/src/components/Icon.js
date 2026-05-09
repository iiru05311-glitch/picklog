import { Feather } from '@expo/vector-icons';
import { colors } from '../theme';

// Lucide 아이콘명 → Feather 매핑
const MAP = {
  home:     'home',
  search:   'search',
  plus:     'plus',
  bookmark: 'bookmark',
  user:     'user',
  bell:     'bell',
  heart:    'heart',
  share:    'share-2',
  settings: 'settings',
  close:    'x',
  link:     'link-2',
  grid:     'grid',
  refresh:  'refresh-cw',
  card:     'credit-card',
  chevron:  'chevron-right',
  back:     'chevron-left',
  edit:     'edit-2',
  filter:   'sliders',
  imageOff: 'image',
  tag:      'tag',
  more:     'more-horizontal',
};

export default function Icon({ name, size = 22, color = colors.ink1 }) {
  return <Feather name={MAP[name] ?? name} size={size} color={color} />;
}
