'use client';
import React, { ReactNode, useState } from 'react';
import { NotificationContext } from './notificationContext';
import { Notification, NotificationType } from './types';

type NotificationProviderProps = {
  children: ReactNode;
};

const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notification, setNotification] = useState<Notification | null>();

  const showNotification = (message: string, type: NotificationType) => {
    setNotification({ message, type });
  };

  const hideNotification = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider
      value={{ notification, showNotification, hideNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
