'use client'

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { API } from "./services/api";

export default function Home() {
   useEffect(() => {
  API.get('/product.json').then((res)=>{
    console.log({res});
    
  })
  }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Button>Click me</Button>
    </div>
  );
}
