import { Modal } from '@ant-design/react-native';

export const ConfirmDialog = ( title,content,onCancel,onOk ) => {
  Modal.alert(title, content, [
    {
      text: 'Cancel',
      onPress: onCancel,
      style: 'cancel',
    },
    { text: 'OK', onPress: onOk },
  ]);
};


