import React from 'react';
import {Image} from 'react-native';

import Logo from '../assets/ic_logo.png';

import Button from '../../components/Button/index';

import * as S from './styles';
import defaultTheme from '../../theme/index';

const Welcome: React.FC = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <Image source={Logo} />
      </S.LogoContainer>
      <S.ButtonsContainer>
        <Button
          textStyle={{color: defaultTheme.colors.white}}
          containerStyle={{
            borderRadius: 20,
            backgroundColor: defaultTheme.colors.greenButton,
            width: '80%',
            marginBottom: 20,
          }}>
          Entrar
        </Button>
        <Button
          textStyle={{color: defaultTheme.colors.black}}
          containerStyle={{
            borderWidth: 1,
            borderColor: defaultTheme.colors.greenButton,
            borderRadius: 20,
            width: '80%',
          }}>
          Cadastrar
        </Button>
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default Welcome;
