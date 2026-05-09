import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar';
import Icon from '../components/Icon';
import { colors, radius, shadows, spacing, thumbColor, catColor } from '../theme';

const RANKING = [
  { rank: 1, name: '실키 글로우 쿠션',    by: '@influencer_1', dday: 'D-5',  cat: 'beauty'  },
  { rank: 2, name: '데일리 베이지 머플러', by: '@influencer_2', dday: 'D-1',  cat: 'fashion' },
  { rank: 3, name: '무설탕 그릭요거트',   by: '@influencer_3', dday: 'D-8',  cat: 'food'    },
  { rank: 4, name: '린넨 와이드 셋업',    by: '@influencer_4', dday: 'D-3',  cat: 'fashion' },
  { rank: 5, name: '프렌치 디저트 박스',  by: '@influencer_5', dday: 'D-12', cat: 'food'    },
];

const FOLLOWING = ['lemon_b', 'ssol_pick', 'yujin.log', 'kkomi', 'yumi_x'];

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <TopBar />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* 헤드라인 */}
        <View style={styles.welcome}>
          <Text style={styles.welcomeTitle}>흩어진 모든 링크,{'\n'}한 곳에.</Text>
        </View>

        {/* 저장 랭킹 */}
        <View style={styles.section}>
          <View style={styles.sectionHead}>
            <Text style={styles.sectionTitle}>저장 랭킹</Text>
            <Pressable style={styles.textBtn}>
              <Text style={styles.textBtnLabel}>인기순</Text>
              <Icon name="filter" size={13} color={colors.ink2} />
            </Pressable>
          </View>
          {RANKING.map(r => (
            <Pressable key={r.rank} style={styles.rankRow}>
              <Text style={[styles.rankNum, r.rank <= 3 && styles.rankNumTop]}>{r.rank}</Text>
              <View style={[styles.thumbSm, { backgroundColor: thumbColor(r.cat) }]}>
                <Icon name="imageOff" size={15} color={colors.ink4} />
              </View>
              <View style={styles.rankBody}>
                <Text style={styles.rankName}>{r.name}</Text>
                <Text style={styles.rankBy}>{r.by}</Text>
              </View>
              <View style={styles.dday}>
                <Text style={styles.ddayText}>{r.dday}</Text>
              </View>
            </Pressable>
          ))}
        </View>

        {/* 팔로우 한 사람들 */}
        <View style={styles.section}>
          <View style={styles.sectionHead}>
            <Text style={styles.sectionTitle}>팔로우 한 사람들</Text>
            <Pressable style={styles.textBtn}>
              <Text style={styles.textBtnLabel}>전체보기</Text>
              <Icon name="chevron" size={13} color={colors.ink2} />
            </Pressable>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.hScroll}>
            {FOLLOWING.map(n => (
              <View key={n} style={styles.userCard}>
                <View style={styles.avatarMd} />
                <Text style={styles.userName} numberOfLines={1}>{n}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={{ height: 110 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper0 },
  scroll: { flex: 1 },

  welcome: { paddingHorizontal: spacing.s5, paddingTop: 4, paddingBottom: 20 },
  welcomeTitle: {
    fontWeight: '400',
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: -0.5,
    color: colors.ink1,
  },

  section: { paddingHorizontal: spacing.s5, paddingTop: 16, paddingBottom: 8 },
  sectionHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 17, fontWeight: '600', color: colors.ink1 },
  textBtn:      { flexDirection: 'row', alignItems: 'center', gap: 4 },
  textBtnLabel: { fontSize: 13, color: colors.ink2 },

  rankRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 10,
    backgroundColor: colors.paper0,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    borderRadius: radius.lg,
    marginBottom: 8,
    ...shadows.sh1,
  },
  rankNum:    { fontWeight: '700', fontSize: 17, color: colors.ink3, width: 22, textAlign: 'center' },
  rankNumTop: { color: colors.accent },
  thumbSm: {
    width: 44, height: 44,
    borderRadius: radius.sm,
    alignItems: 'center', justifyContent: 'center',
  },
  rankBody:  { flex: 1 },
  rankName:  { fontSize: 14, fontWeight: '600', color: colors.ink1 },
  rankBy:    { fontSize: 12, color: colors.ink3, marginTop: 2 },
  dday: {
    backgroundColor: colors.paper2,
    paddingVertical: 4,
    paddingHorizontal: 9,
    borderRadius: radius.pill,
  },
  ddayText: { fontSize: 11, fontWeight: '600', color: colors.ink3 },

  hScroll: { marginHorizontal: -spacing.s5, paddingLeft: spacing.s5 },
  userCard: {
    width: 88,
    alignItems: 'center',
    gap: 6,
    padding: 12,
    backgroundColor: colors.paper0,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    borderRadius: radius.lg,
    marginRight: 10,
    ...shadows.sh1,
  },
  avatarMd: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.paper3 },
  userName: { fontSize: 12, fontWeight: '600', color: colors.ink1, maxWidth: 72 },
});
