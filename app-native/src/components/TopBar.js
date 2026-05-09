import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from './Icon';
import { colors } from '../theme';

export default function TopBar({ title, right, leftBack, onBack }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.bar, { paddingTop: insets.top + 8 }]}>
      {/* 왼쪽 */}
      {leftBack ? (
        <Pressable onPress={onBack} style={styles.iconBtn}>
          <Icon name="back" size={22} color={colors.ink1} />
        </Pressable>
      ) : (
        <View style={styles.wordmark}>
          <Text style={styles.wordmarkText}>Pick</Text>
          <View style={styles.wordmarkDot} />
          <Text style={styles.wordmarkText}>Log</Text>
        </View>
      )}

      {/* 가운데 타이틀 */}
      <Text style={styles.title}>{title ?? ''}</Text>

      {/* 오른쪽 */}
      <View style={styles.right}>
        {right ?? (
          <Pressable style={styles.iconBtn}>
            <Icon name="bell" size={22} color={colors.ink1} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 14,
    backgroundColor: colors.paper0,
    gap: 12,
  },
  wordmark: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  wordmarkText: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
    color: colors.accent,
    letterSpacing: -0.6,
  },
  wordmarkDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.accent,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: colors.ink1,
  },
  right: {
    flexDirection: 'row',
    gap: 4,
  },
  iconBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
  },
});
