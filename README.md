# Todo List (using react library)
오퍼스카웃 웹 프로젝트를 위한 토이 프로젝트 '투두리스트 만들기'

이 프로젝트를 하며 css와 javascript를 깊이 공부하지는 않을 예정이다. 투두 리스트를 만드는데 필요한 css, javascript, react 관련 개념들만 패스트 캠퍼스 강의를 통해 공부하여 전반적인 웹 프로젝트 수행 방식을 익히는데 집중할 것이다.

## 👩🏻‍💻 Commands

* 새 프로젝트 만들기

    `npx create-react-app 프로젝트이름(소문자)`

* react server 실행시키기

    `yarn start`

* styled components library 설치하기 (css 관련 라이브러리)

    `yarn add styled-components`

    https://react-icons.github.io/ --> 이 라이브러리에서 사용할 수 있는 icon들을 볼 수 있는 사이트

* react-icons library 설치하기 (icon 관련 라이브러리)

    `yarn add react-icons`

<br>

## 👩🏻‍💻 React에서 사용되는 것들

* __useState라는 Hook을 통해 동적(사용자의 입력에 따라 바뀌는 것)으로 상태 업데이트하기__

    ~~~javascript
    // 1. useState 컴포넌트를 React 로 부터 import 하기
    import React, { useState } from 'react';

    // 2. useState 사용을 위해 선언하기
    const [state, setState] = useState(0);

    // 3. 상태 업데이트 하기 (사용자가 무엇인가 클릭하여 onClick 함수가 호출될 경우에 setState()로 상태 값을 바꿔주는 예시)
    const onClick = () => {
        // 기존의 상태 변수에 1을 더한 값으로 상태 변수의 값을 바꿈
        setState(state => state + 1);
    }
    ~~~

    __주석 2)__ 배열의 첫 번째 인자 state는 사용자의 입력에 따라서 관리할(변경할) 상태 변수이다. 두 번째 인자 setState는 state(상태)를 바꿔주는 함수이다. useState()의 괄호 안의 값은 state 변수의 초기값이다. 즉, 상태의 초기값이다.

    <br>

* __useReducer라는 Hook을 통해 동적으로 상태 관리하기__

    useState와의 차이점 : useState는 setState라는 함수에서 setState(state => state + 1) 와 같이 직접 상태를 업데이트 해주는 방식이지만 useReducer은 dispatch라는 것과 action이라는 것을 통해 상태를 업데이트 해준다.

    useReducer의 장점 : 컴포넌트 상태 업데이트 로직을 또 다른 함수로 만들어야 하기 때문에 컴포넌트 밖으로 업데이트 로직을 분리시킬 수 있다.

    ~~~javascript
    // 1. useReducer 컴포넌트를 react로부터 import 하기
    import React, { useReducer } from 'react';

    // 2. 컴포넌트 상태 업데이트 로직인 reducer 함수 만들기
    function MyReducer(state, action) {
        switch (action.type) {
            case 'INCREASE' :
                return state + 1;
            case 'DECREASE' :
                return state - 1;
            default :
                throw new Error('Unhandled action');
        }
    }

    // 3. reducer를 사용하기 위해 선언하기
    const [state, dispatch] = useReducer(MyReducer, 0);

    // 4. 상태 업데이트 하기 (사용자가 무엇인가 클릭하여 onClick 함수가 호출될 경우에 MyReducer대로 상태 값을 바꿔주는 예시)
    const onClick = () => {
        dispatch({
            type: 'INCREAMENT'
        })
    }
    ~~~

    __주석 2 )__ reducer 함수의 첫 번째 인자에는 업데이트에 사용될 상태 변수를 넣고, 두 번째 인자에는 상태 업데이트 조건이 될 action 변수를 넣는다.

    함수 안에서 상태 업데이트 조건을 switch 문으로 판별해준다. switch 문의 조건문은 action.type으로 한다.

    switch 문 안에서는 예시로 INCREASE라는 이름의 action이 들어오면 state 변수에 1을 더하는 식을 작성해주었다.
 
    __주석 3 )__ 배열의 첫 번째 인자는 상태 업데이트에 사용될 상태 변수 state를 넣어주고 두 번째 인자에는 다음 단계에서 action을 발생시킬 dispatch라는 함수를 넣어준다. 
    
    useReducer 함수의 첫 번째 인자에는 2단계에서 만든 reducer 함수를 넣어주고, 두 번째 인자에는 상태 값의 초기값을 넣어준다.

    __주석 4 )__ dispatch 라는 함수 안의 type에 MyReducer 에서 상태 업데이트 조건으로 작성했던 조건을 적어준다.

<br>

## 👩🏻‍💻 프로젝트 구조

* __components 폴더__

    UI 컴포넌트들을 저장하고 있는 폴더

    * TodoTemplate.js : 투두 리스트의 가장 아래에 깔리는 흰색 박스 UI 컴포넌트

    * TodoHead.js : 투두 리스트의 상단에 있는 오늘 날짜, 요일, 남은 할 일 개수를 포함하는 UI 컴포넌트

    * TodoList.js : 투두 리스트의 각 아이템이 포함될 영역 UI 컴포넌트

<br>

## 👩🏻‍💻 Coding Convension

* Add Codes : 코드를 추가했을 경우

* Refactor Codes : 기존의 코드를 수정했을 경우

* Fix Bugs : 버그를 고쳤을 경우

* Update Readme : 리드미 파일을 수정했을 경우

