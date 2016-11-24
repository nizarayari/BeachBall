import React, { Component } from 'react';
import Circle from './Circle'

export default class App extends Component {
  
  renderCircles(){
  
  let circlesAttribute = [
                  {top: 10 , right: 290, height:30 , width:30 },
                  {top: 130 , right: 460, height:100 , width:100 },
                  {top: 370 , right: 640, height:50 , width:50 },
                  {top: 290, right: 520, height:40 , width:40 },
                  {top: 90 , right: 200, height:100 , width:100 },
                  {top: 40 , right: 490, height:40 , width:40 },
                  {top: 110 , right: 660, height:100 , width:100 },
                  {top: 520 , right: 400, height:40 , width:40 },
                  {top: 330 , right: 220, height:40 , width:40 },
                  {top: 340 , right: 925, height:40 , width:40 },
                  {top: 150 , right: 1180, height:80 , width:80 },
                  {top: 312 , right: 1040, height:40 , width:40 },
                  {top: 493 , right: 1100, height:70 , width:70 },
                  {top: 159 , right: 950, height:80 , width:80 },
                  {top: 145 , right: 820, height:40 , width:40 },
                  {top: 420 , right: 600, height:250 , width:250 },
                  {top: 220 , right: 750, height:40 , width:40 },
                  {top: 200 , right: 50, height:80 , width:80 },
                  {top: 300 , right: 360, height:40 , width:40 },
                  {top: 250 , right: 400, height:40 , width:40 }
                ]
    let circleToRender = circlesAttribute.map((attr)=>{
      return <Circle coord={attr}/>
    })

    return circleToRender;

  }

  render() {
    return (
      <div>
        {this.renderCircles()}
      </div>
    );
  }
}
