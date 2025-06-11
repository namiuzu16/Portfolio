import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const EMAIL_CONFIG = {
    serviceId: "service_j0jh7vo",
    templateId: "template_doi412o",
    publicKey: "q5ERo9WxvXp6H8xZ0",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ type: "error", message: "Nama wajib diisi!" });
      return false;
    }
    if (!formData.email.trim()) {
      setStatus({ type: "error", message: "Email wajib diisi!" });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: "error", message: "Format email tidak valid!" });
    }
    if (!formData.message.trim()) {
      setStatus({ type: "error", message: "Pesan wajib diisi!" });
      return false;
    }
    return true;
  };

  const sendEmail = async (e) => {
    if (e) e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      emailjs.init(EMAIL_CONFIG.publicKey);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: "rahmadaniayundafitri@gmail.com",
      };

      await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        templateParams
      );

      setStatus({
        type: "success",
        message: "Pesan berhasil dikirim! Terima kasih telah menghubungi saya.",
      });

      handleReset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message:
          "Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setStatus({ type: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen pt-12 sm:pt-16 lg:pt-18">
      <div className="p-4 sm:p-12 lg:p-25 text-amber-50 max-w-7xl mx-auto">
        <h1
          className={`font-light text-4xl sm:text-5xl lg:text-6xl text-center mb-12 sm:mb-20 lg:mb-0 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          CONTACT
        </h1>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mt-8 sm:mt-16 lg:mt-40 mb-16 sm:mb-32 lg:mb-60 px-4 sm:px-8 lg:px-25 py-8 sm:py-12 lg:py-15 rounded-2xl bg-[#1A1123] transition-all duration-700 shadow-[0_0_25px_#C971FF] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#754791] transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              Send <br />
              <span className="underline underline-offset-8 sm:underline-offset-12 lg:underline-offset-20 hover:text-[#C971FF] transition-colors duration-300">
                Message
              </span>
            </h1>
          </div>

          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div ref={form} className="space-y-6">
              <div className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="NAME"
                  disabled={isLoading}
                  className="w-full border-0 border-b-2 border-stone-400 focus:outline-none focus:ring-0 focus:border-[#C971FF] bg-transparent text-stone-400 placeholder-stone-400 transition-all duration-300 hover:border-stone-300 pb-2 disabled:opacity-50"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="EMAIL"
                  disabled={isLoading}
                  className="w-full border-0 border-b-2 border-stone-400 focus:outline-none focus:ring-0 focus:border-[#C971FF] bg-transparent text-stone-400 placeholder-stone-400 transition-all duration-300 hover:border-stone-300 pb-2 disabled:opacity-50"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="NO. TLPN "
                  disabled={isLoading}
                  className="w-full border-0 border-b-2 border-stone-400 focus:outline-none focus:ring-0 focus:border-[#C971FF] bg-transparent text-stone-400 placeholder-stone-400 transition-all duration-300 hover:border-stone-300 pb-2 disabled:opacity-50"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="MESSAGE"
                  disabled={isLoading}
                  className="w-full border-0 border-b-2 border-stone-400 focus:outline-none focus:ring-0 focus:border-[#C971FF] bg-transparent text-stone-400 placeholder-stone-400 transition-all duration-300 hover:border-stone-300 resize-none pb-2 disabled:opacity-50"
                  rows="3"
                  required
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`p-3 rounded-lg text-center text-sm transition-all duration-300 ${
                    status.type === "success"
                      ? "bg-green-900/30 text-green-400 border border-green-400/30"
                      : status.type === "error"
                      ? "bg-red-900/30 text-red-400 border border-red-400/30"
                      : "bg-blue-900/30 text-blue-400 border border-blue-400/30"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="flex gap-4 justify-center sm:justify-end mt-8">
                <button
                  type="button"
                  onClick={handleReset}
                  disabled={isLoading}
                  className="px-6 py-2 cursor-pointer text-[#754791] hover:text-[#C971FF] hover:scale-105 transition-all duration-300 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  CANCEL
                </button>

                <button
                  type="button"
                  onClick={sendEmail}
                  disabled={isLoading}
                  className="px-6 py-2 cursor-pointer text-[#754791] hover:text-[#C971FF] hover:scale-105 transition-all duration-300 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#754791] border-t-transparent rounded-full animate-spin"></div>
                      SENDING...
                    </>
                  ) : (
                    "SEND"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
