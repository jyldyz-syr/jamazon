import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationComponent = () => {
  return (
    <Pagination className="d-flex justify-content-center pt-5 pb-5">
      <Pagination.First className="pl-2">First</Pagination.First>

      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Next />

      <Pagination.Last className="pr-2"> Last</Pagination.Last>
    </Pagination>
  );
};

export default PaginationComponent;
