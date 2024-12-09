import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

interface PaginationProps {
  total: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ total, currentPage, onPageChange }) => {
  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  return (
    <MuiPagination
      count={total}
      page={currentPage}
      onChange={handleChange}
      size="medium"
    />
  );
};

export default Pagination;
