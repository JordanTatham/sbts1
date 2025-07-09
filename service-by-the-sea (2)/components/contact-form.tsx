"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)

    // For now, we'll just show an alert
    alert("Thank you for your enquiry! We'll get back to you within 24 hours.")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900">Send us a message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="07xxx xxx xxx"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service Required</Label>
              <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="end-of-tenancy">End of Tenancy Cleaning</SelectItem>
                  <SelectItem value="communal-cleaning">Communal Cleaning</SelectItem>
                  <SelectItem value="garden-services">Garden Services</SelectItem>
                  <SelectItem value="handyman">Handyman Services</SelectItem>
                  <SelectItem value="rubbish-clearance">Rubbish Clearance</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Please provide details about your requirements, property size, preferred dates, etc."
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" size="lg">
            <Send className="h-4 w-4 mr-2" />
            Send Enquiry
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
