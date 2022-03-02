import styled from 'styled-components/native';
import defaultTheme from '../../../theme';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  justify-content: space-between;
`;

export const ButtonContainer = styled.View`
  margin-top: 60px;
`;

export const SeparationContainer = styled.View``;

export const LogoContainer = styled.View`
  margin-top: 30px;
  margin-bottom: 40px;
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

export const InstructionText = styled.Text`
    margin-top: 20px;
    color: ${defaultTheme.colors.grayLighterText}
    font-size: 12px;
`;

export const CloseButtonContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  padding-top: 10px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: center;
`;

export const ModalTitle = styled.Text`
  color: ${defaultTheme.colors.textColor};
  font-size: 18px;
`;

export const ModalDescription = styled.Text`
  color: ${defaultTheme.colors.grayLighterText};
  font-size: 14px;
  margin-bottom: 10px;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: ${defaultTheme.colors.grayInput};
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.View`
  border-radius: 8px;
  padding-horizontal: 20px;
`;
