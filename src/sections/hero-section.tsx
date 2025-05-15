"use client"
import {Button} from "@/components/ui/button"
import {ArrowRight} from "lucide-react"
import Link from 'next/link'

export function HeroSection() {
    return (
        <>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 h-screen text-white">
           <div className="max-w-3xl mx-auto">
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4" 
        >✨ Write HTML Emails in Seconds — Just Describe What You Want</h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-6 mb-8"> Tired of coding emails from scratch? Just tell us what you need - like "a product lauch email for a new shoe" - and we'll generate clean, responsive HTML in seconds</p>
        <Link href="/login">
           <Button  size= "lg" className="mt-8 px-8 py-6 text-lg text-black rounded-full bg-[white]"  
           variant="secondary"  >
            Get Started free
            <ArrowRight className= "ml-2 h-5 w-5" />
           </Button>
           </Link>
    </div>      
    </div>
        </>
    )
}