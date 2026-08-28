// Runs the real shipped script against how members actually type.
//   python3 app/build_app.py && node app/test/matcher.test.js
function mkEl(){const e={className:"",innerHTML:"",style:{},dataset:{},value:"",disabled:false,textContent:"",
 outerHTML:"<span></span>",classList:{add(){},toggle(){return true}},appendChild(){},remove(){},
 scrollIntoView(){},setAttribute(){},addEventListener(){},querySelector(){return mkEl()},querySelectorAll(){return []}};
 Object.defineProperty(e,"content",{get(){return{firstElementChild:mkEl()}}});return e;}
global.document={createElement:mkEl,getElementById:mkEl,querySelector:mkEl,querySelectorAll:()=>[],
 documentElement:{style:{setProperty(){}}}};
global.localStorage={getItem(){return null},setItem(){}};global.setTimeout=f=>f();

const ROOMS = [{"t":"12 pm - PPN News","u":"https://www.patriotchute.com/spaces/24417514","c":"LIVE STREAMS | CST TIME","a":["noon show","12pm news","lunchtime news"]},{"t":"8 pm - PPN News","u":"https://www.patriotchute.com/spaces/4759408","c":"LIVE STREAMS | CST TIME","a":["8pm news","evening news","night show"]},{"t":"9 am - Coffee With Chas","u":"https://www.patriotchute.com/spaces/18992734","c":"LIVE STREAMS | CST TIME","a":["coffee with chas","9am show","morning show"]},{"t":"Canada","u":"https://www.patriotchute.com/spaces/12907547","c":"OTHER COUNTRIES","a":[]},{"t":"United Kingdom","u":"https://www.patriotchute.com/spaces/12907539","c":"OTHER COUNTRIES","a":[]},{"t":"Food & Dining Room","u":"https://www.patriotchute.com/spaces/4759370","c":"PATRIOT CHATS","a":[]},{"t":"In Memory","u":"https://www.patriotchute.com/spaces/19075784","c":"PATRIOT CHATS","a":[]},{"t":"Meme Room","u":"https://www.patriotchute.com/spaces/4787490","c":"PATRIOT CHATS","a":[]},{"t":"Music Room","u":"https://www.patriotchute.com/spaces/11155097","c":"PATRIOT CHATS","a":[]},{"t":"Patriot Families Hub","u":"https://www.patriotchute.com/spaces/4758510","c":"PATRIOT CHATS","a":[]},{"t":"Patriot Pics Album","u":"https://www.patriotchute.com/spaces/11173003","c":"PATRIOT CHATS","a":[]},{"t":"Prayer Request Chat","u":"https://www.patriotchute.com/spaces/13489977","c":"PATRIOT CHATS","a":[]},{"t":"Share Your Event Pics","u":"https://www.patriotchute.com/spaces/11183698","c":"PATRIOT CHATS","a":[]},{"t":"Assassinations/Executions/Resignations","u":"https://www.patriotchute.com/spaces/4765561","c":"PATRIOT FORUMS","a":[]},{"t":"Cabal Room","u":"https://www.patriotchute.com/spaces/4758532","c":"PATRIOT FORUMS","a":[]},{"t":"HOME | Members Lobby","u":"https://www.patriotchute.com/spaces/4755493","c":"PATRIOT FORUMS","a":["lobby","members lobby","home","main feed"]},{"t":"Health & Medical Room","u":"https://www.patriotchute.com/spaces/4758505","c":"PATRIOT FORUMS","a":["health","medical","health room"]},{"t":"Humanitarian Projects","u":"https://www.patriotchute.com/spaces/4758493","c":"PATRIOT FORUMS","a":["humanitarian project","humanitarian projects","humanitarian room","my project","submit a project","project room"]},{"t":"Patriot Companies & Job Board Room","u":"https://www.patriotchute.com/spaces/4759280","c":"PATRIOT FORUMS","a":[]},{"t":"Q-17 Room","u":"https://www.patriotchute.com/spaces/4758457","c":"PATRIOT FORUMS","a":[]},{"t":"Quantum Financial Room","u":"https://www.patriotchute.com/spaces/4757474","c":"PATRIOT FORUMS","a":[]},{"t":"RV | Currency Chat","u":"https://www.patriotchute.com/spaces/4759334","c":"PATRIOT FORUMS","a":[]},{"t":"The Epstein Files","u":"https://www.patriotchute.com/spaces/18595148","c":"PATRIOT FORUMS","a":[]},{"t":"WOW | Women Of Worth","u":"https://www.patriotchute.com/spaces/10601661","c":"PATRIOT FORUMS","a":[]},{"t":"Community News","u":"https://www.patriotchute.com/spaces/22399429","c":"PATRIOT NEWS ROOMS","a":["community news","announcements","what's new"]},{"t":"Midterms Election 2026","u":"https://www.patriotchute.com/spaces/5450744","c":"PATRIOT NEWS ROOMS","a":[]},{"t":"Patriot News Drops","u":"https://www.patriotchute.com/spaces/4758431","c":"PATRIOT NEWS ROOMS","a":[]},{"t":"Underground Patriot Newsroom","u":"https://www.patriotchute.com/spaces/6094172","c":"PATRIOT NEWS ROOMS","a":[]},{"t":"*State Director/County Coord Interest","u":"https://www.patriotchute.com/spaces/11424146","c":"PPN USA STATE GROUPS","a":["state director","county coordinator","become a director"]},{"t":"Alabama","u":"https://www.patriotchute.com/spaces/11400677","c":"PPN USA STATE GROUPS","a":["alabama","alabama group","alabama state group"]},{"t":"Alaska","u":"https://www.patriotchute.com/spaces/11400690","c":"PPN USA STATE GROUPS","a":["alaska","alaska group","alaska state group"]},{"t":"American Samoa","u":"https://www.patriotchute.com/spaces/11401791","c":"PPN USA STATE GROUPS","a":["american samoa","american samoa group","american samoa state group"]},{"t":"Arizona","u":"https://www.patriotchute.com/spaces/11400947","c":"PPN USA STATE GROUPS","a":["arizona","arizona group","arizona state group"]},{"t":"Arkansas","u":"https://www.patriotchute.com/spaces/11400963","c":"PPN USA STATE GROUPS","a":["arkansas","arkansas group","arkansas state group"]},{"t":"California","u":"https://www.patriotchute.com/spaces/11400970","c":"PPN USA STATE GROUPS","a":["california","california group","california state group"]},{"t":"Colorado","u":"https://www.patriotchute.com/spaces/11400980","c":"PPN USA STATE GROUPS","a":["colorado","colorado group","colorado state group"]},{"t":"Connecticut","u":"https://www.patriotchute.com/spaces/11400984","c":"PPN USA STATE GROUPS","a":["connecticut","connecticut group","connecticut state group"]},{"t":"Delaware","u":"https://www.patriotchute.com/spaces/11400994","c":"PPN USA STATE GROUPS","a":["delaware","delaware group","delaware state group"]},{"t":"District of Columbia (DC)","u":"https://www.patriotchute.com/spaces/11401772","c":"PPN USA STATE GROUPS","a":["district of columbia (dc)","district of columbia (dc) group","district of columbia (dc) state group"]},{"t":"Florida","u":"https://www.patriotchute.com/spaces/11400997","c":"PPN USA STATE GROUPS","a":["florida","florida group","florida state group"]},{"t":"Georgia","u":"https://www.patriotchute.com/spaces/11443357","c":"PPN USA STATE GROUPS","a":["georgia","georgia group","georgia state group"]},{"t":"Guam","u":"https://www.patriotchute.com/spaces/11401805","c":"PPN USA STATE GROUPS","a":["guam","guam group","guam state group"]},{"t":"Hawaii","u":"https://www.patriotchute.com/spaces/11401016","c":"PPN USA STATE GROUPS","a":["hawaii","hawaii group","hawaii state group"]},{"t":"Idaho","u":"https://www.patriotchute.com/spaces/11401026","c":"PPN USA STATE GROUPS","a":["idaho","idaho group","idaho state group"]},{"t":"Illinois","u":"https://www.patriotchute.com/spaces/11462416","c":"PPN USA STATE GROUPS","a":["illinois","illinois group","illinois state group"]},{"t":"Indiana","u":"https://www.patriotchute.com/spaces/11401046","c":"PPN USA STATE GROUPS","a":["indiana","indiana group","indiana state group"]},{"t":"Iowa","u":"https://www.patriotchute.com/spaces/11401056","c":"PPN USA STATE GROUPS","a":["iowa","iowa group","iowa state group"]},{"t":"Kansas","u":"https://www.patriotchute.com/spaces/11466607","c":"PPN USA STATE GROUPS","a":["kansas","kansas group","kansas state group"]},{"t":"Kentucky","u":"https://www.patriotchute.com/spaces/11469533","c":"PPN USA STATE GROUPS","a":["kentucky","kentucky group","kentucky state group"]},{"t":"Louisiana","u":"https://www.patriotchute.com/spaces/11401083","c":"PPN USA STATE GROUPS","a":["louisiana","louisiana group","louisiana state group"]},{"t":"Maine","u":"https://www.patriotchute.com/spaces/11401093","c":"PPN USA STATE GROUPS","a":["maine","maine group","maine state group"]},{"t":"Maryland","u":"https://www.patriotchute.com/spaces/11401103","c":"PPN USA STATE GROUPS","a":["maryland","maryland group","maryland state group"]},{"t":"Massachusetts","u":"https://www.patriotchute.com/spaces/11401286","c":"PPN USA STATE GROUPS","a":["massachusetts","massachusetts group","massachusetts state group"]},{"t":"Michigan","u":"https://www.patriotchute.com/spaces/11401298","c":"PPN USA STATE GROUPS","a":["michigan","michigan group","michigan state group"]},{"t":"Minnesota","u":"https://www.patriotchute.com/spaces/11401308","c":"PPN USA STATE GROUPS","a":["minnesota","minnesota group","minnesota state group"]},{"t":"Mississippi","u":"https://www.patriotchute.com/spaces/11401321","c":"PPN USA STATE GROUPS","a":["mississippi","mississippi group","mississippi state group"]},{"t":"Missouri","u":"https://www.patriotchute.com/spaces/11470928","c":"PPN USA STATE GROUPS","a":["missouri","missouri group","missouri state group"]},{"t":"Montana","u":"https://www.patriotchute.com/spaces/11401354","c":"PPN USA STATE GROUPS","a":["montana","montana group","montana state group"]},{"t":"Nebraska","u":"https://www.patriotchute.com/spaces/11401373","c":"PPN USA STATE GROUPS","a":["nebraska","nebraska group","nebraska state group"]},{"t":"Nevada","u":"https://www.patriotchute.com/spaces/11401380","c":"PPN USA STATE GROUPS","a":["nevada","nevada group","nevada state group"]},{"t":"New Hampshire","u":"https://www.patriotchute.com/spaces/11401387","c":"PPN USA STATE GROUPS","a":["new hampshire","new hampshire group","new hampshire state group"]},{"t":"New Jersey","u":"https://www.patriotchute.com/spaces/11401401","c":"PPN USA STATE GROUPS","a":["new jersey","new jersey group","new jersey state group"]},{"t":"New Mexico","u":"https://www.patriotchute.com/spaces/11401434","c":"PPN USA STATE GROUPS","a":["new mexico","new mexico group","new mexico state group"]},{"t":"New York","u":"https://www.patriotchute.com/spaces/11401439","c":"PPN USA STATE GROUPS","a":["new york","new york group","new york state group"]},{"t":"North Carolina","u":"https://www.patriotchute.com/spaces/11401463","c":"PPN USA STATE GROUPS","a":["north carolina","north carolina group","north carolina state group"]},{"t":"North Dakota","u":"https://www.patriotchute.com/spaces/11401471","c":"PPN USA STATE GROUPS","a":["north dakota","north dakota group","north dakota state group"]},{"t":"Northern Mariana Islands","u":"https://www.patriotchute.com/spaces/11401810","c":"PPN USA STATE GROUPS","a":["northern mariana islands","northern mariana islands group","northern mariana islands state group"]},{"t":"Ohio","u":"https://www.patriotchute.com/spaces/11401502","c":"PPN USA STATE GROUPS","a":["ohio","ohio group","ohio state group"]},{"t":"Oklahoma","u":"https://www.patriotchute.com/spaces/11401506","c":"PPN USA STATE GROUPS","a":["oklahoma","oklahoma group","oklahoma state group"]},{"t":"Oregon","u":"https://www.patriotchute.com/spaces/11401511","c":"PPN USA STATE GROUPS","a":["oregon","oregon group","oregon state group"]},{"t":"Pennsylvania","u":"https://www.patriotchute.com/spaces/11401637","c":"PPN USA STATE GROUPS","a":["pennsylvania","pennsylvania group","pennsylvania state group"]},{"t":"Puerto Rico","u":"https://www.patriotchute.com/spaces/11401823","c":"PPN USA STATE GROUPS","a":["puerto rico","puerto rico group","puerto rico state group"]},{"t":"Rhode Island","u":"https://www.patriotchute.com/spaces/11401642","c":"PPN USA STATE GROUPS","a":["rhode island","rhode island group","rhode island state group"]},{"t":"South Carolina","u":"https://www.patriotchute.com/spaces/11401652","c":"PPN USA STATE GROUPS","a":["south carolina","south carolina group","south carolina state group"]},{"t":"South Dakota","u":"https://www.patriotchute.com/spaces/11401665","c":"PPN USA STATE GROUPS","a":["south dakota","south dakota group","south dakota state group"]},{"t":"Tennessee","u":"https://www.patriotchute.com/spaces/11401677","c":"PPN USA STATE GROUPS","a":["tennessee","tennessee group","tennessee state group"]},{"t":"Texas","u":"https://www.patriotchute.com/spaces/17400769","c":"PPN USA STATE GROUPS","a":["texas","texas group","texas state group"]},{"t":"U.S. Virgin Islands","u":"https://www.patriotchute.com/spaces/11401829","c":"PPN USA STATE GROUPS","a":["u.s. virgin islands","u.s. virgin islands group","u.s. virgin islands state group"]},{"t":"Utah","u":"https://www.patriotchute.com/spaces/11401706","c":"PPN USA STATE GROUPS","a":["utah","utah group","utah state group"]},{"t":"Vermont","u":"https://www.patriotchute.com/spaces/11401719","c":"PPN USA STATE GROUPS","a":["vermont","vermont group","vermont state group"]},{"t":"Virginia","u":"https://www.patriotchute.com/spaces/11401732","c":"PPN USA STATE GROUPS","a":["virginia","virginia group","virginia state group"]},{"t":"Washington","u":"https://www.patriotchute.com/spaces/11401741","c":"PPN USA STATE GROUPS","a":["washington","washington group","washington state group"]},{"t":"West Virginia","u":"https://www.patriotchute.com/spaces/11401745","c":"PPN USA STATE GROUPS","a":["west virginia","west virginia group","west virginia state group"]},{"t":"Wisconsin","u":"https://www.patriotchute.com/spaces/11401750","c":"PPN USA STATE GROUPS","a":["wisconsin","wisconsin group","wisconsin state group"]},{"t":"Wyoming","u":"https://www.patriotchute.com/spaces/11401757","c":"PPN USA STATE GROUPS","a":["wyoming","wyoming group","wyoming state group"]},{"t":"New Member Launchpad","u":"https://www.patriotchute.com/spaces/22517254/content","c":"START HERE","a":["launchpad","new member launchpad","onboarding","badge"]},{"t":"Welcome & New Member Guide","u":"https://www.patriotchute.com/spaces/22517246/content","c":"START HERE","a":["welcome","new member guide","start here","getting started","tour"]}];

const TALKTIME = "https://www.patriotchute.com/spaces/24638548/page";
const HUMANITARIAN = "https://www.patriotchute.com/spaces/4758493/feed";
// Where members go when the Navigator has no answer for them.
const ASK_CHAT = "https://www.patriotchute.com/spaces/24817899/chat";

const SHOWS = [
  {name:"Coffee with Chas", day:"Mon&ndash;Fri", time:"9:00 AM CT", where:"Inside the community only",
   url:"https://www.patriotchute.com/spaces/18992734"},
  {name:"PPN News &mdash; Noon", day:"Mon&ndash;Fri", time:"12:00 PM CT", where:"In the community, Rumble, or the website",
   url:"https://www.patriotchute.com/spaces/24417514"},
  {name:"PPN News &mdash; Evening", day:"Mon&ndash;Fri", time:"8:00 PM CT", where:"In the community, Rumble, or the website",
   url:"https://www.patriotchute.com/spaces/4759408"}
];

const A = {};

/* Each answer carries a topic colour so the eye can tell at a glance what kind
   of thing it is looking at. Colours match the category dots in the right rail. */
const TONE = {
  "start-here":   ["navy","Getting started"],
  "talk-time":    ["red","Talk Time & your state"],
  "lost-access":  ["red","Talk Time & your state"],
  "state-group":  ["red","Talk Time & your state"],
  "telegram":     ["red","Talk Time & your state"],
  "watch-live":   ["denim","Live shows & replays"],
  "schedule":     ["denim","Live shows & replays"],
  "replays":      ["denim","Live shows & replays"],
  "cancel":       ["wheat","Your account & billing"],
  "change-card":  ["wheat","Your account & billing"],
  "still-charged":["wheat","Your account & billing"],
  "find-room":    ["olive","Find a room"],
  "disappeared":  ["olive","Find a room"],
  "humanitarian": ["olive","Find a room"],
  "guidelines":   ["slate","Community rules"],
  "text-small":   ["olive","Using the community"],
  "edit-profile": ["wheat","Your account & billing"],
  "change-email": ["wheat","Your account & billing"],
  "reset-password":["wheat","Your account & billing"],
  "notif-settings":["olive","Using the community"],
  "how-to-post":  ["olive","Using the community"],
  "how-feed-works":["olive","Using the community"],
  "hashtags":     ["olive","Using the community"],
  "privacy-data": ["navy","Getting started"]
};

A["talk-time"] = {
  q:"Where is Talk Time, and how do I get in?",
  h:"Talk Time is inside the community now",
  body:`<p>You no longer need Discord, Telegram or Signal. Talk Time lives right here in PPN, and you will not lose access to it again.</p>`,
  steps:["Open <b>Talk Time 2.0</b> using the button below.",
         "If you have not joined yet, join with your <b>Google account</b> and pick your state.",
         "That's it &mdash; you're in. You can chat nationally and with your own state, and join the live talks."],
  cta:{label:"Open Talk Time 2.0", url:TALKTIME},
  related:["state-group","telegram","lost-access"]
};

A["lost-access"] = {
  q:"I've lost access to Talk Time &mdash; how do I get back in?",
  h:"This has been fixed &mdash; Talk Time moved inside the community",
  body:`<p>The old Talk Time ran on Discord, outside PPN. That is what kept knocking people out: expired invites, name checks, and suspensions you had nothing to do with.</p>
        <p>Talk Time now runs <b>inside the community</b>. There is no separate app to get locked out of.</p>`,
  steps:["Open <b>Talk Time 2.0</b> below.",
         "Join with your <b>Google account</b> and pick your state.",
         "You're back in."],
  cta:{label:"Open Talk Time 2.0", url:TALKTIME},
  related:["talk-time","state-group"]
};

A["state-group"] = {
  q:"How do I find and join my state's group?",
  h:"Your state group is inside Talk Time 2.0",
  body:`<p>State groups now live inside Talk Time, together with the national chat. One place, one login.</p>`,
  steps:["Open <b>Talk Time 2.0</b> below.",
         "Join with your <b>Google account</b>.",
         "Pick <b>your state</b>.",
         "You can now talk with your state and nationally, and join the live talks."],
  cta:{label:"Open Talk Time 2.0", url:TALKTIME},
  related:["talk-time","find-room"]
};

A["telegram"] = {
  q:"Do I need Telegram or Signal?",
  h:"No &mdash; Telegram and Signal are no longer used",
  body:`<p>You do not need to install anything. Both have been replaced by <b>PPN Talk Time</b> inside the community.</p>
        <p>If you see an old post pointing at a Telegram or Signal link, it is out of date. Use Talk Time instead.</p>`,
  cta:{label:"Open Talk Time 2.0", url:TALKTIME},
  related:["talk-time","state-group"]
};

A["watch-live"] = {
  q:"Where do I watch today's live show?",
  h:"Where each show plays",
  body:`<p>Three shows, Monday to Friday. Where you can watch depends on the show.</p>`,
  table:{head:["Show","Day","Time (CT)","Where to watch"],
         rows:SHOWS.map(s=>[`<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`,s.day,
                            `<span class="when">${s.time}</span>`,s.where])},
  callout:`<b>Coffee with Chas is community-only.</b> It is not on Rumble or the website &mdash; watch it here.`,
  source:"Times from the community events calendar.",
  related:["schedule","replays"]
};

A["schedule"] = {
  q:"Is there a show today?",
  h:"The show calendar",
  body:`<p>Shows run <b>Monday to Friday</b>. There are no weekend shows.</p>`,
  table:{head:["Show","Day","Time (CT)"],
         rows:SHOWS.map(s=>[`<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`,s.day,
                            `<span class="when">${s.time}</span>`])},
  source:"Pulled from the community events calendar.",
  related:["watch-live","replays"]
};

A["replays"] = {
  q:"Where do I find the replay of a show I missed?",
  h:"Replays are moving",
  pending:true,
  body:`<p>Replays are being reorganised right now, so we are not going to send you somewhere that will be wrong next week.</p>
        <p>For the moment, open the room for the show you missed &mdash; the recording is posted there.</p>`,
  table:{head:["Show","Go to its room"],
         rows:SHOWS.map(s=>[s.name,`<a href="${s.url}" target="_blank" rel="noopener">Open room</a>`])},
  related:["watch-live","schedule"]
};

A["humanitarian"] = {
  q:"How do I submit my humanitarian project?",
  h:"There is no form &mdash; write it up and post it",
  body:`<p>People have hunted for a humanitarian project form for years. There isn't one, and that is the honest answer.</p>
        <p>Write your project up in your own words &mdash; you can use ChatGPT or Grok to help you put it together &mdash; then paste it straight into the Humanitarian Projects room.</p>`,
  callout:`Post the project <b>in the room itself</b>. That is where it gets seen.`,
  cta:{label:"Open Humanitarian Projects", url:HUMANITARIAN},
  source:"Confirmed by Chas Carter in the Humanitarian Projects room.",
  related:["find-room"]
};

A["cancel"] = {
  q:"How do I cancel my subscription?",
  h:"You cancel it yourself, in your account settings",
  pending:true,
  body:`<p>Your membership is billed through Mighty Networks, and only you can cancel it &mdash; the PPN team has no access to your card or bank details.</p>`,
  steps:["Click your <b>profile picture</b>.",
         "Go to <b>Plans and Access</b>.",
         "Find your active subscription.",
         "Click <b>Cancel Subscription</b>."],
  callout:`You keep access until the end of the billing period you have already paid for. After that your membership simply stops &mdash; <b>your posts and comments stay in the community</b>, and you can rejoin later with the same email.`,
  callout2:{warn:true, html:`<b>If you signed up through the iPhone or iPad app</b>, you must cancel through Apple instead: <b>Settings &rarr; your name &rarr; Media &amp; Purchases &rarr; Subscriptions</b>. Cancelling inside PPN will not stop an Apple charge.`},
  source:"A step-by-step video is being recorded and will replace these steps.",
  related:["change-card","still-charged"]
};

A["change-card"] = {
  q:"How do I change the card I pay with?",
  h:"Update your card in your billing settings",
  pending:true,
  body:`<p>Your card is stored in your account settings, and only you can change it &mdash; nobody at PPN can see or edit your card details.</p>`,
  steps:["Click your <b>profile picture</b> in the top right corner.",
         "Go to <b>Personal Settings</b>.",
         "Open <b>Account</b>, then <b>Billing</b>.",
         "Update your card there."],
  callout2:{warn:true, html:`<b>Use a web browser, not the phone app.</b> Card changes often cannot be completed in the app. Go to <b>patriotchute.com</b> in Chrome or Safari instead.`},
  source:"A step-by-step video is being recorded and will replace these steps.",
  related:["cancel","still-charged"]
};

A["still-charged"] = {
  q:"I cancelled but I'm still being charged",
  h:"Send us the details and we'll look into it",
  pending:true,
  body:`<p>We're sorry &mdash; that should not happen, and we will sort it out.</p>
        <p>Email the support team with these three things:</p>`,
  steps:["The <b>email address</b> on your PPN account.",
         "Your <b>name</b>.",
         "The <b>amount</b> you were charged."],
  callout2:{warn:true, html:`<b>One thing to check first.</b> If you originally signed up through the iPhone or iPad app, Apple bills you, not PPN &mdash; and cancelling inside PPN will not stop it. Check <b>Settings &rarr; your name &rarr; Media &amp; Purchases &rarr; Subscriptions</b> on your phone.`},
  source:"Support email address to be added.",
  related:["cancel","change-card"]
};

A["find-room"] = {
  q:"How do I find a room?",
  h:"Every room in the community",
  body:`<p>Type what you're looking for &mdash; the room name, your state, or just a word like &ldquo;prayer&rdquo; or &ldquo;veterans&rdquo;. Click any result to go straight there.</p>`,
  rooms:true,
  related:["state-group","disappeared"]
};

A["disappeared"] = {
  q:"My post, a room, or a host has disappeared",
  h:"Rooms do move &mdash; here's how to check",
  body:`<p>The community is being reorganised, so rooms genuinely get renamed or moved. Most of the time nothing has been deleted and nobody has been removed &mdash; it has just changed place.</p>`,
  steps:["Search for it in the room finder below &mdash; try the old name <i>and</i> a word from it.",
         "Check <b>Community News</b> for anything announced recently.",
         "Still gone? Ask in the chat with the name of what you're looking for."],
  cta:{label:"Search all rooms", action:"find-room"},
  related:["find-room"]
};

A["text-small"] = {
  q:"The print is too small for me to read",
  h:"Make the text bigger on your own screen",
  body:`<p>Good news &mdash; nothing is wrong with the site. Text size is set by your own phone or computer, so you can make it as large as you like and it will stay that way everywhere.</p>
        <p>You can also use the <b>Text + button at the top of this page</b> right now.</p>`,
  table:{head:["Your device","How to enlarge the text"],
    rows:[
      ["iPhone or iPad","Settings &rarr; Display &amp; Brightness &rarr; <b>Text Size</b>, then drag the slider right"],
      ["iPhone or iPad (bigger still)","Settings &rarr; Accessibility &rarr; Display &amp; Text Size &rarr; <b>Larger Text</b>"],
      ["Android phone","Settings &rarr; Display &rarr; <b>Font size</b>, then drag the slider right"],
      ["Windows computer","Settings &rarr; Accessibility &rarr; <b>Text size</b>, then drag the slider right"],
      ["Any computer browser","Hold <b>Ctrl</b> (or <b>&#8984;</b> on a Mac) and press <b>+</b> a few times"]
    ]},
  related:["notif-settings"]
};

A["start-here"] = {
  q:"I'm new &mdash; where do I start?",
  h:"A new welcome guide is on the way",
  pending:true,
  body:`<p>We're building a new step-by-step welcome for new members. Until it's ready, these three things will get you going:</p>`,
  steps:[`Join <b>Talk Time</b> and pick your state &mdash; that's where the conversation happens.`,
         `Find out <b>when the shows are</b> and where to watch them.`,
         `Have a look around the rooms and join the ones that interest you.`],
  cta:{label:"Open Talk Time 2.0", url:TALKTIME},
  related:["talk-time","schedule","find-room"]
};

A["guidelines"] = {
  q:"My post was removed, or I was muted &mdash; why?",
  h:"Community guidelines are being written",
  pending:true,
  body:`<p>We're putting proper community guidelines in writing so that everyone knows where they stand. Until they're published, we don't want to guess at a rule that isn't written down yet.</p>
        <p>If something of yours was removed, ask in the chat and we'll explain what happened.</p>`,
  related:["disappeared"]
};

/* ---------- triage ---------- */




/* ---------- account & profile ---------- */
A["edit-profile"] = {
  q:"How do I set up my profile or change my picture?",
  h:"Your profile is in Personal Settings",
  body:`<p>Everything about you &mdash; your name, your photo, what people see when they click on you &mdash; is in one place.</p>`,
  steps:["Click your <b>profile picture</b> in the top right corner.",
         "Choose <b>Personal Settings</b>.",
         "Choose <b>Edit Profile</b>.",
         "Change what you like, then save."],
  callout:`Your photo needs to be at least <b>500 x 500 pixels</b>, and it gets cropped into a circle. A normal photo from your phone is plenty big enough.`,
  related:["change-email","reset-password","notif-settings"]
};

A["change-email"] = {
  q:"How do I change the email address on my account?",
  h:"Change your email in your account settings",
  body:`<p>This is the address we send everything to, so it is worth keeping right.</p>`,
  steps:["Click your <b>profile picture</b> in the top right corner.",
         "Choose <b>Personal Settings</b>.",
         "Open <b>Account</b>.",
         "Update your email address there. You may be asked to verify the new one &mdash; check your inbox."],
  callout:`Changing your email here changes where your notifications go. It does not change anything about your payment.`,
  related:["reset-password","edit-profile","change-card"]
};

A["reset-password"] = {
  q:"I forgot my password &mdash; how do I reset it?",
  h:"Resetting your password",
  body:`<p>If you can still get in, change it from your account settings: <b>profile picture &rarr; Personal Settings &rarr; Account</b>.</p>
        <p>If you are locked out, use <b>Forgot password</b> on the sign-in screen and we will email you a link.</p>`,
  callout:`<b>If the email never arrives:</b> check your junk or spam folder first, and make sure you are using the same email address you joined with. If it still does not come, ask in the chat and we will help.`,
  callout2:{warn:true, html:`Some members sign in with <b>Google</b> instead of a password. If you joined that way, there is no password to reset &mdash; just use the Google button.`},
  related:["change-email","edit-profile"]
};

A["notif-settings"] = {
  q:"How do I turn notifications on or off?",
  h:"You control what you get, and how",
  body:`<p>Notifications reach you in more than one way, and each is switched separately. That is usually why people get too many, or none at all.</p>`,
  steps:["Click your <b>profile picture</b> in the top right corner.",
         "Choose <b>Personal Settings</b>.",
         "Choose <b>Notifications</b>.",
         "Turn on what you want, turn off what you don't."],
  table:{head:["Way you get them","What it is"],
    rows:[
      ["In the community","The bell icon at the top. On by default."],
      ["Email","Sent to the address on your account. On by default, as a once-a-day summary."],
      ["On your phone","Alerts on your phone screen. <b>Off by default</b> &mdash; you have to turn these on."],
      ["On your computer","Pop-ups from your browser."]
    ]},
  callout:`<b>Getting too much email?</b> Turn Email Updates down or off. <b>Getting nothing on your phone?</b> Phone alerts are off until you switch them on, in Notifications.`,
  related:["text-small","edit-profile"]
};

/* ---------- using the community ---------- */
A["how-to-post"] = {
  q:"How do I post, comment, or add a photo?",
  h:"Posting in a room",
  body:`<p>Go into the room you want to post in and use the box at the top to write. You can add a photo, a video, a link, a GIF or an emoji to the same post.</p>`,
  steps:["Open the room you want to post in.",
         "Click the box at the top that invites you to write something.",
         "Type your post. Use the icons to add a photo, video or link.",
         "Post it."],
  callout:`To reply to someone else, use the <b>comment</b> box underneath their post rather than writing a new one. That keeps the conversation together.`,
  related:["how-feed-works","hashtags","find-room"]
};

A["how-feed-works"] = {
  q:"What is the feed, and why do I see what I see?",
  h:"How the feed works",
  body:`<p>The feed gathers together what has been posted in the rooms <b>you have joined</b>. It is not everything in the community &mdash; it is your rooms.</p>
        <p>That is why two members see different things, and why joining more rooms gives you more in your feed.</p>`,
  steps:["Seeing too little? Join more rooms &mdash; use the room finder.",
         "Seeing too much? You can leave a room you are not interested in.",
         "Looking for one particular room? Go to it directly rather than scrolling the feed."],
  cta:{label:"Find a room", action:"find-room"},
  related:["find-room","how-to-post"]
};

A["hashtags"] = {
  q:"How do hashtags work?",
  h:"Hashtags group posts together",
  body:`<p>A hashtag is a word with a # in front of it, like <b>#Texas</b>. Clicking one shows you every post using it, which is a quick way to find everything on one subject.</p>`,
  steps:["To use one, type # and then the word, with <b>no spaces</b> &mdash; for example #Prayer or #Veterans.",
         "To find posts, click any hashtag you see and you will get the full list."],
  callout:`In the state rooms, county hashtags are how local members find each other. If your room uses them, add yours to your posts so people nearby can find you.`,
  related:["how-to-post","find-room"]
};

/* ---------- platform ---------- */

A["privacy-data"] = {
  q:"Is my information private? Do you sell my data?",
  h:"Your information is not sold",
  body:`<p>No. Your information is not sold to anyone, and what you post stays yours.</p>
        <p>What other members can see is your profile &mdash; your name, your photo and anything you have chosen to put there &mdash; along with what you post publicly in the rooms. Your email address and payment details are not shown to other members.</p>`,
  callout:`Be careful posting your <b>phone number or email address</b> in a room. Anyone in that room can read it. If you need help, ask in the chat instead.`,
  related:["edit-profile","privacy-data"]
};

/* ---------- categories ---------- */
const CATS = [
  {name:"Getting started", color:"var(--navy-2)", qs:["start-here","talk-time","find-room","schedule","privacy-data"]},
  {name:"Talk Time &amp; your state", color:"var(--red)", qs:["talk-time","state-group","lost-access","telegram"]},
  {name:"Live shows &amp; replays", color:"var(--denim)", qs:["watch-live","schedule","replays"]},
  {name:"Your account &amp; billing", color:"var(--wheat)", qs:["cancel","change-card","still-charged","edit-profile","change-email","reset-password"]},
  {name:"Using the community", color:"var(--olive)", qs:["how-to-post","how-feed-works","hashtags","notif-settings","text-small","find-room","humanitarian","disappeared","guidelines"]}
];

/* ---------- rendering ---------- */
const stream = document.getElementById("stream");
const BADGE = document.querySelector(".masthead .badge").outerHTML
  .replace(' role="img" aria-label="Patriot Party News"', ' aria-hidden="true"');

function esc(s){return String(s).replace(/[<>&"]/g,c=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"}[c]))}

function el(html){const t=document.createElement("template");t.innerHTML=html.trim();return t.content.firstElementChild}

function renderAnswer(key){
  const a = A[key]; if(!a) return;
  const msg = document.createElement("div"); msg.className="msg";
  msg.innerHTML = BADGE;
  const card = document.createElement("div"); card.className="card";

  const tone = TONE[key];
  let h = "";
  if(tone){
    card.classList.add("toned");
    card.style.borderTopColor = `var(--t-${tone[0]})`;
    h += `<p class="topic" style="color:var(--ti-${tone[0]})">${tone[1]}</p>`;
  }
  h += `<h2>${a.h}${a.pending?'<span class="pending">Being updated</span>':''}</h2>`;
  h += `<div class="lead">${a.body||""}</div>`;
  if(a.steps) h += `<ol class="steps">${a.steps.map(s=>`<li>${s}</li>`).join("")}</ol>`;
  if(a.table){
    h += `<div class="tablewrap"><table><thead><tr>${a.table.head.map(x=>`<th>${x}</th>`).join("")}</tr></thead><tbody>`
      + a.table.rows.map(r=>`<tr>${r.map((c,i)=>`<td${i===2&&a.table.head.length>3?' class="when"':''}>${c}</td>`).join("")}</tr>`).join("")
      + `</tbody></table></div>`;
  }
  if(a.callout) h += `<div class="callout"><p>${a.callout}</p></div>`;
  if(a.callout2) h += `<div class="callout ${a.callout2.warn?'warn':''}"><p>${a.callout2.html}</p></div>`;
  if(a.rooms) h += roomFinderHTML();
  if(a.triage) h += triageHTML(a.triage);
  if(a.cta){
    h += a.cta.url
      ? `<a class="cta" href="${a.cta.url}" target="_blank" rel="noopener">${a.cta.label}</a>`
      : `<button class="cta" data-goto="${a.cta.action}">${a.cta.label}</button>`;
  }
  if(a.source) h += `<p class="source">${a.source}</p>`;

  const rel = (a.related||[]).filter(k=>A[k]);
  if(rel.length){
    h += `<div class="band band-related"><p class="label">Related</p><div class="chips">`
      + rel.map(k=>`<button class="chip" data-goto="${k}">${A[k].q}</button>`).join("") + `</div></div>`;
  }
  h += `<div class="band band-feedback">
        <div class="feedback"><span>Did this help?</span>
        <button class="fb" data-fb="y">&#128077; Yes</button>
        <button class="fb" data-fb="n">&#128078; No</button></div>
        <a class="askchat" href="${ASK_CHAT}" target="_blank" rel="noopener">Didn't find your answer? Ask a question in the chat</a>
        </div>`;

  card.innerHTML = h;
  msg.appendChild(card);
  stream.appendChild(msg);

  card.querySelectorAll("[data-goto]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.goto)));
  card.querySelectorAll("[data-fb]").forEach(b=>b.addEventListener("click",()=>{
    card.querySelectorAll("[data-fb]").forEach(o=>o.setAttribute("aria-pressed","false"));
    b.setAttribute("aria-pressed","true");
  }));
  if(a.rooms) wireRoomFinder(card);
  if(a.triage) wireTriage(card,a.triage);

  msg.scrollIntoView({behavior:"smooth",block:"start"});
}

function roomFinderHTML(){
  return `<label class="sr" for="rs">Search rooms</label>
    <input class="roomsearch" id="rs" type="text" placeholder="Type a room name, your state, or a word&hellip;" autocomplete="off">
    <p class="count" data-count></p><ul class="roomlist" data-rooms></ul>`;
}
function wireRoomFinder(card){
  const input=card.querySelector(".roomsearch"), list=card.querySelector("[data-rooms]"), count=card.querySelector("[data-count]");
  function draw(q){
    const t=q.trim().toLowerCase();
    const hits = !t ? ROOMS : ROOMS.filter(r =>
      r.t.toLowerCase().includes(t) || r.c.toLowerCase().includes(t) ||
      (r.a||[]).some(x=>x.includes(t)));
    count.textContent = t ? `${hits.length} room${hits.length===1?"":"s"} match "${q.trim()}"` : `${ROOMS.length} rooms`;
    list.innerHTML = hits.slice(0,200).map(r =>
      `<li><a href="${r.u}" target="_blank" rel="noopener"><span class="rname">${esc(r.t)}</span><span class="rcat">${esc(r.c)}</span></a></li>`
    ).join("") || `<li><a>Nothing matched. Try a shorter word.</a></li>`;
  }
  input.addEventListener("input",()=>draw(input.value));
  draw("");
}

function triageHTML(t){
  return `<div class="triage">` + t.fields.map(f=>{
    const id=`${t.id}-${f.k}`;
    let ctrl;
    if(f.type==="select") ctrl=`<select id="${id}" data-k="${f.k}"><option value="">Choose one&hellip;</option>`+f.opts.map(o=>`<option>${o}</option>`).join("")+`</select>`;
    else if(f.type==="textarea") ctrl=`<textarea id="${id}" data-k="${f.k}" placeholder="${f.ph||""}"></textarea>`;
    else ctrl=`<input id="${id}" type="text" data-k="${f.k}" placeholder="${f.ph||""}">`;
    return `<div class="field"><label for="${id}">${f.label}</label>${ctrl}</div>`;
  }).join("") + `</div>
  <div class="callout"><p>${t.note}</p></div>
  <button class="cta" data-build>Write this up for me</button>
  <div data-result></div>`;
}
function wireTriage(card,t){
  const btn=card.querySelector("[data-build]"), out=card.querySelector("[data-result]");
  btn.addEventListener("click",()=>{
    const parts=[];
    t.fields.forEach(f=>{
      const v=card.querySelector(`[data-k="${f.k}"]`).value.trim();
      if(v) parts.push(`${f.label.replace(/\?$/,"")}: ${v}`);
    });
    if(!parts.length){ out.innerHTML=`<p class="source">Fill in at least one answer above first.</p>`; return; }
    const text = parts.join("\n") + "\n\n(Please add a screenshot if you can.)";
    out.innerHTML = `<hr class="divider"><p class="label">Copy this, then paste it into the chat</p>
      <div class="out">${esc(text)}</div>
      <a class="cta" href="${ASK_CHAT}" target="_blank" rel="noopener">Ask a question in the chat</a>`;
  });
}

const THINK_MS = 1000;   // how long the dots show before an answer appears
let thinking = false;

function showTyping(){
  const msg=document.createElement("div"); msg.className="msg"; msg.dataset.typing="1";
  msg.innerHTML = BADGE;
  const card=document.createElement("div"); card.className="card";
  card.innerHTML = `<div class="typing" role="status" aria-label="Working on your answer">
    <i></i><i></i><i></i></div>`;
  msg.appendChild(card); stream.appendChild(msg);
  msg.scrollIntoView({behavior:"smooth",block:"start"});
  return msg;
}

function think(render){
  if(thinking) return;
  thinking = true;
  const t = showTyping();
  setTimeout(()=>{ t.remove(); thinking = false; render(); }, THINK_MS);
}

function go(key){ think(()=>renderAnswer(key)); }

/* ---------- browser ---------- */
const catsEl=document.getElementById("cats");
CATS.forEach((c,i)=>{
  const d=el(`<div class="cat${i===0?" open":""}">
    <button aria-expanded="${i===0}"><span class="dot" style="background:${c.color}"></span>${c.name}<span class="arrow">&#9654;</span></button>
    <ul class="catlist">${c.qs.filter(k=>A[k]).map(k=>`<li><button data-goto="${k}">${A[k].q}</button></li>`).join("")}</ul>
  </div>`);
  d.querySelector("button").addEventListener("click",()=>{
    const open=d.classList.toggle("open");
    d.querySelector("button").setAttribute("aria-expanded",String(open));
  });
  d.querySelectorAll("[data-goto]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.goto)));
  catsEl.appendChild(d);
});

/* ---------- search ---------- */
/* Keywords per answer. The matcher scores a member's wording against these plus
   the question text itself, so "can I make a post?" finds the posting answer
   even though it shares no exact phrase with it. */
const KW = {
  "talk-time":["talk time","talktime","patriot talk","discord","voice","chat room","voice chat","join the chat","talk","chat","the chat","get into the chat","join chat","where do i chat"],
  "lost-access":["lost access","kicked out","cant get in","locked out of talk time","back in","invite","invalid invite","verify","verification","suspended","banned from discord","removed","cant get into","cant get in","get back in","shut out","no longer works"],
  "state-group":["state","state group","my state","county","local","local group","nearby","near me"],
  "telegram":["telegram","signal","messenger","install telegram"],
  "watch-live":["watch","where to watch","where do i watch","watch tonight","watch today","live","stream","rumble","tubepatriot","show","broadcast","tune in","coffee with chas","ppn news"],
  "schedule":["is there a show","show today","any show today","what time","when is","schedule","calendar","today","tonight","show today","times","rerun"],
  "replays":["replay","recording","missed","catch up","watch later","past show","archive"],
  "humanitarian":["humanitarian","humanitarian room","humanitarian project","project","projects","submit","form","template","proposal","apply"],
  "cancel":["cancel","unsubscribe","stop paying","end membership","quit","leave","opt out","stop my subscription","close membership"],
  "change-card":["card","credit card","debit","bank","payment method","billing","update payment","new card","expired"],
  "still-charged":["still charged","charged again","double charged","refund","money back","keeps charging","bank statement","overcharged","charged","twice","billed twice","charged me","taken money","came out again"],
  "find-room":["room","rooms","find","where is","group","space","which room","navigate","lost","cant find"],
  "disappeared":["disappeared","gone","missing","vanished","removed","deleted","where did it go","used to be"],
  "text-small":["small","tiny","font","text size","bigger","larger","cant read","hard to read","magnify","zoom in"],
  "start-here":["new","just joined","start","begin","getting started","first","beginner","newbie","where do i start"],
  "guidelines":["removed","muted","banned","blocked","rules","guidelines","censored","silenced","suspended","warning","why cant i post","deleted","why was my post","took my post down","taken down","post gone"],
  "edit-profile":["profile","picture","photo","avatar","my name","display name","bio","about me","change my picture","set up my profile"],
  "change-email":["email address","change my email","new email","update email","wrong email"],
  "reset-password":["password","forgot","reset","new password","change password","cant remember"],
  "notif-settings":["notifications","notification","notification settings","turn off","turn on","too many emails","stop emails","email settings","alerts","push","mute"],
  "how-to-post":["post","posting","make a post","picture","photo","image","put a picture","write","publish","share something","comment","reply","upload","add a photo","add a picture","add a video","attach"],
  "how-feed-works":["feed","timeline","home page","what i see","why do i see","main page","stream of posts"],
  "hashtags":["hashtag","hashtags","tag","tagging","#"],
  "privacy-data":["privacy","private","my data","sell my data","personal information","who can see","secure","safe","sell my information","information","personal details","data"]
};

const STOP = new Set(["i","a","an","the","my","me","do","does","did","how","can","could","would","what",
  "where","when","why","is","are","am","was","it","to","in","on","for","of","and","or","you","we","this",
  "that","be","get","got","have","has","there","here","please","help","need","want","with","from","at","which",
  "if","so","but","just","some","any","not","dont","cant","wont","im","ive","us","our","your","yours",
  "keep","keeps","keeping","really","very","also","still","again","thing","things"]);

function norm(t){ return t.toLowerCase().replace(/[^a-z0-9#\s]/g," ").replace(/\s+/g," ").trim(); }
function toks(t){ return norm(t).split(" ").filter(w=>w && !STOP.has(w) && w.length>1); }

/* How many answers use each word. A word only one answer uses ("humanitarian")
   identifies that answer far more strongly than one a dozen use ("room"). */
const DF = {};
for(const key in A){
  const seen = new Set(toks(A[key].q));
  (KW[key]||[]).forEach(k=>toks(k).forEach(w=>seen.add(w)));
  seen.forEach(w=>{ DF[w] = (DF[w]||0) + 1; });
}

/* Whole-word phrase matching, so "information" no longer matches "form". */
function hasPhrase(q, phrase){
  const pn = norm(phrase);
  if(!pn) return false;
  const esc = pn.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp("(^|\\s)" + esc + "($|\\s)").test(q);
}

/* Members misspell a lot ("pikture", "cancle", "subscribtion"), so an unmatched
   word of 5+ letters is compared against the known vocabulary and allowed one or
   two typos before we give up on it. */
const VOCAB = Object.keys(DF).filter(w=>w.length>=5);
function editWithin(a,b,max){
  if(Math.abs(a.length-b.length)>max) return false;
  const n=a.length, m=b.length;
  let prev2=null, prev=[...Array(m+1).keys()];
  for(let i=1;i<=n;i++){
    const cur=[i]; let best=i;
    for(let j=1;j<=m;j++){
      let v=Math.min(prev[j]+1, cur[j-1]+1, prev[j-1]+(a[i-1]===b[j-1]?0:1));
      // swapped letters ("chnage" for "change") count as one typo, not two
      if(i>1 && j>1 && a[i-1]===b[j-2] && a[i-2]===b[j-1]) v=Math.min(v, prev2[j-2]+1);
      cur.push(v); if(v<best) best=v;
    }
    if(best>max) return false;
    prev2=prev; prev=cur;
  }
  return prev[m]<=max;
}
function correct(w){
  if(DF[w] || w.length<5) return null;
  const max = w.length>=8 ? 2 : 1;
  for(const v of VOCAB){
    if(!editWithin(w,v,max)) continue;
    // people mistype the middle and end of a word, rarely the first two letters.
    // Without this, "crashing" becomes "charging".
    if(max > 1 && w.slice(0,2) !== v.slice(0,2) && !editWithin(w,v,1)) continue;
    return v;
  }
  return null;
}

/* Returns [{key, score}] best first. */
function rank(qRaw){
  const q = norm(qRaw);
  if(!q) return [];
  const qt = toks(qRaw).map(w=>correct(w) || w);
  // the same query with misspellings repaired, so phrases match too
  const qc = norm(qRaw).split(" ").map(w=>correct(w) || w).join(" ");
  const out = [];
  for(const key in A){
    let sc = 0;
    const qText = norm(A[key].q.replace(/&mdash;/g," ").replace(/&[a-z]+;/g," "));
    if(qText === q) sc += 100;
    (KW[key]||[]).forEach(k=>{
      if(hasPhrase(q,k) || (qc !== q && hasPhrase(qc,k))) sc += 6 + norm(k).split(" ").length * 3;
    });
    const qtSet = new Set(toks(A[key].q));
    (KW[key]||[]).forEach(k=>toks(k).forEach(w=>qtSet.add(w)));
    qt.forEach(w=>{
      if(!qtSet.has(w)) return;
      sc += 2;
      if(DF[w] === 1 && w.length >= 6) sc += 10;
      else if(DF[w] === 1) sc += 4;
    });
    if(sc>0) out.push({key, score:sc});
  }
  out.sort((x,y)=>y.score-x.score);
  return out;
}

function search(qRaw){
  const r = rank(qRaw);
  if(r.length && r[0].score >= 7) return r[0].key;
  const q = norm(qRaw);
  const room = ROOMS.find(x=>q.includes(norm(x.t)) || (x.a||[]).some(al=>q.includes(norm(al))));
  if(room) return "find-room";
  return null;
}

document.getElementById("askform").addEventListener("submit",e=>{
  e.preventDefault();
  const input=document.getElementById("ask"), v=input.value;
  const hit=search(v);
  if(hit){ go(hit); return; }
  const near = rank(v).slice(0,3).map(r=>r.key);
  think(()=>{
    const msg=document.createElement("div"); msg.className="msg";
    msg.innerHTML=BADGE;
    const card=document.createElement("div"); card.className="card";
    card.className="card toned";
    card.style.borderTopColor="var(--t-slate)";
    card.innerHTML=`<p class="topic" style="color:var(--ti-slate)">Let's get you help</p>
      <h2>Let's get a real person on this</h2>
      <p>I don't have an answer for that one, and if something isn't working properly the quickest route is to ask someone.</p>
      <p>Post your question in the chat below and the team will pick it up. Tell them what you were doing and what happened &mdash; a screenshot helps.</p>
      <button class="cta" data-goto="find-room">Search all rooms</button>
      ${near.length ? `<hr class="divider"><p class="label">Did you mean one of these?</p><div class="chips">`
        + near.map(k=>`<button class="chip" data-goto="${k}">${A[k].q}</button>`).join("") + `</div>` : ""}
      <a class="askchat" href="${ASK_CHAT}" target="_blank" rel="noopener">Ask your question in the chat</a>
      <p class="source">You asked: &ldquo;${esc(v)}&rdquo;</p>`;
    card.querySelectorAll("[data-goto]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.goto)));
    msg.appendChild(card); stream.appendChild(msg);
    msg.scrollIntoView({behavior:"smooth",block:"start"});
  });
  input.value="";
});

/* ---------- text size ---------- */
let size=16;
const SZ_MIN=14, SZ_MAX=26;
function setSize(n,save){
  size=Math.max(SZ_MIN,Math.min(SZ_MAX,n));
  document.documentElement.style.setProperty("--base",size+"px");
  document.getElementById("tminus").disabled=size<=SZ_MIN;
  document.getElementById("tplus").disabled=size>=SZ_MAX;
  if(save){ try{ localStorage.setItem("ppn-nav-size",String(size)); }catch(e){} }
}
document.getElementById("tplus").addEventListener("click",()=>setSize(size+2,true));
document.getElementById("tminus").addEventListener("click",()=>setSize(size-2,true));
try{ const s=parseInt(localStorage.getItem("ppn-nav-size"),10); if(s) setSize(s,false); else setSize(16,false); }
catch(e){ setSize(16,false); }

/* ---------- opening card ---------- */
(function(){
  const msg=document.createElement("div"); msg.className="msg";
  msg.innerHTML=BADGE;
  const card=document.createElement("div"); card.className="card intro";
  card.innerHTML=`<h2>Hi &mdash; what do you need?</h2>
    <div class="lead"><p>Pick a topic on the right, or type your question at the bottom. I'll point you to the exact room or page &mdash; and give you the link.</p></div>
    <ul class="checks">
      <li><span class="tick">&#10004;</span><span><b>Getting started</b> &mdash; where to begin, how to find your way</span></li>
      <li><span class="tick">&#10004;</span><span><b>Talk Time &amp; your state</b> &mdash; it's inside the community now</span></li>
      <li><span class="tick">&#10004;</span><span><b>Live shows &amp; replays</b> &mdash; what's on, when, and where to watch</span></li>
      <li><span class="tick">&#10004;</span><span><b>Your account</b> &mdash; your profile, email, password, billing</span></li>
      <li><span class="tick">&#10004;</span><span><b>Using the community</b> &mdash; posting, the feed, notifications</span></li>
      <li><span class="tick">&#10004;</span><span><b>Find a room</b> &mdash; all ${ROOMS.length} of them, with links</span></li>
    </ul>
    <hr class="divider">
    <p class="label">Most asked</p>
    <div class="chips">
      <button class="chip" data-goto="talk-time">Where is Talk Time?</button>
      <button class="chip" data-goto="watch-live">Where do I watch today's show?</button>
      <button class="chip" data-goto="find-room">How do I find a room?</button>
      <button class="chip" data-goto="cancel">How do I cancel my subscription?</button>
    </div>`;
  card.querySelectorAll("[data-goto]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.goto)));
  msg.appendChild(card); stream.appendChild(msg);
})();

const CASES=[
 ["can I make a post?","how-to-post"],["how do i write something","how-to-post"],
 ["can i put a picture in my post","how-to-post"],["where do i cancel","cancel"],
 ["i want to stop paying","cancel"],["unsubscribe me","cancel"],
 ["how do i change my credit card","change-card"],["my bank card expired","change-card"],
 ["you charged me twice","still-charged"],["i want my money back","still-charged"],
 ["wheres talk time","talk-time"],["how do i get into the chat","talk-time"],
 ["what time is the show","schedule"],["is there a show tonight","schedule"],
 ["where do i watch tonight","watch-live"],["i missed the show","replays"],
 ["how do i join my state","state-group"],["how do i change my picture","edit-profile"],
 ["i want to set up my profile","edit-profile"],["forgot my password","reset-password"],
 ["change my email address","change-email"],["stop sending me so many emails","notif-settings"],
 ["how do i turn off notifications","notif-settings"],["the writing is too small","text-small"],
 ["do you sell my information","privacy-data"],["what is a hashtag","hashtags"],
 ["why do i see these posts","how-feed-works"],["where is the humanitarian room","humanitarian"],
 ["i am brand new here","start-here"],["why was my post deleted","guidelines"],
 ["do i need telegram","telegram"],["CAN I MAKE A POST???","how-to-post"],
 ["how i put pikture on here","how-to-post"],["wher is talk time","talk-time"],
 ["cancle my subscription","cancel"],["chnage my passwrd","reset-password"],
 ["where is the prayer room","find-room"]
];
// Troubleshooting was deliberately removed: these must fall through to the
// "let's get a real person on this" card rather than answer with a guess.
const TO_HUMAN=["the app keeps crashing","nothing loads","i cant log in",
  "which app do i need","the site is broken","my screen is frozen"];

let pass=0,fail=[];
for(const [q,w] of CASES){const g=search(q);
  if(g===w)pass++;else fail.push([q,w,g,rank(q).slice(0,3).map(r=>r.key+":"+r.score).join(", ")]);}
let hpass=0,hfail=[];
for(const q of TO_HUMAN){const g=search(q);
  if(g===null)hpass++;else hfail.push([q,g,rank(q).slice(0,2).map(r=>r.key+":"+r.score).join(", ")]);}

console.log(`MATCHER:        ${pass}/${CASES.length} correct`);
console.log(`ROUTES TO HUMAN:${hpass}/${TO_HUMAN.length} fall through as intended`);
for(const [q,w,g,t] of fail) console.log(`  MISS "${q}" want=${w} got=${g}  [${t}]`);
for(const [q,g,t] of hfail) console.log(`  LEAK "${q}" answered with ${g}  [${t}]`);
process.exit(fail.length+hfail.length ? 1 : 0);

