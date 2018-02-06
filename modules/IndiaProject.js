import Analytics from './Analytics';
import React from 'react';
import NavLink from './NavLink';

class IndiaProject extends React.Component {
    constructor() {
        super()
    }
    componentDidMount(){
        Analytics.page('/IndiaProject');
    }
    render() {
        return (
            <div className='india-p-bg'>
            <section className='text-container'>
                <h1>The Jeevan Village</h1>
                <br />
                <p>Moving on from the incredible work done at The Jeevan School, we have already purchased 2 acres of land outside the city of Varanasi (from a campaign run a couple years back) and plan to build a brand new village, designed for the children alone.</p>

                <p>The centre will offer a home to 100 children and a school to over 500 more.</p>

                <p>The plan is to build classrooms, bedrooms, gardens and courtyards – a series of living and learning spaces that are all built with children’s development at heart.</p>
                
                <p>It will also be self-sustainable – with solar energy, an organic farm and innovative waste disposal techniques.</p>
                
                <p>It will offer pre-nursery to pre-university level schooling, an infirmary and workshops, staff, student and volunteer accommodation, a family support centre, computer room, library, creativity area, multiple gardens, kitchens, canteens, and recreational amenities.</p>
                
                <p>There will be classrooms for English, Science and Maths, and yoga will be enjoyed each morning.</p>
                <br />
                <br />
                <br />

                <div className='flex-row' style={{alignItems:'center', height:'auto'}}>
                    <div style={{width:'70%'}}>
                        <iframe className='video-iframe' width='560' height='315' src='https://www.youtube.com/embed/kROb6o4Fmkk' frameBorder='0' allowFullScreen></iframe>
                    </div>
                    <div className='volunteer-box' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <h3>Get involved!</h3>
                        <p style={{textAlign:'center'}}>If you would like to help make this project a reality, <a href="#donate" className="purple">make a donation</a>,  set up a 
                        <NavLink className='orange' to='/fundraise'> fundraising page</NavLink> on our behalf, or</p>
                        <p><a href="mailto:andy@scoopfoundation.com" className='purple-inverse-btn' style={{margin:0}}>get in touch with Andy today</a></p>
                    </div>
                </div>

            </section>
            <img className = 'home-bk' src = 'modules/assets/project-india-bg.jpg' />

            </div>
        );
    }
}

export default IndiaProject;