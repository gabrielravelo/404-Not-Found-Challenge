import scarecrow from './images/Scarecrow.png';

export const App = () => {
  return (
    <>
      <div className="font-poppins p-3">
        <p className="font-inconsolata text-2xl uppercase text-left font-extrabold text-scarecrow-gray">404 Not Found</p>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-3 mt-5 md:mt-11'>
          <img className='max-w-xs md:max-w-lg' src={scarecrow} alt="scarecrow" />

          <div className='font-spacemono flex flex-col gap-5'>
            <h1 className='text-5xl md:text-6xl font-bold leading-tight md:leading-relaxed max-w-lg text-scarecrow-gray'>I have bad news for you</h1>
            
            <p className='text-scarecrow-gray-light text-2xl leading-9 md:max-w-sm mb-5'>The page you are looking for might be removed or is temporarily unavailable</p>

            <div>
              <a href="#" className='mt-2 md:mt-5 bg-scarecrow-gray p-4 text-white uppercase max-w-xs text-center font-bold'>Back to Homepage</a>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
