import { notification } from 'antd';

export const handleSubmitHOC = ({ api, success, failure, onDone }) => async (form) => {
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
      onDone();
    }
  } catch (e) {
    notification.error({
      message: failure,
      description: e.toString(),
    });
  }
};

export const deleteHOC = ({ row, api, success, failure, reload }) => async () => {
  try {
    const { id } = row;
    await api(id);
    notification.success({
      message: success,
    });
    reload();
  } catch (e) {
    notification.error({
      message: failure,
      description: e.toString(),
    });
  }
};
