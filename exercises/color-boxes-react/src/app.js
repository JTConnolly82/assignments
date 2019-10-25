import React from 'react';
import './styles.css';
import Box from './Box';
import { groupPatternsByBaseDirectory } from 'fast-glob/out/managers/tasks';


// Background Color
// Title
// Subtitle
// Information


const App = () => {

  let appSteeze = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  return (
    <div style={appSteeze}>
      <Box bgc='green' title='title' subtitle='text' information='info' />
      <Box bgc='aqua' title='title' subtitle='text' information='info' />
      <Box bgc='lightseagreen' title='title' subtitle='text' information='info' />
      <Box bgc='lightgreen' title='title' subtitle='text' information='info' />
      <Box bgc='pink' title='title' subtitle='text' information='info' />
      <Box bgc='lightpink' title='title' subtitle='text' information='info' />
      <Box bgc='lightskyblue' title='title' subtitle='text' information='info' />
      <Box bgc='cyan' title='title' subtitle='text' information='info' />
      <Box bgc='seagreen' title='title' subtitle='text' information='info' />
      <Box bgc='burlywood' title='title' subtitle='text' information='info' />
    </div>
  )
}

export default App;