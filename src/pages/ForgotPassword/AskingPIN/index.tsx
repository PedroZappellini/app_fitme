import React from 'react';
import Header from '../../../components/Header';
import Logo from '../../../assets/Auth/ic_logo.svg';

import DefaultInput from '../../../components/DefaultInput';
import Button from '../../../components/Button';

import defaultTheme from '../../../theme';

import * as S from './styles';
import {useNavigation} from '@react-navigation/native';

const AskingPIN: React.FC = () => {
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
          Agora para que possamos validar sua solicitação, {'\n'}informe-nos o
          PIN enviado ao seu e-mail
        </S.InstructionText>

        <DefaultInput
          children="PIN"
          inputStyle={{width: '100%', borderRadius: 8}}
          containerStyle={{marginTop: 20}}
        />
      </S.SeparationContainer>
      <Button
        onPress={() => navigation.navigate('NewPassword')}
        textStyle={{color: defaultTheme.colors.white}}
        containerStyle={{
          marginTop: 30,
          marginBottom: 30,
          width: '100%',
          borderRadius: 8,
          backgroundColor: defaultTheme.colors.orangeButton,
        }}>
        CONFIRMAR
      </Button>
    </S.Container>
  );
};

export default AskingPIN;
