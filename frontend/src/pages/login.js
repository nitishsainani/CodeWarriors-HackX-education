import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Material ui components
import {
  Container,
  Typography,
  TextField,
  Button,
  Divider,
  Grid,
} from "@material-ui/core";
// Styles
import FormStyle from "../muiStyles/formStyles";
import useStyles from "../muiStyles/baseStyles";

export default function Login(props) {
  const { handleSubmit } = props;
  const FormStyles = FormStyle();
  const classes = useStyles();
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  return (
      <>
    <Container>
      <Grid container className={FormStyles.container}>
        <Grid item xs={12}>
          <Container
            component="main"
            maxWidth="xs"
            className={FormStyles.subContainer}
          >
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="primary"
              style={{ fontWeight: "bold" }}
            >
              Sign-in
            </Typography>
            <form>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <Link to="#">
               
                  <Typography
                    align="center"
                    variant="body2"
                    component="h3"
                    className={classes.mt}
                  >
                    {"Forgot password?"}
                  </Typography>
            
              </Link>
              <Button
                className={classes.mt}
                onClick={() => handleSubmit(email, password)}
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            </form>
            <Divider className={classes.mt} />

            <Typography align="center" variant="body2" className={classes.mt}>
              {"Don't have an account ? 👇"}
            </Typography>

            <Link to="/signup">
              
                <Button
                  className={classes.mt}
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="primary"
                >
                  Sign Up
                </Button>
            
            </Link>
          </Container>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

Login.prototype = {
  handleSubmit: PropTypes.func.isRequired,
};
