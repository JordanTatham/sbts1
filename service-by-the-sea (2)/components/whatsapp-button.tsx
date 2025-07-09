"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, QrCode } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

interface WhatsAppButtonProps {
  phoneNumber: string
}

export function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const [showQR, setShowQR] = useState(false)

  const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}`
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappUrl)}`

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white" size="lg">
        <MessageCircle className="h-5 w-5 mr-2" />
        WhatsApp Us
      </Button>

      <Dialog open={showQR} onOpenChange={setShowQR}>
        <DialogTrigger asChild>
          <Button variant="outline" size="lg">
            <QrCode className="h-5 w-5 mr-2" />
            QR Code
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Scan to WhatsApp</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <img src={qrCodeUrl || "/placeholder.svg"} alt="WhatsApp QR Code" className="w-48 h-48" />
            <p className="text-sm text-gray-600 text-center">
              Scan this QR code with your phone to start a WhatsApp conversation
            </p>
            <Button onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white">
              Or Click Here for WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
