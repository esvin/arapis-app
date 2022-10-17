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
          <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 4, textAlign: "center"}}>
            {t('homeDes')}
          </Typography>
          <ul id="hexGrid">
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto1.jpeg" alt="" />
                <h1>Comercialización</h1>
                <p>Productos derivados de la colmena como: Miel, Polen, Propoleo.</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto2.jpeg" alt="" />
                <h1>Distintas Mieles</h1>
                <p>Mieles de diferentes regiones del pais con distinta flora.</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto3.jpe" alt="" />
                <h1>Asistencia Tecnica</h1>
                <p>Apoyo tecnico cosntante a nuestros asociados en sus apiarios.</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto4.jpeg" alt="" />
                <h1>Apicultor</h1>
                <p>En nuestra organización el bienestar del apicultor es primero.</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto5.jpe" alt="" />
                <h1>Apiarios saludables</h1>
                <p>Nuestro monitoreo y control de apiarios es permanente.</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto6.jpeg" alt="" />
                <h1>Calidad</h1>
                <p>Nuestra produccion apicola, sigue estandares de calidad.</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto7.jpeg" alt="" />
                <h1>Mujeres apicultoras</h1>
                <p>Nuestras asociadas forman parte primordial en nuestra operacion.</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto8.jpeg" alt="" />
                <h1>Meliponas</h1>
                <p>Diversificacion de mieles y abejas</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto9.jpeg" alt="" />
                <h1>Organica 100% Natural</h1>
                <p>Nuestra miel es organica y 100% Natural</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto10.jpeg" alt="" />
                <h1>Cumplimiento</h1>
                <p>Nuestros productos cumplen con los permisos y requerimientos institucionales. </p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto11.jpe" alt="" />
                <h1>Regiones</h1>
                <p>Nuestra miel y asociados son originarios de distintas regiones y climas.</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto12.jpeg" alt="" />
                <h1>Aprendizaje</h1>
                <p>En nuestra organización aprendemos todos.</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto13.jpeg" alt="" />
                <h1>Trabajo en equipo</h1>
                <p>La mayoria de nuestras actividades y proyectos se realizan en equipo y buscando el beneficio de todos.</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto14.jpg" alt="" />
                <h1>Buenas practicas</h1>
                <p>Nuestros asociados y asociadas realizan buenas practicas productivas y de acopio de la miel.</p>
              </a>
            </li>
            <li className={styles.hex}>
              <a className={styles.hexIn} href="#">
                <img src="/foto15.jpeg" alt="" />
                <h1>Nuestra marca</h1>
                <p>Nuestra marca De la cuenca, es reconocida como producto de buen sabor y calidad.</p>
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

