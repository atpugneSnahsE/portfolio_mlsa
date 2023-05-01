/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpg";

const imageAltText = "desktop with diaries, coffee cup, pens and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "my portfolio",
    description:
      "My portfolio website created with the help of HTML, CSS, Java Script and Bootstrap. Tried to follow a minimilastic design approach.",
    url: "https://eshansengupta.me/",
  },
  {
    title: "Object detction using YOLOv7",
    description:
      "Yolo is a powerful tool for training a machine in recognizing objects in real time. Trained on the MSCOCO datset, this model is quite efficient",
    url: "https://github.com/atpugneSnahsE/ObjectDetection1",
  },
  {
    title: "Object Detection using YOLOv8s",
    description:
      "Working on creating an efficient custom dataset which would help me in achiving better precision using YOLOv8s. Currently the project",
    url: "https://github.com/atpugneSnahsE/ObjectDetection2",
  },
  {
    title: "GST Invoice Management",
    description:
      "Invoice Managemant software developped with the help of PHP and MySQL. It has the functionality of generating invoice calculating GST.",
    url: "https://github.com/atpugneSnahsE/GST-Billing-System",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
