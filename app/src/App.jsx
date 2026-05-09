import { useState } from 'react';
import TabBar from './components/TabBar';
import SaveSheet from './components/SaveSheet';
import Home from './screens/Home';
import Library from './screens/Library';
import Discover from './screens/Discover';
import Profile from './screens/Profile';

const SCREENS = { home: Home, discover: Discover, library: Library, profile: Profile };

export default function App() {
  const [tab, setTab] = useState('home');
  const [sheetOpen, setSheetOpen] = useState(false);
  const [toast, setToast] = useState(false);

  const handleSaved = () => {
    setToast(true);
    setTimeout(() => setToast(false), 1800);
  };

  const Screen = SCREENS[tab] ?? Home;

  return (
    <div className="pl-app">
      <Screen />
      <TabBar tab={tab} onTab={setTab} onSave={() => setSheetOpen(true)} />
      <SaveSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        onSaved={handleSaved}
      />
      <div className={`pl-toast${toast ? ' on' : ''}`}>
        <span className="pl-toast-check">
          <svg fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor">
            <path d="m5 12 5 5L20 7" />
          </svg>
        </span>
        저장됨
      </div>
    </div>
  );
}
