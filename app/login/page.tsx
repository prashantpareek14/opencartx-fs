import FormField from "../components/ui/FormField";
import Button from "../components/ui/Button";

export default function Login() {
  return (
    <section>
      <div className="max-w-md mx-auto m-8 flex flex-col justify-center">
        <div className="text-center text-2xl font-medium">OpenCartX</div>
        <div className="text-center text-lg text-gray-600">
          Sign in to your account
        </div>
        <div className="mt-4 px-8 py-6 bg-white border border-gray-300 rounded-sm shadow-xs">
          <form>
            <div className="mb-4">
              <FormField
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <FormField
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <Button text="Login" />
          </form>
        </div>
      </div>
    </section>
  );
}
