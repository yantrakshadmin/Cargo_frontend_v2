import { useEffect, useState } from 'react';
import { Portal, Toast } from '@ant-design/react-native';

const successToast = (msg) => {
  Toast.info(msg || 'Load success !!!', 1);
};
const failToast = (msg) => {
  Toast.info(msg || 'Load failed !!!');
};

export const useHandelForm = ({
  create,
  edit,
  retrieve,
  id,
  success,
  failure,
  done,
  close,
  form,
  setForm,
}) => {
  const isEdit = !!id;
  const [loading, setLoading] = useState(isEdit);
  const [apiData, setApiData] = useState(undefined);
  const successMessage = (isEdit ? success.edit : success.create) || success || 'Done';
  const failureMessage = (isEdit ? failure.edit : failure.create) || failure || 'Error';

  const submit = async () => {
    try {
      let api;
      if (isEdit) api = () => edit(id, form);
      else api = () => create(form);

      const { error } = await api();
      if (error) {
        close();
        failToast(failureMessage);
        console.log(error, 'error');
        throw Error(error);
      }
      successToast(successMessage);
      done();
    } catch (e) {
      failToast(failureMessage);
      close();
    }
  };

  const loader = async () => {
    setLoading(true);
    // form.resetFields();

    try {
      if (isEdit) {
        const { data } = await retrieve(id);
        setForm(data);
        setApiData(data);
      }
    } catch (e) {
      failToast('Error in getting data');
      close();
    }

    setLoading(false);
  };

  useEffect(() => {
    loader().then();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { loading, submit, data: apiData };
};
