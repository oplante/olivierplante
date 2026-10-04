export const CALENDAR_URL = 'https://calendar.app.google/juht3wf6qkvNojcY9'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/olivierplante'

export interface CaseStudy {
  num: string
  id: string
  company: string
  role: string
  org: string
  period: string
  place: string
  paragraphs: string[]
  note?: string
  images: { src: string; alt: string; caption?: string; tall?: boolean }[]
  logos?: { src: string; alt: string }[]
  logosLabel?: string
}

export const cases: CaseStudy[] = [
  {
    num: '01',
    id: 'snap',
    company: 'Snap',
    role: 'Product Manager',
    org: 'Snap Inc.',
    period: 'June 2025 — Present',
    place: 'London',
    paragraphs: [
      'I own product direction across input and peripherals, design systems, the operating system layer, and brain-computer interface work. I define that direction, write the user stories, and lead engineering through the week.',
      'The roadmap stays tied to the person using the product, not to output for its own sake. Progress, trade-offs, and evidence go to stakeholders so decisions rest on data.',
    ],
    images: [
      {
        src: `${import.meta.env.BASE_URL}photos/snap-glasses.jpg`,
        alt: 'A hand using a transparent glasses interface beside a pool.',
      },
    ],
  },
  {
    num: '02',
    id: 'fleksy',
    company: 'Fleksy',
    role: 'Co-founder, Head of Product & CEO',
    org: 'Thingthing Ltd',
    period: 'March 2015 — June 2025',
    place: 'Barcelona',
    paragraphs: [
      'I owned the roadmap and the growth of Fleksy, a keyboard and input product that reached 5 million daily active users. I closed $15 million in deals across AI, healthcare, banking, OEMs, mobile apps, and logistics, and kept the consumer roadmap next to what OEM and business clients needed.',
      'I shipped features from concept to release, and stayed close to UX strategy, market analysis, and prioritization. I built and led a remote product and engineering team: hiring, management frameworks, and goals tied to product outcomes.',
    ],
    note: 'From October 2018 to September 2022 I also advised other startups on fundraising, what they were offering, how they would reach people, and how they pitched.',
    images: [
      {
        src: `${import.meta.env.BASE_URL}photos/fleksy-sdk.jpg`,
        alt: 'Fleksy SDK developer platform graphic, with a phone showing a keyboard.',
      },
      {
        src: `${import.meta.env.BASE_URL}photos/fleksy-apps.jpg`,
        alt: "Fleksy apps keyboard in a chat, with a row of app icons.",
      },
    ],
  },
  {
    num: '03',
    id: 'innova',
    company: 'Innova Partners',
    role: 'Co-founder & Product Lead',
    org: 'Innova Partners and Creator Street',
    period: 'June 2011 — March 2015',
    place: 'Barcelona',
    paragraphs: [
      'I co-ran a boutique innovation consultancy. Projects went from post-it ideation to shipped code. I managed client products across research, design, and engineering, often several enterprise clients in parallel.',
      'I ran more than 300 user-centered workshops and wrote more than 100 research proposals, for digital products used by roughly 200 million people. We created product lines in banking, media, location-based services, logistics, and healthcare.',
    ],
    logosLabel: 'Selected clients',
    logos: [
      { src: `${import.meta.env.BASE_URL}logos/axa.svg`, alt: 'AXA' },
      { src: `${import.meta.env.BASE_URL}logos/orange.svg`, alt: 'Orange' },
      { src: `${import.meta.env.BASE_URL}logos/bnp-paribas.svg`, alt: 'BNP Paribas' },
      { src: `${import.meta.env.BASE_URL}logos/sfr.svg`, alt: 'SFR' },
      { src: `${import.meta.env.BASE_URL}logos/sita.svg`, alt: 'SITA' },
      { src: `${import.meta.env.BASE_URL}logos/sanoma.png`, alt: 'Sanoma' },
    ],
    images: [
      {
        src: `${import.meta.env.BASE_URL}photos/workshop-paper-phone.jpg`,
        alt: 'Hands holding a paper phone while someone sketches a screen on a worksheet.',
        caption: 'Paper prototype at an Innova Partners workshop.',
      },
      {
        src: `${import.meta.env.BASE_URL}photos/workshop-notes.jpg`,
        alt: 'A workshop table covered with journey maps, sticky notes, and printed screens.',
        caption: 'Workshop notes from Innova Partners.',
      },
    ],
  },
  {
    num: '04',
    id: 'thesis',
    company: 'Montreal Airport Thesis',
    role: "Master's in Design and Complexity",
    org: 'University of Montreal',
    period: 'September 2009 — June 2011',
    place: 'Montreal',
    paragraphs: [
      'The thesis, Place, Time and Awareness, is on improving the airport experience through mobile platforms. With Aéroports de Montréal and Tourism Montreal I built a full passenger-experience proof of concept.',
      'I was a teaching assistant in 3D modeling, interface, and UX design.',
    ],
    logosLabel: 'Thesis partners',
    logos: [
      { src: `${import.meta.env.BASE_URL}logos/universite-de-montreal.svg`, alt: 'Université de Montréal' },
      { src: `${import.meta.env.BASE_URL}logos/aeroports-de-montreal.png`, alt: 'Aéroports de Montréal' },
      { src: `${import.meta.env.BASE_URL}logos/tourisme-montreal.svg`, alt: 'Tourisme Montréal' },
    ],
    images: [],
  },
]

export const stats = [
  { value: '5M', label: 'Daily active users on Fleksy' },
  { value: '$15M', label: 'Deals closed across six industries' },
  { value: '300+', label: 'User-centered workshops run' },
  { value: '200M', label: 'People using products shaped' },
]

export const awards = [
  { name: 'World Future Awards', detail: 'Best Text Input Solutions, 2024' },
  { name: 'Innovate UK & UKRI', detail: 'Grant, January 2024' },
  { name: 'GovTech Pioneers', detail: 'Challenge Award, Vienna 2018' },
  { name: 'GSMA', detail: '' },
  { name: 'MWC', detail: '' },
  { name: 'The Europas', detail: '' },
  { name: 'Betahaus', detail: '' },
]

export const awardPhotos = [
  {
    src: `${import.meta.env.BASE_URL}photos/world-future-awards-2024.jpg`,
    alt: 'Congratulatory letter from World Future Awards 2024 to the Fleksy team.',
    caption: 'World Future Awards 2024 — Best Text Input Solutions for Diverse Enterprise Applications.',
  },
  {
    src: `${import.meta.env.BASE_URL}photos/innovate-uk-2024.jpg`,
    alt: 'Hands holding a phone, with the Fleksy, UKRI, and Innovate UK marks.',
    caption: 'Innovate UK and UKRI grant, announced January 2024.',
  },
  {
    src: `${import.meta.env.BASE_URL}photos/govtech-pioneers-2018-cheque.jpg`,
    alt: 'People on stage at GovTech Pioneers holding an oversized Fleksy cheque.',
    caption: 'GovTech Pioneers, Vienna 2018 — Challenge Award.',
  },
  {
    src: `${import.meta.env.BASE_URL}photos/govtech-pioneers-2018-pitch.jpg`,
    alt: 'Olivier Plante speaking into a microphone on the GovTech Pioneers stage in Vienna.',
    caption: 'Pitching at Palais Wertheim, Vienna, 2018.',
  },
  {
    src: `${import.meta.env.BASE_URL}photos/govtech-pioneers-2018-final-four.jpg`,
    alt: 'Five people on the GovTech Pioneers stage under a screen reading Final 4 pitches.',
    caption: 'GovTech Pioneers 2018 — the final four.',
  },
  {
    src: `${import.meta.env.BASE_URL}photos/4yfn-2016.jpg`,
    alt: 'Olivier Plante seated at 4YFN 2016, wearing a conference badge.',
    caption: '4YFN 2016, Disrupted by Mobile.',
  },
]

export const education = [
  {
    school: 'University of Montreal',
    degree: "Master's in Design and Complexity",
    period: '2009 — 2011',
  },
  {
    school: 'University of Montreal',
    degree: 'Bachelor in Industrial Design — elected president of the School of Design for two terms',
    period: '2005 — 2009',
  },
  {
    school: 'Universitat Pompeu Fabra, Barcelona',
    degree: 'Visiting student in computer science — cognitive science, psychology, human-machine interaction',
    period: '2010 — 2011',
  },
]

export const languages = [
  { name: 'Canadian French', level: 'Native' },
  { name: 'English', level: 'Native, fluent' },
  { name: 'Spanish', level: 'Proficient' },
]
