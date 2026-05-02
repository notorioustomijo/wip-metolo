import nfja from '../../../../assets/nfja.svg';
import cons from '../../../../assets/cons-letters.svg';
import socie from '../../../../assets/society-natresources.svg';
import asq from '../../../../assets/asq.svg';

interface Editorial {
    id: number
    title: string
    yr: string
    imgSrc: string
    imgType: string
    width: number
}

export const editorials:Editorial[] = [
    {
        id:1,
        title:"Editor | New Florida Journal of Anthropology (NFJA)",
        yr:"2025 - 2026",
        imgSrc:nfja,
        imgType:"round",
        width:25
    },
    {
        id:2,
        title:"Ad Hoc Reviewer | Conservation Letters",
        yr:"2024",
        imgSrc:cons,
        imgType:"round",
        width:25
    },
    {
        id:3,
        title:"Ad Hoc Reviewer | Society & Natural Resources",
        yr:"2024",
        imgSrc:socie,
        imgType:"round",
        width:25
    },
    {
        id:4,
        title:"Ad Hoc Reviewer | African Studies Quarterly",
        yr:"2024",
        imgSrc:asq,
        imgType:"round",
        width:25
    },
]