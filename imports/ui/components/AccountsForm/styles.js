const styles = theme => ({
  formContainer: {
    position: 'relative',
    padding: 10,
    height: '400px',
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  fields: {
    height: '65%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  button: {
    width: '250px'
  },
  icon: {
    position: 'absolute',
    opacity: '0.5',
    top: 0,
    left: 0,
    transform: 'translate(-50%, -50%)',
    fontSize: 84,
    opacity: 0.1
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  buttonContainer: {
    height: '25%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'space-between'
  }
});

export default styles;
