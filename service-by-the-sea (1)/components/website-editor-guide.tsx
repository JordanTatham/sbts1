import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, FileText, Palette, Phone, Calendar, ImageIcon } from "lucide-react"

export function WebsiteEditorGuide() {
  const editSections = [
    {
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      title: "Text Content",
      file: "app/page.tsx",
      description: "Change business information, service descriptions, and pricing",
      examples: [
        "Hero section text and descriptions",
        "Service names and pricing",
        "Contact information",
        "Testimonials and reviews",
      ],
    },
    {
      icon: <Palette className="h-6 w-6 text-purple-500" />,
      title: "Colors & Styling",
      file: "tailwind.config.ts",
      description: "Modify colors, fonts, and visual styling",
      examples: [
        "Change yellow accent color",
        "Modify button styles",
        "Update background colors",
        "Adjust spacing and layout",
      ],
    },
    {
      icon: <Phone className="h-6 w-6 text-green-500" />,
      title: "Contact Details",
      file: "Multiple files",
      description: "Update phone numbers, email, and WhatsApp",
      examples: [
        "Phone number: 07780 114172",
        "Email: jordan@servicebythesea.co.uk",
        "WhatsApp number",
        "Service areas",
      ],
    },
    {
      icon: <Calendar className="h-6 w-6 text-orange-500" />,
      title: "Booking System",
      file: "app/booking/page.tsx",
      description: "Modify services, pricing, and availability",
      examples: ["Add/remove services", "Update pricing", "Change working hours", "Block specific dates"],
    },
    {
      icon: <ImageIcon className="h-6 w-6 text-pink-500" />,
      title: "Images & Gallery",
      file: "app/gallery/page.tsx",
      description: "Replace placeholder images with real photos",
      examples: [
        "Upload service photos",
        "Replace hero images",
        "Add before/after photos",
        "Update gallery categories",
      ],
    },
  ]

  const quickEdits = [
    {
      task: "Change phone number",
      location: "Search for '07780 114172' across all files",
      difficulty: "Easy",
    },
    {
      task: "Update service pricing",
      location: "app/page.tsx and app/booking/page.tsx",
      difficulty: "Easy",
    },
    {
      task: "Add new service",
      location: "services array in app/page.tsx",
      difficulty: "Medium",
    },
    {
      task: "Change colors",
      location: "tailwind.config.ts",
      difficulty: "Medium",
    },
    {
      task: "Block booking dates",
      location: "blockedDates array in app/booking/page.tsx",
      difficulty: "Easy",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Website Editing Guide</h1>
        <p className="text-xl text-gray-600">How to easily customize your Service by the Sea website</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {editSections.map((section, index) => (
          <Card key={index} className="border-gray-200">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                {section.icon}
                <CardTitle className="text-lg">{section.title}</CardTitle>
              </div>
              <Badge variant="outline" className="w-fit text-xs">
                {section.file}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <ul className="space-y-1">
                {section.examples.map((example, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <span className="w-1 h-1 bg-yellow-500 rounded-full mr-2"></span>
                    {example}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="h-5 w-5 text-yellow-600" />
            <span>Quick Edit Reference</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {quickEdits.map((edit, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900">{edit.task}</h4>
                  <Badge variant={edit.difficulty === "Easy" ? "default" : "secondary"}>{edit.difficulty}</Badge>
                </div>
                <p className="text-sm text-gray-600">{edit.location}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle>Step-by-Step Editing Process</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold">Download the Code</h4>
                <p className="text-sm text-gray-600">Click "Download Code" button to get all website files</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold">Open in Code Editor</h4>
                <p className="text-sm text-gray-600">Use VS Code, Cursor, or any text editor to open the project</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold">Find & Replace</h4>
                <p className="text-sm text-gray-600">Use Ctrl+F (or Cmd+F) to search for text you want to change</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <h4 className="font-semibold">Test Changes</h4>
                <p className="text-sm text-gray-600">Run 'npm run dev' to preview changes locally</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </div>
              <div>
                <h4 className="font-semibold">Deploy</h4>
                <p className="text-sm text-gray-600">Push to GitHub and deploy to Vercel for live updates</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle>Common Customizations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Business Information</h4>
              <ul className="space-y-2 text-sm">
                <li>• Phone: Search "07780 114172"</li>
                <li>• Email: Search "jordan@servicebythesea.co.uk"</li>
                <li>• Address: Update service areas</li>
                <li>• Hours: Modify working hours</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services & Pricing</h4>
              <ul className="space-y-2 text-sm">
                <li>• Add services to 'services' array</li>
                <li>• Update pricing in service objects</li>
                <li>• Modify service descriptions</li>
                <li>• Change booking time slots</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
