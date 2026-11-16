
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Layers3,
  PlayCircle,
  ShieldCheck,
  Swords,
  Target,
  Users,
  Zap,
} from "lucide-react";

const APP_URL = "https://app.floorlabx.com";
const LOGO_URL = "https://app.floorlabx.com/full.png";

const features = [
  {
    id: "trening",
    icon: ClipboardList,
    title: "Trening",
    description:
      "Øvelsesbank, treningsplaner og taktikk – samlet på ett sted.",
  },
  {
    id: "kamp",
    icon: Swords,
    title: "Kamp",
    description:
      "Lagoppstillinger, rekker, powerplay, boxplay og kampforberedelser.",
  },
  {
    id: "klubb",
    icon: Users,
    title: "Klubb",
    description:
      "Samle lag, trenere og ressurser i en felles løsning for hele klubben.",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand"
            href="#hjem"
            aria-label="FloorLabX forside"
          >
            <img
              src={LOGO_URL}
              alt="FloorLabX"
              style={{
                display: "block",
                width: "220px",
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "6px",
              }}
            />
          </a>

          <nav className="desktop-nav" aria-label="Hovedmeny">
            <a href="#hjem">Forside</a>
            <a href="#trening">Trening</a>
            <a href="#kamp">Kamp</a>
            <a href="#trenere">For trenere</a>
            <a href="#klubber">For klubber</a>
            <a href="#funksjoner">Funksjoner</a>
            <a href="#om">Om FloorLabX</a>
          </nav>

          <div className="header-actions">
            <a
              className="button button-outline login-button"
              href={APP_URL}
            >
              Logg inn
            </a>
            <a
              className="button button-primary"
              href="#funksjoner"
            >
              Utforsk
            </a>
          </div>
        </div>
      </header>

      <section id="hjem" className="hero">
        <div className="hero-glow" />

        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow">
              UTVIKLET FOR INNEBANDY
            </p>

            <h1>
              Én plattform.
              <br />
              Hele innebandyhverdagen.
              <br />
              <span>På ett sted.</span>
            </h1>

            <p className="hero-description">
              Planlegg treninger, organiser kamper og utvikle spillerne.
              <br />
              Alt samlet i FloorLabX – fra den enkelte trener
              til hele klubben.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary button-large"
                href="#funksjoner"
              >
                Utforsk FloorLabX
                <ArrowRight size={19} />
              </a>

              <a
                className="button button-outline button-large"
                href="#trenere"
              >
                <PlayCircle size={20} />
                Se mulighetene
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />

            <div className="art-floorball">
              <span className="ball-hole hole-one" />
              <span className="ball-hole hole-two" />
              <span className="ball-hole hole-three" />
              <span className="ball-hole hole-four" />
              <span className="ball-hole hole-five" />
            </div>

            <div className="art-stick" />
            <div className="art-stick-head" />
            <div className="art-light" />
          </div>

          <div className="feature-grid" id="funksjoner">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  id={feature.id}
                  className="feature-card"
                  key={feature.id}
                >
                  <Icon
                    className="feature-icon"
                    size={52}
                    strokeWidth={1.6}
                  />

                  <div>
                    <h2>{feature.title}</h2>
                    <p>{feature.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="benefit-strip">
        <div className="container benefit-inner">
          <div>
            <CalendarDays />
            Planlegg og strukturer
          </div>
          <div>
            <Target />
            Utvikle spillere og lag
          </div>
          <div>
            <Users />
            Del kunnskap i klubben
          </div>
          <div>
            <Zap />
            Bygget for innebandy
          </div>
        </div>
      </section>

      <section
        id="trenere"
        className="content-section section-dark"
      >
        <div className="container two-column">
          <div>
            <p className="eyebrow">FOR TRENERE</p>

            <h2>Mer tid til det som betyr noe.</h2>

            <p className="section-lead">
              FloorLabX skal gjøre det enklere å planlegge gode
              treninger, forberede kamper og utvikle laget
              gjennom hele sesongen.
            </p>

            <ul className="check-list">
              <li>
                <CheckCircle2 />
                Finn og organiser øvelser
              </li>
              <li>
                <CheckCircle2 />
                Bygg treningsøkter
              </li>
              <li>
                <CheckCircle2 />
                Forbered lagoppstillinger og rekker
              </li>
              <li>
                <CheckCircle2 />
                Visualiser taktiske ideer
              </li>
            </ul>
          </div>

          <div className="showcase-card">
            <div className="showcase-top">
              <BookOpen />
              TRENERENS VERKTØYKASSE
            </div>

            <div className="showcase-title">
              Fra idé til gjennomført trening
            </div>

            <div className="showcase-steps">
              <div>
                <span>01</span>
                Velg øvelser
              </div>
              <div>
                <span>02</span>
                Planlegg økten
              </div>
              <div>
                <span>03</span>
                Del med trenerteamet
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="klubber"
        className="content-section section-light"
      >
        <div className="container two-column">
          <div className="club-visual">
            <div className="club-center">
              <Layers3 size={44} />
              FLOORLABX
            </div>

            <div className="club-tags">
              <span>Senior</span>
              <span>Ungdom</span>
              <span>Bredde</span>
            </div>
          </div>

          <div>
            <p className="eyebrow">FOR KLUBBER</p>

            <h2>Én klubb. Felles struktur.</h2>

            <p className="section-lead">
              Samle trenere, lag og ressurser på ett sted.
              Bygg en felles treningskultur og gjør kunnskap
              tilgjengelig på tvers av klubbens lag.
            </p>

            <ul className="check-list">
              <li>
                <CheckCircle2 />
                Struktur for flere lag
              </li>
              <li>
                <CheckCircle2 />
                Del øvelser og treningsressurser
              </li>
              <li>
                <CheckCircle2 />
                Roller og tilgangsstyring
              </li>
              <li>
                <CheckCircle2 />
                Mindre dobbeltarbeid
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section section-dark">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">PLATTFORMEN</p>

            <h2>Bygget rundt trenerens hverdag</h2>

            <p>
              Én sammenhengende løsning – fra treningsfeltet
              til kampdagen.
            </p>
          </div>

          <div className="capability-grid">
            <div>
              <BookOpen />
              <h3>Øvelsesbank</h3>
              <p>Samle, søk og organiser øvelser.</p>
            </div>

            <div>
              <CalendarDays />
              <h3>Treningsplanlegging</h3>
              <p>Bygg opp økter og sesongplaner.</p>
            </div>

            <div>
              <Swords />
              <h3>Kampadministrasjon</h3>
              <p>Rekker, spillere og kampforberedelser.</p>
            </div>

            <div>
              <Target />
              <h3>Taktikktavle</h3>
              <p>Vis ideer og bevegelsesmønstre.</p>
            </div>

            <div>
              <ShieldCheck />
              <h3>Klubbtilgang</h3>
              <p>Riktige roller og tilganger.</p>
            </div>

            <div>
              <Zap />
              <h3>Videreutvikling</h3>
              <p>Flere funksjoner er under utvikling.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="om"
        className="content-section about-section"
      >
        <div className="container section-heading">
          <p className="eyebrow">OM FLOORLABX</p>

          <h2>Utviklet med innebandyen i sentrum.</h2>

          <p>
            FloorLabX utvikles for å gi trenere bedre verktøy
            og klubber en felles plattform for planlegging,
            samarbeid og utvikling. Plattformen er under
            utvikling og forberedes for lukket betatesting.
          </p>

          <a
            className="button button-primary button-large"
            href={APP_URL}
          >
            Gå til trenerplattformen
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <strong>
            FloorLab<span>X</span>
          </strong>

          <p>
            Utviklet for innebandy · ©{" "}
            {new Date().getFullYear()} FloorLabX
          </p>

          <a href={APP_URL}>Logg inn</a>
        </div>
      </footer>
    </main>
  );
}
