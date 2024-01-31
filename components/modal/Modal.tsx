import { Txt } from '@/components';
import { useModal } from '@/context/ModalContext';
import { AnimatePresence, motion } from 'framer-motion';
import { NewsletterSignupForm } from '../NewsletterSignupForm';
import styles from './Modal.module.scss';

export function Modal() {
  const { openModal, closeModal, isOpen } = useModal();

  const handleOpen = () => {
    openModal();
  };

  const handleClose = () => {
    closeModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.root}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.content}
            initial={{ y: '24px' }}
            animate={{ y: 0 }}
          >
            <div className={styles.header}>
              <Txt className={styles.title}>Mailing List</Txt>

              <button className={styles.closeBtn} onClick={handleClose}>
                X
              </button>
            </div>
            <NewsletterSignupForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
