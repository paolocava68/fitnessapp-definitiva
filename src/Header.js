import React, { useState } from "react";
import "./Header.css";
import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBInputGroup, MDBIcon,
        MDBNavbarToggler, MDBNavbarItem, MDBDropdown, MDBCollapse, MDBNavbarLink,
        MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdownLink} from "mdb-react-ui-kit";

function Header () {
    const [toggle, setToggle] = useState(false);

    return (
        <div className={'header'}>
            <MDBNavbar light expand={'lg'} fixed={'top'} className={'bg-light'}>
                <MDBContainer>
                    <MDBNavbarBrand href={'#'}>
                        <img className={'img-fluid logo'} alt={'Logo'} src={'./img/logo_new.svg'} style={{width:'120px'}}/>
                    </MDBNavbarBrand>
                    <MDBInputGroup className={'rounded'} style={{width:'300px'}}>
                        <input type="search" className="form-control rounded" placeholder="Cerca" aria-label="Cerca"
                               aria-describedby="search-addon" />
                        <span className="input-group-text border-0" id="search-addon">
                            <MDBIcon fas icon={'search'} aria-hidden={'true'} />
                        </span>
                    </MDBInputGroup>
                    <MDBNavbarToggler type={'button'} data-mdb-toggle={'collapse'} data-mdb-target={'#hamb'}
                                      aria-controls={'hamb'} aria-expanded={'false'} aria-label={'Toggle navigation'}
                                        onClick={() => setToggle(!toggle)}>
                        <MDBIcon fas icon={'bars'} aria-hidden={'true'} />
                    </MDBNavbarToggler>
                    <MDBCollapse id={'hamb'} navbar show={toggle}>
                        <ul className={'navbar-nav ms-auto mb-2 mb-lg-0'}>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#' className={'d-flex flex-column text-center active'} aria-current="page">
                                    <MDBIcon fas icon={'dumbbell'} size={'lg'} aria-hidden={'true'} />
                                        <span className={'small'}>Fitness</span>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#' className={'d-flex flex-column text-center active'} aria-current="page">
                                <MDBIcon fas icon={'user-friends'} size={'lg'} aria-hidden={'true'} />
                                        <span className={'small'}>Live</span>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#' className={'d-flex flex-column text-center active'} aria-current="page">
                                <MDBIcon fas icon={'book'} size={'lg'} aria-hidden={'true'} />
                                        <span className={'small'}>Magazine</span>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#' className={'d-flex flex-column text-center active'} aria-current="page">
                                <MDBIcon fas icon={'comment-dots'} size={'lg'} aria-hidden={'true'} />
                                        <span className={'small'}>Messaggi</span>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#' className={'d-flex flex-column text-center active'} aria-current="page">
                                <MDBIcon fas icon={'bell'} size={'lg'} aria-hidden={'true'} />
                                        <span className={'small'}>Notifiche</span>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                   <MDBDropdown>
                                       <MDBDropdownToggle tag='a' className='nav-link d-flex align-items-center'
                                                            id={'navbarDropdownMenuLink'} href={'#'} role={'button'}
                                                            data-mdb-toggle={'dropdown'} aria-expanded={'false'}>
                                           <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                                className="rounded-circle" alt="" loading="lazy" height="30" />
                                       </MDBDropdownToggle>
                                       <MDBDropdownMenu>
                                           <MDBDropdownItem>
                                               <MDBDropdownLink>Profilo</MDBDropdownLink>
                                           </MDBDropdownItem>
                                           <MDBDropdownItem>
                                               <MDBDropdownLink>Logout</MDBDropdownLink>
                                           </MDBDropdownItem>
                                       </MDBDropdownMenu>
                                   </MDBDropdown>
                               </MDBNavbarItem>
                        </ul>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header;