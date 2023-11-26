import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <section class="container col-xl-10 col-xxl-8 px-4 py-5" id='contacts'>
                    <div class="row align-items-center g-5 py-5">
                        <div class="col-lg-7 text-center text-lg-start">
                            <h1 class="display-4 fw-bold lh-1 mb-3">
                                A Click Away
                            </h1>
                            <p class="col-lg-10 fs-4">
                                Drop your email or Phone Number and we will start networking ASAP!
                            </p>
                        </div>
                        <div class="col-10 mx-auto col-lg-5">
                            <form class="p-5 border rounded-3 bg-light">
                                <div class="form-floating mb-3">
                                    <input
                                        type="test"
                                        class="form-control"
                                        id="floatingInput"
                                        placeholder="Your Name/NickName"
                                    />
                                    <label for="floatingInput">name/nickname</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                    />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                        type="tel"
                                        class="form-control"
                                        id="floatingInput"
                                        placeholder="+000 0000 000"
                                    />
                                    <label for="floatingInput">phone/tel number</label>
                                </div>
                                <div class="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Remember me
                                    </label>
                                </div>
                                <button class="w-100 btn btn-lg btn-primary" type="submit">
                                    DM Us
                                </button>
                                <hr class="my-4" />
                                <small class="text-muted"
                                >By clicking the big blue button, you agree to the terms of use.</small
                                >
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;