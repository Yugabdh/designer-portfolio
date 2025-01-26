import { projects } from "@/data/projects";
import * as motion from "motion/react-client"
import Image from "next/image";
import Link from "next/link";
import React from "react"
import { MdArrowForward } from "react-icons/md";
import MasonryGrid from "./masonry-grid";
import SectionHeader from "../section-header";

const ProjectGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8 bg-bone-white-50">
      <SectionHeader title={"My Work"} clx={"flex justify-center items-center text-center text-shark-800 font-montserrat font-bold"} />
      <MasonryGrid />
      <div className="flex justify-center my-9">
        <Link
          className="cursor-pointer bg-shark-950 p-3 rounded font-montserrat text-xl text-cerise-600 hover:text-dull-lavender-600 transition duration-300 ease-in"
          href="/work"
        >
          Show More <MdArrowForward className="inline-block" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectGrid