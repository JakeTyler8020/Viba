import styles from "./ComingSoon.module.css";

export default function ComingSoonPage() {
  return (
    <main className={styles.page}>
      <div className={styles.location}>
        TRICHY <span>·</span> INDIA
      </div>

      <section className={styles.content}>
        <div className={styles.logoSection}>
          <img
            src="/images/viba-logo.png"
            alt="VIBA"
            className={styles.logo}
          />
        </div>

        <p className={styles.eyebrow}>
          A HAPPY LITTLE PLACE IS TAKING SHAPE
        </p>

        <h1 className={styles.heading}>
          <span>Something</span>
          <span className={styles.italic}>delightful</span>
          <span>is coming.</span>
        </h1>

        <p className={styles.description}>
          A thoughtfully curated world of Korean stationery, cute gifts,
          desk décor and everyday treasures—made for little moments that
          deserve more joy.
        </p>

        <div className={styles.divider}>
          <span className={styles.line} />
          <span className={styles.heart}>♡</span>
          <span className={styles.line} />
        </div>

        <p className={styles.tagline}>
          IF IT DOESN&apos;T DELIGHT,
          <br />
          IT DOESN&apos;T BELONG IN VIBA.
        </p>

        <div className={styles.categories}>
          <span>STATIONERY</span>
          <span>GIFTS</span>
          <span>DESK DÉCOR</span>
          <span>MORE JOY</span>
        </div>

        <div className={styles.storeScene}>
          <svg
            viewBox="0 0 820 290"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.storeSvg}
            aria-hidden="true"
          >
            <line x1="0" y1="270" x2="820" y2="270" />

            <line x1="78" y1="112" x2="78" y2="270" />
            <line x1="66" y1="270" x2="90" y2="270" />
            <path d="M64 112 H92 L87 87 H69 Z" />
            <path d="M70 87 Q78 71 86 87" />
            <circle cx="78" cy="69" r="3" />

            <rect x="125" y="174" width="95" height="96" rx="3" />
            <text x="172" y="199" textAnchor="middle">
              Good
            </text>
            <text x="172" y="220" textAnchor="middle">
              Things
            </text>
            <text x="172" y="241" textAnchor="middle">
              Ahead
            </text>
            <path d="M165 252 Q172 243 179 252 Q172 261 165 252" />

            <line x1="254" y1="233" x2="254" y2="270" />
            <path d="M254 245 Q237 234 239 220 Q253 225 254 245" />
            <path d="M254 238 Q269 225 270 211 Q256 216 254 238" />
            <rect x="243" y="256" width="22" height="14" />

            <rect x="292" y="113" width="284" height="157" />

            <path d="M280 113 L298 72 H570 L590 113 Z" />

            <line x1="313" y1="73" x2="305" y2="113" />
            <line x1="350" y1="73" x2="345" y2="113" />
            <line x1="388" y1="73" x2="386" y2="113" />
            <line x1="428" y1="73" x2="428" y2="113" />
            <line x1="468" y1="73" x2="470" y2="113" />
            <line x1="508" y1="73" x2="513" y2="113" />
            <line x1="545" y1="73" x2="553" y2="113" />

            <path d="M280 113 Q296 129 312 113" />
            <path d="M312 113 Q328 129 344 113" />
            <path d="M344 113 Q360 129 376 113" />
            <path d="M376 113 Q392 129 408 113" />
            <path d="M408 113 Q424 129 440 113" />
            <path d="M440 113 Q456 129 472 113" />
            <path d="M472 113 Q488 129 504 113" />
            <path d="M504 113 Q520 129 536 113" />
            <path d="M536 113 Q553 129 570 113" />
            <path d="M570 113 Q580 126 590 113" />

            <rect x="387" y="124" width="93" height="25" rx="4" />
            <text x="434" y="142" textAnchor="middle">
              VIBA
            </text>

            <rect x="307" y="153" width="75" height="94" />
            <line x1="307" y1="215" x2="382" y2="215" />

            <rect x="317" y="194" width="8" height="20" />
            <rect x="330" y="187" width="9" height="27" />
            <rect x="344" y="192" width="11" height="22" />
            <rect x="361" y="184" width="9" height="30" />

            <rect x="397" y="157" width="70" height="113" />
            <rect x="405" y="166" width="54" height="65" />
            <circle cx="451" cy="239" r="2" />

            <rect x="482" y="153" width="78" height="94" />
            <line x1="482" y1="215" x2="560" y2="215" />

            <rect x="492" y="188" width="9" height="26" />
            <rect x="506" y="194" width="11" height="20" />
            <rect x="523" y="185" width="10" height="29" />
            <rect x="539" y="191" width="9" height="23" />

            <line x1="605" y1="233" x2="605" y2="270" />
            <path d="M605 244 Q588 232 590 218 Q604 225 605 244" />
            <path d="M605 238 Q620 225 622 211 Q608 216 605 238" />
            <rect x="594" y="256" width="23" height="14" />

            <line x1="664" y1="236" x2="755" y2="236" />
            <line x1="670" y1="247" x2="749" y2="247" />
            <line x1="681" y1="247" x2="674" y2="270" />
            <line x1="738" y1="247" x2="745" y2="270" />
            <line x1="674" y1="224" x2="745" y2="224" />

            <text x="681" y="151" className={styles.handwriting}>
              See you
            </text>

            <text x="700" y="176" className={styles.handwriting}>
              soon
            </text>

            <path d="M718 195 Q730 177 742 195 Q730 211 718 195" />
          </svg>
        </div>

        <p className={styles.footerText}>
          GOOD THINGS ARE ON THEIR WAY.
        </p>

        <div className={styles.bottomSpace} />
      </section>
    </main>
  );
}