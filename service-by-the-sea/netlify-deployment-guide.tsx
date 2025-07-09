import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Globe, Settings, CheckCircle } from "lucide-react"

export function NetlifyDeploymentGuide() {
  const steps = [
    {
      step: 1,
      title: "Download & Prepare Files",
      icon: <Upload className="h-5 w-5 text-blue-500" />,
      description: "Get your website files ready",
      tasks: [
        "Click 'Download Code' button in v0",
        "Extract the ZIP file to your desktop",
        "Make sure all files are in one folder",
        "Check that package.json is in the root folder",
      ],
    },
    {
      step: 2,
      title: "Deploy to Netlify",
      icon: <Globe className="h-5 w-5 text-green-500" />,
      description: "Drag and drop deployment",
      tasks: [
        "Go to https://app.netlify.com/drop",
        "Drag your entire website folder onto the page",
        "Wait for deployment (2-3 minutes)",
        "Get your live URL (e.g., amazing-site-123.netlify.app)",
      ],
    },
    {
      step: 3,
      title: "Add Custom Domain",
      icon: <Settings className="h-5 w-5 text-purple-500" />,
      description: "Connect servicebythesea.co.uk",
      tasks: [
        "Sign up for free Netlify account",
        "Go to Site Settings → Domain Management",
        "Add custom domain: servicebythesea.co.uk",
        "Follow DNS instructions for Squarespace",
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Netlify Deployment (No GitHub Required)</h1>
        <p className="text-xl text-gray-600">Drag & drop your website files for instant deployment</p>
      </div>

      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800">Why Netlify is Perfect for This</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-green-700">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                No GitHub account needed
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Drag & drop deployment
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Free custom domain
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-green-700">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Automatic SSL certificate
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Easy updates
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Works with Next.js
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {steps.map((step) => (
          <Card key={step.step} className="border-gray-200">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                {step.icon}
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

      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle>Squarespace DNS Settings for Netlify</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">Once deployed, add these DNS records in Squarespace:</p>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg border">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">A</span>
                  <p className="text-sm mt-1">@</p>
                </div>
                <div>
                  <p className="text-sm font-mono">75.2.60.5</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Points root domain to Netlify</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">CNAME</span>
                  <p className="text-sm mt-1">www</p>
                </div>
                <div>
                  <p className="text-sm font-mono">your-site-name.netlify.app</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Points www to your Netlify site</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle>Quick Start Link</CardTitle>
        </CardHeader>
        <CardContent>
          <a
            href="https://app.netlify.com/drop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Go to Netlify Drop Zone →
          </a>
          <p className="text-sm text-gray-600 mt-2">Just drag your website folder here after downloading from v0</p>
        </CardContent>
      </Card>
    </div>
  )
}
