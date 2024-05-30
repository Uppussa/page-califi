
import React from "react"
import { Container, Grid, Box } from '@mui/material';
import Navbar from "./components/Navbar"
import ProductoDetalle from "./components/ProductoDetalle"
import ProductoGallery from "./components/ProductoGallery"

function App() {


  return (
    <>
      <Navbar />
      <Box
     
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        minHeight="111vh"
        sx={{ backgroundColor: 'white' }} >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} >
              <ProductoGallery />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProductoDetalle />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};


export default App
