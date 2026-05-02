import greenRoots from '../../../../assets/green-roots (1).webp';
import reso from '../../../../assets/resources-liberia.webp';
import toxi from '../../../../assets/toxic-waste.webp';
import journal from '../../../../assets/journal d\'une revoltee.webp';
import aux from '../../../../assets/aux-dentelles.webp';
import vente from '../../../../assets/vente de cuisses.webp';

interface Book {
    id: number
    imgSrc: string
    title: string
    author: string
    yr: string
    url: string
}

export const conserveBooks:Book[] = [
    {
        id:1,
        imgSrc:greenRoots,
        title: "Green Roots: Grassroots Environmentalism and Legal Reform in Cameroon",
        author: "by Tahle Itoe Mukete & Metolo Foyet",
        yr: "2025",
        url: ""
    },
    {
        id:2,
        imgSrc:reso,
        title: "The UN and Natural Resources in Liberia: Exploring the Nexus between Natural Resources, Conflict, the Environment and Peace support Operations",
        author: "by Metolo Foyet",
        yr: "2021",
        url: ""
    },
    {
        id:3,
        imgSrc:toxi,
        title: "Toxic Waste and Climate Change in Africa: Awareness and Responsiveness",
        author: "by Metolo Foyet",
        yr: "2018",
        url: ""
    }
]

export const storyBooks:Book[] = [
    {
        id:1,
        imgSrc:journal,
        title: "Le Journal d’une Révoltée, Ed. Lulu",
        author: "by Metolo Foyet",
        yr: "2014",
        url: ""
    },
    {
        id:2,
        imgSrc:aux,
        title: "Aux Dentelles du Diable",
        author: "by Metolo Foyet",
        yr: "2013",
        url: ""
    },
    {
        id:3,
        imgSrc:vente,
        title: "Vente de Cuisses de Moustiques à Doubangar, Ed. Edilivre",
        author: "by Metolo Foyet",
        yr: "2013",
        url: ""
    },
]