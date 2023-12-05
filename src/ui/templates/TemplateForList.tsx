import React from 'react';
import styles from './TemplateForList.module.css';

interface TemplateForListProps {
  renderHeader: React.ReactElement,
  children: React.ReactNode
}

const TemplateForList = (props: TemplateForListProps) => {
  const { renderHeader, children } = props;

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        {renderHeader}
      </div>

      <div className={styles.containerContent}>
        {children}
      </div>
    </div>
  );
};

export default TemplateForList;