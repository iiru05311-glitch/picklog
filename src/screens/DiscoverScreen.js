import { useState } from 'react';
import { View, Text, ScrollView, TextInput, Pressable, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar';
import Icon from '../components/Icon';
import { colors, radius, shadows, spacing, catColor } from '../theme';

const TRENDING = ['여름 셋업', '아이크림 추천', '디저트', '린넨 셔츠', '홈카페', '라탄 가방'];
const PEOPLE = [
  { n: 'yujin.log',  b: '에디터 · 패션',   f: '2.1k' },
  { n: 'lemon_b',    b: '뷰티 큐레이터',   f: '984'  },
  { n: 'kkomi',      b: '홈카페 · 디저트', f: '412'  },
  { n: 'ssol_pick',  b: '여행 · 인테리어', f: '3.4k' },
];
const CATS = [
  { l: '패션',     c: 'fashion' },
  { l: '뷰티',     c: 'beauty'  },
  { l: '식품',     c: 'food'    },
  { l: '인테리어', c: 'etc'     },
];

export default function DiscoverScreen() {
  const [q, setQ] = useState('');

  return (
    <View style={styles.screen}>
      <TopBar />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

        {/* 검색창 */}
        <View style={styles.searchWrap}>
          <Icon name="search" size={17} color={colors.ink3} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="링크, 상품 또는 사용자 검색"
            placeholderTextColor={colors.ink3}
            value={q}
            onChangeText={setQ}
          />
        </View>

        {/* 인기 검색어 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>지금 인기있는 검색어</Text>
          <View style={styles.chipRow}>
            {TRENDING.map((t, i) => (
              <Pressable key={t} style={styles.chip}>
                <Text style={styles.chipNum}>{i + 1}</Text>
                <Text style={styles.chipText}>{t}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* 추천 큐레이터 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>추천 큐레이터</Text>
          {PEOPLE.map(p => (
            <View key={p.n} style={styles.personRow}>
              <View style={styles.avatarMd} />
              <View style={styles.personBody}>
                <Text style={styles.personName}>{p.n}</Text>
                <Text style={styles.personBio}>{p.b} · 팔로워 {p.f}</Text>
              </View>
              <Pressable style={styles.followBtn}>
                <Text style={styles.followBtnText}>팔로우</Text>
              </Pressable>
            </View>
          ))}
        </View>

        {/* 카테고리 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>카테고리 둘러보기</Text>
          <View style={styles.catGrid}>
            {CATS.map(c => (
              <Pressable key={c.l} style={styles.catCard}>
                <View style={[styles.catDotLg, { backgroundColor: catColor(c.c) }]} />
                <Text style={styles.catLabel}>{c.l}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={{ height: 110 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper0 },
  scroll: { flex: 1 },

  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: spacing.s5,
    marginTop: 4,
    backgroundColor: colors.paper2,
    borderRadius: radius.pill,
    paddingHorizontal: 14,
    height: 44,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 15, color: colors.ink1 },

  section: { paddingHorizontal: spacing.s5, paddingTop: 16, paddingBottom: 8 },
  sectionTitle: { fontSize: 17, fontWeight: '600', color: colors.ink1, marginBottom: 12 },

  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 7,
    paddingHorizontal: 12,
    backgroundColor: colors.paper0,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    borderRadius: radius.pill,
    ...shadows.sh1,
  },
  chipNum:  { fontWeight: '700', fontSize: 12, color: colors.accent, width: 14, textAlign: 'center' },
  chipText: { fontSize: 13, color: colors.ink1 },

  personRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
  },
  avatarMd:   { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.paper3 },
  personBody: { flex: 1 },
  personName: { fontSize: 14, fontWeight: '600', color: colors.ink1 },
  personBio:  { fontSize: 12, color: colors.ink3, marginTop: 2 },
  followBtn: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: colors.paper2,
    borderRadius: radius.pill,
  },
  followBtnText: { fontSize: 12, fontWeight: '600', color: colors.ink1 },

  catGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  catCard: {
    width: '47%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    backgroundColor: colors.paper0,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    borderRadius: radius.lg,
    ...shadows.sh1,
  },
  catDotLg: { width: 28, height: 28, borderRadius: 14 },
  catLabel: { fontSize: 15, fontWeight: '600', color: colors.ink1 },
});
