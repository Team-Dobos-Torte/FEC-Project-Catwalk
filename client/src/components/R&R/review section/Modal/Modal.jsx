import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import ModalStarRating from './ModalStarRating';
import ModalRadioList from './ModalRadioList';
import RecommendRadioBtn from './RecommendRadioBtn';
import ReviewTextArea from '../Review Body/ReviewTextArea';
import ImageUpload from './ImageUpload';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'rgb(45 52 66)',
    color: '#fff',
    border: '2px solid rgb(45 52 66)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    width: '1200px',
    height: '750px',
  },
}));

export default function AnimatedModal({ metaData }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        color='primary'
        style={{
          fontSize: '20px',
        }}
        variant='contained'
        onClick={() => handleOpen()}>
        ADD A REVIEW +
      </Button>

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <ReviewTextArea />
                <div style={{ marginTop: '20px' }}>
                  <ImageUpload />
                </div>
              </Grid>
              <Grid item xs={6}>
                <h2 style={{ color: '#eeeeee' }}>Overall Rating *</h2>
                <ModalStarRating />
                <div style={{ marginTop: '30px' }}>
                  <h2 style={{ color: '#eeeeee' }}>Characteristics *</h2>
                  <ModalRadioList metaData={metaData} />
                </div>
                <div style={{ marginTop: '130px' }}>
                  <RecommendRadioBtn />
                  <Button
                    form='review-form'
                    type='submit'
                    color='primary'
                    style={{
                      fontSize: '20px',
                      marginTop: '-45px',
                      float: 'right',
                    }}
                    variant='contained'>
                    Submit
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
