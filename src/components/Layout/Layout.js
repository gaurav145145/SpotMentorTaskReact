import React from 'react';
import MainPanel from '../MainPanel/MainPanel';
import SidePanel from '../SidePanel/SidePanel';
import { connect } from 'react-redux';
import addTodo from '../../actions/classaction';
import "./Layout.css";

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state={
         studentdata:null
    };
  }
getstudentdata=(studentclass)=>{

this.setState({
  studentdata:this.props.classnamelist.find(obj=>obj.classname===studentclass)
});
//console.log(this.props.classnamelist.find(obj=>obj.classname===studentclass),"--hbj---",this.state.studentdata);
}
  render() {
    //console.log(this.state.studentdata);
    return (
      <div className="layout">
        <SidePanel GetStudent={this.getstudentdata}/>
        <MainPanel MarksData={this.state.studentdata}/>      
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    classnamelist: state
  }
};
export default connect(mapStateToProps)(Layout);