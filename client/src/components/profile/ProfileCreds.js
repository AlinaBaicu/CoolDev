import React, { Component } from "react";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;
    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          <Moment format="DD/MM/YYYY">{exp.from}</Moment> -
          {exp.to === null ? (
            "Present"
          ) : (
            <Moment frormat="DD/MM/YYYY">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position: {exp.title}</strong>
        </p>
        <p>
          {exp.location === "" ? null : <span>Location: {exp.location}</span>}
        </p>
        <p>
          {exp.description === "" ? null : (
            <span>Description: {exp.description}</span>
          )}
        </p>
      </li>
    ));

    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.school}</h4>
        <p>
          <Moment format="DD/MM/YYYY">{edu.from}</Moment> -
          {edu.to === null ? (
            "Present"
          ) : (
            <Moment frormat="DD/MM/YYYY">{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree: {edu.degree}</strong>
        </p>
        <p>
          <strong>Field of study: {edu.fieldofstudy}</strong>
        </p>
        <p>
          {edu.description === "" ? null : (
            <span>Description: {edu.description}</span>
          )}
        </p>
      </li>
    ));
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">No experience listed</p>
          )}
        </div>

        <div className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          {eduItems.length > 0 ? (
            <ul className="list-group">{eduItems}</ul>
          ) : (
            <p className="text-center">No education listed</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;