import React from 'react';
import './footer.css';

const Footer = ({fullpage}) => {
  const { slug } = fullpage.navigation;
  
  return ( <div className={"footer" + (slug == 'shio' ? " shio" : '')}>
  <ul>
    <li>
      <a href="https://www.facebook.com/umi.to.shio15">
        <i className="fab fa-facebook icon"></i>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/umi_to_shio">
        <i className="fab fa-twitter icon"></i>
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/channel/UC9Mfuai-qdXnTTFN0Z3hkAA?sub_confirmation=1">
        <i className="fab fa-youtube icon"></i>
      </a>
    </li>
  </ul>
</div>);
};

export default Footer;
