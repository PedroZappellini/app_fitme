import React, {ReactNode, useState} from 'react';
import {Modal, Text} from 'react-native';

import * as S from './styles';

interface IModal {
  setVisible: (visible: boolean) => void;
  isModal: boolean;
}

const AdvancedModal: React.FC<IModal> = ({isModal, setVisible, children}) => {
  return (
    <Modal transparent visible={isModal}>
      <S.Container>{children}</S.Container>
    </Modal>
  );
};

export default AdvancedModal;
