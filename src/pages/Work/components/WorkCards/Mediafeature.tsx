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
        url:"https://www.cnn.com/2024/12/06/politics/green-cards-college-graduates-trump-cec/index.html"
    },
    {
        id:2,
        imgSrc:mondaq,
        title:"Mondaq: Brexit ",
        yr:"2024",
        url:"https://www.mondaq.com/uk/constitutional-administrative-law/504510/things-may-fall-apartbut-brexit-what-next-for-africa"
    },
    {
        id:3,
        imgSrc:jewanda,
        title:"Facebook/JeWanda feature",
        yr:"2024",
        url:"https://web.facebook.com/JeWanda/posts/10151867138811600?_rdc=1&_rdr#"
    },
]