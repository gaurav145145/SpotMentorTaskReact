import React from "react";
import AveragePanel from "./AveragePanel";
import "./MainPanel.css";

export default class MainPanel extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  calculateAverage = data => {
    return Math.trunc(
      (data.marks.Maths + data.marks.Science + data.marks.English) / 3
    );
  };
  render() {
    return (
      <div className="mainpanel">
        {!this.props.MarksData && (
            <h1 className="altmainpanel">Select a Class</h1>
        )}
        {this.props.MarksData && (
          <div className="mainschool">
            <AveragePanel MarksData={this.props.MarksData} />
          </div>
        )}
        {this.props.MarksData && (
          <div className="studentmarks">
            <div className="gridcontainer">
              {this.props.MarksData.students.map(data => (
                <React.Fragment>
                  <div className="Reportcard">
                    <ul className="studentnameul">
                      <li className="studentnameli height30">
                        <p className="leftalign">{data.name}</p>
                        <p className="righttalign">
                          {this.calculateAverage(data)}%
                        </p>
                      </li>
                      <li className="studentnameli height70">
                        <div className="subjectspan1 width30">
                          <p className="leftalign leftalign1">Math</p>
                        </div>
                        <div className="subjectspan2 width60">
                          <div className="container">
                            <div
                              className="skills css"
                              style={{ width: data.marks.Maths + "%" }}
                            ></div>
                          </div>
                          <div className="subjectspan2  width10 float-R">
                            <p>{data.marks.Maths}%</p>
                          </div>
                        </div>
                        <div className="subjectspan1 width30">
                          <p className="leftalign leftalign1">Science</p>
                        </div>
                        <div className="subjectspan2 width60">
                          <div className="container">
                            <div
                              className="skills css"
                              style={{ width: data.marks.Science + "%" }}
                            ></div>
                          </div>
                          <div className="subjectspan2 width10 float-R">
                            <p>{data.marks.Science}%</p>
                          </div>
                        </div>

                        <div className="subjectspan1 width30">
                          <p className="leftalign leftalign1">English</p>
                        </div>
                        <div className="subjectspan2 width60">
                          <div className="container">
                            <div
                              className="skills css"
                              style={{ width: data.marks.English + "%" }}
                            ></div>
                          </div>
                          <div className="subjectspan2  width10 float-R">
                            <p>{data.marks.English}%</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
