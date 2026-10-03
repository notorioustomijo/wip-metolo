import type { Chapter } from '../types/index';

// Asset imports
import crest from '../assets/crest.webp';
import workflo from '../assets/metolo-corporate.webp';

import family1 from '../assets/fam01.webp';
import family2 from '../assets/fam02.webp';
import family3 from '../assets/fam03.webp';
import family4 from '../assets/fam04.webp';
import family5 from '../assets/fam05.webp';
import family6 from '../assets/fam06.webp';
import family7 from '../assets/fam07.webp';
import family8 from '../assets/fam08.webp';


export const chapters: Chapter[] = [
    {
        id: 'ch0',
        chapterLabel: 'CHAPTER 0: ONCE UPON A TIME',
        content: {
            type: 'once-upon-a-time',
            title: 'Once Upon a Time',
            body: 'According to my splendid mum, I was always a big-mouthed, free-spirited soul. Apparently, I arrived in this world with opinions, a voice, and absolutely no intention of keeping either to myself.',
        },
        avatarAnchorX: 0.5,
        groundVariant: 'flat',
        hideAvatar: true,
        bgDecorations: []
    },
    {
        id: 'ch1',
        chapterLabel: 'CHAPTER 1: THE NAME',
        content: {
            type: 'name-reveal',
            name: 'METOLO',
            pronunciation: "/mę - to’ - lo’/ (Ghɔmálá)",
            meaning: 'Safeguardian',
            bio: 'I was named after one of my great-grandmothers. She was the Queen of Kouh Gang, a sacred and symbolic dance performed only on the most solemn royal occasions: the enthronement of kings and royal funerals. Kouh Gang stands as a powerful expression of Bamileke pride, heritage and tradition. Metolo means the safeguarding, keeper of the Crown jewel. Her name became mine. To me, it is not just a name inherited. It\'s legacy entrusted. A mandate.',
        },
        avatarAnchorX: 0.45,
        groundVariant: 'flat',
        bgDecorations: []
    },
    {
        id: 'ch2',
        chapterLabel: 'CHAPTER 2: THE KINGDOMS',
        content: {
            type: 'kingdoms',
            title: 'Two Kingdoms. \nOne Mandate.',
            body: 'For the Kingdom of Fotouni and the Kingdom of Bafang — a heritage carried not in ceremony, but in responsibility to land and people.',
            quote: 'Both of my grandmothers are princesses.\n\nBut royalty isn\'t about crowns. It\'s about responsibility to land and people.',
            imageUrl: crest,      // Add image
        },
        avatarAnchorX: 0.5,
        groundVariant: 'flat',
        bgDecorations: ['trees', 'huts']
    },
    {
        id: 'ch3',
        chapterLabel: 'CHAPTER 3: THE WEIRD ONE',
        content: {
            type: 'timeline',
            title: 'The Girl Who Questioned Everything',
            subtitle: 'Growing up, I was extremely curious about and invested in acquiring knowledge about the world around me. Naturally that led me to excelling across various fields from literature to science.',
            items: [
                {
                    age: 'Age 7',
                    text: 'Published jokes in Juniors Magazine'
                },
                {
                    age: 'Age 13',
                    text: 'Won a Bronze Medal in International Science Olympiad'
                },
                {
                    age: 'Age 15',
                    text: 'Published my first book'
                },
            ]
        },
        avatarAnchorX: 0.45,
        groundVariant: 'rising',
        bgDecorations: ['building', 'books']
    },
    {
        id: 'ch4',
        chapterLabel: 'CHAPTER 4: FORMAL EDUCATION',
        content: {
            type: 'education',
            title: '3 degrees across 3 continents and over 30+ certifications',
            subtitle: 'Here are a few of them:',
            degrees: [
                {
                  institution: 'Lancaster University',
                  degree: 'B.A. (Hons) – Magna Cum Laude, Politics and International Relations',
                  year: '2017',
                  focus: 'Environmental governance, plastic pollution research',
                },
                {
                  institution: 'Kofi Annan International Peacekeeping Training Center',
                  degree: 'M.A., Conflict, Peace and Security',
                  year: '2019',
                  focus: 'Natural resources, conflict, UN peacekeeping',
                },
                {
                  institution: 'University of Florida',
                  degree: 'Ph.D, Geography',
                  year: '2025',
                  focus: 'Digital geography, social media, indigenous movements',
                },
            ],
        },
        avatarAnchorX: 0.6,
        groundVariant: 'rising',
        bgDecorations: ['university']
    },
    {
        id: 'ch5a',
        chapterLabel: 'CHAPTER 5: THE WORK',
        subLabel: '→SUBCHAPTER A: THE SCHOLAR',
        content: {
            type: 'publications',
            title: '7 Books, 100+ Publications',
            subtitle: 'Connecting souls, soil and satellites across 3 editorial roles.',
            items: [
                { kind: 'BOOK', title: 'Green Roots', author: 'Foyet, M. & Mukete, T.I. (2025)', url: 'https://grassrootsinstitute.ca/books/enrl5/Book-enrl5.pdf' },
                { kind: 'PUBLICATION', title: 'Youth Leadership and Governance in West Africa', author: 'Foyet, M. (2021)', url: 'https://wacsi.org/wp-content/uploads/2021/02/Youth-Leadership-and-Governance-in-West-Africa.pdf' },
                { kind: 'OP-ED', title: 'Data Sovereignty for Security in Mineral Economies', author: 'Foyet, M., Baum, J., Kepe, T. (2025)', url: 'https://futures.issafrica.org/blog/2025/Data-sovereignty-for-security-in-mineral-economies' },
                { kind: 'OP-ED', title: 'Humour, Unpredictability, and Resilience: The Healing Thread in Social Media Comments (Part II)', author: 'Foyet, M. (2025)', url: 'https://yourcommonwealth.org/technology-innovation/humour-unpredictability-and-resilience-the-healing-thread-in-social-media-comments-part-ii/' },
                { kind: 'OP-ED', title: 'AI-Powered Tourism: Your Path to a Thriving Career', author: 'Foyet, M. (2024)', url: 'https://yourcommonwealth.org/social-development/ai-powered-tourism-your-path-to-a-thriving-career/' },
                { kind: 'PUBLICATION', title: 'The Use of Term Limits to Enhance Accountable Governance in Africa: Analysis from A Civil Society Perspective', author: 'Foyet, M. (2020)', url: 'https://wacsi.org/wp-content/uploads/2020/09/The-Use-of-Term-Limits-to-Enhance-Accountable-Governance-in-Africa-rev.pdf' },
            ],
        },
        avatarAnchorX: 0.4,
        groundVariant: 'descending',
        bgDecorations: []
    },
    {
        id: 'ch5b',
        chapterLabel: 'CHAPTER 5: THE WORK',
        subLabel: '→SUBCHAPTER B: THE MULTIDISCIPLINARY SAFEGUARDIAN',
        content: {
            type: 'projects',
            title: 'From Wildlands to Wireless',
            stats: [
                { label: 'Countries', value: '70' },
                { label: 'Projects', value: '$530M+' },
                { label: 'Fellowships', value: '16' },
            ],
            nodes: [
            { name: 'Left Handshake International', location: 'Ghana, Niger', url: 'https://drive.google.com/drive/folders/1247z4he3D57nphTs8pa-mAOgqWcyttr1?usp=sharing', title: 'Youth Social-Economic Development in Ghana', },
            { name: 'Fotouni Forward', location: 'Cameroon', url: 'https://www.researchgate.net/publication/377780363_FotouniForward_A_Tropical_Forest_Community_Restoration_and_Conservation_Initiative', title: 'Yale Capstone Conservation Project' },
            { name: 'SciTube', location: 'Youtube', url: 'https://www.youtube.com/watch?v=rZ-FM94NQTk', title: 'Examining COVID-era digital activism' },
            { name: 'Ekua Pa', location: 'YALI', url: 'https://web.facebook.com/100064785666759/posts/1842135159396136/?_rdc=1&_rdr#', title: 'YALI Investor Pitch Project' },
            ],
        },
        avatarAnchorX: 0.5,
        groundVariant: 'flat',
        bgDecorations: ['building', 'tent']
    },
    {
        id: 'ch5c',
        chapterLabel: 'CHAPTER 5: THE WORK',
        subLabel: '→SUBCHAPTER C: THE ARTIST',
        content: {
            type: 'art',
            title: 'AI-Assisted Traditional Art',
            subtitle: '4 Exhibitions  •  AI + Oil on Canvas',
            description: 'My art explores landscape as a space of memory, ecology, and relationships. Working across traditional and digital media, I try to bridge the gap between indigenous perspectives, environmental narratives, and technological futures.',
            shopUrl: '/shop',
        },
        avatarAnchorX: 0.35,
        groundVariant: 'valley',
        bgDecorations: []
    },
    {
        id: 'ch6',
        chapterLabel: 'CHAPTER 6: MY BIG QUESTION',
        content: {
            type: 'big-question',
            preamble: 'All I do with my work is try to answer one question:',
            question: 'How can humanity transform its knowledge, technologies and institutions from instruments of dominion into forces of liberation — so that landscapes, ecosystems, and the communities who inhabit them can flourish on their own terms?'
        },
        avatarAnchorX: 0.5,
        groundVariant: 'sky',
        bgDecorations: ['clouds', 'dog']
    },
    {
        id: 'ch7',
        chapterLabel: 'CHAPTER 7: THE FACES OF HOME',
        content: {
            type: 'family',
            title: 'The Faces of Home',
            subtitle: 'The people who made me, and who I make it all for.',
            photos: [
                { src: family1, alt: '', caption: 'Grandfather' },
                { src: family2, alt: '', caption: 'Grandfather' },
                { src: family3, alt: '', caption: 'Grandmother' },
                { src: family4, alt: '', caption: 'Grandmother' },
                { src: family5, alt: '', caption: 'Parents' },
                { src: family6, alt: '', caption: 'Brother' },
                { src: family7, alt: '', caption: 'Sister' },
                { src: family8, alt: '', caption: 'Brother' },
            ],
        },
        avatarAnchorX: 0.5,
        groundVariant: 'flat',
        bgDecorations: []
    },
    {
        id: 'ch8',
        chapterLabel: 'CHAPTER 8: THAT\'S ALL, FOLKS',
        content: {
            type: 'closing',
            title: 'Work with Me',
            subtitle: 'In redefining industries, our relationship to the planet and making an impact.',
            photoUrl: workflo,
            ctas: [
                { label: 'Get in Touch', href: 'mailto:m.foyet@utoronto.ca', action: 'external', variant: 'primary' },
                { label: 'View My Resume', href: '/resume.pdf', action: 'external', variant: 'secondary' },
                { label: 'Re-explore My Journey', action: 'restart', variant: 'link' },
            ],
        },
        avatarAnchorX: 0.5,
        groundVariant: 'flat',
        bgDecorations: ['tree', 'hut', 'compass', 'flag']
    },
]