import React from 'react';
import styles from './Quotes.module.css';

function Quotes() {
  return (
    <div className={styles.quote}>
      <div className={styles.quotechild}>
        <cite>
          &quot;Mathematics is not about numbers, equations, computations, or
          algorithms: it is about understanding.&quot;
        </cite>
        <p> by</p>
        William Paul Thurston
      </div>
    </div>
  );
}

export default Quotes;
