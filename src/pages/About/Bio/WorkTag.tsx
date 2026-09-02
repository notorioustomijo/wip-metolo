import paid from '../../../assets/coin.svg';
import volunteer from '../../../assets/heart.svg';
import fellow from '../../../assets/diploma.svg';
import requestImg from '../../../assets/request.svg';
import field from '../../../assets/helmet.svg';
import data from '../../../assets/scatgraph.svg';
import analytx from '../../../assets/analytx.svg';
import research from '../../../assets/reesearch.svg';
import consult from '../../../assets/cnsult.svg';
import write from '../../../assets/writn.svg';
import ops from '../../../assets/opratns.svg';
import edu from '../../../assets/educatn.svg';

interface TagProps {
    label: string
}

const tagStyles: Record<string, string> = {
    PAID: 'bg-[#EBFFF1] text-[#065B1F]',
    VOLUNTEER: 'bg-[#FFEBEB] text-[#904949]',
    FELLOWSHIP: 'bg-[#E1E1E1] text-[#3c3c3c]',
    FIELDWORK: 'bg-[#fcf5e8] text-[#7f5b10]',
    'UPON REQUEST': 'bg-[#FAFEE6] text-[#4B5903]',
    'DATA COLLECTION': 'bg-[#FFEBFE] text-[#6f0b6a]',
    ANALYTICS: 'bg-[#EBF7FF] text-[#16354a]',
    RESEARCH: 'bg-[#FFDFBC] text-[#834b07]',
    CONSULTANCY: 'bg-[#F6FFCC] text-[#475807]',
    WRITING: 'bg-[#F4F4FF] text-[#50508b]',
    OPERATIONS: 'bg-[#F4FFFE] text-[#03897C]',
    EDUCATION: 'bg-[#FAE99E] text-[#453A05]',
}

const tagImgs: Record<string, string> = {
    PAID: paid,
    VOLUNTEER: volunteer,
    FELLOWSHIP: fellow,
    'UPON REQUEST': requestImg,
    FIELDWORK: field,
    'DATA COLLECTION': data,
    ANALYTICS: analytx,
    RESEARCH: research,
    CONSULTANCY: consult,
    WRITING: write,
    OPERATIONS: ops,
    EDUCATION: edu
}


export default function WorkTag({
    label
}:TagProps) {
    
    const tagStyle = tagStyles[label] ?? '';

    const tagImg = tagImgs[label] ?? '';

    return (
        <div className={
            `
            px-2
            py-1
            rounded
            ${tagStyle}
            flex
            gap-2
            items-center
            `
        }>
            <img
                src={tagImg}
                className="
                    h-[12px]
                    w-[12px]
                "
                loading="lazy"
            />
            <p className='
                text-[0.75rem]
                font-body
                leading-normal
                font-semibold
            '>
                {label}
            </p>
        </div>
    )
}