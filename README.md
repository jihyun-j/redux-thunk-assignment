# redux-thunk-assignment

# Redux toolkit과 thunk를 이용해 앨범평 남기는 기능

1. 로그인과 회원가입
![Screenshot 2023-12-04 at 10 54 57 AM](https://github.com/jihyun-j/redux-thunk-assignment/assets/80092348/d61999e3-9906-4d95-b4ed-211c07b329a9)

2. 홈 화면
   - 로그인 후 현재 사용자의 닉네임을 자동으로 삽입
   - 앨범 이름 클릭 시 해당 앨범에 대한 평가만 나열
   - 앨범에 대한 평가가 하나도 없을 경우를 표시
   - json-server를 이용해 앨범평이 추가되면 json-server에 사용자의 닉네임, 아이디, 내용 등이 저장됨
![Screenshot 2023-12-04 at 10 55 30 AM](https://github.com/jihyun-j/redux-thunk-assignment/assets/80092348/0c30c669-f84d-4ff7-8bf0-d24bc790ee24)

3. 현재 사용자의 프로파일에서 프로필 사진과 닉네임 수정
   - 사진을 클릭하면 파일 선택 팝업 창 보여짐
   - 수정하기를 클릭하면 닉네임을 수정할 수 있고, 수정 취소/완료 버튼 추가
   - ⚠️ 프로필 사진 저장 기능과 닉네임이 수정되었을 때 리렌더링 기능 필요
![Screenshot 2023-12-04 at 10 57 16 AM](https://github.com/jihyun-j/redux-thunk-assignment/assets/80092348/689c7b78-1778-4989-9c7d-aafbb98c4959)

4. 앨범평에 대한 디테일 페이지
  - 선택한 앨범평의 id와 json-server에 저장된 id가 같은 경우의 내용을 가져 옴
  - 해당 앨범평 삭제 
  - ⚠️ 해당 앨범평 수정 기능 필요
![Screenshot 2023-12-04 at 10 57 00 AM](https://github.com/jihyun-j/redux-thunk-assignment/assets/80092348/b4684dec-e1ba-48f6-950a-5cf652723a9c)
