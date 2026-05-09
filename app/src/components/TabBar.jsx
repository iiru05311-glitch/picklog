import Icon from './Icon';

export default function TabBar({ tab, onTab, onSave }) {
  const item = (key, icon, label) => (
    <button
      key={key}
      className="pl-tab"
      data-on={String(tab === key)}
      onClick={() => onTab(key)}
    >
      <Icon name={icon} size={22} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="pl-tabbar">
      {item('home', 'home', '홈')}
      {item('discover', 'search', '검색')}
      <div className="pl-tab-spacer">
        <button className="pl-fab" onClick={onSave} aria-label="저장">
          <Icon name="plus" size={22} />
        </button>
        <span className="pl-fab-label">저장</span>
      </div>
      {item('library', 'bookmark', '보관함')}
      {item('profile', 'user', '마이')}
    </div>
  );
}
