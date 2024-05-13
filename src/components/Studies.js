import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Studies extends Component {
  render() {
    if (this.props.resumeStudies && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.studies;
      var studies = this.props.resumeStudies.map((study, i) => {
        const technologies = study.technologies;

        var techBadges = technologies.map((technology, j) => {
          return (
            <Badge pill className="study-badge mr-2 mb-2" key={j}>
              {technology}
            </Badge>
          );
        });

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--study"
            date={study.years}
            iconStyle={{
              background: "#E07C24",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fas fa-graduation-cap study-icon"></i>}
            key={i}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {study.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {study.institution}
            </h4>
            <div style={{ textAlign: "left", marginTop: "15px" }}>
              {techBadges}
            </div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="studies" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {studies}
            <VerticalTimelineElement
              iconStyle={{
                background: "#E07C24",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className="fas fa-hourglass-start mx-auto study-icon"></i>}
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Studies;
