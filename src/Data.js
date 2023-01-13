const postList = [
    {
        "no": 1,
        "title": "첫번째 게시글입니다.",
        "content": "첫번째 게시글 내용입니다.",
        "createDate": "2023-01-12"
      },
      {
        "no": 2,
        "title": "두번째 게시글입니다.",
        "content": "두번째 게시글 내용입니다.",
        "createDate": "2023-01-12"
      },
      {
        "no": 3,
        "title": "세번째 게시글입니다.",
        "content": "세번째 게시글 내용입니다.",
        "createDate": "2023-01-12"
      },
      {
        "no": 4,
        "title": "네번째 게시글입니다.",
        "content": "네번째 게시글 내용입니다.",
        "createDate": "2023-01-12"
      },
      {
        "no": 5,
        "title": "다섯번째 게시글입니다.",
        "content": "다섯번째 게시글 내용입니다.",
        "createDate": "2023-01-12"
      },
      {
        "no": 6,
        "title": "다섯번째 게시글입니다.",
        "content": "다섯번째 게시글 내용입니다.",
        "createDate": "2023-01-12"
      }
]

const getPostByNo = no => {

    const array = postList.filter(x=>x.no===no);
    if(array.length == 1) {
        return array[1];
    }
    return null;
}

export {
    postList,
    getPostByNo
};