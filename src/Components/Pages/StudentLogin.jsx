import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
'use client';

function StudentLogin() {
  const navigate=useNavigate()
  return (
    <div className='' style={{margin:"170px 300px 300px 500px"}}>
        <form className="flex max-w-md flex-col gap-4  mt-4 border p-5 ml-5 rounded-lg ">
      <div>
        <h1 className='text-xl font-bold text-center mb-3'>Login</h1>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit" onClick={()=>navigate('/dashboard')}>Submit</Button><br/>
      <Button type="submit" onClick={()=>navigate('/register')} className='bg-green-600'>Register</Button>
    </form>

    </div>
  )
}

export default StudentLogin