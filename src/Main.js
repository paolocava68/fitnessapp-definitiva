import React from "react";
import "./Main.css";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBListGroup, MDBListGroupItem, MDBNavbarNav,
        MDBNavbarLink, MDBNavbarItem, MDBIcon } from "mdb-react-ui-kit";

function Main() {
    return (
        <div className={'main'} style={{marginTop: '50px'}} >
            <MDBContainer className={'pt-5'}>
                <MDBRow>
                    <MDBCol className={'col-xl-3'}>
                        <MDBCard className={'testimonial-card mb-3'}>
                            <div className={'card-up img-fluid sfondo-sid'} />
                            <div className={'avatar mx-auto white'}>
                                <img src={'https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg'}
                                     className={'rounded-circle img-fluid'} alt={'Avatar'} />
                            </div>
                            <MDBCardBody>
                                <h5 className={'font-weight-bolder mb-1'}>Francy89</h5>
                                <p>Francesco Rossi</p>
                                <hr className={'mb-2'} />
                                <MDBListGroup className={'list-group-flush'}>
                                    <MDBListGroupItem className={'list-group-item-action border-0 d-flex flex-column font-weight-bold'} tag={'a'} href={'#'}>
                                        <p className={'mb-0 d-flex justify-content-between'}>
                                            <span>Scheda atleta</span>
                                            <span className={'text-primary'}>47</span>
                                        </p>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className={'list-group-item-action border-0 d-flex flex-column font-weight-bold'} tag={'a'} href={'#'}>
                                        <p className={'mb-0 d-flex justify-content-between'}>
                                            <span>Programma atleta</span>
                                            <span className={'text-primary'}>7</span>
                                        </p>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className={'list-group-item-action border-0 d-flex flex-column font-weight-bold'} tag={'a'} href={'#'}>
                                        <p className={'mb-0 d-flex justify-content-between'}>
                                            <span>Visitatori</span>
                                            <span className={'text-primary'}>47</span>
                                        </p>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol className={'col-xl-8'}>
                        <MDBCard className={'mb-2'}>
                            <MDBCardBody>
                                <button type="button" className="btn btn-outline-dark btn-rounded btn-lg btn-block"
                                        data-mdb-ripple-color="dark" data-mdb-toggle="modal"
                                        data-mdb-target="#exampleModal">
                                    <i className="fas fa-edit fa-lg pe-2" aria-hidden="true"></i>Scrivi un post
                                </button>
                                <div className="d-flex justify-content-around mt-3 pt-1">
                                    <p className="font-weight-bold mb-0">
                                        <a href="#!" className="link-post px-2 pt-3" data-mdb-ripple-color="dark"
                                           data-mdb-toggle="modal" data-mdb-target="#exampleModal"><i
                                            className="far fa-image fa-lg pe-2 text-info"
                                            aria-hidden="true"></i>Foto</a></p>
                                    <p className="font-weight-bold mb-0">
                                        <a href="#!" className="link-post px-2 pt-3" data-mdb-ripple-color="dark"
                                           data-mdb-toggle="modal" data-mdb-target="#exampleModal"><i
                                            className="fab fa-youtube fa-lg pe-2 text-success" aria-hidden="true"></i>Video</a>
                                    </p>
                                    <p className="font-weight-bold mb-0">
                                        <a href="#!" className="link-post px-2 pt-3" data-mdb-ripple-color="dark"
                                           data-mdb-toggle="modal" data-mdb-target="#exampleModal"><i
                                            className="far fa-calendar-alt fa-lg pe-2 text-warning"
                                            aria-hidden="true"></i>Evento</a>
                                    </p>
                                </div>
                            </MDBCardBody>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <hr />
                                    <a href="#!" className="d-flex">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg"
                                             className="rounded-circle" height="55" alt="" loading="lazy" />
                                        <div className="d-flex align-items-center w-100 ps-3">
                                            <div className="d-flex flex-column w-100">
                                                <p className="mb-n2"><span className="link-underline">Alice Morricone</span><span
                                                    className="text-muted"> •
                    </span><span className="text-muted">3rd+</span></p>
                                                <p className="text-muted mb-n2"><span className="small">Affiliata Gym Natural</span>
                                                </p>
                                                <p className="text-muted mb-2"><span className="small">1w</span><span
                                                    className="small"> • </span><i
                                                    className="fas fa-globe-americas" aria-hidden="true"></i>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <p>You're stuck? Try this!</p>
                                    <a href="#!">#learningtocode</a>
                                    <a href="#!">#programming</a>
                                    <a href="#!">#softwaredevelopment</a>
                                    <div className="card mt-2 mx-n3 rounded-0 shadow-0">
                                        <div className="bg-image hover-overlay ripple rounded-0"
                                             data-mdb-ripple-color="light">
                                            <img
                                                src="https://mdbootstrap.com/img/Photos/new-templates/linkedin/img1.jpg"
                                                className="card-img-top rounded-0" alt="..." />
                                            <a href="#!">
                                                <div className="mask"
                                                     style={{backgroundcolor: 'rgba(255, 255, 255, .1)'}}></div>
                                            </a>
                                        </div>
                                        <a href="#!" className="card-body rounded-0 text-body"
                                           style={{backgroundcolor: '#efefef;'}}>
                                            <h6>4 Unsual Ways to Improve Your Programming Skills</h6>
                                            <p className="small mb-0"><span>medium.com</span><span> • </span><span>2 min read</span>
                                            </p>
                                        </a>
                                    </div>
                                    <MDBNavbarNav className='d-flex flex-row'>
                                        <MDBNavbarItem className='d-flex align-items-center'>
                                            <MDBNavbarLink href='#' className={'text-danger'}>
                                                <MDBIcon fas icon='heart' size={'xs'} className={'pe-1'} />
                                            </MDBNavbarLink>
                                        </MDBNavbarItem>
                                        <MDBNavbarItem className='d-flex align-items-center'>
                                            <MDBNavbarLink href='#' className={'text-info'}>
                                                <MDBIcon fas icon='thumbs-up' size={'xs'} className={'pe-1'} />
                                            </MDBNavbarLink>
                                        </MDBNavbarItem>
                                        <MDBNavbarItem className='d-flex align-items-center'>
                                            <MDBNavbarLink href='#' className={'text-warning'}>
                                                <MDBIcon fas icon='star' size={'xs'} className={'pe-1'} />
                                            </MDBNavbarLink>
                                        </MDBNavbarItem>
                                        <MDBNavbarItem className='d-flex align-items-center'>
                                            <MDBNavbarLink href='#' className={'icon-underline d-flex align-items-center'}>
                                                <span className={'small'}>7</span>
                                            </MDBNavbarLink>
                                        </MDBNavbarItem>
                                    </MDBNavbarNav>
                                    <hr className="mt-2" />
                                    <div className="d-flex justify-content-start flex-wrap">
                                        <button type="button"
                                                className="btn btn-outline-dark btn-rounded btn-sm mb-2 me-2"
                                                data-mdb-ripple-color="dark">
                                            This will help me...
                                        </button>
                                        <button type="button"
                                                className="btn btn-outline-dark btn-rounded btn-sm mb-2 me-2"
                                                data-mdb-ripple-color="dark">
                                            I wonder...
                                        </button>
                                        <button type="button"
                                                className="btn btn-outline-dark btn-rounded btn-sm mb-2 me-2"
                                                data-mdb-ripple-color="dark">
                                            Love this...
                                        </button>
                                        <button type="button"
                                                className="btn btn-outline-dark btn-rounded btn-sm mb-2 me-2"
                                                data-mdb-ripple-color="dark">
                                            Thank you...
                                        </button>
                                    </div>
                                    <div className="d-flex justify-content-start pt-3 mb-2">
                                        <p className="font-weight-bold mb-0 me-2">
                                            <a href="#!" className="link-post px-2 pt-3"><i
                                                className="far fa-thumbs-up fa-lg pe-2" aria-hidden="true"></i>Like</a>
                                        </p>
                                        <p className="font-weight-bold mb-0 me-2">
                                            <a href="#!" className="link-post px-2 pt-3"><i
                                                className="far fa-comment-dots fa-lg pe-2"
                                                aria-hidden="true"></i>Comment</a></p>
                                        <p className="font-weight-bold mb-0 me-2">
                                            <a href="#!" className="link-post px-2 pt-3"><i
                                                className="fas fa-share fa-lg pe-2" aria-hidden="true"></i>Share</a>
                                        </p>
                                        <p className="font-weight-bold mb-0 me-2">
                                            <a href="#!" className="link-post px-2 pt-3">
                                                <i className="far fa-paper-plane fa-lg pe-2" aria-hidden="true"></i>Send</a></p>
                                    </div>
                                </div>
                            </div>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Main;