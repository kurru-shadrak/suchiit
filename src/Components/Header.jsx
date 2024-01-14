import { Dropdown, Navbar } from 'flowbite-react'
import React from 'react'

function Header() {
  return (
    <Navbar fluid rounded className='bg-blue-600 text-white'>
    <Navbar.Brand  href="https://flowbite-react.com">
<img className='rounded-full bg-white h-12 w-12' src='https://yt3.googleusercontent.com/02yHYzZccolJTmpfkEdWDVcaIR-X4FhKtaMT44u91HVeh1GT_kZk_iqFvyVnyJe9_H-S1EncbQ=s176-c-k-c0x00ffffff-no-rj'/>
      <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white "></span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse >
      <Navbar.Link href="#" className='text-white text-lg' >
        Overview
      </Navbar.Link>
      <Navbar.Link  href="#" className='text-white  text-lg'>
        Why Recruit
      </Navbar.Link>
      <Navbar.Link href="#" className='text-white  text-lg'>Director Message</Navbar.Link>
      <Navbar.Link href="#" className='text-white  text-lg'>Recruitment Process</Navbar.Link>
      <Navbar.Link href="#" className='text-white  text-lg'>Contact us</Navbar.Link>
    </Navbar.Collapse>
    <Dropdown color='blue' label="Login" dismissOnClick={false} >
      <Dropdown.Item>Student Login</Dropdown.Item>
      <Dropdown.Item>Coordinator Login</Dropdown.Item>
      <Dropdown.Item>Recruitor Login</Dropdown.Item>
      <Dropdown.Item>Admin Login</Dropdown.Item>
    </Dropdown>

  </Navbar>

  )
}

export default Header