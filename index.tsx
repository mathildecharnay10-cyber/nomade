import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mountains.jpg";
import desertImg from "@/assets/dest-desert.jpg";
import fjordImg from "@/assets/dest-fjord.jpg";
import baliImg from "@/assets/dest-bali.jpg";
import patagoniaImg from "@/assets/dest-patagonia.jpg";
import nomadImg from "@/assets/about-nomad.jpg";
import { ArrowRight, ArrowUpRight, MapPin, Calendar, Compass, Search, Star, Plus } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const destinations = [
  { name: "Désert du Sahara", country: "Maroc", img: desertImg, days: "9 jours", tag: "Aventure" },
  { name: "Îles Féroé", country: "Atlantique Nord", img: fjordImg, days: "7 jours", tag: "Contemplation" },
  { name: "Rizières de Bali", country: "Indonésie", img: baliImg, days: "12 jours", tag: "Immersion" },
  { name: "Patagonie sauvage", country: "Argentine", img: patagoniaImg, days: "14 jours", tag: "Trek" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Vallée brumeuse au coucher du soleil"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Nav */}
        <header className="absolute inset-x-0 top-0 z-20 px-4 pt-5 sm:px-8">
          <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full glass-dark px-3 py-2 text-primary-foreground">
            <div className="flex items-center gap-8">
              <a href="#" className="pl-3 font-display text-2xl leading-none">nomade<span className="text-ember">.</span></a>
              <ul className="hidden items-center gap-8 text-sm font-light md:flex">
                <li><a href="#destinations" className="opacity-80 hover:opacity-100">Destinations</a></li>
                <li><a href="#experiences" className="opacity-80 hover:opacity-100">Expériences</a></li>
                <li><a href="#about" className="opacity-80 hover:opacity-100">Notre approche</a></li>
                <li><a href="#journal" className="opacity-80 hover:opacity-100">Journal</a></li>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <button className="hidden rounded-full px-4 py-2 text-sm font-light opacity-80 hover:opacity-100 sm:block">Se connecter</button>
              <button className="rounded-full bg-primary-foreground px-4 py-2 text-sm font-medium text-primary transition hover:scale-[1.03]">
                Réserver
              </button>
            </div>
          </nav>
        </header>

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-28 sm:px-8 sm:pb-36">
          <div className="glass-dark inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-light text-primary-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
            Saison 2026 — réservations ouvertes
          </div>

          <h1 className="mt-6 font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.85] tracking-tight text-primary-foreground">
            Voyager <em className="italic opacity-90">autrement</em>,<br />
            partir <em className="italic opacity-90">vraiment</em>.
          </h1>

          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-base font-light leading-relaxed text-primary-foreground/80">
              Nomade dessine des itinéraires confidentiels pour les voyageurs curieux. Des lieux choisis, des rencontres rares, le temps comme seul horizon.
            </p>
            <a href="#destinations" className="group inline-flex items-center gap-3 rounded-full bg-primary-foreground py-3 pl-6 pr-2 text-sm font-medium text-primary">
              Commencer le voyage
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember text-accent-foreground transition group-hover:rotate-45">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Floating glass card */}
        <div className="absolute right-4 top-28 z-10 hidden w-64 animate-float lg:block xl:right-12">
          <div className="glass rounded-3xl p-4 text-primary">
            <img src={baliImg} alt="" className="h-40 w-full rounded-2xl object-cover" loading="lazy" />
            <div className="mt-3 flex items-start justify-between gap-2">
              <div>
                <p className="text-xs font-light opacity-70">Destination du mois</p>
                <p className="font-display text-xl leading-tight">Bali, l'éveil</p>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH BAR — overlapping liquid glass */}
      <section className="relative z-20 -mt-14 px-4 sm:px-8">
        <div className="mx-auto max-w-5xl glass-strong rounded-3xl p-3">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1.2fr_1fr_1fr_auto]">
            <Field icon={<MapPin className="h-4 w-4" />} label="Destination" value="Où rêvez-vous d'aller ?" />
            <Field icon={<Calendar className="h-4 w-4" />} label="Dates" value="Quand partir" />
            <Field icon={<Compass className="h-4 w-4" />} label="Style" value="Aventure, douceur..." />
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
              <Search className="h-4 w-4" />
              Explorer
            </button>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="mt-20 overflow-hidden border-y border-border/60 py-6">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-3xl italic text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12">
              <span>Marrakech</span><Dot/>
              <span>Oaxaca</span><Dot/>
              <span>Lofoten</span><Dot/>
              <span>Kyoto</span><Dot/>
              <span>Ushuaïa</span><Dot/>
              <span>Sénégal</span><Dot/>
              <span>Kirghizistan</span><Dot/>
              <span>Açores</span><Dot/>
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" className="mx-auto max-w-7xl px-4 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-light uppercase tracking-[0.2em] text-muted-foreground">— Carnet d'itinéraires</p>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] sm:text-7xl">
              Quatre voyages,<br />quatre <em className="italic text-ember">manières</em> de partir.
            </h2>
          </div>
          <p className="max-w-sm text-base font-light text-muted-foreground">
            Chaque itinéraire est imaginé avec un guide local, ajusté à votre rythme, et limité à douze voyageurs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d) => (
            <article key={d.name} className="group relative h-[460px] overflow-hidden rounded-3xl">
              <img src={d.img} alt={d.name} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute left-4 top-4 glass-dark rounded-full px-3 py-1 text-xs font-light text-primary-foreground">
                {d.tag}
              </div>
              <div className="absolute inset-x-4 bottom-4">
                <div className="glass rounded-2xl p-4 text-primary">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[11px] font-light uppercase tracking-wider opacity-60">{d.country}</p>
                      <h3 className="mt-1 font-display text-2xl leading-tight">{d.name}</h3>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-light opacity-70">
                    <span>{d.days}</span>
                    <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-current" /> 4.9</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section id="about" className="mx-auto max-w-7xl px-4 pb-24 sm:px-8 sm:pb-32">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <img src={nomadImg} alt="Campement nomade dans la steppe" className="h-[640px] w-full object-cover" loading="lazy" width={1400} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl p-8 sm:p-16">
              <p className="text-sm font-light uppercase tracking-[0.2em] text-primary-foreground/70">— Notre approche</p>
              <h2 className="mt-4 font-display text-5xl leading-[0.95] text-primary-foreground sm:text-6xl">
                Le voyage<br />comme <em className="italic">terrain d'éveil</em>.
              </h2>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-primary-foreground/80">
                Nous croyons aux longs trajets, aux silences partagés et aux détours imprévus. Pas de cases à cocher : seulement des moments qu'on garde longtemps.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-4">
                <Stat n="12" label="Voyageurs max" />
                <Stat n="38" label="Pays couverts" />
                <Stat n="9 ans" label="Sur la route" />
              </div>
            </div>
          </div>

          {/* Floating glass quote */}
          <div className="absolute bottom-8 right-8 hidden max-w-xs glass rounded-2xl p-5 text-primary lg:block">
            <p className="font-display text-lg italic leading-snug">
              « Voyager, c'est apprendre à se rendre étranger à soi-même. »
            </p>
            <p className="mt-3 text-xs font-light opacity-70">— Camille R., voyageuse 2025</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section id="experiences" className="mx-auto max-w-7xl px-4 pb-24 sm:px-8 sm:pb-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-sm font-light uppercase tracking-[0.2em] text-muted-foreground">— Expériences signature</p>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] sm:text-6xl">
              Ce que <em className="italic text-ember">Nomade</em> change,<br />discrètement.
            </h2>
            <p className="mt-6 max-w-md text-base font-light text-muted-foreground">
              Quatre engagements qui structurent chaque voyage — sans bruit, mais sans compromis.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Feature title="Guides locaux" body="Chaque étape est confiée à une personne née sur place, payée équitablement, choisie pour son regard." />
            <Feature title="Petits groupes" body="Douze voyageurs maximum, pour préserver l'intimité du lieu et la qualité des échanges." />
            <Feature title="Compensation carbone" body="Chaque trajet est mesuré puis compensé via des projets de reforestation suivis sur dix ans." />
            <Feature title="Liberté de rythme" body="Aucune journée n'est pleine. Le programme laisse place aux détours, aux siestes et aux rencontres." />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-8 sm:pb-32">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-light uppercase tracking-[0.2em] text-muted-foreground">— Carnet de voyage</p>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] sm:text-7xl">
              Ce qu'ils en <em className="italic text-ember">racontent</em>.
            </h2>
          </div>
          <div className="flex items-center gap-3 glass rounded-full px-5 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-ember text-ember" />
              ))}
            </div>
            <p className="text-sm font-light text-foreground">4.9/5 — 312 voyageurs</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Testimonial
            quote="Trois semaines en Patagonie qui ont changé ma manière de voir le silence. L'équipe sur place avait pensé à des détails dont je ne soupçonnais même pas l'existence."
            name="Léa Marchand"
            trip="Patagonie · 2025"
            initials="LM"
          />
          <Testimonial
            quote="On nous avait promis un voyage, on a vécu une rencontre. Notre guide à Oaxaca est devenu un ami. Tout était fluide, jusqu'au moindre transfert."
            name="Antoine et Sara Dubois"
            trip="Mexique · 2025"
            initials="AD"
            featured
          />
          <Testimonial
            quote="Le luxe d'avoir du temps. Aucun rythme imposé, des hébergements rares, et cette impression rare d'être vraiment quelque part."
            name="Camille Ribeiro"
            trip="Îles Féroé · 2024"
            initials="CR"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 pb-24 sm:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-primary p-10 text-primary-foreground sm:p-20">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-ember/40 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-ember/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <h2 className="font-display text-5xl leading-[0.95] sm:text-7xl">
              Prêt à dessiner<br />votre <em className="italic">prochain ailleurs</em> ?
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#" className="group inline-flex items-center gap-3 rounded-full bg-ember py-3 pl-6 pr-2 text-sm font-medium text-accent-foreground">
                Parler à un conseiller
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground text-primary transition group-hover:rotate-45">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-light transition hover:bg-primary-foreground/10">
                Recevoir la brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 px-4 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="font-display text-3xl">nomade<span className="text-ember">.</span></p>
          <p className="text-xs font-light text-muted-foreground">
            © 2026 Nomade Voyages — Paris, Marseille, Montréal. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs font-light text-muted-foreground">
            <a href="#" className="hover:text-foreground">Instagram</a>
            <a href="#" className="hover:text-foreground">Journal</a>
            <a href="#" className="hover:text-foreground">Mentions légales</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Dot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-ember" />;
}

function Field({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-card/50 px-5 py-3 text-left">
      <p className="flex items-center gap-2 text-[11px] font-light uppercase tracking-wider text-muted-foreground">
        {icon} {label}
      </p>
      <p className="mt-1 truncate text-sm text-foreground">{value}</p>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="glass-dark rounded-2xl p-4 text-primary-foreground">
      <p className="font-display text-3xl">{n}</p>
      <p className="mt-1 text-xs font-light opacity-70">{label}</p>
    </div>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="group rounded-3xl border border-border bg-card p-6 transition hover:border-ember">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl">{title}</h3>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-foreground transition group-hover:bg-ember group-hover:text-accent-foreground group-hover:rotate-90">
          <Plus className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function Testimonial({ quote, name, trip, initials, featured }: { quote: string; name: string; trip: string; initials: string; featured?: boolean }) {
  return (
    <figure className={`relative flex h-full flex-col justify-between rounded-3xl p-8 ${featured ? "bg-primary text-primary-foreground" : "border border-border bg-card text-foreground"}`}>
      <span className={`font-display text-6xl leading-none ${featured ? "text-ember" : "text-ember"}`}>"</span>
      <blockquote className="mt-2 font-display text-xl italic leading-snug">
        {quote}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3">
        <span className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-medium ${featured ? "bg-ember text-accent-foreground" : "bg-secondary text-foreground"}`}>
          {initials}
        </span>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className={`text-xs font-light ${featured ? "opacity-70" : "text-muted-foreground"}`}>{trip}</p>
        </div>
      </figcaption>
    </figure>
  );
}
