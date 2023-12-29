"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <main className="flex min-h-screen flex-col gap-2 items-center justify-center p-24">
      <div className={ ` flex flex-row gap-4` }>
        <Button onClick={() => {
          setCounter(counter - 1);
        }}>
          <Minus />
        </Button>

        <Input value={ counter } className={ ` text-center` } readOnly/>

        <Button onClick={() => {
          setCounter(counter + 1);
        }}>
          <Plus />
        </Button>
      </div>
      <div className={ `` }>
        <Button variant={ `link` } onClick={() => {
          setCounter(0)
        }} disabled={ counter === 0 }>Reset</Button>
      </div>
    </main>
  )
}
