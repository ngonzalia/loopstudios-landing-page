export default function Card(props) {
  
  return (
    <div className={`card card--${props.img}`}>
      <h3 className='card-title josefin-sans w-300 white'>
        {props.title}
      </h3>
      <div className='bg'></div>
      <div className='hover'></div>
    </div>
  );

};