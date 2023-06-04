import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

/**
 * EXAMPLE AUTHOR
 * 
 export const AUTHOR_NAME: IAuthor = {
    name: "Full Name",
    designation: "Work Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
     social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/'
        },
    ]
}
 */

export const MAYUR: IAuthor = {
    name: "Luka Barbakadze",
    designation: "Software Developer and IT Specialist",
    bio: "I am a passionate Software and Web Developer with a deep love for the IT field. My enthusiasm for technology drives me to explore and master the latest advancements in the industry.",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/luka0009'
        },
        // {
        //     icon: <AiFillLinkedin />,
        //     link: 'https://www.linkedin.com/in/mayur-nalwala/'
        // },
    ]
}

export const RUPALI: IAuthor = {
    name: "Luka Barbakadze",
    designation: "Software Developer and IT Analyst",
    bio: "I am a passionate Software and Web Developer with a deep love for the IT field. My enthusiasm for technology drives me to explore and master the latest advancements in the industry.",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/luka0009'
        },
        // {
        //     icon: <AiFillLinkedin />,
        //     link: 'https://www.linkedin.com/in/rupali-yadav-087bb4112/'
        // },
    ]
}


// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = "Luka's Blog";
export const WEBSITE_URL: string = 'https://nextjs-simple-blog-template.web.app/';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    // max logo image height 40px
    // you can add logo light version if using image
    // logo: {
    //     type: LogoType.IMAGE,
    //     logo: '/images/logo.png',
    //     logoLight: '/images/logo-light.png'
    // },
    logo: {
        type: LogoType.TEXT,
        logo: "Luka's Blog",
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories don't add path and add type: dropdown and pass path empty
            label: 'Blog',
            path: '/blog'
        },
        {
            label: 'About',
            path: '/about'
        },
        // {
        //     label: 'Github Repo',
        //     path: 'https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss',
        //     newTab: true
        // },
        {
            label: 'Contact Me',
            path: '/contact'
        }
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories dont add path and add type: dropdown
            label: 'Blog',
            path: '/blog'
        },
        {
            label: 'About',
            path: '/about'
        },
        // {
        //     label: 'Github Repo',
        //     path: 'https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss',
        //     newTab: true
        // },
        {
            label: 'Contact Me',
            path: '/contact'
        }
    ],
    socials: [
        // {
        //     link: 'https://www.facebook.com/',
        //     icon: <AiFillFacebook />
        // },
        // {
        //     link: 'https://www.instagram.com/',
        //     icon: <AiFillInstagram />
        // },
        // {
        //     link: 'https://twitter.com/WebExpe',
        //     icon: <AiOutlineTwitter />
        // },
    ]
}

export const DEFAULT_SEO: iSEO = {
    title: "Nextjs IT blog",
    description: "IT NextJS and Typescript.",
    keywords: "Blog, next js, template, next js blog, blog setup, typescript, nextjs typescript, react js blog template, responsive blog template",
    url: WEBSITE_URL,
    author: `${MAYUR.name}, ${RUPALI.name}`,
    // twitterHandle: '@WebExpe',
    ogImage: '/public/images/og-image.jpg'
}