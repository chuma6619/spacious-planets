import React from 'react';
import { Link, } from 'react-router-dom';
import planet1  from "../images/planet-alpha1.svg";
import planet2  from "../images/planet-alpha2.svg";
import planet3  from "../images/planet-alpha3.svg";
import planet4  from "../images/planet-alpha4.svg";
import planet5  from "../images/planet-alpha5.svg";
import planet6  from "../images/planet-alpha6.svg";
import planet7  from "../images/planet-alpha7.svg";
import planet8  from "../images/planet-alpha8.svg";
import planet9  from "../images/planet-alpha9.svg";
import character13 from "../images/character13.png";
import character1 from "../images/character1.png";
import character8 from "../images/character8.png";
import character2 from "../images/character2.png";
import character12 from "../images/character12.png";
import character10 from "../images/character10.png";


const PLanets = () => {
    
    

    return (
        <div className=' container-fluid bg-color'>
            <div className="container ">
                <h1 className="pt-5 pb-5 fw-bolder">Spacious </h1>
                <div className="row">
                    <div className="col-5">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-12 mb-3">
                                <Link to="/Planets" className="text-decoration-none planet-bg rounded-3 py-2 px-4 fw-bold" id="text-black">PLANETS</Link>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
                                <Link to="/Characters" className="text-decoration-none " id="text-gray">CHARACTERS</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-12  ">
                        <Link to="#offcanvasExample" data-bs-toggle="offcanvas"  role="button" aria-controls="offcanvasExample" className='text-decoration-none'>
                            <div className='mt-3 border-radius mb-3 bg-white m-auto px-4 py-4'>
                                <div className='img-container  d-flex justify-content-center pt-3'><img src={planet1} className='img-fluid bg-white ' alt='planet1'></img></div>
                                <p className=' fw-bolder'>Planet Alpha</p>
                                <p className=''  id="text-gray">Pop: 235</p>
                            </div>
                        </Link>
                    </div>
                   
                    <div className="col-md-4 col-sm-12 ">
                        <Link to="#offcanvasExample" data-bs-toggle="offcanvas"  role="button" aria-controls="offcanvasExample" className='text-decoration-none'>
                            <div className='mt-3 border-radius mb-3 bg-white m-auto px-4 py-4'>
                                <div className='img-container  d-flex justify-content-center pt-3'><img src={planet2} className='img-fluid bg-white ' alt='planet2'></img></div>
                                <p className=' fw-bolder'>Planet Alpha</p>
                                <p className=''  id="text-gray">Pop: 235</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 col-sm-12 ">
                        <Link to="#offcanvasExample" data-bs-toggle="offcanvas"  role="button" aria-controls="offcanvasExample" className='text-decoration-none'>
                            <div className='mt-3 border-radius mb-3 bg-white m-auto px-4 py-4'>
                                <div className='img-container  d-flex justify-content-center pt-3'><img src={planet3} className='img-fluid bg-white ' alt='planet3'></img></div>
                                <p className=' fw-bolder'>Planet Alpha</p>
                                <p className=''  id="text-gray">Pop: 235</p>
                            </div>
                        </Link>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-4 col-sm-12 ">
                        <Link to="#offcanvasExample" data-bs-toggle="offcanvas"  role="button" aria-controls="offcanvasExample" className='text-decoration-none'>
                            <div className='mt-3 border-radius mb-3 bg-white m-auto px-4 py-4'>
                                <div className='img-container  d-flex justify-content-center pt-3'><img src={planet4} className='img-fluid bg-white ' alt='planet4'></img></div>
                                <p className=' fw-bolder'>Planet Alpha</p>
                                <p className=''  id="text-gray">Pop: 235</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 col-sm-12 ">
                        <Link to="#offcanvasExample" data-bs-toggle="offcanvas"  role="button" aria-controls="offcanvasExample" className='text-decoration-none'>
                            <div className='mt-3 border-radius mb-3 bg-white m-auto px-4 py-4'>
                                <div className='img-container  d-flex justify-content-center pt-3'><img src={planet5} className='img-fluid bg-white ' alt='planet5'></img></div>
                                <p className=' fw-bolder'>Planet Alpha</p>
                                <p className=''  id="text-gray">Pop: 235</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 col-sm-12 ">
                        <Link to="#offcanvasExample" data-bs-toggle="offcanvas"  role="button" aria-controls="offcanvasExample" className='text-decoration-none'>
                            <div className='mt-3 border-radius mb-3 bg-white m-auto px-4 py-4'>
                                <div className='img-container  d-flex justify-content-center pt-3'><img src={planet6} className='img-fluid bg-white ' alt='planet6'></img></div>
                                <p className=' fw-bolder'>Planet Alpha</p>
                                <p className=''  id="text-gray">Pop: 235</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <Link to="#offcanvasExample" data-bs-toggle="offcanvas"  role="button" aria-controls="offcanvasExample" className='text-decoration-none'>
                            <div className='mt-3 border-radius mb-3 bg-white m-auto px-4 py-4'>
                                <div className='img-container  d-flex justify-content-center pt-3'><img src={planet7} className='img-fluid bg-white ' alt='planet7'></img></div>
                                <p className=' fw-bolder'>Planet Alpha</p>
                                <p className=''  id="text-gray">Pop: 235</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 col-sm-12 ">
                        <Link to="#offcanvasExample" data-bs-toggle="offcanvas"  role="button" aria-controls="offcanvasExample" className='text-decoration-none'>
                            <div className='mt-3 border-radius mb-3 bg-white m-auto px-4 py-4'>
                                <div className='img-container  d-flex justify-content-center pt-3'><img src={planet8} className='img-fluid bg-white ' alt='planet8'></img></div>
                                <p className=' fw-bolder'>Planet Alpha</p>
                                <p className=''  id="text-gray">Pop: 235</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 col-sm-12 ">
                            <div className='mt-3 border-radius bg-white  px-3 py-4 mb-5'>
                                <Link to="#offcanvasExample" data-bs-toggle="offcanvas"  role="button" aria-controls="offcanvasExample" className='text-decoration-none'>
                                    <div className='img-container  d-flex justify-content-center pt-3'><img src={planet9} className='img-fluid bg-white '  alt='planet5'></img></div>
                                </Link>
                                <div className='row'>
                                    <div className='col-md-8 '>
                                        <Link to="#offcanvasExample" data-bs-toggle="offcanvas"  role="button" aria-controls="offcanvasExample" className='text-decoration-none'>
                                            <p className=' fw-bolder'>Planet Alpha</p>
                                            <p className=''  id="text-gray">Pop: 235</p>
                                        </Link>
                                    </div>
                        
                                    <div className='col-md-4'>
                                        <div className=' d-flex justify-content-end mb-3 img-fluid pt-lg-3 pt-md-3 pt-sm-0 btn border-0' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                <div className='modal-container' >
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg  row">
                            <div class="modal-content col-md-8 col-sm-12  px-3 py-5" id='border-radius'>
                                <div class="modal-header border-0">
                                    <h5 class="modal-title fw-bolder pb-3" id="exampleModalLabel">Planets</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div className='form-group'>
                                            <label className='form-label fw-bold' for="image">Image</label>
                                            <input type="file" className='form-control border-0' id='input-bg'></input>
                                            <p className='pt-3' id='text-gray'>Paste the URL of a JPG or PNG of max 20 kb</p>
                                        </div>

                                        <div className='form-group'>
                                            <label className='form-label fw-bold' for="name">Name</label>
                                            <input className='form-control border-0' id='input-bg'></input>
                                        </div>

                                        <div className='form-group pt-4'>
                                            <label className='form-label fw-bold' for="description">Description</label>
                                            <textarea className='form-control border-0' id='input-bg'></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div className='modal-footer d-flex justify-content-end border-0'>
                                    <button className='btn me-3' id='planet-bg' data-bs-dismiss="modal">CANCEL</button>
                                    <button className='btn  text-white' id='bg-black'>CREATE PLANET</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="offcanvas offcanvas-end border-radius my-2" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel"> </h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id='planet-bg'></button>
                    </div>
                    <div class="offcanvas-body">
                       <div className='heading'>
                            <h1 className=' fw-bolder'>Planet Alpha</h1>
                            <p className='pt-4' id='text-gray'>Planet Alpha is the place to be if you like everything related to planets.
                              I know it's a bit meta, but come see by yourself.
                            </p>
                            <p>Population</p>
                            <p className='fw-bolder'>234</p>
                        </div>
                        <div className='d-flex flex-row justify-content-between'>
                            <h6 id='text-gray'>CHARACTERS</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16" className='planet-bg rounded-3' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                        </div>
                        <div className='row'>
                            <div className='col-lg-5 col-md-6 col-sm-12'>
                                <div className='mt-3 mb-3'>
                                    <img src={character13} alt='character13' className='img-fluid rounded-3'></img>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 my-auto'>
                                <h6 className='fw-bolder'>Darlene Robertson</h6>
                                <p className='' id='text-gray' >23 friends</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-5 col-md-6 col-sm-12'>
                                <div className=' mb-3'>
                                    <img src={character1} alt='character1' className='img-fluid rounded-3'></img>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 my-auto'>
                                <h6 className='fw-bolder'>Kathryn Murphy</h6>
                                <p className='' id='text-gray' >23 friends</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-5 col-md-6 col-sm-12'>
                                <div className=' mb-3'>
                                    <img src={character8} alt='character8' className='img-fluid rounded-3'></img>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 my-auto'>
                                <h6 className='fw-bolder'>Jenny Wilson</h6>
                                <p className='' id='text-gray' >23 friends</p>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-5 col-md-6 col-sm-12'>
                                <div className=' mb-3'>
                                    <img src={character2} alt='character2' className='img-fluid rounded-3'></img>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 my-auto'>
                                <h6 className='fw-bolder'>Arlene McCoy</h6>
                                <p className='' id='text-gray' >23 friends</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-5 col-md-6 col-sm-12'>
                                <div className=' mb-3'>
                                    <img src={character12} alt='character12' className='img-fluid rounded-3'></img>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 my-auto'>
                                <h6 className='fw-bolder'>Darrell Steward</h6>
                                <p className='' id='text-gray' >23 friends</p>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-5 col-md-6 col-sm-12'>
                                <div className=' mb-3'>
                                    <img src={character10} alt='character10' className='img-fluid rounded-3'></img>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 my-auto'>
                                <h6 className='fw-bolder'>Bessie Cooper</h6>
                                <p className='' id='text-gray' >23 friends</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default PLanets;
