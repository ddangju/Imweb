# Imweb Project

<br>


## 프로젝트 기간



2022-05-10 ~ 2022-05-12

<br>


## 사용 기술


- OS: `Windows`
- 언어: `Html`, `Css`, `Javascript`


<br>

## 프로젝트 요약 



웹 페이지를 반응형으로 제작, 모바일 화면 작업, Dark Mode 기능 구현 


<br>

## 구현 상황

### 1. 상단 메뉴 고정과 하단 TOP버튼을 클릭시 최상단으로 이동


웹 브라우저의 scroll을 위치를 감지하여 `100`이상이면 TOP버튼이 노출 됩니다. <br>
TOP버튼을 클릭시 자연스럽게 최상단으로 이동합니다. 

![1](https://user-images.githubusercontent.com/68775082/167969547-e7cf6a18-a2cc-4cec-8f86-0d30a7d7e1f2.gif)

<br>

### 2. 카드들의 길이는 텍스트에 관계 없이 동일한 높이를 유지. 단, 카드 중 하나의 카드의 텍스트가 길어졌을 때 남은 두 카드도 높이가 가장 긴 축에 맞춰진다.



card container의 height에 `auto`를 주어 내부 텍스트 길이만큼 늘어납니다. 

![2](https://user-images.githubusercontent.com/68775082/167969886-15930ec8-4d21-4a3b-af24-a6c428c27fb2.gif)



<br>

### 3. 카드를 눌렀을 때 해당 상세 모달이 노출. 


해당 카드를 클릭 시 toggleModal함수를 호출합니다. modal container는 `display:none`상태에서 `display:block`스타일이 정의 되어있는 `visible`클래스를 `classList`에 추가합니다.

또 현재타겟의 이미지와 텍스트를 가져와서 document로 접근한 `modal`들의 정보에 할당해줍니다. 

![3](https://user-images.githubusercontent.com/68775082/167970253-04dd71d7-0b6d-46b4-81b6-2ae7eb63ec1e.gif)




<br>

### 4. 모바일 화면은 리스트를 클릭시 왼쪽에서 메뉴가 노출, 모달 사이즈 변경, DarkMode기능 추가

모바일 환경 중에 제일 작은 `iPhone SE` 까지 고려하여 반응형으로 제작하였습니다. 


![4](https://user-images.githubusercontent.com/68775082/167970533-8b304a5f-5091-421d-ae21-1685d9513bb0.gif)


<br>

### 5. 반응형으로 구현

`bootstrap media query breakpoints`를 참고하여 데스크탑, 모바일 반응형을 구현했습니다. 


![6](https://user-images.githubusercontent.com/68775082/167971815-58b5cf0f-c219-43b3-a9dc-a2faa9e5c158.gif)



<br>

### 6. 추가구현) 상단에 Dark mode 버튼 클릭 시 Dark mode로 전환

![5](https://user-images.githubusercontent.com/68775082/167970621-fb015992-b939-48af-acd3-7ef591116470.gif)




<br>

### 💻 프로젝트를 진행하면서 느낀점

프레임워크를 사용하지 않고 기본적인 HTML, CSS, Javascript에 대해 다시 공부하며 진행했던 귀중한 시간이었다.

Dark mode 구현을 진행하면서 Javascript 메서드에 대해 공부할 수 있었으며, 

반복되는 마크업, 함수, css에 대해 어떻게하면 재활용할 수 있을지에 대해 고민할 수 있었다.

어떤 점을 더욱 보완해야하는지 알 수 있는 좋은 경험이었고 좋은 기회를 주신 아임웹팀에게도 감사드린다.


