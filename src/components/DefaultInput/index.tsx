import React from 'react';
import {TextInput} from 'react-native';

import * as S from './styles';

const DefaultInput: React.FC = () => {
  return (
    <S.Container>
      <TextInput placeholder="Digite aqui" />
    </S.Container>
  );
};

export default DefaultInput;
