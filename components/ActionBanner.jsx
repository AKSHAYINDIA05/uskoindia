export default function ActionBanner() {
  const bgUrl = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/training-action.jpg`;
  return (
    <div
      className="parallax-divider"
      style={{ backgroundImage: `url(${bgUrl})` }}
      aria-hidden="true"
    >
      <div className="parallax-overlay"></div>
      <div className="parallax-content gs-reveal">
        <p className="parallax-quote">
          &ldquo;True victory is victory over oneself. A warrior knows no limits, only horizons to surpass.&rdquo;
        </p>
        <span className="parallax-author">The USKO Warrior Creed</span>
      </div>
    </div>
  );
}
