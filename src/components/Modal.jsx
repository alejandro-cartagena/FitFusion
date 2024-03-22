import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import YouTube from 'react-youtube';

const opts = {
  height: '315',
  width: '560',
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
  width: '50%',
  height: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
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
  const [currentVid, setCurrentVid] = React.useState({
    video: '',
    description: '',
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCurrentVid({
      video: '',
      description: '',
    });
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
          <h2 className="muscleTitle">
            {open ? props.modalLifts[0].muscle : ''}
          </h2>
          <div className="modalFlex">
            <ul
              className={
                currentVid.video ? 'innerModal' : 'innerModal centerAuto'
              }
            >
              {props.modalLifts.map((el) => (
                <li
                  className="liftItem btn"
                  key={el.id}
                  onClick={() =>
                    setCurrentVid({
                      description: el.description,
                      video: el.video,
                    })
                  }
                >
                  {' '}
                  {el.name}
                </li>
              ))}
            </ul>

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
