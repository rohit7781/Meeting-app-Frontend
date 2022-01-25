import React from 'react'



function Footer() {



    return (
        <div style={{ backgroundColor: '#797890' }} >
            <footer className={` text-center text-white `} >

                <div className="container p-4 pb-0">

                    <section className="mb-4">
                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: '#3b5998' }}
                            href="https://www.facebook.com/profile.php?id=100009667187844 "
                            role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: '#55acee' }}
                            href="https://twitter.com/Rohit79653269?t=sn5M8gUbDL1Y0tNz-gLXQA&s=08"
                            role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: '#dd4b39' }}
                            href="/about"
                            role="button"
                        ><i className="fab fa-google"></i
                        ></a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: '#ac2bac' }}
                            href="https://www.instagram.com/r.ohit7781/"
                            role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: '#0082ca' }}
                            href="https://www.linkedin.com/in/rohitkumar96627b1b2/"
                            role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>
                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: '#333333' }}
                            href="https://github.com/rohit7781"
                            role="button"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>

                </div>


                <div className="text-center p-3" >
                    © 2020 Copyright Cloud on Notebook
                </div>
            </footer>
        </div>
    )
}

export default Footer
