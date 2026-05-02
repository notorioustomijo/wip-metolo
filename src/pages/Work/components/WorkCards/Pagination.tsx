interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange
}:PaginationProps) {
    return(
        <div className="
            bg-white
            [box_shadow:0_4px_11px_rgba(0,0,0,0.15)]
            rounded-[1rem]
            flex
            items-center
            justify-center
            gap-[5rem]
            p-[1.5rem]
        ">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="
                    font-heading
                    font-bold
                    text-[#20422a]
                    text-[1rem]
                    leading-normal
                    underline
                    cursor-pointer
                    disabled:opacity-30
                    disabled:cursor-not-allowed
                "
            >
                ← Previous
            </button>

            <div className="
                flex
                gap-[0.75rem]
                items-center
            ">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`
                        w-[3.125rem]     
                        h-[3.125rem]
                        rounded-[50%]
                        font-body
                        text-[1rem]
                        leading-normal
                        ${currentPage === page 
                            ? 'bg-[#20422a] text-[#F8F5EF] font-semibold border-[3px] border-[#43664D]'
                            : 'bg-white text-[#535250] font-medium hover:border hover:border-[#20422a]'
                        }
                        `}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="
                    font-heading
                    font-bold
                    text-[#20422a]
                    text-[1rem]
                    leading-normal
                    underline
                    cursor-pointer
                    disabled:opacity-30
                    disabled:cursor-not-allowed
                "
            >
                Next →
            </button>
        </div>
    )
}