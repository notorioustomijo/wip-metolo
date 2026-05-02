import marg from '../../../../assets/marginaliz.webp';
import sec from '../../../../assets/second-skin.webp';

interface Film {
    id: number
    img: string
    title: string
    desc: string
    url: string
}

export const films:Film[] = [
    {
        id:1,
        img:marg,
        title:"Awareness Documentaries for Marginalized Rural Communities",
        desc:"Self-produced • 2017",
        url:""
    },
    {
        id:2,
        img:sec,
        title:"Second Skins - Chronicles of A Heated World",
        desc:"Self-produced • 2026",
        url:""
    },
]