export default function MedalHall() {
  return (
    <section className="section-block vault-section" id="achievements">
      <div className="container">
        <div className="section-title-wrap text-center gs-reveal">
          <span className="eyebrow-tag">THE TROPHY ARCHIVE</span>
          <h2 className="editorial-title">
            HALL OF <em className="champagne-serif">3,000+ MEDALS</em>
          </h2>
          <p className="section-lead-para">
            Four decades of competitive preeminence across State, National, Asian, and World martial arts tournaments.
          </p>
        </div>

        <div className="vault-curated-grid gs-reveal">
          {/* Monolithic Trophy Spotlight */}
          <div className="vault-monolith-card">
            <div className="monolith-laurel">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d4b577"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="6"></circle>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
              </svg>
            </div>
            <div className="monolith-counter" data-counter="40" data-suffix="+">
              40+
            </div>
            <h3 className="monolith-title">Championship Trophies</h3>
            <p className="monolith-desc">
              Consecutive Best Academy designations across All-India Invitations, National Shotokan federations, and Asian Combat Games.
            </p>
            <div className="monolith-tags">
              <span>National Federation</span>
              <span>All India Kumite</span>
              <span>WAKO Kickboxing</span>
              <span>Asian Open</span>
            </div>
          </div>

          {/* Archival Medal Registry */}
          <div className="vault-registry-col">
            {/* Gold Card */}
            <div className="registry-medal-card card-gold">
              <div className="medal-tier-badge">
                <span className="tier-dot dot-gold"></span>
                <span>GOLD &bull; 1ST POSITION</span>
              </div>
              <div className="registry-card-content">
                <div className="registry-counter" data-counter="1200" data-suffix="+">
                  1,200+
                </div>
                <div className="registry-text">
                  <h4>National &amp; International Gold</h4>
                  <p>
                    Tournament champions in individual Kata, team Kata, and full-contact Kumite across multiple age and weight categories.
                  </p>
                </div>
              </div>
            </div>

            {/* Silver Card */}
            <div className="registry-medal-card card-silver">
              <div className="medal-tier-badge">
                <span className="tier-dot dot-silver"></span>
                <span>SILVER &bull; 2ND POSITION</span>
              </div>
              <div className="registry-card-content">
                <div className="registry-counter" data-counter="1000" data-suffix="+">
                  1,000+
                </div>
                <div className="registry-text">
                  <h4>State &amp; National Silver</h4>
                  <p>
                    Distinguished finalists demonstrating supreme poise, speed, and technical precision at the highest championship levels.
                  </p>
                </div>
              </div>
            </div>

            {/* Bronze Card */}
            <div className="registry-medal-card card-bronze">
              <div className="medal-tier-badge">
                <span className="tier-dot dot-bronze"></span>
                <span>BRONZE &bull; 3RD POSITION</span>
              </div>
              <div className="registry-card-content">
                <div className="registry-counter" data-counter="800" data-suffix="+">
                  800+
                </div>
                <div className="registry-text">
                  <h4>Podium Bronze Honors</h4>
                  <p>
                    Consistent podium placements sustaining the academy&apos;s reputation across junior, youth, and senior weight divisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Archival Tournament Credentials */}
        <div className="vault-credentials-deck gs-reveal">
          <div className="credential-box">
            <span className="credential-scope">INTERNATIONAL</span>
            <h4>Asian Martial Arts Cup</h4>
            <p>14 podium finishes by junior squad members representing India with athletic honor.</p>
          </div>
          <div className="credential-box">
            <span className="credential-scope">NATIONAL</span>
            <h4>All-India Shotokan Nationals</h4>
            <p>Overall Team Champions across three consecutive editions with 45+ individual gold honors.</p>
          </div>
          <div className="credential-box">
            <span className="credential-scope">KICKBOXING</span>
            <h4>State Full-Contact Tournament</h4>
            <p>Clean sweep across both men&apos;s and women&apos;s kickboxing weight brackets.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
