import { useState } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar';
import Icon from '../components/Icon';
import { PillTabs } from '../components/SaveSheet';
import { colors, radius, shadows, spacing, catColor } from '../theme';

const LINK_FOLDERS = [
  { name: '에디토리얼',   count: 18, cat: 'fashion' },
  { name: '추천 카페',     count: 11, cat: 'food'    },
  { name: '인테리어 영감', count: 7,  cat: 'etc'     },
  { name: '여행 루트',     count: 4,  cat: 'beauty'  },
];
const PRODUCT_FOLDERS = [
  { name: '패션', count: 12, cat: 'fashion' },
  { name: '뷰티', count: 7,  cat: 'beauty'  },
  { name: '식품', count: 2,  cat: 'food'    },
  { name: '기타', count: 0,  cat: 'etc'     },
];

export default function LibraryScreen() {
  const [tab, setTab] = useState('link');
  const folders = tab === 'link' ? LINK_FOLDERS : PRODUCT_FOLDERS;

  return (
    <View style={styles.screen}>
      <TopBar />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* 페이지 헤더 */}
        <View style={styles.pageHead}>
          <Text style={styles.pageTitle}>보관함</Text>
          <Pressable style={styles.textBtn}>
            <Icon name="edit" size={13} color={colors.ink2} />
            <Text style={styles.textBtnLabel}>폴더 수정</Text>
          </Pressable>
        </View>

        {/* 탭 */}
        <View style={styles.tabWrap}>
          <PillTabs
            options={[{ key: 'link', label: '링크 저장' }, { key: 'product', label: '상품 저장' }]}
            value={tab} onChange={setTab}
          />
        </View>

        {/* 폴더 목록 */}
        <View style={styles.folderList}>
          {folders.map((f, i) => (
            <Pressable key={f.name} style={[styles.folderRow, i < folders.length - 1 && styles.folderBorder]}>
              <View style={[styles.catDot, { backgroundColor: catColor(f.cat) }]} />
              <Text style={styles.folderName}>{f.name}</Text>
              <Text style={styles.folderCount}>{f.count}</Text>
              <Text style={styles.folderArrow}>›</Text>
            </Pressable>
          ))}
          <Pressable style={styles.folderRow}>
            <View style={styles.addIcon}>
              <Icon name="plus" size={14} color={colors.ink2} />
            </View>
            <Text style={[styles.folderName, { color: colors.ink3 }]}>새 폴더 만들기</Text>
          </Pressable>
        </View>

        {/* 최근 저장한 픽 */}
        <View style={styles.section}>
          <View style={styles.sectionHead}>
            <Text style={styles.sectionTitle}>최근에 저장한 픽</Text>
            <Pressable style={styles.textBtn}>
              <Text style={styles.textBtnLabel}>더보기</Text>
              <Icon name="chevron" size={13} color={colors.ink2} />
            </Pressable>
          </View>
          <View style={styles.grid2}>
            {[1, 2, 3, 4].map(i => (
              <View key={i} style={styles.pickCard}>
                <View style={styles.thumbMd}>
                  <Icon name="imageOff" size={18} color={colors.ink4} />
                </View>
                <Text style={styles.pickName}>저장된 픽 {i}</Text>
                <Text style={styles.pickMeta}>2일 전</Text>
              </View>
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

  pageHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.s5,
    paddingBottom: 14,
  },
  pageTitle:    { fontSize: 24, fontWeight: '700', color: colors.ink1 },
  textBtn:      { flexDirection: 'row', alignItems: 'center', gap: 4 },
  textBtnLabel: { fontSize: 13, color: colors.ink2 },
  tabWrap: { paddingHorizontal: spacing.s5, marginBottom: 16 },

  folderList: {
    marginHorizontal: spacing.s5,
    backgroundColor: colors.paper0,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    borderRadius: radius.lg,
    overflow: 'hidden',
    ...shadows.sh1,
  },
  folderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  folderBorder: { borderBottomWidth: 1, borderBottomColor: colors.lineSoft },
  catDot:      { width: 9, height: 9, borderRadius: 5 },
  folderName:  { flex: 1, fontSize: 15, color: colors.ink1 },
  folderCount: { fontSize: 13, color: colors.ink3 },
  folderArrow: { fontSize: 18, color: colors.ink4 },
  addIcon: {
    width: 24, height: 24,
    borderRadius: 12,
    backgroundColor: colors.paper2,
    alignItems: 'center', justifyContent: 'center',
  },

  section: { paddingHorizontal: spacing.s5, paddingTop: 24 },
  sectionHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 17, fontWeight: '600', color: colors.ink1 },
  grid2: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  pickCard: { width: '47%' },
  thumbMd: {
    width: '100%', aspectRatio: 1,
    backgroundColor: colors.paper2,
    borderRadius: radius.md,
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 6,
  },
  pickName: { fontSize: 13, fontWeight: '600', color: colors.ink1 },
  pickMeta: { fontSize: 11, color: colors.ink3, marginTop: 2 },
});
