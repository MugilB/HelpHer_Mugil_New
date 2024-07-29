import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';





const cards = [
  {
    id: 1,
    image: 'https://images.slurrp.com/prodrich_article/lqwxoh9fhm.webp?impolicy=slurrp-20210601&width=1200&height=675',
    heading: 'Hotel Annapoorna',
    description: 'Pure veg'
  },
  {
    id: 2,
    image: 'https://media-cdn.tripadvisor.com/media/photo-p/1b/18/b6/4b/photo9jpg.jpg',
    heading: 'A2B',
    description: 'Pure Veg'
  },
  {
    id: 3,
    image: 'https://b.zmtcdn.com/data/pictures/2/19845882/fdba7f8eb78414569eac9da5339752ea.jpg?fit=around|750:500&crop=750:500;*,*',
    heading: 'SS Hyderabad',
    description: 'Non Veg'
  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9BSR2QJBDZblBNU_ldOHo1cx2Cowqanhhw&s',
    heading: 'Salem RR',
    description: 'Non Veg'
  },
  {
    id: 5,
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/13/3c/24/d2/img-20180609-134246-largejpg.jpg',
    heading: 'Selvi Mess',
    description: 'Non Veg'
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-KUlhxBzd7SXcjXhP9AWD_l0zU3tHl5TrQ&s',
    heading: 'Hotel Apoorva',
    description: 'Veg'
  },
  {
    id: 7,
    image: 'https://content.jdmagicbox.com/comp/coimbatore/g3/0422px422.x422.180518113244.e3g3/catalogue/best-chettinadu-hotel-kunniyamuthur-coimbatore-restaurants-05xjxobj3l.jpg',
    heading: 'Hotel Chettinadu',
    description: 'Veg and Non-veg'
  },
  {
    id: 8,
    image: 'https://content.jdmagicbox.com/comp/thiruvananthapuram/z8/0471px471.x471.180919221726.j4z8/catalogue/atithi-pure-veg-restaurant-attakulangara-thiruvananthapuram-indian-restaurants-cb0wrsytwa.jpg',
    heading: 'Hotel Athithi',
    description: 'Pure Veg'
  },
  {
    id: 9,
    image: 'https://content.jdmagicbox.com/comp/madurai/j1/0452px452.x452.190715160030.u4j1/catalogue/muniyandi-vilas-madurai-1cvj3kiguv.jpg',
    heading: 'Madurai Muniyandivilas',
    description: 'Non Veg'
  },
  {
    id: 10,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg2i876cuFM8NR5O1Oz7mpjjZK0ikiEUUiUA&s',
    heading: 'Meat and Eat',
    description: 'Non Veg'
  },
  {
    id: 11,
    image: 'https://www.allrecipes.com/thmb/-J-gNObhXJZ1Cuvor6ig3yHPrKw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-KFC-storefront-graidient-adobe-4x3-748c77ddd81840cb96cf788d74f13350.jpg',
    heading: 'KFC',
    description: 'Non Veg'
  },
  {
    id: 12,
    image: 'https://b.zmtcdn.com/data/reviews_photos/6c0/f8cac8dfabe1b5201295c5f15781a6c0_1546441345.jpg',
    heading: 'Sri Vari',
    description: 'Non Veg'
  },
  
  
];


const defaultTheme = createTheme();



export default function Bapart() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      
      <main>
        <Container sx={{ py: 8 , backgroundImage:'url("https://img.freepik.com/premium-vector/women-testing-cosmetic-products-hairdresser-making-hair-style-client-people-discussing-meeting-modern-beauty-salon-interior-full-length-horizontal_48369-23912.jpg?w=826")',backgroundAttachment:'fixed',backgroundSize:'cover'}} maxWidth="lg">
          <Grid container spacing={5}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  style={{backgroundColor:"rgba(255,255,255,0.7"}}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small">
                  <Link to={`/details/apartments/${card.id}/${encodeURIComponent(card.heading)}/${encodeURIComponent(card.description)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    Contact
                  </Link>
                  </Button>              
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
    </ThemeProvider>
  );
}
