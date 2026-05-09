export const colors = {
  // Paper (배경)
  paper0: '#FFFFFF',
  paper1: '#FBFAF8',
  paper2: '#F3F1ED',
  paper3: '#E9E6DF',
  line:     '#E2DED5',
  lineSoft: '#EFEDE7',

  // Ink (텍스트)
  ink1: '#1A1A1C',
  ink2: '#4F5056',
  ink3: '#8A8B91',
  ink4: '#B8B9BE',

  // Accent — 인디핑크
  accent:      '#C98498',
  accentPress: '#B06C82',
  accentSoft:  '#F2E1E6',
  accentInk:   '#7A4655',

  // 카테고리 닷
  catFashion: '#C98B8B',
  catBeauty:  '#92B09C',
  catFood:    '#8FA3BF',
  catEtc:     '#D6BD7F',

  // color-mix 미리 계산 (썸네일 배경)
  thumbFashion: '#E9D8D5',
  thumbBeauty:  '#DBE1D9',
  thumbFood:    '#DBDEE2',
  thumbEtc:     '#ECE4D2',
};

export const radius = {
  xs:   6,
  sm:   10,
  md:   14,
  lg:   20,
  xl:   28,
  pill: 9999,
};

export const spacing = {
  s1: 4,
  s2: 8,
  s3: 12,
  s4: 16,
  s5: 20,
  s6: 24,
  s8: 32,
  s10: 40,
};

// 따뜻한 톤 그림자
export const shadows = {
  sh1: {
    shadowColor: '#4C381C',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  sh2: {
    shadowColor: '#4C381C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  sh3: {
    shadowColor: '#4C381C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 6,
  },
  shLift: {
    shadowColor: '#4C381C',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 24,
    elevation: 12,
  },
};

export const catColor = (cat) => ({
  fashion: colors.catFashion,
  beauty:  colors.catBeauty,
  food:    colors.catFood,
  etc:     colors.catEtc,
}[cat] ?? colors.ink4);

export const thumbColor = (cat) => ({
  fashion: colors.thumbFashion,
  beauty:  colors.thumbBeauty,
  food:    colors.thumbFood,
  etc:     colors.thumbEtc,
}[cat] ?? colors.paper2);
