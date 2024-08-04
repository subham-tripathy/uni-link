import React from 'react'
import NavBar from './Components/NavBar'

const about = () => {
    return (
        <section>
            <NavBar />
            <div className='border-4 border-black dark:border-white rounded-2xl px-16 pt-7 pb-16 text-center mx-auto mt-10 glow-cyan w-[90%]'>
                <h1 className='text-6xl font-bold text-white text-shadow mb-10'>
                    Data Harmony
                </h1>
                <h2 className='text-2xl font-bold text-white text-shadow leading-relaxed'>
                    Welcome to Data Harmony, where we believe in simplifying the complexities of managing student data for universities and industries. Our unified data verification system provides a single interface that connects various educational institutions and industries, allowing easy access to student data in a unified report. We understand the challenges of fragmented data sets and inefficient data verification processes, which is why we've developed a solution that streamlines data integration, ensures data accuracy, and enhances collaboration between universities and industries. With Data Harmony, you can trust that your student data is secure and accessible for better decision-making and operational efficiency.
                </h2>
            </div>
        </section>
    )
}

export default about