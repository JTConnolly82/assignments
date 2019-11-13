import React from 'react';
import axios from 'axios';
import './styles.css';
import SingleMission from './SingleMission';



class Missions extends React.Component {
  constructor() {
    super();
    this.state = {
      missions: [],
      missionName: '',
      year: '',
      showSuccess: false,
      showFailures: false,
    }
  }

  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/launches/past').then((res)=>{
      let newMissions = res.data.reverse()
      this.setState({
        missions: newMissions
      })
    })
  }

  handleChange = (e) => { 
    let {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleClearMissions = (e) => {
    e.preventDefault();
    axios.get('https://api.spacexdata.com/v3/launches/past').then((res)=>{
      let newMissions = res.data.reverse();
      this.setState({
        missions: newMissions,
        missionName: '',
        year: '',
        success: ''
      });
    });

  }

  handleLaunchSuccess = (e) => {
    let {name} = e.target;
    let status = !this.state[name]
    if (e.target.name === 'success') {
      this.setState({
        showSuccess: true
      })
    }
    if (e.target.name === 'failure') {
      this.setState({
        showFailures: true
      })
    }
  }


render() {
  let missionComponents = this.state.missions.map((mission)=>{
    return <SingleMission key={Math.random()*8888} {...mission}/>
  })


  let handleSubmit = (e) => {
    e.preventDefault();
    let filteredMissions = this.state.missions.filter((mission)=>{
      if (this.state.missionName) {
          return mission.mission_name.toLowerCase().includes(this.state.missionName.toLowerCase()); 
      } else if (this.state.year) {
        return mission.launch_year === this.state.year
      } else if (this.state.showFailures) {
        return mission.launch_success === false;
      } else if (this.state.showSuccess) {
        return mission.launch_success === true;
      }
    })
    this.setState({
      missions: filteredMissions
    })
  }


  // let  handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (this.state.year) {
  //     let filteredMissions = this.state.missions.filter((mission)=>{
  //       return mission.launch_year === this.state.year
  //     });
  //     this.setState({
  //       missions: filteredMissions
  //     })
  //   } if (this.state.missionName) {
  //     let filteredMissions = this.state.missions.filter((mission)=>{
  //       return mission.mission_name.toLowerCase().includes(this.state.missionName.toLowerCase());
  //     });
  //     this.setState({
  //       missions: filteredMissions
  //     })
  //   } if (this.state.success === true || this.state.success === false) {
  //     let filteredMissions = this.state.missions.filter((mission)=>{
  //       return mission.launch_success === this.state.success;
  //     });
  //     this.setState({
  //       missions: filteredMissions
  //     })
  //   } 
  // }

  return (
    <div className='mission-wrapper'>
     <div className='top-mission-styles'>
     <h1 id='launch-page-title'>Launch History</h1>
        <form className='mission-form' onSubmit={handleSubmit} name='missionForm'>
          <div className='mission-form-inputs'>
            <input onChange={this.handleChange} value={this.state.year} name='year' placeholder='year' />
            <input onChange={this.handleChange} value={this.state.missionName} name='missionName' placeholder='mission name' />
            <div className="checkdiv">
            <div><input onChange={this.handleLaunchSuccess} type='checkbox' name="success" /> Successes</div>
            <div><input onChange={this.handleLaunchSuccess} type='checkbox' name="failure" /> Failures</div>
            </div>
          </div>
          <button>Search</button>
        </form>
        <button onClick={this.handleClearMissions} className='mission-clear'>Reset</button>
     </div>
     <div className='mission-info-wrap'>
        {missionComponents}
     </div>
    </div>
  )
 }
}


export default Missions;