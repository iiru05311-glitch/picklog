import Icon from './Icon';

export default function TopBar({ title, right, leftBack, onBack }) {
  return (
    <div className="pl-topbar">
      {leftBack ? (
        <button className="pl-iconbtn" onClick={onBack}>
          <Icon name="back" />
        </button>
      ) : (
        <div className="pl-wordmark">
          Pick<span className="pl-wordmark-dot" />Log
        </div>
      )}
      <div className="pl-topbar-title">{title}</div>
      <div className="pl-topbar-right">
        {right ?? <button className="pl-iconbtn"><Icon name="bell" /></button>}
      </div>
    </div>
  );
}
