//packages block
import { FC } from 'react';
//component block
import { PaginationButton, PaginationContainer } from '.';
//others block
import { PaginationPropsType } from '../interface-types';

const Pagination: FC<PaginationPropsType> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <PaginationContainer>
      {pageNumbers.map((pageNumber) => (
        <PaginationButton
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </PaginationButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
