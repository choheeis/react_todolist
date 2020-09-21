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
    
* react-router-dom 설치하기 (route와 link 관련 라이브러리)

    `yarn add react-router-dom`

<br>

## 👩🏻‍💻 Coding Convension

* Add Codes : 코드를 추가했을 경우

* Refactor Codes : 기존의 코드를 수정했을 경우

* Fix Bugs : 버그를 고쳤을 경우

* Update Readme : 리드미 파일을 수정했을 경우

<br>

## 👩🏻‍💻 프로젝트 구조

* __src/components 폴더__

    UI 컴포넌트들을 저장하고 있는 폴더

    * TodoTemplate.js : 투두 리스트의 가장 아래에 깔리는 흰색 박스 UI 컴포넌트

    * TodoHead.js : 투두 리스트의 상단에 있는 오늘 날짜, 요일, 남은 할 일 개수를 포함하는 UI 컴포넌트

    * TodoList.js : 투두 리스트의 각 아이템이 포함될 영역 UI 컴포넌트

    * TodoItem.js : 투두 아이템 UI 컴포넌트

    * TodoCreate.js : 투두 아이템 생성하는 부분 UI 컴포넌트

    * TodoContext.js : 투두리스트 기능들이 구현될 수 있도록 상태 업데이트를 하는 부분

<br>

## 👩🏻‍💻 React에서 사용되는 것들

* __useState라는 Hook을 통해 동적(사용자의 입력에 따라 바뀌는 것)으로 상태 업데이트하기__

    react의 가장 큰 장점이라고 할 수 있는 상태 업데이트! 
    
    상태가 변경될 때마다 감지하여 UI를 리렌더링한다.

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

* __context API 사용하기__

    context API는 약간 전역변수 느낌으로 사용한다고 생각하면 된다.

    ~~~javascript
    // 1. react로부터 createContext, useContext 함수 import 하기
    import { createContext, useContext } from 'react';

    // 2. context를 사용하기 위해 선언하기(createContext 함수 사용)
    const MyContext = createContext('defaultValue');

    // 3. 선언한 context 사용하기(useContext 함수 사용)
    const test = useContext(MyContext);
    ~~~

    __주석 3 )__ test 변수에는 MyContext 에서 저장하고 있는 문자열 defaultValue가 저장된다.

    이 defaultValue 라는 값을 동적으로 변경하고 싶다면 Context 안에 존재하는 Provider 이라는 컴포넌트를 사용해야 한다.

    아래 코드는 위 코드와 이어지는 코드이다.

    ~~~javascript
    import { createContext, useContext } from 'react';

    const MyContext = createContext('defaultValue');

    const test = useContext(MyContext);

    function ContextExample() {
        return(
            // test 변수에 Kimchohee가 저장됨
            <MyContext.Provider value="Kimchohee"></MyContext.Provider>
        )
    }
    ~~~

    <br>

* __useEffect라는 Hook을 사용하여 컴포넌트가 화면에 나타날 시점과 사라지는 시점에 작업하기__

    ~~~javascript
    // 1. react로 부터 useEffect import 하기
    import React, { useEffect } from 'react';

    // 2. Test라는 컴포넌트 함수 작성하기
    function Test() {
        // 3. useEffect 함수 작성하기
        useEffect(() => {
            console.log('컴포넌트가 화면에 나타남');
            
            return () => {
                console.log('컴포넌트가 화면에서 사라짐');
            }
        }, [])

        return(
            <></>
        )
    }

    export default Test;
    ~~~

    __주석 3)__ useEffect 함수는 2개의 인자를 가진다. 첫 번째 인자에는 useEffect 함수가 실행될 때 해줘야 하는 작업을 함수 형태로 작성해주면 된다.

    두 번째 인자에는 useEffect 함수가 실행될 때 의존되는 값들을 적어주는 곳인데 의존되는 값이 없을 때는 빈 배열인 []를 작성해준다.

    useEffect의 return 값으로는 컴포넌트가 화면에서 사라질 때 실행될 작업을 함수 형태로 작성해주면 된다.

<br>

## 👩🏻‍💻 프로젝트 결과

![todolist_gif](https://user-images.githubusercontent.com/31889335/92374094-3fdbfb80-f13a-11ea-9589-ba3ef584a525.gif)

<br>

## 👩🏻‍💻React에서 API 호출하기 

이 투두리스트 프로젝트에서는 서버 호출하는 부분이 없지만 다른 프로젝트에서 사용할 것이므로 공부해 둠.

* __Restful API를 호출할 때 사용하는 라이브러리인 axios를 설치한다.__

    `yarn add axios`

* __Restful API 호출을 연습해볼 API 제공 사이트__

    https://jsonplaceholder.typicode.com/ 의 https://jsonplaceholder.typicode.com/users API를 사용해보자.

* __컴포넌트에서 API 요청하기__

    컴포넌트에서 API를 요청하는 가장 기본적인 방법은 React의 __useState__ 와 __useEffect__ 를 사용하는 것이다.

* __API 호출시 관리해야 하는 3가지 상태__

    1. 요청의 결과

    2. 로딩 상태

    3. 에러

* __API 호출하기 위한 준비 상태__

    ~~~javascript
    // 1. react에서 useState, useEffect를 import 한다.
    import React, { useState, useEffect } from 'react';
    // 2. 설치한 axios 라이브러리를 import 한다.
    import axios from 'axios';

    function Users() {
        // 3. API 호출시 관리해야 하는 3가지 상태를 useState를 사용해 선언한다.
        const [users, setUsers] = useState(null);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

        // 4. axios 를 사용한 api 호출 코드가 포함될 async 함수를 생성한다.
        const fetchUsers = async() => {
                try {
                    // 5. API 호출 전 상태들 초기화
                    setUsers(null);
                    setError(null);
                    setLoading(true);

                    // 6. axios를 사용하여 API 호출 후, 받아온 응답 값(response.data)로 users 상태를 업데이트한다.
                    const response = await axios.get(
                        'https://jsonplaceholder.typicode.com/users'
                    );
                    setUsers(response.data);
                } catch(e) {
                    // 7. error 상태를 발생한 에러 내용으로 업데이트한다.
                    console.log(e.response.status);
                    setError(e);
                }
                // 8. 서버 호출이 완료되면 loading 상태 값을 false로 업데이트한다.
                setLoading(false);
            }

        // 9. useEffect 함수를 작성하여 컴포넌트가 화면에 나타날 때 API 호출을 실행한다.
        useEffect(() => {
            // 10. 위에서 만든 fetchUsers 함수를 실행한다.
            fetchUsers();
        }, []);

        // 11. 3가지 상태에 따른 return 값 작성하기
        if (loading) return <div>로딩중</div>
        if (error) return <div>에러 발생함</div>
        if (!users) return <div>응답값이 없어요</div>

        // 12. 응답 받은 데이터로 보여주고 싶은 UI 컴포넌트에 배치하기
        return (
            <ul>
                {users.map(user => (
                    <li key={users.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
        )
    }

    export default Users;
    ~~~

    __주석 4)__ fetUsers(예시) 라는 async 함수를 만들고, 그 안에 try catch 문을 작성한다.

    try 블럭 안에서 axios로 API 호출을 하고, catch 블럭 안에서 예외 처리를 해준다.

    __주석 5)__ try 블럭 안에서 axios로 API 호출을 하기 전에 관리해야 할 3가지 상태를 초기화 해준다.

    결과 값(users)과 에러 값(error)은 null로 초기화 해주고, 로딩 상태를 API 호출이 시작되었음을 나타내는 true로 초기화 해준다.

    __주석 6)__ axios 를 사용해 해당 api를 호출하고 결과값 상태인 users에 응답받은 결과값인 response.data로 업데이트한다.
