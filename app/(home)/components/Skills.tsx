"use client";



import React from "react"
import { SiGit, SiGitbook, SiGraphql, SiHtml5, SiJavascript, SiJest, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si"
import Title from "./Title"
import { HoverEffect } from "./ui/card-hover-effect"

export default function Skills() {

const skills = [
    {
        text:"React",
        Icon: SiReact
    },
    {
        text:"Next.js",
        Icon: SiNextdotjs
    },
    {
        text:"Tailwind",
        Icon: SiTailwindcss
    },
    {
        text:"Javascript",
        Icon: SiJavascript
    },
    {
        text:"HTML",
        Icon: SiHtml5
    },
    {
        text:"Version Control",
        Icon: SiGit
    },
    {
        text:"node.js",
        Icon: SiNodedotjs
    },
    {
        text:"Jest",
        Icon: SiJest
    },
    {
        text:"Graphql",
        Icon: SiGraphql
    },


]
  return (
    <div className="max-w-5xl mt-15 mx-auto px-8">
        <Title text="Skills🔪" className="flex flex-col items-center justify-center -rotate-6"/>
        <HoverEffect items={skills}/>
    </div>
    
    
  )
};