import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        {/* Logo/Brand */}
        <div className={styles.logo}>My Business</div>
        
        {/* Loading spinner */}
        <div className={styles.spinner}>
          <div className={styles.spinnerInner}></div>
        </div>
        
        {/* Loading text */}
        <p className={styles.loadingText}>Loading...</p>
      </div>
    </div>
  );
}
