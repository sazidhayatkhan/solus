'use client'
import Button from '@/components/ui/Button'
import React from 'react'

function page() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline bg-red-400">
      Hello world!
    </h1>
    <Button onClick={() => alert('Primary clicked!')}>
        Primary
      </Button>
      <Button variant="outline" onClick={() => alert('Outline clicked!')}>
        Outlined
      </Button>
    </div>
  )
}

export default page