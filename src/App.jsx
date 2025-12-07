import styles from './App.module.css'
import { useEffect, useState } from 'react';

const App = () => {
  const[text,setText] = useState('');

  useEffect(() => {
    document.getElementById('text').focus();
  },[]);

  return (
    <div className={`${styles.container} ${text && styles.expand}`}>
      <h1 className="title">فرم ورودی</h1>
      <div>
        <input id="text" value={text} onChange={e => setText(e.target.value)} className={styles.inputText} type="text" placeholder="متن خود را وارد کنید..."/>
      </div>
      {text && 
      <div className={styles.showContainer}>
        <p className={styles.showText}>{text}</p>
      </div>
      }
      <div className={styles.btnsEl}>
        <button onClick={() => setText('')} className={`${styles.btns} ${styles.deleteBtn}`}>پاک کردن</button>
        <button className={`${styles.btns} ${styles.sendBtn}`}>ارسال</button>
      </div>
    </div>
  );
};

export default App;