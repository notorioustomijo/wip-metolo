interface ImgProps {
    src: string
    type: string
}

export default function Img({
    src,
    type
}: ImgProps) {
    
    type === 'round' 
        ? 'h-[80px] w-[5rem] rounded-[50%]'
        : type === 'rect' ? 'h-[7.5rem] w-[100%]' 
        : 'h-[15.625rem] w-[100%]'

    return(
        <img className={
            `
            ${type === 'round' ? 'h-[5rem] w-[5rem] rounded-[50%]' : type === 'rect' ? 'w-[100%]' : 'h-[15.625rem] w-[100%]'}
            `
        } 
            src={src}
        />
    )
}