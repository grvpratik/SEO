import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
	title: "Next.js SEO: The Complete Checklist to Boost Your Site Ranking",
	description:
		"Learn how to optimize your Next.js website for SEO by following this complete checklist.",
	keywords: "nextjs seo complete checklist, nextjs seo tutorial",
	robots: "index, follow",
	

	openGraph: {
		siteName: "Blog | Minh Vu",
		locale: "en_US",
		title: "Next.js SEO: The Complete Checklist to Boost Your Site Ranking",
		description:
			"Learn how to optimize your Next.js website for SEO by following this complete checklist.",
		type: "website",
		url: "https://dminhvu.com/nextjs-seo",
		images: [
			{
				url: "https://ik.imagekit.io/dminhvu/assets/nextjs-seo/thumbnail.png?tr=f-png",
				alt: "Next.js SEO",
				type: "image/png",
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@dminhvu02",
		creator: "@dminhvu02",
		title: "Next.js SEO: The Complete Checklist to Boost Your Site Ranking",
		description:
			"Learn how to optimize your Next.js website for SEO by following this complete checklist.",
		images:
			"https://ik.imagekit.io/dminhvu/assets/nextjs-seo/thumbnail.png?tr=f-png",
	},
};

const SeoSlug = () => {
	return <div>SeoSlug</div>;
};

export default SeoSlug;
