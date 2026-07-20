import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="page-shell py-10 sm:py-14">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:flex sm:items-center">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-amazon-orange p-10 text-white sm:w-[45%]">
          <div className="rounded-[2rem] bg-white/10 p-6 shadow-inner shadow-black/10">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Create account</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight">Join ShopKart today</h1>
            <p className="mt-5 text-sm leading-7 text-slate-200">Build your account to save favorites, track orders, and checkout faster. Start shopping smarter with a profile made for you.</p>
          </div>

          <div className="mt-10 space-y-5 rounded-[1.75rem] bg-slate-900/40 p-6 text-sm text-slate-200 shadow-lg">
            <div>
              <p className="font-semibold text-white">Why join?</p>
              <ul className="mt-3 space-y-3 text-slate-300">
                <li>• Faster checkout with saved details</li>
                <li>• Track orders from one dashboard</li>
                <li>• Get personalized product recommendations</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Need help?</p>
              <p className="mt-2 text-slate-300">Our support team is available 24/7 to help you complete your purchase.</p>
            </div>
          </div>
        </div>

        <div className="p-8 sm:w-[55%] sm:p-10">
          <h2 className="text-3xl font-bold text-slate-900">Create your account</h2>
          <p className="mt-2 text-sm text-slate-600">Set up your ShopKart profile in seconds and start shopping.</p>

          <form className="mt-8 space-y-5">
            <label className="block text-sm font-medium text-slate-700">
              Full name
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amazon-orange focus:ring-2 focus:ring-amazon-orange/20"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amazon-orange focus:ring-2 focus:ring-amazon-orange/20"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Password
              <input
                type="password"
                placeholder="Create a password"
                className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amazon-orange focus:ring-2 focus:ring-amazon-orange/20"
              />
            </label>
            <button type="submit" className="w-full rounded-full bg-amazon-orange px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-400">
              Create account
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
            <p>Already have an account?</p>
            <Link to="/login" className="font-semibold text-slate-900 hover:text-amazon-orange">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
