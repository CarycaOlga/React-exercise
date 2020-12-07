import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List 
          title={['Things to do ', <sup key='1'>soon!</sup>]}
          heroImg='https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'>
        </List>
      </main>
    )
  }
}

export default App;
