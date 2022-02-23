import React from 'react';
import {StyleProp, TextInput, ViewStyle} from 'react-native';

import * as S from './styles';

interface IInput {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  small?: boolean;
}

const DefaultInput: React.FC<IInput> = ({
  containerStyle,
  inputStyle,
  children,
  small,
}) => {
  return (
    <S.LabelContainer style={containerStyle}>
      <S.TextLabel>{children}</S.TextLabel>
      <S.Container style={inputStyle}>
        <TextInput placeholder="Digite aqui" />
      </S.Container>
    </S.LabelContainer>
  );
};

export default DefaultInput;
