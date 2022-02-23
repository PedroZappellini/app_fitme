import styled from 'styled-components/native';
import defaultTheme from '../../theme/index';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  justify-content: space-between;
`;

export const LogoContainer = styled.View`
  align-items: center;
  margin-top: 60px;
`;

export const ButtonsContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const LogoText = styled.Text`
  margin-left: 20px;
  color: ${defaultTheme.colors.textColor};
  font-size: 48px;
  font-family: ${defaultTheme.fonts.rounded_bold};
`;
