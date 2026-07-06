export default function LoadingBar({ total, points }) {
  return (
    <div className="mc-loading">
      <p className="mc-loading-text">
        {points} / {total}
      </p>
      <div
        className="mc-loading-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={points}
      >
        <div
          className="mc-loading-fill"
          style={{ width: `${(points / total) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
