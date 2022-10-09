import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';

const Product: NextPage = () => {
  const { t } = useTranslation('common');

  const servicesOffered = [
    {
      icon: <LocalShippingIcon color="primary" sx={{ fontSize: 64 }} />,
      color: '#effafb',
      name: t('buyAndSell'),
      description: t('buyAndSellDes')
    },
    {
      icon: <HandshakeIcon color="primary" sx={{ fontSize: 64 }} />,
      color: '#fcf1e4',
      name: t('techSupport'),
      description: t('techSupportDes')
    },
    {
      icon: <SupportAgentIcon color="primary" sx={{ fontSize: 64 }} />,
      color: '#f6f5f3',
      name: t('trainings'),
      description: t('trainingsDes')
    },
    {
      icon: <ModeOfTravelIcon color="primary" sx={{ fontSize: 64 }} />,
      color: '#f5f6f7',
      name: t('tours'),
      description: t('toursDes')
    },
  ];
  return (<Box
    sx={{
      my: 4,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography variant="h4" component="h1" gutterBottom>
      {t('servicesTitle')}
    </Typography>
    <Grid container spacing={{ xs: 6 }}
    >
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography variant="body1" gutterBottom>
          {t('servicesSubtitle')}
        </Typography>
      </Grid>

      {
        servicesOffered.map((service) =>
          <Grid
            item
            key={service.name}
            md={6}>
            <Card sx={{ background: service.color }}>
              <CardContent>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center">
                  <Avatar color="primary" sx={{ width: 96, height: 96, bgcolor: (theme) => theme.palette.secondary.main }}>
                    {service.icon}
                  </Avatar>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    color="text.primary" 
                    sx={{ ml: 2, mt:2, fontWeight: 'bold', textAlign: 'center !important' }}>
                    {service.name}
                  </Typography>
                  <Typography variant="body1" gutterBottom color="text.primary" sx={{ ml: 2, textAlign: 'center !important' }}>
                    {service.description}
                  </Typography>
                </Stack>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
        )
      }   </Grid>
  </Box>);
}


const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
export default Product;