
import {BiTimeFive} from 'react-icons/bi'
// import logo1 from 'C:/Users/Anany/advanced-app-1/src/assets/images/usermodules/logo1.jpg'
// import logo2 from 'C:/Users/Anany/advanced-app-1/src/assets/images/usermodules/logo2.jpg'
// import logo3 from 'C:/Users/Anany/advanced-app-1/src/assets/images/usermodules/logo3.jpg'
// import logo4 from 'C:/Users/Anany/advanced-app-1/src/assets/images/usermodules/logo4.jpg'
// import logo5 from 'C:/Users/Anany/advanced-app-1/src/assets/images/usermodules/logo5.jpg'
// import logo6 from 'C:/Users/Anany/advanced-app-1/src/assets/images/usermodules/logo6.jpg'
// import logo7 from 'C:/Users/Anany/advanced-app-1/src/assets/images/usermodules/logo7.jpg'
// import logo8 from 'C:/Users/Anany/advanced-app-1/src/assets/images/usermodules/logo8.jpg'



const Date=[
    {
        id:1,
        // image:logo1,
        title:'Web Developer',
        time:'Now',
        location:'Canada',
        desc:'Novac is built on determination, and an spirit to help business transform and manage their operations by unlocking the value of technology, making us one of the leading business solution providers.',
        company:'Novac Linus Co.'
    },

    {
        id:2,
        // image:logo2,
        title:'UI Designer',
        time:'14 hrs',
        location:'Manchester',
        desc:'This company is built on determination, and an spirit to help business transform and manage their operations by unlocking the value of technology, making us one of the leading business solution providers.',
        company:'Liquid Assesments'
    },

    {
        id:3,
        // image:logo3,
        title:'Software Eng',
        time:'10 hrs',
        location:'Austria',
        desc:'Web tech agency is built on determination, and an spirit to help business transform and manage their operations by unlocking the value of technology, making us one of the leading business solution providers.',
        company:'Web Tech Agency'
    },

    {
        id:4,
        // image:logo4,
        title:'Ui/Ux Designer',
        time:'10 hrs',
        location:'Germany',
        desc:'Governmenty is built on determination, and an spirit to help business transform and manage their operations by unlocking the value of technology, making us one of the leading business solution providers.',
        company:'Governmenty'
    },

    {
        id:5,
        // image:logo5,
        title:'Product Designer',
        time:'Now',
        location:'Manchester',
        desc:'NewCastle is built on determination, and an spirit to help business transform and manage their operations by unlocking the value of technology, making us one of the leading business solution providers.',
        company:'NewCastle'
    },

    {
        id:6,
        // image:logo6,
        title:'Researcher',
        time:'5 hrs',
        location:'Norway',
        desc:'Nin Co. is built on determination, and an spirit to help business transform and manage their operations by unlocking the value of technology, making us one of the leading business solution providers.',
        company:'Nin Co.'
    },

    {
        id:7,
        // image:logo7,
        title:'Lead Developer',
        time:'14 hrs',
        location:'Switzerland',
        desc:'Nimeloi is built on determination, and an spirit to help business transform and manage their operations by unlocking the value of technology, making us one of the leading business solution providers.',
        company:'Nimeloi - UK'
    },

    {
        id:8,
        // image:logo8,
        title:'Data Scientist',
        time:'2 Days',
        location:'Turkey',
        desc:'Web tech agency is built on determination, and an spirit to help business transform and manage their operations by unlocking the value of technology, making us one of the leading business solution providers.',
        company:'Web Tech Agency'
    }
]

export default function UserJob  () {
  return (
    <div className='userjob flex gap-10 justify-center flex-wrap items-center py-10'>
        {
            Date.map(({id,title,time,location,desc,company})=>{
                return(

        <div key={id} className='groupuser group/item singlejob
        w-[250px] p-[20px] bg-white rounded[10px] 
        hover:bg-blueColor shadow-lg shadow-greyIsh-400/700
        hover:shadow-lg'>
              <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-textColor
                group-hover:text-white'>{title}</h1>
              <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive/>{time}
              </span> 
              </span>
              <h6 className='text-[#ccc]'>{location}</h6>
<p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
{desc}
</p>

<div className='companyuser flex items-center gap-2'>
   {/* <img src={image} alt='company logo' className='w-[10%]'/> */}
   <span className='text-[14px] py-[1rem] block group-hover:text-white'>
    {company}
   </span>

</div>
<button className='border-[2px] rounded-[10px] block p-[10px] w-full
text-[14px] font-semibold text-textColor hover:bg-white group-hover/
item:text-textColr group-hover:text-white'>
    Apply Now
</button>
        </div>
                )
            })
        }
    </div>
  )
}