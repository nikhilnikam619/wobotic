import "./Pagination.css"

export default  function Pagination({ currentPage, totalPages, setCurrentPage,itemperpage }) {
  return (
    <div className="pagination">
        <select name="" id=""><option value="">{itemperpage}</option></select>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(p => p - 1)}
      >
        Prev
      </button>
        
      <span>
        {currentPage} / {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(p => p + 1)}
      >
        Next
      </button>
    </div>
  );
}

