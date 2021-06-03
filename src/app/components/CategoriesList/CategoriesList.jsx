import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../../store/Actions/ActionCreator/CategoriesActionCreators";
import { useSelector } from "react-redux";
//materialUI
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";

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
}));

const CategoriesList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const dataCategories = useSelector((state) => state.categoriesState);
  console.log(dataCategories)
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {dataCategories.categories.map((item, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4}>
            <NavLink to={`categories/${item}`}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item}
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
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

export default CategoriesList;
