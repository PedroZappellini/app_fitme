import styled from 'styled-components/native';
import defaultTheme from '../../theme/index';

export const Container = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  background: ${defaultTheme.colors.grayInput};
  padding-horizontal: 20px;
`;
