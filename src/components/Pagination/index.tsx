import React from 'react'

import './style.css'

interface ModalPagination{
    goToNextPage:(()=> void) | null;
    goToPreviousPage:(()=> void) | null;
}

const Pagination: React.FC<ModalPagination> = ({ goToNextPage, goToPreviousPage }) =>{
    function handleGotoNextPage() {
        if (goToNextPage) goToNextPage();
        return
    }
    function handleGotoPreviousPage() {
        if (goToPreviousPage) goToPreviousPage();
        return
    }
    return(
        <>
        <div className="pagination">
        {goToPreviousPage && <button onClick={handleGotoPreviousPage} > <strong>Previous</strong> </button>}
        {goToNextPage && <button onClick={handleGotoNextPage} > <strong>Next</strong> </button>}
        </div>
        </>
    )
}

export default Pagination;