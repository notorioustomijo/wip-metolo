import uf from '../../../assets/uflorida.svg';
import ka from '../../../assets/kannan.svg';
import lanc from '../../../assets/lancuni.svg';

interface Degree {
    img: string
    title: string
    school: string
    yr: string
    desc: string
}

export const degrees:Degree[] = [
    {
        img:uf,
        title:"Ph.D. Geography",
        school:"University of Florida, USA",
        yr:"2025",
        desc:"Dissertation: “Using Digital and Rights-based Approaches to Understand Institutional Linkages Between Social Media, Wildlife Activism & New Conservation Movement in Southern Africa”"
    },
    {
        img:ka,
        title:"M.A. Conflict, Peace & Security",
        school:"Kofi Annan Intl. Peacekeeping Training Centre, Ghana",
        yr:"2019",
        desc:"Thesis: “Exploring the Nexus between Natural Resources, Conflict, Environment and PSOs”"
    },
    {
        img:lanc,
        title:"B.A. (Hons) Politics & International Relations, Magna Cum Laude",
        school:"Lancaster University, UK",
        yr:"2017",
        desc:"Thesis: “Assessing Awareness & Responsiveness to Plastic Pollution and Climate Change in Ghana”"
    },
]