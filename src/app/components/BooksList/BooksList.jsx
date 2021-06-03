import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { getCategoryBooks } from "../../../store/Actions/ActionCreator/BooksActionCreators";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { SET_PRODUCT } from "../../../store/Actions/Types";


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "30px",
  },
  title: {
    fontSize: "15px",
    display:"flex",
    justifyContent:"center",
    color:"black",
    alignItems:"center",
  },
  subtitle: {
    fontSize: "15px",
    fontWeight:"400",
    display:"flex",
    justifyContent:"center",
    color:"blue",
    paddingTop:"10px",
    alignItems:"center",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  cardAction: {
    display:"flex",
    justifyContent:"center",
  }
}));

const BookList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const useParamsHook = useParams();

  const books = useSelector((state) => state.bookState);
  console.log(books);

  useEffect(() => {
    dispatch(getCategoryBooks(useParamsHook.item));
  }, []);

  const seeMoreHandler = (item) => {
    dispatch({
      type: SET_PRODUCT,
      payload: item
    })
  }


  return (
      <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
         {books.books.map((item, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4}>
            <NavLink to={`/product`}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={item.image}
                  title={item}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h6" className={classes.title}>
                  {item.title}
                  </Typography>
                  <Typography className={classes.subtitle}>
                     {item.price}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardAction}>
                  <Button size="small" color="primary"
                  onClick={()=> seeMoreHandler(item)}
                  >
                    See more
                  </Button>
                </CardActions>
              </Card>
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </Container>

  );
};

export default BookList;
