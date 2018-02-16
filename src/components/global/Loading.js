import React from 'react';

const Loading = () => (
  <div>
    <main role="main" id="container" className="main-container push">
      <section>
        <div className="content">
          <div className="loading">
            <div className="loading-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106 54">
                <path
                  fill="currentColor"
                  d="M77.6,18.3c0,3.2-1.2,6.4-3.7,8.8l-21,21l-21-21c-4.9-4.9-4.9-12.8,0-17.7c2.4-2.4,5.6-3.7,8.9-3.7
        c3.2,0,6.4,1.2,8.8,3.7l3.3,3.3l3.3-3.3c4.9-4.9,12.8-4.9,17.7,0C76.3,11.9,77.6,15.1,77.6,18.3z"
                />
              </svg>
            </div>
            <p className="loading-text">Loading</p>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Loading;
