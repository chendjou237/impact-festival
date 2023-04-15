import React from 'react'

export default function Position() {
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        function handleResize() {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    <div id='position' className='mb-16'>
        <div className="">
            <p className="text-4xl font-bold mb-8 text-center text-light font-cinzel"   >Position</p>
            <hr className="mx-auto mb-8 border-primary border-solid border-2 w-16 rounded-full" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-x-8 space-y-8 ">
       <div className="flex justify-center ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127357.5729085332!2d9.671764043035585!3d4.035900744423692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128be2e1fe6d%3A0x92daa1444781c48b!2sDouala%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1681232662859!5m2!1sen!2sus" width={screenWidth > 768? "450":300} height={screenWidth > 768? "450":300}  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       </div>
     <div className="h-1 md:h-96 w-56 md:w-1  rounded bg-primary " ></div>
     <div className="flex flex-col space-y-8 items-center md:items-start text-white">
        <div className="font-biko">
            <p className='font-bold text-lg '>Event Address</p>
            <p className='pl-8'>Palais De Sport, Yaounde</p>
            <p></p>
        </div>
        <div className="">
            <p className='font-bold text-lg font-cinzel'>Email Us</p>
            <ul className='underline pl-8  font-biko'>
                <li>weareleadersnation@gmail.com</li>
            </ul>
        </div>
        <div className=" ">
            <p className='font-bold text-lg font-cinzel'>Call Us</p>
                <ul className='underline  pl-8 font-biko'>    
                    <li>672319243</li>
                    <li>695932632</li>
                    <li>652573659</li>
                </ul>
        </div>
     </div>
        </div>
    </div>
  )
}
