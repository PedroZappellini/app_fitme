import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import * as S from './styles';
import {Text} from 'react-native';

interface ICards {
  id: string;
  title: string;
}

const cards = [
  {
    id: '1',
    title: 'Frequencia',
    info: '79%',
  },
  {
    id: '2',
    title: 'Frequencia',
    info: '79%',
  },
  {
    id: '3',
    title: 'Frequencia',
    info: '79%',
  },
  {
    id: '4',
    title: 'Frequencia',
    info: '79%',
  },
  {
    id: '5',
    title: 'Frequencia',
    info: '79%',
  },
  {
    id: '6',
    title: 'Frequencia',
    info: '79%',
  },
  {
    id: '7',
    title: 'Frequencia',
    info: '79%',
  },
  {
    id: '8',
    title: 'Frequencia',
    info: '79%',
  },
];

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.ImageInfoContainer>
          <S.ProfileImage />
          <S.TextInfoContainer>
            <S.LabelName>Pedro Zappellini</S.LabelName>
            <S.LabelAge>22 Anos</S.LabelAge>
          </S.TextInfoContainer>
        </S.ImageInfoContainer>
        <S.IconsContainer>
          <Ionicons
            name="notifications-outline"
            size={24}
            style={{marginRight: 10}}
          />
          <Feather name="settings" size={24} />
        </S.IconsContainer>
      </S.HeaderContainer>
      <S.BodyContainer>
        <S.BodyTitle>Suas estatísticas</S.BodyTitle>
        <S.StyledFlatList
          data={cards}
          keyExtractor={card => card.id}
          horizontal
          snapToOffsets={[...Array(cards.length)].map(
            (x, i) => i * 300 - 40 + (i - 1) * 40,
          )}
          snapToAlignment="start"
          scrollEventThrottle={16}
          decelerationRate="fast"
          pagingEnabled
          renderItem={({item: card}) => (
            <S.CardContainer>
              <S.LineVertical />
              <S.LineHorizontal />
              <S.CardsContent>
                <S.CardsTitle>{card.title}</S.CardsTitle>
                <S.CardsInfo>{card.info}</S.CardsInfo>
              </S.CardsContent>
            </S.CardContainer>
          )}
        />
      </S.BodyContainer>
    </S.Container>
  );
};

export default Home;
