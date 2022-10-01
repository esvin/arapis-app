import * as React from 'react';
import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import styles from './index.module.css'
const Home: NextPage = () => {
  return (
    <Box
      sx={{
        my: 4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <Box maxWidth="lg">
        <ul id="hexGrid">
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto1.jpeg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto2.jpg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto3.jpg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto4.jpe" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto5.jpg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto6.jpeg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto7.jpeg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto8.jpe" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto9.jpeg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto10.jpg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto11.jpg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto12.jpeg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto13.jpeg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto14.jpe" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto15.jpeg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto16.jpeg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto17.jpeg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto18.jpeg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto19.jpeg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto20.jpeg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto21.jpeg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
          <li className={styles.hex}>
            <a className={styles.hexIn} href="#">
              <img src="/foto25.jpeg" alt="" />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Home;
