import biogen from '../../../../assets/biogen.svg';
import artifact from '../../../../assets/artifacts.svg';

interface Collabo {
    id: number
    imgSrc: string
    title: string
    desc: string
    url: string
}

export const collabs:Collabo[] = [
    {
        id:1,
        imgSrc:biogen,
        title:"Bioverse New Gene-Ration - 2026",
        desc:"Art collaboration by Metolo Foyet & Chance Shakabwa",
        url:"https://www.instagram.com/p/DWBZuTuiKPB/?img_index=6&stkn=MThtcHc3dWswYjdoMA=="
    },
    {
        id:2,
        imgSrc:artifact,
        title:"Artefact Futuriste - 2026",
        desc:"Art collaboration by Metolo Foyet & Chance Shakabwa",
        url:""
    },
]