import Link from 'next/link';
import { Txt } from '../txt';

import { useModal } from '@/context/ModalContext';
import styles from './Footer.module.css';

export function Footer() {
  const { openModal } = useModal();
  const footerLinks = [
    {
      title: 'Terms',
      href: '/terms',
    },
    {
      title: 'Mailing',
      href: null,
      onClick: () => {
        openModal();
      },
    },
    {
      title: 'Twitter',
      href: 'https://twitter.com',
    },
    {
      title: 'Instagram',
      href: 'https://instagram.com/cainecasket',
    },
    {
      title: 'Discord',
      href: 'https://discord.com',
    },
  ];

  return (
    <footer className={styles.root}>
      <Link href="mailo:research@earthII.world" className={styles.contact}>
        <Txt color="gray" fontFamily="vcr">
          research@earthII.world
        </Txt>
      </Link>

      <nav className={styles.nav}>
        {footerLinks.map((link, i) =>
          link.href ? (
            <Link key={i} href={link.href} className={styles.link}>
              <Txt fontFamily="vcr" color="black">
                {' '}
                {link.title}
              </Txt>
            </Link>
          ) : (
            <span key={i} onClick={link.onClick} className={styles.link}>
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
