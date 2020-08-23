import React, { useRef, useEffect } from 'react';

const Notification = ({ play, audio }) => {
  const audioFile = useRef(null);
  const playAudio = () => {
    try {
      // audioFile.current.play();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    play && playAudio();
  }, [play, audio]);

  return (
    <audio ref={audioFile}>
      <source src={audio} />
    </audio>
  );
};
export default Notification;
