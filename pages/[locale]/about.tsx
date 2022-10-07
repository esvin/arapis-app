import * as React from 'react';
import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const About: NextPage = () => {
  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Nuestra Historia
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        ARAPIS nació de la necesidad de los pequeños apicultores del Suroccidente por buscar mercados para obtener mejores precios en la venta de miel.
        La conforman apicultores de diversas comunidades, a los cuales se les brinda capacitaciones en diversos temas como: Buenas Prácticas Apícolas, trazabilidad, valor agregado a sus productos, comercialización, entre otros.
        Fue fundada en 2015, enfocando sus esfuerzos en fortalecer y mejorar las condiciones y calidad de vida de sus asociados.
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center" >
        <Grid xs={8} sx={{ display: 'flex' }}>
          <img src="/apicultor_gt2.jpeg" alt="Apicultor Guatemalteco" height="500" style={{ margin: 'auto' }} />
        </Grid>
        <Grid xs={4}>
          <Typography variant="subtitle1" gutterBottom>
            ARAPIS acopia y procesa miel de sus asociados y de tres organizaciones agremiadas en unión que forman volúmenes significativos de miel, y la exportan a países europeos como Alemania, España y Centro America.
            ARAPIS posee la infraestructura adecuada para la implementacion de buenas prácticas de manufactura, en el 2018 fue autorizada por el Ministerio de Agricultura Ganadería y Alimentación (VISAR MAGA).
          </Typography>
        </Grid>
        <Grid xs={4}>
          <Typography variant="subtitle1" gutterBottom>
            La participación de las mujeres asociadas es importante para la creación y procesamiento de productos con valor agregado con el objetivo de incrementar los ingresos en los hogares y ofrecer productos que aporten beneficios para la salud de los consumidores.
          </Typography>
        </Grid>
        <Grid xs={8} sx={{ display: 'flex' }}>
          <img src="/apicultoras.jpg" alt="Apicultor Guatemalteco" width="400" style={{ margin: 'auto' }} />
        </Grid>
        <Grid xs={8} sx={{ display: 'flex' }}>
          <img src="/participacion.jpg" alt="Apicultor Guatemalteco" width="400" style={{ margin: 'auto' }} />
        </Grid>
        <Grid xs={4}>
          <Typography variant="subtitle1" gutterBottom>
            ARAPIS mantiene participación activa en eventos de comercialización, dando a conocer sus productos como: miel multiflora, miel de montaña, miel de bosque.
            ARAPIS es parte de la agrocadena apícola en Guatemala, en todos los eslabones (producción, acopio, transformación, comercialización y exportación).
          </Typography>
        </Grid>
        <Grid xs={4}>
          <Typography variant="subtitle1" gutterBottom>
            Actualmente está certificada por FLOCERT en FAIRTRADE, KIWA BCS en miel orgánica.
            ARAPIS formo parte del Proyecto Paisajes Productivos Resilientes al Cambio Climático y Redes Socioeconómicas fortalecidas en Guatemala, con el cual se logró la construcción del Centro Regional de Acopio de Miel.
          </Typography>
        </Grid>
        <Grid xs={8} sx={{ display: 'flex' }}>
          <img src="/paisajes.jpg" alt="Apicultor Guatemalteco" height="400" width="250" style={{ margin: 'auto' }} />
        </Grid>
      </Grid>
      <Typography variant="h4" component="h1" gutterBottom>
        Junta Directiva
      </Typography>
      <Typography variant="h5" component="h1" gutterBottom>
        Periodo 2021 - 2026
      </Typography>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid xs={5} sm={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Grid container spacing={1} justifyContent="center" alignItems="center" direction="column">
                <Grid>
                  <Avatar src="" alt="Foto Miembro Junta Directiva" sx={{ width: 64, height: 64 }} />
                </Grid>
                <Grid>
                  <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: 0 }}>
                    Esvin Estrada
                  </Typography>
                </Grid>
                <Grid sx={{ paddingTop: 0 }}>
                  <Typography gutterBottom variant="body1">
                    Presidente
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={5} sm={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Grid container spacing={1} justifyContent="center" alignItems="center" direction="column">
                <Grid>
                  <Avatar src="" alt="Foto Miembre Junta Directiva" sx={{ width: 64, height: 64 }} />
                </Grid>
                <Grid>
                  <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: 0 }}>
                  Ligia Ávila 
                  </Typography>
                </Grid>
                <Grid sx={{ paddingTop: 0 }}>
                  <Typography gutterBottom variant="body1">
                  Vice-Presidente	
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={5} sm={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Grid container spacing={1} justifyContent="center" alignItems="center" direction="column">
                <Grid>
                  <Avatar src="" alt="Foto Miembro Junta Directiva" sx={{ width: 64, height: 64 }} />
                </Grid>
                <Grid>
                  <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: 0 }}>
                  José Raymundo
                  </Typography>
                </Grid>
                <Grid sx={{ paddingTop: 0 }}>
                  <Typography gutterBottom variant="body1">
                  Secretario
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={5} sm={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Grid container spacing={1} justifyContent="center" alignItems="center" direction="column">
                <Grid>
                  <Avatar src="" alt="Foto Miembro Junta Directiva" sx={{ width: 64, height: 64 }} />
                </Grid>
                <Grid>
                  <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: 0 }}>
                  Delwvin Domínguez
                  </Typography>
                </Grid>
                <Grid sx={{ paddingTop: 0 }}>
                  <Typography gutterBottom variant="body1">
                  Tesorero
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={5} sm={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Grid container spacing={1} justifyContent="center" alignItems="center" direction="column">
                <Grid>
                  <Avatar src="" alt="Foto Miembro Junta Directiva" sx={{ width: 64, height: 64 }} />
                </Grid>
                <Grid>
                  <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: 0 }}>
                  Victor Sapón
                  </Typography>
                </Grid>
                <Grid sx={{ paddingTop: 0 }}>
                  <Typography gutterBottom variant="body1">
                  Vocal I
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={5} sm={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Grid container spacing={1} justifyContent="center" alignItems="center" direction="column">
                <Grid>
                  <Avatar src="" alt="Foto Miembro Junta Directiva" sx={{ width: 64, height: 64 }} />
                </Grid>
                <Grid>
                  <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: 0 }}>
                  Hugo Ortiz
                  </Typography>
                </Grid>
                <Grid sx={{ paddingTop: 0 }}>
                  <Typography gutterBottom variant="body1">
                  Vocal II
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
