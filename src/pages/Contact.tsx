import { useTranslation } from "react-i18next";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useMetaTags } from "../hooks/useMetaTags";

export const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "", subject: "inquiry" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useMetaTags({
    titleKey: "seo.contactTitle",
    descriptionKey: "seo.contactDescription",
    image: "https://mejoresdestinos.com.ar/img/bariloche.jpg",
    baseUrl: "https://mejoresdestinos.com.ar",
  });

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSuccess(true);
      setError(false);
      setForm({ name: "", email: "", message: "", subject: "inquiry"});
    })
    .catch(() => {
      setError(true);
      setSuccess(false);
    });
  };

  return (
    <section className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{t("contact.title")}</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder={t("contact.name")}
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t("contact.email")}
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          aria-label="Elige una opción"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="inquiry">{t("contact.subject.inquiry")}</option>
          <option value="collab">{t("contact.subject.collab")}</option>
          <option value="feedback">{t("contact.subject.feedback")}</option>
          <option value="other">{t("contact.subject.other")}</option>
        </select>
        <textarea
          name="message"
          placeholder={t("contact.message")}
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border rounded h-32"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {t("contact.send")}
        </button>
      </form>

      {success && <p className="text-green-600 mt-4">{t("contact.success")}</p>}
      {error && <p className="text-red-600 mt-4">{t("contact.error")}</p>}
    </section>
  );
};
