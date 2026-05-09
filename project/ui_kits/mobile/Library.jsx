/* global React, PL */
const { useState: useStateLib } = React;

function LibraryScreen() {
  const { Ic, I, TopBar } = PL;
  const [tab, setTab] = useStateLib("link");

  const linkFolders = [
    { name: "에디토리얼", count: 18, color: "fashion" },
    { name: "추천 카페", count: 11, color: "food" },
    { name: "인테리어 영감", count: 7, color: "etc" },
    { name: "여행 루트", count: 4, color: "beauty" },
  ];
  const productFolders = [
    { name: "패션", count: 12, color: "fashion" },
    { name: "뷰티", count: 7, color: "beauty" },
    { name: "식품", count: 2, color: "food" },
    { name: "기타", count: 0, color: "etc" },
  ];
  const folders = tab === "link" ? linkFolders : productFolders;

  return (
    <div className="pl-screen">
      <TopBar />
      <div className="pl-scroll">
        <div className="pl-page-head">
          <h1 className="pl-page-title">보관함</h1>
          <button className="pl-text-btn">
            <Ic d={I.edit} size={14} /> 폴더 수정
          </button>
        </div>

        <div className="pl-pill-tabs">
          <button className={tab === "link" ? "on" : ""} onClick={() => setTab("link")}>링크 저장</button>
          <button className={tab === "product" ? "on" : ""} onClick={() => setTab("product")}>상품 저장</button>
        </div>

        <div className="pl-folder-list">
          {folders.map((f) => (
            <button key={f.name} className="pl-folder-row">
              <span className="pl-cat-dot" data-cat={f.color}></span>
              <span className="pl-folder-name">{f.name}</span>
              <span className="pl-folder-count">{f.count}</span>
              <span className="pl-folder-arrow">›</span>
            </button>
          ))}
          <button className="pl-folder-row pl-folder-row-add">
            <span className="pl-folder-add-icon"><Ic d={I.plus} size={16} /></span>
            <span className="pl-folder-name pl-muted">새 폴더 만들기</span>
          </button>
        </div>

        <div className="pl-section" style={{ marginTop: 24 }}>
          <div className="pl-section-head">
            <h2>최근에 저장한 픽</h2>
            <button className="pl-text-btn">더보기 <Ic d={I.chevron} size={14} /></button>
          </div>
          <div className="pl-grid-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="pl-pick-card">
                <div className="pl-thumb pl-thumb-md"><Ic d={I.imageOff} size={20} /></div>
                <div className="pl-pick-name">저장된 픽 {i}</div>
                <div className="pl-pick-meta">2일 전</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pl-bottom-pad"></div>
      </div>
    </div>
  );
}

window.LibraryScreen = LibraryScreen;
