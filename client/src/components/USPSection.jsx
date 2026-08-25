const usps = [
  {
    icon: (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-24 md:h-24 mx-auto">
    <circle cx="40" cy="40" r="30" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="2 3"/>
    {/* Gear outer shape */}
    <path
      d="M40 20 L43 20 L44 25 L48 26.5 L52 23.5 L54.5 26 L51.5 30 L53 34 L58 35 L58 38 L53 39 L51.5 43 L54.5 47 L52 49.5 L48 46.5 L44 48 L43 53 L40 53"
      fill="#1A1A1A"
    />
    <path
      d="M40 20 L37 20 L36 25 L32 26.5 L28 23.5 L25.5 26 L28.5 30 L27 34 L22 35 L22 38 L27 39 L28.5 43 L25.5 47 L28 49.5 L32 46.5 L36 48 L37 53 L40 53"
      fill="#1A1A1A"
    />
    <circle cx="40" cy="36.5" r="11" fill="#1A1A1A"/>
    {/* Leaf cut-out inside gear */}
    <path
      d="M40 29 C46 29 49 33 49 38 C49 42 46 45 42 45 C39 45 37 43 37 40 C37 43 34.5 45 32 43 C29.5 41 30 37 33 35.5 C35 34.5 37 35 38 37 C36.5 32.5 40 29 40 29Z"
      fill="#F5EFE6"
    />
  </svg>
),
heading: "Eco Friendly & Sustainable",
   
  },
  {

    icon: (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-24 md:h-24 mx-auto">
    <circle cx="40" cy="40" r="30" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="2 3"/>
    {/* Left hand */}
    <path
      d="M22 46 C22 46 23 34 26 30 C27.5 28 30 29 30 31 L30 38
         M30 38 L30 30 C30 28 33 27.5 33 30 L33 38
         M33 38 L33 29 C33 27 36 27 36 29 L36 39
         M36 39 L36 31 C36 29 39 29.5 39 32 L39 44
         C39 44 38 50 33 52 L26 52 C24 52 22 50 22 47Z"
      fill="#1A1A1A"
    />
    {/* Right hand (mirrored) */}
    <path
      d="M58 46 C58 46 57 34 54 30 C52.5 28 50 29 50 31 L50 38
         M50 38 L50 30 C50 28 47 27.5 47 30 L47 38
         M47 38 L47 29 C47 27 44 27 44 29 L44 39
         M44 39 L44 31 C44 29 41 29.5 41 32 L41 44
         C41 44 42 50 47 52 L54 52 C56 52 58 50 58 47Z"
      fill="#1A1A1A"
    />
    {/* Heart resting in palms */}
    <path
      d="M40 48 C40 48 33 44 33 39 C33 36 35.5 34.5 38 35.5 C39 36 40 37 40 37 C40 37 41 36 42 35.5 C44.5 34.5 47 36 47 39 C47 44 40 48 40 48Z"
      fill="#F5EFE6"
      stroke="#1A1A1A"
      strokeWidth="1"
    />
  </svg>
),
heading: "Handcrafted With Love",
   
  },
  {
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-24 md:h-24 mx-auto">
        <circle cx="40" cy="40" r="30" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="2 3"/>
        <rect x="32" y="34" width="16" height="26" rx="2" fill="#1A1A1A"/>
        <rect x="35" y="24" width="10" height="10" rx="1.5" fill="#1A1A1A"/>
        <circle cx="40" cy="21" r="2" fill="#1A1A1A"/>
        <path d="M36 44 L40 40 L44 44 L40 48Z" fill="#F5EFE6"/>
        <rect x="34" y="52" width="12" height="2.5" fill="#F5EFE6"/>
      </svg>
    ),
    heading: "Premium Looks & Scents",
  },
  {
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-24 md:h-24 mx-auto">
        <circle cx="40" cy="40" r="30" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="2 3"/>
        <path d="M24 34 L40 28 L56 34 L40 40Z" fill="#1A1A1A"/>
        <path d="M25 36 L25 54 L39 58 L39 41Z" fill="#1A1A1A"/>
        <path d="M55 36 L55 54 L41 58 L41 41Z" fill="#1A1A1A"/>
        <path d="M38 41 L38 58 M42 41 L42 58" stroke="#F5EFE6" strokeWidth="1.2"/>
        <path d="M60 22 L61.5 26 L65.5 27.5 L61.5 29 L60 33 L58.5 29 L54.5 27.5 L58.5 26Z" fill="#1A1A1A"/>
        <path d="M20 20 L21 22.5 L23.5 23.5 L21 24.5 L20 27 L19 24.5 L16.5 23.5 L19 22.5Z" fill="#1A1A1A" opacity="0.6"/>
      </svg>
    ),
    heading: "Perfect For Every Occasion",
  },
];

export default function USPSection() {
  return (
    <section className="bg-secondary py-14 md:py-20">
      <div className="w-20 h-px bg-charcoal/30 mx-auto mb-12" />
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-8 text-center">
          {usps.map((usp, i) => (
            <div key={i}>
              <div className="mb-4">{usp.icon}</div>
              <h3 className="font-heading text-sm md:text-lg text-charcoal leading-snug px-1">
                {usp.heading}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}