// components/EventLayout.jsx
import styles from './EventLayout.module.css';


function EventLayout({ title, date, location, children }) {
    return (
        <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.dateLocation}>{date}</p>
        <p className={styles.dateLocation}>{location}</p>
        <div className={styles.childrenContent}>{children}</div>
      </div>
    );
  }
  
  export default EventLayout;
  