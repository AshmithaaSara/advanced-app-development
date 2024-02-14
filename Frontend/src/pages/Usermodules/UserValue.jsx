
// import lens from 'C:/Users/Anany/advanced-app-1/src/assets/images/usermodules/lens.jpg'
// import valentine from 'C:/Users/Anany/advanced-app-1/src/assets/images/usermodules/valentines.jpg'
// import shield from 'C:/Users/Anany/advanced-app-1/src/assets/images/usermodules/shield.jpg'
import 'C:/Users/seuth/advanced-app-1/src/assets/css/usercss/uservalue.css'


const UserValue = () => {
return(
        <div className='mb-[4rem] mt - [6rem]'>
            <h1 className=' text-textColor text-[25px] py-[2rem] pb- [ 3rem] font-bold w- [400px] block'>
                The value that holds us true and to account</h1>

            <div className='grid gap-[10rem] grid-cols-3 items-center'>

                <div className='singleGrid rounded - [10px] hover:bg-[#eeedf7] p-[1.5rem]'>
                    <div className='flex items-center gap-3'>
                        <div className='imgDiv p-[4px] rounded- [.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
                            {/* <img src={lens} alt='' className='w-[70%]'/> */}
                        </div>

                        <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
                    </div>
                    <p className='text-[13px] Otext-textColor opacity- [.7] py -[1rem] font-semibold'>
                        Things being made beautiful simple are at the heart of everything we do.
                    </p>
                </div>

                <div className='singleGrid rounded - [10px] hover:bg-[#f7edf5] p-[1.5rem]'>
                    <div className='flex items-center gap-3'>
                        <div className='imgDiv p-[4px] rounded- [.8rem] bg-inherit-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center'>
                            {/* <img src={valentine} alt='' className='w-[70%]'/> */}
                        </div>

                        <span className='font-semibold text-textColor text-[18px]'>Social Good</span>
                    </div>
                    <p className='text-[13px] Otext-textColor opacity- [.7] py -[1rem] font-semibold'>
                    We believe in making things better for everyone, even if just by a little bit!
                    </p>
                </div>

                <div className='singleGrid rounded - [10px] hover:bg-[#fcfae3] p-[1.5rem]'>
                    <div className='flex items-center gap-3'>
                        <div className='imgDiv p-[4px] rounded- [.8rem] bg-inherit-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center'>
                            {/* <img src={shield} alt='' className='w-[70%]'/> */}
                        </div>

                        <span className='font-semibold text-textColor text-[18px]'>Trust</span>
                    </div>
                    <p className='text-[13px] Otext-textColor opacity- [.7] py -[1rem] font-semibold'>
                    We work on the basis of creating trust which can be nurtured through authenticity and transparency
                    </p>
                </div>

            </div>

            <div className="usercard mt-[2rem] flex justify-between bg-greyIsh p-[5rem] rounded-[10px]">
                <div>
                    <h1 className='text-blueColor text-[30px] font-bold'>Ready to switch a career</h1>
                    <h2 className='text-textColor text-[25px] font-bold'>Lets get started</h2>
                </div>
                    <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor
                    hover:bg-white border-blueColor'>
                        Get Started
                    </button>

            </div>

        </div>
    )
}
export default UserValue;
