import React from "react";
import "./MainPanel.css";

export default class AveragePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showavg: false
    };
  }
  totalclassaverage = data => {
    let total = data.reduce(function(tot, avg) {
      return tot + avg.marks.Maths + avg.marks.Science + avg.marks.English;
    }, 0);

    return Math.trunc(total / (data.length * 3));
  };
  Averagebtn=()=>{

    this.setState({
        showavg:!this.state.showavg
    });
}
  render() {
    let btnname;
    if (!this.state.showavg) btnname = "Show Average";
    else btnname = "Hide Average";
    return (
      <React.Fragment>
        <div className="AverageBtn">
          <span className="AverageBtnlft">
            {this.props.MarksData.classname}
          </span>
          <span className="AverageBtnrft">
            <button onClick={this.Averagebtn}>{btnname}</button>
          </span>
          <br></br>
          <p className="tolstudent">
            {this.props.MarksData.students.length} students
          </p>
        </div>
        <div className="clsAverage">
        {this.state.showavg &&
          <div className="showavg">
            <p className="totalclsavg">
              Classroom Average Performance:{" "}
              {this.totalclassaverage(this.props.MarksData.students)}%
            </p>
          </div>
        }
        </div>
      </React.Fragment>
    );
  }
}
