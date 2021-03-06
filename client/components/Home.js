import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import '../components/css/Home.css';
import { Button } from 'react-bootstrap';
import SelectOne from '../components/Hcomponent/SelectOne';


import Header from './Header';
import Container from './Container';

import Footer from './Footer';



class Home extends React.Component{
  render(){
    return(
      <div>
        <div className="header-wrap clearfix">{/*header*/}
          <Header />
        </div>{/*end header-wrap*/}
        <div className="content-wrap center-page clearfix">{/*content-wrap*/}

          <div className="left-wrap clearfix">{/*left wrap*/}
            <Container />
            
          </div>{/*end left-wrap */}

          <div className="center-wrap clearfix">{/*center-wrap*/}
          </div>{/*end center-wrap*/}

          <div className="right-wrap">{/*right-wrap*/}
          </div>{/*end right-wrap*/}

        </div>{/*end content-wrap*/}
        <div className="footer-wrap clearfix">
          {/*<Footer />*/}
        </div>
      </div>
    );
  }
}


export default Home;
