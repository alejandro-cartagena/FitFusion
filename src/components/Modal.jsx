import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import YouTube from 'react-youtube';

const opts = {
  height: '315',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '75%',
  maxWidth: '960px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '4px',
  outline: 0,
  p: 4,
  overflowY: "auto"
};

export default function BasicModal(props) {
  function extractVideoId(url) {
    if (typeof url !== 'string' || !url.trim()) {
      return null;
    }
    const regex = /(?:\?|&)v=([^&]+)/;
    const match = url.match(regex);
    if (match) {
      return match[1];
    }
    return null;
  }

  const [open, setOpen] = React.useState(false);
  const [selectedBtn, setSelectedBtn] = React.useState(null);
  const [currentVid, setCurrentVid] = React.useState({
    video: '',
    description: '',
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setSelectedBtn(null);
    setOpen(false);
    setCurrentVid({
      video: '',
      description: '',
    });
  };
  const handleButtonClick = (el) => {
    setCurrentVid({
      description: el.description,
      video: el.video,
    });
    setSelectedBtn(el.id); // Set the selected button ID
  };

  React.useEffect(() => {
    props.isModalOpen ? handleOpen() : '';
  }, [props]);
  //        React.useEffect(() => {
  //      console.log(extractVideoId(currentVid))
  //   }, [currentVid]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className="muscleTitle section-heading">
            {open ? props.modalLifts[0].muscle : ''}
          </h2>
          <div className="modalFlex">
            <div
              // className={
              //   currentVid.video ? 'innerModal' : 'innerModal centerAuto'
              // }
              className={
                currentVid.video 
                  ? (selectedBtn ? 'innerModal innerModalSelected' : 'innerModal centerAuto')
                  : 'innerModal'
              }
            >
              {props.modalLifts.map((el) => (
                <button
                  className={`liftItem btn ${selectedBtn && selectedBtn === el.id ? 'selected' : ''} 
                  ${selectedBtn ? 'liftItemSelected' : ''}`}
                  key={el.id}
                  onClick={() => handleButtonClick(el)}
                >
                  {' '}
                  {el.name}
                </button>
              ))}
            </div>

            <div className="vidFlex">
              <p className="descriptionText"> {currentVid.description}</p>
              {currentVid.video && (
                <YouTube
                  videoId={extractVideoId(currentVid.video)}
                  opts={opts}
                />
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}