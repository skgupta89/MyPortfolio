import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css'


function Footer() {
  return (
    <>
<div className='container-fluid footer'>
<a href='https://www.facebook.com/profile.php?id=100003236430949' rel="noreferrer" target='_blank' >

<FacebookIcon  className='icon'/>
</a>
<a href='https://github.com/skgupta89' rel="noreferrer" target='_blank' >

<GitHubIcon className='icon' />
</a>
<a href='https://www.linkedin.com/in/sandeep-gupta-a4a45b209/' rel="noreferrer" target='_blank' >

<LinkedInIcon className='icon' />
</a>
<a href='https://www.instagram.com/_sandeepgupta_0/' rel="noreferrer" target='_blank' >

<InstagramIcon className='icon' />
</a>


</div>
    </>
  )
}

export default Footer