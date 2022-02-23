import React from 'react';
import {StyleProp, ViewStyle, TextStyle} from 'react-native';

import * as S from './styles';

interface IButton {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const Button: React.FC<IButton> = ({
  onPress,
  containerStyle,
  textStyle,
  children,
}) => {
  return (
    <S.Container onPress={onPress} style={containerStyle}>
      <S.ButtonText style={textStyle}>{children}</S.ButtonText>
    </S.Container>
  );
};

export default Button;
