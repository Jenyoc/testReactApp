import React, { Component } from 'react';
import './Header.css';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../../icons/dog-footprint-filled.png';
import withViewHeader from '../../containers/HeaderWrapper';
import SearchBar from './../SearchBar'

class Header extends Component {
  componentDidMount() {
    const {redirectSet} = this.props;
    redirectSet(false);
  }

  render() {
    const {setCurrentBreed, getBreedImagesJSON, errorModalClose, redirectSet, isRedirect} = this.props;
    return (
      <div className="header">
        <Link className="homeLink"
              to="/">
          <img className="homeImage"
               alt="logo"
               src={Logo} />
          <strong>DogsApp</strong>
        </Link>
        <SearchBar isRedirect={isRedirect}
                   setCurrentBreed={setCurrentBreed}
                   getBreedImagesJSON={getBreedImagesJSON}
                   errorModalClose={errorModalClose}
                   redirectSet={redirectSet} />
        {isRedirect.value && <Redirect to={"/breed-info"} />}
      </div>
    )
  };
}


export default withViewHeader(Header);
