import Image from 'next/image';

export default function Heritage() {
  return (
    <section className="section-block heritage-section" id="about">
      <div className="container">
        <div className="section-title-wrap text-center gs-reveal">
          <span className="eyebrow-tag">TRADITION &bull; HONOUR &bull; MASTERY</span>
          <h2 className="editorial-title">
            AN UNBROKEN LINEAGE OF <em className="champagne-serif">EXCELLENCE</em>
          </h2>
          <p className="section-lead-para">
            Founded on the classical tenets of Master Gichin Funakoshi, USKO India nurtures complete practitioners &mdash; harmonizing bodily strength, mental clarity, and moral discipline.
          </p>
        </div>

        <div className="heritage-grid">
          {/* Left: Atmospheric Dojo Photography with Crest Inset */}
          <div className="heritage-visual-col gs-reveal">
            <div className="heritage-photo-frame">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/dojo-atmosphere.jpg`}
                alt="Universe Shotokan Karate Organisation Traditional Tatami Dojo"
                width={800}
                height={600}
                className="heritage-dojo-img"
              />
              <div className="heritage-seal-badge">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.jpg`}
                  alt="Official Seal"
                  width={42}
                  height={42}
                  className="heritage-seal-img"
                />
                <div className="heritage-seal-text">
                  <strong>USKO INDIA</strong>
                  <span>ESTABLISHED ACADEMY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3 Institutional Pillars */}
          <div className="heritage-content-col gs-reveal">
            <div className="pillar-row">
              <span className="pillar-roman">I</span>
              <div className="pillar-details">
                <h3>Perfection of Character</h3>
                <p>
                  Technique without moral grounding is hollow. We guide students from their first white belt bow to cultivate humility, poise under pressure, and reverence for family and society.
                </p>
              </div>
            </div>

            <div className="pillar-row">
              <span className="pillar-roman">II</span>
              <div className="pillar-details">
                <h3>Championship Pedigree (3,000+ Podiums)</h3>
                <p>
                  Our competition curriculum adheres to the rigorous standards of World Karate &amp; Kickboxing Federations. Our athletes consistently earn State, National, and Asian championship titles.
                </p>
              </div>
            </div>

            <div className="pillar-row">
              <span className="pillar-roman">III</span>
              <div className="pillar-details">
                <h3>Complete Combat Science</h3>
                <p>
                  Bridging century-old Shotokan Kata with modern full-contact Kickboxing striking mechanics, functional strength development, and tactical women&apos;s personal safety.
                </p>
              </div>
            </div>

            {/* Archival Quote Block */}
            <blockquote className="archival-quote">
              <p>
                &ldquo;Karate begins and ends with courtesy. The ultimate aim lies not in victory or defeat, but in the perfection of character.&rdquo;
              </p>
              <cite>&mdash; Master Gichin Funakoshi, Father of Modern Karate</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
