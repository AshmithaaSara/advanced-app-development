
import 'C:/Users/seuth/advanced-app-1/src/assets/css/usercss/usernav.css'

export default function UserNav () {
  return (
    <div className='navbar flex justify-between items center p-[2rem]'>
        <div className='logoDiv'>
            <h1 className='logo text-[30px] text-blueColor '><strong>Skill</strong>Up</h1>
        </div>
        <div className='menu flex gap-8'>
            <li id='userli' className='menulist text-[#6f6f6f] hover:text-blueColor'>Jobs</li>
            <li id='userli' className='menulist text-[#6f6f6f] hover:text-blueColor'>Companies</li>
            <li id='userli' className='menulist text-[#6f6f6f] hover:text-blueColor'>About</li>
            <li id='userli' className='menulist text-[#6f6f6f] hover:text-blueColor'>Contact</li>
        </div>
    </div>
  )
}