import type { NextPage } from 'next';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
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
import { ProductModel } from '../../models/ProductModel';

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
  const itemsForSale: ProductModel[] = [
    {
      name: 'Miel',
      url: '/botella.png',
      unit: 'Botella 750 ML',
      price: 'Q. 60.00',
      description: 'Miel de abeja 100% organica, botella de miel pura en venta en Guatemala.',
    },
    {
      name: 'Miel',
      url: '/mediabotella.png',
      unit: 'Media Botella 350 ML',
      price: 'Q. 30.00',
      description: 'Miel de abeja 100% organica, media botella pura en venta en Guatemala.',
    },
    {
      name: 'Miel',
      url: '/botella500.png',
      unit: 'Botella 500 ML',
      price: 'Q. 45.00',
      description: 'Miel de abeja pura en botella, en botella de vidrio a la venta.',
    },
    {
      name: 'Miel de Talnete',
      url: '/mieltalnete.png',
      unit: 'Botella 120 ML',
      price: 'Q. 150.00',
      description: 'Miel de abejas sin aguijón nativas de Guatemala, producida por abejas silvestres, miel de talnete a la venta.',
    },
    {
      name: 'Miel',
      url: '/mielcaneca.png',
      unit: '5 Galones',
      price: 'Q. 750.00',
      description: 'Miel de abeja 100% pura, miel por mayor, miel en caneca a la venta. Miel de la bocacosta de Guatemala.',
    },
    {
      name: 'Polen',
      url: '/polen.png',
      unit: 'Libra',
      price: 'Q. 150.00',
      description: 'Somos productores de polen, polen a la venta de distintas regiones de guatemala.',
    },
    {
      name: 'Chocolate Tabletas',
      url: '/chocolatetabletas.png',
      unit: '1 Lb',
      price: 'Q. 25.00',
      description: 'Chocolate artesanal, Chocolate artesanal a la venta. Presentacion 7 tabletas por Libra.',
    },
    {
      name: 'Chocolate',
      url: '/chocolate.png',
      unit: '400 Gr',
      price: 'Q. 30.00',
      description: 'Chocolate artesanal en polvo, Delicioso chocolate en Polvo, listo para preparar.',
    },
    {
      name: 'Chocolate con Leche',
      url: '/chocolateconleche.png',
      unit: '400 Gr',
      price: 'Q. 30.00',
      description: 'Chocolate con Leche. Presentación en polvo. Chocolate artesanal a la venta en guatemala.',
    },
    {
      name: 'Café',
      url: '/cafe.png',
      unit: '1 Lb',
      price: 'Q. 50.00',
      description: 'Café Orgánico Guatemalteco. Producido en la bocacosta del pais, Aroma intenso. Café a la venta',
    },
    {
      name: 'Panecito',
      url: '/panecito.png',
      unit: '400 Gr',
      price: 'Q. 40.00',
      description: 'Bebida artesanal.',
    },
    {
      name: 'Pinol',
      url: '/pinol.png',
      unit: '400 Gr',
      price: 'Q. 30.00',
      description: 'Bebida artesanal.',
    },
    {
      name: 'Propóleo',
      url: '/propoleo.png',
      unit: 'Gotero 30 ML',
      price: 'Q. 80.00',
      description: 'Tintura de Propóleo, antibiotico natural, propóleo a la venta en Guatemala,',
    },
    {
      name: 'Propóleo',
      url: '/propoleo_litro.png',
      unit: '1 Litro',
      price: 'Q. 250.00',
      description: 'Tintura de Propóleo por litro, propiedads antibióticas, propóleo a la venta.',
    },
    {
      name: 'Jalea Real',
      url: '/jaleareal.png',
      unit: 'Tarro 20 ML',
      price: 'Q. 120.00',
      description: 'Jalea real, mejora las defensas del cuerpo, Jalea real en venta en Guatemala.',
    },
    {
      name: 'Multivitaminico',
      url: '/multivitaminico.png',
      unit: 'Tarro 240 ML',
      price: 'Q. 200.00',
      description: 'Mezcla multivitamitica: Miel, Jalea Real, Polen y Propoleo.',
    },
    {
      name: 'Miel Crema',
      url: '/mielcrema450.png',
      unit: 'Tarro 450 ML',
      price: 'Q. 90.00',
      description: 'Miel cristalizada homogéneamente, miel crema a la venta en Guatemala.',
    },
    {
      name: 'Miel Crema',
      url: '/mielcrema240.png',
      unit: 'Tarro 240 ML',
      price: 'Q. 45.00',
      description: 'Miel cristalizada homogéneamente, Miel crema para untar y degustar.',
    },
    {
      name: 'Miel de Doncella (Melipona)',
      url: '/gotas.png',
      unit: 'Gotero 10 ML',
      price: 'Q. 40.00',
      description: 'Miel de doncella, medicina alternativa y natural en Guatemala, Gotas Oftalmologiicas a la venta.',
    },
    {
      name: 'Miel de Doncella (Melipona)',
      url: '/mieldoncella_litro.png',
      unit: '1 Litro',
      price: 'Q. 600.00',
      description: 'Miel de doncella, Miel de abeja melipona en Guatemala, miel de abejas sin aguijón.',
    },
    {
      name: 'Vinagre de Frutas',
      url: '/vinagre.png',
      unit: '250 ML',
      price: 'Q. 40.00',
      description: 'Vinagre artesanal de frutas, sabor suave, ideal para la cocina casera como aderezo o como suavizante de carnes blancas. ',
    },
    {
      name: 'Cera Estampada',
      url: '/ceraestampada.png',
      unit: 'Libra',
      price: 'Q. 45.00',
      description: 'Hojas de Cera moldeada lista para instalar, 100% cera natural, Cera estampada en Guatemala.',
    },
    {
      name: 'Cera En Bruto',
      url: '/ceraenbruto.png',
      unit: 'Libra',
      price: 'Q. 40.00',
      description: 'Cera en bruto, cera 100% natural, Cera en bruto en Guatemala',
    },
    {
      name: 'Cera Melipona',
      url: '/ceramelipona.png',
      unit: '1 Litro',
      price: 'Q. 40.00',
      description: 'Cera de abeja melipona.',
    },
    {
      name: 'Propoleo en Bruto',
      url: '/propoleoenbruto.png',
      unit: '1 Litro',
      price: 'Q. 150.00',
      description: 'Cera de Propoleo en bruto. Propoleo en bruta en Guatemala',
    },
    {
      name: 'Panela Organica',
      url: '/panela.png',
      unit: '1 Litro',
      price: 'Q. 40.00',
      description: 'Panela artesanal como alimento para la epoca de invierno.',
    },
    {
      name: 'Overol Completo',
      url: '/overol.png',
      unit: 'Unidad',
      price: 'Q. 280.00',
      description: 'Equipo de proteccion para dama y caballero de tela resistente.',
    },
    {
      name: 'Sombrero con Velo Africanizado',
      url: '/sombrerovelo.png',
      unit: 'Unidad',
      price: 'Q. 130.00',
      description: 'Sombrero de Proteccion con Velo africanizado, Velo Africanizado a la venta.',
    },
    {
      name: 'Ahumador Cuadrado',
      url: '/ahumadorcuadrado.png',
      unit: 'Unidad',
      price: 'Q. 150.00',
      description: 'Ahumador de Aluminio resistente, incluye sujetador, Ahumador a la venta en Guatemala.',
    },
    {
      name: 'Ahumador Redondo',
      url: '/ahumadorredondo.png',
      unit: 'Unidad',
      price: 'Q. 150.00',
      description: 'Ahumador de Aluminio resistente, incluye sujetador, Ahumador a la venta en Guatemala.',
    },
    {
      name: 'Cepillo Apicola',
      url: '/cepilloapicola.png',
      unit: 'Unidad',
      price: 'Q. 50.00',
      description: 'Cepillo de limpieza de marcos, util para remover abejas en los marcos.',
    },
    {
      name: 'Guantes Apicolas',
      url: '/guantesapicolas.png',
      unit: 'Par',
      price: 'Q. 100.00',
      description: 'Guates de proteccion, tela de calidad y sujetadores adecuados.',
    },
    {
      name: 'Cuchillo Desperculador',
      url: '/cuchillodesperculador.png',
      unit: 'Unidad',
      price: 'Q. 350.00',
      description: 'Cuchillo desperculador de acero inoxidable.',
    },
    {
      name: 'Rasqueta con sujetador de marcos',
      url: '/rasquetasujetador.png',
      unit: 'Unidad',
      price: 'Q. 100.00',
      description: 'Rasqueta con sujetador de marcos para transporte.',
    },
    {
      name: 'Colador Acero Inox',
      url: '/colador.png',
      unit: 'Unidad',
      price: 'Q. 500.00',
      description: 'Colador de miel de acero inoxidable. Colador de miel a la venta.',
    },
    {
      name: 'Batea',
      url: '/batea.png',
      unit: 'Unidad',
      price: 'Q. 6,500.00',
      description: 'Batea de acero inoxidable. Util para limpieza de marcos, incluye parrilla y drenaje.',
    },
    {
      name: 'Caja con marcos',
      url: '/cajamarcos.png',
      unit: 'Unidad',
      price: 'Q. 280.00',
      description: 'Caja de madera incluye: Piso, Tapadera y con marcos de madera, lista para instalar',
    },
    {
      name: 'Trampa para polen',
      url: '/trampapolen.png',
      unit: 'Unidad',
      price: 'Q. 130.00',
      description: 'Trampa de polen de madera. con recipiente de esta 1 Libra.',
    },
    {
      name: 'Abejas Reinas',
      url: '/abejareina.png',
      unit: 'Unidad',
      price: 'Q. 80.00',
      description: 'Producimos abejas reinas saludables, productivas y de calidad, Abejas reinas a la venta en Guatemala.',
    },
    {
      name: 'Botella Plastica',
      url: '/botella750_vacia.png',
      unit: '750 ML',
      price: 'Q. 4.00',
      description: 'Botella plastica con tapa Sport para envasar miel, diseño de panal, botella para envasar miel.',
    },
    {
      name: 'Botella Vidrio',
      url: '/botella500_vacia.png',
      unit: '500 ML',
      price: 'Q. 8.00',
      description: 'Botella de vidrio para envasar miel con tapa de aluminio, botella de vidrio para envasar miel.',
    },
    {
      name: 'Botella Plastica',
      url: '/botella350_vacia.png',
      unit: '350 ML',
      price: 'Q. 5.00',
      description: 'Botella plastica con tapa Sport para envasar miel, diseño de panal botella para envasar miel.',
    },
    {
      name: 'Tarro Vidrio',
      url: '/tarro450.png',
      unit: '450 ML',
      price: 'Q. 8.00',
      description: 'Tarro de vidrio para miel a la venta.',
    },
    {
      name: 'Tarro Vidrio',
      url: '/tarro240.png',
      unit: '240 ML',
      price: 'Q. 8.00',
      description: 'Tarro de vidrio para miel a la venta.',
    },
    {
      name: 'Gotero Plastico',
      url: '/gotero10.png',
      unit: '10 ML',
      price: 'Q. 3.00',
      description: 'Gotero plástico para miel de doncella.',
    },
    {
      name: 'Galon Plastico',
      url: '/galonvacio.png',
      unit: '1 Galon',
      price: 'Q. 10.00',
      description: 'Recipiente plástico vacio para almacernar/transportar miel.',
    },
    {
      name: 'Caneca Plastica',
      url: '/canecavacia.png',
      unit: '5 Galones',
      price: 'Q. 40.00',
      description: 'Recipiente plásticos vacio para almacernar/transportar miel.',
    }
  ];
  return (
    <Container maxWidth="md">
      <link
        rel="canonical"
        href="https://arapis.com.gt/es/product"
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
                        sx={{ ml: 2, mt: 2, fontWeight: 'bold', textAlign: 'center !important' }}>
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
          }
        </Grid>
        <Grid
          container
          spacing={{ xs: 2 }}
          sx={{ pt: 6, pb: 6 }}
          id="productsSection">
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h2" gutterBottom component="div" className='colorlib-heading'>
              Productos
            </Typography>
          </Grid>
          {
            itemsForSale.map((itemForSale) =>
              <Grid item sm={6} md={4} key={itemForSale.url}>
              <Card
                sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={ itemForSale.url }
                    alt="miel a la venta"
                    sx={{
                      objectFit: 'contain!important',
                      margin: 'auto!important'
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      { itemForSale.name }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      { itemForSale.description }
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant="button" display="block" gutterBottom color="gray">
                  { itemForSale.unit }
                </Typography>
                <Typography variant="button" display="block" gutterBottom color="green">
                  {  itemForSale.price }
                </Typography>
                </CardActions>
              </Card>
              </Grid>
            )
          }
        </Grid>
      </Box>
    </Container>
  );
}


const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
export default Product;