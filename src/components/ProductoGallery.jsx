import React from 'react';
import { Box, Grid, Paper } from '@mui/material';

const images = [
  '/image-product-3.jpg',
  '/image-product-2-thumbnail.webp',
  '/image-product-3-thumbnail (1).jpg',
  '/image-product-3-thumbnail.jpg',
];

const ProductoGallery = () => {
  return (
    <Box>
      <Paper elevation={3} style={{ borderRadius: '16px', overflow: 'hidden' }}>
        <img src="/image-product-1.jpg" alt="Main Product" style={{ width: '100%' }} />
      </Paper>
      <Grid container spacing={2} mt={2}>
        {images.map((image, index) => (
          <Grid item xs={3} key={index}>
            <Paper elevation={3} style={{ borderRadius: '16px', overflow: 'hidden' }}>
              <img src={image} alt={`Product ${index + 1}`} style={{ width: '100%' }} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductoGallery;
