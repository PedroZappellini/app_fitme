import React from 'react';
import Header from '../../components/Header';
import DefaultInput from '../../components/DefaultInput';
import Button from '../../components/Button';

import Logo from '../../assets/Auth/ic_logo.svg';

import * as S from './styles';
import defaultTheme from '../../theme';
import {KeyboardAvoidingView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const SignUp: React.FC = () => {
  return (
    <ScrollView>
      <S.Container>
        <Header />
        <S.LogoContainer>
          <Logo width={190} />
          <S.LogoText>Fit Me</S.LogoText>
          <S.LogoDescription>
            Nunca é tarde para cuidar da sua saúde {'\n'} Junte-se à quem quer
            estar sempre melhorando
          </S.LogoDescription>
        </S.LogoContainer>
        <KeyboardAvoidingView>
          <S.InputContainer>
            <DefaultInput
              inputStyle={{width: '100%', borderRadius: 8, marginBottom: 10}}
              children="Nome"
            />
            <DefaultInput
              inputStyle={{width: '100%', borderRadius: 8, marginBottom: 10}}
              children="Senha"
            />
            <DefaultInput
              inputStyle={{width: '100%', borderRadius: 8, marginBottom: 10}}
              children="E-mail"
            />
            <S.DoubleInputContainer>
              <DefaultInput
                inputStyle={{maxWidth: 165, borderRadius: 8, marginBottom: 10}}
                children="Celular"
              />
              <DefaultInput
                containerStyle={{marginLeft: 20}}
                inputStyle={{maxWidth: 165, borderRadius: 8}}
                children="Data de nascimento"
              />
            </S.DoubleInputContainer>
            <Button
              textStyle={{color: defaultTheme.colors.white}}
              containerStyle={{
                borderRadius: 8,
                backgroundColor: defaultTheme.colors.orangeButton,
                marginTop: 30,
              }}>
              CADASTRAR
            </Button>
          </S.InputContainer>
        </KeyboardAvoidingView>
      </S.Container>
    </ScrollView>
  );
};

export default SignUp;
