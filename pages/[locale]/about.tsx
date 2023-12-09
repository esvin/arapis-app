import * as React from 'react';
import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';

const About: NextPage = () => {

  const { t } = useTranslation('common');
  return (
    <Container maxWidth="md">
      <link
          rel="canonical"
          href="https://arapis.com.gt/es/about"
          key="canonical"
        />
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
          {t('ourStoryTitle')}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {t('ourStoryMain')}
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center" >
          <Grid xs={8} sx={{ display: 'flex' }}>
            <img src="/apicultor_gt2.jpeg" alt="Apicultor Guatemalteco" height="500" style={{ margin: 'auto' }} />
          </Grid>
          <Grid xs={4}>
            <Typography variant="subtitle1" gutterBottom>
              {t('ourStoryMaga')}
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography variant="subtitle1" gutterBottom>
              {t('ourStoryWomen')}
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
              {t('ourStoryParticipation')}            
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography variant="subtitle1" gutterBottom>
            {t('ourStoryMarn')}    
            </Typography>
          </Grid>
          <Grid xs={8} sx={{ display: 'flex' }}>
            <img src="/paisajes.jpg" alt="Apicultor Guatemalteco" height="400" width="250" style={{ margin: 'auto' }} />
          </Grid>
        </Grid>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('boardOfDirectorsNav')}
        </Typography>
        <Typography variant="h5" component="h1" gutterBottom>
        {t('bODPeriod')}
        </Typography>
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid xs={5} sm={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Grid container spacing={1} justifyContent="center" alignItems="center" direction="column">
                  <Grid>
                    <Avatar src="/presidente-arapis.jpeg" alt="Foto Miembro Junta Directiva" sx={{ width: 96, height: 96 }} />
                  </Grid>
                  <Grid>
                    <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: 0 }}>
                      Esvin Estrada
                    </Typography>
                  </Grid>
                  <Grid sx={{ paddingTop: 0 }}>
                    <Typography gutterBottom variant="body1">
                      {t('bODPresident')}
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
                    <Avatar src="/vicepresidenta-arapis.jpeg" alt="Foto Miembre Junta Directiva" sx={{ width: 96, height: 96  }} />
                  </Grid>
                  <Grid>
                    <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: 0 }}>
                      Ligia Ávila
                    </Typography>
                  </Grid>
                  <Grid sx={{ paddingTop: 0 }}>
                    <Typography gutterBottom variant="body1">
                      {t('bODVicePresident')}
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
                    <Avatar src="/secretario-arapis.jpeg" alt="Foto Miembro Junta Directiva" sx={{ width: 96, height: 96 }} />
                  </Grid>
                  <Grid>
                    <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: 0 }}>
                      José Raymundo
                    </Typography>
                  </Grid>
                  <Grid sx={{ paddingTop: 0 }}>
                    <Typography gutterBottom variant="body1"> 
                      {t('bODSecretary')}
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
                    <Avatar src="/tesorero-arapis.jpeg" alt="Foto Miembro Junta Directiva" sx={{ width: 96, height: 96 }} />
                  </Grid>
                  <Grid>
                    <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: 0 }}>
                      Delwvin Domínguez
                    </Typography>
                  </Grid>
                  <Grid sx={{ paddingTop: 0 }}>
                    <Typography gutterBottom variant="body1">
                      {t('bODTresurer')}
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
                    <Avatar src="/vocal1-arapis.jpeg" alt="Foto Miembro Junta Directiva" sx={{ width: 96, height: 96 }} />
                  </Grid>
                  <Grid>
                    <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: 0 }}>
                      Victor Sapón
                    </Typography>
                  </Grid>
                  <Grid sx={{ paddingTop: 0 }}>
                    <Typography gutterBottom variant="body1">
                      {t('bODVocal1')}
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
                    <Avatar src="/vocal2-arapis.jpeg" alt="Foto Miembro Junta Directiva" sx={{ width: 96, height: 96 }} />
                  </Grid>
                  <Grid>
                    <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: 0 }}>
                      Hugo Ortiz
                    </Typography>
                  </Grid>
                  <Grid sx={{ paddingTop: 0 }}>
                    <Typography gutterBottom variant="body1">
                      {t('bODVocal2')}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('ourAssocNav')}
        </Typography>
      </Box>
    </Container>
  );
};

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default About;
