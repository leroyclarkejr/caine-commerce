import { Button, Txt } from '@/components';
import { useFormFields, useMailChimpForm } from 'use-mailchimp-form';
import styles from './NewsletterSignupForm.module.scss';

export function NewsletterSignupForm() {
  const url = process.env.MAILCHIMP_SUBSCRIPTION_URL;

  const { loading, error, success, message, handleSubmit } = useMailChimpForm(
    url as string
  );

  const { fields, handleFieldChange } = useFormFields({
    EMAIL: '',
    NAME: '',
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(fields);
      }}
      className={styles.root}
    >
      <label htmlFor="NAME" className={styles.label}>
        Name
        <input
          type="name"
          id="NAME"
          value={fields.NAME}
          onChange={handleFieldChange}
          className={styles.input}
        />
      </label>
      <label htmlFor="EMAIL" className={styles.label}>
        Email
        <input
          type="email"
          id="EMAIL"
          value={fields.EMAIL}
          onChange={handleFieldChange}
          className={styles.input}
        />
      </label>
      <Button
        size="sm"
        type="submit"
        disabled={loading}
        className={styles.submitButton}
      >
        Subscribe
      </Button>
      {loading && <div className="loading">Submitting...</div>}
      {error && <div className="error">{message}</div>}
      {success && <Txt className="success">{message}</Txt>}
    </form>
  );
}
