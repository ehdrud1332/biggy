## 주요기능
-----------
- 로그인, 회원가입 및 비밀번호 찾기 페이지 구현
- 메인화면 구현 및 프로필화면 구현 그리고 프로필 사진 수정버튼 구현
- Horizontal, Vertical 이미지 슬라이드 페이지 구현
- Drawer 화면 구현

## 완성화면
-------------
<img src="https://user-images.githubusercontent.com/60862525/92760314-7e3c1980-f3cb-11ea-9531-639d82e6bf3f.gif" width="25%"><img src="https://user-images.githubusercontent.com/60862525/92760457-a0ce3280-f3cb-11ea-861a-012e0175f5c8.gif" width="25%"><img src="https://user-images.githubusercontent.com/60862525/92760449-9e6bd880-f3cb-11ea-9572-fe2fadb80fba.gif" width="25%">

## 완성 화면 레이아웃
--------------
<img src="https://user-images.githubusercontent.com/60862525/92760674-d7a44880-f3cb-11ea-8605-71536e9a01ec.png" width="25%"><img src="https://user-images.githubusercontent.com/60862525/92760680-d96e0c00-f3cb-11ea-85d9-2aeb615b538c.png" width="25%"><img src="https://user-images.githubusercontent.com/60862525/92760690-db37cf80-f3cb-11ea-84e7-fb346dcb8a25.png" width="25%"><img src="https://user-images.githubusercontent.com/60862525/92761112-4aadbf00-f3cc-11ea-959c-5c0b7d4e9fbd.png" width="25%"><img src="https://user-images.githubusercontent.com/60862525/92760818-015d6f80-f3cc-11ea-914f-f7eb2235bc06.png" width="25%"><img src="https://user-images.githubusercontent.com/60862525/92760821-03273300-f3cc-11ea-8e62-12fffff67a79.png" width="25%"><img src="https://user-images.githubusercontent.com/60862525/92760827-04586000-f3cc-11ea-81fa-d2cf996d02df.png" width="25%">

## 활용한 기술
-------------
- nodeJS, react-native
- expo-linear-gradient, react-native-animatable, @expo/vector-icons
- DrawerScreen, Vertical&HorizontalCardSwiper, HooK(useState, useEffect

## Study Note
------------
**1. Hook을 이용한 테마 색깔 변경 스위치 구현**
- useState(Hook)을 이용한 toggleSwitch 상태값 변경
- ToggleSwitch 클릭시 상태값 변경되는 버튼 구현

<img width="576" alt="HookDarkTheme" src="https://user-images.githubusercontent.com/60862525/92763482-8f3a5a00-f3ce-11ea-91ef-6c3533110801.png">
<img src="https://user-images.githubusercontent.com/60862525/92764824-bf362d00-f3cf-11ea-9d6d-9ee4eb74c4e2.gif">

**2. Button 클릭시 상태값 변경으로 인한 Button Style Change**
- Button 클릭시 상태값 변경으로 인한 BookMark Style Change
- Button 클릭시 true OR false 상태값 반전

<img src="https://user-images.githubusercontent.com/60862525/92765119-06bcb900-f3d0-11ea-94c1-6a954e2727af.png" width="420">
<img src="https://user-images.githubusercontent.com/60862525/92766141-ea6d4c00-f3d0-11ea-8454-01a61e4f6702.gif" width="30%">

**3. Button 클릭시 카메라 앨범으로 이동 구현**
- useEffect(Hook)을 이용한 CAMERA_ROLL 승인 구현
- Profile 화면 접근시 비동기 방식으로 useEffect 실행
- Type & Size 규정

<img width="550" src="https://user-images.githubusercontent.com/60862525/92767349-fc032380-f3d1-11ea-96a4-10e17b539911.png">

## To do List
------------------------
- [ ] Backend 연결
- [ ] Hook 숙련되게 연습
- [ ] API연결





