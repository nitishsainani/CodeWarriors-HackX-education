import React, { useState } from "react";
import { Link } from "react-router-dom";

// Material ui components
import {
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

// Styles
import FormStyle from "../muiStyles/formStyles";
import useStyles from "../muiStyles/baseStyles";

export default function Signup() {
  const FormStyles = FormStyle();
  const classes = useStyles();
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password1: "",
    password2: "",
    firstName: "",
    lastName: "",
    type: "",
  });

  const handleSignUp = () => {
    console.log("function called");
    console.log(userData.email);
    console.log(userData);
  };

  return (
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
              Sign-Up
            </Typography>

            <FormControl
              fullWidth
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Your work
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={userData.type}
                onChange={(e) =>
                  setUserData({ ...userData, type: e.target.value })
                }
                required
                fullWidth
              >
                <MenuItem value={"student"}>Student</MenuItem>
                <MenuItem value={"company"}>Comapny</MenuItem>
              </Select>
            </FormControl>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstname"
              autoComplete="first name"
              value={userData.firstName}
              onChange={(e) =>
                setUserData({ ...userData, firstName: e.target.value })
              }
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastname"
              autoComplete="last name"
              value={userData.lastName}
              onChange={(e) =>
                setUserData({ ...userData, lastName: e.target.value })
              }
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password1"
              label="Set password"
              type="password"
              id="password1"
              value={userData.password1}
              onChange={(e) =>
                setUserData({ ...userData, password1: e.target.value })
              }
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Confirm password"
              type="password"
              id="password2"
              value={userData.password2}
              onChange={(e) =>
                setUserData({ ...userData, password2: e.target.value })
              }
            />

            <Button
              className={classes.mt}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleSignUp()}
            >
              Continue
            </Button>

            <Divider className={classes.mt} />

            <Typography align="center" variant="body2" className={classes.mt}>
              {"Already have an account ? 👇"}
            </Typography>

            <Link to="/login">
              <Button
                className={classes.mt}
                fullWidth
                variant="outlined"
                color="primary"
                
              >
                Log in 
              </Button>
            </Link>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
