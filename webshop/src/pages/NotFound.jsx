import React from 'react';
import Lottie from "lottie-react";
import pageNotFound from "../lotties/pageNotFound.json";

function NotFound() {
  const lottieProps = {
		loop: true,
		animationData: pageNotFound,
		style: { 
      marginTop: "-200px",
			width: '90vw', 
			height: 'auto',
		},
	};

	return (
    <div className="center">
      <Lottie {...lottieProps} /> 
    </div>
	);
}

export default NotFound