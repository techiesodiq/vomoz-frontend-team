import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button, TextField } from "@material-ui/core";
import validate from "validate.js";
import { LearnMoreLink } from "components/atoms";
import Axios, { config } from "utilities/axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 300,
    },
  },
  mobile: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 10,
      maximum: 15,
    },
  },
  firstName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 120,
    },
  },
  lastName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 120,
    },
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 8,
    },
  },
  confirmPassword: {
    presence: { allowEmpty: false, message: "is required" },
  },
};

const Form = () => {
  const classes = useStyles();

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formState.isValid) {
      // window.location.replace("/");
      console.log("Validating");
      console.log(formState.values);

      Axios.post("signup/", { ...formState.values, orgId: "939001" }, config)
        .then((res) => {
         const data = res.data;
         localStorage.setItem("userData", data)
         const responseCode = data.responseCode
          if (responseCode === "00") window.location.href = "/login";
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setFormState((formState) => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };


  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              placeholder="First name"
              label="First name *"
              variant="outlined"
              size="medium"
              name="firstName"
              fullWidth
              helperText={
                hasError("firstName") ? formState.errors.firstName[0] : null
              }
              error={hasError("firstName")}
              onChange={handleChange}
              type="firstName"
              value={formState.values.firstName || ""}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              placeholder="Last name"
              label="Last name *"
              variant="outlined"
              size="medium"
              name="lastName"
              fullWidth
              helperText={
                hasError("lastName") ? formState.errors.lastName[0] : null
              }
              error={hasError("lastName")}
              onChange={handleChange}
              type="lastName"
              value={formState.values.lastName || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Mobile Number"
              label="Mobile Number *"
              variant="outlined"
              size="medium"
              name="mobile"
              fullWidth
              helperText={
                hasError("mobile") ? formState.errors.mobile[0] : null
              }
              error={hasError("mobile")}
              onChange={handleChange}
              type="text"
              value={formState.values.mobile || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="E-mail"
              label="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError("email") ? formState.errors.email[0] : null}
              error={hasError("email")}
              onChange={handleChange}
              type="email"
              value={formState.values.email || ""}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              placeholder="Password"
              label="Password *"
              variant="outlined"
              size="medium"
              name="password"
              fullWidth
              helperText={
                hasError("password") ? formState.errors.password[0] : null
              }
              error={hasError("password")}
              onChange={handleChange}
              type="password"
              value={formState.values.password || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Confirm Password"
              label="Confirm Password *"
              variant="outlined"
              size="medium"
              name="confirmPassword"
              fullWidth
              helperText={
                hasError("confirmPassword")
                  ? formState.errors.confirmPassword[0]
                  : null
              }
              error={hasError("confirmPassword")}
              onChange={handleChange}
              type="password"
              value={formState.values.confirmPassword || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                Fields that are marked with * sign are required.
              </Typography>
            </i>
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Send
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
            >
              Already have an account?{" "}
              <LearnMoreLink title="Sign in" href="/signin-cover" />
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
