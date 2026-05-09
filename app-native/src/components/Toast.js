import { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from './Icon';
import { colors, radius, shadows } from '../theme';

export default function Toast({ visible }) {
  const opacity  = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(opacity,     { toValue: 1, duration: 200, useNativeDriver: true }),
        Animated.timing(translateY,  { toValue: 0, duration: 200, useNativeDriver: true }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(opacity,    { toValue: 0, duration: 200, useNativeDriver: true }),
        Animated.timing(translateY, { toValue: 20, duration: 200, useNativeDriver: true }),
      ]).start();
    }
  }, [visible]);

  return (
    <Animated.View style={[
      styles.toast,
      { bottom: insets.bottom + 100, opacity, transform: [{ translateY }] },
    ]}>
      <View style={styles.check}>
        <Icon name="check" size={11} color={colors.paper0} />
      </View>
      <Text style={styles.text}>저장됨</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.ink1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: radius.pill,
    ...shadows.sh3,
    zIndex: 30,
  },
  check: {
    width: 18, height: 18,
    borderRadius: 9,
    backgroundColor: colors.accent,
    alignItems: 'center', justifyContent: 'center',
  },
  text: { fontSize: 13, fontWeight: '500', color: colors.paper0 },
});
