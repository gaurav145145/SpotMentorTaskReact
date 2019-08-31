import React from 'react';
import "./SidePanel.css";
import { connect } from 'react-redux';
import {addTodo} from '../../actions/classaction';

export class SidePanel extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
 

  render() {
    return (
      <div className="sidePanel">
      <div className="school">
        <h3> School: XYZ </h3>
      </div >
       <div className="classes">
       <ul>
       {this.props.classnamelist.map((data)=>
          <li  className="hoverbox" onClick={()=>{this.props.GetStudent(data.classname)}}>{data.classname}</li>
        )}
       </ul>
       </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    classnamelist: state
  }
};


export default connect(mapStateToProps)(SidePanel);
