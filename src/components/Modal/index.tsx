import React, {ReactNode, useState} from 'react';
import {Modal, Text} from 'react-native';

import * as S from './styles';

interface IModal {
  setVisible?: () => void;
  children: ReactNode;
}

const AdvancedModal: React.FC<IModal> = (children, setVisible) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Modal visible={modalVisible}>
      <S.Container>{children}</S.Container>
    </Modal>
  );
};

export default AdvancedModal;
