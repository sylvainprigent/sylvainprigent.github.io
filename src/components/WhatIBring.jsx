import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap, faBolt, faLineChart } from '@fortawesome/free-solid-svg-icons';

import useT from "../hooks/useT"

const WhatIBring = () => {
    const t = useT();

    return (
        <section className="container my-5">

            <div className="d-flex justify-content-between align-items-center">
                        <h2 className="fw-bold">{t("what_i_bring")}</h2>
            </div>
            <div className="mb-4">
                <p className="lead">{t("what_i_bring_desc")}</p>
            </div>

            <div className="row mt-5">

                {/* Box 1 */}
                <div className="col-md-4 col-sm-6 mb-4" >
                    <div className="panel panel-default text-center p-4 shadow-sm" style={{backgroundColor: "#f1f4f7"}}>
                        <div style={{ fontSize: '40px', marginBottom: '20px' }}>
                            <FontAwesomeIcon icon={faSitemap} />
                        </div>
                        <h3>{t("what_i_bring1")}</h3>
                        <p>{t("what_i_bring1_desc")}</p>
                    </div>
                </div>

                {/* Box 2 */}
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="panel panel-default text-center p-4 shadow-sm" style={{backgroundColor: "#f1f4f7"}}>
                        <div style={{ fontSize: '40px', marginBottom: '20px' }}>
                            <FontAwesomeIcon icon={faBolt} />
                        </div>
                        <h3>{t("what_i_bring2")}</h3>
                        <p>{t("what_i_bring2_desc")}</p>
                    </div>
                </div>

                {/* Box 3 */}
                <div className="col-md-4 col-sm-12 mb-4">
                    <div className="panel panel-default text-center p-4 shadow-sm" style={{backgroundColor: "#f1f4f7"}}>
                        <div style={{ fontSize: '40px', marginBottom: '20px' }}>
                            <FontAwesomeIcon icon={faLineChart} />
                        </div>
                        <h3>{t("what_i_bring3")}</h3>
                        <p>{t("what_i_bring3_desc")}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhatIBring;