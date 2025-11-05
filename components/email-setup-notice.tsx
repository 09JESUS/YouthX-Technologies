import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export function EmailSetupNotice() {
  return (
    <Card className="border-yellow-500/50 bg-yellow-500/10">
      <CardHeader>
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
          <div>
            <CardTitle className="text-base">Email Setup Required</CardTitle>
            <CardDescription className="mt-1.5">
              To enable contact form submissions, you need to add a RESEND_API_KEY environment variable.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="text-sm space-y-2">
        <p>
          <strong>Steps to set up:</strong>
        </p>
        <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
          <li>
            Sign up for a free account at{" "}
            <a href="https://resend.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              resend.com
            </a>
          </li>
          <li>Get your API key from the dashboard</li>
          <li>Add RESEND_API_KEY to your environment variables in the Vars section</li>
          <li>Verify your domain (optional, for production use)</li>
        </ol>
      </CardContent>
    </Card>
  )
}
