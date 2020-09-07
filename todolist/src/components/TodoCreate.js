import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from "react-icons/md";

const CirCleButtonStyle = styled.button`
    width: 80px;
    height: 80px;

    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);

    display: flex;
    align-items: center;
    justify-content: center;

    background: #38d9a9;

    font-size: 60px;
    color: #ffffff;
    border-radius: 50%;

    border: none;
    outline: none;

    // 커서 올렸을 시 밝아지게 함
    &:hover {
        background: #63e6be;
    }
    // 클릭시 어두어지게 함
    &:active {
        background: #20c997;
    }

    z-index: 5;
    cursor: pointer;

    // 인자 open 의 값이 true이면 
    ${props => props.open && css`
        background: #ff6b6b;
        &:hover {
            // 커서 호버 시 연한 빨간색
            background: #ff8787;
        }
        $:active {
            // 클릭 시 진한 빨간색
            background: #fa5252;
        }

        transform: translate(-50%, 50%) rotate(45deg);
    `}

    // 애니메이션
    transition: 0.125s all ease-in;
`;

const InsertFormLocationStyle = styled.div`
    width: 100%;

    position: absolute;
    bottom: 0;
    left: 0;
`;

const InsertFormBackgroundStyle = styled.div`
    padding: 32px;
    padding-bottom: 72px;

    background: #f8f9fa;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

const InsertInputStyle = styled.input`
    width: 100%;
    padding: 12px;

    border-radius: 4px;
    border: 1px solid #dee2e6;
    outline: none;
    box-sizing: border-box;

    font-size: 18px;
`;

function TodoCreate() {
    // TodoCreate는 상태 관리 필요 (입력창을 열기/닫기 두 가지 상태가 있으므로)
    const [open, setOpen] = useState(false); // 초기값 false
    // onToggle 이라는 함수는 open의 값을 반전시켜줌
    const onToggle = () => {
        setOpen(!open);
    }
    return(
        <>
            {open && 
                <InsertFormLocationStyle>
                    <InsertFormBackgroundStyle>
                        <InsertInputStyle placeholder="할 일을 입력 후, Enter를 눌러주세요" autoFocus />
                    </InsertFormBackgroundStyle>
                </InsertFormLocationStyle>
            }
            <CirCleButtonStyle onClick={onToggle} open={open}>
                <MdAdd />
            </CirCleButtonStyle>
        </>
    )
}

export default TodoCreate;