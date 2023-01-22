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
      <link
          rel="canonical"
          href="https://arapis.com.gt/es"
          key="canonical"
        />
      <Carousel>
        <Card sx={{ width: '100%' }}>
          <CardMedia
            key="key"
            component="img"
            alt="Apicultor Guatemalteco"
            image="./beekeeping_1.jpeg"
            className={styles.cardMed}
          />
          <div className={styles.webTitle}>
            ASOCIACIÓN RED DE APICULTORES PARA EL DESARROLLO SOSTENIBLE DE SUR OCCIDENTE (ARAPIS)
          </div>
        </Card>
        <Card sx={{ width: '100%' }}>
          <CardMedia
            key="key"
            component="img"
            alt="Apicultura Guatemala"
            image="./beekeeping_2.jpeg"
            className={styles.cardMed}
          />
          <div className={styles.webTitle}>
            ASOCIACIÓN RED DE APICULTORES PARA EL DESARROLLO SOSTENIBLE DE SUR OCCIDENTE (ARAPIS)
          </div>
        </Card>
        <Card sx={{ width: '100%' }}>
          <CardMedia
            key="key"
            component="img"
            alt="Asistencia Tecnica"
            image="./beekeeping_3.jpeg"
            className={styles.cardMed}
          />
          <div className={styles.webTitle}>
            ASOCIACIÓN RED DE APICULTORES PARA EL DESARROLLO SOSTENIBLE DE SUR OCCIDENTE (ARAPIS)
          </div>
        </Card>
        <Card sx={{ width: '100%' }}>
          <CardMedia
            key="key"
            component="img"
            alt="Asistencia Tecnica"
            image="./beekeeping_4.jpg"
            className={styles.cardMed}
          />
          <div className={styles.webTitle}>
            ASOCIACIÓN RED DE APICULTORES PARA EL DESARROLLO SOSTENIBLE DE SUR OCCIDENTE (ARAPIS)
          </div>
        </Card>
      </Carousel>
      <Container maxWidth="md">
        <Box>
          <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 4, textAlign: "center" }}>
            {t('homeDes')}
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom sx={{ mt: 4, mb: 4, color: '#714300', fontWeight: 'bold', textAlign: "center" }}>
            {t('honeyCombTitle')}
          </Typography>
          <ul id="hexGrid">
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto1.jpeg" alt="" />
                <h1>{t('honeyCombT1')}</h1>
                <p>{t('honeyCombD1')}</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto2.jpeg" alt="" />
                <h1>{t('honeyCombT2')}</h1>
                <p>{t('honeyCombD2')}</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto3.jpe" alt="" />
                <h1>{t('honeyCombT3')}</h1>
                <p>{t('honeyCombD3')}</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto4.jpeg" alt="" />
                <h1>{t('honeyCombT4')}</h1>
                <p>{t('honeyCombD4')}</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto5.jpe" alt="" />
                <h1>{t('honeyCombT5')}</h1>
                <p>{t('honeyCombD5')}</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto6.jpeg" alt="" />
                <h1>{t('honeyCombT6')}</h1>
                <p>{t('honeyCombD6')}</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto7.jpeg" alt="" />
                <h1>{t('honeyCombT7')}</h1>
                <p>{t('honeyCombD7')}</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto9.jpeg" alt="" />
                <h1>{t('honeyCombT8')}</h1>
                <p>{t('honeyCombD8')}</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto10.jpeg" alt="" />
                <h1>{t('honeyCombT9')}</h1>
                <p>{t('honeyCombD9')}</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto11.jpe" alt="" />
                <h1>{t('honeyCombT10')}</h1>
                <p>{t('honeyCombD10')}</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto12.jpeg" alt="" />
                <h1>{t('honeyCombT11')}</h1>
                <p>{t('honeyCombD11')}</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto14.jpg" alt="" />
                <h1>{t('honeyCombT12')}</h1>
                <p>{t('honeyCombD12')}</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn}></a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto15.jpeg" alt="" />
                <h1>{t('honeyCombT13')}</h1>
                <p>{t('honeyCombD13')}</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn}></a>
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

