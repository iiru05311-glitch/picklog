import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar';
import Icon from '../components/Icon';
import { colors, radius, shadows, spacing, catColor } from '../theme';

const CATS = [
  { label: '뷰티', c: 'beauty'  },
  { label: '패션', c: 'fashion' },
  { label: '식품', c: 'food'    },
];

export default function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <TopBar
        right={
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <Pressable style={styles.iconBtn}><Icon name="share"    size={20} color={colors.ink1} /></Pressable>
            <Pressable style={styles.iconBtn}><Icon name="settings" size={20} color={colors.ink1} /></Pressable>
          </View>
        }
      />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* 프로필 헤더 */}
        <View style={styles.profileHead}>
          <View style={styles.avatarLg} />
          <View style={styles.stats}>
            <StatItem value="1"   label="게시물" />
            <StatItem value="187" label="팔로워" />
            <StatItem value="197" label="팔로잉" />
          </View>
        </View>

        {/* 프로필 정보 */}
        <View style={styles.profileMeta}>
          <Text style={styles.handle}>pick_log_user</Text>
          <Text style={styles.bio}>뷰티 · 패션 · 식품 큐레이터</Text>
          <View style={styles.catRow}>
            {CATS.map(c => (
              <View key={c.label} style={styles.tagChip}>
                <View style={[styles.catDot, { backgroundColor: catColor(c.c) }]} />
                <Text style={styles.tagText}>{c.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 액션 버튼 */}
        <View style={styles.actions}>
          <Pressable style={styles.editBtn}>
            <Text style={styles.editBtnText}>프로필 편집</Text>
          </Pressable>
          <Pressable style={styles.iconBtnBordered}>
            <Icon name="settings" size={17} color={colors.ink1} />
          </Pressable>
        </View>

        {/* 탭 아이콘 */}
        <View style={styles.iconTabs}>
          {[
            { name: 'grid',     on: true  },
            { name: 'bookmark', on: false },
            { name: 'refresh',  on: false },
            { name: 'card',     on: false },
          ].map(t => (
            <Pressable key={t.name} style={[styles.iconTab, t.on && styles.iconTabOn]}>
              <Icon name={t.name} size={20} color={t.on ? colors.ink1 : colors.ink3} />
            </Pressable>
          ))}
        </View>

        {/* 픽 그리드 */}
        <View style={styles.grid}>
          <View style={styles.gridTile}>
            <View style={[styles.gridThumb, { backgroundColor: colors.paper2 }]}>
              <Icon name="imageOff" size={18} color={colors.ink4} />
            </View>
            <View style={styles.gridCap}>
              <Text style={styles.gridCapText}>무설탕 그릭요거트</Text>
            </View>
          </View>
          {[2, 3, 4, 5, 6, 7, 8, 9].map(n => (
            <View key={n} style={styles.gridTile}>
              <View style={[styles.gridThumb, { backgroundColor: colors.paper2 }]} />
            </View>
          ))}
        </View>

        <View style={{ height: 110 }} />
      </ScrollView>
    </View>
  );
}

function StatItem({ value, label }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper0 },
  scroll: { flex: 1 },
  iconBtn: {
    width: 36, height: 36,
    alignItems: 'center', justifyContent: 'center',
    borderRadius: 9999,
  },

  profileHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
    paddingHorizontal: spacing.s5,
    paddingBottom: 14,
  },
  avatarLg: { width: 80, height: 80, borderRadius: 40, backgroundColor: colors.paper3 },
  stats:     { flex: 1, flexDirection: 'row', gap: 18 },
  statItem:  { alignItems: 'center', gap: 2 },
  statValue: { fontSize: 17, fontWeight: '600', color: colors.ink1 },
  statLabel: { fontSize: 12, color: colors.ink3 },

  profileMeta: { paddingHorizontal: spacing.s5, paddingBottom: 14 },
  handle: { fontSize: 15, fontWeight: '600', color: colors.ink1 },
  bio:    { fontSize: 14, color: colors.ink2, marginTop: 4, marginBottom: 8 },
  catRow: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
  tagChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.pill,
    backgroundColor: colors.paper0,
  },
  catDot:  { width: 8, height: 8, borderRadius: 4 },
  tagText: { fontSize: 12, color: colors.ink2 },

  actions: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: spacing.s5,
    paddingBottom: 12,
  },
  editBtn: {
    flex: 1,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.paper2,
    borderRadius: radius.pill,
  },
  editBtnText: { fontSize: 13, fontWeight: '600', color: colors.ink1 },
  iconBtnBordered: {
    width: 36, height: 36,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.pill,
  },

  iconTabs: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.lineSoft,
  },
  iconTab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconTabOn: {
    borderBottomWidth: 2,
    borderBottomColor: colors.ink1,
  },

  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 2, padding: 2 },
  gridTile: { width: '33.33%', position: 'relative' },
  gridThumb: {
    width: '100%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridCap: {
    position: 'absolute',
    left: 0, right: 0, bottom: 0,
    padding: 6,
    backgroundColor: 'rgba(31,26,20,0.5)',
  },
  gridCapText: { fontSize: 10, color: '#fff' },
});
