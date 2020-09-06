import React from 'react';
import styled from 'styled-components';

const TodoHeadStyle = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;

    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;

        font-size: 36px;
        color: #343a40;
    }

    .day {
        margin-top: 4px;

        color: #868e96;
        font-size: 21px;
    }

    .task-left-count {
        margin-top: 40px;

        color: #20c997;
        font-size: 18px;
        font-weight: bold;
    }
`;

function TodoHead() {
    return(
        <TodoHeadStyle>
            <h1>2020년 9월 6일</h1>
            <div className="day">일요일</div>
            <div className="task-left-count">할 일 2개 남음</div>
        </TodoHeadStyle>
    )
}

export default TodoHead;