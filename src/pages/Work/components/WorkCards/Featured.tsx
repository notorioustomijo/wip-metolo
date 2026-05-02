import more from '../../../../assets/morehead.svg';
import lamai from '../../../../assets/la-maison.svg';

interface Feature {
    id: number
    imgSrc: string
    title: string
    desc: string
    url: string
}

export const featureList:Feature[] = [
    {
        id:1,
        imgSrc:more,
        title:"How To Change The World Without Leaving Your Couch by John Morehead-Guinea (2025)",
        desc:"Featured my story about Dr. Kristal Ambrose",
        url:""
    },
    {
        id:2,
        imgSrc:lamai,
        title:"Regenerate the Future by 2050NOW La Maison (2025)",
        desc:"Featured on Page 342",
        url:""
    },
]