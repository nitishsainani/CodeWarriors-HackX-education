import { makeStyles } from "@material-ui/core/styles";

const FormStyle = makeStyles((theme) => ({
  heading:{
    marginBottom:theme.spacing(3),
    fontSize:"2.5rem",
    fontWeight:"bold",
    color:"purple"
  },
  subContainer: {
    border:"1px solid blue",
    borderRadius:"12px",
    padding:theme.spacing(5)
    
  },
  container:{
    padding:theme.spacing(2)
  },
  svg:{
    position:"relative",
    [theme.breakpoints.down('sm')]:{
      display:"none"
    }
  },
  photo_uplaod_container:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",

  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  fullWidth: {
    width: "100%",
    height: 150,
  },
}));

export default FormStyle;
