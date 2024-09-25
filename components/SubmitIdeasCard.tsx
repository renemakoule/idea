'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { LightbulbIcon } from 'lucide-react'
import ShineBorder from './magicui/shine-border'
import { useTheme } from "next-themes";

export default function Component() {
  const [submitted, setSubmitted] = useState(false)
  const [idea, setIdea] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ idea, name, email })
    setSubmitted(true)
  }

  const handleClose = () => {
    // Réinitialise les états
    setSubmitted(false)
    setIdea('')
    setName('')
    setEmail('')
  }
  const theme = useTheme();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md mx-4 bg-pink-200 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-xl">
      <ShineBorder
      className="w-full bg-pink-200"
      color={theme.theme ==="dark" ? "white" : "black"}
    >
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-semibold text-center flex items-center justify-center">
            <LightbulbIcon className="w-6 h-6 mr-2 text-yellow-400" />
            Submit Your Idea
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full z-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div className="space-y-2 w-full">
                <Label htmlFor="idea" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Your Brilliant Idea
                </Label>
                <Textarea
                  id="idea"
                  placeholder="Share your brilliant idea..."
                  className="min-h-[100px] resize-none bg-gray-100"
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Name (Optional)
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='bg-gray-100'
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email (Optional)
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='bg-gray-100'
                />
              </div>
            </form>
          ) : (
            <div className="text-center space-y-2">
              <LightbulbIcon className="w-12 h-12 mx-auto text-yellow-400" />
              <p className="text-lg font-semibold">Thank you for your contribution!</p>
              <p>Your idea has been submitted successfully.</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between w-full">
          {!submitted ? (
            <Button
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 transform hover:scale-105"
              type="submit"
              onClick={handleSubmit}
            >
              Submit Idea
            </Button>
          ) : (
            <Button
              className="w-full bg-red-500 hover:bg-red-600 text-white transition-all duration-300 transform hover:scale-105"
              onClick={handleClose}
            >
              Close
            </Button>
          )}
          
        </CardFooter>
        <div className="text-[13px] mt-4 text-[#0c2731] text-center font-semibold cursor-pointer z-10">Powered by Minato.ai</div>
        </ShineBorder>
      </Card>
    </div>
  )
}