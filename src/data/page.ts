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
    "<b>Start with a free audit.</b> We’ll look at your website and show you the top opportunities to bring more clients your way.",
  ],
  cta: "Get my free audit",
  secondaryCta: "See how we help",
  image: "hero.jpg",
  imageAlt: "Hands typing on a laptop",
};

export const PROBLEM = {
  heading: "You want your website to bring in more business. <em>But where do you start?</em>",
  intro:
    "Maybe referrals keep you busy some months and leave you wondering where the next client will come from in others. You have a website, but you’re not sure how much it’s actually helping.",
  points: [
    "You search for your services and see other practices before your own.",
    "People visit your website, but you rarely hear, “I found you on Google.”",
    "You have a service or program you’d love to grow, and too few people know it exists.",
    "You’ve heard you should be blogging or showing up in ChatGPT, but you don’t know what’s worth your time.",
  ],
};

/* DRAFT COPY: new section, not in the original brief. */
export const COST = {
  eyebrow: "The cost of waiting",
  heading: "Every month you’re hard to find, <em>someone else gets the call.</em>",
  body: [
    "People are already searching for the kind of help you offer. When your practice doesn’t show up, or your website doesn’t make the next step clear, those searches turn into consultations somewhere else.",
    "That loss never appears on a report, which is what makes it so easy to put off.",
  ],
  // Patterns from past WBDS audits.
  findingsHeading: "What we see most often in practice websites",
  findings: [
    "Search traffic comes almost entirely from people who already know the practice’s name.",
    "The site never clearly says where the practice serves clients, so local searches go to someone else.",
    "Several services share one page, so Google can’t tell who to show it to.",
    "Pages are quietly blocked from Google, and no one knows until someone looks.",
  ],
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

/* DRAFT COPY: new section. Swap the cards for client testimonials once you have them. */
export const POSSIBLE = {
  eyebrow: "What’s possible",
  heading: "Picture a website that <em>works between sessions.</em>",
  items: [
    {
      title: "“I found you on Google.”",
      body: "New clients start telling you they found you by searching, not only through a friend or a referral.",
    },
    {
      title: "Steadier months",
      body: "A reliable flow of interest that doesn’t depend on who happened to send someone your way.",
    },
    {
      title: "The right people for the right service",
      body: "Prospective clients find the service or program you most want to grow and already understand who it’s for.",
    },
  ],
};

export const APPROACH = {
  eyebrow: "Our approach",
  intro:
    "You shouldn’t have to figure all of this out between client sessions. We can help you understand what needs attention and take on the work to improve it.",
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
  heading: "Here’s how <em>we can help.</em>",
  intro:
    "Some practices need a focused project. Others need consistent content and support. We’ll help you choose a starting point based on your website and what you want to grow.",
  items: [
    {
      id: "local-seo",
      name: "Local SEO",
      format: "3-month project",
      tagline: "Reach more clients in the areas you serve",
      summary:
        "A focused three-month project for practices that want more inquiries from a particular city or region.",
      body: "We improve how your website presents your services and where you offer them. For eligible practices, we also work on your Google Business Profile so people searching locally can get a clearer picture of your business.",
      points: [
        "Improve the pages that introduce your practice and services.",
        "Create service pages for the locations you want to reach.",
        "Update your Google Business Profile and publish relevant posts where appropriate.",
      ],
      fit: "A good starting point if you want more local appointments or clients within a specific service area.",
      cta: "Get my free local SEO audit",
    },
    {
      id: "content",
      name: "Growth Content Engine",
      format: "Ongoing monthly",
      tagline: "Put your expertise to work on your website",
      summary: "Ongoing monthly content support for practitioners who have plenty to say and little time to write.",
      body: "We research relevant topics, talk with you about your perspective, and turn that knowledge into articles for your website. You review the content, and we handle the writing, preparation, and publishing.",
      points: [
        "Choose topics connected to your services and prospective clients’ questions.",
        "Create useful articles in your voice, informed by your expertise.",
        "Connect readers with relevant services and a clear next step.",
      ],
      fit: "A good fit if you want to build a useful body of content over time without taking on a monthly writing project yourself.",
      cta: "Get my free content audit",
    },
    {
      id: "ai-visibility",
      name: "AI Visibility",
      format: "One-time project",
      tagline: "Help search tools understand your practice",
      summary:
        "A one-time project to make your website’s information clearer and more accessible to search tools, including those used in AI-assisted search.",
      body: "We clarify the details about your business, services, and expertise, develop answers to common client questions with your input, and review the behind-the-scenes setup that helps search tools read your site.",
      points: [
        "Make it easier to understand who you help and what you offer.",
        "Publish useful answers that reflect your knowledge and approach.",
        "Check for barriers that could prevent search tools from accessing your content.",
      ],
      fit: "A good starting point if you want to prepare your existing website for discovery through tools such as ChatGPT and Google’s AI search features. Placement in their answers cannot be guaranteed.",
      cta: "Get my free AI visibility audit",
    },
  ],
  extrasHeading: "Additional help when you need it",
  extras: [
    {
      title: "Website SEO Cleanup",
      body: "If problems with your existing pages are getting in the way, we can recommend a one-time cleanup. This may include fixing broken links, improving page titles and headings, and making the site easier to navigate. We’ll explain what’s needed and include it in your scope before work begins.",
    },
    {
      title: "Content Planning",
      body: "Prefer to write your own articles? We can research topics and create a focused content plan so you know what to write about and how it connects to your services.",
    },
  ],
  note: "You don’t need to choose a service before requesting your audit.",
  cta: "Get my free video audit",
};

export const INCLUDED = {
  eyebrow: "Included with every project",
  heading: "We also look at what happens <em>after someone finds you.</em>",
  intro:
    "When we begin working on your website, we include a reporting dashboard and an initial review of the steps visitors take to contact you.",
  items: [
    {
      title: "A clearer view of website activity",
      body: "Your custom dashboard brings together visits and key actions we can track, such as contact form submissions and clicks to call, email, or book. This helps us look beyond visitor numbers and see whether people are taking steps toward working with you.",
    },
    {
      title: "A check of the path to becoming a client",
      body: "We review your website for confusing next steps, hard-to-find contact information, and broken or unclear buttons. We address straightforward issues within the agreed work and flag larger changes that may need separate attention.",
    },
  ],
};

export const STEPS = {
  eyebrow: "How to begin",
  heading: "Let’s take a look at <em>your website first.</em>",
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
  eyebrow: "Your team",
  heading: "Meet the people helping <em>your practice grow.</em>",
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
  // Set quote.text to "" to hide the quote. Verbatim from a past audit call (anonymized);
  // confirm the client is happy for it to be used before launch.
  quote: {
    text: "It makes it very clear. I am not a techie person at all… it makes a lot of sense.",
    attribution: "Registered dietitian, after her free audit",
  },
  cta: "Get my free audit",
};

export const FAQ = {
  heading: "A few things <em>you might be wondering.</em>",
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
