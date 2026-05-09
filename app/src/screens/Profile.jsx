import TopBar from '../components/TopBar';
import Icon from '../components/Icon';

const CATS = [
  { label: '뷰티', c: 'beauty'  },
  { label: '패션', c: 'fashion' },
  { label: '식품', c: 'food'    },
];

export default function Profile() {
  return (
    <div className="pl-screen">
      <TopBar
        right={
          <>
            <button className="pl-iconbtn"><Icon name="share" /></button>
            <button className="pl-iconbtn"><Icon name="settings" /></button>
          </>
        }
      />
      <div className="pl-scroll">

        <div className="pl-profile-head">
          <div className="pl-avatar pl-avatar-lg" />
          <div className="pl-profile-stats">
            <div><strong>1</strong><span>게시물</span></div>
            <div><strong>187</strong><span>팔로워</span></div>
            <div><strong>197</strong><span>팔로잉</span></div>
          </div>
        </div>

        <div className="pl-profile-meta">
          <h2 className="pl-profile-handle">pick_log_user</h2>
          <p className="pl-profile-bio">뷰티 · 패션 · 식품 큐레이터</p>
          <div className="pl-profile-cats">
            {CATS.map((c) => (
              <span key={c.label} className="pl-tag-chip">
                <span className="pl-cat-dot" data-cat={c.c} />
                {c.label}
              </span>
            ))}
          </div>
        </div>

        <div className="pl-profile-actions">
          <button className="pl-btn pl-btn-secondary pl-btn-grow">프로필 편집</button>
          <button className="pl-iconbtn pl-iconbtn-bordered">
            <Icon name="settings" size={18} />
          </button>
        </div>

        <div className="pl-icon-tabs">
          <button className="on"><Icon name="grid" size={20} /></button>
          <button><Icon name="bookmark" size={20} /></button>
          <button><Icon name="refresh" size={20} /></button>
          <button><Icon name="card" size={20} /></button>
        </div>

        <div className="pl-profile-grid">
          <div className="pl-profile-tile">
            <div className="pl-thumb pl-thumb-tile">
              <Icon name="imageOff" size={20} />
            </div>
            <div className="pl-profile-tile-cap">무설탕 그릭요거트</div>
          </div>
          {[2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <div key={n} className="pl-profile-tile">
              <div className="pl-thumb pl-thumb-tile" />
            </div>
          ))}
        </div>

        <div className="pl-bottom-pad" />
      </div>
    </div>
  );
}
