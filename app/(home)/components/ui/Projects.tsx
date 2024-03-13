import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"
import { SiAngularjs, SiCss3, SiHtml5, SiJavascript, SiJquery, SiReact, SiReactquery, SiTailwindcss } from "react-icons/si"
import Title from "../Title"
import { HoverEffect } from "./card-hover-effect"
import { DirectionAwareHover } from "./direction-aware-hover"

export default function Projects() {

    const projects =[
        {
            title: "Supa - The Food Delivery App",
            tech: [SiReact,SiTailwindcss,SiCss3, SiReactquery],
            link: "http://localhost:3001",
            cover:"/project-1.png",
            background: "bg-indigo-500",
        },
        {
            title: "Portfolio",
            tech: [SiReact,SiTailwindcss,SiCss3, SiReactquery],
            link: "http://localhost:3001",
            cover:"/project-2.png",
            background: "bg-green-500"
        },
        {
            title: "PI Custom Symbol Extensibility",
            tech: [SiAngularjs,SiJavascript,SiJquery,SiHtml5],
            link: "http://localhost:3001",
            cover:"/project-4.png",
            background: "bg-green-500"
        },
    ]
  return (
    <div className="py-10 p-5 mt-40 sm:p-0">
        
        <Title text="Projects 🎨🖌️" className="flex flex-col items-center justify-center rotate-6"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-20  gap-5 ">
            {projects.map((project,index)=>{
                return <Link href={project.link}key={index}>
                    <div className={cn(
                            "p-5 rounded-md w-50 h-30",
                            project.background
            )}>
                <DirectionAwareHover imageUrl={project.cover} className="w-full space-y-5 cursor-pointer">
                            <div className="space-y-5">

                            
                            <h1 className="text-2xl font-bold">
                                {project.title}
                            </h1>
                            <div className="flex items-center gap-5">
                                {project.tech.map((Icon,index)=>{
                                    return <Icon className="w-8 h-8" key={index}/>
                                })}
                            </div>
                            </div>
                </DirectionAwareHover>
            </div>

                </Link>
            })}
        </div>
        
    </div>
  )
};