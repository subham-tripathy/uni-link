import React from 'react'
import NavBar from './Components/NavBar'

const about = () => {
    return (
        <section>
            <NavBar />
            <div className='my-20 border-4 bg-[#00000080] border-white rounded-2xl px-16 pt-7 pb-16 text-center mx-auto w-[90%]'>
                <h1 className='text-4xl font-bold mb-10 text-white'>
                    Uni Link
                </h1>
                <h2 className='text-xl text-white font-bold leading-loose text-justify'>
                    Welcome to Uni Link, where we believe in simplifying the complexities of managing student data for universities and industries. Our unified data verification system provides a single interface that connects various educational institutions and industries, allowing easy access to student data in a unified report. We understand the challenges of fragmented data sets and inefficient data verification processes, which is why we've developed a solution that streamlines data integration, ensures data accuracy, and enhances collaboration between universities and industries. With Uni Link, you can trust that your student data is secure and accessible for better decision-making and operational efficiency.
                </h2>
            </div>
        </section>
    )
}

export default about