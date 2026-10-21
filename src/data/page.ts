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
    "When someone searches for the kind of help you offer, you want your practice to be part of the conversation.",
    "We help you show up on Google and get recommended by AI, with a focus on turning that attention into inquiries and new customers.",
  ],
  // Small print under the buttons.
  note: "<b>Start with a free audit.</b> We’ll look at your website and show you the top opportunities to bring more clients your way.",
  cta: "Get my free audit",
  secondaryCta: "See how we help",
  image: "hero-practitioner.jpg",
  imageAlt: "A smiling practitioner sitting with her laptop in a bright, plant-filled office",
};

export const PROBLEM = {
  heading: "You want your website to bring in more business. But where do you start?",
  intro:
    "Maybe referrals keep you busy some months and leave you wondering where the next client will come from in others. You have a website, but you’re not sure how much it’s actually helping.",
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
      "Search is different. People are already looking for the help you offer. <b>You just need to be there when they look.</b> That’s what we want to help you with.",
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
        body: "monthly searches for a health question that a nutritionist could answer, but didn’t have content for. A missed opportunity to reach people searching for her expertise.",
      },
      {
        // SEO Audit_ Functional Vitality.pdf
        stat: "3 states",
        body: "where Google was mistakenly showing a practice because its website didn’t clearly communicate their service area. Potential clients in their actual service area weren’t being prioritized.",
      },
      {
        // SEO Audit_ Bone Health Dietitian.pdf (33 of 149 clicks)
        stat: "22%",
        body: "of a dietitian’s annual Google search clicks from a single blog post unaligned with her actual services. She was attracting visitors, but not necessarily potential clients.",
      },
    ],
  },
  calculator: {
    heading: "What could search be worth to your practice?",
    intro: "Adjust the numbers to match your practice for a rough idea.",
    // Starting values for the sliders. Matt should sanity-check these before launch.
    searches: { label: "Monthly searches for your services", value: 500, min: 50, max: 5000, step: 50 },
    clientValue: {
      label: "What a new client is worth to you",
      hint: "Their total value: everything they spend with you over time, not just one session.",
      value: 800, min: 100, max: 5000, step: 50,
    },
    // Fixed assumptions shown in the small print under the result.
    clickRate: 0.08, // share of searchers who visit a practice that shows up well
    inquiryRate: 0.04, // share of visitors who get in touch
    closeRate: 0.4, // share of inquiries that become clients
    disclaimer:
      "An illustration, not a forecast. It assumes 8% of searchers visit your site, 4% of visitors get in touch, and 4 in 10 inquiries become clients, each worth the total value you set above. Actual results depend on your search rankings, competition, and how well your website converts visitors into inquiries. Your free audit will help us evaluate the opportunities specific to your practice.",
  },
};

/* Verbatim client reactions from recent audit calls, anonymized. Confirm each client is happy
   for their words to be used before launch (sources noted for each). */
export const POSSIBLE = {
  heading: "Most practices are <em>closer than they think.</em>",
  // SEO proposals in the audit folder: 6 of 8 practices.
  intro:
    "In 6 of the last 8 practices we reviewed, the website already had enough trust with Google for new pages to rank quickly. It mostly needed a clear plan for what to publish and where.",
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
    "SEO means helping people find your business through search. For your practice, its value comes from what happens next: someone asks about working with you, books a consultation, or joins your program.",
    "That’s why we begin with your business. Which services do you want to grow? Who are they for? What states, territories, or regions can you work with clients in? Those answers guide what we recommend.",
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
      summary: "For practitioners who have plenty to say and little time to write.",
      points: [
        "Topics tied to your services and your clients’ questions",
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
      note: "No one can guarantee placement in AI answers.",
      cta: "Ask about AI visibility",
    },
  ],
  // Shown under the cards: one main button for people who aren't sure which to pick.
  unsure: "Not sure which fits? <b>Your free audit will tell you.</b>",
  cta: "Get my free audit",
};

export const INCLUDED = {
  eyebrow: "Included with every project",
  heading: "Traffic only matters if it turns into clients.",
  intro: "We measure inquiries, not just visits.",
  items: [
    {
      // icon: "chart" or "path" (drawn in Services.astro)
      icon: "chart",
      name: "Inquiry tracking dashboard",
      body: "See your visits alongside contact form submissions and clicks to call, email, or book.",
    },
    {
      icon: "path",
      name: "Website conversion review",
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
      body: "After your audit, you’re invited to book a live strategy call with us to discuss how we would approach SEO for your business, including costs and timelines.",
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
      bio: "Whitney brings a dietitian’s understanding of health and nutrition work to marketing. She helps connect the recommendations to your business goals and the people you want to reach.",
    },
    {
      name: "Matt Kuncaitis",
      role: "SEO strategy & delivery",
      image: "matt.jpg",
      bio: "Matt leads the website review and SEO work. He looks at how people find your services, where your website could do more, and which improvements are worth prioritizing. He also helps turn your knowledge into authentic, helpful content that your prospective clients are searching for.",
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
      a: "No. Tell us about your practice and what you’d like to grow. We’ll explain what we see, what we recommend, and why, without expecting you to learn the technical side.",
    },
    {
      q: "Is this only for practices with a physical location?",
      a: "No. We can also help virtual practices and businesses offering online programs or courses. The approach depends on who you serve, where you can work with them, and what you sell.",
    },
    {
      q: "Are your SEO services limited to a specific geographic area?",
      a: "Nope! We serve practitioners and businesses across the United States, Canada, and the UK. Located somewhere else? Feel free to submit an audit request and we can let you know if we are unable to serve you (though it’s unlikely!).",
    },
    {
      q: "Will you guarantee more bookings or a place in AI answers?",
      a: "No. We focus the work on attracting suitable prospects and making it easier for them to take action from your website, but we can’t promise a particular number of clients or control over what Google and AI tools display. If you find someone placing a guarantee like that on their work, they’re either pulling your leg, or resorting to some questionable SEO tactics that could boost results short-term, but that are likely unsustainable, and could actually hurt your site’s authority and rankings in the long run.",
    },
    {
      q: "How soon will I see results?",
      a: "We’ll discuss realistic expectations for your website and the recommended work on the strategy call. Publishing improvements is a first step; building search visibility and generating inquiries takes time. Your starting point and competition affect that progress.",
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
      a: "A short, personal video covering the top opportunities we see for your website, based on your business goals and service offerings. It’s an initial review, rather than a complete inspection of every page. We’ll deliver the audit to you within 7 days of you requesting it. Then you’ll have the opportunity to meet with us live to discuss how we would approach SEO for your business, including costs and timelines. There is no obligation to move forward with our services if you request the audit or book a strategy call.",
    },
  ],
};

export const CLOSER = {
  eyebrow: "Free video audit",
  heading: "Wondering what we’d recommend <em>for your website?</em>",
  body: "Send us your website and tell us what you’d like it to do for your business. We’ll take a look and send you a short video with the top places to start.",
  cta: "Get my free audit",
};
