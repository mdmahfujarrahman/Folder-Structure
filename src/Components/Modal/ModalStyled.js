import styled from "styled-components";

export const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    animation: fadeIn 1s linear;
`;
