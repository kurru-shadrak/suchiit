import { Button, Datepicker, Modal } from 'flowbite-react';
import React, { useState } from 'react'

function DirectorsMessage() {
    const [openModal, setOpenModal] = useState(false);

  return (
    <div className='grid grid-cols-3  p-10 w-3/4 ml-72'>
        <div>
            <img src='https://th.bing.com/th/id/OIP.fqA8eiv9ze2xTMSXCaOLrAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='' className='rounded-full'/>
        </div>
        
        <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400 ">
            <h1 className='text-2xl font-bold mb-3 '>Director's Message</h1>
            <p className='text-xl mb-3'>Suchiit continues to be ranked as the top consultant of the country and among the best in the world. Suchiit attracts the brightest students...
</p>
<Button onClick={() => setOpenModal(true)}>Read More</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Directors Message</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            IIT Bombay continues to be ranked as the top university of the country and among the best in the world. IIT Bombay attracts the brightest students from the country for its Bachelor's, Master's and Doctoral programmes. IIT Bombay has just concluded its celebration of 60th year of establishment and the Ministry of Human Resource and Development has recently granted the status of "Institution of Eminence" (IoE) to IIT Bombay.


            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">IIT Bombay is the most preferred academic Institute to a large number of organizations for recruiting outstanding employees with the potential for being their future leaders. These organizations, from both within India and abroad, are excited about the capability, skill, intellect and the professional readiness displayed by our students.


            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The reputation of IIT Bombay as one of India's top Placement Cells hinges on the unshakeable relationship we've built with our recruiters. With a meticulously designed recruitment process that has been improving year after year, we strive to provide our recruiters an experience that benefits our stature.


            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            We highly value our partnership with recruiters, alumni and friends of IIT Bombay and remain committed to making your recruiting experience enjoyable and rewarding. I invite the recruiting organizations and graduating students to work on finding the best match between expectations of the recruiters and the aspirations of the students.


            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Wish you all the best!


            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                K.P Rao<br/>
                <span className='font-bold'>Director , suchiit</span>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
          
        </Modal.Footer>
      </Modal>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                K.P Rao<br/>
                <span className='font-bold'>Director , suchiit</span>
            </p>
        </div>
        <div>
            {/* <Datepicker inline/> */}
        </div>

    </div>
  )
}

export default DirectorsMessage