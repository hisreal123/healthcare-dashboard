// import React from 'react'

import SearchBar from "../components/Misc/SearchBar.tsx"
// import  {FiSettings} from 'react-icons/fi'
import  {GoSettings} from 'react-icons/go'
import  {GiPerson} from 'react-icons/gi'
import  {FaWheelchair} from 'react-icons/fa'
import {Link} from  'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CardData = [
    {

        icons: <GoSettings  className=' text-2xl text-gray-700 md:text-3xl ' />,
        title: 'Getting Started',
        caption: 'Get your account up and running in just few steps',
        link : '/dashboard'
    },

    {

        icons: <GiPerson className=' text-2xl text-gray-700 md:text-3xl '/>,
        title: 'Doctors',
        caption: 'Get your information about personal Doctors',
        link : '/doctor'
    },

    {

        icons: < FaWheelchair  className=' text-2xl text-gray-700 md:text-3xl '/>,
        title: 'Patients Aid',
        caption: 'Knowing your status as a patient',
        link : '/patient'
    },
]
export const Jumbotrone= () => {
    return(
        <>
            <header className=' bg-[url("./helpBg.jpg")] bg-no-repeat bg-fixed bg-cover bg-top bg-blend-darken bg-purple-950/80 overflow-hidden px-4 lg:px-5 flex flex-col space-y-5 justify-center items-center h-[300px] md:h-[400px]'>
                <h1 className='text-lg md:text-2xl md:font-bold  text-white'> How Can We Help?</h1>
                <p className='text-xs text-center text-white/60 '>Find advice and answers from our support team fast or get in touch </p>
                <SearchBar wrapperStyle='w-[90%] mx-auto lg:max-w-[60%] bg-white ' mainStyle='w-full' SPlaceholder='Search for answers' />
            </header>
        </>
    )
}

export const Cards = () => {

    {}
    return (
        <>
            <section className='h-auto py-10 px-1 md:px-5 bg-gray-200/80 mt-3'>
                <h1 className='text-center text-purple-950  font-bold text-lg '>Browse All Topics</h1>
                <div className='CardWrapper  grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {CardData.map((data, index) => {
                        return(
                            <Link  to={data.link} key={index} className='py-4 px-2 h-[150px] hover: cursor-pointer hover:shadow-sm bg-white rounded-sm shadow-md flex  flex-col items-center justify-center text-center'>
                                    <span className='block '>{data.icons}</span>
                                    <h1 className='font-bold textmd md:text-lg text-gray-800 my-2'>{data.title}</h1>
                                    <p className='text-[.7rem] md:text-xs mt-2 text-gray-500 last-of-type: '>{data.caption}</p>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

// Featured blablabla






function FeaturedSections() {
    return (
        <div  className='px-3 bg-white md:w-[70%] md:mx-auto py-20'>

            <h1 className='font-bold text-purple-900 my-3'> Featured Questions</h1>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Getting your account ready</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <strong>This is the first item&#39;s accordion body.</strong>
                      You can modify any of this with custom CSS or overriding our default
                        variables. It&#39;s also worth noting that just about any HTML can
                        go within the <code>.accordion-body</code>, though the transition
                        does limit overflow.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Knowing Doctor's schedules</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <strong>This is the second item&#39;s accordion body.</strong>
                        You can modify any of this with custom CSS or overriding our default
                        variables. It&#39;s also worth noting that just about any HTML can
                        go within the <code>.accordion-body</code>, though the transition
                        does limit overflow.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Keeping your credentials safe</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <strong>This is the second item&#39;s accordion body.</strong>
                        You can modify any of this with custom CSS or overriding our default
                        variables. It&#39;s also worth noting that just about any HTML can
                        go within the <code>.accordion-body</code>, though the transition
                        does limit overflow.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Third party application authorization </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <strong>This is the second item&#39;s accordion body.</strong>
                        You can modify any of this with custom CSS or overriding our default
                        variables. It&#39;s also worth noting that just about any HTML can
                        go within the <code>.accordion-body</code>, though the transition
                        does limit overflow.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Drugs and free product for Emergency patients</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <strong>This is the second item&#39;s accordion body.</strong>
                        You can modify any of this with custom CSS or overriding our default
                        variables. It&#39;s also worth noting that just about any HTML can
                        go within the <code>.accordion-body</code>, though the transition
                        does limit overflow.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}

export default function Help() {
    return (
        <>
            <main className='lg:w-[90%] lg:mx-auto h-fit '>
                <Jumbotrone/>

                 {/*    All Topics*/}

                <section>
                    <Cards />

                    <FeaturedSections />

                    <div className='px-5'>
                    <div className='divider h-[.05rem] w-full relative bg-gray-400/50 my-3 '></div>
                    </div>

                    <div className=' flex flex-col justify-center w-full items-center h-[200px] mt-8'>
                        <h1 className='md:font-bolder font-bold text-purple-950 '> Didn't find an answer to your question ?</h1>
                        <p className='text-[.8rem]  text-center mt-2  md:font-bold'>  Get in touch with us for details on additional services and quality health talk </p>

                        <Link to='/'>
                            <button className=' bg-purple-950 text-white font-light w-fit px-4 py-2 rounded-md my-10'>
                                CONTACT US
                            </button>
                        </Link>
                    </div>

                    <div className='footer bg-gray-400/20 pt-3 pb-1 flex justify-center space-x-3 items-end'>
                        <Link to='/' className='text-gray-400 text-xs'>Help</Link>
                        <Link to='/help' className='text-gray-400 text-xs'>Faq</Link>
                        <Link to='/' className='text-gray-400 text-xs'>Contact</Link>
                    </div>
                </section>
            </main>
        </>
    )
}
