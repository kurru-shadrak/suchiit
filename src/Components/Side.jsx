import React from 'react'

'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';

function Side() {
  return (
    <div className=' rounded-lg w-[250px] h-[700px]'>
       
    <Sidebar aria-label="Sidebar with multi-level dropdown example  ">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Home
            </Sidebar.Item>
            <Sidebar.Collapse icon={HiShoppingBag} label="Students List">
              <Sidebar.Item href="#">Products</Sidebar.Item>
              <Sidebar.Item href="#">Sales</Sidebar.Item>
              <Sidebar.Item href="#">Refunds</Sidebar.Item>
              <Sidebar.Item href="#">Shipping</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#" icon={HiInbox}>
              Jobs
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Resumes
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Reports
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              Calander
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    
        </div>
  )
}

export default Side