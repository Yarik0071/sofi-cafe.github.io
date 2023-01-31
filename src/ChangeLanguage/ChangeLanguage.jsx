import { useNavigate } from "react-router-dom";
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import i18n from '../i18n/i18n';
import styles from './ChangeLanguage.module.css';
import { Home } from '../Home';

export const ChangeLanguage = () => {
  const navigate = useNavigate();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)

    navigate(`/${i18n.language}`);
  }

  return (
    <>
      <div className={styles.background}>
        <div className={styles.wrapper} />
        <div className={styles.modalBgc} />
        <div className={styles.modal}>
          <h3 className={styles.title}>Choose Language</h3>
          <div className={styles.buttons}>
            {[
              { id: 'us', lan: 'English' },
              { id: 'ua', lan: 'Українська' },
              { id: 'es', lan: 'Español' }
            ].map(({ id, lan }) =>
              <button key={id} className={styles.button} onClick={() => changeLanguage(id)}>
                <span>{lan}</span>
                {getUnicodeFlagIcon(id.toUpperCase())}
              </button>
            )}
          </div>
        </div>
      </div>
      <Home />
    </>
  )
};
