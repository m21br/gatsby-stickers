import React from "react"

interface IseoProps {
	title:string;
}

export default function Seo( {title} : IseoProps){
	return <title>{title} | GatsbyStriers!</title>
}