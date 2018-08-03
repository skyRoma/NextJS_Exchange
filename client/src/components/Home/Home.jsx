import React from 'react';
import Link from 'next/link';
import { LogoImg, HomeView, Button, StartBtn, ButtonWrapper, StyledLink } from './style';
import paths from '../../constants/paths';

const Home = () => (
  <HomeView>
    <LogoImg />
    <ButtonWrapper>
      <Link href={paths.login} prefetch>
        <StyledLink>
          <Button>Sign In</Button>
        </StyledLink>
      </Link>
      <Link href={paths.join} prefetch>
        <StyledLink>
          <Button>Sign Up</Button>
        </StyledLink>
      </Link>
    </ButtonWrapper>
    <Link href={paths.counterApi} prefetch>
      <StyledLink>
        <StartBtn>Start</StartBtn>
      </StyledLink>
    </Link>
  </HomeView>
);

export default Home;
