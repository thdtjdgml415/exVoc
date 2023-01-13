import React from 'react';
import CommonTable from '../components/table/CommonTable';
import CommonTableColumn from '../components/table/CommonTableColumn';
import CommonTableRow from '../components/table/CommonTableRow';

const postList = (porps) => {
  return (
    <>
      <CommonTable>
        <CommonTableRow>
          <CommonTableColumn>1</CommonTableColumn>
          <CommonTableColumn>첫번째 게시글입니다.</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </>
  )
}

export default postList