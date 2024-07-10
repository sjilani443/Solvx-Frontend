import React from 'react'

function Contact() {
  return (
    <div className="sm:px-20 sm:mx-10 sm:my-20 mb-[25vh] sm:mb-5 mx-5 py-10 flex flex-col justify-center items-center gap-10 font-outfit">
      <p className='text-3xl sm:mb-3 mb-8'>Contact Us:-</p>
      <div className='flex flex-col text-2xl md:gap-3 gap-3 justify-center items-center'>
        <a target='_blank' className='w-[70%] flex justify-between' href='https://www.linkedin.com/company/solvx-technologies/'>Linkedin <i class="fa-brands fa-linkedin"></i></a>
        <a target='_blank' className='w-[70%] flex justify-between' href="https://mail.google.com/mail/?view=cm&fs=1&to=sjilani443@gmail.com&su=Subject%20Here&body=Body%20text%20here">Gmail <i class="fa-solid fa-at"></i></a>
        <a target='_blank' className='w-[70%] flex justify-between' href="https://www.instagram.com/sk__jeelani/">Instagram <i class="fa-brands fa-instagram"></i></a>
        <a target='_blank' className='w-[70%] flex justify-between' href="https://www.instagram.com/sk__jeelani/">Twitter <i class="fa-brands fa-square-x-twitter"></i></a>
        <p className='w-full flex gap-4 sm:mt-10'>Phone : <p className='ml-2'>+91 9989033446</p></p>
        <p className='pt-10'>Thank You For Visiting <i class="fa-solid fa-heart"></i></p>
      </div>

    </div>
  )
}

export default Contact
