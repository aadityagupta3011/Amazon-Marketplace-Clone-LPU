import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  const footerLinks = [
    { title: 'Get to Know Us', links: [{ label: 'About ShopKart', to: '/' }, { label: 'Careers', to: '/' }, { label: 'Press Releases', to: '/' }] },
    { title: 'Make Money with Us', links: [{ label: 'Sell products', to: '/' }, { label: 'Become an affiliate', to: '/' }, { label: 'Advertise your products', to: '/' }] },
    { title: 'Let Us Help You', links: [{ label: 'Your Account', to: '/login' }, { label: 'Shipping Rates', to: '/' }, { label: 'Returns Centre', to: '/returns' }] },
  ];

  return (
    <footer className="mt-12 bg-amazon-blue text-slate-200">
      <Link to="/" className="block bg-slate-700 py-4 text-center text-sm font-semibold hover:bg-slate-600">Back to top</Link>
      <div className="page-shell grid gap-8 py-12 sm:grid-cols-3">
        {footerLinks.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 font-bold text-white">{column.title}</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-white hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div id="footer" className="border-t border-slate-600 py-7">
        <div className="page-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} ShopKart Marketplace. All rights reserved.</p>
          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
              <a key={index} href="#footer" aria-label="Social media" className="grid h-8 w-8 place-items-center rounded-full border border-slate-500 hover:border-white hover:text-white"><Icon /></a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
