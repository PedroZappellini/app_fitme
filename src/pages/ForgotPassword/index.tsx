import React from 'react';
import Header from '../../components/Header';
import Logo from '../../assets/Auth/ic_logo.svg';

import DefaultInput from '../../components/DefaultInput';
import Button from '../../components/Button';

import defaultTheme from '../../theme';

import * as S from './styles';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword: React.FC = () => {
  const navigation = useNavigation();
  return (
    <S.Container>
      <S.SeparationContainer>
        <Header />
        <S.LogoContainer>
          <Logo width={190} />
          <S.LogoText>Fit Me</S.LogoText>
          <S.LogoDescription>
            Esqueceu a senha? {'\n'} Não se preocupe! Isso acontece
          </S.LogoDescription>
        </S.LogoContainer>

        <S.InstructionText>
          Para que possamos te ajudar, informe-nos seu e-mail
        </S.InstructionText>

        <DefaultInput
          children="E-mail"
          inputStyle={{width: '100%', borderRadius: 8}}
          containerStyle={{marginTop: 20}}
        />
      </S.SeparationContainer>
      <Button
        onPress={() => navigation.navigate('AskingPIN')}
        textStyle={{color: defaultTheme.colors.white}}
        containerStyle={{
          marginTop: 30,
          marginBottom: 30,
          width: '100%',
          borderRadius: 8,
          backgroundColor: defaultTheme.colors.orangeButton,
        }}>
        ENVIAR
      </Button>
    </S.Container>
  );
};

export default ForgotPassword;
