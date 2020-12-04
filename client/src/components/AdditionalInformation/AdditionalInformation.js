import React from "react";
import "./AdditionalInformation.scss";
import pickupIcon from "../../assets/icons/pickup.svg";
import truckIcon from "../../assets/icons/truck.svg";
import treeIcon from "../../assets/icons/tree.svg";
import miniLogo from "../../assets/images/walmartlogomini.svg";

function AdditionalInformation() {
  return (
    <div className='additional-information'>
      <p className='additional-information__pickup'>
        <span className='additional-information__pickup-icon'>
          <img
            src={pickupIcon}
            alt='pickupIcon'
            className='additional-information__pickup-image'
          />
        </span>
        <span className='additional-information__pickup-text'>
          Free curbside pickup*
        </span>
      </p>

      <p className='additional-information__shipping'>
        <span className='additional-information__shipping-icon'>
          <img
            src={truckIcon}
            alt='truckIcon'
            className='additional-information__shipping-image'
          />
        </span>
        <span className='additional-information__shipping-text'>
          Free standard shipping over $35
        </span>
      </p>

      <p className='additional-information__timeline-summary'>
        <span className='additional-information__timeline-summary-icon'>
          <img
            src={treeIcon}
            alt='treeIcon'
            className='additional-information__timeline-summary-image'
          />
        </span>
        <span className='additional-information__timeline-summary-text'>
          Get it before Christmas!
        </span>
      </p>

      <p className='additional-information__timeline-estimate'>
        <span className='additional-information__timeline-estimate-icon'></span>
        <span className='additional-information__timeline-estimate-text'>
          Arrives by Fri Dec 11
        </span>
      </p>

      <p className='additional-information__more-shipping-options'>
        <span className='additional-information__more-shipping-options-text'>
          More pickup & shipping options
        </span>
      </p>

      <p className='additional-information__sold-by'>
        <span className='additional-information__sold-by-text'>
          Sold & shipped by
        </span>
        <span className='additional-information__sold-by-logo'>
          <img
            src={miniLogo}
            alt='miniLogo'
            className='additional-information__sold-by-logo-image'
          />
        </span>
        <span className='additional-information__sold-by-divider'>|</span>
        <span className='additional-information__sold-by-returns'>
          Free returns
        </span>
      </p>
    </div>
  );
}

export default AdditionalInformation;
