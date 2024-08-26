"use client";

import Link from "next/link";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';  // Ensure correct import

const socials = [
    { icon: <FaGithub />, path: "https://github.com/dylanramdhan" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/dramdhan/" },  // Ensure correct case
];

const Socials = ({ containerStyles, iconStyles }) => {
  return ( 
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
            );
        })}
    </div>
  );
}

export default Socials;