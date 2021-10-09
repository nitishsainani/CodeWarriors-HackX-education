import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mt: {
    marginTop: theme.spacing(1),
  },
  mtb: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  mt4: {
    marginTop: theme.spacing(4),
  },
  container: {
    border: "1px solid blue",
    borderRadius: "12px",
    padding: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
  },

  expand: {
    marginLeft: "auto",
  },
}));

export default useStyles;
