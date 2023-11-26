import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import '../index.css';
import image from '../assets/images/bootstrap-themes.png'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                return (
                <main>
                    {/* CTO Part */}
                    <section className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img
                                    src={image}
                                    className="d-block mx-lg-auto img-fluid"
                                    alt="Bootstrap Themes"
                                    width="700"
                                    height="500"
                                    loading="lazy"
                                />
                            </div>
                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold lh-1 mb-3">Guild Code</h1>
                                <p className="lead">
                                    Quickly get your business portfolio and services online with ease,
                                    comfort and style. We value your business and adding more value to
                                    it is our top priority. Guild Code are professionals that care and
                                    are fun to work with.
                                </p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" className="btn btn-success btn-lg px-4 me-md-2">
                                        Hire Us
                                    </button>
                                    <button type="button" className="btn btn-outline-success btn-lg px-4">
                                        Our Projects
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                {/* <About />
                <Services />
                <Contact /> */}
                <Footer />
            </div>
        );
    }
}

export default Home;