import React from 'react';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.homePageContainer}>
      <header className={styles.homePageHeader}>
        <h1>Welcome to our page</h1>
      </header>
      <div className={styles.homePageContent}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus,
          nisi nec elementum fermentum, quam nisl sagittis felis, a tempor
          libero risus id nibh. Mauris lacus tellus, tristique non pharetra sit
          amet, placerat interdum lorem. Donec vitae quam ex. Etiam ultricies,
          leo sit amet sagittis lobortis, velit quam sodales nisi, vel cursus
          augue nibh vitae nisi. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Cras pellentesque ligula a
          metus porttitor posuere. Aenean in aliquet turpis. <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus,
          nisi nec elementum fermentum, quam nisl sagittis felis, a tempor
          libero risus id nibh. Mauris lacus tellus, tristique non pharetra sit
          amet, placerat interdum lorem. Donec vitae quam ex. Etiam ultricies,
          leo sit amet sagittis lobortis, velit quam sodales nisi, vel cursus
          augue nibh vitae nisi. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Cras pellentesque ligula a
          metus porttitor posuere. Aenean in aliquet turpis.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
