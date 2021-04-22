# 항해하우스 (Front-end) // [Back-end : 깃허브][googlelink]
[googlelink]: https://github.com/HanghaeHouse/backend

<img width="30%" src="https://user-images.githubusercontent.com/79817983/115668927-ab4da300-a382-11eb-8a7c-9798acdcfcb8.gif"/>

## 🖥 프로젝트 소개
* 주제 : 관심사가 같은 인원이 모여서 채팅이 가능한 채팅방

## 📆 기간
* 2021년 4월 12일 ~ 2021년 4월 22일

## 👍 팀원
* 김병훈(Front-end)
* 임다빈(Front-end)
* 강상구(Back-end)
* 김준엽(Back-end)
* 홍종완(Back-end)


## 🔧 구현 기능 및 협업 툴(Front-end)
### [메인 페이지(채팅방)]
* sockjs-client, stompjs를 이용한 실시간 소켓통신

### [유저 프로필 페이지]
* 프로필 이미지 수정 구현
* 닉네임 변경 시 미작성 시 알람창
* 중복된 관심사 선택 불가능

### [회원가입/로그인 페이지]
* 로그인, 회원가입 기능
<br>
<img src='https://user-images.githubusercontent.com/77574867/115686853-967a0b00-a394-11eb-8683-a93308bd2d6c.png' width='600' height='450'>
    - 상태관리를 활용한 실시간 유효성 체크 (중복체크는 서버)
    - 리덕스 상태를 활용하여 한 페이지 내에서 로그인,회원가입 컴포넌트 교체
    - 로그인 시 서버로부터 받은 토큰을 쿠키에 저장


* 채팅방 조회
<br>
<img src='https://user-images.githubusercontent.com/77574867/115686860-97ab3800-a394-11eb-9f70-2aea471872f8.png' width='600' height='500'>
    - 채팅방 제목을 클릭하면 채팅방으로 입장
    - 모든 채팅방, 내 관심사와 일치하는 채팅방(추천), 관심사별 채팅방

* 채팅방 만들기
<br>
<img src='https://user-images.githubusercontent.com/77574867/115686848-9548de00-a394-11eb-8b83-06ae221045de.png' width='400' height='300'>
    - 우측 하단의 + Start a room 플로팅버튼을 클릭하면 모달 활성화
    - 채팅방 제목과 관심사를 하나 설정하여 생성

* 채팅
<br>
<img src='https://user-images.githubusercontent.com/77574867/115686865-98dc6500-a394-11eb-9606-1289e1566e2e.png' width='600' height='350'>
    - 채팅방 입장 또는 퇴장시 해당 유저의 입장 또는 퇴장 알림
    - 채팅방 입장시 해당 채팅방의 이전 메세지 기록 (알림 제외) 렌더링
    - type을 통해 알림과 채팅을 구분하여 렌더링
    - 웹소켓을 이용한 양방향 통신 활용
    - 입장 시 소켓 연결 및 구독, 퇴장 (다른페이지 이동) 또는 로그아웃 시 연결 및 구독 해제



 -----------------------------------
### 협업 툴
* Github, Slack, Gather


## 🎞 소개영상
### [유튜브 링크][youtube]
[youtube]: https://youtu.be/zD8-Xns-jrs
