import Head from 'next/head'
import { useDebugValue, useState } from 'react'
import styled from 'styled-components';
import FarmphletCard from '../components/FarmphletCard';
import dummyFarmphlets from '../data/dummyFarmphlets';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { ContainerBlock, FarmphletCardsSection, HeroSection, InfoCard, InfoCardsSection, MainBlock } from '../styles/home';

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
            <Link href="/register-farmphlet?phase=1">
              Make a Farmphlet
            </Link>
            {/* <button></button> */}
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

