import MyVideooo from './../../assets/VVIDS/Logo_Angel_NAAY.mp4';

const VideoPlayer = () => {
  return (
    <div>
      <video
        src={MyVideooo}
        autoPlay
        loop
        muted
        style={{ width: '300px', height: '300px' }}
      />
    </div>
  );
};

export default VideoPlayer;
