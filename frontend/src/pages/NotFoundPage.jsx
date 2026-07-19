import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="page-shell grid min-h-[55vh] place-items-center py-16 text-center">
      <div>
        <p className="text-7xl font-extrabold text-amazon-orange">404</p>
        <h1 className="mt-4 text-2xl font-bold">This page is out of stock.</h1>
        <p className="mt-2 text-slate-600">Let&apos;s get you back to shopping.</p>
        <Link to="/" className="focus-ring mt-6 inline-block rounded-md bg-amazon-yellow px-5 py-2.5 font-bold text-slate-900 hover:bg-amber-300">Go to home</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
