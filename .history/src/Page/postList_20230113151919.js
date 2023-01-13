import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../components/table/CommonTable';
import CommonTableColumn from '../components/table/CommonTableColumn';
import CommonTableRow from '../components/table/CommonTableRow';
import CommonTableWriteBtn from '../components/table/CommonTableWriteBtn';
import { postList } from '../Data';

const PostList = props => {
  const [ dataList, setDataList ] = useState([])
  
  useEffect(()=> {
    setDataList(postList);
  }, [ ])
 
  return (
    <>
    <h1>게시판</h1>
      <CommonTable headersName={['글번호', '제목', '등록일']}>
       {
          dataList ? dataList.map((item, index) => {
            return(
              <CommonTableRow key={index}>
                <CommonTableColumn>{item.no}</CommonTableColumn>
                <CommonTableColumn>
                  <Link to={`/postView/${item.no}`}>{item.title}</Link></CommonTableColumn>
                <CommonTableColumn>{item.createDate}</CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
       } 
      <Link to={'/'}>
        <CommonTableWriteBtn/>
      </Link>
      </CommonTable>
    </>
  )
}

export default PostList