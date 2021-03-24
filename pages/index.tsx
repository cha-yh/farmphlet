import Head from 'next/head'
import { useDebugValue, useState } from 'react'
import styled from 'styled-components';
import FarmphletCard from '../components/FarmphletCard';
import dummyFarmphlets from '../data/dummyFarmphlets';
import styles from '../styles/Home.module.css'
function useStateWithLabel(initialValue, name) {
  const [value, setValue] = useState(initialValue);
  useDebugValue(`${name}: ${value}`);
  return [value, setValue];
}
export default function Home() {
  const [hello, setHello] = useStateWithLabel("world", "hello")
  return (
    <ContainerBlock>
      <Head>
        <title>Farmphlet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainBlock>
        <HeroSection>
          <div className="contents">
            <h1>Introduce Your Farm,<br />Connect with Producers</h1>
            <p>당신의 농장을 세상에 알리세요. 모든 것은 free입니다.</p>
            <button>Make a Farmphlet</button>
          </div>
          <img src="/farm_girl.svg" alt="" />
        </HeroSection>

        <InfoCardsSection>
          <h1>Make a Farmphlet</h1>
          <div>
            {[
              "기본적인 농장의 정보를 작성합니다.",
              "기본적인 정보외에 어필하고 싶은 정보를 rich editor를 통해 작성해주세요.",
              "당신의 농장에 관심있는 사람들이 연락할 수 있도록 연락처 정보를 입력해주세요."
            ].map(item => (
              <InfoCard key={item}>
                <div/>
                <p>{item}</p>
              </InfoCard>
            ))}
          </div>
        </InfoCardsSection>

        <FarmphletCardsSection>
          <h1>Farmphlets</h1>
          <div>
            {dummyFarmphlets.map(item => (
              <FarmphletCard farmphlet={item} key={item.id}/>
            ))}
          </div>
          <button>More Farmphlets</button>
        </FarmphletCardsSection>
      </MainBlock>
    </ContainerBlock>
  )
}

const ContainerBlock = styled.div`
  min-height: 100vh;
  max-width: 920px;
  margin: 0 auto;
`;


const MainBlock = styled.main`
  padding-top: 64px; // Nav height === 64px
  color: white;
  >section {
    padding: 80px 0;
  }
`;

const HeroSection = styled.section`
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
    >button {
      height: 46px;
      font-size: 16px;
      background: #4F7253;
      border: none;
      border-radius: 5px;
      color: white;
      padding: 0 25px 0 25px;
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

const InfoCardsSection = styled.section`
  
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

const InfoCard = styled.div`
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

const FarmphletCardsSection = styled.section`
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
      color: gray;
      border-color: gray;
    }
  }
`;