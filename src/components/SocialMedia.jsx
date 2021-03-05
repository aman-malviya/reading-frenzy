import React from 'react'
import SocialMediaLink from './SocialMediaLink'

export default function SocialMedia(props){
    return(<div className='social-media'>
        <ul className='d-flex' style={{'listStyle':'none'}}>
            <li>
                <SocialMediaLink url='https://www.facebook.com/Quizofficial.manit/' border={props.border} bg={props.bg} class='fab fa-facebook-f' />
            </li>
            <li>
                <SocialMediaLink url='https://instagram.com/quizzersclub?igshid=way1wjiqu8pp' border={props.border} bg={props.bg} class='fab fa-instagram' />
            </li>
            <li>
                <SocialMediaLink url='https://www.linkedin.com/company/quizzers-club-manit' border={props.border} bg={props.bg} class='fab fa-linkedin-in' />
            </li>
            <li>
                <SocialMediaLink url='/contact' border={props.border} bg={props.bg} class="far fa-envelope" />
            </li>
        </ul>
    </div>)
}
