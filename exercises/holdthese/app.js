let handleSubmit = (e) => {
  e.preventDefault();
  let filteredMissions = this.state.missions.filter((mission)=>{
    if (this.state.missionName) {
        return mission.mission_name.toLowerCase().includes(this.state.missionName.toLowerCase()); 
    }        
  })
  this.setState({
    missions: filteredMissions
  })
}


--------------------------------------------------------------------------------------------------


if (this.state.missionName && this.state.year && this.state.showSuccess) {
  return mission.mission_name.toLowerCase().includes(this.state.missionName.toLowerCase()) && mission.launch_year === this.state.year && mission.launch_success === true;
} else if (this.state.missionName && this.state.year && this.state.showFailures) {
  return mission.mission_name.toLowerCase().includes(this.state.missionName.toLowerCase()) && mission.launch_year === this.state.year && mission.launch_success === false;
} else if (this.state.year && this.state.showSuccess) {
  return mission.launch_year === this.state.year && mission.launch_success === true;
} else if (this.state.year && this.state.showFailures) {
  return mission.launch_year === this.state.year && mission.launch_success === false;
} else if (this.state.missionName && this.state.showSuccess) {
  return mission.mission_name.toLowerCase().includes(this.state.missionName.toLowerCase()) && mission.launch_success === true;
} else if (this.state.missionName && this.state.showFailures) {
  return mission.mission_name.toLowerCase().includes(this.state.missionName.toLowerCase()) && mission.launch_success === false;
} else if (this.state.missionName && this.state.year) {
  return mission.mission_name.toLowerCase().includes(this.state.missionName.toLowerCase()) && mission.launch_year === this.state.year; 
} else if (this.state.showSuccess) {
  return mission.launch_success === true;
} else if (this.state.showFailures) {
  return mission.launch_success === false;
} else if (this.state.year) {
  return mission.launch_year === this.state.year
} else if (this.state.missionName) {
  return mission.mission_name.toLowerCase().includes(this.state.missionName.toLowerCase()); 
}