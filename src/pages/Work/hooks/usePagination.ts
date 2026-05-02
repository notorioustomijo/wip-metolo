import { useState } from 'react';

export function usePagination<T>(items: T[], pageSize: number = 10) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedItems = items.slice(startIndex, startIndex + pageSize);

    return {
        currentPage,
        totalPages,
        paginatedItems,
        setCurrentPage,
        showPagination: items.length > pageSize
    }
}