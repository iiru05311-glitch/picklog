/* global React, PL */
const { useState: useStateSave, useEffect: useEffectSave } = React;

function SaveSheet({ open, onClose, onSaved }) {
  const { Ic, I } = PL;
  const [mode, setMode] = useStateSave("link");
  const [url, setUrl] = useStateSave("");
  const [note, setNote] = useStateSave("");
  const [folder, setFolder] = useStateSave("패션");

  useEffectSave(() => {
    if (!open) { setUrl(""); setNote(""); }
  }, [open]);

  const folders = [
    { name: "패션", c: "fashion" },
    { name: "뷰티", c: "beauty" },
    { name: "식품", c: "food" },
    { name: "기타", c: "etc" },
  ];

  return (
    <div className={`pl-sheet-root ${open ? "open" : ""}`} onClick={onClose}>
      <div className="pl-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="pl-sheet-grabber"></div>
        <div className="pl-sheet-head">
          <button className="pl-text-btn" onClick={onClose}>취소</button>
          <div className="pl-sheet-title">새 픽</div>
          <button
            className="pl-text-btn pl-text-btn-accent"
            disabled={!url}
            onClick={() => { onSaved?.(); onClose?.(); }}
          >저장</button>
        </div>

        <div className="pl-sheet-body">
          <div className="pl-pill-tabs">
            <button className={mode === "link" ? "on" : ""} onClick={() => setMode("link")}>링크</button>
            <button className={mode === "product" ? "on" : ""} onClick={() => setMode("product")}>상품</button>
          </div>

          <div className="pl-field">
            <label>URL</label>
            <div className="pl-input-with-icon">
              <Ic d={I.link} size={16} />
              <input
                className="pl-input"
                placeholder="https://"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                autoFocus
              />
            </div>
          </div>

          {url && (
            <div className="pl-preview-card">
              <div className="pl-thumb pl-thumb-md"><Ic d={I.imageOff} size={20} /></div>
              <div className="pl-preview-body">
                <div className="pl-preview-title">미리보기 — 가져오는 중</div>
                <div className="pl-preview-meta pl-mono">{url.slice(0, 36) || "—"}</div>
              </div>
            </div>
          )}

          <div className="pl-field">
            <label>폴더</label>
            <div className="pl-folder-pickrow">
              {folders.map((f) => (
                <button
                  key={f.name}
                  className={`pl-folder-pick ${folder === f.name ? "on" : ""}`}
                  onClick={() => setFolder(f.name)}
                >
                  <span className="pl-cat-dot" data-cat={f.c}></span>
                  {f.name}
                </button>
              ))}
            </div>
          </div>

          <div className="pl-field">
            <label>노트 <span className="pl-muted pl-meta">(선택)</span></label>
            <textarea
              className="pl-textarea"
              placeholder="이 픽에 대한 짧은 메모"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
            />
          </div>

          <div className="pl-field">
            <label>공개 범위</label>
            <div className="pl-pill-tabs">
              <button className="on">공개</button>
              <button>친구만</button>
              <button>비공개</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.SaveSheet = SaveSheet;
