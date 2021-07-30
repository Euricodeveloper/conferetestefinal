import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    height: 100vh;
    background-color: #FFF;

`;

export const Menu = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #17a2b8;
    width: 80px;
    flex-direction: column;

`;

export const PageBody = styled.div `
    display: flex;
    background-image: url('/assets/bg.png');
    background-size: cover;
    flex: 1;
    overflow-y: auto;

`;