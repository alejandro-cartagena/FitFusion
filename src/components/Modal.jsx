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
  height: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
       React.useEffect(() => {
     props.isModalOpen ? handleOpen () : '';
  }, [props]);


  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <h2>{open ? props.modalLifts[0].muscle : ''}</h2>
            <div className="modalFlex">
                <ul>
                    {props.modalLifts.map(el => <li key={el.id}>{el.name}</li>)}
                </ul>
             <YouTube videoId="pihE-4HWZx0" opts={opts} />
            </div>
        </Box>
      </Modal>
    </div>
  );
}