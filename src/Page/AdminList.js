import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonTable from "../components/table/CommonTable";
import CommonTableColumn from "../components/table/CommonTableColumn";
import CommonTableRow from "../components/table/CommonTableRow";
import { postList } from "../Data";

const AdminList = (props) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(postList);
  }, []);

  return (
    <>
      <h1>관리자 게시판</h1>
      <div className="PostList-Wrap">
        <CommonTable headersName={["글번호", "제목", "등록일"]}>
          {dataList
            ? dataList.map((item, index) => {
                return (
                  <CommonTableRow key={index}>
                    <CommonTableColumn>{item.no}</CommonTableColumn>
                    <CommonTableColumn>
                      <Link to={`/AdminView/${item.no}`}>{item.title}</Link>
                    </CommonTableColumn>
                    <CommonTableColumn>{item.createDate}</CommonTableColumn>
                  </CommonTableRow>
                );
              })
            : ""}
        </CommonTable>
      </div>
    </>
  );
};

export default AdminList;
