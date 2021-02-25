import React from 'react'
import Header from '../Header'
import Footer from '../Footer'


function Blog1(){
    return(<div style={{'padding':'0 0'}}>
    <Header />
    <div style={{'padding':'0 15%'}}>
        <div className='latest-tile' style={{'background':'url(/Assets/6.jpg)', 'backgroundSize':'cover', 'backgroundPosition':'center'}}>
        <div className='latest-blog-type'>
        <h6 style={{'textTransform':'upperCase', 'fontSize':'0.9rem', 'color': '#010101', 'opacity':'0.6','letterSpacing':'0.5px'}}>Science</h6>
        </div>
        </div>
        <div className='latest-blog-described'>
        <h1 style={{'fontFamily':'"EB Garamond", serif', 'fontWeight':'500', 'fontSize':'3.5rem'}}>How Parkinson’s Law is affecting our lives</h1>
        <br />
        <br />

        <p style={{'padding':'2% 0', 'opacity':'0.9', 'letterSpacing':'0.7px', 'fontWeight':'500'}}>It’s been more than 4 months since our honourable Prime Minister Narendra Modi announced a nationwide lockdown on 22 March, that is more than a quarter of a year. It’s been for these 4 months, most of us are sitting at our homes cursing the virus and hoping that everything gets back to normal as soon as possible. But with the global corona cases reaching more than 14 million (as of 18th July), we have to concede that there lies no hope of controlling this pandemic, other than a vaccine. A vaccine is the only ray of hope for the world suffering from the pandemic, but why are we so optimistic of a vaccine being developed so early. 
        <br /><br />According to various reports, vaccines generally take more than 10 years to be completely developed and costs more than a half a billion-dollar( just for development, excluding production and distribution costs). Each vaccine has to go through many phases of trials before being finally approved for the widespread use and each stage of the trial usually takes at least 2–3 years to be completed. We still don’t have a vaccine for some diseases (eg HIV) which have led to millions of death worldwide. The fastest vaccine developed until now took more than 5 years to be completed still, we all are optimistic enough that a COVID-19 vaccine could be developed in a year, that is more than 5 times faster than the fastest vaccine developed till date.</p>
        <hr style={{'border':'0', 'borderTop':'1px solid rgba(0,0,0,0.3)', 'marginTop':'8%'}}></hr>
        <p style={{'fontFamily':'"EB Garamond", serif', 'opacity':"0.8", 'display':'inline', 'fontSize':'0.8rem', 'font-family': "'Montserrat', sans-serif"}}>25 February 2021 <span style={{'float':'right'}}>Archit Chibbar</span></p>
        </div>
    </div>
    <Footer />
    </div>)
}
export default Blog1;