import art1 from './artworks/art01.webp';
import art2 from './artworks/art02.webp';
import art3 from './artworks/art03.webp';
import art4 from './artworks/art04.webp';
import art5 from './artworks/art05.webp';
import art6 from './artworks/art06.webp';
import art7 from './artworks/art07.webp';
import art8 from './artworks/art08.webp';
import art9 from './artworks/art09.webp';
import art10 from './artworks/art10.webp';
import featuredArt from '../../../assets/feature.webp';

interface Exhibit {
    title: string
    details: string
}

export interface Art {
    id: string
    img: string
    title: string
    info: string
    edition: string | ""
    price: string
    artistStatement: Array<string>
    included: Array<string>
    exhibitHx: Exhibit[]
    mediumProcess: string
    isCanvasAvailable: boolean
    orientation: "portrait" | "landscape"
    canvasUrl: string
    printUrl: string
    viewUrl: string
    yrCreated: string
}

export const artList:Art[] = [
    {
        id: "whimsy",
        img: art1,
        title: "Whimsy",
        info: "Oil on Canvas, 2025",
        edition: "",
        price: "150",
        artistStatement: [
            '"Ancestral Link" explores the enduring connection between traditional Bamiléké knowledge systems and contemporary conservation practices. Through the integration of AI-assisted composition and classical oil painting techniques, this work creates a visual dialogue between past and future—honoring the wisdom passed down through generations while embracing digital innovation as a tool for cultural preservation.',
            'The piece draws inspiration from ndop textile patterns central to Bamiléké heritage, reimagining these ancestral geometries as pathways that bridge Indigenous ecological knowledge with modern environmental stewardship. The layered composition reflects the complexity of safeguarding both cultural and natural landscapes in an era of rapid technological change.',
            'This work is part of a broader artistic inquiry into how we make invisible histories visible—using both traditional and contemporary mediums to amplify Indigenous voices in conservation discourse and environmental justice movements.'
        ],
        included: [
            'Original Canvas',
            'Archival-quality print',
            'Ceritificate of Authenticity',
            'Artist Signature',
            'Numbered edition'
        ],
        exhibitHx: [
            {
                title: "Hidden Histories",
                details: "GFAA Gallery, Gainesville, FL (April 23 - May 23, 2025)"
            },
            {
                title: "CAME 2025 Innovations Summit",
                details: "University of Florida (April 11, 2025)"
            },
        ],
        mediumProcess: 'Oil on canvas. Created using generative AI tools to explore traditional Bamiléké ndop textile patterns and compositional structures, then hand-painted using classical oil techniques. This approach allows for the preservation and reinterpretation of cultural motifs while creating contemporary works that speak to current environmental and social justice issues.',
        isCanvasAvailable: false,
        orientation:"portrait",
        canvasUrl: "",
        printUrl: "",
        viewUrl: "/shop/whimsy",
        yrCreated: "2025"
    },
    {
        id: "thinker",
        img: art2,
        title: "The Thinker",
        info: "Oil on Canvas, 2025",
        edition: "",
        price: "1,500",
        artistStatement: [
            '"Ancestral Link" explores the enduring connection between traditional Bamiléké knowledge systems and contemporary conservation practices. Through the integration of AI-assisted composition and classical oil painting techniques, this work creates a visual dialogue between past and future—honoring the wisdom passed down through generations while embracing digital innovation as a tool for cultural preservation.',
            'The piece draws inspiration from ndop textile patterns central to Bamiléké heritage, reimagining these ancestral geometries as pathways that bridge Indigenous ecological knowledge with modern environmental stewardship. The layered composition reflects the complexity of safeguarding both cultural and natural landscapes in an era of rapid technological change.',
            'This work is part of a broader artistic inquiry into how we make invisible histories visible—using both traditional and contemporary mediums to amplify Indigenous voices in conservation discourse and environmental justice movements.'
        ],
        included: [
            'Original Canvas',
            'Archival-quality print',
            'Ceritificate of Authenticity',
            'Artist Signature',
            'Numbered edition'
        ],
        exhibitHx: [
            {
                title: "Hidden Histories",
                details: "GFAA Gallery, Gainesville, FL (April 23 - May 23, 2025)"
            },
            {
                title: "CAME 2025 Innovations Summit",
                details: "University of Florida (April 11, 2025)"
            },
        ],
        mediumProcess: 'Oil on canvas. Created using generative AI tools to explore traditional Bamiléké ndop textile patterns and compositional structures, then hand-painted using classical oil techniques. This approach allows for the preservation and reinterpretation of cultural motifs while creating contemporary works that speak to current environmental and social justice issues.',
        isCanvasAvailable: true,
        orientation:"portrait",
        canvasUrl: "",
        printUrl: "",
        viewUrl: "/shop/thinker",
        yrCreated: "2025"
    },
    {
        id: "art3",
        img: art3,
        title: "Artwork Name",
        info: "Oil on Canvas, 2025",
        edition: "",
        price: "150",
        artistStatement: [
            '"Ancestral Link" explores the enduring connection between traditional Bamiléké knowledge systems and contemporary conservation practices. Through the integration of AI-assisted composition and classical oil painting techniques, this work creates a visual dialogue between past and future—honoring the wisdom passed down through generations while embracing digital innovation as a tool for cultural preservation.',
            'The piece draws inspiration from ndop textile patterns central to Bamiléké heritage, reimagining these ancestral geometries as pathways that bridge Indigenous ecological knowledge with modern environmental stewardship. The layered composition reflects the complexity of safeguarding both cultural and natural landscapes in an era of rapid technological change.',
            'This work is part of a broader artistic inquiry into how we make invisible histories visible—using both traditional and contemporary mediums to amplify Indigenous voices in conservation discourse and environmental justice movements.'
        ],
        included: [
            'Original Canvas',
            'Archival-quality print',
            'Ceritificate of Authenticity',
            'Artist Signature',
            'Numbered edition'
        ],
        exhibitHx: [
            {
                title: "Hidden Histories",
                details: "GFAA Gallery, Gainesville, FL (April 23 - May 23, 2025)"
            },
            {
                title: "CAME 2025 Innovations Summit",
                details: "University of Florida (April 11, 2025)"
            },
        ],
        mediumProcess: 'Oil on canvas. Created using generative AI tools to explore traditional Bamiléké ndop textile patterns and compositional structures, then hand-painted using classical oil techniques. This approach allows for the preservation and reinterpretation of cultural motifs while creating contemporary works that speak to current environmental and social justice issues.',
        isCanvasAvailable: false,
        orientation:"portrait",
        canvasUrl: "",
        printUrl: "",
        viewUrl: "/shop/art3",
        yrCreated: "2025"
    },
    {
        id: "art4",
        img: art4,
        title: "Artwork Name",
        info: "Oil on Canvas, 2025",
        edition: "",
        price: "150",
        artistStatement: [
            '"Ancestral Link" explores the enduring connection between traditional Bamiléké knowledge systems and contemporary conservation practices. Through the integration of AI-assisted composition and classical oil painting techniques, this work creates a visual dialogue between past and future—honoring the wisdom passed down through generations while embracing digital innovation as a tool for cultural preservation.',
            'The piece draws inspiration from ndop textile patterns central to Bamiléké heritage, reimagining these ancestral geometries as pathways that bridge Indigenous ecological knowledge with modern environmental stewardship. The layered composition reflects the complexity of safeguarding both cultural and natural landscapes in an era of rapid technological change.',
            'This work is part of a broader artistic inquiry into how we make invisible histories visible—using both traditional and contemporary mediums to amplify Indigenous voices in conservation discourse and environmental justice movements.'
        ],
        included: [
            'Original Canvas',
            'Archival-quality print',
            'Ceritificate of Authenticity',
            'Artist Signature',
            'Numbered edition'
        ],
        exhibitHx: [
            {
                title: "Hidden Histories",
                details: "GFAA Gallery, Gainesville, FL (April 23 - May 23, 2025)"
            },
            {
                title: "CAME 2025 Innovations Summit",
                details: "University of Florida (April 11, 2025)"
            },
        ],
        mediumProcess: 'Oil on canvas. Created using generative AI tools to explore traditional Bamiléké ndop textile patterns and compositional structures, then hand-painted using classical oil techniques. This approach allows for the preservation and reinterpretation of cultural motifs while creating contemporary works that speak to current environmental and social justice issues.',
        isCanvasAvailable: false,
        orientation:"landscape",
        canvasUrl: "",
        printUrl: "",
        viewUrl: "/shop/art4",
        yrCreated: "2025"
    },
    {
        id: "home",
        img: art5,
        title: "Home",
        info: "Oil on Canvas, 2025",
        edition: "",
        price: "150",
        artistStatement: [
            '"Ancestral Link" explores the enduring connection between traditional Bamiléké knowledge systems and contemporary conservation practices. Through the integration of AI-assisted composition and classical oil painting techniques, this work creates a visual dialogue between past and future—honoring the wisdom passed down through generations while embracing digital innovation as a tool for cultural preservation.',
            'The piece draws inspiration from ndop textile patterns central to Bamiléké heritage, reimagining these ancestral geometries as pathways that bridge Indigenous ecological knowledge with modern environmental stewardship. The layered composition reflects the complexity of safeguarding both cultural and natural landscapes in an era of rapid technological change.',
            'This work is part of a broader artistic inquiry into how we make invisible histories visible—using both traditional and contemporary mediums to amplify Indigenous voices in conservation discourse and environmental justice movements.'
        ],
        included: [
            'Original Canvas',
            'Archival-quality print',
            'Ceritificate of Authenticity',
            'Artist Signature',
            'Numbered edition'
        ],
        exhibitHx: [
            {
                title: "Hidden Histories",
                details: "GFAA Gallery, Gainesville, FL (April 23 - May 23, 2025)"
            },
            {
                title: "CAME 2025 Innovations Summit",
                details: "University of Florida (April 11, 2025)"
            },
        ],
        mediumProcess: 'Oil on canvas. Created using generative AI tools to explore traditional Bamiléké ndop textile patterns and compositional structures, then hand-painted using classical oil techniques. This approach allows for the preservation and reinterpretation of cultural motifs while creating contemporary works that speak to current environmental and social justice issues.',
        isCanvasAvailable: true,
        orientation:"landscape",
        canvasUrl: "",
        printUrl: "",
        viewUrl: "/shop/home",
        yrCreated: "2025"
    },
    {
        id: "nebula",
        img: art6,
        title: "Nebula",
        info: "Oil on Canvas, 2025",
        edition: "",
        price: "150",
        artistStatement: [
            '"Ancestral Link" explores the enduring connection between traditional Bamiléké knowledge systems and contemporary conservation practices. Through the integration of AI-assisted composition and classical oil painting techniques, this work creates a visual dialogue between past and future—honoring the wisdom passed down through generations while embracing digital innovation as a tool for cultural preservation.',
            'The piece draws inspiration from ndop textile patterns central to Bamiléké heritage, reimagining these ancestral geometries as pathways that bridge Indigenous ecological knowledge with modern environmental stewardship. The layered composition reflects the complexity of safeguarding both cultural and natural landscapes in an era of rapid technological change.',
            'This work is part of a broader artistic inquiry into how we make invisible histories visible—using both traditional and contemporary mediums to amplify Indigenous voices in conservation discourse and environmental justice movements.'
        ],
        included: [
            'Original Canvas',
            'Archival-quality print',
            'Ceritificate of Authenticity',
            'Artist Signature',
            'Numbered edition'
        ],
        exhibitHx: [
            {
                title: "Hidden Histories",
                details: "GFAA Gallery, Gainesville, FL (April 23 - May 23, 2025)"
            },
            {
                title: "CAME 2025 Innovations Summit",
                details: "University of Florida (April 11, 2025)"
            },
        ],
        mediumProcess: 'Oil on canvas. Created using generative AI tools to explore traditional Bamiléké ndop textile patterns and compositional structures, then hand-painted using classical oil techniques. This approach allows for the preservation and reinterpretation of cultural motifs while creating contemporary works that speak to current environmental and social justice issues.',
        isCanvasAvailable: true,
        orientation:"landscape",
        canvasUrl: "",
        printUrl: "",
        viewUrl: "/shop/nebula",
        yrCreated: "2025"
    },
    {
        id: "toucan",
        img: art7,
        title: "Toucan",
        info: "Oil on Canvas, 2025",
        edition: "",
        price: "150",
        artistStatement: [
            '"Ancestral Link" explores the enduring connection between traditional Bamiléké knowledge systems and contemporary conservation practices. Through the integration of AI-assisted composition and classical oil painting techniques, this work creates a visual dialogue between past and future—honoring the wisdom passed down through generations while embracing digital innovation as a tool for cultural preservation.',
            'The piece draws inspiration from ndop textile patterns central to Bamiléké heritage, reimagining these ancestral geometries as pathways that bridge Indigenous ecological knowledge with modern environmental stewardship. The layered composition reflects the complexity of safeguarding both cultural and natural landscapes in an era of rapid technological change.',
            'This work is part of a broader artistic inquiry into how we make invisible histories visible—using both traditional and contemporary mediums to amplify Indigenous voices in conservation discourse and environmental justice movements.'
        ],
        included: [
            'Original Canvas',
            'Archival-quality print',
            'Ceritificate of Authenticity',
            'Artist Signature',
            'Numbered edition'
        ],
        exhibitHx: [
            {
                title: "Hidden Histories",
                details: "GFAA Gallery, Gainesville, FL (April 23 - May 23, 2025)"
            },
            {
                title: "CAME 2025 Innovations Summit",
                details: "University of Florida (April 11, 2025)"
            },
        ],
        mediumProcess: 'Oil on canvas. Created using generative AI tools to explore traditional Bamiléké ndop textile patterns and compositional structures, then hand-painted using classical oil techniques. This approach allows for the preservation and reinterpretation of cultural motifs while creating contemporary works that speak to current environmental and social justice issues.',
        isCanvasAvailable: true,
        orientation:"portrait",
        canvasUrl: "",
        printUrl: "",
        viewUrl: "/shop/toucan",
        yrCreated: "2025"
    },
    {
        id: "art8",
        img: art8,
        title: "Artwork Name",
        info: "Oil on Canvas, 2025",
        edition: "",
        price: "150",
        artistStatement: [
            '"Ancestral Link" explores the enduring connection between traditional Bamiléké knowledge systems and contemporary conservation practices. Through the integration of AI-assisted composition and classical oil painting techniques, this work creates a visual dialogue between past and future—honoring the wisdom passed down through generations while embracing digital innovation as a tool for cultural preservation.',
            'The piece draws inspiration from ndop textile patterns central to Bamiléké heritage, reimagining these ancestral geometries as pathways that bridge Indigenous ecological knowledge with modern environmental stewardship. The layered composition reflects the complexity of safeguarding both cultural and natural landscapes in an era of rapid technological change.',
            'This work is part of a broader artistic inquiry into how we make invisible histories visible—using both traditional and contemporary mediums to amplify Indigenous voices in conservation discourse and environmental justice movements.'
        ],
        included: [
            'Original Canvas',
            'Archival-quality print',
            'Ceritificate of Authenticity',
            'Artist Signature',
            'Numbered edition'
        ],
        exhibitHx: [
            {
                title: "Hidden Histories",
                details: "GFAA Gallery, Gainesville, FL (April 23 - May 23, 2025)"
            },
            {
                title: "CAME 2025 Innovations Summit",
                details: "University of Florida (April 11, 2025)"
            },
        ],
        mediumProcess: 'Oil on canvas. Created using generative AI tools to explore traditional Bamiléké ndop textile patterns and compositional structures, then hand-painted using classical oil techniques. This approach allows for the preservation and reinterpretation of cultural motifs while creating contemporary works that speak to current environmental and social justice issues.',
        isCanvasAvailable: true,
        orientation:"landscape",
        canvasUrl: "",
        printUrl: "",
        viewUrl: "/shop/art8",
        yrCreated: "2025"
    },
    {
        id: "art9",
        img: art9,
        title: "Artwork Name",
        info: "Oil on Canvas, 2025",
        edition: "",
        price: "150",
        artistStatement: [
            '"Ancestral Link" explores the enduring connection between traditional Bamiléké knowledge systems and contemporary conservation practices. Through the integration of AI-assisted composition and classical oil painting techniques, this work creates a visual dialogue between past and future—honoring the wisdom passed down through generations while embracing digital innovation as a tool for cultural preservation.',
            'The piece draws inspiration from ndop textile patterns central to Bamiléké heritage, reimagining these ancestral geometries as pathways that bridge Indigenous ecological knowledge with modern environmental stewardship. The layered composition reflects the complexity of safeguarding both cultural and natural landscapes in an era of rapid technological change.',
            'This work is part of a broader artistic inquiry into how we make invisible histories visible—using both traditional and contemporary mediums to amplify Indigenous voices in conservation discourse and environmental justice movements.'
        ],
        included: [
            'Original Canvas',
            'Archival-quality print',
            'Ceritificate of Authenticity',
            'Artist Signature',
            'Numbered edition'
        ],
        exhibitHx: [
            {
                title: "Hidden Histories",
                details: "GFAA Gallery, Gainesville, FL (April 23 - May 23, 2025)"
            },
            {
                title: "CAME 2025 Innovations Summit",
                details: "University of Florida (April 11, 2025)"
            },
        ],
        mediumProcess: 'Oil on canvas. Created using generative AI tools to explore traditional Bamiléké ndop textile patterns and compositional structures, then hand-painted using classical oil techniques. This approach allows for the preservation and reinterpretation of cultural motifs while creating contemporary works that speak to current environmental and social justice issues.',
        isCanvasAvailable: false,
        orientation:"portrait",
        canvasUrl: "",
        printUrl: "",
        viewUrl: "/shop/art9",
        yrCreated: "2025"
    },
    {
        id: "art10",
        img: art10,
        title: "Artwork Name",
        info: "Oil on Canvas, 2025",
        edition: "",
        price: "150",
        artistStatement: [
            '"Ancestral Link" explores the enduring connection between traditional Bamiléké knowledge systems and contemporary conservation practices. Through the integration of AI-assisted composition and classical oil painting techniques, this work creates a visual dialogue between past and future—honoring the wisdom passed down through generations while embracing digital innovation as a tool for cultural preservation.',
            'The piece draws inspiration from ndop textile patterns central to Bamiléké heritage, reimagining these ancestral geometries as pathways that bridge Indigenous ecological knowledge with modern environmental stewardship. The layered composition reflects the complexity of safeguarding both cultural and natural landscapes in an era of rapid technological change.',
            'This work is part of a broader artistic inquiry into how we make invisible histories visible—using both traditional and contemporary mediums to amplify Indigenous voices in conservation discourse and environmental justice movements.'
        ],
        included: [
            'Original Canvas',
            'Archival-quality print',
            'Ceritificate of Authenticity',
            'Artist Signature',
            'Numbered edition'
        ],
        exhibitHx: [
            {
                title: "Hidden Histories",
                details: "GFAA Gallery, Gainesville, FL (April 23 - May 23, 2025)"
            },
            {
                title: "CAME 2025 Innovations Summit",
                details: "University of Florida (April 11, 2025)"
            },
        ],
        mediumProcess: 'Oil on canvas. Created using generative AI tools to explore traditional Bamiléké ndop textile patterns and compositional structures, then hand-painted using classical oil techniques. This approach allows for the preservation and reinterpretation of cultural motifs while creating contemporary works that speak to current environmental and social justice issues.',
        isCanvasAvailable: false,
        orientation:"portrait",
        canvasUrl: "",
        printUrl: "",
        viewUrl: "/shop/art10",
        yrCreated: "2025"
    },
    {
        id: "ancestral-link",
        img: featuredArt,
        title: "\“Ancestral Link\"",
        info: "Oil on Canvas, 2025",
        edition:"Limited Edition Print - 1 of 1",
        price: "150",
        artistStatement: [
            '"Ancestral Link" explores the enduring connection between traditional Bamiléké knowledge systems and contemporary conservation practices. Through the integration of AI-assisted composition and classical oil painting techniques, this work creates a visual dialogue between past and future—honoring the wisdom passed down through generations while embracing digital innovation as a tool for cultural preservation.',
            'The piece draws inspiration from ndop textile patterns central to Bamiléké heritage, reimagining these ancestral geometries as pathways that bridge Indigenous ecological knowledge with modern environmental stewardship. The layered composition reflects the complexity of safeguarding both cultural and natural landscapes in an era of rapid technological change.',
            'This work is part of a broader artistic inquiry into how we make invisible histories visible—using both traditional and contemporary mediums to amplify Indigenous voices in conservation discourse and environmental justice movements.'
        ],
        included: [
            'Original Canvas',
            'Archival-quality print',
            'Ceritificate of Authenticity',
            'Artist Signature',
            'Numbered edition'
        ],
        exhibitHx: [
            {
                title: "Hidden Histories",
                details: "GFAA Gallery, Gainesville, FL (April 23 - May 23, 2025)"
            },
            {
                title: "CAME 2025 Innovations Summit",
                details: "University of Florida (April 11, 2025)"
            },
        ],
        mediumProcess: 'Oil on canvas. Created using generative AI tools to explore traditional Bamiléké ndop textile patterns and compositional structures, then hand-painted using classical oil techniques. This approach allows for the preservation and reinterpretation of cultural motifs while creating contemporary works that speak to current environmental and social justice issues.',
        isCanvasAvailable: true,
        orientation:"portrait",
        canvasUrl: "",
        printUrl: "",
        viewUrl: "/shop/ancestral-link",
        yrCreated: "2025"
    },
]