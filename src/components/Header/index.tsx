import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

import ArrowLeft from '../../assets/Auth/ic_arrow_left.svg';

import * as S from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation();
  return (
    <S.Container onPress={navigation.goBack}>
      <ArrowLeft />
    </S.Container>
  );
};

export default Header;
