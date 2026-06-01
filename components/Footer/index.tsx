function FooterLink({ text, link}) {
  return (
    <a href={link} className="text-gray-600 hover:text-gray-800">{text}</a>
  )
}

const footerLinks1 = [
  { text: 'Home', link: '#' },
  { text: 'About Us', link: '#' },
  { text: 'Contact Us', link: '#' },
  { text: 'Collection', link: '#' }
];

const footerLinks2 = [
  { text: 'Terms of Service', link: '#' },
  { text: 'Privacy Policy', link: '#' },
  { text: 'Shipping Policy', link: '#' },
  { text: 'Return Policy', link: '#' }
];

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 py-6 border-t border-gray-300">
        <div className="flex space-x-16">
          <nav>
            <div className="font-medium">Quick Links</div>
            <div className="flex flex-col mt-6 space-y-4">
              {footerLinks1.map((nav) => (
                <FooterLink key={nav.text} text={nav.text} link={nav.link} />
              ))}
            </div>
          </nav>
          <nav>
            <div className="font-medium">Policies</div>
            <div className="flex flex-col mt-6 space-y-4">
              {footerLinks2.map((nav) => (
                <FooterLink key={nav.text} text={nav.text} link={nav.link} />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}