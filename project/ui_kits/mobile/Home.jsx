/* global React, PL */
const { useState: useStateHome } = React;

function HomeScreen({ onOpenItem }) {
  const { Ic, I, TopBar } = PL;

  const ranking = [
    { rank: 1, name: "실키 글로우 쿠션", by: "@influencer_1", dday: "D-5", cat: "beauty" },
    { rank: 2, name: "데일리 베이지 머플러", by: "@influencer_2", dday: "D-1", cat: "fashion" },
    { rank: 3, name: "무설탕 그릭요거트", by: "@influencer_3", dday: "D-8", cat: "food" },
    { rank: 4, name: "린넨 와이드 셋업", by: "@influencer_4", dday: "D-3", cat: "fashion" },
    { rank: 5, name: "프렌치 디저트 박스", by: "@influencer_5", dday: "D-12", cat: "food" },
  ];

  return (
    <div className="pl-screen">
      <TopBar />
      <div className="pl-scroll">
        {/* Welcome — paper card, no gradient */}
        {/* Welcome — minimal */}
        <section className="pl-welcome">
          <h1 className="pl-welcome-title">흔어진 모든 링크,<br/>한 곳에.</h1>
        </section>

        {/* 저장 랭킹 */}
        <section className="pl-section">
          <div className="pl-section-head">
            <h2>저장 랭킹</h2>
            <button className="pl-text-btn">
              인기순 <Ic d={I.filter} size={14} />
            </button>
          </div>

          <div className="pl-rank-list">
            {ranking.map((r) => (
              <button key={r.rank} className="pl-rank-row" onClick={() => onOpenItem?.(r)}>
                <div className={`pl-rank-num ${r.rank <= 3 ? "top" : ""}`}>{r.rank}</div>
                <div className="pl-thumb pl-thumb-sm" data-cat={r.cat}>
                  <Ic d={I.imageOff} size={16} />
                </div>
                <div className="pl-rank-body">
                  <div className="pl-rank-name">{r.name}</div>
                  <div className="pl-rank-by">{r.by}</div>
                </div>
                <span className="pl-dday">{r.dday}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Following picks */}
        <section className="pl-section">
          <div className="pl-section-head">
            <h2>팔로우 한 사람들</h2>
            <button className="pl-text-btn">전체보기 <Ic d={I.chevron} size={14} /></button>
          </div>
          <div className="pl-h-scroll">
            {[
              { n: "lemon_b", c: 12 },
              { n: "ssol_pick", c: 7 },
              { n: "yujin.log", c: 24 },
              { n: "kkomi", c: 5 },
              { n: "yumi_x", c: 9 },
            ].map((u) => (
              <div key={u.n} className="pl-user-card">
                <div className="pl-avatar pl-avatar-md"></div>
                <div className="pl-user-name">{u.n}</div>
                <div className="pl-user-meta">새 픽 {u.c}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="pl-bottom-pad"></div>
      </div>
    </div>
  );
}

window.HomeScreen = HomeScreen;
