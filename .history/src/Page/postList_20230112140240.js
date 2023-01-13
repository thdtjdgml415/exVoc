import React, { useState } from 'react';
import CommonTable from '../components/table/CommonTable';
import CommonTableColumn from '../components/table/CommonTableColumn';
import CommonTableRow from '../components/table/CommonTableRow';
import { postList } from '../Data';

const postList = props => {
  const [ dataList, setDataList ] = useState([])
  return (
    <>
      <CommonTable headersName={['글번호', '제목', '등록일']}>
        <CommonTableRow>
          <CommonTableColumn></CommonTableColumn>
          <CommonTableColumn></CommonTableColumn>
          <CommonTableColumn></CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </>
  )
}


}

export default postList