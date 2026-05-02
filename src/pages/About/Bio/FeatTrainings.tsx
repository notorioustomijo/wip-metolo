import yale from '../../../assets/yaleuni.svg';
import csu from '../../../assets/colstate.svg';
import west from '../../../assets/westcape.svg';
import stan from '../../../assets/stanforduni.svg';

interface Training {
    img: string
    title: string
    school: string
    yr: string
}

export const featTrainings:Training[] = [
    {
        img:yale,
        title:"Tropical Forest Landscapes: Conservation, Restoration, Sustainable Use",
        school:"Yale University, USA",
        yr:"2023"
    },
    {
        img:csu,
        title:"Women’s Leadership in Conservation",
        school:"Colorado State University, USA",
        yr:"2022"
    },
    {
        img:west,
        title:"Political Economy of Land Governance in Africa",
        school:"University of the Western Cape, South Africa",
        yr:"2019"
    },
    {
        img:stan,
        title:"Forbes 30 Under 30 Startup Training",
        school:"Stanford University, USA",
        yr:"2019"
    },
]