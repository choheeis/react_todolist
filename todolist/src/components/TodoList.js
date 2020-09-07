import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListStyle = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto; // 리스트가 넘어가면 스크롤하기
`;

function TodoList() {
    return(
        <TodoListStyle>
            <TodoItem text="나 이거 해야해" done={true}></TodoItem>
            <TodoItem text="나 저거 해야해" done={true}></TodoItem>
            <TodoItem text="나 다 해야해" done={false}></TodoItem>
        </TodoListStyle>
    )
}

export default TodoList;