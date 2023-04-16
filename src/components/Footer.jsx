import React from 'react'

const Footer = ({ footerAPI : {titles, links} }) => {
  return (
    <>
      <footer className='bg-theme pt-7 pb-5'>
        <div className='nike-container text-slate-200'>
          <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto gap-3 md:max-w-none md:gap-5'>
            {titles.map((val, i) => (
              <div className="grid items-center" key={i}>
                <h1 className='text-lg lg:text-bas md:text-sm font-semibold uppercase'>{val.title}</h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul className='grid gap-1 items-center' key={i}>
                {list.map((val, i) => (
                  <li key={i} className='text-sm sm:text-xs'>{val.link}</li>
                ))}
              </ul>
            ))}
          </div>
          <div className='mt-5 text-center'>
            <p className='text-sm md:text-center'>Copyright<sup className='text-base font-bold'>&copy;</sup>All Reserved Right 2022 <span className='font-semibold'>JSSTACK DEVELOPERS</span></p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
