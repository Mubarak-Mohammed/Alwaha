const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h2 className="section-title">اتصل بنا</h2>
        <div className="contact-info">
          <h2>نحن هنا لمساعدتكم</h2>
          
          <div className="contact-method">
            <div className="contact-icon">📧</div>
            <div>
              <h3>البريد الإلكتروني</h3>
              <p>
                <a href="mailto:info@oasis-store.com" style={{color: '#007bff', textDecoration: 'underline'}}>
                  info@oasis-store.com
                </a>
              </p>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="contact-icon">📱</div>
            <div>
              <h3>واتساب</h3>
              <p>
                <a href="https://wa.me/249127993961" target="_blank" rel="noopener noreferrer" style={{color: '#25d366', textDecoration: 'underline'}}>
                  +249127993961
                </a>
              </p>
            </div>
          </div>
          
          <p style={{marginTop: '2rem', color: '#777'}}>
            نحن متواجدون للرد على استفساراتكم من الساعة 9 صباحاً حتى 10 مساءً
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
