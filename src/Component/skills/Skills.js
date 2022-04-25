import React from 'react'
import './skills.css'

function Skills(props) {
  return (
    <>
<div className='container skillcontainer' id={props.id}>
<div className='row'>
<div className='skill'>
<h1>My <span className='skilltag'>Skills </span></h1>
</div>
<div className='col-lg-3 progresstitle left sk'>
<div className='frontend'>
<h3>Frontend</h3>
<h5>React JS</h5>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="0">70%</div>
</div>
<h5>Javascript</h5>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="" aria-valuemin="0" aria-valuemax="100">80%</div>
</div>
<h5>CSS</h5>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">60%</div>
</div>
<h5>Redux</h5>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">50%</div>
</div>
<h5>Material UI</h5>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">60%</div>
</div>
<h5>Bootstrap</h5>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">80%</div>
</div>

</div>

<h5>HTML5</h5>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">90%</div>
</div>

</div>
<div className='col-lg-3 progresstitle right sk'>
<h3>Backend</h3>
<h5>NodeJs</h5>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="" aria-valuemin="0" aria-valuemax="100">50%</div>
</div>
<h5>MongoDB</h5>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="" aria-valuemin="0" aria-valuemax="100">60%</div>
</div>
</div>

<div className='offset-lg-2 col-lg-3 progresstitle endright sk '>
<h3>Other Skills</h3>
<h5>Git</h5>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">80%</div>
</div>

</div>
</div>

</div>

    </>
  )
}

export default Skills