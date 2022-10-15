import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import { useTranslation } from 'next-i18next';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';
import styles from './index.module.css';


const Home: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <Box
      sx={{
        my: 4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Carousel>
        <Card sx={{ width: '100%' }}>
          <CardMedia
            key="key"
            component="img"
            alt= "Apicultor Guatemalteco"
            height="600"
            image="./apicultor_1.jpeg"
          />
          <div style={{ 
              fontWeight: "bold",
              fontSize: "42px", 
              textAlign: "center", 
              position: "absolute", 
              color: "white",
              textShadow: "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
              top: "20%",
              left: "45%",
              transform: "translateX(-50%)",}}>
            ASOCIACIÓN RED DE APICULTORES PARA EL DESARROLLO SOSTENIBLE DE SUR OCCIDENTE (ARAPIS)
          </div>
        </Card>
        <Card sx={{ width: '100%' }}>
          <CardMedia
            key="key"
            component="img"
            alt= "Apicultura Guatemala"
            height="600"
            image="./foto5.jpe"
          />
        </Card>
        <Card sx={{ width: '100%' }}>
          <CardMedia
            key="key"
            component="img"
            alt= "Asistencia Tecnica"
            height="600"
            image="./foto6.jpeg"
          />
        </Card>
      </Carousel>
      <Container maxWidth="md">
        <Box>
          <ul id="hexGrid">
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto1.jpeg" alt="" />
                <h1>{t('title')}</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto2.jpeg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto3.jpe" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto4.jpeg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto5.jpe" alt="" />
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
                <img src="/foto8.jpeg" alt="" />
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
                <img src="/foto10.jpeg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto11.jpe" alt="" />
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
                <img src="/foto14.jpg" alt="" />
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
          </ul>
        </Box>
      </Container>
    </Box>
  );
};

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
export default Home;

