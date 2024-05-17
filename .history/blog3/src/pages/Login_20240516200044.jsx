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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!email) {
          errors.email = "Email is required";
        }
        if (!password) {
          errors.password = "Password is required";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          // Submit form data
          console.log("Form submitted:", { email, password });
        }
      };
    
  
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
          <Label htmlFor="password">Password</Label>
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