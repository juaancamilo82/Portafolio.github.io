import React, {Component} from "react";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class CV extends Component {
    render() {
        let sectionName = '';
        let description = '';
        let downloadButtonText = '';


        if (this.props.resumeBasicInfo && this.props.resumeCV) {
            sectionName = this.props.resumeBasicInfo.section_name.cv;
            description = this.props.resumeCV.description;
            downloadButtonText = this.props.resumeCV.function;

        }

        // Agrega el botón para descargar la hoja de vida
        const downloadButton = (
            <button className="button" onClick={() => this.handleDownload()}>
                {downloadButtonText}
            </button>
        );

        return (
            <section id="cv">

                <div className="col-md-12 mx-auto">
                    <div className="col-md-12">
                        <h1 className="section-title" style={{color: "black"}}>
              <span className="text-black" style={{textAlign: "center"}}>
                {sectionName}
              </span>
                        </h1>
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <p>{description}</p>
                </div>


                <div className="text-center">
                    {downloadButton}
                </div>


            </section>
        );
    }

    handleDownload() {
        const downloadUrl = this.props.resumeCV.url;
        window.open(downloadUrl, '_blank');
    }
}

export default CV;
