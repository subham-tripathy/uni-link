import React from 'react'

const HeroSection = () => {
    return (
        <section>
            <div className='border-4 border-black dark:border-white w-max rounded-2xl px-16 py-16 text-center mx-auto mt-10 glow-cyan'>
                <h1 className='text-5xl font-semibold mb-7'>
                    Welcome to Uni Link
                </h1>
                <h6 className='text-lg dark:bg-white dark:text-black w-max mx-auto px-3 rounded-lg font-semibold'>Connecting Universities and Industries by Integrating Student's data</h6>
            </div>
        </section>
    )
}

export default HeroSection