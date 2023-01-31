import { CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ProductModel } from '../models/ProductModel';

const Product = ({ item } : { item: ProductModel}) => {
  return (
    <Card
      sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={ item.url }
          alt="miel a la venta"
          sx={{
            objectFit: 'contain!important',
            margin: 'auto!important'
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { item.name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { item.description }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between'}}>
      <Typography variant="button" display="block" gutterBottom color="gray">
        { item.unit }
      </Typography>
      <Typography variant="button" display="block" gutterBottom color="green">
        {  item.price }
      </Typography>
      </CardActions>
    </Card>
  );
};

export default Product;
