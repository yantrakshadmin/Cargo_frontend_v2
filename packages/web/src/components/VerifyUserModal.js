import React, { useState } from 'react';
import { Input, Modal, notification, Typography } from 'antd';

import { loadAPI } from '@app/common/helpers/api';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Icon } from '@ant-design/compatible';

const { Title } = Typography;

export const VerifyUserModal = ({ username, password, signIn, close, open }) => {
  const [otp, setOTP] = useState('');

  const handleVerification = async () => {
    const { error } = await loadAPI('/verifyOTP/', {
      method: 'POST',
      data: { username, otp },
      secure: false,
    });
    if (error)
      notification.error({
        message: `Cant verify user: ${username}`,
        description: error.toString(),
      });
    else {
      await signIn({ username, password });
      close();
    }
  };

  return (
    <Modal onOk={handleVerification} onCancel={close} visible={open} okText='Verify my account'>
      <Title level={4}>
        <ExclamationCircleOutlined style={{ color: '#FFB108' }} />
        {' '}
        Your account is not verified yet
      </Title>
      <div>
        Enter verification OTP you received in mail
        <Input
          value={otp}
          prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder='6 digit OTP'
          onChange={(e) => setOTP(e.target.value)}
          type='number'
          onPressEnter={handleVerification}
        />
      </div>
    </Modal>
  );
};
