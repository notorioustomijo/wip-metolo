import eco from '../../../assets/ecology.svg';
import geo from '../../../assets/digitalgeo.svg';
import gen from '../../../assets/gender.svg';
import ent from '../../../assets/entrepreneur.svg';

interface AdvTrainingProps {
    img: string
    title: string
    trainings: string[]
}

export const advTrainings:AdvTrainingProps[] = [
    {
        img:eco,
        title:"Ecology & Conservation",
        trainings:[
            "Tropical Conservation & Development (TCD) | UF Center for Latin American Studies",
            "Nature-based Solutions for Sustainable Development | UNDP",
            "Protected Areas and sustainable Development | TNC/UNDP/CBD/NBSAP Forum",
            "Fundamentals and Advancing on REDD+ | UNITAR/UNREDD/FAO/UNDP/UNEP",
            "Peace Park Development and Management | CBD/NBSAP Forum/Korea Ministry of Environment",
            "Using Spatial Data for Biodiversity | NASA/CDB/UNEP-WCMC/PRIAS Lab/Costa Rica MINAE",
            "Ecosystem Restoration | EU/FERI/CBD/Korea Forest Service/UN Decade on Ecosystem Restoration",
            "Applying Ecosystem Restoration Interventions | id.",
            "Integrated Spatial Planning | UNDP/GBF/GEF/SIDA/PacMARA",
            "The SDG Primer: Foundational Primer on the 2030 Agenda for Sustainable Development. | UNSSC",
            "Mentee, Project Learning Tree Canada (PLTC) Green Mentor Program | FAO",
        ]
    },
    {
        img:geo,
        title:"Digital Geography & AI",
        trainings:[
            "AI, Digital Geography & GIS / GeoAI & Big Data | UF",
            "Generative AI / Responsible AI | Commonwealth/Intel",
            "Intro to Coordinate Systems / Building Models for GIS Analysis Using ArcGIS",
            "Getting started with Geodatabase / Mapping & Visualization / GIS Basics | ESRI",
        ]
    },
    {
        img:gen,
        title:"Gender & Integrity",
        trainings:[
            "Women’s Leadership in Conservation | Colorado State",
            "Gender Equality & Women’s Empowerment | UNDP/CBD/NBSAP Forum",
            "Prevention of Sexual Harassment (PSHAA) | UNICEF",
            "Ethics and Integrity at the UN | UNICEF",
            "Prevention of Sexual Exploitation and Abuse (PSEA) | UNICEF",
            "UN Human Rights Responsibilities | UNICEF",
            "Preventing Fraud and Corruption at the United Nations | UNICEF",
        ]
    },
    {
        img:ent,
        title:"Communication & Entrepreneurship",
        trainings:[
            "Science-Policy Communication | Commonwealth/Intel",
            "Communicating the Value of Biodiversity | UNDP/CBD/NBSAP Forum/Rare",
            "Social Media Bootcamp | Fray College of Communications",
            "Intellectual Property for Innovators | UF Innovate Pathways",
            "Sustainable Commodity Supply Chain | UNDP/NBSAP Forum",
            "Green Entrepreneurship | UNDP/CBD/EcoEnterprises Fund/SEED/GEF Small Grants Programme",
        ]
    },
]