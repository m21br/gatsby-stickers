import { graphql, useStaticQuery } from "gatsby";
import React from "react"

interface IseoProps {
	title:string;
}

export default function Seo( {title} : IseoProps){
	const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
		query SeoData {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)
	return <title>{title} | {data.site?.siteMetadata?.title}</title>
}