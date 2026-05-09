import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '../components/Icon';
import { colors, shadows } from '../theme';

import HomeScreen    from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen  from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation, onSave }) {
  const insets = useSafeAreaInsets();
  const tabs = [
    { key: 'Home',     icon: 'home',     label: '홈'    },
    { key: 'Discover', icon: 'search',   label: '검색'  },
    { key: 'Save',     icon: 'plus',     label: '저장'  },
    { key: 'Library',  icon: 'bookmark', label: '보관함' },
    { key: 'Profile',  icon: 'user',     label: '마이'  },
  ];

  return (
    <View style={[styles.bar, { paddingBottom: insets.bottom || 16 }]}>
      {tabs.map((t, i) => {
        if (t.key === 'Save') {
          return (
            <View key="fab" style={styles.fabWrap}>
              <Pressable style={styles.fab} onPress={onSave}>
                <Icon name="plus" size={22} color={colors.paper0} />
              </Pressable>
              <Text style={styles.fabLabel}>저장</Text>
            </View>
          );
        }

        // 실제 탭 인덱스 (Save 제외)
        const routeIdx = state.routes.findIndex(r => r.name === t.key);
        const focused  = state.index === routeIdx;

        return (
          <Pressable
            key={t.key}
            style={styles.tab}
            onPress={() => navigation.navigate(t.key)}
          >
            <Icon name={t.icon} size={22} color={focused ? colors.ink1 : colors.ink3} />
            <Text style={[styles.tabLabel, focused && styles.tabLabelOn]}>{t.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default function TabNavigator({ onSave }) {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} onSave={onSave} />}
    >
      <Tab.Screen name="Home"     component={HomeScreen}     />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Library"  component={LibraryScreen}  />
      <Tab.Screen name="Profile"  component={ProfileScreen}  />
    </Tab.Navigator>
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
    position: 'relative',
  },
  fab: {
    position: 'absolute',
    top: -22,
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.ink1,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sh3,
  },
  fabLabel: {
    marginTop: 36,
    fontSize: 10,
    fontWeight: '500',
    color: colors.ink3,
  },
});
