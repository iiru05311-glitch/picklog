import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabBar      from './src/components/TabBar';
import SaveSheet   from './src/components/SaveSheet';
import Toast       from './src/components/Toast';

import HomeScreen     from './src/screens/HomeScreen';
import DiscoverScreen from './src/screens/DiscoverScreen';
import LibraryScreen  from './src/screens/LibraryScreen';
import ProfileScreen  from './src/screens/ProfileScreen';

const SCREENS = {
  home:     HomeScreen,
  discover: DiscoverScreen,
  library:  LibraryScreen,
  profile:  ProfileScreen,
};

export default function App() {
  const [tab,       setTab]       = useState('home');
  const [sheetOpen, setSheetOpen] = useState(false);
  const [toast,     setToast]     = useState(false);

  const handleSaved = () => {
    setToast(true);
    setTimeout(() => setToast(false), 1800);
  };

  const Screen = SCREENS[tab];

  return (
    <SafeAreaProvider>
      <View style={styles.root}>
        <StatusBar style="dark" />
        <Screen />
        <TabBar
          tab={tab}
          onTab={setTab}
          onSave={() => setSheetOpen(true)}
        />
        <SaveSheet
          open={sheetOpen}
          onClose={() => setSheetOpen(false)}
          onSaved={handleSaved}
        />
        <Toast visible={toast} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
