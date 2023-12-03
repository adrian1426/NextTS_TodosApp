import React from "react";
import styles from './LoginTemplate.module.css';

interface LoginTemplateProps {
  renderHeader?: React.ReactNode;
  children: React.ReactNode;
}

const LoginTemplate = (props: LoginTemplateProps) => {
  const { renderHeader, children } = props;

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        {renderHeader}
      </div>
      <div className={styles.containerLogin}>
        {children}
      </div>
    </div>
  );
};

export default LoginTemplate;