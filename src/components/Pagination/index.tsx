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
        {goToPreviousPage && <button onClick={handleGotoPreviousPage} > <h1>Previous</h1> </button>}
        {goToNextPage && <button onClick={handleGotoNextPage} > <h1>Next</h1> </button>}
        </div>
        </>
    )
}

export default Pagination;