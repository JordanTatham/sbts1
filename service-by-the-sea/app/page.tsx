import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Phone, Mail, MapPin, Clock, CheckCircle, Users, Sparkles, Leaf, Wrench } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  const services = [
    {
      icon: <Sparkles className="h-8 w-8 text-yellow-500" />,
      title: "End of Tenancy Cleaning",
      description: "Professional deep cleaning to ensure you get your deposit back",
      price: "From £150",
      features: ["Deep clean all rooms", "Kitchen appliances", "Bathroom sanitization", "Deposit guarantee"],
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-500" />,
      title: "Communal Cleaning",
      description: "Regular cleaning services for shared spaces and common areas",
      price: "From £80/visit",
      features: ["Stairwells & hallways", "Entrance areas", "Communal kitchens", "Regular maintenance"],
    },
    {
      icon: <Leaf className="h-8 w-8 text-yellow-500" />,
      title: "Garden Services",
      description: "Complete garden maintenance and landscaping solutions",
      price: "From £60",
      features: ["Lawn mowing", "Hedge trimming", "Garden clearance", "Seasonal maintenance"],
    },
    {
      icon: <Wrench className="h-8 w-8 text-yellow-500" />,
      title: "Handyman Services",
      description: "General maintenance and repair services for your property",
      price: "From £40/hour",
      features: ["Minor repairs", "Painting & decorating", "Furniture assembly", "General maintenance"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Brighton",
      rating: 5,
      text: "Absolutely fantastic service! Jordan and his team did an incredible job with our end of tenancy clean. Got our full deposit back thanks to their thorough work.",
      service: "End of Tenancy Cleaning",
    },
    {
      name: "Michael Chen",
      location: "Hove",
      rating: 5,
      text: "Regular communal cleaning service has transformed our building. Professional, reliable, and great value for money. Highly recommend!",
      service: "Communal Cleaning",
    },
    {
      name: "Emma Williams",
      location: "Worthing",
      rating: 5,
      text: "Garden maintenance service is excellent. They've kept our communal gardens looking pristine all year round. Very pleased with the results.",
      service: "Garden Maintenance",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Service by the Sea Logo" width={60} height={60} className="rounded-lg" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Service by the Sea</h1>
                <p className="text-sm text-gray-600">Professional Cleaning & Garden Services</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#services" className="text-gray-700 hover:text-yellow-500 transition-colors">
                Services
              </Link>
              <Link href="#gallery" className="text-gray-700 hover:text-yellow-500 transition-colors">
                Gallery
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-yellow-500 transition-colors">
                Reviews
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-yellow-500 transition-colors">
                Contact
              </Link>
              <Link href="/booking">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Book Now</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-100 text-yellow-800 mb-4">Professional Cleaning Services</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Quality Cleaning & Garden Services by the Sea
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional end of tenancy cleaning, communal area maintenance, garden services, and handyman solutions
                across Brighton, Hove, and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/booking">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    Book Service Now
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-gray-300 bg-transparent">
                  <Phone className="h-4 w-4 mr-2" />
                  Call: 07780 114172
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  Fully Insured
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  Deposit Guarantee
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  Same Day Service
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Professional cleaning service"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">5.0 Rating</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Based on 50+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleaning and maintenance solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-yellow-600 mt-2">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-black">
                    Enquire About This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-xl text-gray-600">See the quality of our cleaning and garden services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=300&width=400`}
                  alt={`Service example ${i}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery">
              <Button variant="outline" size="lg">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="flex text-yellow-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {testimonial.service}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to book a service or have questions? We're here to help!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">07780 114172</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">jordan@servicebythesea.co.uk</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Service Area</h4>
                    <p className="text-gray-600">Brighton, Hove & Surrounding Areas</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Working Hours</h4>
                    <p className="text-gray-600">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <WhatsAppButton phoneNumber="+447780114172" />
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo.png" alt="Service by the Sea" width={32} height={32} className="rounded" />
                <span className="text-xl font-bold">Service by the Sea</span>
              </div>
              <p className="text-gray-400">
                Professional cleaning and garden services across Brighton, Hove, and surrounding areas.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>End of Tenancy Cleaning</li>
                <li>Communal Cleaning</li>
                <li>Garden Maintenance</li>
                <li>Handyman Services</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/booking" className="hover:text-yellow-500">
                    Book Now
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-yellow-500">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-yellow-500">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-yellow-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>07780 114172</li>
                <li>jordan@servicebythesea.co.uk</li>
                <li>www.servicebythesea.co.uk</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Service by the Sea. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
