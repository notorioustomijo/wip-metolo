import lhi from '../../../../assets/lhi-round.svg';
import yale from '../../../../assets/yale-prject.svg';
import liela from '../../../../assets/liela.svg';
import scitube from '../../../../assets/scitube.svg';
import ekua from '../../../../assets/ekua-pa.svg';

interface Project {
    id: number
    title: string
    desc: string
    imgSrc: string
    imgType: string
    tag: string
    type: string
    url: string
    width: number
}

export const projects:Project[] = [
    {
        id:1,
        title: "Youth Social-Economic Development in Ghana",
        desc: "A YALI-recognized youth empowerment initiative through Left Handshake International, an NGO I founded at 18, delivering vocational training, and community development to marginalized rural communities across Ghana.",
        imgSrc: lhi,
        imgType: "round",
        tag: "CONSERVATION",
        type: "project",
        url: "https://drive.google.com/drive/folders/1247z4he3D57nphTs8pa-mAOgqWcyttr1?usp=sharing",
        width: 45
    },
    {
        id:2,
        title: "Yale Capstone Project: Fotouni Forward",
        desc: "A community-driven conservation project in Cameroon’s Fotouni Kingdom aimed at restoring declining raffia palm groves, protecting biodiversity, and empowering locals to preserve their cultural and ecological heritage.",
        imgSrc: yale,
        imgType: "round",
        tag: "CONSERVATION",
        type: "project",
        url: "https://www.researchgate.net/publication/377780363_FotouniForward_A_Tropical_Forest_Community_Restoration_and_Conservation_Initiative",
        width: 45
    },
    {
        id:3,
        title: "LIE’LA Festival | YourCommonwealth",
        desc: "A cultural heritage and community development project centered on the LIE’LA Festival in Cameroon’s Fotouni Kingdom, reconnecting youth to traditional values while driving economic, social, and diaspora engagement.",
        imgSrc: liela,
        imgType: "round",
        tag: "CONSERVATION",
        type: "project",
        url: "https://yourcommonwealth.org/music/the-liela-festival-of-cameroon/",
        width: 45
    },
    {
        id:4,
        title: "How Covid-19 Shaped Conservation Activism in Southern Africa | SciTube",
        desc: "A project examining COVID-era digital activism for Indigenous conservation, culminating in an outreach video featured on SciTube’s YouTube channel.",
        imgSrc: scitube,
        imgType: "round",
        tag: "CONSERVATION",
        type: "project",
        url: "https://www.youtube.com/watch?v=rZ-FM94NQTk",
        width: 45
    },
    {
        id:5,
        title: "Ekua Pa – YALI Investor Pitch Project",
        desc: "A youth-led agribusiness innovation pitched at the YALI RLC West Africa Investor Program, advancing Ekua Pa’s market-linkage and support solutions for rural smallholder farmers, with national media exposure.",
        imgSrc: ekua,
        imgType: "round",
        tag: "INFORMATION TECHNOLOGY",
        type: "project",
        url: "https://web.facebook.com/100064785666759/posts/1842135159396136/?_rdc=1&_rdr#",
        width: 45
    },
];