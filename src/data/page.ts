/* =====================================================================
   EDIT HERE: all the copy and links on the page live in this file.
   Text inside <em> is set in italic and highlighted; <b> is bold.
   ===================================================================== */

export const FORM = {
  // Airtable share link for the audit request form,
  // e.g. "https://airtable.com/appXXXXXXXXXXXXXX/shrXXXXXXXXXXXXXX".
  // Every button on the page opens it. Leave "" until it's ready.
  url: "",
  // Optional: the name of a field on the form that records which service someone
  // is interested in. If set, the buttons on the service cards pre-fill it
  // (e.g. "Local SEO"). Leave "" to skip pre-filling.
  servicePrefillField: "",
};

export const META = {
  title: "SEO & AI Visibility for Health Practitioners · Whitney Bateson",
  description:
    "SEO and AI visibility for dietitians, therapists, and health professionals. Show up on Google, get recommended by AI, and turn that attention into inquiries. Start with a free video audit.",
};

export const HERO = {
  eyebrow: "SEO &amp; AI visibility for dietitians, therapists, and health professionals",
  headline: "Help more of the right clients <em>find you.</em>",
  body: [
    "When someone searches for the kind of help you offer, you want your name to come up. Not the practice down the street.",
    "We help you show up on Google and get recommended by AI. And we don’t stop at clicks: we care about the inquiries and bookings that come after.",
    "<b>Start with a free audit.</b> We’ll look at your website and show you the best places to bring more clients your way.",
  ],
  cta: "Get my free audit",
  secondaryCta: "See how we help",
  image: "hero-practitioner.jpg",
  imageAlt: "A smiling practitioner sitting with her laptop in a bright, plant-filled office",
};

export const PROBLEM = {
  heading: "You want your website to bring in more business. But where do you start?",
  intro:
    "Maybe referrals keep you busy some months, and other months you’re wondering where the next client is coming from. You have a website, but honestly? You’re not sure it’s doing much for you.",
  points: [
    "You search for your own services and find other practices before yours.",
    "People visit your website, but you rarely hear, “I found you on Google.”",
    "You have a service or program you’d love to grow, but not enough people know it exists.",
    "You’ve been told to blog. Now you’re hearing you need to show up in ChatGPT, too. What’s actually worth your time?",
  ],
  /* DRAFT COPY: Whitney to confirm this sounds like her before launch. Facts are from her
     October 2026 emails (social media story, and her practitioner survey). */
  note: {
    body: [
      "I’m a dietitian too, so I know how this goes. You’re great at the work, and marketing gets squeezed in between client sessions.",
      "For years, I posted on social media hoping it would bring in clients (spoiler alert: it didn’t). And when I surveyed practitioners, nearly two-thirds told me they don’t have a consistent marketing system either.",
      "Search is different. People are already looking for the help you offer. <b>You just need to be there when they look.</b> That’s what Matt and I want to help you with.",
    ],
    signoff: "Whitney",
    image: "whitney.jpg",
  },
};

/* DRAFT COPY: new section, not in the original brief. */
export const COST = {
  heading: "When you’re hard to find, people book with whoever they find first.",
  body: [
    "People are already searching for the kind of help you offer. When your practice doesn’t show up, or your website doesn’t make the next step clear, those searches turn into consultations somewhere else.",
    "That loss never shows up on a report, which is exactly why it’s so easy to put off.",
  ],
  // Real, anonymized findings from recent WBDS audits (sources noted for each).
  audits: {
    heading: "From our recent audits",
    items: [
      {
        // SEO Audit_ Functional Vitality.pdf
        stat: "2,100",
        body: "searches a month for “what causes extreme fatigue,” a question with almost no competition. The nutritionist we audited was mostly found by people who already knew her name.",
      },
      {
        // SEO Audit_ Functional Vitality.pdf
        stat: "3 states",
        body: "where Google was showing a Midwest practice to searchers: New York, Michigan, and Pennsylvania. Nothing on her site said where she worked.",
      },
      {
        // SEO Audit_ Bone Health Dietitian.pdf (33 of 149 clicks)
        stat: "22%",
        body: "of a dietitian’s search clicks for the whole year came from one blog post. Most of her other pages sat on page 2 of Google.",
      },
      {
        // SEO Adair transcript
        stat: "148 pages",
        body: "of a gut health dietitian’s website were blocked from Google’s results, until the audit found them.",
      },
    ],
  },
  calculator: {
    heading: "What could search be worth to your practice?",
    intro: "Adjust the numbers to match your practice for a rough idea.",
    // Starting values for the sliders. Matt should sanity-check these before launch.
    searches: { label: "Monthly searches for your services", value: 500, min: 50, max: 5000, step: 50 },
    clientValue: { label: "What a new client is worth to you", value: 800, min: 100, max: 5000, step: 50 },
    // Fixed assumptions shown in the small print under the result.
    clickRate: 0.08, // share of searchers who visit a practice that shows up well
    inquiryRate: 0.04, // share of visitors who get in touch
    closeRate: 0.4, // share of inquiries that become clients
    disclaimer:
      "An illustration, not a forecast. It assumes 8% of searchers visit your site, 4% of visitors get in touch, and 4 in 10 inquiries become clients. Your audit looks at the real picture for your website.",
  },
};

/* Verbatim client reactions from recent audit calls, anonymized. Confirm each client is happy
   for their words to be used before launch (sources noted for each). */
export const POSSIBLE = {
  heading: "Most practices are <em>closer than they think.</em>",
  // SEO proposals in the audit folder: 6 of 8 practices.
  intro:
    "Here’s the good news: in 6 of the last 8 practices we reviewed, the website already had enough trust with Google for new pages to rank quickly. It mostly needed a clear plan for what to publish and where.",
  quotes: [
    {
      // SEO Holly transcript
      text: "Some confirmation of some things I’m doing well, and some new things to work on to keep growing… this was a very helpful time spent.",
      who: "Dietitian with a national group program",
    },
    {
      // SEO Mary transcript
      text: "I didn’t realize there was a way to increase the amount that AI is referencing… that’s really good to hear that we could have some control over that.",
      who: "Dietitian with a virtual practice",
    },
    {
      // SEO heather Smith Transcript
      text: "This has been extremely helpful and enlightening.",
      who: "Dietitian licensed in several states",
    },
  ],
};

export const APPROACH = {
  intro:
    "You shouldn’t have to figure all of this out between client sessions (your plate is full enough!). We’ll show you what needs attention, and we can take the work off your hands.",
  heading: "Start with the clients <em>you want more of.</em>",
  body: [
    "SEO just means helping people find your business through search. But traffic on its own doesn’t pay the bills. What matters is what happens next: someone asks about working with you, books a consult, or joins your program.",
    "That’s why we start with your business, not keywords. Which services do you want to grow? Who are they for? What states, territories, or regions can you work with clients in? Those answers guide what we recommend.",
  ],
  pillars: [
    {
      title: "Show up for relevant searches",
      body: "Focus on the services, questions, and locations that match the people you can actually help.",
    },
    {
      title: "Give people a reason to choose you",
      body: "Help visitors understand your experience, your approach, and whether your services fit what they need.",
    },
    {
      title: "Make the next step easy",
      body: "Make it clear how to ask a question, book a call, or learn about your program once someone is interested.",
    },
  ],
};

export const SERVICES = {
  heading: "Here’s how we can help.",
  intro:
    "People find practitioners in all kinds of ways: searching their town, typing a symptom into Google at 11 pm, or asking ChatGPT who to see. Each service below focuses on one of those.",
  items: [
    {
      id: "local-seo",
      // How the client is looking for help. Shown above the headline.
      moment: "When they search nearby",
      name: "Local SEO",
      format: "3-month project",
      headline: "Put your practice on the map.",
      summary: "For practices that want more appointments or clients from a particular city or region.",
      points: [
        "Clearer pages introducing your practice and services",
        "A service page for each location you want to reach",
        "Google Business Profile updates and posts, for eligible practices",
      ],
      cta: "Ask about Local SEO",
    },
    {
      id: "content",
      moment: "When they Google a symptom",
      name: "Growth Content Engine",
      format: "Ongoing monthly",
      headline: "Be the answer they’re searching for.",
      summary: "For practitioners with plenty to say and no time to write it.",
      points: [
        "Topics drawn from the questions your clients ask you ALL the time",
        "A conversation with you to capture your perspective",
        "Articles in your voice: you review, we write and publish",
        "A clear next step from every article to your services",
      ],
      cta: "Ask about content",
    },
    {
      id: "ai-visibility",
      moment: "When they ask ChatGPT",
      name: "AI Visibility",
      format: "One-time project",
      headline: "Be the practice AI can recommend.",
      summary: "For practices that want their existing website ready for ChatGPT and Google’s AI search features.",
      points: [
        "Clearer details on who you help and what you offer",
        "Answers to common client questions, written with your input",
        "A check of the setup that helps search tools read your site",
      ],
      // Small print under the list.
      note: "We can’t promise you a spot in AI answers (and no one honest can).",
      cta: "Ask about AI visibility",
    },
  ],
  // Shown under the cards: one main button for people who aren't sure which to pick.
  unsure: "Not sure which one fits? <b>That’s what the free audit is for.</b>",
  cta: "Get my free audit",
};

export const INCLUDED = {
  eyebrow: "Included with every project",
  heading: "Traffic only matters if it turns into clients.",
  intro: "We measure inquiries, not just visits.",
  items: [
    {
      title: "A dashboard that tracks what counts",
      body: "See your visits alongside contact form submissions and clicks to call, email, or book.",
    },
    {
      title: "A clear path from visitor to client",
      body: "We fix confusing next steps, hard-to-find contact details, and unclear buttons, and flag anything bigger.",
    },
  ],
};

export const STEPS = {
  eyebrow: "How to begin",
  heading: "Let’s take a look at your website first.",
  items: [
    {
      title: "Tell us a little about your business",
      body: "Share your website and answer a few short questions about who you serve and what you’d like to improve.",
    },
    {
      title: "Receive your free audit",
      body: "We’ll review your site, practice, and goals, and send you a video walking you through the top opportunities we see, why they matter, and where we suggest focusing first.",
    },
    {
      title: "Discuss next steps on a strategy call",
      body: "After your audit, you can book a live call with us to talk through how we’d approach SEO for your business, including costs and timelines. No pressure, no obligation.",
    },
  ],
  cta: "Get my free audit",
};

export const TEAM = {
  heading: "Meet Whitney and Matt.",
  people: [
    {
      name: "Whitney Bateson, MPH, RD",
      role: "Business & marketing strategy",
      image: "whitney.jpg",
      bio: "Whitney is a dietitian turned marketer, so she gets both sides: the work you do with clients and the business you’re trying to grow. She makes sure every recommendation ties back to your goals and the people you want to reach.",
    },
    {
      name: "Matt Kuncaitis",
      role: "SEO strategy & delivery",
      image: "matt.jpg",
      bio: "Matt leads the website review and SEO work. He looks at how people are finding you, where your website could do more, and which fixes are worth doing first. He also helps turn what you know into helpful, authentic content your future clients are already searching for.",
    },
  ],
  together:
    "Together, we’ll explain our recommendations in everyday language and help you understand the work you’re investing in. <b>You’re in a tech-jargon safe zone!</b>",
  // Set quote.text to "" to hide the quote. Verbatim from a past audit call (SEO Beth C Video.vtt),
  // anonymized; confirm the client is happy for it to be used before launch.
  quote: {
    text: "This was fabulous. It helped validate some things for me… and really met me where I was at.",
    attribution: "Registered dietitian in private practice, after her free audit",
  },
};

export const FAQ = {
  heading: "Questions we hear a lot",
  items: [
    {
      q: "Do I need to understand SEO before we work together?",
      a: "Not one bit! Tell us about your practice and what you’d like to grow. We’ll explain what we see, what we recommend, and why, in plain English.",
    },
    {
      q: "Is this only for practices with a physical location?",
      a: "Not at all. We also help virtual practices and businesses offering online programs or courses. The approach depends on who you serve, where you can work with them, and what you sell.",
    },
    {
      q: "Are your SEO services limited to a specific geographic area?",
      a: "Nope! We serve practitioners and businesses across the United States, Canada, and the UK. Located somewhere else? Feel free to submit an audit request and we can let you know if we are unable to serve you (though it’s unlikely!).",
    },
    {
      q: "Will you guarantee more bookings or a place in AI answers?",
      a: "Nope. We focus on attracting the right people and making it easy for them to take the next step, but no one controls what Google and AI tools show, or how many clients you’ll get. If someone guarantees results like that, they’re either pulling your leg or using questionable SEO tactics that might give you a short-term bump but can hurt your site’s rankings in the long run.",
    },
    {
      q: "How soon will I see results?",
      a: "Honestly, it depends. We’ll talk through realistic expectations for your website on the strategy call. Publishing improvements is the first step; building visibility and inquiries takes time, and your starting point and competition affect how fast that happens.",
    },
    {
      q: "Do I have to sign up for ongoing work?",
      a: "We offer one-time projects, a three-month local SEO service, and ongoing content support. We’ll recommend what fits and explain any commitment before you decide.",
    },
    {
      q: "How much does it cost?",
      a: "The cost depends on the work you need. After your audit, we can talk through the options on a strategy call and give you a clear scope and price before you commit.",
    },
    {
      q: "What’s included in the free audit?",
      a: "A short, personal video covering the top opportunities we see for your website, based on your goals and services. It’s a first look, not a page-by-page inspection. You’ll get it within 7 days of requesting it. Then, if you’d like, you can meet with us live to talk through how we’d approach SEO for your business, including costs and timelines. There’s no obligation to move forward with our services.",
    },
  ],
};

export const CLOSER = {
  eyebrow: "Free video audit",
  heading: "Wondering what we’d recommend <em>for your website?</em>",
  body: "Send us your website and tell us what you’d like it to do for your business. We’ll take a look and send you a short video with the best places to start.",
  cta: "Get my free audit",
};
