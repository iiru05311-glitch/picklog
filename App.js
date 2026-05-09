import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabNavigator from './src/navigation/TabNavigator';
import SaveSheet   from './src/components/SaveSheet';
import Toast       from './src/components/Toast';

export default function App() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [toast,     setToast]     = useState(false);

  const handleSaved = () => {
    setToast(true);
    setTimeout(() => setToast(false), 1800);
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={styles.root}>
          <StatusBar style="dark" />
          <TabNavigator onSave={() => setSheetOpen(true)} />
          <SaveSheet
            open={sheetOpen}
            onClose={() => setSheetOpen(false)}
            onSaved={handleSaved}
          />
          <Toast visible={toast} />
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
