import { useForm } from 'antd/es/form/util';
import { useEffect, useState } from 'react';
import { notification } from 'antd';

export const useHandelForm = ({ create, edit, retrieve, id, success, failure, done, close }) => {
  const isEdit = !!id;
  const [form] = useForm();
  const [loading, setLoading] = useState(isEdit);

  const successMessage = (isEdit ? success.edit : success.create) || success;
  const failureMessage = (isEdit ? failure.edit : failure.create) || failure;

  const submit = async (data) => {
    try {
      let api;
      if (isEdit) api = () => edit(id, data);
      else api = () => create(data);

      const { error } = await api();
      if (error) throw Error(error);

      notification.success({ message: successMessage });
      done();
    } catch (e) {
      notification.error({ message: failureMessage, description: e.toString() });
      close();
    }
  };

  const loader = async () => {
    setLoading(true);
    form.resetFields();

    try {
      if (isEdit) {
        const { data } = await retrieve(id);
        form.setFieldsValue(data);
      }
    } catch (e) {
      notification.error({ message: 'Error in getting data', description: e.toString() });
      close();
    }

    setLoading(false);
  };

  useEffect(() => {
    loader().then();
  }, [id]);

  return { form, loading, submit };
};
