import React from 'react';

import Logo from '../../assets/Auth/ic_logo.svg';

import Button from '../../components/Button/index';

import * as S from './styles';
import defaultTheme from '../../theme/index';
import {useNavigation} from '@react-navigation/native';

const Welcome: React.FC = () => {
  const navigation = useNavigation();
  return (
    <S.Container>
      <S.LogoContainer>
        <Logo width={190} />
        <S.LogoText>Fit Me</S.LogoText>
      </S.LogoContainer>
      <S.ButtonsContainer>
        <Button
          onPress={() => navigation.navigate('SignIn')}
          textStyle={{color: defaultTheme.colors.white}}
          containerStyle={{
            borderRadius: 8,
            backgroundColor: defaultTheme.colors.orangeButton,
            marginBottom: 20,
          }}>
          ENTRAR
        </Button>
        <Button
          onPress={() => navigation.navigate('SignUp')}
          textStyle={{color: defaultTheme.colors.orangeButton}}
          containerStyle={{
            borderWidth: 1,
            borderColor: defaultTheme.colors.orangeButton,
            borderRadius: 8,
          }}>
          CADASTRAR
        </Button>
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default Welcome;
