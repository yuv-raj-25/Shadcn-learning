import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
  

function Login() {
  return (
    <Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>
        this is a basic login
    </CardDescription>
  </CardHeader>
  <CardContent>
  <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2 items-start space-y-2 ">
          <Label  htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
  </CardContent>
  <CardFooter>
  <Button className="w-full">Create account</Button>
  </CardFooter>
</Card>

  )
}

export default Login