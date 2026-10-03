import ex1 from '../../../../assets/exhibit1.svg';
import ex2 from '../../../../assets/exhibit2.svg';
import ex3 from '../../../../assets/exhibit3.svg';
import ex4 from '../../../../assets/exhibit4.svg';
import ex5 from '../../../../assets/curia.webp';

interface Exhibit {
    id: number
    imgSrc: string
    title: string
    desc: string
    driveUrl?: string
    linkedinUrl: string
}

export const exhibits:Exhibit[] = [
    {
        id:1,
        imgSrc:ex1,
        title:"Black Cosmologies, World-building, Storytelling and Imagination (2026)",
        desc:"An Afrofuturist art project selected for Afrofuturism Week 2026 (Florida), featuring two Neuralnauts works with works available for sale and future expansion into animation.",
        linkedinUrl:"https://www.linkedin.com/feed/update/urn:li:activity:7422068521494376448/?originTrackingId=gV1QI%2BBE%2BAt%2Fm61gM4ISrA%3D%3D"
    },
    {
        id:2,
        imgSrc:ex2,
        title:"Hidden Histories - GFAA Gallery, Gainesville, FL. (April 23 - May 23, 2025)",
        desc:"My artwork Ancestral Link was featured in the Hidden Histories exhibition at GFAA Gallery (Gainesville, FL), paired with a short story by Sue Blythe; running until May 23, 2025.",
        driveUrl:"https://drive.google.com/drive/folders/1zRQFaMMYlMt4IsdQNCo6I-0Cp1Jd9L0s?usp=sharing",
        linkedinUrl:"https://www.linkedin.com/posts/metolo-foyet-ph-d-86a47420b_two-days-ago-we-attended-the-reception-for-activity-7322140223239327744-rOvs?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVIttIBbgPiTZTWo7Ty6YlewzQVXivY8m0"
    },
    {
        id:3,
        imgSrc:ex3,
        title:"Student Project Exhibits - CAME 2025 Innovations Summit @ReitzUnion, Gainesville, FL. 11 Apr, 2025",
        desc:"Exhibited two AI-assisted oil-on-canvas works, Digital Current and Ancestral Link, at the 2025 Innovations Summit, exploring technology, conservation, Indigenous digital activism, and ecological futures",
        driveUrl:"https://drive.google.com/drive/folders/1tQnd97SnJI8qzAbGXM3cNrAehFiajsI4?usp=sharing",
        linkedinUrl:"https://www.linkedin.com/posts/metolo-foyet-ph-d-86a47420b_heidipowell-africanity-culturalexperiences-activity-7318066834690236417-E7QV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVIttIBbgPiTZTWo7Ty6YlewzQVXivY8m0"
    },
    {
        id:4,
        imgSrc:ex4,
        title:"Flow - GFAA Gallery, Gainesville, FL. (26 Mar - 18 April, 2025)",
        desc:"Oil-on-canvas piece Digital Current accepted into FLOW at GFAA Gallery, exploring movement, transformation, and interconnectedness from a digital ethnographic perspective.",
        linkedinUrl:"https://www.linkedin.com/posts/metolo-foyet-ph-d-86a47420b_movement-transformation-interconnectedness-activity-7309676943132553216-6-bb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVIttIBbgPiTZTWo7Ty6YlewzQVXivY8m0"
    },
    {
        id:5,
        imgSrc:ex5,
        title:"Open-Air Exhibition - Empirical Things @Curia On the Drag, Gainesville, FL. 14 Mar, 2025",
        desc:"Open-Air Exhibition on March 14, 2025 at Curia On The Drag, Gainesville, showcasing AI-assisted art for Indigenous advocacy—exploring technology, conservation, culture, and resistance.",
        driveUrl:"https://drive.google.com/drive/folders/16Ua-9VXx7ibDYabC_fVxSPzftffREMz6?usp=sharing",
        linkedinUrl:"https://www.linkedin.com/posts/metolo-foyet-ph-d-86a47420b_indigenousadvocacy-artforchange-aiandculture-activity-7305480743734947840-RSZY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVIttIBbgPiTZTWo7Ty6YlewzQVXivY8m0"
    },
]