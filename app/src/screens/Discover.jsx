import { useState } from 'react';
import TopBar from '../components/TopBar';
import Icon from '../components/Icon';

const TRENDING = ['여름 셋업', '아이크림 추천', '디저트', '린넨 셔츠', '홈카페', '라탄 가방'];

const PEOPLE = [
  { n: 'yujin.log',  b: '에디터 · 패션',      followers: '2.1k' },
  { n: 'lemon_b',    b: '뷰티 큐레이터',        followers: '984'  },
  { n: 'kkomi',      b: '홈카페 · 디저트',      followers: '412'  },
  { n: 'ssol_pick',  b: '여행 · 인테리어',      followers: '3.4k' },
];

const CATEGORIES = [
  { l: '패션',     c: 'fashion' },
  { l: '뷰티',     c: 'beauty'  },
  { l: '식품',     c: 'food'    },
  { l: '인테리어', c: 'etc'     },
];

export default function Discover() {
  const [q, setQ] = useState('');

  return (
    <div className="pl-screen">
      <TopBar />
      <div className="pl-scroll">

        <div className="pl-search-wrap">
          <Icon name="search" size={18} className="pl-search-icon" />
          <input
            className="pl-search-input"
            placeholder="링크, 상품 또는 사용자 검색"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>

        <section className="pl-section">
          <div className="pl-section-head">
            <h2>지금 인기있는 검색어</h2>
          </div>
          <div className="pl-chip-row">
            {TRENDING.map((t, i) => (
              <span key={t} className="pl-chip">
                <span className="pl-chip-num">{i + 1}</span>
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className="pl-section">
          <div className="pl-section-head">
            <h2>추천 큐레이터</h2>
          </div>
          <div className="pl-people-list">
            {PEOPLE.map((p) => (
              <div key={p.n} className="pl-person-row">
                <div className="pl-avatar pl-avatar-md" />
                <div className="pl-person-body">
                  <div className="pl-person-name">{p.n}</div>
                  <div className="pl-person-bio">{p.b} · 팔로워 {p.followers}</div>
                </div>
                <button className="pl-btn pl-btn-secondary pl-btn-sm">팔로우</button>
              </div>
            ))}
          </div>
        </section>

        <section className="pl-section">
          <div className="pl-section-head">
            <h2>카테고리 둘러보기</h2>
          </div>
          <div className="pl-cat-grid">
            {CATEGORIES.map((c) => (
              <button key={c.l} className="pl-cat-card">
                <span className="pl-cat-dot pl-cat-dot-lg" data-cat={c.c} />
                <span className="pl-cat-label">{c.l}</span>
              </button>
            ))}
          </div>
        </section>

        <div className="pl-bottom-pad" />
      </div>
    </div>
  );
}
