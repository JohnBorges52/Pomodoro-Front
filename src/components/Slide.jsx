import classNames from 'classnames';
import { useEffect } from 'react';
import { useState } from 'react';
import '../styles/timer.scss'
import styled from 'styled-components'
import {Slider} from './Slider'

export const Slide = (props) => {  

  return (
    <div className='slider-container'>
    <div className='change-here'>
      <span> Slide here to change the time.</span>
    </div>

    <div className="selector-bar">

      <Slider
      value={props.value}
      type="range" 
       />
      
    <span className="input-value" id="test">
      {props.time}
    </span>


    </div>

      </div>
);

}