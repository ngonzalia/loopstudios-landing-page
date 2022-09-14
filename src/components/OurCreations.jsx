// cards
import Card from './Card';

export default function OurCreations() {
  return (
    <section className='our-creations'>
      <h2 className='section-title josefin-sans w-300 black'>
        Our creations
      </h2>

      <div className='our-creations__cards'>
        <Card
          img='deep-earth'
          title='Deep earth' />
        <Card 
          img='night-arcade'
          title='Night arcade' />
        <Card
          img='soccer-team'
          title='Soccer team VR' />
        <Card
          img='grid'
          title='The grid' />
        <Card
          img='from-above'
          title='From up above VR' />
        <Card
          img='pocket-borealis'
          title='Pocket borealis' />
        <Card
          img='curiosity'
          title='The curiosity' />
        <Card
          img='fisheye'
          title='Make it fisheye' />
      </div>

      <div className='our-creations__btn-container'>
        <button type='button' className='our-creations__btn alata w400 black'>
          See all
        </button>
      </div>
    </section>
  );
}