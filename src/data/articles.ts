import precisionImg from "@/assets/articles/precision-agriculture-smallholder-farms.jpg";
import poultryImg from "@/assets/articles/poultry-expansion-2026.jpg";
import regenImg from "@/assets/articles/regenerative-middle-belt.jpg";
import solarImg from "@/assets/articles/solar-borehole-dry-season.jpg";
import startupsImg from "@/assets/articles/agritech-startups-h2-2026.jpg";
import fundImg from "@/assets/articles/fg-50b-agric-fund.jpg";
import wetImg from "@/assets/articles/wet-season-livestock-checklist.jpg";
import marketImg from "@/assets/articles/selling-harvest-online.jpg";

export type Category = {
  slug: string;
  name: string;
  blurb: string;
};

export const CATEGORIES: Category[] = [
  { slug: "crop-technology", name: "Crop Technology", blurb: "Sensors, seeds, drones and the tools changing the field." },
  { slug: "livestock", name: "Livestock & Poultry", blurb: "Husbandry, disease, feed and the economics of animal protein." },
  { slug: "irrigation", name: "Irrigation & Water", blurb: "Boreholes, dams, drip systems and dry-season strategy." },
  { slug: "agribusiness", name: "Agribusiness", blurb: "Markets, startups, exports and the business of farming." },
  { slug: "government", name: "Government & Policy", blurb: "Funds, subsidies, reforms and the rules that shape farms." },
  { slug: "climate", name: "Climate & Soil", blurb: "Regenerative practice, weather risk and soil restoration." },
  { slug: "markets", name: "Markets", blurb: "Prices, buyers, logistics and route-to-market intelligence." },
];

export type Article = {
  slug: string;
  title: string;
  dek: string;
  category: string; // category slug
  author: { name: string; initials: string; bio: string; title: string };
  date: string; // ISO
  readMinutes: number;
  tags: string[];
  image: string;
  body: string; // markdown-ish
  featured?: boolean;
  reads?: string;
};

const A = (a: Article) => a;

export const ARTICLES: Article[] = [
  A({
    slug: "precision-agriculture-smallholder-farms",
    title: "How Precision Agriculture Is Transforming Smallholder Farms in Northern Nigeria",
    dek: "From soil sensors to drone mapping, farmers in Kano and Kaduna are adopting affordable tech that's boosting yields by up to 40%.",
    category: "crop-technology",
    author: { name: "Bright Joel", initials: "BJ", bio: "Bright covers food systems, agritech and rural development across West Africa. He has reported from 18 of Nigeria's 36 states.", title: "Field Correspondent" },
    date: "2026-05-28",
    readMinutes: 8,
    tags: ["Precision Farming", "Drones", "Soil Sensors", "Kano", "Maize"],
    image: precisionImg,
    featured: true,
    reads: "4.1K",
    body: `From affordable soil sensors to drone-assisted field mapping, smallholder farmers across Kano and Kaduna states are quietly adopting precision agriculture tools — and reporting yield increases of up to 40%.

For most of Nigeria's 36 million smallholder farmers, the idea of using technology to manage crops has long felt like something reserved for large commercial operations. But that's changing rapidly, driven by a new wave of affordable hardware, smartphone-based tools, and government-backed training programmes.

## What is precision agriculture, exactly?

Precision agriculture is the practice of using data and technology to make more informed decisions at specific points on a farm — rather than treating the entire field as if it behaves the same way. In practice, this means collecting information about soil moisture, nutrients, temperature, and crop health, then applying water, fertiliser, and pesticides only where and when they're needed.

> "Before, I would spray the whole field whether or not I saw pests. Now I only treat the affected zones. I've cut my pesticide cost by almost half." — Musa Abdullahi, maize farmer, Kano State

## The three technologies making an impact

The most accessible entry point is **soil sensing**. Devices from local startups can be purchased for ₦40,000–₦90,000 and connect directly to a smartphone app, sending push notifications when soil moisture drops below optimal levels.

**Drone-as-a-service** is the second wave. Operators across the north now charge ₦8,000–₦15,000 per hectare for multispectral mapping that reveals stress, pests and nutrient deficiency long before damage is visible.

Finally, **digital farm management platforms** like Releaf, Agrorite and AFEX let farmers log activity, receive advisory alerts and — crucially — build the data trail that makes them creditworthy to agricultural lenders.

## What are the barriers?

Despite the progress, most smallholders remain locked out. Upfront cost, patchy 4G in rural Northwest and Northeast, low digital literacy among older farmers, and broken post-harvest infrastructure all compound. As one extension officer told us, "Technology can help you grow more food. But if the road to market is broken, you've only increased your losses."

## The road ahead

The combination of affordable sensors, drone-as-a-service and digital platforms represents the most accessible entry point into precision agriculture in Nigeria's history. Those who move now are building data histories that will compound in value over time.`,
  }),
  A({
    slug: "poultry-expansion-2026",
    title: "5 Things Every Nigerian Poultry Farmer Must Know Before Expanding in 2026",
    dek: "Before you double your flock size, read this guide on disease management, feed costs, and market timing from Ogun State farmers.",
    category: "livestock",
    author: { name: "Bright Joel", initials: "BJ", bio: "Bright writes about livestock economics and animal health from Abeokuta.", title: "Senior Reporter" },
    date: "2026-05-22",
    readMinutes: 6,
    tags: ["Poultry", "Ogun", "Feed Costs", "Disease"],
    image: poultryImg,
    featured: true,
    reads: "3.7K",
    body: `Expansion looks tempting when egg prices spike. But the farmers who survive 2026 will be the ones who plan around feed, biosecurity and offtake — in that order.

## 1. Feed is 70% of your cost. Lock it before you scale.

Maize and soybean meal volatility is the single biggest reason small poultry operations fail in their second year. Forward contracts with a co-op or a trusted aggregator beat spot-market roulette every time.

## 2. Biosecurity isn't optional anymore

Avian influenza outbreaks have hit at least 14 states since 2024. Footbaths, restricted entry, and an isolation pen for new birds are the minimum bar — not a nice-to-have.

## 3. Know your offtake before you place the next order of day-olds

The worst position to be in is finished birds and no buyer. Pre-sell to restaurants, supermarkets and event caterers before brooding the next batch.

## 4. Cash-flow the build, don't credit it

Loan-funded expansion in a high-rate environment compounds every other risk. Stage the build over two cycles rather than one.

## 5. Vaccinate on a calendar, not on a vibe

Newcastle, Gumboro and fowl pox schedules are non-negotiable. Print the schedule and pin it to the pen wall.`,
  }),
  A({
    slug: "regenerative-middle-belt",
    title: "Regenerative Farming Practices Gaining Ground Across the Middle Belt",
    dek: "Cover crops and composting are helping farmers in Benue and Plateau restore soil health depleted by decades of monoculture.",
    category: "climate",
    author: { name: "Bright Joel", initials: "BJ", bio: "Bright reports on climate adaptation and soil science from Jos.", title: "Climate Reporter" },
    date: "2026-05-18",
    readMinutes: 7,
    tags: ["Regenerative", "Soil", "Benue", "Plateau"],
    image: regenImg,
    reads: "2.4K",
    body: `In Benue and Plateau states, a quiet shift is underway. Farmers who have watched yields decline for a decade are turning to cover cropping, composting and reduced tillage — and finding that depleted soil can come back.

## What is regenerative farming?

The label covers a set of practices that prioritise soil biology: keeping the ground covered, minimising disturbance, rotating species, and integrating livestock. Done together, these practices rebuild organic matter and water-holding capacity.

## Why the Middle Belt is the frontline

Decades of maize-on-maize and yam-on-yam have stripped Middle Belt soils of carbon. Rainfall is more erratic. Margins are thinner. The pressure to change is real.

> "I used to plough every season. Now I don't. My soil holds water for ten more days." — David Iorhemen, mixed-crop farmer, Benue State

The catch: regenerative practice rewards patience. Most farmers see meaningful soil response in season three, not season one.

## The five practices doing the heavy lifting

Farmers we spoke to in Gboko, Otukpo and Vom were not running textbook programmes. They were stacking whichever of the following five practices fit their land, labour and cash flow.

**1. Cover crops in the off-season.** Mucuna, lablab and cowpea are the workhorses. Planted as the main harvest comes off, they smother weeds, fix nitrogen and feed soil microbes through the dry months. Cost per hectare is modest; the payoff is a 15–25% reduction in synthetic nitrogen the following season.

**2. Composting at the compound level.** Kitchen waste, crop residue and poultry litter, layered and turned weekly, produce usable compost in eight to ten weeks. Farms applying 3–5 tonnes per hectare are reporting visible improvements in soil tilth within two seasons.

**3. Reduced tillage.** Not zero-till — most smallholders cannot afford the specialist planters that requires — but a deliberate move from three passes per season to one. Less fuel, less labour, and crucially, less disturbance to the fungal networks that move nutrients underground.

**4. Crop rotation with legumes.** Breaking the maize-on-maize cycle with a season of soybean or groundnut is the single highest-return change a Middle Belt farmer can make. Pest pressure falls, nitrogen rises, and the legume itself sells.

**5. Integrating small ruminants.** Goats and sheep grazed on crop residue close the nutrient loop. Their manure goes back to the field. Their meat and milk diversify income.

## What it costs to start

The honest answer: very little cash, quite a lot of attention. Cover crop seed for a hectare runs ₦8,000–₦18,000. A compound composting setup is a pit, a fork and discipline. The real investment is the season of lower yields some farmers see in year one before biology catches up.

## Where the support is coming from

IITA, Sasakawa Africa Association and a handful of state ADPs are running training cohorts across Benue, Nasarawa and Plateau. The Bank of Agriculture's smallholder window has begun accepting regenerative transition plans as part of loan applications — a quiet but meaningful shift.

## The bottom line

Regenerative farming is not a silver bullet and it is not a brand. It is a slow rebuild of the asset every farmer depends on. For Middle Belt growers staring down another decade of erratic rain and rising input costs, the maths is starting to favour patience.`,
  }),
  A({
    slug: "solar-borehole-dry-season",
    title: "Solar-Powered Borehole Systems: The Game Changer for Dry Season Farming",
    dek: "Cost breakdowns, installation guides, and return-on-investment analysis for Nigerian farmers considering solar irrigation.",
    category: "irrigation",
    author: { name: "Bright Joel", initials: "BJ", bio: "Bright covers water infrastructure and renewable energy in agriculture.", title: "Infrastructure Reporter" },
    date: "2026-05-12",
    readMinutes: 9,
    tags: ["Solar", "Borehole", "Irrigation", "Dry Season"],
    image: solarImg,
    reads: "3.2K",
    body: `A 1.5kW solar pump can cost between ₦650,000 and ₦1.1M installed, depending on borehole depth and tank size. For a two-hectare vegetable plot, that investment now pays back in roughly 14 months at current dry-season prices.

## The cost stack

Borehole drilling is the variable that breaks budgets. Expect ₦4,500–₦7,000 per metre in the Northwest, more in rocky terrain. Plan for 60–80m depth as a baseline.

## Sizing the array

A common error is undersizing the panels. Pumps work, but the tank never fills. Rule of thumb: panel wattage = pump wattage × 1.3 to compensate for cloudy mornings and wiring loss.

## What breaks

Cables. Always cables. Use UV-rated outdoor sheathing and bury conduit. After cables, in order of frequency: float switches in the storage tank, controller boards exposed to dust, and the rubber gaskets on the pump head.

## A worked example: two hectares of tomato in Kebbi

Take a real case from a farmer outside Birnin Kebbi. Borehole at 72 metres. 1.8kW pump. 2,400W of panels. 10,000-litre overhead tank. Drip lines on raised beds.

- Drilling: ₦486,000
- Pump and controller: ₦310,000
- Panels, mounting and cabling: ₦395,000
- Tank, stand and plumbing: ₦220,000
- Drip kit for two hectares: ₦180,000

Total: roughly ₦1.59M. Two dry-season tomato cycles at current farm-gate prices clear the capital, with the drip system itself adding 20–30% to effective yield by eliminating the wet-and-dry stress that cracks fruit.

## Diesel vs solar, honestly

A comparable diesel setup is cheaper to install — perhaps ₦700,000 all in — but burns ₦18,000–₦25,000 of fuel per week during peak irrigation. Within 18 months, the solar farmer is ahead. Within three years, it is not close.

## Maintenance schedule

- Weekly: wipe panels, check tank level, listen to the pump.
- Monthly: tighten cable lugs, inspect controller for ant nests.
- Quarterly: pull the pump if pressure drops more than 10%.
- Annually: replace gaskets, service the controller, audit the borehole for sand intrusion.

## What to ask the installer before you sign

1. What is the warranty on the pump, and is it honoured in-country?
2. Is the controller MPPT or PWM? (Insist on MPPT.)
3. Who owns the borehole logs?
4. What is the procedure if water table drops next dry season?

Get the answers in writing. The farmers who regret the investment are almost always the ones who took the cheapest quote without these four questions answered.`,
  }),
  A({
    slug: "agritech-startups-h2-2026",
    title: "Top 8 Nigerian Agritech Startups to Watch in the Second Half of 2026",
    dek: "From e-marketplaces to AI-powered pest detection, these startups are reshaping the agricultural value chain.",
    category: "agribusiness",
    author: { name: "Bright Joel", initials: "BJ", bio: "Bright writes about venture, startups and value-chain innovation.", title: "Business Reporter" },
    date: "2026-05-05",
    readMinutes: 5,
    tags: ["Startups", "Venture", "Agritech"],
    image: startupsImg,
    reads: "5.0K",
    body: `Eight Nigerian agritech operators are quietly outperforming their headlines. Here is who we are watching, why, and what they need to prove in the next two quarters.

## The shortlist

1. **Releaf** — palm processing at the cluster level. Watch unit economics in Akwa Ibom.
2. **ThriveAgric** — credit + offtake. Watch default rates this rainy season.
3. **Crop2Cash** — input finance routed through agro-dealers.
4. **Hello Tractor** — booking platform pivoting toward implements.
5. **Vendease** — restaurant-side aggregation; pressure on burn.
6. **Farmcrowdy** — back from the brink, now lean.
7. **AFEX** — commodities exchange with the deepest data moat.
8. **Releaf-adjacent** spinouts — small but interesting.

## Why these eight, and not the louder names

The Nigerian agritech press cycle still rewards fundraising announcements over operating discipline. The eight above were chosen for the opposite reason: each has visible traction with farmers or buyers, a sharpening focus on a single defensible wedge, and a path to profitability that does not depend on the next round.

## The themes binding them together

**Embedded finance is winning.** Credit attached to inputs, offtake or equipment use is outperforming standalone lending. ThriveAgric and Crop2Cash are the clearest examples; both are pricing risk against an actual cash-flow event rather than a farmer's self-reported plan.

**Aggregation beats marketplace.** Pure-play marketplaces in Nigerian agriculture have struggled for a decade. The companies on this list that win at distribution are aggregators — they take possession, manage quality and resell — rather than passive platforms.

**Hardware is back.** After years of software-only theses, Hello Tractor's pivot into implements and Releaf's processing kit suggest that owning a physical step in the value chain is once again investable.

## What each needs to prove by Q4

- **Releaf:** that the cluster model replicates outside Akwa Ibom without losing margin.
- **ThriveAgric:** that the new underwriting model holds up through a full wet-season default cycle.
- **Crop2Cash:** that agro-dealer partners stay disciplined as ticket sizes grow.
- **Hello Tractor:** that implement attachment rates justify the inventory.
- **Vendease:** that restaurant churn stabilises as the unit economics tighten.
- **Farmcrowdy:** that the leaner business actually compounds rather than just survives.
- **AFEX:** that the warehouse receipt programme scales beyond grains.
- **The spinouts:** that they are real businesses, not founder side-projects.

## What we are watching for the rest of 2026

Three signals matter more than any fundraising announcement: gross margin trajectory, farmer or buyer retention, and the ratio of repeat to first-time transactions. Any operator improving on all three is worth a closer look, named on this list or not.`,
  }),
  A({
    slug: "fg-50b-agric-fund",
    title: "FG's ₦50B Agric Fund: Who Qualifies, How to Apply, and What to Expect",
    dek: "A plain-language breakdown of the Federal Government's latest agricultural financing window and eligibility criteria.",
    category: "government",
    author: { name: "Bright Joel", initials: "BJ", bio: "Bright covers federal agricultural policy from Abuja.", title: "Policy Correspondent" },
    date: "2026-04-29",
    readMinutes: 7,
    tags: ["Policy", "Finance", "AGSMEIS", "FG"],
    image: fundImg,
    reads: "6.4K",
    body: `The ₦50 billion Agric Fund is open. Eligibility is narrower than the headlines suggest, and the disbursement window is short. Here is what to know before you spend a week on the paperwork.

## Who qualifies

Registered cooperatives and CAC-registered agribusinesses with at least 12 months of operating history. Subsistence-only operations are not the target.

## What you need

CAC documents, BVN, two seasons of farm records, a bankable proposal, and an offtake letter. The offtake letter is the most common point of rejection.

## Disbursement realities

Approved applicants typically wait 8–14 weeks for the first tranche. Plan accordingly.

## How the fund is structured

The ₦50B is split across three windows: input financing (up to ₦5M per cooperative), equipment financing (up to ₦25M per agribusiness), and value-chain financing (up to ₦150M for processors with documented offtake). Interest is single-digit, tenor is 12–36 months, and there is a six-month moratorium on principal for crop-cycle borrowers.

## The paperwork, in order

1. CAC certificate and status report (not older than three months).
2. BVN of all signatories.
3. Tax clearance for the last two years where applicable.
4. Two seasons of farm records — yield, input cost, sales.
5. A written proposal: what you will do with the money, when, and how you will repay.
6. A signed offtake letter from a verifiable buyer.
7. Bank statements for the last 12 months.

Applications without item 6 are rejected at screening. Applications without item 4 are deferred indefinitely.

## Common rejection reasons

- Offtake letter from a buyer that cannot be reached by phone.
- Proposed activity outside the priority commodity list (current priorities: rice, maize, wheat, cassava, poultry, dairy, aquaculture, oil palm).
- Mismatch between requested amount and demonstrated operating scale.
- Co-mingled personal and business bank accounts.

## What approved farmers actually do with the money

The pattern, from cooperatives we have spoken to in Kebbi, Niger and Cross River: 50–60% on inputs (seed, fertiliser, agro-chemicals), 20–30% on mechanisation hire, 10–20% on storage and post-harvest handling. The cooperatives that ring-fence storage spending tend to repay on time. The ones that spend it all on inputs and gamble on price often do not.

## A realistic timeline

- Week 0: Application submitted.
- Weeks 2–4: Desk review at the participating commercial bank.
- Weeks 4–8: Field verification.
- Weeks 8–12: Credit committee.
- Weeks 12–16: First disbursement.

If you have not heard anything by week 6, escalate in writing to the participating bank's agribusiness desk. Silence is rarely good news.

## The bottom line

The fund is real and the money is moving, but it rewards prepared applicants and punishes hopeful ones. Spend the week on the offtake letter and the farm records before you spend it on the proposal itself.`,
  }),
  A({
    slug: "wet-season-livestock-checklist",
    title: "Is Your Farm Ready for the Wet Season? A Complete Livestock Checklist",
    dek: "Protect your animals from flooding, disease outbreaks, and feed shortages with this pre-season preparation guide.",
    category: "livestock",
    author: { name: "Bright Joel", initials: "BJ", bio: "Bright covers ruminant health and pastoralist communities.", title: "Livestock Reporter" },
    date: "2026-04-23",
    readMinutes: 5,
    tags: ["Wet Season", "Livestock", "Disease", "Feed"],
    image: wetImg,
    reads: "2.0K",
    body: `Wet season prep is mostly drainage and vaccination. The farms that survive the season do both before the first heavy rain — not after.

## Drainage

Walk every pen at the end of the dry season. Anywhere water pools, dig it out and gravel it in. Standing water is the single biggest source of hoof rot and parasitic load.

## Vaccination

CBPP, PPR, anthrax. Confirm cold chain at your supplier — vaccines that warmed in transit will protect nothing.

## Feed buffer

Keep at least four weeks of dry feed on hand. Roads close. Suppliers close. Markets close. Your animals still eat.

## Shelter and bedding

Inspect every roof before the first storm. A leaking roof in a pen full of small ruminants will cost you more in pneumonia than the repair would have cost in materials. Replace straw bedding weekly during the wet months and keep a dry stockpile under tarp.

## Parasite control

Wet season is fluke and worm season. Deworm two weeks before expected rains using a rotation of active ingredients — alternating between albendazole-class and levamisole-class products prevents resistance from building. Re-treat at six weeks if pasture pressure is high.

## Water hygiene

Run-off contaminates troughs faster than most farmers realise. Raise troughs above ground level, scrub them weekly, and consider a simple chlorine dose for surface-water sources. Diarrhoea outbreaks in young stock almost always trace back to a dirty trough.

## Records and isolation

Set up one isolation pen, away from the main herd, before the season starts. Any new arrival or sick animal goes there for at least 14 days. Keep a simple notebook: date, animal ID, symptom, treatment. Most farmers who lose animals in wet season lose them because they cannot remember what they treated three days ago.

## A 14-day countdown checklist

- Day 14: Walk drainage, dig where water pools.
- Day 12: Order vaccines, confirm cold chain.
- Day 10: Repair roofs and fences.
- Day 8: Deworm the herd.
- Day 6: Scrub and chlorinate water points.
- Day 4: Stock four weeks of feed.
- Day 2: Vaccinate.
- Day 0: First heavy rain — you are ready.`,
  }),
  A({
    slug: "selling-harvest-online",
    title: "Selling Your Harvest Online: A Practical Guide to Nigerian Agri-Platforms",
    dek: "Comparing TradeDepot, Farmcrowdy, Releaf, and other platforms on fees, logistics support, and payment speed.",
    category: "markets",
    author: { name: "Bright Joel", initials: "BJ", bio: "Bright writes about markets and trade.", title: "Markets Reporter" },
    date: "2026-04-17",
    readMinutes: 6,
    tags: ["Marketplaces", "Logistics", "Payments"],
    image: marketImg,
    reads: "1.8K",
    body: `Each platform optimises for something different. Pick the one that matches what hurts most on your farm: payment speed, logistics or fair price discovery.

## TradeDepot

Fast payment, opinionated on quality. Best if you have consistent grade-A output.

## Releaf

Specialised. If you grow palm, this is the call. If you don't, skip.

## AFEX

Best for storage receipts and price hedging. Most paperwork. Worth it above 5 tons.

## ThriveAgric

Closest thing to a one-stop shop for grain farmers. Input credit on the way in, guaranteed offtake on the way out. Payment lands 7–14 days after delivery to their aggregation point. Margin is tighter than a spot sale in a good year and noticeably better in a bad one.

## Crop2Cash

Not a marketplace in the strict sense, but the agro-dealer network they sit behind has become a viable sales channel for farmers who already buy inputs from a participating dealer. Payment in 48 hours, settled to BVN-linked accounts.

## Farmcrowdy Market

Reborn and leaner. Good for farmers selling perishables — tomato, pepper, leafy greens — into Lagos and Port Harcourt. Logistics is handled, which is the entire reason to use it.

## How to choose, quickly

- If payment speed matters most: TradeDepot or Crop2Cash.
- If you grow palm: Releaf, no contest.
- If you have storage and patience: AFEX.
- If you grow grain and need input finance: ThriveAgric.
- If you grow perishables and hate logistics: Farmcrowdy Market.

## Fees, roughly

Marketplace fees in Nigeria cluster between 3% and 8% of gross. The platforms charging closer to 8% are usually bundling logistics, quality grading and insurance. Read the deduction breakdown on your first payout statement carefully — that is where the real cost lives.

## What none of them solve

Quality consistency. Every platform on this list will downgrade or reject a load that arrives off-spec, and the appeal process is slow everywhere. Invest in moisture meters, grading sieves and proper bagging before you invest in another sales channel. The farmers who consistently get top price on these platforms are the ones who would have got top price anywhere.

## A practical first move

Pick one platform that matches your single biggest pain point. Run three loads through it before you judge. Compare net price-in-hand, not gross headline price. Switch only if a different platform clearly clears more on the same load.`,
  }),
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const articlesInCategory = (slug: string) => ARTICLES.filter((a) => a.category === slug);