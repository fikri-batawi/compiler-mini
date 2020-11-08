import React from 'react'
import ImageKomputer from '../assets/komputer.jpg'

const About = () => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <h1>Compiler Mini</h1>
                        <p>Aplikasi kompiler sederhan untuk melakukan analisa bahasa pemrogramman c++, C# dan Python</p>
                    </div>
                    <div className="col-md-6">
                        <div className="about-image">
                            <img src={ImageKomputer} alt="gambar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
