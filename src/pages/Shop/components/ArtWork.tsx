import printLinksLive from './print-links.json';
import printLinksTest from './print-links.test.json';
import featuredArt from '../../../assets/feature.webp';
import art1 from './artworks/Ancestral Link.webp';
import art2 from './artworks/Digital Current.webp';
import art3 from './artworks/Dahomey Twins.webp';
import art4 from './artworks/Ascension Fragments.webp';
import art5 from './artworks/Fiery Descent _Scotland.webp';
import art6 from './artworks/Jesus.webp';
import art7 from './artworks/Spain of my Childhood.webp';
import art8 from "./artworks/1. Hustl'n (a).webp";
import art9 from "./artworks/2. Talk'n 'Bout It (a).webp";
import art10 from "./artworks/3. Sniff'n.webp";
import art11 from "./artworks/4. Kiss'n (a).webp";
import art12 from "./artworks/5. Blow'n (a).webp";
import art13 from "./artworks/6. Touch'n.webp";
import art14 from "./artworks/7. Hang'n There (a).webp";
import art15 from "./artworks/8. Top'n.webp";
import art16 from "./artworks/9. Plow'n (a).webp";
import art17 from "./artworks/10. Pound'n (a).webp";
import art18 from "./artworks/11. Flow(er)'n (a).webp";
import art19 from "./artworks/0. Warning.webp";
import art20 from "./artworks/1. Suspense.webp";
import art21 from "./artworks/2. Heel.webp";
import art22 from "./artworks/3. Trigger.webp";
import art23 from "./artworks/4. She Bold.webp";
import art24 from "./artworks/5. She Really Bold.webp";
import art25 from "./artworks/6. Controversy.webp";
import art26 from "./artworks/7. Shocker.webp";
import art27 from "./artworks/8. Raw.webp";
import art28 from "./artworks/10. Scandal.webp";
import art29 from "./artworks/penguin.webp";
import art30 from "./artworks/le coq.webp";
import art31 from "./artworks/le berger.webp";
import art32 from "./artworks/bintou et son chien.webp";
import art33 from "./artworks/les pecheurs.webp";
import art34 from "./artworks/3. fruits.webp";
import art35 from "./artworks/1. Home (3rd Oil on Canvas) (1).webp";
import art36 from "./artworks/1. Blanc_CP.webp";
import art37 from "./artworks/The Thinker.webp";
import art38 from "./artworks/El Negro.webp";
import art39 from "./artworks/Spring River.webp";
import art40 from "./artworks/1. La Basse Cour_WC_Sold.webp";
import art41 from "./artworks/2. A La Campagne_WC_Available.webp";
import art42 from "./artworks/3. Mr. s'Quick_WC_Sold.webp";
import art43 from "./artworks/4. Rouge_WC_Available.webp";
import art44 from "./artworks/She.webp";
import art45 from "./artworks/6. Miao Zhe Cha_WC_Available.webp";
import art46 from "./artworks/1. Market Day_OP_Available.webp";
import art47 from "./artworks/2. Brr.webp";
import art48 from "./artworks/4. Ichi_WC_Available ▪ Ichi One (Japanese).webp";
import art49 from "./artworks/3. Tel Jangal_WC_Available ▪ Tel Jangal Oil Jungle (Hindi).webp";
import art50 from "./artworks/5. Plasticine_WC_Available.webp";
import art51 from "./artworks/0. v3 _ Emotions_ Pencil, WC, DP, Color Pencil_Available.webp";
import art52 from "./artworks/1. Vstrecha_DP_Available The Meeting (Russian).webp";
import art53 from "./artworks/1. The Smiling Curtain_WC_Available.webp";
import art54 from "./artworks/2. American House_WC_Available.webp";
import art55 from "./artworks/3. Ramo Ambita_WC_Available l Ramo Ambita The Coveted Branch (Italian).webp";
import art56 from "./artworks/4. Le Cardinal Rouge_WC_Sold at Bazaart - the Creative Art Fair (142017)_Artist Isabela Abreu.webp";
import art57 from "./artworks/1. Agadez_Dry Pastel_Available.webp";
import art58 from "./artworks/2. Dākunaito_DP_Available ▪ Dākunaito The Dark Knight (Japanese).webp";
import art59 from "./artworks/3. Plavuša ▪ Plavuša Blonde Hair (Croatian).webp";
import art60 from "./artworks/1. Cute Yaro_DP_Available ▪ Cute Yaro Cute Boy (Hausa).webp";
import art61 from "./artworks/1. The Tree of Shadows_Pencil_Sold.webp";
import art62 from "./artworks/Beau Gosse.webp";
import art63 from "./artworks/1. Les Vases_OP_Offered to the Agalheirs_Niamey, Niger.webp";
import art64 from "./artworks/album photo.webp";
import art65 from "./artworks/Edinburgh (1).webp";
import art66 from "./artworks/1. Whimsy (my first paint work and oil-on-wood).webp";
import art67 from "./artworks/2. Nebula (my 2nd Oil-on-Canvas)_Full.webp";

/* ---------- Types ---------- */

export interface Exhibit {
    title: string
    details: string
}

export type OriginalStatus =
    | 'available'     // original can be enquired about
    | 'sold'
    | 'gifted'        // offered to / owned by someone else
    | 'not-for-sale'
    | 'make-offer'
    | 'unlisted'      // display only, nothing purchasable

export interface PrintVariant {
    price: number
    url?: string      // Stripe Payment Link, added when it exists
}

export interface Art {
    id: string                    // single source of truth: route is /shop/${id}
    img: string
    featuredImg?: string
    title: string
    yrCreated: number
    orientation: 'portrait' | 'landscape'
    medium?: string
    process?: string              // longer text for the Medium & Process section
    dedication?: string           // "Offered to my parents"
    edition?: string              // only set when an edition is real, e.g. "1 of 1"
    featured?: boolean
    artistStatement: string[]
    included?: string[]
    exhibitHx?: Exhibit[]
    original: {
        status: OriginalStatus
        price?: number
        enquiryUrl?: string       // enquiry form / mailto, added when it exists
    }
    print?: {
        physical?: PrintVariant
        digital?: PrintVariant
    }
}

/* ---------- Display helpers (one place for all display rules) ---------- */

export const formatPrice = (n?: number) =>
    n == null ? null : `$${n.toLocaleString('en-US')}`;

export const viewPath = (id: string) => `/shop/${encodeURIComponent(id)}`;

export const enquirePath = (id: string) => `/enquire/${encodeURIComponent(id)}`;

export const originalBadge = (a: Art) =>
    a.original.status === 'sold' ? 'SOLD'
    : a.original.status === 'gifted' ? 'PRIVATE COLLECTION'
    : null;

export const originalPriceLabel = (a: Art) => {
    switch (a.original.status) {
        case 'available': return formatPrice(a.original.price) ?? 'Price on request';
        case 'make-offer': return 'Price on request';
        case 'not-for-sale': return 'Not for sale';
        default: return null; // sold, gifted, unlisted: show no price
    }
};

export const artSubtitle = (a: Art) =>
    [a.medium, String(a.yrCreated)].filter(Boolean).join(', ');

/* ---------- Data ---------- */

const gifted = { status: 'gifted' } as const;
const sold = { status: 'sold' } as const;
const unlisted = { status: 'unlisted' } as const;
const avail = (price: number) => ({ status: 'available', price }) as const;

const baseList: Art[] = [
    {
        id: "ancestral-link",
        img: art1,
        featuredImg: featuredArt,
        featured: true,
        title: "Ancestral Link",
        yrCreated: 2025,
        orientation: "portrait",
        medium: "Oil on canvas",
        original: avail(1500),
        // included: [
        //     'Archival-quality print',
        //     'Numbered edition'
        // ],
        artistStatement: [
            `The work tackles another central argument of my doctoral thesis and challenges a persistent misconception: that Indigenous Peoples and Local Communities (IPLCs) are technologically illiterate. Limited connectivity, or unequal access to digital tools, often shaped by poverty and structural inequalities, should not be mistaken for a lack of ability. When given the opportunity, IPLCs can use digital platforms to challenge misrepresentations of their cultures, assert their rights, share their knowledge and lived realities, and organise powerful social movements. Cultural heritage and technological competence do not belong to separate worlds. By placing Indigenous and local actors at the centre of a digital landscape, my work illustrates their capacity to use technology to represent themselves, and have a voice in matters that concern them. By bringing wildlife, digital platforms, and human actors into a shared landscape, the artwork illustrates how online conversations can become real-world action.`,
            `The surrounding wildlife and landscape connect this digital agency to conservation. The work invites us to reconsider who participates in conservation debates, who gets to speak for nature, whose knowledge is recognised, whose voices are heard, whose agenda is served, how digital spaces can reshape power, representation, and environmental governance, and how access to technology can help communities transform online participation into real-world influence over conservation actions and policies. The message is simple: limited access is not limited ability.`,
        ],
    },
    {
        id: "digital-current",
        img: art2,
        title: "Digital Current",
        yrCreated: 2025,
        orientation: "portrait",
        medium: "Oil on canvas",
        original: avail(2000),
        // included: [
        //     'Original canvas',
        //     'Archival-quality print',
        //     'Certificate of authenticity',
        //     'Artist signature',
        //     'Numbered edition'
        // ],
        artistStatement: [
            `Digital Current is a visual rendition of my doctoral thesis, which examines how conservation actors interact on social media and how their discussions influence wildlife conservation actions and policies in the real world.`,
            `The artwork brings together wildlife, digital platforms, and human actors within a shared landscape, illustrating the connections between online discourse and offline conservation. Social-media symbols move through the scene alongside animals and people, reflecting the networks through which ideas, advocacy, and competing perspectives circulate.`,
            `At its heart, the work asks how digital conversations shape the way we understand, govern, and act upon the natural world. It invites viewers to consider social media not merely as a space where conservation is discussed, but as a space where conservation itself is increasingly shaped.`,
        ],
    },
    {
        id: "dahomey-twins",
        img: art3,
        title: "Dahomey Twins",
        yrCreated: 2021,
        orientation: "portrait",
        medium: "Oil on canvas",
        dedication: "Owned by the Adjaho sisters",
        original: gifted,
        artistStatement: [
            `I painted this as a gift for a Beninese friend and her twin, sisters who liked ducks and cats, and I wanted the painting itself to hold that idea of two very different creatures who still belong to the same sentence.`,
            `The little yellow duckling and the shaggy cat beside her couldn't look more unlike each other, and yet they're pressed right up against one another, sharing the same patch of green, the same breath of a phrase running over their heads.`,
            `I let the words scatter and break across the canvas on purpose: "home is where the... and ...are", because that's what it feels like to be a twin, I imagine: the sentence isn't complete without the other half standing right there to finish it. Different colours, different textures, different personalities, same womb, same home. I wanted them to have that whenever they look at it.`,
        ],
    },
    {
        id: "ascension-fragments",
        img: art4,
        title: "Ascension Fragments",
        yrCreated: 2019,
        orientation: "landscape",
        medium: "Mixed media: acrylic, wood, dowels on canvas",
        original: gifted,
        artistStatement: [
            `This piece broke out of the canvas because the idea couldn't stay flat. I was thinking about purgatory, that in-between state, neither condemned nor arrived, and the wooden steps climbing up through black and white are exactly that: uneven, real, physically built rather than painted, because the ascent itself felt like it needed weight and grain and imperfection.`,
            `The broken plastic straws scattered across the top corner are the door to paradise cracking open: snapped, ordinary, disposable things standing in for light because I wanted paradise to arrive through something as unremarkable as trash, not through anything precious or expected. I'd been reading around the Book of Enoch, that older, stranger vision of heaven with its gates and its fire and its levels you have to pass through.`,
            `The blues and magentas are the parts of the soul still unresolved, still churning, while the steps insist on going somewhere anyway. I don't know if I believe literally in any of it. But I believe in the shape of that longing, the climbing, the almost-there, the fragments of light you build a staircase toward even when you can't see the top, made from whatever happens to be at hand.`,
        ],
    },
    {
        id: "fiery-descent",
        img: art5,
        title: "Fiery Descent",
        yrCreated: 2019,
        orientation: "portrait",
        medium: "Mixed media: acrylic and oil on canvas",
        original: gifted,
        artistStatement: [
            `This piece is part of a collection I painted in honour of my aunt's life; a woman who survived abuse from within her own family as a child and came out the other side to build something entirely her own: independence, elegance, a life in les hautes sphères.`,
            `I didn't want to paint her portrait. I wanted to paint what surviving that kind of fire actually feels like from the inside. The reds and oranges are hell folded into the shape of an eye: the trauma she had to look at directly, the thing that could have consumed her whole. That black line cutting across the centre is the line she had to cross, the split between what happened to her and what she decided to become after. And the blue lightning tearing down through the middle of it all, refusing to be contained by either half: that's her. Thunder, not ash. The force that moves through catastrophe and comes out the other side still electric, still hers.`,
            `Scotland gave me the weather for it, that storm light that turns the sky the colour of something both ending and beginning. This isn't a painting about pain. It's a painting about what a person can do with it.`,
        ],
    },
    {
        id: "jesus",
        img: art6,
        title: "Jesus",
        yrCreated: 2019,
        orientation: "landscape",
        medium: "Oil on canvas",
        original: gifted,
        artistStatement: [
            `I believe in Jesus. Who knows how he would look with dreadlocks? I painted him from behind, arms spread wide over a field, because I didn't want a face people already have too many opinions about.`,
            `I wanted the gesture instead, that open-armed stance that means both surrender and blessing at the same time, depending on which way you're facing when you see it. The light rays behind his head, the dark line of hills, the flowers scattered through the grass like small witnesses; I wanted the whole landscape to feel like it was holding its breath around him.`,
            `This isn't really about religion for me. It's about what it feels like to stand in front of something vast with your arms open instead of your fists closed. I think everyone has had a moment like that, whether or not they'd call it faith.`,
        ],
    },
    {
        id: "spain",
        img: art7,
        title: "Spain of My Childhood",
        yrCreated: 2019,
        orientation: "landscape",
        medium: "Oil on canvas",
        original: gifted,
        artistStatement: [
            `This one came from somewhere much softer than anything I'd been painting before it: a memory of Spain from when I was small, though I couldn't tell you if it's one specific place or every coastal town folded into one: breaking my legs in Figueres, visiting Dali's home, dancing with my aunt in Barcelona, getting lost in Madrid, listening to her Mallorca stories, walking through Ferrol as a Compostella pilgrim, vivant ma lumiere...and the many other spanish cities I visited with her.`,
            `The ochre walls, the red roofs, the boats bobbing in that impossibly blue water between two buildings that lean toward each other like old friends. I let the flowers explode at the bottom in every colour I could remember — pink, red, yellow — because that's how childhood summers look in hindsight, oversaturated, almost too generous to be real. I painted the archways dark and a little mysterious on purpose.`,
            `As a child you never know what's through the tunnel, only that you want to run toward the water anyway. This is what home looks like when it's a feeling rather than a fixed address.`,
        ],
    },

    /* ----- 2018 series: display only ----- */
    {
        id: "hustln",
        img: art8,
        title: "Hustl'n",
        yrCreated: 2018,
        orientation: "portrait",
        original: unlisted,
        artistStatement: [
            `A black silhouette bent over, heels dug into a yellow road that reads like warning tape; and behind her, those pale hands pressed flat against the wall. The hands could be hers. They could belong to someone watching. I left that unresolved on purpose, because that's the whole hypocrisy I'm pointing at: the watching, the wanting, and the public denial that any of it is happening.`,
            `I painted her without a face because this isn't about who she is. It's about what hustling actually looks like from the outside: the bent spine, the forward lean that never quite straightens, the body permanently mid-motion because stopping isn't an option. The yellow stripe cuts through like a warning sign nobody heeds.`,
            `People say they're disgusted by what this image shows, and then they go home and do exactly this with the lights off and the door locked. This piece doesn't ask permission to make you uncomfortable. That discomfort is the point; it's the door into a conversation almost nobody wants to start out loud.`,
        ],
    },
    {
        id: "talkn",
        img: art9,
        title: "Talk'n 'Bout It",
        yrCreated: 2018,
        orientation: "portrait",
        original: unlisted,
        artistStatement: [
            `He's testing the ground, his hand reaching toward her, her body angled close but not yet answering. It depicts the moment before the act, the question before it, the silent negotiation that happens between two adults before anything is said out loud.`,
            `The black isn't emptiness but privacy, the dark room where this kind of asking actually happens, away from all the performed disapproval people show in daylight. The title is the whole argument: this is the conversation everyone claims they don't have and everyone has anyway. Whether unconsciously or not.`,
        ],
    },
    {
        id: "sniffn",
        img: art10,
        title: "Sniff'n",
        yrCreated: 2018,
        orientation: "portrait",
        original: unlisted,
        artistStatement: [
            `A figure kneels, head tilted back, the whole body curved into something between surrender and anticipation. I worked again in just white line on black, because by this point in the collection that's become the language of the whole conversation: minimal, exposed, nothing to hide behind.`,
            `The title names an instinct most people would never admit to out loud, the kind of impulse that gets buried under everything we're taught to say instead. I'm not interested in softening it. The discomfort you feel looking at this is the same discomfort people swallow every day pretending they don't recognize it: sniffing, exactly like the dog you think you aren't!`,
        ],
    },
    {
        id: "kissn",
        img: art11,
        title: "Kiss'n",
        yrCreated: 2018,
        orientation: "landscape",
        original: unlisted,
        artistStatement: [
            `Two figures dissolve into each other against total black, limbs tangled, no clear beginning or end to either body. I let the forms blur on purpose because this isn't about identifying who's who, it's about that point in intimacy where the lines actually do disappear, where two people stop being two separate shapes.`,
            `Having hustled, negotiated, sniffed, reaching this phase is no more awkward, not shameful, just two people fully given over to each other, weightless, all edges softened by pleasure. The black around them isn't hiding anything. It's just the dark that lets everything else glow.`,
            `This is the piece in the collection where the provocation drops away and what's left is simply tenderness, heat, two bodies who have stopped asking permission and started just being together.`,
            `The chaos of the composition is intentional. Real desire isn't tidy or composed the way people pretend it is when they talk about it in daylight. This is what it actually looks like from the inside, and that's exactly why it makes people uncomfortable to see it named.`,
        ],
    },
    {
        id: "blown",
        img: art12,
        title: "Blow'n",
        yrCreated: 2018,
        orientation: "portrait",
        original: unlisted,
        artistStatement: [
            `Just white light against black, close enough that the body stops being a body and becomes pure form. Curves, pressure points, the geometry of two people (one with amputated hands, the other wearing a niqab) in a moment most paintings refuse to go near. I worked tight on purpose, no wide shot, no context to soften it into something easier to look at.`,
            `The drips at the bottom aren't an accident I left in; they're the only part of this piece that admits to being paint at all. Everything else is trying to convince you it's real. This is the most stripped-down piece in the collection, no faces, no story, just the act itself, lit up and undeniable. What? The disabled and the religious also have a life...duh!`,
        ],
    },
    {
        id: "touchn",
        img: art13,
        title: "Touch'n",
        yrCreated: 2018,
        orientation: "portrait",
        original: unlisted,
        artistStatement: [
            `Her body folded back against him while his hand does the work, procuring her pleasure rather than asking for his own first. I wanted that asymmetry to be visible, a moment built entirely around her response, his presence almost absorbed into the dark behind her so that what reads first is her face, her tilted head, the unmistakable arc of someone receiving. At the edges, heat breaking through.`,
            `This piece sits in the collection as a quieter kind of provocation: not the act everyone's comfortable naming, but the harder admission that pleasure can be given without expectation of immediate return, and that this, too, is something people pretend doesn't happen in their own bedrooms. Yet, that what making love is all about: not one person receiv'n; but two people giv'n! while not giv'n a f*ck!`,
        ],
    },
    {
        id: "hangn",
        img: art14,
        title: "Hang'n There",
        yrCreated: 2018,
        orientation: "landscape",
        original: unlisted,
        artistStatement: [
            `Two bodies tangled together, him positioning, her waiting to receive, that exact charged second right before everything changes. But it's the object hanging beside it that makes this piece different from anything else in the series: real fabric, real underwear, suspended like evidence, like something left behind in a hurry. I wanted the painting and the physical object to argue with each other; the drawn scene staying abstract and undeniable, the actual garment thrown away in a moment of hurry and already forgotten. Come on, you know what I am talk'n 'bout! You can read a painting as metaphor. You can't read a pair of underwear hanging on a wall as anything but exactly what it is.`,
            `There's a harder question sitting underneath this piece too: how often intimacy gets quietly traded for security. People like to believe desire and survival are separate categories; that what happens in a bed has nothing to do with what happens at a border, a bank, a boardroom. But access has always had a body attached to it, whether anyone admits it or not. That's the harder truth nobody puts on a wall: intimacy has always been currency. Bodies bought access long before anyone admitted it out loud: security, status, a 'door held open' that wouldn't open otherwise). People want desire and leverage to be separate stories. But have they ever been separate? How often do people get to the top not by merit, or alliance, but by [transactional] penetration?`,
            `The underwear hangs there like an unsigned contract everyone keeps anyway. That collision — between what's drawn and what's real, between desire and leverage — might be the whole point of this piece, and maybe the whole point of the collection: at some point, the abstraction runs out, and you're just looking at the transaction itself, stripped bare, hanging on the wall where you can't pretend not to see it.`,
        ],
    },
    {
        id: "topn",
        img: art15,
        title: "Top'n",
        yrCreated: 2018,
        orientation: "portrait",
        original: unlisted,
        artistStatement: [
            `She's upright, in control, him lying back beneath her, and that's the whole reversal this piece is built on. Most of the collection so far has him initiating, positioning, doing. Here she's the one setting the pace, his body simply receiving what she decides to give. I kept the palette dark, almost monochrome, because I wanted the focus entirely on that power shift rather than on detail or spectacle.`,
            `This piece exists in the series specifically to puncture the assumption that desire only flows one direction; that a man leads and a woman follows. Sometimes she just climbs on top and decides for both of them.`,
        ],
    },
    {
        id: "plown",
        img: art16,
        title: "Plow'n",
        yrCreated: 2018,
        orientation: "portrait",
        original: unlisted,
        artistStatement: [`See it for what it is!`],
    },
    {
        id: "poundn",
        img: art17,
        title: "Pound'n",
        yrCreated: 2018,
        orientation: "portrait",
        original: unlisted,
        artistStatement: [
            `By this point in the collection the provocation has stopped being subtle. This is the piece where restraint disappears entirely. Full force, full commitment, nothing held back. It could be the loudest painting in the series.`,
        ],
    },
    {
        id: "flowerin",
        img: art18,
        title: "Flow'er'in",
        yrCreated: 2018,
        orientation: "landscape",
        original: unlisted,
        artistStatement: [
            `The most abstracted piece in the whole collection, and maybe the one I'm proudest of for that reason.`,
            `She's reclining, barely a shape at all, just some curve against black, those small raised dots the only thing that gives her away as a body and not a landscape (bridge) above a river. It is simply the shape of pleasure moving through her as she opens.`,
            `I wanted to paint the moment she stops holding herself closed; the way a body answers a tongue before the mind has decided anything, stretching open almost on instinct.`,
            `By the end of this series I wasn't trying to shock anymore. I was trying to show what receiving pleasure actually looks like when no one is performing it for an audience: quiet, reflexive, almost landscape-like in how natural it is. That's the real hypocrisy this piece points at: not that people do this, but that something this simple, this bodily, gets treated like it needs to be hidden at all.`,
        ],
    },

    /* ----- 2017 ----- */
    {
        id: "warning",
        img: art19,
        title: "Warning: The Prelude",
        yrCreated: 2017,
        orientation: "portrait",
        original: avail(1000),
        artistStatement: [
            `Before anyone steps into frame, there is already a STOP sign. I wanted to begin there, with the instruction the world gives women before they've even moved. The yellow railing, the blue air, the absence of a body. The story hasn't started yet and already something is telling it where not to go.`,
        ],
    },
    {
        id: "suspense",
        img: art20,
        title: "Suspense: The Ascent",
        yrCreated: 2017,
        orientation: "portrait",
        original: avail(1000), // CONFIRM medium
        artistStatement: [
            `Green heels on a yellow iron bar, climbing. Green heels on the railing that separates the road from the sea. She hasn't looked back. I painted her climbing it and deliberately left the reason open, because I didn't know, and I didn't want to decide for her. The blue behind her is wide open and the step beneath her foot is solid. Is she pulling herself up to see further, to feel the wind differently, to get above something? Or is she at an edge in a more final sense? This is the painting to keep coming back to as the emotional centre of the series, the moment before everything gets complicated. The painting holds all of it at once, and that ambiguity is the whole truth of it. We see women at railings all the time and we never really know what brought them there. I wanted to sit with that not-knowing instead of resolving it.`,
        ],
    },
    {
        id: "heel-weight",
        img: art21,
        title: "Heel: The Weight",
        yrCreated: 2017,
        orientation: "portrait",
        original: avail(1000), // CONFIRM medium
        artistStatement: [
            `A blue heel balanced by lips. I was thinking about the invisible loads women carry: ambition placed directly on top of them, beauty standards sitting on their skulls, expectations pressing down. The red sole is a flash of something expensive, something coveted. The weight is real and it is also somehow glamorous. That contradiction is the whole point.`,
        ],
    },
    {
        id: "trigger",
        img: art22,
        title: "Trigger: The Pedestal",
        yrCreated: 2017,
        orientation: "portrait",
        original: avail(1000), // CONFIRM medium
        artistStatement: [
            `The same blue heel now balanced on a perfect red sphere, or rather, a grenade. Elevated, precarious, admired. A woman put on a pedestal is still a woman who cannot move freely. The teal background makes it look almost elegant. That's the most scandalous thing about pedestals, how beautiful they make imprisonment look.`,
        ],
    },
    {
        id: "she-bold",
        img: art23,
        title: "She Bold: The Choice",
        yrCreated: 2017,
        orientation: "portrait",
        original: avail(1000), // CONFIRM medium
        artistStatement: [
            `A black stiletto and an Adidas sneaker. Both worn simultaneously, both real options, both belonging to the same woman. This is the painting where the series stopped being about shoes entirely and became about identity. Do you perform? Do you resist? Do you do both at once? The shadow beneath them doesn't choose. It holds them both. Just be!`,
        ],
    },
    {
        id: "she-really-bold",
        img: art24,
        title: "She Really Bold: The Crossing",
        yrCreated: 2017,
        orientation: "portrait",
        medium: "Oil on canvas",
        original: avail(1000),
        artistStatement: [
            `Ice-cold blue jeans, red ankle-strap heels, one blue shoe. Legs mid-stride, not quite balanced, the blue background wide and open. She is between things, between who she was and who she's becoming, between the ground and the air. The mismatched energy of the shoes feels right for that in-between place.`,
        ],
    },
    {
        id: "controversy",
        img: art25,
        title: "Controversy: The Negotiation",
        yrCreated: 2017,
        orientation: "landscape",
        medium: "Oil on canvas",
        original: avail(1000),
        artistStatement: [
            `Red strappy heels, legs crossed, orange ground beneath her. She is seated but not passive, the skirt is no more, the crossed legs are a boundary, a pause, a decision being made. The blue wall behind her is solid. She is thinking and she is taking her time.`,
        ],
    },
    {
        id: "shocker",
        img: art26,
        title: "Shocker",
        yrCreated: 2017,
        orientation: "landscape",
        medium: "Oil on canvas",
        original: avail(1000),
        artistStatement: [
            `Nearly identical to the previous painting, and deliberately so. I wanted to sit inside the same moment twice and feel how much shifts with the smallest change in angle. The negotiation continues. She is still deciding, despite the red pant being no more. This is what it actually looks like from the inside, not a single decisive moment, but the same moment, again and again, until something becomes clear.`,
        ],
    },
    {
        id: "8-and-9",
        img: art27,
        title: "8 & 9",
        yrCreated: 2017,
        orientation: "portrait",
        medium: "Oil on canvas",
        original: avail(2000),
        artistStatement: [
            `Two panels, presented together. A red and black heel above a barbed wire line, its reflection below: a shoe that draws blood, a shoe that costs more than dignity, a shoe balanced on the boundary between desire and harm. I painted this twice because one painting wasn't enough to hold what I was feeling. The reflection doesn't lie. It shows you exactly what you're standing on, watching over you: fire, scandal!`,
        ],
    },
    {
        id: "scandal",
        img: art28,
        title: "Scandal",
        yrCreated: 2017,
        orientation: "landscape",
        medium: "Oil on canvas",
        original: avail(2000),
        artistStatement: [
            `We end where we began, the STOP sign, the yellow railing, the green heel. But now we have walked through everything that happened in between. The body is back in frame. She is still climbing. The sign is still there. She is choosing not to stop.`,
        ],
    },
    {
        id: "lecoq",
        img: art30,
        title: "Le Coq",
        yrCreated: 2017,
        orientation: "landscape",
        medium: "Scraperboard", // CONFIRM: old data said "knife art, linocut or scraperboard"
        original: avail(100),
        artistStatement: [
            `Nelly carved this one rather than drew it, and that changes everything about the energy. With scraperboard you're not adding, you're removing, revealing the white from underneath the red, and there's something violent and precise about that process that suited a rooster perfectly. Every stroke is a decision you can't take back. The feathers explode outward because she let the knife move fast, following the animal's own restless energy. Red was already there, waiting. She just uncovered what was living inside it.`,
        ],
    },
    {
        id: "leberger",
        img: art31,
        title: "Le Berger",
        yrCreated: 2017,
        orientation: "landscape",
        medium: "Scraperboard", // CONFIRM
        original: avail(100),
        artistStatement: [
            `Same technique, completely different feeling. Where the rooster demanded speed and force, this one asked Nelly to slow down. She carved the donkey's body with long, patient strokes: you can see the rhythm of them across his flank, almost like breathing. The deep blue underneath isn't ink so much as night, and these two figures moving through it feel ancient, like a scene that has been repeating itself across centuries without anyone needing to document it. The circle of the moon above them is barely there. The palm fronds at the edge are barely there. Everything that matters is in that quiet line between a man's hand and a donkey's head. That was daily scenery, at the time, in Niamey.`,
        ],
    },
    {
        id: "bintou",
        img: art32,
        title: "Bintou et Son Chien",
        yrCreated: 2017,
        orientation: "landscape",
        medium: "Watercolor",
        original: avail(1000), // CONFIRM price: high next to other watercolors
        artistStatement: [
            `Little Bintou is leaning forward, holding something out, and the dog is deciding whether to trust her; that's the whole story and it's enough. I was thinking about childhood and that particular kind of love that doesn't need language, the relationship between a child and an animal that operates entirely on presence and patience and small offerings. Did Nelly leave Bintou's face unfinished deliberately? Bintou doesn't need features to be known. You recognise her by how she holds herself, by the blue dress, by the way her whole body is saying come closer. The climbing vine behind her, the little pink flowers at her feet. Everything in this scene is reaching toward something. So is she.`,
        ],
    },
    {
        id: "pecheurs",
        img: art33,
        title: "Les Pêcheurs",
        yrCreated: 2017,
        orientation: "landscape",
        medium: "Watercolor",
        original: avail(100),
        artistStatement: [
            `There's a choreography to fishing from a pirogue that I find endlessly beautiful; one man rowing, one man casting, both in perfect wordless coordination. Neither is watching the other because they don't need to. They have done this together enough times that the boat already knows what to do. Nelly painted the water with broad, confident strokes because that's how the river feels from inside the pirogues she has taken countless times on the Niger river in Niamey: bigger than you, alive under you, carrying you even as you work against it. The warm ochre of the shore and the pink sky behind the palms tell you what hour this is without her having to say it. This is a scene that has been happening on African rivers for centuries, and she painted it through the eyes of the third culture kid she is.`,
        ],
    },

    /* ----- 2016 ----- */
    {
        id: "quick",
        img: art42,
        title: "Mr. s'Quick",
        yrCreated: 2016,
        orientation: "portrait",
        medium: "Watercolor",
        original: sold, // CONFIRM: filename says Sold
        artistStatement: [
            `He didn't stay long. That's always the problem with squirrels;  by the time you've really seen them, they're gone. They move before you can name them.`,
            `Caught mid-moment in a tangle of tropical foliage, I painted this one from memory and feeling more than reference, trying to hold onto that flash of gold and rust in the green. Painted with urgent strokes, it radiates the joyful restlessness of wild things. The brushwork is loose on purpose because I wanted the painting to have the same energy as the chase of the sighting: breathless, a little uncertain, grateful.`,
            `I think the best nature paintings smell a little like the place they came from, the feeling of a sighting in the bush: brief, vivid, gone.`,
        ],
    },
    {
        id: "rouge",
        img: art43,
        title: "Rouge",
        yrCreated: 2016,
        orientation: "landscape",
        medium: "Watercolor",
        original: avail(100),
        artistStatement: [
            `The crowned crane is one of those creatures that makes you feel like nature was showing off. I'd been looking at East Asian ink painting, that tradition of capturing an animal in a few deliberate strokes, and I wanted to bring that conversation into my own African context. The name came from that encounter between traditions. What I loved most about painting this bird is how it made me slow down, really look at where the black ends and the amber begins, how intention and accident share the same wing.`,
        ],
    },
    {
        id: "she",
        img: art44,
        title: "She (in Watercolor style)",
        yrCreated: 2016,
        orientation: "portrait",
        medium: "Watercolor",
        dedication: "Offered to my parents",
        original: gifted, // CONFIRM: old data had $150 and "available"
        artistStatement: [
            `She stands in the centre of her own spectrum. A silhouette against a burst of every colour she contains, surrounded by falling leaves that do not diminish her, but only witness her. This piece is about the woman who has learned to take up space, arms wide open to the world she inhabits.`,
            `I painted this when I was thinking about freedom, what it actually looks like in a body, in a woman's body.  The silhouette came first, arms open, and then I flooded the space behind her with colour because I wanted her to be surrounded by everything she contains, not everything the world projects onto her. The leaves falling around her aren't about loss. They're about movement, about a woman who has decided to take her place in the centre of her own life.`,
        ],
    },
    {
        id: "miao",
        img: art45,
        title: "Miao Zhe Cha",
        yrCreated: 2016,
        orientation: "portrait",
        medium: "Watercolor",
        original: avail(150),
        artistStatement: [
            `I've always been fascinated by cats; the way they look at you like they already know something you'll only figure out later. A cat's gaze holds ancient things. This one in particular, Miao the Chat, had these eyes that stopped me. I wanted to paint not what a cat looks like, but what it feels like to be seen by one. I wanted to paint the sensation of that gaze, so I gave it every colour I could feel in that moment: cobalt, vermillion, citrus, violet, red, blue, green, and whatever. The explosion of colours are its personality made visible: Sovereign. Unreadable. Radiant.`,
            `The chaos around it is intentional. That's what it's like when something truly looks at you.`,
        ],
    },
    {
        id: "emotions",
        img: art51,
        title: "Emotions",
        yrCreated: 2016,
        orientation: "portrait",
        medium: "Pastel, colour pencil", // CONFIRM: filename also lists pencil, watercolor, dry pastel
        original: avail(300),
        artistStatement: [
            `This came out of a moment where I had too much inside me to say it any other way. There's a girl at the centre, marked with red, carrying something heavy that has settled into her chest and cracked it open. Around her, faces float (some menacing, some hollow, some barely there) because that's how it feels when emotions overwhelm you, like you're surrounded by presences you can't fully name. The broken heart isn't a symbol I chose consciously; it just appeared, because sometimes the most honest thing you can put on paper is also the most obvious. I used every medium I had at my reach, pencil, watercolour, pastel, coloured pencil, because no single one could hold all of it. That layering is the feeling.`,
        ],
    },
    {
        id: "vstrecha",
        img: art52,
        title: "Vstrecha",
        yrCreated: 2016,
        orientation: "landscape",
        medium: "Dry pastel",
        original: avail(1000),
        artistStatement: [
            `I called it Vstrecha because Russian captures something about encounters that other languages don't quite reach: the weight of two lives briefly occupying the same space. She's sitting, watching. He's standing, about to move. Behind them, children play, people gather, the park goes on being golden and alive. But in that foreground, something is happening between stillness and motion, between the person who waits and the person who walks away. I wasn't sure when I painted it whether this was a beginning or an ending. I'm still not sure. Vstrecha, "The Meeting" in Russian.`,
        ],
    },
    {
        id: "smiling-curtain",
        img: art53,
        title: "The Smiling Curtain",
        yrCreated: 2016,
        orientation: "landscape",
        medium: "Watercolor",
        original: avail(300),
        artistStatement: [
            `I painted a world inside a circle, and gave it a smile. There's something about the simplicity of a sailboat on water, sky above, earth below, that takes me back to something essential: the feeling that life, at its core, is not complicated. The red corners anchor it, the yellow warmth surrounds it, and the little orange smile in the middle is the thing I was really after. Joy doesn't have to be loud. Sometimes it just sits there, quietly smiling back at you.`,
        ],
    },
    {
        id: "american-house",
        img: art54,
        title: "American House",
        yrCreated: 2016,
        orientation: "landscape",
        medium: "Watercolor",
        original: avail(300),
        artistStatement: [
            `This wasn't about America really. It was about the experience of being a foreigner somewhere in East Legon (Accra) and trying to read a place that wasn't written for you. Streets crossing at strange angles, signs in languages that feel both familiar and foreign, a house that announces itself loudly. I wrote on it because that's what it felt like: everything labelled, everything asking to be understood. Travel, sea, twi, shito, hunger, hustling, real world. I was processing what it means to move through spaces that weren't made with you in mind, and still find your footing.`,
        ],
    },
    {
        id: "ramo-ambita",
        img: art55,
        title: "Ramo Ambita",
        yrCreated: 2016,
        orientation: "landscape",
        medium: "Watercolor",
        original: avail(300),
        artistStatement: [
            `There is a branch I have seen many times in different places: the one that bends just right, heavy with flowers, slightly out of reach. This is that branch. The flowers are generous and almost aggressive in their colour, and the butterfly in the corner is the part of me that wants to get closer but keeps circling. I named it in Italian because Italian has a way of making longing sound beautiful. Ramo ambita, the branch you want so much you paint it just to hold it still for a moment. Ramo Ambita, "The Coveted Branch" in Italian.`,
        ],
    },
    {
        id: "le-cardinal-rouge",
        img: art56,
        title: "Le Cardinal Rouge",
        yrCreated: 2016,
        orientation: "portrait",
        medium: "Watercolor",
        original: sold, // CONFIRM: filename says sold at Bazaart; old data had $500 available
        artistStatement: [
            `I saw this bird once and couldn't stop thinking about the way it held itself, completely at home inside its own colour, surrounded by chaos, unbothered. The lines radiating out from it are the energy it gives off, that red-dot busyness of berries and light that makes a cardinal impossible to ignore even when it's perfectly still. I painted it in a kind of frenzy, matching its energy. Some birds don't need a landscape. They are the landscape.`,
        ],
    },
    {
        id: "agadez",
        img: art57,
        title: "Agadez",
        yrCreated: 2016,
        orientation: "landscape",
        medium: "Dry pastel",
        original: avail(500),
        artistStatement: [
            `There's a tradition of veiled faces across the Sahel (the Tuareg men of Agadez who cover everything except their gaze) and I've always been struck by how much more powerful a face becomes when it's reduced to just the eyes. The orange and gold of the skin against the deep blue and violet felt right for that landscape, that light, that particular quality of desert heat meeting indigo sky. I didn't need to paint a whole person. The eyes said everything that needed to be said.`,
        ],
    },
    {
        id: "dakunaito",
        img: art58,
        title: "Dākunaito",
        yrCreated: 2016,
        orientation: "landscape",
        medium: "Dry pastel",
        original: avail(300),
        artistStatement: [
            `In the collective imaginary framed by western cartoons, the dark knight is supposed to be Batman. Yet, he is certainly not who I had in mind when drawing this. For me, the dark knight is less of a superhero than it is a mood; that particular darkness that comes with choosing to fight for something at great personal cost. The Japanese title felt more fitting than the English because Japanese manga and anime gave this character a different kind of weight, more psychological, more tortured. I worked almost entirely in blacks and greys here, letting the amber glow behind him do the emotional work. The eyes are the only thing that truly live in this piece. That was intentional. - Dākunaito, "The Dark Knight" in Japanese`,
        ],
    },
    {
        id: "plavusa",
        img: art59,
        title: "Plavuša",
        yrCreated: 2016,
        orientation: "landscape",
        medium: "Dry pastel",
        original: avail(500),
        artistStatement: [
            `This face unsettles a little. She's not quite resolved; features that float, a gaze that shifts depending on how long you look. I was thinking about how we construct femininity from fragments: hair, lips, eyes, complexion. The looseness of the pastel let me keep her half-formed, somewhere between portrait and memory. I titled her in Croatian because I encountered that word at a moment when I was thinking about how different languages hold different ideas of beauty. Plavuša, blonde, but also somehow otherworldly in the way it sounds.  - Plavuša, "Blonde Hair" in Croatian`,
        ],
    },
    {
        id: "cute-yaro",
        img: art60,
        title: "Cute Yaro",
        yrCreated: 2016,
        orientation: "landscape",
        medium: "Dry pastel",
        original: avail(500),
        artistStatement: [
            `There's a particular kind of child's face that just stays with you, round and open, not yet guarded, looking at the world with this mixture of curiosity and complete trust. Yaro in Hausa is simply "boy," but the way people say it carries so much tenderness. I wanted to capture that tenderness, the softness of a young face still becoming itself, framed in shadow and warmth. The loose marks around him aren't unfinished; they're the world still forming around him too. He's in the middle of arriving.  - Yaro, "boy" in Hausa`,
        ],
    },
    {
        id: "tree-of-shadows",
        img: art61,
        title: "The Tree of Shadows",
        yrCreated: 2016,
        orientation: "landscape",
        medium: "Pencil",
        original: sold,
        artistStatement: [
            `I drew this tree to make it do something trees don't always do in paintings: performing. The canopy breaks into sections, almost like stained glass, and the branches cut through everything with that particular black authority. I kept thinking about African savanna trees that stand alone in the landscape and become landmarks, reference points, the place people meet and shelter and bury things. The smaller tree to the right is its witness. The shadows below are not threatening. They are simply proof that something significant is standing here. Can you see it? The haired moon, non-spotted leopard, and even the fish scales, and the other weird things I do not even know I have drawn, or that only you can see?`,
        ],
    },
    {
        id: "beau-gosse",
        img: art62,
        title: "Beau Gosse",
        yrCreated: 2016,
        orientation: "landscape",
        medium: "Dry pastel and pencil",
        original: avail(300),
        artistStatement: [
            `The name just came to me when I was looking at it, beau gosse, because there's no other way to describe a horse that carries himself like that. I was drawn to the moment where his head tilts back and the mane lifts, that split second of pure animal confidence that you can't ask for and can't stage. I worked in almost no colour deliberately; just the black of the mane against the white of the paper, with the pencil holding the structure underneath. Some subjects don't need colour. They have enough presence on their own.`,
        ],
    },
    {
        id: "les-vases",
        img: art63,
        title: "Les Vases",
        yrCreated: 2016,
        orientation: "portrait",
        medium: "Oil pastel",
        dedication: "Offered to the Agalheir family in Niamey, Niger",
        original: gifted,
        artistStatement: [
            `I offered this piece to the Agalheirs, an inter-racial couple I met in Niamey, and the husband was my mentor, so this painting carried gratitude as much as affection. I chose vases deliberately. Ceramic vessels carry everything: water, grain, memory, ceremony. But these two in particular are a portrait without being a portrait (different in shape, different in origin, made from the same earth, leaning toward each other the way people do when they've chosen each other completely). I wanted the warmth of the terracotta to come through, that fired-clay colour that smells like rain on dry ground if you let yourself imagine it. Some gifts you give because you want the person to know that what they gave you first was more than they realised.`,
        ],
    },
    {
        id: "album-photo",
        img: art64,
        title: "Album Photo",
        yrCreated: 2016,
        orientation: "landscape",
        medium: "Dry pastel",
        original: avail(85),
        artistStatement: [
            `Every rectangle in this piece is a memory, that's how I think about it. The blank squares or white that cuts through isn't emptiness, or space between photographs: they are meant to hold a photo, the silence between one chapter and the next. The grid isn't rigid like Mondrian's; it breathes, the edges soft, the colours bleeding slightly into each other the way time softens the edges of things you remember. I was thinking about the physical act of opening a photo album, the way each image sits in its own space but together they make something larger than any single moment. All these colours coexisting on the same page, that's a life.`,
        ],
    },

    /* ----- 2015 ----- */
    {
        id: "blanc",
        img: art36,
        title: "Blanc",
        yrCreated: 2015,
        orientation: "landscape",
        medium: "Colour pencil",
        original: avail(150),
        artistStatement: [
            `Penguins carry this quiet dignity, like they've decided the world's opinion of them is simply not their concern. This one turned to look at something just out of frame, and that red eye caught me completely off guard. I spent a long time on the feathers, the way black and white can create such depth when you let them talk to each other slowly.`,
            `The green behind him is almost too alive, too warm for a creature we associate with ice, and that contrast was exactly what I wanted. He doesn't belong here, and he doesn't care.`,
        ],
    },
    {
        id: "the-thinker",
        img: art37,
        title: "The Thinker",
        yrCreated: 2015,
        orientation: "portrait",
        medium: "Dry pastel",
        original: sold,
        artistStatement: [
            `Rodin gave us stone. I gave him warmth. I grew up knowing Rodin's Thinker as the image of thought: cold, remote. I saw the body as architecture, and I wanted to ask: what does thinking look like when it lives in a warm body, a tropical body, a body that carries history?`,
            `Inspired by the strength and vulnerability of the African form, this piece strips away identity to reveal pure structure: the curve of a neck, the weight of thought, hands that hold the world inward.`,
            `A meditation on introspection and the beauty of the turned-away face, this reimagining of the iconic thinker places contemplation within a living body: ochre, flame, and shadow, asking whether thought is burden or gift. The bent figure holds both possibilities at once.`,
        ],
    },
    {
        id: "el-negro",
        img: art38,
        title: "El Negro",
        yrCreated: 2015,
        orientation: "portrait",
        medium: "Dry pastel",
        original: sold,
        artistStatement: [
            `I saw a black man. There was something about the way he held himself, head straight, folded inward, but not broken. Not even close to broken. It made me think about the weight of being seen and unseen at the same time, how strength and tenderness can live in the same body.`,
            `A profile emerging from darkness, this portrait explores the quiet power of the unseen gaze. Drawn in whites and deep shadows, it asks what we carry in our features when we think no one is watching: dignity, longing, resolve. Light becomes the only language that matters.`,
            `The pastel let me work in layers, building that warm darkness the way feeling builds, slowly, then all at once. I wasn't drawing a man. I was drawing what it feels like to be inside your own skin when the world is loud. Some of the most powerful things people carry, they carry quietly, and I wanted that silence to be visible.`,
        ],
    },
    {
        id: "spring-river",
        img: art39,
        title: "Spring River",
        yrCreated: 2015,
        orientation: "landscape",
        medium: "Dry pastel",
        original: sold,
        artistStatement: [
            `A landscape in the act of breathing. I remember standing somewhere near water, not moving, just watching the trees do what trees do when the season is turning. There was this moment where the reflection on the river was almost more vivid than the trees themselves, and I thought: "That's what I want to paint. Not the landscape, but the feeling of being so still that the world becomes more real." The river doesn't dominate, it listens, reflecting the trees' seasonal dialogue of amber and green. This piece grew from the desire to capture not a place, but a moment of transition: the stillness just before leaves let go. The blue felt endless when I was working on it. I let it take over.`,
        ],
    },
    {
        id: "la-basse-cour",
        img: art40,
        title: "La Basse Cour",
        yrCreated: 2015,
        orientation: "landscape",
        medium: "Watercolor",
        original: sold,
        artistStatement: [
            `The farmyard at its most theatrical. A black cockerel holds court amid white hens and scattered grain, feathers like ink splashes, comb burning red. There is nothing small about this scene, the basse-cour is its own society, its own drama, its own republic.`,
            `I grew up knowing the sounds of a farmyard before I knew how to name them. There's a whole social world happening in a basse-cour: hierarchies, negotiations, small dramas nobody writes about. This rooster is not background. He knows exactly where he stands. I painted him bold and black because that's how he presented himself to me, like he had something to say and had already decided I was going to listen. I find so much joy in these ordinary scenes. They're never actually ordinary.`,
        ],
    },
    {
        id: "campagne",
        img: art41,
        title: "A La Campagne",
        yrCreated: 2015,
        orientation: "landscape",
        medium: "Watercolor",
        original: avail(150),
        artistStatement: [
            `I have a deep love for the unhurried countryside, especially for the old buildings that look like they've made peace with time, settling into their landscapes as if they grew there. This farmhouse was half-swallowed by its trees and I found that beautiful, the way nature just gets on with it, regardless.`,
            `I worked with ink outlines first, then let the watercolour bleed where it wanted to. Architecture and nature in quiet, unspoken conversation. The red roof blazing through the canopy was the anchor. Everything else could be loose, impressionistic, almost unfinished. Sometimes that's exactly right.`,
        ],
    },

    /* ----- 2014 ----- */
    {
        id: "edinburgh",
        img: art65,
        title: "Edinburgh 2014",
        yrCreated: 2014,
        orientation: "portrait",
        medium: "Marker",
        original: { status: 'not-for-sale' },
        artistStatement: [`Portrait of myself by a street painter in Edinburgh`],
    },

    /* ----- 2013 ----- */
    {
        id: "home",
        img: art35,
        title: "Home",
        yrCreated: 2013,
        orientation: "landscape",
        medium: "Oil on canvas",
        dedication: "Offered to my parents",
        original: gifted, // CONFIRM: old data flagged this available
        artistStatement: [
            `I painted this from memory and longing, during one of those nostalgic moments when you miss people dear to you. This is my maternal grandparents' home, or rather, it's what that place feels like inside me: the colours too vivid to be quite real, the way memory always saturates what it loves. The small house sitting quietly among the autumn trees, the water holding everything in its reflection. I spent a long time on that reflection because I think that's what nostalgia is, the world as it was, mirrored back to you, trembling slightly at the edges. I wasn't trying to paint a landscape. I was trying to paint the feeling of belonging somewhere that exists now mostly in you.`,
        ],
    },
    {
        id: "marketday",
        img: art46,
        title: "Market Day",
        yrCreated: 2013,
        orientation: "landscape",
        medium: "Oil paint",
        original: avail(150),
        artistStatement: [
            `There's a specific kind of energy at an African market that I've never been able to fully describe in words; the noise, the colour, the bodies moving in every direction at once; the feeling that everything is alive and nothing is still. I wasn't trying to paint a market. I was trying to paint that feeling. The black underneath everything isn't darkness. It's the ground, the earth, the foundation that holds all that colour up. Life is loud here, and I wanted the canvas to be loud too.`,
        ],
    },
    {
        id: "brr",
        img: art47,
        title: "Brr",
        yrCreated: 2013,
        orientation: "landscape",
        medium: "Watercolor",
        original: avail(100), // CONFIRM: filename has no status
        artistStatement: [
            `Cold. That's all it was. I was cold, genuinely cold, and I painted it. The drops scatter across the white the way you feel scattered when the temperature drops suddenly and your body hasn't caught up yet. There's something almost biological about these marks, like cells under a microscope, or rain on glass, or the way the skin contracts. I didn't plan the composition. I just let my body remember what cold feels like and let my hand follow.`,
        ],
    },
    {
        id: "ichi",
        img: art48,
        title: "Ichi",
        yrCreated: 2013,
        orientation: "portrait",
        medium: "Watercolor",
        original: avail(150),
        artistStatement: [
            `This one started as an experiment. I wanted to see what would happen if I just let the water and colour move freely, without controlling them. And then I started writing on it. Words that were floating around in my head, places I'd been, feelings I couldn't organise: Africa, Europe, Asia, God, war, love, sleep, fun. All of it together, all of it at once. Because that's what being one person feels like: you contain all of this, simultaneously, and somehow it makes a single life. Ichi, "One" in Japanese.`,
        ],
    },
    {
        id: "teljangal",
        img: art49,
        title: "Tel Jangal",
        yrCreated: 2013,
        orientation: "landscape",
        medium: "Watercolor", // CONFIRM: old data said both oil on canvas and watercolor
        original: avail(150),
        artistStatement: [
            `I was thinking about what happens inside a jungle (not the postcard version, but the real thing), where everything is competing for light and space and survival, where beauty and violence share the same leaf. The shapes in this piece came fast and sharp, like the jungle doesn't ask permission. The blue dominates but the red refuses to disappear. I named it in Hindi because something about that language captures density, layering, the feeling of a world folded inside itself. Tel Jangal, "Oil Jungle" in Hindi.`,
        ],
    },
    {
        id: "plasticine",
        img: art50,
        title: "Plasticine",
        yrCreated: 2013,
        orientation: "landscape",
        medium: "Watercolor",
        original: avail(100),
        artistStatement: [
            `Remember pressing plasticine as a child, the way all the colours eventually bleed into each other if you're not careful, that murky beautiful mess that happens between red and blue and green when you've been playing too long? That texture was in my head when I made this. The black here is playful rather than heavy, like outline drawings from a childhood notebook. The colours push through it the way joy pushes through difficulty. I wanted something that felt like making a mess on purpose and being completely at peace with it.`,
        ],
    },

    /* ----- 2012 ----- */
    {
        id: "penguin",
        img: art29,
        title: "A Penguin in the Desert",
        yrCreated: 2012,
        orientation: "portrait",
        medium: "Crayola crayons",
        original: avail(50),
        artistStatement: [
            `Made in Niamey, he's not a scientific illustration. He's a character, striding across that warm ochre and terracotta ground like he owns it, completely unbothered by the fact that nothing about this landscape is where a penguin is supposed to be. The blue at his feet is the only concession to his natural world. Everything else is warm, almost oasis-like, and he walks through it with total confidence. Sometimes the most joyful thing you can do is pick up the simplest tools you have and just make something that makes you smile.`,
        ],
    },
    {
        id: "fruits",
        img: art34,
        title: "Fruits",
        yrCreated: 2012,
        orientation: "landscape",
        medium: "Watercolor",
        original: avail(100),
        artistStatement: [
            `Nelly didn't overthink this one. She just wanted to paint fruit. A green apple, a bunch of grapes, a red apple with its little leaf still attached, all sitting quietly on a warm surface against that blazing orange background. The still life is one of the oldest subjects in painting and she came to it with complete simplicity: these objects, this light, these colours. The purple of the grapes against the orange behind them was the thing that made me happy while I was working on it. Sometimes that's the only reason you need.`,
        ],
    },

    /* ----- 2007 ----- */
    {
        id: "whimsy",
        img: art66,
        title: "Whimsy",
        yrCreated: 2007,
        orientation: "landscape",
        medium: "Oil on wood",
        original: { status: 'make-offer' },
        artistStatement: [
            `My first paint work was an oil on wood. I remember not wanting to risk making a mistake on a real canvas with its white "toile", so I decided to try on contreplaqué instead. I didn't know what I was doing, and that was perfectly fine. The character arrived almost on her own, this patchwork girl in her triangle hat, surrounded by floating shapes and patterns that don't follow any logic except the logic of joy. Every little motif on her clothes is different, every circle around her is its own small world. I wasn't trying to say anything profound. I was just playing, genuinely playing, and I think you can feel that in every mark. That freedom is something I've tried to protect ever since.`,
        ],
    },
    {
        id: "nebula",
        img: art67,
        title: "Nebula",
        yrCreated: 2007,
        orientation: "landscape",
        medium: "Oil on canvas",
        dedication: "Offered to the Ouandji family in Yaoundé, Cameroon",
        original: gifted,
        artistStatement: [
            `I went almost monochrome for second paint work (but first oil on canvas) and went as deep into a single subject as I could. A flower, but so close that it stops being a flower and becomes a universe: petals spiralling outward like a galaxy, the dark centre pulling everything toward it like gravity. I named it Nebula because that's what it became the longer I looked at it while painting: something cosmic, something that exists at a scale much larger than a garden. Orange was the only colour it needed, and quite frankly, the only one I felt like using. Some things are complete in themselves. They don't have to be explained. They just are. And that is it.`,
        ],
    },
];

type PrintEntry = {
    price: number;
    url: string;
}

type PrintLinks = {
    prints: Record<string, { physical?: PrintEntry; digital?: PrintEntry}>;
}

const printLinks: Record<string, { physical?: PrintEntry; digital?: PrintEntry }> = {
    ...(printLinksLive as PrintLinks).prints,
    ...(import.meta.env.DEV ? (printLinksTest as PrintLinks).prints : {}),
};

export const artList: Art[] = baseList.map(a => ({
    ...a,
    print: printLinks[a.id] ?? a.print,
}));