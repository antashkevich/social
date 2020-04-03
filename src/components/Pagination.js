import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);

  return <div>
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'pagination__break'}
      breakLinkClassName={'pagination__break-linl'}
      pageCount={pagesCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={props.onPageChanged}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      pageLinkClassName={'pagination__link'}
      activeLinkClassName={'pagination__link_active'}
      pageClassName={'pagination__item'}
      activeClassName={'pagination__item_active'}
      previousClassName={'pagination__prev'}
      nextClassName={'pagination__next'}
      previousLinkClassName={'pagination__prev-link'}
      nextLinkClassName={'pagination__next-link'}
      disabledClassName={'pagination__link_disabled'}
    />
  </div>
};

export default Pagination;
