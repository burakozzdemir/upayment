import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductService from "../services/ProductService";

const Products = () => {
  useEffect(() => {
    ProductService.getRequest("products");
  }, []);

  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          marginTop: "3rem",
          marginLeft: "6.5rem",
        }}
      >
        <CardMedia
          component="img"
          alt=""
          height="500"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ marginLeft: "5rem" }}
            size="large"
            color="error"
            variant="contained"
          >
            Add Product
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Products;
