import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';

const Product: NextPage = () => {
  const { t } = useTranslation('common');
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
    <Typography variant="body1" gutterBottom>
      {t('servicesSubtitle')}
    </Typography>
  </Box>);
}


const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
export default Product;