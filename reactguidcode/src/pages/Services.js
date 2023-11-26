import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <section class="container py-5 mt-3" id="services">
                <h2 class="pb-2 border-bottom">Our Good Services</h2>
                <div class="row g-5 py-5">
                    <div class="feature col-md-4">
                        <div class="feature-icon bg-primary bg-gradient">
                            <svg class="bi" width="1em" height="1em">
                                <use href="#collection" />
                            </svg>
                        </div>
                        <h2>Software/Web</h2>
                        <p>
                            Get your software or website designed and developed by a team of competent engineers
                        </p>
                        <a href="#" class="icon-link">
                            Call to action
                            <svg class="bi" width="1em" height="1em">
                                <use href="#chevron-right" />
                            </svg>
                        </a>
                    </div>
                    <div class="feature col-md-4">
                        <div class="feature-icon bg-primary bg-gradient">
                            <svg class="bi" width="1em" height="1em">
                                <use href="#people-circle" />
                            </svg>
                        </div>
                        <h2>Graphics and Media</h2>
                        <p>
                            Get your brands and or media needs satisfied by the crew
                        </p>
                        <a href="#" class="icon-link">
                            Call to action
                            <svg class="bi" width="1em" height="1em">
                                <use href="#chevron-right" />
                            </svg>
                        </a>
                    </div>
                    <div class="feature col-md-4">
                        <div class="feature-icon bg-primary bg-gradient">
                            <svg class="bi" width="1em" height="1em">
                                <use href="#toggles2" />
                            </svg>
                        </div>
                        <h2>Online Presense</h2>
                        <p>
                            Marketing your brand using the best social tools that suit you
                        </p>
                        <a href="#" class="icon-link">
                            Call to action
                            <svg class="bi" width="1em" height="1em">
                                <use href="#chevron-right" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;