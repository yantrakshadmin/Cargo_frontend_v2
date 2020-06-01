import { notification } from 'antd';

export const handleSubmitHOC = ({ api, onCancel, success, failure }) => async (form) => {
  console.log('Heeeeeeeeeeeee');
  try {
    const { error } = await api(form);
    if (error) {
      notification.error({
        message: failure,
        description: error.toString(),
      });
    } else {
      notification.success({
        message: success,
      });
      onCancel();
    }
  } catch (e) {
    notification.error({
      message: failure,
      description: e.toString(),
    });
  }
};
