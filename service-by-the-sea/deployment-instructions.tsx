import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ExternalLink, GitBranch, Globe, Settings } from "lucide-react"

export function DeploymentInstructions() {
  const steps = [
    {
      step: 1,
      title: "Download & Upload to GitHub",
      icon: <GitBranch className="h-5 w-5 text-blue-500" />,
      description: "Get your website code ready for deployment",
      tasks: [
        "Download the website code from v0",
        "Create a new GitHub repository",
        "Upload all files to GitHub",
        "Make repository public",
      ],
    },
    {
      step: 2,
      title: "Deploy to Vercel",
      icon: <Globe className="h-5 w-5 text-green-500" />,
      description: "Connect GitHub to Vercel for automatic deployment",
      tasks: [
        "Sign up for free Vercel account",
        "Connect your GitHub account",
        "Import your repository",
        "Deploy with one click",
      ],
    },
    {
      step: 3,
      title: "Connect Your Domain",
      icon: <Settings className="h-5 w-5 text-purple-500" />,
      description: "Point your domain to the deployed website",
      tasks: [
        "Add custom domain in Vercel",
        "Get DNS settings from Vercel",
        "Update your domain's DNS records",
        "Wait for propagation (up to 24 hours)",
      ],
    },
  ]

  const dnsSettings = [
    {
      type: "A Record",
      name: "@",
      value: "76.76.19.61",
      description: "Points root domain to Vercel",
    },
    {
      type: "CNAME",
      name: "www",
      value: "cname.vercel-dns.com",
      description: "Points www subdomain to Vercel",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Deploy Your Website</h1>
        <p className="text-xl text-gray-600">Free hosting with custom domain setup</p>
      </div>

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
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-blue-600" />
            <span>DNS Settings for servicebythesea.co.uk</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">Add these DNS records in your domain registrar's control panel:</p>
          <div className="space-y-3">
            {dnsSettings.map((dns, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border">
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div>
                    <Badge variant="outline">{dns.type}</Badge>
                    <p className="text-sm font-mono mt-1">{dns.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono bg-gray-100 p-2 rounded">{dns.value}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">{dns.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle>Quick Setup Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://github.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
            >
              <div>
                <h4 className="font-semibold">Create GitHub Repository</h4>
                <p className="text-sm text-gray-600">Upload your website code</p>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </a>

            <a
              href="https://vercel.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
            >
              <div>
                <h4 className="font-semibold">Sign Up for Vercel</h4>
                <p className="text-sm text-gray-600">Free hosting platform</p>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </a>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            I can help you through each step or do the deployment for you. Just let me know:
          </p>
          <ul className="space-y-2 text-sm">
            <li>• Do you have a GitHub account?</li>
            <li>• Who manages your domain DNS? (GoDaddy, Namecheap, etc.)</li>
            <li>• Would you prefer I guide you or do it together?</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
