import type { NextPage } from 'next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';
import MapGoogle from '../../components/map-google';
import { Box, Button, Card, CardActions, CardContent, Container, Grid, IconButton, Link, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Contact: NextPage = () => {

  const { t } = useTranslation('common');
  return (
    <>
      <MapGoogle />
      <Container maxWidth="xs">
        <link
          rel="canonical"
          href="https://arapis.com.gt/es/contact"
          key="canonical"
        />
        <Box
          sx={{
            my: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            {t('contactUsNav')}
          </Typography>
          <Card sx={{ minWidth: 275 }}>
            <CardContent sx={{ paddingBottom: 0 }}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {t('contactUsDir')}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                KM. 150 CA-2 Carretera al Pacifico, Aldea Concepción Ixtacapa, San Antonio Suchitepéquez, Guatemala.
              </Typography>
              <Typography sx={{ mb: 0.5 }} color="text.secondary">
                {t('contactUsPhone')}
              </Typography>
              <Typography variant="body2">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  style={{ padding: "6px 6px" }}
                >
                  <PhoneIcon />
                </IconButton>
                <Link href="tel:+502 55669267">+502 5566 9267</Link>
              </Typography>
              <Typography variant="body2">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  style={{ padding: "6px 6px" }}
                >
                  <PhoneAndroidIcon />
                </IconButton>
                <Link href="tel:+502 42807260">+502 4280 7260</Link>
              </Typography>
              <Typography variant="body2">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  style={{ padding: "6px 6px" }}
                >
                  <MailOutlineIcon />
                </IconButton>
                <Link href="mailto:apiesvin@gmail.com">apiesvin@gmail.com</Link>
              </Typography>
              <Typography variant="body2">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  style={{ padding: "6px 6px" }}
                >
                  <EmailIcon />
                </IconButton>
                <Link href="mailto:arapispclsas@gmail.com">arapispclsas@gmail.com</Link>
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton href="https://wa.me/50255669267" aria-label="whatsapp" color="primary">
                <WhatsAppIcon fontSize="large" />
              </IconButton>
              <IconButton href="https://goo.gl/maps/T68nYf59iTwQymeQ8" aria-label="google" color="primary">
                <FmdGoodRoundedIcon fontSize="large" />
              </IconButton>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
export default Contact;