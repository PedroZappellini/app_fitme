import React, {useContext} from 'react';
import Header from '../../components/Header/index';
import DefaultInput from '../../components/DefaultInput';

import Logo from '../../assets/Auth/ic_logo.svg';

import * as S from './styles';
import Button from '../../components/Button/index';
import defaultTheme from '../../theme';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../../contexts/auth';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const {signed, user, signIn} = useContext(AuthContext);

  console.log(signed, 'signed');
  console.log(user, 'user');

  async function HandleSignIn() {
    signIn();
  }

  return (
    <S.Container>
      <Header />
      <S.LogoContainer>
        <Logo width={190} />
        <S.LogoText>Fit Me</S.LogoText>
        <S.LogoDescription>
          Seja bem vindo, é sempre bom{'\n'} cuidar da própria saúde!
        </S.LogoDescription>
      </S.LogoContainer>
      <S.InputContainer>
        <DefaultInput
          inputStyle={{width: '100%', borderRadius: 8}}
          children="Nome"
        />
        <DefaultInput
          inputStyle={{width: '100%', borderRadius: 8}}
          children="Senha"
          containerStyle={{marginTop: 10}}
        />
        <Button
          onPress={() => {
            navigation.navigate('HomeScreen');
            HandleSignIn();
          }}
          textStyle={{color: defaultTheme.colors.white}}
          containerStyle={{
            borderRadius: 8,
            backgroundColor: defaultTheme.colors.orangeButton,
            marginTop: 30,
          }}>
          ENTRAR
        </Button>
        <S.ForgotPasswordContainer
          onPress={() => navigation.navigate('ForgotPassword')}>
          <S.ForgotPasswordText>ESQUECI MINHA SENHA</S.ForgotPasswordText>
        </S.ForgotPasswordContainer>
      </S.InputContainer>
    </S.Container>
  );
};

export default SignIn;
