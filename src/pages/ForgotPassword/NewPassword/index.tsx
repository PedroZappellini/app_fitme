import React, {useState} from 'react';
import Header from '../../../components/Header';
import Logo from '../../../assets/Auth/ic_logo.svg';

import DefaultInput from '../../../components/DefaultInput';
import Button from '../../../components/Button';
import AdvancedModal from '../../../components/Modal';

import defaultTheme from '../../../theme';

import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';

const NewPassword: React.FC = () => {
  const navigation = useNavigation();
  const [modal, setModal] = useState(true);
  return (
    <S.Container>
      <AdvancedModal>
        <S.ModalContainer>
          <Text>aloaloalo</Text>
        </S.ModalContainer>
      </AdvancedModal>
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
          Pronto, agora escolha uma nova senha
        </S.InstructionText>

        <DefaultInput
          children="Nova senha"
          inputStyle={{width: '100%', borderRadius: 8}}
          containerStyle={{marginTop: 20}}
        />
        <DefaultInput
          children="Confirmar senha"
          inputStyle={{width: '100%', borderRadius: 8}}
          containerStyle={{marginTop: 20}}
        />
      </S.SeparationContainer>
      <Button
        onPress={() => setModal(true)}
        textStyle={{color: defaultTheme.colors.white}}
        containerStyle={{
          marginTop: 30,
          marginBottom: 30,
          width: '100%',
          borderRadius: 8,
          backgroundColor: defaultTheme.colors.orangeButton,
        }}>
        ALTERAR
      </Button>
    </S.Container>
  );
};

export default NewPassword;
