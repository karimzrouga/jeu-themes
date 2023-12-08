import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

const Card = ({ title, content }) => (
  <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', borderRadius: '8px' }}>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);



export default function LanguageToggle() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <>
      <h2>Change Language i18n</h2>
      <p>Current Language: {currentLanguage}</p>
      <h3>{t("title")}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <Card title="Card 1" content="Content for Card 1" />
        <Card title="Card 2" content="Content for Card 2" />
        <Card title="Card 3" content="Content for Card 3" />
      </div>
    </>
  );
}
