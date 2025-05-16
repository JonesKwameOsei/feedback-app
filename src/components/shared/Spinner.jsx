import SpinnerGif from '../../assets/spinner.svg';

function Spinner() {
  return (
    <img
      src={SpinnerGif}
      alt="Loading..."
      style={{
        width: '200px',
        margin: 'auto',
        display: 'block'
      }}
    />
  )
}

export default Spinner;