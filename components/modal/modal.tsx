import { Txt } from '@/components';
// import { useModal } from '@/context/ModalContext';
import { AnimatePresence, motion } from 'framer-motion';
// import { NewsletterSignupForm } from '../newsletter-signup-form';
import styles from './modal.module.css';

export function Modal() {
  // const { closeModal, isOpen } = useModal();

  // const handleOpen = () => {
  //   openModal();
  // };

  // const handleClose = () => {
  //   closeModal();
  // };

  return (
    <AnimatePresence>
      <motion.div
        className={styles.root}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className={styles.content} initial={{ y: '24px' }} animate={{ y: 0 }}>
          <div className={styles.header}>
            <Txt className={styles.title}>Mailing List</Txt>

            <button className={styles.closeBtn}>X</button>
          </div>
          {/* <NewsletterSignupForm /> */}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
