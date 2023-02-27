import styled from "styled-components";

export const SideBarStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    background-color: var(--secondary-color);

    hr {
        border: 1px solid var(--black-color);
    }
`;

export const Logo = styled.h1`
    color: var(--white-color);
    font-size: 2rem;
    padding: 1rem 0;
    text-align: center;
    margin-bottom: 10px;
    span {
        color: var(--primary-color);
    }
`;

export const FOLDER = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    border-radius: 5px;
    background-color: var(--primary-color);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &.childFolder {
        margin-left: 25px !important;
    }
    &.inerChildFolder {
        margin-left: 45px !important;
    }
    &.inerChildMoreClass {
        margin-left: 65px !important;
    }

    .arrowIcon {
        margin-right: 0.5rem;
        width: 13px;
        height: 13px;
    }
    .rootCraete {
        margin-right: 0px;
    }
    .childFolderImg {
        margin-right: 0.5rem;
        width: 17px;
        height: 17px;
    }
    img {
        width: 30px;
        height: 30px;
        margin-right: 1rem;
    }

    p {
        margin: 0;
        color: var(--secondary-color);
        font-weight: 600;
    }

    &:hover {
        /* background-color: var(--primary-color); */
        color: var(--white-color);
    }
`;
