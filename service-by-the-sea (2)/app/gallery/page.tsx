import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "End of Tenancy Kitchen Clean",
      category: "End of Tenancy",
      image: "/placeholder.svg?height=400&width=600",
      description: "Complete kitchen deep clean including appliances, surfaces, and cupboards",
    },
    {
      id: 2,
      title: "Bathroom Deep Clean",
      category: "End of Tenancy",
      image: "/placeholder.svg?height=400&width=600",
      description: "Thorough bathroom sanitization and cleaning",
    },
    {
      id: 3,
      title: "Communal Stairwell",
      category: "Communal Cleaning",
      image: "/placeholder.svg?height=400&width=600",
      description: "Regular maintenance of communal areas",
    },
    {
      id: 4,
      title: "Garden Maintenance",
      category: "Garden Services",
      image: "/placeholder.svg?height=400&width=600",
      description: "Lawn mowing and hedge trimming service",
    },
    {
      id: 5,
      title: "Garden Clearance",
      category: "Garden Services",
      image: "/placeholder.svg?height=400&width=600",
      description: "Complete garden clearance and waste removal",
    },
    {
      id: 6,
      title: "Living Room Clean",
      category: "End of Tenancy",
      image: "/placeholder.svg?height=400&width=600",
      description: "Deep cleaning of living spaces",
    },
    {
      id: 7,
      title: "Communal Garden",
      category: "Garden Services",
      image: "/placeholder.svg?height=400&width=600",
      description: "Maintenance of shared garden spaces",
    },
    {
      id: 8,
      title: "Handyman Work",
      category: "Handyman",
      image: "/placeholder.svg?height=400&width=600",
      description: "General maintenance and repair services",
    },
    {
      id: 9,
      title: "Rubbish Clearance",
      category: "Clearance",
      image: "/placeholder.svg?height=400&width=600",
      description: "Professional waste removal service",
    },
  ]

  const categories = ["All", "End of Tenancy", "Communal Cleaning", "Garden Services", "Handyman", "Clearance"]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-yellow-500">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Service by the Sea" width={32} height={32} className="rounded" />
              <span className="text-xl font-bold text-gray-900">Service by the Sea</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Work Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the quality and attention to detail in our cleaning and garden services across Brighton, Hove, and
            surrounding areas.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className="cursor-pointer hover:bg-yellow-500 hover:text-black px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Badge className="mb-2 bg-yellow-500 text-black">{item.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Book Our Services?</h2>
            <p className="text-gray-600 mb-6">
              Get the same quality service shown in our gallery. Book your cleaning or garden service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Book Service Now
                </Button>
              </Link>
              <Link href="/#contact">
                <Button size="lg" variant="outline">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
