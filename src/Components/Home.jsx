import { Accordion, Button, Card, Carousel, ListGroup } from 'flowbite-react'
import React from 'react'

function Home() {
  return (
    <div>   
      <div className="h-[650px] mt-3 z-999 ">
      <Carousel>
        <div className="flex flex-col h-full items-center justify-center bg-no-repeat bg-cover bg-[url('https://media.istockphoto.com/photos/man-and-woman-clasping-hands-tenderly-picture-id530008463?k=6&m=530008463&s=612x612&w=0&h=s4WscVdOHiXcM_nC9Qt-TRwViwPiup9rCN7nm85OFl4=')]">
            <h1 className='text-2xl text-white uppercase font-bold	mb-3	'>Success begins here</h1>
        <button className='bg-[#0054a6] p-3 rounded-lg font-semibold hover:bg-blue-900'>Register Now</button>
        </div>
        <div className="flex flex-col h-full items-center justify-center bg-no-repeat bg-cover bg-[url('https://www.softwaresuggest.com/blog/wp-content/uploads/2018/06/10.jpg')]">
        <h1 className='text-2xl text-white uppercase font-bold	mb-3	'>Success begins here</h1>
        <button className='bg-[#0054a6] p-3 rounded-lg font-semibold hover:bg-blue-900'>Register Now</button>
        </div>
        <div className="flex flex-col h-full items-center justify-center bg-no-repeat bg-cover bg-[url('https://www.b3india.com/wp-content/uploads/2018/03/job-placement.jpg')]">
        <h1 className='text-2xl text-white uppercase font-bold	mb-3	'>Success begins here</h1>
          <button className='bg-[#0054a6] p-3 rounded-lg font-semibold hover:bg-blue-900'>Register Now</button>
        </div>
      </Carousel>
    </div>
{/* 
  <div className='grid grid-cols-3 justify-center items-center bg-[#0054a6] p-5 mt-3'>
    <div className='col-span-2'>
 < Card className="w-full">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      A one stop portal for Placements & Internships

      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Welcome to the recruitment website For Suchiit.
IIT is India's foremost industrial leadership development institution. Our graduates are a combination of rigorous thinking, hardwork and fundamental stronghold. They are nurtured by the institute to strive for excellence and deliver impact in their field of work. Let us begin...


      </p>
      <Button>
        Read more
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
    </div>
    
    
    <div className="flex justify-center">
      <ListGroup className="w-55 h-80 text-2xl">
        <ListGroup.Item >Placement Brochure <br className='text-left'/>2023-2024 {'>'}</ListGroup.Item>
        <ListGroup.Item>Placement Reports<br/> 2022-2023 {'>'}</ListGroup.Item>
        <ListGroup.Item>Placement Reports<br/> 2021-2022 {'>'}</ListGroup.Item>
        <ListGroup.Item disabled>Placement Reports<br/> 2020-2021{'>'}</ListGroup.Item>
      </ListGroup>
    </div>

  
    </div> */}
    
<div className='w-full grid grid-cols-2 justify-center items-center p-8 gap-5'>
    <div>
< img src="https://suchiit.com/wp-content/uploads/2023/07/smiling-business-lady-working-with-colleagues.jpg" />
</div>
<div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
      ABOUT OUR PLACEMENT SERVICES

      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-2xl ">
      SUCHI IT solution can provide significant benefits to a tech company in need of talent acquisition. By leveraging their expertise in recruitment and staffing, We offer a streamlined hiring process that saves time and resources for the company. This includes the initial screening of resumes and scheduling of interviews, as well as conducting thorough background checks and skill assessments. This not only ensures that the company finds the right candidates for the job, but also reduces the risk of bad hires and turnover. Moreover, SUCHI IT solution can offer access to a wider pool of candidates and niche skill sets, which may not be readily available through traditional recruitment channels. With these advantages, our staffing solution can help tech companies maintain a competitive edge in the market by hiring the best talent efficiently and effectively

      </p>
    </div>
    
</div>
<p className='text-3xl text-black font-bold   text-center mb-5 '>Why Choose us</p>
<div className="grid grid-cols-3 gap-5 mb-5">

<div className='border p-10 bg-blue-200 text-black justify-center items-center rounded-lg'>
<h1 className='font-bold text-2xl text-center mb-5'> TRUST
</h1>
<p className='text-xl'>Trust is paramount when choosing a partner to assist you with your needs. At Suchi IT, we prioritize building trust with our clients by providing reliable and professional services.

</p>
</div>
<div className='border p-10 bg-blue-200 text-black rounded-lg'>
<h1 className='font-bold text-2xl text-center mb-5'> AFFORDABLE

</h1>
<p className='text-xl'>We believe in affordability when it comes to pricing. Our clients can expect clear and comprehensive pricing information upfront, without any hidden costs or surprises.


</p>
</div>
<div className='border p-10 bg-blue-200 text-black rounded-lg'>
<h1 className='font-bold text-2xl text-center mb-5'> EVALUATION

</h1>
<p className='text-xl'>At Suchi IT, we take great pride in our track record of delivering high success rates in placements for each individuals seeking employment opportunities.


</p>
</div>
</div>
<div className='p-10 '>
    <h1 className='font-bold text-2xl text-center text-black mb-5'>FAQ</h1>
<Accordion>
      <Accordion.Panel>
        <Accordion.Title>What is Job placement ?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Job placement is a service that connects employers and employees. Also known as a recruitment agency, executive search or staffing agency, job placement services have an important role in helping individuals find work.


          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Where are you located ?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          We are located in USA and also we have branches in Canada and India.


          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How many interview will be schedule by your company ?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          We will schedule minimum 4 interviews.


          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>

</div>


  </div>



  )
}

export default Home