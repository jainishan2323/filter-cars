import React from 'react';
import Button, { BUTTON_TYPES } from 'components/Button';
import { PaginationWrapper } from 'pages/List/styles';

interface PaginationProps {
    currentPage?:number;
    totalPages?: number;
    updatePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage = 1, totalPages = 1, updatePage }) => {
    return (
        <PaginationWrapper>
            <Button
                type={BUTTON_TYPES.LINK}
                onClick={() => updatePage(1)}
                disabled={currentPage === 1}
            >
                First
            </Button>
            <Button
                type={BUTTON_TYPES.LINK}
                onClick={() => updatePage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </Button>
            <p>Page {currentPage} of {totalPages}</p>
            <Button
                type={BUTTON_TYPES.LINK}
                onClick={() => updatePage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </Button>
            <Button
                type={BUTTON_TYPES.LINK}
                onClick={() => updatePage(totalPages)}
                disabled={currentPage === totalPages}
            >Last</Button>
        </PaginationWrapper>
    )
}

export default React.memo(Pagination);
