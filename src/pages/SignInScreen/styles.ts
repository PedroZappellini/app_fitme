import styled from 'styled-components/native';
import defaultTheme from '../../theme';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 20px;
`;

export const LogoContainer = styled.View`
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const LogoText = styled.Text`
  margin-left: 20px;
  color: ${defaultTheme.colors.textColor};
  font-size: 48px;
  font-family: ${defaultTheme.fonts.rounded_bold};
`;

export const LogoDescription = styled.Text`
  margin-top: 10px;
  text-align: center;
  color: ${defaultTheme.colors.grayLighterText};
  font-size: 14px;
  font-family: ${defaultTheme.fonts.rounded_medium};
`;

export const InputContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin-top: 30px;
`;

export const ForgotPasswordContainer = styled.TouchableOpacity`
  align-items: center;
  margin-top: 20px;
`;

export const ForgotPasswordText = styled.Text`
  color: ${defaultTheme.colors.grayLighterText};
`;
