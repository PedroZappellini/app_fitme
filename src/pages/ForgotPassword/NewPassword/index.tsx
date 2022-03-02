import React, {useState} from 'react';
import Header from '../../../components/Header';
import Logo from '../../../assets/Auth/ic_logo.svg';
import CloseIcon from '../../../assets/Auth/ic_close.svg';

import DefaultInput from '../../../components/DefaultInput';
import Button from '../../../components/Button';
import AdvancedModal from '../../../components/Modal';

import defaultTheme from '../../../theme';

import * as S from './styles';
import {useNavigation} from '@react-navigation/native';

const NewPassword: React.FC = () => {
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);
  return (
    <S.Container>
      <AdvancedModal setVisible={setModal} isModal={modal}>
        <S.ModalContainer>
          <S.CloseButtonContainer>
            <S.ModalTitle>Redefinição de senha</S.ModalTitle>
            <S.CloseButton onPress={() => setModal(false)}>
              <CloseIcon />
            </S.CloseButton>
          </S.CloseButtonContainer>
          <S.ModalDescription>
            Sua senha foi alterada com sucesso!
          </S.ModalDescription>
          <S.ModalDescription>
            Anote-a em algum lugar para não esquece-la novamente!
          </S.ModalDescription>
          <S.ButtonContainer>
            <Button
              onPress={() => navigation.navigate('HomeScreen')}
              textStyle={{color: defaultTheme.colors.white}}
              containerStyle={{
                borderRadius: 8,
                width: '100%',
                backgroundColor: defaultTheme.colors.orangeButton,
              }}>
              ENTENDI
            </Button>
          </S.ButtonContainer>
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
