const reportConversion = () => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-18492632780/rYceCNTRqbYdEMzd_PFE',
    })
  }
}

export default function FloatingWhatsApp() {
  const phone = '995595037177'
  const link = `https://wa.me/${phone}`

  return (
    <a href={link} onClick={reportConversion} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="WhatsApp">
      <svg viewBox="0 0 32 32" className="floating-whatsapp-icon">
        <path fill="currentColor" d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.69.78 5.197 2.13 7.303L2.667 29.333l6.197-2.07A13.27 13.27 0 0 0 16.004 29.333c7.363 0 13.333-5.973 13.333-13.333S23.367 2.667 16.004 2.667Zm0 24.243c-2.273 0-4.39-.667-6.177-1.81l-.443-.273-4.33 1.447 1.46-4.217-.29-.45A10.873 10.873 0 0 1 4.667 16c0-6.26 5.077-11.333 11.337-11.333S27.34 9.74 27.34 16 21.267 26.91 16.004 26.91Zm6.13-8.43c-.337-.167-1.99-.98-2.297-1.09-.307-.113-.53-.167-.753.167-.223.333-.863 1.09-1.06 1.313-.193.223-.39.25-.723.083-.333-.167-1.407-.52-2.68-1.654-.99-.883-1.66-1.973-1.853-2.307-.193-.333-.02-.513.16-.68.18-.167.4-.43.6-.647.2-.217.267-.367.4-.613.133-.247.067-.