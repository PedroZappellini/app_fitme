import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import defaultTheme from '../../theme';
import {IDashboard} from '../../models';
import DefaultInput from '../../components/DefaultInput';
import {DefaultTheme} from '@react-navigation/native';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  padding-horizontal: 20px;

  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${defaultTheme.colors.grayInput};
  padding-bottom: 20px;
`;

export const ImageInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: ${defaultTheme.colors.grayLighterText};
`;

export const TextInfoContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

export const LabelName = styled.Text`
  color: ${defaultTheme.colors.textColor};
  font-size: 14px;
`;

export const LabelAge = styled.Text`
  color: ${defaultTheme.colors.textColor};
  font-size: 14px;
`;

export const BodyContainer = styled.View`
  flex: 1;
`;

export const BodyTitle = styled.Text`
  padding-left: 20px;
  margin-top: 20px;
  color: ${defaultTheme.colors.textColor}
  font-size: 24px;
  font-family: ${defaultTheme.fonts.rounded_bold};
`;

export const StyledFlatList = styled(
  FlatList as new () => FlatList<IDashboard>,
)`
  margin-top: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 30px;
`;

export const CardContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  border-radius: 10px;
  height: 100%;
  width: 300px;
  background: ${defaultTheme.colors.grayInput};
`;

export const LineVertical = styled.View`
  position: absolute;
  width: 250px;
  height: 2px;
  background: ${defaultTheme.colors.grayLighterLighterText};
`;

export const LineHorizontal = styled.View`
  position: absolute;
  width: 2px;
  margin-top: 30px;
  height: 350px;
  background: ${defaultTheme.colors.grayLighterLighterText};
`;

export const CardsContent = styled.View`
  position: absolute;
  top: 60;
  left: 30;
`;

export const CardsTitle = styled.Text`
  color: ${defaultTheme.colors.grayLighterText}
  font-size: 18px;
`;

export const CardsInfo = styled.Text`
  margin-top: 20px;
  text-align: center;
  color: ${defaultTheme.colors.textColor}
  font-size: 14px;
`;
