"use client";
import React, { useEffect, useState } from "react";

const RootPage = () => {
	const [count, setCount] = useState(0);
	const MAX = 100;

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setCount((prevCount) => {
	// 			if (prevCount >= MAX) {
	// 				clearInterval(interval);
	// 				return prevCount; // Return the current count if it has reached the maximum value
	// 			}
	// 			return prevCount + 1; // Otherwise, increment the count
	// 		});
	// 		console.log("first render");
	// 	}, 100);

	// 	// Cleanup interval on component unmount
	// 	return () => clearInterval(interval);
	// }, []); // Empty dependency array to set up the interval once

	return (
		<>
			<h1>Count:</h1>
			{count}
		</>
	);
};

export default RootPage;
