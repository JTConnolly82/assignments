import React from 'react';
import Picture from './Picture';

const SingleMission = (props) => {


  let patchStyle = {
    maxWidth: '150px'
  }
  let missionTopDesc = {
    display: 'flex',
    gridColumn: '1/3'
  }


  let missionTopInfo = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  let descriptionPicture = {
    display: 'flex'
  }
  

  let pics = props.links.flickr_images.slice(0, 1);

  let pictureComponents = pics.map((pic)=>{
    return <Picture key={Math.random()*888} picInfo={pic} />
  })
  

  return (
    <div className='missionWrap'>
      <div style={missionTopInfo}>
        <h2 className='mission-name'>{props.mission_name}</h2>
        <img style={patchStyle} src={props.links.mission_patch} alt=""/>
      </div>
      <div style={missionTopDesc}>
        <div>
          <h3>Rocket Name: {props.rocket.rocket_name}</h3>
          <h3>Launch Site: {props.launch_site.site_name_long}</h3>
          <h3>Date: {props.launch_date_local}</h3>
          <h3>Launch Success: {props.launch_success ? 'success!' : 'failure'}</h3>
          {props.launch_success ? 
            <div style={descriptionPicture}>
                <h4>{props.details}</h4>
                {pictureComponents}
            </div>
            :<div style={descriptionPicture}>
               <h4>Reason for failure: {props.launch_failure_details.reason}</h4>
               {pictureComponents}
            </div>}
        </div>
      </div>
      {/* <div style={rightContent}>
        
        <iframe  src={props.links.video_link} frameborder="0"></iframe>
      </div> */}
    </div>
  )
}

export default SingleMission;