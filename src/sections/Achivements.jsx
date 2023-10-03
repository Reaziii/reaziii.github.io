import React from 'react'
import certificates from '../data/certifications.json'
const Achivements = () => {
    return (
        <section className="experience">
            <div className="section-title">
                <div className="title-body">
                    <p className="brc">{"<h3>"}</p>
                    <h3>
                        <span>02.1 </span>Certifications
                    </h3>
                    <p className="brc">{"</h3>"}</p>
                </div>
            </div>
            <div className="cetficates">
                {
                    certificates.map((item, key) => (
                        <div key={key} className="item">
                            <div className="cert-name">
                                {item.name}
                            </div>
                            <div className="cert-year">
                                {item.year}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Achivements