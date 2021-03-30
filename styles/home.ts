import styled from "styled-components";

export const ContainerBlock = styled.div`
  min-height: 100vh;
  max-width: 920px;
  margin: 0 auto;
`;


export const MainBlock = styled.main`
  padding-top: 64px; // Nav height === 64px
  color: white;
  >section {
    padding: 80px 0;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  
  >.contents {
    color: white;
    >h1 {
      font-size: 36px;
      font-weight: 700;
    }
    >p {
      margin-top: 20px;
      margin-bottom: 40px;
    }
    >a {
      /* height: 46px; */
      font-size: 16px;
      background: #4F7253;
      border: none;
      border-radius: 5px;
      color: white;
      padding: 10px 25px 10px 25px;
      cursor: pointer;
      &:hover {
        background: #466349;
      }
    }
  }

  >img {
    height: 300px;
  }
`;

export const InfoCardsSection = styled.section`
  
  >h1 {
    font-size: 36px;
    text-align: center;
  }

  >div {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }
`;

export const InfoCard = styled.div`
  width: 230px;
  >div { //temp rect
    width: 230px;
    height: 150px;
    background: gray;
  }
  >p {
    font-size: 14px;
    color: white;
    margin-top: 20px;
  }
`;

export const FarmphletCardsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  >h1 {
    font-size: 36px;
    text-align: center;
  }

  >div {
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
  }

  >button {
    height: 45px;
    padding: 0 12px;
    border: 1px solid white;
    color: white;
    background: none;
    cursor: pointer;
    &:hover {
      color: #00ffd9;
      border-color: #00ffd9;
    }
  }
`;