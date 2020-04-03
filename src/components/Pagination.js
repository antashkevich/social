import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);

  let pages = [];

  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    {/* <ul className="pagination">
      {
        pages.map(page =>
          <li className={props.currentPage === page  ? "pagination__active" : ""} key={page}>
            <button className="pagination__link" onClick={() => props.onPageChanged(page)}>{page}</button>
          </li>
        )
      }
    </ul> */}
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pagesCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      // onPageChange={(page) => props.onPageChanged(page)}
      onPageChange={props.onPageChanged}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'pagination__active'}
    />
  </div>
};

export default Pagination;
