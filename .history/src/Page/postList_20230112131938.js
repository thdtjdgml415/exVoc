import React from 'react';
import CommonTable from '../components/table/CommonTable';
import CommonTableColumn from '../components/table/CommonTableColumn';
import CommonTableRow from '../components/table/CommonTableRow';

const postList = ({porps}) => {
  return (
    <>
      <CommonTable headersName={['글번호', '제목', '등록일']}>
        <CommonTableRow>
          <CommonTableColumn>1</CommonTableColumn>
          <CommonTableColumn>첫번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2023-01-12</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>2</CommonTableColumn>
          <CommonTableColumn>두번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2023-01-12</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>3</CommonTableColumn>
          <CommonTableColumn>세번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2023-01-12</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>4</CommonTableColumn>
          <CommonTableColumn>네번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2023-01-12</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>5</CommonTableColumn>
          <CommonTableColumn>다섯번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2023-01-12</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </>
  )
}

export default postList