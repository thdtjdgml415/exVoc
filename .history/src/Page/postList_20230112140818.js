import React, { useEffect, useState } from 'react';
import CommonTable from '../components/table/CommonTable';
import CommonTableColumn from '../components/table/CommonTableColumn';
import CommonTableRow from '../components/table/CommonTableRow';
import { postList } from '../Data';

const postList = props => {
  const [ dataList, setDataList ] = useState([])
  
  useEffect(()=> {
    setDataList(postList);
  }, [])
 
  return (
    <>
      <CommonTable headersName={['글번호', '제목', '등록일']}>
       {
          dataList ? dataList.map((item, index) => {
            return(
          <CommonTableRow key={index}>
            <CommonTableColumn>{item.no}</CommonTableColumn>
            <CommonTableColumn>{item.title}</CommonTableColumn>
            <CommonTableColumn></CommonTableColumn>
          </CommonTableRow>
            )
          }) : ''
       } 
      </CommonTable>
    </>
  )
}

export default postList