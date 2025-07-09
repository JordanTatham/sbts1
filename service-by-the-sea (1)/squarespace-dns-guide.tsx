import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, Settings } from "lucide-react"

export function SquarespaceDNSGuide() {
  const steps = [
    {
      step: 1,
      title: "Deploy Website to Vercel",
      description: "First, get your website hosted on Vercel (free)",
      tasks: [
        "Upload code to GitHub",
        "Deploy to Vercel",
        "Get your Vercel URL (e.g., yoursite.vercel.app)",
        "Add custom domain in Vercel settings",
      ],
    },
    {
      step: 2,
      title: "Configure Squarespace DNS",
      description: "Point your domain to the Vercel-hosted website",
      tasks: [
        "Log into Squarespace",
        "Go to Settings → Domains",
        "Click on servicebythesea.co.uk",
        "Choose 'Use a third-party domain'",
      ],
    },
    {
      step: 3,
      title: "Update DNS Records",
      description: "Add these records in Squarespace DNS settings",
      tasks: [
        "Add A record: @ → 76.76.19.61",
        "Add CNAME record: www → cname.vercel-dns.com",
        "Remove any conflicting records",
        "Save changes",
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Squarespace + Vercel Setup</h1>
        <p className="text-xl text-gray-600">Keep your domain with Squarespace, host website elsewhere</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Pros
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-green-700">
              <li>• Keep existing domain setup</li>
              <li>• Free website hosting</li>
              <li>• Full custom functionality</li>
              <li>• Professional booking system</li>
              <li>• Easy to update</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-800 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Cons
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-red-700">
              <li>• Slightly more complex setup</li>
              <li>• Need to manage two services</li>
              <li>• DNS changes required</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              Cost
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-blue-700">
              <li>• Domain: Current Squarespace cost</li>
              <li>• Hosting: £0 (Vercel free)</li>
              <li>• SSL: £0 (included)</li>
              <li>• Total extra: £0/month</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        {steps.map((step) => (
          <Card key={step.step} className="border-gray-200">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <div className="grid md:grid-cols-2 gap-2">
                {step.tasks.map((task, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{task}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle>Alternative: Simple Squarespace Rebuild</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            If you prefer to stay entirely within Squarespace, I can help you recreate a simpler version using their
            tools, but you'll lose the advanced booking system and custom functionality.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">What you'd keep:</h4>
              <ul className="text-sm space-y-1">
                <li>• Basic service pages</li>
                <li>• Contact information</li>
                <li>• Photo gallery</li>
                <li>• Simple contact form</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What you'd lose:</h4>
              <ul className="text-sm space-y-1">
                <li>• Interactive booking calendar</li>
                <li>• Custom service selection</li>
                <li>• Advanced contact forms</li>
                <li>• Professional code structure</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
