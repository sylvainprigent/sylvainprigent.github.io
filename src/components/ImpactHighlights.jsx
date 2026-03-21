import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faClock, 
  faUsers, 
  faDatabase, 
  faMapMarkerAlt, 
  faFileAlt, 
  faFlask 
} from "@fortawesome/free-solid-svg-icons";
import useT from "../hooks/useT"


const ImpactHighlights = () => {
  const t = useT();

  const impactItems = [
    { icon: faClock, metric: "÷3", title: t("impact1_title"), description: t("impact1_desc") },
    { icon: faUsers, metric: "x5", title: t("impact2_title"), description: t("impact2_desc") },
    { icon: faDatabase, metric: "", title: t("impact3_title"), description: t("impact3_desc") },
    { icon: faMapMarkerAlt, metric: "", title: t("impact4_title"), description: t("impact4_desc") },
    { icon: faFileAlt, metric: "", title: t("impact5_title"), description: t("impact5_desc") },
    { icon: faFlask, metric: "", title: t("impact6_title"), description: t("impact6_desc") }
  ];

  return (
    <section className="container my-5">
      <div className="d-flex justify-content-between align-items-center">
                <h2 className="fw-bold">{t("Impact_highlights")}</h2>
      </div>
      <div className="mb-4">
        <p className="lead">{t("impact_highlights_desc")}</p>
      </div>

      <div className="row">
        {impactItems.map((item, index) => (
          <div key={index} className="col-lg-6 col-md-12 mb-3 d-flex align-items-start">
            <div style={{ fontSize: "32px", color: "#002e43", width: "50px", flexShrink: 0, marginRight: "15px" }}>
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <div>
              <h5 className="mb-1">
                {item.metric && <span className="fw-bold me-2" style={{color: "#002e43"}}>{item.metric}</span>}
                {item.title}
              </h5>
              <p className="text-muted mb-0">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactHighlights;