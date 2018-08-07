import React from 'react';
import Link from 'next/link';
import { LogoImg, HomeView, Button, StartBtn, ButtonWrapper, StyledLink, Balance } from './style';
import paths from '../../constants/paths';

const Profile = () => (
  <React.Fragment>
    <Balance>
      <p>User Balance</p>
      <p>3500$ / 0.5BTC</p>
    </Balance>
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
  </React.Fragment>
);

export default Profile;
