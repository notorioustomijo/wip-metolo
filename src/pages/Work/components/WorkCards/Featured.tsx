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
        desc:"Featured on Page 51",
        url:"https://www.amazon.com/Change-Without-Leaving-Skills-Decade/dp/2970164965"
    },
    {
        id:2,
        imgSrc:lamai,
        title:"Regenerate the Future by 2050NOW La Maison (2025)",
        desc:"Featured on Page 342",
        url:"https://2050nowlamaison.com/wp-content/uploads/2025/07/Regenerate-the-future-by-2050NOW-La-Maison.pdf"
    },
]