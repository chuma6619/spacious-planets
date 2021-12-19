import React from 'react';
import {Link} from "react-router-dom";
import character6 from "../images/character6.png";
import character17 from "../images/character17.png";
import character12 from "../images/character12.png";
import character14 from "../images/character14.png";
import character2 from "../images/character2.png";
import character15 from "../images/character15.png";
import character10 from "../images/character10.png";
import character16 from "../images/character16.png";
import character11 from "../images/character11.png";
import character3 from "../images/character3.png";
import character13 from "../images/character13.png";
import character9 from "../images/character9.png";



const Characters = () => {
    
    return (
        <div className='container-fluid bg-color'>
            <div className='container'>
                <h1 className="pt-5 pb-5 fw-bolder ">Spacious </h1>
                <div className="row">
                    <div className=" col-md-8 col-sm-12">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
                                <Link to="/Planets" className="text-decoration-none  " id="text-gray">PLANETS</Link>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
                                <Link to="/Characters" className="text-decoration-none planet-bg rounded-3 py-2 px-4 fw-bold" id="text-black">CHARACTERS</Link>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-4 col-sm-12 mb-3 d-flex justify-content-md-end justify-content-sm-start ">
                        <select className='planet-bg rounded-3 py-1 px-3 border-0 fw-bold'>
                            <option vlaue="Planet: All" selected > Planet: All</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-12  mt-3 mb-3 m-auto" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div className='card ' id='border-radius'>
                            <img src={character6} className='card-img-top' alt='character1' id='border-radius-top'></img>
                            <div className='card-body'>
                                <p className='card-title fw-bold'>Brooklyn Simmons</p>
                                <p className='card-text'  id="text-gray">23 friends</p>
                            </div>
                        </div>
                        <div class="offcanvas offcanvas-end border-radius my-2" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasRightLabel"> </h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id="planet-bg"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div className='heading'>
                                    <h1 className=' fw-bolder'>Brooklyn Simmons</h1>
                                    <p className='pt-4' id='text-gray'>Brooklyn Simmons is really a nice person. 
                                    She's been living on planet Alpha for the last 10 years.
                                    </p>
                                <div className='row'>
                                    <div className='col-4 '>
                                        <p>Planet</p>
                                        <p className='fw-bolder'>Alpha</p>
                                    </div>
                                    <div className='col-5  '>
                                        <p className=''>Friends</p>
                                        <p className='fw-bolder '>23</p>
                                    </div>
                                </div>
                                <h6 id='text-gray'>FRIENDS</h6>
                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className='mt-3 mb-3'>
                                            <img src={character3} alt='character3' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Eleanor Pena</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character13} alt='character13' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Brooklyn Simmons</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character16} alt='character16' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Kristin Watson</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character17} alt=' character17' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Cody Fisher</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character9} alt='character9' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Courtney Henry</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character2} alt='character2' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Annette Black</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12  mt-3 mb-3 m-auto" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight">
                        <div className='card ' id='border-radius'>
                            <img src={character17} className='card-img-top' alt='character17' id='border-radius-top'></img>
                            <div className='card-body'>
                                <p className='card-title fw-bold'>Cameron Williamson</p>
                                <p className='card-text'  id="text-gray">23 friends</p>
                            </div>
                        </div>

                        <div class="offcanvas offcanvas-end border-radius my-2" tabindex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasRightLabel"> </h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id="planet-bg"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div className='heading'>
                                    <h1 className=' fw-bolder'>Cameron Williamson</h1>
                                    <p className='pt-4' id='text-gray'>Cameron Williamson is really a nice person. 
                                    he's been living on planet Alpha for the last 10 years.
                                    </p>
                                <div className='row'>
                                    <div className='col-4 '>
                                        <p>Planet</p>
                                        <p className='fw-bolder'>Alpha</p>
                                    </div>
                                    <div className='col-5  '>
                                        <p className=''>Friends</p>
                                        <p className='fw-bolder '>23</p>
                                    </div>
                                </div>
                                <h6 id='text-gray'>FRIENDS</h6>
                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className='mt-3 mb-3'>
                                            <img src={character3} alt='character3' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Eleanor Pena</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character13} alt='character13' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Brooklyn Simmons</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character16} alt='character16' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Kristin Watson</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character17} alt=' character17' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Cody Fisher</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character9} alt='character9' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Courtney Henry</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character2} alt='character2' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Annette Black</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12  mt-3 mb-3 m-auto" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight">
                        <div className='card ' id='border-radius'>
                            <img src={character12} className='card-img-top' alt='character12' id='border-radius-top'></img>
                            <div className='card-body'>
                                <p className='card-title fw-bold'>Leslie Alexande</p>
                                <p className='card-text'  id="text-gray">23 friends</p>
                            </div>
                        </div>

                        
                        <div class="offcanvas offcanvas-end border-radius my-2" tabindex="-1" id="offcanvasRight2" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasRightLabel"> </h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id="planet-bg"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div className='heading'>
                                    <h1 className=' fw-bolder'>Leslie Alexande</h1>
                                    <p className='pt-4' id='text-gray'>Leslie Alexande is really a nice person. 
                                    he's been living on planet Alpha for the last 10 years.
                                    </p>
                                <div className='row'>
                                    <div className='col-4 '>
                                        <p>Planet</p>
                                        <p className='fw-bolder'>Alpha</p>
                                    </div>
                                    <div className='col-5  '>
                                        <p className=''>Friends</p>
                                        <p className='fw-bolder '>23</p>
                                    </div>
                                </div>
                                <h6 id='text-gray'>FRIENDS</h6>
                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className='mt-3 mb-3'>
                                            <img src={character3} alt='character3' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Eleanor Pena</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character13} alt='character13' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Brooklyn Simmons</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character16} alt='character16' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Kristin Watson</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character17} alt=' character17' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Cody Fisher</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character9} alt='character9' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Courtney Henry</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character2} alt='character2' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Annette Black</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-sm-12  mt-3 mb-3 m-auto" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight3" aria-controls="offcanvasRight">
                        <div className='card ' id='border-radius'>
                            <img src={character14} className='card-img-top' alt='character14' id='border-radius-top'></img>
                            <div className='card-body'>
                                <p className='card-title fw-bold'>Kristin Watson</p>
                                <p className='card-text'  id="text-gray">23 friends</p>
                            </div>
                        </div>

                        <div class="offcanvas offcanvas-end border-radius my-2" tabindex="-1" id="offcanvasRight3" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasRightLabel"> </h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id="planet-bg"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div className='heading'>
                                    <h1 className=' fw-bolder'>Kristin Watson</h1>
                                    <p className='pt-4' id='text-gray'>Kristin Watson is really a nice person. 
                                    she's been living on planet Alpha for the last 10 years.
                                    </p>
                                <div className='row'>
                                    <div className='col-4 '>
                                        <p>Planet</p>
                                        <p className='fw-bolder'>Alpha</p>
                                    </div>
                                    <div className='col-5  '>
                                        <p className=''>Friends</p>
                                        <p className='fw-bolder '>23</p>
                                    </div>
                                </div>
                                <h6 id='text-gray'>FRIENDS</h6>
                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className='mt-3 mb-3'>
                                            <img src={character3} alt='character3' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Eleanor Pena</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character13} alt='character13' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Brooklyn Simmons</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character16} alt='character16' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Kristin Watson</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character17} alt=' character17' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Cody Fisher</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character9} alt='character9' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Courtney Henry</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character2} alt='character2' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Annette Black</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12  mt-3 mb-3 m-auto" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight4" aria-controls="offcanvasRight">
                        <div className='card ' id='border-radius'>
                            <img src={character2} className='card-img-top' alt='character2' id='border-radius-top'></img>
                            <div className='card-body'>
                                <p className='card-title fw-bold'>Jenny Wilson</p>
                                <p className='card-text'  id="text-gray">23 friends</p>
                            </div>
                        </div>

                        <div class="offcanvas offcanvas-end border-radius my-2" tabindex="-1" id="offcanvasRight4" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasRightLabel"> </h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id="planet-bg"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div className='heading'>
                                    <h1 className=' fw-bolder'>Jenny Wilson</h1>
                                    <p className='pt-4' id='text-gray'>Jenny Wilson is really a nice person. 
                                    she's been living on planet Alpha for the last 10 years.
                                    </p>
                                <div className='row'>
                                    <div className='col-4 '>
                                        <p>Planet</p>
                                        <p className='fw-bolder'>Alpha</p>
                                    </div>
                                    <div className='col-5  '>
                                        <p className=''>Friends</p>
                                        <p className='fw-bolder '>23</p>
                                    </div>
                                </div>
                                <h6 id='text-gray'>FRIENDS</h6>
                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className='mt-3 mb-3'>
                                            <img src={character3} alt='character3' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Eleanor Pena</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character13} alt='character13' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Brooklyn Simmons</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character16} alt='character16' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Kristin Watson</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character17} alt=' character17' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Cody Fisher</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character9} alt='character9' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Courtney Henry</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character2} alt='character2' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Annette Black</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12  mt-3 mb-3 m-auto" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight5" aria-controls="offcanvasRight">
                        <div className='card ' id='border-radius'>
                            <img src={character15} className='card-img-top' alt='character15' id='border-radius-top'></img>
                            <div className='card-body'>
                                <p className='card-title fw-bold'>Marvin McKinney</p>
                                <p className='card-text'  id="text-gray">23 friends</p>
                            </div>
                        </div>

                        <div class="offcanvas offcanvas-end border-radius my-2" tabindex="-1" id="offcanvasRight5" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasRightLabel"> </h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id="planet-bg"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div className='heading'>
                                    <h1 className=' fw-bolder'>Marvin McKinney</h1>
                                    <p className='pt-4' id='text-gray'>Marvin McKinney is really a nice person. 
                                    he's been living on planet Alpha for the last 10 years.
                                    </p>
                                <div className='row'>
                                    <div className='col-4 '>
                                        <p>Planet</p>
                                        <p className='fw-bolder'>Alpha</p>
                                    </div>
                                    <div className='col-5  '>
                                        <p className=''>Friends</p>
                                        <p className='fw-bolder '>23</p>
                                    </div>
                                </div>
                                <h6 id='text-gray'>FRIENDS</h6>
                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className='mt-3 mb-3'>
                                            <img src={character3} alt='character3' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Eleanor Pena</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character13} alt='character13' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Brooklyn Simmons</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character16} alt='character16' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Kristin Watson</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character17} alt=' character17' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Cody Fisher</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character9} alt='character9' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Courtney Henry</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character2} alt='character2' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Annette Black</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-sm-12  mt-3 mb-3 m-auto" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight6" aria-controls="offcanvasRight">
                        <div className='card ' id='border-radius'>
                            <img src={character10} className='card-img-top' alt='character10' id='border-radius-top'></img>
                            <div className='card-body'>
                                <p className='card-title fw-bold'>Jerome Bell</p>
                                <p className='card-text'  id="text-gray">23 friends</p>
                            </div>
                        </div>

                        <div class="offcanvas offcanvas-end border-radius my-2" tabindex="-1" id="offcanvasRight6" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasRightLabel"> </h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id="planet-bg"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div className='heading'>
                                    <h1 className=' fw-bolder'>Jerome Bell</h1>
                                    <p className='pt-4' id='text-gray'>Jerome Bell is really a nice person. 
                                    he's been living on planet Alpha for the last 10 years.
                                    </p>
                                <div className='row'>
                                    <div className='col-4 '>
                                        <p>Planet</p>
                                        <p className='fw-bolder'>Alpha</p>
                                    </div>
                                    <div className='col-5  '>
                                        <p className=''>Friends</p>
                                        <p className='fw-bolder '>23</p>
                                    </div>
                                </div>
                                <h6 id='text-gray'>FRIENDS</h6>
                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className='mt-3 mb-3'>
                                            <img src={character3} alt='character3' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Eleanor Pena</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character13} alt='character13' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Brooklyn Simmons</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character16} alt='character16' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Kristin Watson</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character17} alt=' character17' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Cody Fisher</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character9} alt='character9' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Courtney Henry</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character2} alt='character2' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Annette Black</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12  mt-3 mb-3 m-auto" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight7" aria-controls="offcanvasRight">
                        <div className='card ' id='border-radius'>
                            <img src={character16} className='card-img-top' alt='character16' id='border-radius-top'></img>
                            <div className='card-body'>
                                <p className='card-title fw-bold'>Guy Hawkins</p>
                                <p className='card-text'  id="text-gray">23 friends</p>
                            </div>
                        </div>

                        <div class="offcanvas offcanvas-end border-radius my-2" tabindex="-1" id="offcanvasRight7" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasRightLabel"> </h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id="planet-bg"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div className='heading'>
                                    <h1 className=' fw-bolder'>Guy Hawkins</h1>
                                    <p className='pt-4' id='text-gray'>Guy Hawkins is really a nice person. 
                                    he's been living on planet Alpha for the last 10 years.
                                    </p>
                                <div className='row'>
                                    <div className='col-4 '>
                                        <p>Planet</p>
                                        <p className='fw-bolder'>Alpha</p>
                                    </div>
                                    <div className='col-5  '>
                                        <p className=''>Friends</p>
                                        <p className='fw-bolder '>23</p>
                                    </div>
                                </div>
                                <h6 id='text-gray'>FRIENDS</h6>
                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className='mt-3 mb-3'>
                                            <img src={character3} alt='character3' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Eleanor Pena</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character13} alt='character13' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Brooklyn Simmons</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character16} alt='character16' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Kristin Watson</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character17} alt=' character17' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Cody Fisher</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character9} alt='character9' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Courtney Henry</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character2} alt='character2' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Annette Black</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12  mt-3 mb-3 m-auto " >
                        <div className='card ' id='border-radius'>
                            <img src={character11} className='card-img-top' alt='character11' id='border-radius-top' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight8" aria-controls="offcanvasRight"></img>
                            <div className='row' >
                                <div className=' col-md-8' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight8" aria-controls="offcanvasRight">
                                    <div className='card-body'>
                                        <p className='card-title fw-bold'>Robert Fox</p>
                                        <p className='card-text'  id="text-gray">23 friends</p>
                                    </div>
                                </div>
                                <div className=' col-md-4 '>
                                    <div className=' d-flex justify-content-end mb-3 pe-3 pt-lg-3 pt-md-3 pt-sm-0 btn border-0' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="offcanvas offcanvas-end border-radius my-2" tabindex="-1" id="offcanvasRight8" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasRightLabel"> </h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id="planet-bg"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div className='heading'>
                                    <h1 className=' fw-bolder'>Robert Fox</h1>
                                    <p className='pt-4' id='text-gray'>Robert Fox is really a nice person. 
                                    he's been living on planet Alpha for the last 10 years.
                                    </p>
                                <div className='row'>
                                    <div className='col-4 '>
                                        <p>Planet</p>
                                        <p className='fw-bolder'>Alpha</p>
                                    </div>
                                    <div className='col-5  '>
                                        <p className=''>Friends</p>
                                        <p className='fw-bolder '>23</p>
                                    </div>
                                </div>
                                <h6 id='text-gray'>FRIENDS</h6>
                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className='mt-3 mb-3'>
                                            <img src={character3} alt='character3' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Eleanor Pena</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character13} alt='character13' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Brooklyn Simmons</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character16} alt='character16' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Kristin Watson</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character17} alt=' character17' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Cody Fisher</h6>
                                        <p className='' id='text-gray' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character9} alt='character9' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Courtney Henry</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-lg-5 col-md-5 col-sm-12'>
                                        <div className=' mb-3'>
                                            <img src={character2} alt='character2' className='img-fluid rounded-3 w-100'></img>
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 my-auto'>
                                        <h6 className='fw-bolder'>Annette Black</h6>
                                        <p className='' id='text-gray' > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='modal-container' >
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg row">
                            <div class="modal-content col-md-8 col-sm-12  px-3 py-5" id='border-radius'>
                                <div class="modal-header border-0">
                                    <h5 class="modal-title fw-bolder pb-3" id="exampleModalLabel">Character</h5>
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

                                        <div className='form-group pt-4 '>
                                            <label className='form-label fw-bold' for="friends">Friends</label>
                                            <select class="form-select border-0" aria-label="Default select example" id='planet-bg'>
                                                <option selected >select friends</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <div className='modal-footer d-flex justify-content-end border-0'>
                                    <button className='btn me-3' id='planet-bg' data-bs-dismiss="modal">CANCEL</button>
                                    <button className='btn  text-white' id='bg-black'>CREATE CHARACTER</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Characters;
