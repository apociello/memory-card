export default function LoadingBar({ total, points }) {
  return (
    <div className="mc-loading">
      <p className="mc-loading-text">
        {points} / {total}
      </p>
      <div className="mc-loading-track">
        <div
          className="mc-loading-fill"
          style={{ width: `${(points / total) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
