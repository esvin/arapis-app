import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';

const About: NextPage = () => {
  const { t } = useTranslation('common');

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  }));

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
        {t('mAndVNav')}
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 2 }} sx={{
          display: 'flex',
          alignItems: 'flex-start',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}>
        <Grid container spacing={{ xs: 1 }} sx={{ p: 2 }} xs={12} sm={6} direction="column" alignItems="center" justifyContent="flex-start">
          <Grid>
            <Avatar src="/mountain.png" alt="Foto Miembro Junta Directiva" sx={{ width: 64, height: 64 }} />
          </Grid>
          <Grid>
            <Typography variant="h4" component="h1" gutterBottom>
              Misión
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="subtitle1" gutterBottom align='center'>
              Fortalecer a los apicultores implementando estrategias para elevar la calidad de la producción y comercialización, para el desarrollo económico, social y cultural, contribuyendo con la protección del medio ambiente y los recursos naturales, transmitiendo este compromiso a la sociedad en general.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 1 }} sx={{ p: 2 }} xs={12} sm={6} direction="column" alignItems="center" justifyContent="flex-start">
          <Grid>
            <Avatar src="/vision.png" alt="Foto Miembro Junta Directiva" sx={{ width: 64, height: 64 }} />
          </Grid>
          <Grid>
            <Typography variant="h4" component="h1" gutterBottom>
              Visión
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="subtitle1" gutterBottom align='center'>
              Ser una organización que facilite a sus asociados y proveedores, los vínculos estratégicos para la realización de actividades apícolas a nivel nacional e internacional.
            </Typography>
          </Grid>
        </Grid>

      </Stack>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }} sx={{
          display: 'flex',
          alignItems: 'flex-start',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}>
        <Grid container spacing={{ xs: 1 }} sx={{ p: 2 }} xs={12} sm={6} direction="column" alignItems="center" justifyContent="flex-start">
          <Grid>
            <Avatar src="/goal.png" alt="Foto Miembro Junta Directiva" sx={{ width: 64, height: 64 }} />
          </Grid>
          <Grid>
            <Typography variant="h4" component="h1" gutterBottom>
              Objetivo
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="subtitle1" gutterBottom align='center'>
              Contribuir al desarrollo integral y al mejoramiento de la calidad de vida de sus asociados y familias, así también la gestión de proyectos y adquisición de financiamiento destinado a satisfacer las necesidades de la asociación.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 1 }} sx={{ p: 2 }} xs={12} sm={6} direction="column" alignItems="center" justifyContent="flex-start">
          <Grid>
            <Avatar src="/value.png" alt="Foto Miembro Junta Directiva" sx={{ width: 64, height: 64 }} />
          </Grid>
          <Grid>
            <Typography variant="h4" component="h1" gutterBottom>
              Valores
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="subtitle1" gutterBottom align='center'>
              Contribuye a la motivación de los apicultores de mantenerse en la apicultura, porque las abejas además de dar sus productos, polinizan en un 95% de todo tipo de cultivos y de plantas.  ¡Sin abejas el reino animal y vegetal no sobrevive!
            </Typography>
          </Grid>
        </Grid>
      </Stack>
      <Typography variant="h4" component="h1" gutterBottom>
        Hazte Socio
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Si eres Apicultor, Forma parte de nuestra asociación de Apicultores, donde podras obtener los siguientes beneficios:
      </Typography>
      <Grid container spacing={2} xs={12}>
        <Grid xs={6}>
          <Item>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Avatar src="/beekeeper_boy.png" alt="Foto Miembro Junta Directiva" sx={{ width: 42, height: 42 }} />
              <Typography variant="subtitle1" gutterBottom align='center'>
                Capacitación y Asistencia Técnica
              </Typography>
            </Stack>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Avatar src="/honey.png" alt="Foto Miembro Junta Directiva" sx={{ width: 42, height: 42 }} />
              <Typography variant="subtitle1" gutterBottom align='center'>
                Acopio de Miel
              </Typography>
            </Stack>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Avatar src="/smoker.png" alt="Foto Miembro Junta Directiva" sx={{ width: 42, height: 42 }} />
              <Typography variant="subtitle1" gutterBottom align='center'>
                Insumos y Equipo de Trabajo
              </Typography>
            </Stack>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Avatar src="/colmena.png" alt="Foto Miembro Junta Directiva" sx={{ width: 42, height: 42 }} />
              <Typography variant="subtitle1" gutterBottom align='center'>
                Proyectos de Apoyo
              </Typography>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>

  );
};

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default About;