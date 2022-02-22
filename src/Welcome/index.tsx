import React from 'react';
import {Text, View, Image} from 'react-native';

import Logo from '../assets/ic_logo.png';

import * as S from './styles';

const Welcome: React.FC = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <Text>dsdsds</Text>
        <Image source={Logo} />
      </S.LogoContainer>
    </S.Container>
  );
};

export default Welcome;
