import React, { Component } from "react";

class CV extends Component {
  render() {
    if (this.props.sharedCV && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.cv;
      var cv = this.props.sharedCV.icons.map(function (cv, i) {
        return (
            <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={cv.class} style={{ fontSize: "220%" }}>
                  <p
                      className="text-center"
                      style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {cv.name}
                  </p>
                </i>
              </div>
            </span>
            </li>
        );
      });
    }

    return (
        <section id="skills">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">{sectionName}</h2>
                <ul className="list-inline">{cv}</ul>
                <h3 className="section-subheading text-muted">
                  Descarga mi hoja de vida para obtener más detalles sobre mi experiencia y habilidades.
                </h3>
                <div className="mt-4">
                  <a href="/public/CV_JuanCamiloPeñaMarinEnglish.pdf" className="btn btn-primary btn-xl" download>
                    Descargar CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default CV;
