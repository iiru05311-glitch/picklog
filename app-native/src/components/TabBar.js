import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from './Icon';
import { colors, shadows } from '../theme';

const TABS = [
  { key: 'home',     icon: 'home',     label: '홈'    },
  { key: 'discover', icon: 'search',   label: '검색'  },
  { key: 'save',     icon: 'plus',     label: '저장'  },
  { key: 'library',  icon: 'bookmark', label: '보관함' },
  { key: 'profile',  icon: 'user',     label: '마이'  },
];

export default function TabBar({ tab, onTab, onSave }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.bar, { paddingBottom: Math.max(insets.bottom, 12) }]}>
      {TABS.map(t => {
        if (t.key === 'save') {
          return (
            <View key="save" style={styles.fabWrap}>
              <Pressable style={styles.fab} onPress={onSave}>
                <Icon name="plus" size={22} color={colors.paper0} />
              </Pressable>
              <Text style={styles.fabLabel}>저장</Text>
            </View>
          );
        }
        const focused = tab === t.key;
        return (
          <Pressable key={t.key} style={styles.tab} onPress={() => onTab(t.key)}>
            <Icon name={t.icon} size={22} color={focused ? colors.ink1 : colors.ink3} />
            <Text style={[styles.tabLabel, focused ? styles.tabLabelOn : null]}>
              {t.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.paper0,
    borderTopWidth: 1,
    borderTopColor: colors.lineSoft,
    paddingTop: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4,
  },
  tabLabel:   { fontSize: 10, fontWeight: '500', color: colors.ink3 },
  tabLabelOn: { color: colors.ink1 },

  fabWrap: {
    flex: 1,
    alignItems: 'center',
  },
  fab: {
    marginTop: -22,
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.ink1,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sh3,
  },
  fabLabel: {
    marginTop: 4,
    fontSize: 10,
    fontWeight: '500',
    color: colors.ink3,
  },
});
