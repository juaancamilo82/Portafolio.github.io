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
            <section id="skills">
                <div className="row">
                    <div className="three columns header-col">
                        <h1><span>{sectionName}</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        {downloadButton}
                    </div>
                </div>
            </section>
        );
    }

    handleDownload() {
        // URL de descarga directa del archivo en GitHub
        const downloadUrl = 'URL_de_descarga_directa_del_archivo_en_GitHub';

        // Abre una nueva ventana para descargar el archivo
        window.open(downloadUrl, '_blank');
    }
}

export default CV;
