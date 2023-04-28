import Link from 'next/link'

export const navLinks = [
  {
    href: '/',
    title: 'Product',
  },
  {
    href: '/',
    title: 'Features',
  },
  {
    href: '/',
    title: 'Marketplace',
  },
  {
    href: '/',
    title: 'Company',
  },
]

export const navCTAs = [
  {
    href: '/',
    title: 'Log in',
    button: false,
  },
  {
    href: '/',
    title: 'Sign up',
    button: true,
  },
]

export default function WithCallToAction() {
  return (
    <div className="flex items-center justify-between border px-10 py-5">
      <Link className="flex-1 border-8" href="/">
        Logo
      </Link>
      <div className="flex gap-8">
        {navLinks.map((link) => (
          <Link key={link.title} href={link.href}>
            {link.title}
          </Link>
        ))}
      </div>
      {navCTAs && (
        <div className="flex flex-1 justify-end gap-8 border-8">
          {navCTAs.map((cta, i) => (
            <>
              {cta.button ? (
                <Link key={i} href={cta.href}>
                  {cta.title}
                </Link>
              ) : (
                <Link key={i} href={cta.href}>
                  {cta.title}
                </Link>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  )
}
