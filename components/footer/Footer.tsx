import Link from 'next/link';
import { Txt } from '../txt';

// import { useModal } from '@/context/ModalContext';

export function Footer() {
  // const { openModal } = useModal();

  const contactEmail = process.env.CONTACT_EMAIL;

  const footerLinks = [
    {
      title: 'Terms',
      href: '/terms'
    },
    {
      title: 'Mailing',
      href: null
    },
    {
      title: 'Twitter',
      href: 'https://twitter.com'
    },
    {
      title: 'Instagram',
      href: 'https://instagram.com/cainecasket'
    },
    {
      title: 'Discord',
      href: 'https://discord.com'
    }
  ];

  return (
    <footer className="flex w-full flex-col items-center justify-center rounded-t-3xl bg-white px-3 pb-9 pt-1.5 text-black md:flex-nowrap md:items-center md:justify-between md:px-6 md:py-3">
      <Link href={`mailo:${contactEmail}`} className="mb-3 md:mb-0">
        <Txt color="gray" fontFamily="vcr">
          {contactEmail}
        </Txt>
      </Link>

      <nav className="ml-3 flex flex-row flex-wrap justify-center md:flex-nowrap">
        {footerLinks.map((link, i) =>
          link.href ? (
            <Link key={i} href={link.href} className="ml-3 first:ml-0" target="_blank">
              <Txt fontFamily="vcr" color="black">
                {' '}
                {link.title}
              </Txt>
            </Link>
          ) : (
            <span key={i} className="ml-3 first:ml-0">
              <Txt fontFamily="vcr" color="black">
                {' '}
                {link.title}
              </Txt>
            </span>
          )
        )}
      </nav>
    </footer>
  );
}
