import React from 'react'
import Vidhan from './Vidhan.jpg'
import Taniya from './Taniya.jpg'
function About() {
  return (
    <div>
    <div className='pl-40 pr-40 flex flex-col justify-cener items-center'>
        <div className='flex flex-col justify-center items-center relative h-6/7 w-6/7'>
          <img src="https://www.bodybuilding.com/images/2016/june/leg-workouts-for-men-7-best-workouts-for-quads-glutes-hams-header-v2-960x540.jpg"></img>
          <h1 className='absolute inset-x-0 bottom-0 text-center text-8xl text-white font-bold '>ABOUT 
          <br/>FLEX FLOW</h1>
        </div>
        <br/>
        <div className='text-white'>
            <h1 className='text-5xl font-semibold'>OUR MISSION</h1>
            <p className='text-lg'>At FLEX FLOW our mission is to build a platform that provides people with the knowledge, tools and products to reach their fitness and physique goals.</p>
            <h1 className='text-5xl font-semibold'>OUR HISTORY</h1>
            <p className='text-lg'>FlexFlow.com has grown from a hobby site to an online authority in the fitness industry with a reputation for publishing only the highest quality information and making it available for free to readers. Our website currently delivers more than 10,000 pages of content which includes workouts, articles, videos, meal plans, transformations, fitness tools, and expert guides.

            In 2024 we launched our store. In just 1 year the Flex Flow Store has become one of the largest and most recognized online retailers of sports supplements, fitness accessories and clothing. In addition to stocking more than 10,000 products from top brands, the Store provides customers with a wealth of supplement information and over 300,000 product reviews.

            saIn 2024, due to our massive growth and emergence as a premier leader in both the retail and content platforms, we ramped up our expansion by moving into a 60,000 sq. ft. purpose-built headquarters. The facilities house a custom built 4,000 sq. ft. gym and studio kitchen for the creation of video content. We expanded our content, sales, marketing, and video teams in preparation for the years ahead.</p></div>
        
      
    </div>
    <br/>
    <br/>

    <div>
      <h1 className='text-3xl font-bold text-white' style={{ textAlign: 'center' }}>Know the Developers</h1>
      <br/>
      {/* <div className="flex justify-center gap-10 p-8">
          <div className="rounded-lg shadow-lg overflow-hidden ">
              <div className="bg-gradient-to-br from-zinc-700 to-black p-6">
                <img src={Vidhan} alt="Vidhan Gupta" className="rounded-full mx-auto mb-4 h-[9vw] w-[9vw]"></img>
              </div>
              <div className="p-4 text-center bg-white">
                  <h3 className="font-bold text-lg">Vidhan Gupta</h3>
                  <p className="text-zinc-600">@vyshud</p>
                  <p>Hi! I am a Developer</p>
              </div>
          </div>
          <div className=" rounded-lg shadow-lg overflow-hidden ">
              <div className="bg-gradient-to-br from-zinc-700 to-black p-6">
              <img src={Taniya} alt="Vidhan Gupta" className="rounded-full mx-auto mb-4 h-[9vw] w-[9vw]"></img>
              </div> 
              <div className="p-4 text-center bg-white">
                  <h3 className="font-bold text-lg">Taniya</h3>
                  <p className="text-zinc-600">@hdknnc</p>
                  <p>Hi! I am a Developer</p>
              </div>
          </div>
          <div className=" rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-zinc-700 to-black p-6">
              <img src={Vidhan} alt="Vidhan Gupta" className="rounded-full mx-auto mb-4 h-[9vw] w-[9vw]"></img>
              </div>
              <div className="p-4 text-center bg-white">
                  <h3 className="font-bold text-lg">Vaishnavi Singh</h3>
                  <p className="text-zinc-600">@vmcmdh</p>
                  <p>Hi! I am a Developer</p>
              </div>
          </div>
          <div className=" rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-zinc-700 to-black p-6">
              <img src={Vidhan} alt="Vidhan Gupta" className="rounded-full mx-auto mb-4 h-[9vw] w-[9vw]"></img>
              </div>
              <div className="p-4 text-center bg-white">
                  <h3 className="font-bold text-lg">Vibhor</h3>
                  <p className="text-zinc-600">@vgynd</p>
                  <p>Hi! I am a Developer</p>
              </div>
          </div>
      </div> */}
      <div className='flex justify-center'>
        <div className="card h-72 w-64" style={{ margin: '0 10px', display: 'grid', gridTemplateRows: '6rem 3rem 3rem 1fr', gridTemplateColumns: '1fr', borderRadius: '30px', overflow: 'hidden', border: '25% solid black', boxShadow: '5px 5px 15px rgba(0, 0, 0,0.5)' }}>
          <div className="display-picture" style={{ gridRow: '2/4', gridColumn: '1/-1', padding: '0 24px', zIndex: 1 }}>
            <img style={{ height: '100%', aspectRatio: '1/1', borderRadius: '50%' }} src={Vidhan}alt="Developer's Picture" />
          </div>
          <div className="banner" style={{ gridRow: '1/3', gridColumn: '1/-1' }}>
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://t3.ftcdn.net/jpg/05/40/04/46/360_F_540044645_euvM4jng8cjqkpwT6NkjyfHePtREP3JA.jpg" alt="Banner" />
          </div>
          <div className="content bg-white" style={{ gridRow: '4/5', gridColumn: '1/-1', padding: '24px' }}>
            <h4 className='text-1xl font-bold'>Vidhan Gupta</h4>
            <p>@vgyshud</p>
            <h5 className='text-1xl font-bold'>Hi! I am a Developer</h5>
          </div>
        </div>
        <div className="card" style={{ margin: '0 10px', display: 'grid', gridTemplateRows: '6rem 3rem 3rem 1fr', gridTemplateColumns: '1fr', borderRadius: '30px', overflow: 'hidden', border: '25% solid black', boxShadow: '5px 5px 15px rgba(0, 0, 0,0.5)' }}>
          <div className="display-picture" style={{ gridRow: '2/4', gridColumn: '1/-1', padding: '0 24px', zIndex: 1 }}>
            <img style={{ height: '100%', aspectRatio: '1/1', borderRadius: '50%' }} src={Taniya} alt="Developer's Picture" />
          </div>
          <div className="banner" style={{ gridRow: '1/3', gridColumn: '1/-1' }}>
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://t3.ftcdn.net/jpg/05/40/04/46/360_F_540044645_euvM4jng8cjqkpwT6NkjyfHePtREP3JA.jpg" alt="Banner" />
          </div>
          <div className="content bg-white" style={{ gridRow: '4/5', gridColumn: '1/-1', padding: '24px' }}>
            <h4 className='text-1xl font-bold'>Taniya</h4>
            <p>@hdknnc</p>
            <h5 className='text-1xl font-bold'>Hi! I am a Developer</h5>
          </div>
        </div>
        <div className="card" style={{ margin: '0 10px', display: 'grid', gridTemplateRows: '6rem 3rem 3rem 1fr', gridTemplateColumns: '1fr', borderRadius: '30px', overflow: 'hidden', border: '25% solid black', boxShadow: '5px 5px 15px rgba(0, 0, 0,0.5)' }}>
          <div className="display-picture" style={{ gridRow: '2/4', gridColumn: '1/-1', padding: '0 24px', zIndex: 1 }}>
            <img style={{ height: '100%', aspectRatio: '1/1', borderRadius: '50%' }} src={Vidhan}alt="Developer's Picture" />
          </div>
          <div className="banner" style={{ gridRow: '1/3', gridColumn: '1/-1' }}>
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://t3.ftcdn.net/jpg/05/40/04/46/360_F_540044645_euvM4jng8cjqkpwT6NkjyfHePtREP3JA.jpg" alt="Banner" />
          </div>
          <div className="content bg-white" style={{ gridRow: '4/5', gridColumn: '1/-1', padding: '24px' }}>
            <h4 className='text-1xl font-bold'>Vaishnavi Singh</h4>
            <p>@vmcndmh</p>
            <h5 className='text-1xl font-bold'>Hi! I am a Developer</h5>
          </div>
        </div>
        <div className="card" style={{ margin: '0 10px', display: 'grid', gridTemplateRows: '6rem 3rem 3rem 1fr', gridTemplateColumns: '1fr', borderRadius: '30px', overflow: 'hidden', border: '25% solid black', boxShadow: '5px 5px 15px rgba(0, 0, 0,0.5)' }}>
          <div className="display-picture" style={{ gridRow: '2/4', gridColumn: '1/-1', padding: '0 24px', zIndex: 1 }}>
            <img style={{ height: '100%', aspectRatio: '1/1', borderRadius: '50%' }} src={Vidhan} alt="Developer's Picture" />
          </div>
          <div className="banner" style={{ gridRow: '1/3', gridColumn: '1/-1' }}>
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://t3.ftcdn.net/jpg/05/40/04/46/360_F_540044645_euvM4jng8cjqkpwT6NkjyfHePtREP3JA.jpg" alt="Banner" />
          </div>
          <div className="content bg-white" style={{ gridRow: '4/5', gridColumn: '1/-1', padding: '24px' }}>
            <h4 className='text-1xl font-bold'>Vibhor</h4>
            <p>@vgynnd</p>
            <h5 className='text-1xl font-bold'>Hi! I am a Developer</h5>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default About
