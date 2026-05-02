import cnn from '../../../../assets/cnn.svg';
import mondaq from '../../../../assets/mondaq-brexx.svg';
import jewanda from '../../../../assets/jewanda.svg';

interface mediaFeatureList {
    id: number
    imgSrc: string
    title: string
    yr: string
    url: string
}

export const media:mediaFeatureList[] = [
    {
        id:1,
        imgSrc:cnn,
        title:"CNN: Green Cards for College Graduates",
        yr:"2024",
        url:""
    },
    {
        id:2,
        imgSrc:mondaq,
        title:"Mondaq: Brexit ",
        yr:"2024",
        url:""
    },
    {
        id:3,
        imgSrc:jewanda,
        title:"Facebook/JeWanda feature",
        yr:"2024",
        url:""
    },
]