"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Clock, CreditCard, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedService, setSelectedService] = useState("")
  const [step, setStep] = useState(1)

  const [bookingData, setBookingData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    details: "",
    price: 0,
  })

  const services = [
    { id: "end-of-tenancy", name: "End of Tenancy Cleaning", price: 150, duration: "4-6 hours" },
    { id: "communal-cleaning", name: "Communal Cleaning", price: 80, duration: "2-3 hours" },
    { id: "garden-maintenance", name: "Garden Maintenance", price: 60, duration: "2-4 hours" },
    { id: "handyman", name: "Handyman Services", price: 40, duration: "Per hour" },
    { id: "rubbish-clearance", name: "Rubbish Clearance", price: 100, duration: "2-3 hours" },
  ]

  const timeSlots = [
    { value: "morning", label: "Morning (8:00 AM - 12:00 PM)" },
    { value: "afternoon", label: "Afternoon (1:00 PM - 5:00 PM)" },
  ]

  // Mock blocked dates - in a real app, this would come from your backend
  const blockedDates = [
    new Date(2024, 11, 25), // Christmas
    new Date(2024, 11, 26), // Boxing Day
    new Date(2025, 0, 1), // New Year's Day
  ]

  const isDateDisabled = (date: Date) => {
    const day = date.getDay()
    // Disable Sundays (0) and check if date is in blocked dates
    return day === 0 || blockedDates.some((blocked) => blocked.toDateString() === date.toDateString())
  }

  const handleServiceSelect = (serviceId: string) => {
    const service = services.find((s) => s.id === serviceId)
    if (service) {
      setSelectedService(serviceId)
      setBookingData((prev) => ({
        ...prev,
        service: service.name,
        price: service.price,
      }))
    }
  }

  const handleDateTimeSelect = () => {
    if (selectedDate && selectedTime) {
      setBookingData((prev) => ({
        ...prev,
        date: selectedDate.toDateString(),
        time: selectedTime,
      }))
      setStep(2)
    }
  }

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
  }

  const handlePayment = () => {
    // In a real app, this would integrate with Stripe or another payment processor
    alert("Payment integration would be implemented here. For now, your booking is confirmed!")
    setStep(4)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Service by the Sea" width={32} height={32} className="rounded" />
              <span className="text-xl font-bold text-gray-900">Service by the Sea</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant={step >= 1 ? "default" : "secondary"}>1. Service</Badge>
              <Badge variant={step >= 2 ? "default" : "secondary"}>2. Details</Badge>
              <Badge variant={step >= 3 ? "default" : "secondary"}>3. Payment</Badge>
              <Badge variant={step >= 4 ? "default" : "secondary"}>4. Confirmed</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {step === 1 && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Book Your Service</h1>
              <p className="text-xl text-gray-600">Select your service, date, and time</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Service Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Service</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedService === service.id
                          ? "border-yellow-500 bg-yellow-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleServiceSelect(service.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{service.name}</h3>
                          <p className="text-sm text-gray-600">Duration: {service.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-yellow-600">£{service.price}</p>
                          <p className="text-xs text-gray-500">Starting from</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Date & Time Selection */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Select Date</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={isDateDisabled}
                      className="rounded-md border"
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      * We operate Monday to Saturday. Sundays and holidays are not available.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Select Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {timeSlots.map((slot) => (
                        <div
                          key={slot.value}
                          className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                            selectedTime === slot.value
                              ? "border-yellow-500 bg-yellow-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => setSelectedTime(slot.value)}
                        >
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-gray-500 mr-2" />
                            {slot.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Button
                  onClick={handleDateTimeSelect}
                  disabled={!selectedService || !selectedDate || !selectedTime}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                  size="lg"
                >
                  Continue to Details
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Details</h1>
              <p className="text-xl text-gray-600">Please provide your contact information</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleDetailsSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={bookingData.name}
                        onChange={(e) => setBookingData((prev) => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => setBookingData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData((prev) => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Property Address *</Label>
                    <Textarea
                      id="address"
                      value={bookingData.address}
                      onChange={(e) => setBookingData((prev) => ({ ...prev, address: e.target.value }))}
                      placeholder="Full address including postcode"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">Additional Details</Label>
                    <Textarea
                      id="details"
                      value={bookingData.details}
                      onChange={(e) => setBookingData((prev) => ({ ...prev, details: e.target.value }))}
                      placeholder="Any specific requirements, access instructions, or additional information"
                      rows={3}
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Booking Summary</h3>
                    <div className="space-y-1 text-sm">
                      <p>
                        <span className="font-medium">Service:</span> {bookingData.service}
                      </p>
                      <p>
                        <span className="font-medium">Date:</span> {bookingData.date}
                      </p>
                      <p>
                        <span className="font-medium">Time:</span>{" "}
                        {selectedTime === "morning" ? "Morning (8:00 AM - 12:00 PM)" : "Afternoon (1:00 PM - 5:00 PM)"}
                      </p>
                      <p>
                        <span className="font-medium">Price:</span> £{bookingData.price}
                      </p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" size="lg">
                    Continue to Payment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment</h1>
              <p className="text-xl text-gray-600">Secure payment processing</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Order Summary</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>{bookingData.service}</span>
                      <span>£{bookingData.price}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                      <span>Total</span>
                      <span>£{bookingData.price}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 text-yellow-600 mr-2" />
                      <span className="font-medium text-yellow-800">Secure Payment</span>
                    </div>
                    <p className="text-sm text-yellow-700 mt-1">
                      Your payment is processed securely. We accept all major credit and debit cards.
                    </p>
                  </div>

                  <Button
                    onClick={handlePayment}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                    size="lg"
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay £{bookingData.price} Now
                  </Button>

                  <p className="text-xs text-gray-600 text-center">
                    By proceeding with payment, you agree to our terms and conditions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 4 && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
              <p className="text-xl text-gray-600">Thank you for choosing Service by the Sea</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4 text-left">
                  <h3 className="font-semibold text-gray-900 text-center mb-4">Booking Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Service:</span>
                      <p>{bookingData.service}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Date & Time:</span>
                      <p>{bookingData.date}</p>
                      <p>
                        {selectedTime === "morning" ? "Morning (8:00 AM - 12:00 PM)" : "Afternoon (1:00 PM - 5:00 PM)"}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Contact:</span>
                      <p>{bookingData.name}</p>
                      <p>{bookingData.phone}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Total Paid:</span>
                      <p className="text-lg font-bold text-green-600">£{bookingData.price}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">What happens next?</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• You'll receive a confirmation email shortly</li>
                    <li>• We'll contact you 24 hours before your appointment</li>
                    <li>• Our team will arrive at your scheduled time</li>
                    <li>• Any questions? Call us on 07780 114172</li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Link href="/" className="flex-1">
                    <Button variant="outline" className="w-full bg-transparent">
                      Back to Home
                    </Button>
                  </Link>
                  <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black">Contact Us</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
