import React, { useReducer, createContext } from 'react';

const initTodos = [
    {
        id: 1,
        text: "오전 10시 오퍼스 회의",
        done: true
    },
    {
        id: 2,
        text: "오후 10시 소마 멘토링",
        done: false
    },
    {
        id: 3,
        text: "오후 9시 프로그라피 회의",
        done: false
    },
    {
        id: 4,
        text: "오퍼스 작업 (오전 10시 ~ 오후 3시)",
        done: true
    },
    {
        id: 5,
        text: "코틀린으로 알고리즘 문제 풀기",
        done: false
    }
];


/* dispatch로 발생시킬 액션들
* CREATE
* TOGGLE
* REMOVE
*/
// reducer 함수 인자로 받은 action의 type에 따라 첫 번째 인자의 state를 수정하여 return 해줌
function TodoReducer(state, action) {
    switch (action.type) {
        case 'CREATE' :
            return state.concat(action.todo);
        case 'TOGGLE' :
            return state.map(
                todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
            )
        case 'REMOVE' :
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
    // 위에서 선언한 TodoReducer 함수를 React의 Reducer로 사용
    const [state, dispatch] = useReducer(todoReducer, initTodos);
    return children;
}