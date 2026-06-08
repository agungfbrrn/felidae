import { useState, useEffect } from 'react';
import { publications, scholarProfile } from './data/publications';
import './App.css';

function App() {
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // ESC key keypress listener to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedPublication(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Body scroll-lock when modal is active
  useEffect(() => {
    if (selectedPublication) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPublication]);

  // Handle outside clicks on overlay backdrop
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setSelectedPublication(null);
    }
  };

  // Helper to bold the primary researcher's name ("Agung Febrian") in the list of authors
  const renderFormattedAuthors = (authorsStr) => {
    const parts = authorsStr.split(', ');
    return parts.map((author, index) => {
      const isMainResearcher = author.trim() === 'Agung Febrian';
      return (
        <span key={index}>
          {isMainResearcher ? <strong>{author}</strong> : author}
          {index < parts.length - 1 ? ', ' : ''}
        </span>
      );
    });
  };

  // Filter publications dynamically based on search query (Title, abstract, journal, keywords)
  const filteredPublications = publications.filter((pub) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      pub.title.toLowerCase().includes(query) ||
      pub.abstract.toLowerCase().includes(query) ||
      pub.journal.toLowerCase().includes(query) ||
      pub.keywords.some((keyword) => keyword.toLowerCase().includes(query))
    );
  });

  return (
    <div className="app-wrapper">
      {/* 1. HERO / PROFILE SECTION (Top) */}
      <header className="profile-section">
        <div className="container profile-container">
          <div className="profile-avatar-wrapper">
            <img 
              src={scholarProfile.avatarUrl} 
              alt={scholarProfile.name} 
              className="profile-avatar" 
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{scholarProfile.name}</h1>
            <p className="profile-title">{scholarProfile.title}</p>
            <p className="profile-affiliation">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {scholarProfile.affiliation}
            </p>
            <p className="profile-bio">{scholarProfile.bio}</p>
            <div className="profile-actions" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a 
                href={scholarProfile.scholarUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-scholar"
              >
                {/* Google Scholar Style Cap SVG Icon */}
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L1 9L12 15L21 10.09V17H23V9M2 9.22V15.5C2 17.5 6 19 12 19C18 19 22 17.5 22 15.5V9.22L12 14.67L2 9.22Z" />
                </svg>
                Google Scholar Profile
              </a>

              {/* ResearchGate Button with Perfect Soft Minimalist Gray */}
              {scholarProfile.researchGateUrl && (
                <a 
                  href={scholarProfile.researchGateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-scholar"
                  style={{ 
                    background: '#e9e9e9', 
                    color: '#111827', 
                    border: '1px solid #e9ecef',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
                  }}
                >
                  {/* Minimalist RG Text Icon */}
                  <span style={{ fontWeight: '800', fontSize: '11px', backgroundColor: '#111827', color: '#ffffff', padding: '1px 4px', borderRadius: '3px', marginRight: '4px', letterSpacing: '-0.5px' }}>RG</span>
                  ResearchGate
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 3. PUBLICATIONS SECTION */}
      <main className="publications-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Publications</h2>
            <div className="filter-controls">
              <div className="search-input-wrapper">
                {/* Magnifying glass SVG */}
                <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search by title, keyword, or journal..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="publications-grid">
            {filteredPublications.length > 0 ? (
              filteredPublications.map((pub) => (
                <article 
                  className="publication-card" 
                  key={pub.id}
                  onClick={() => setSelectedPublication(pub)}
                >
                  <div className="card-cover-container">
                    <img 
                      src={pub.coverImageUrl} 
                      alt={pub.title} 
                      className="card-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="card-content">
                    <div className="card-meta">
                      <span className="card-journal">{pub.journal}</span>
                      <span className="card-date">{pub.date.split(" ")[1]}</span>
                    </div>
                    <h3 className="card-title">{pub.title}</h3>
                    <p className="card-authors">
                      {renderFormattedAuthors(pub.authors)}
                    </p>
                    <div className="card-footer">
                      <span className="card-action">
                        View Details
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-results">
                <p>No publications matching "{searchQuery}" could be found.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* 4. FOOTER */}
      <footer className="footer-section">
        <div className="container footer-container">
          <p className="footer-affiliation">{scholarProfile.name}</p>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>

      {/* 5. INTERACTIVE ARTICLE DETAILS MODAL OVERLAY */}
      <div 
        className={`modal-overlay ${selectedPublication ? 'open' : ''}`}
        onClick={handleBackdropClick}
      >
        {selectedPublication && (
          <div className="modal-container">
            <button 
              className="btn-close" 
              onClick={() => setSelectedPublication(null)}
              aria-label="Close modal"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="modal-grid">
              <div className="modal-cover-wrapper">
                <img 
                  src={selectedPublication.coverImageUrl} 
                  alt={selectedPublication.title} 
                  className="modal-cover"
                />
              </div>
              <div className="modal-info">
                <span className="modal-journal">{selectedPublication.journal}</span>
                <h3 className="modal-title">{selectedPublication.title}</h3>
                <p className="modal-authors">
                  {renderFormattedAuthors(selectedPublication.authors)}
                </p>
                <p className="modal-date">{selectedPublication.date}</p>
                
                <div className="modal-section-divider"></div>
                
                <h4 className="modal-abstract-title">Abstract</h4>
                <p className="modal-abstract-text">{selectedPublication.abstract}</p>
                
                <h4 className="modal-keywords-title">Keywords</h4>
                <div className="modal-keywords">
                  {selectedPublication.keywords.map((keyword, index) => (
                    <span className="keyword-pill" key={index}>{keyword}</span>
                  ))}
                </div>
                
                <a 
                  href={selectedPublication.journalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-journal-cta"
                >
                  View Original Publication
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;