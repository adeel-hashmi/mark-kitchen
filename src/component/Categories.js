import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Pizza from "../assets/images/pizza.jpg";
import Sandwiches from '../assets/images/sandwich1.jpg'
import Fries from '../assets/images/Fries.jpg';
import Burger from '../assets/images/burger.jpg';
import Grilled from '../assets/images/grilled.jpg';
import Dumplings from '../assets/images/dumplings.jpg';
import "../style/menu.scss";
import Grid from "@mui/material/Grid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AddProduct from "./AddProduct";
import AddCategory from './AddCategory'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #fbbe36",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export const categoryList = [
  {
    product_img: Pizza,
    product_name: "Pizza",
    product_price: 15,
    totalOrder: 150,
    Revenue: 1000,
  },
  {
    product_img: Sandwiches,
    product_name: "Sandwiches",
    product_price: 23,
    totalOrder: 150,
    Revenue: 1000,
  },
  {
    product_img: Fries,
    product_name: "Fries",
    product_price: 20,
    totalOrder: 100,
    Revenue: 2000,
  },
  {
    product_img: Burger,
    product_name: "Fries",
    product_price: 80,
    totalOrder: 100,
    Revenue: 2000,
  },
  {
    product_img: Grilled,
    product_name: "Fries",
    product_price: 90,
    totalOrder: 100,
    Revenue: 2000,
  },
  {
    product_img: Dumplings,
    product_name: "Fries",
    product_price: 91,
    totalOrder: 100,
    Revenue: 2000,
  },
];

const Categories = () => {
    const [open, setOpen] = React.useState(false);
     const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div style={{ padding:"20px"}}>
    <Typography variant="h4" gutterBottom component="div">
          Categories
        </Typography>
        <Divider />
      <Button
        onClick={handleOpen}
        variant="contained"
        startIcon={<AddCircleOutlineIcon />}
        style={{
          float: "right",
          marginTop: "15px",
          color: "black",
          backgroundColor: "#fbbe36",
        }}
      >
        Add Category
      </Button>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddCategory />
        </Box>
      </Modal>
    <Grid container spacing={6}>
      {categoryList.map((item) => {
        return ( 
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} xxl={2}>
              <Card  key={item.product_price} className="card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.product_img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <div className="name_price">
                      <Typography gutterBottom variant="h5" component="div">
                        {item.product_name}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        <span className="product_price">
                          ${item.product_price}
                        </span>
                      </Typography>
                    </div>
                    <div className="name_price">
                      <Typography variant="body1">
                        Total Order: <strong>{item.totalOrder}</strong>
                      </Typography>
                      <Typography variant="body1">
                        Revenue: <strong>${item.Revenue}</strong>
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    fullWidth
                    style={{ color: "black", background: "#fbbe36" }}
                  >
                    See More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          
        );
      })
      }</Grid>
    </div>
  );
};

export default Categories;
