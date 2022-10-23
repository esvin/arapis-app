import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
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
    <Container maxWidth="md">
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
                {t('missionSub')}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="subtitle1" gutterBottom align='center'>
                {t('missionDes')}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 1 }} sx={{ p: 2 }} xs={12} sm={6} direction="column" alignItems="center" justifyContent="flex-start">
            <Grid>
              <Avatar src="/vision.png" alt="Foto Miembro Junta Directiva" sx={{ width: 64, height: 64 }} />
            </Grid>
            <Grid>
              <Typography variant="h4" component="h1" gutterBottom>
                {t('visionSub')}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="subtitle1" gutterBottom align='center'>
                {t('visionDes')}
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
                {t('objectiveSub')}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="subtitle1" gutterBottom align='center'>
                {t('objectiveDes')}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 1 }} sx={{ p: 2 }} xs={12} sm={6} direction="column" alignItems="center" justifyContent="flex-start">
            <Grid>
              <Avatar src="/value.png" alt="Foto Miembro Junta Directiva" sx={{ width: 64, height: 64 }} />
            </Grid>
            <Grid>
              <Typography variant="h4" component="h1" gutterBottom>
                {t('valuesSub')}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="subtitle1" gutterBottom align='center'>
                {t('valuesDes')}
              </Typography>
            </Grid>
          </Grid>
        </Stack>
        <Typography variant="h4" component="h1" gutterBottom sx={{mt: 4}}>
          {t('joinUsNav')}
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{mb: 2, textAlign: "center"}}>
          {t('joinUsDes')}
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
                  {t('trainingDes')}
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
                  {t('collectionDes')}
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
                  {t('toolDes')}
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
                  {t('projectsDes')}
                </Typography>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default About;