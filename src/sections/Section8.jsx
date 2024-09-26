import background from '../../public/images/img1.jpg';
import foreground from '../../public/images/img8.svg';

const Section8 = () => {
  return (
    <div
      className='bg-slate-800' id='Section8'
    >
      <div className="flex justify-center items-center h-full">
        <img
          src={foreground} // replace with your foreground image URL
          alt="Foreground Image"
          className=" h-screen "
        />
      </div>
    </div>
  )
};
export default Section8;