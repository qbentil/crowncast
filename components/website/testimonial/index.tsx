import React from 'react'

const data = [
    {
        message: 'Crowncast was a game-changer for our pageant. The real-time voting feature allowed our contestants to see their progress throughout the competition, and the leaderboard kept our audience engaged throughout the event. I highly recommend Crowncast to anyone looking to run a more engaging and accurate contest.',
        name: 'Sarah',
        title: 'Pageant Organizer, Accra',
        image: '/assets/people/ell.svg'
    },
    {
        message: 'As a talent show organizer, I was looking for a way to improve the voting process and increase audience engagement. Crowncast delivered on both fronts. The app was easy to. The reporting feature also helped us to track the progress of our contestants.',
        name: 'Bentil',
        title: 'Talent Show Organizer, Kumasi',
        image: 'https://codersquiz.netlify.app/img/bentil.jpeg'
    }
]

const Testimony = ({ message, name, title, image }: { message: string, name: string, title: string, image: string }) => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-2 md:px-10'>
            <p className='text-md font-inter fond-500 text-center text-gray-900 leading-5'>
                {message}
            </p>
            <div className='w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center'>
                <img src={image} alt={name} className='w-full h-full rounded-full' />
            </div>
            <h1 className='text-[18px] font-inter fond-500 text-center text-gray-900 leading-5'>
                {name}
            </h1>
            <h1 className='text-smd font-inter fond-400 text-center text-gray-500 leading-5'>
                {title}
            </h1>
        </div>
    )
}

const Testimonial = () => {
    return (
        <div className='w-full overflow-x-hidden  flex flex-col items-center justify-center py-10 bg-gray-50'>
            <div className='w-[85vw] h-full flex flex-col items-center justify-center'>
                {/* heading */}
                <div className='w-full flex flex-col items-center justify-center gap-y-2 mb-4'>
                    <h1 className='text-sm text-center text-primary'>
                        Testimonial
                    </h1>
                    <p className='text-xl text-center'>
                        What our customers are saying
                    </p>
                    {/* actions */}
                    <h1 className='text-sm text-center text-gray-800'>
                        I will write something here
                    </h1>
                </div>

                {/* Mockups */}
                <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 mt-8'>
                    {
                        data.map((item) => (
                            <Testimony
                                message={item.message}
                                name={item.name}
                                title={item.title}
                                image={item.image}
                                key={item.message}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonial