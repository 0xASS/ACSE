
class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: white;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1e3a8a;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .nav-link {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #3b82f6;
        }
        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #1e3a8a;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.875rem;
        }
      </style>
      <nav>
        <div class="container">
          <a href="home.html" class="logo">CareerCanvas</a>
          <div class="nav-links">
            <a href="home.html" class="nav-link">Jobs</a>
            <a href="profile.html" class="nav-link">Profile</a>
            <a href="index.html" class="nav-link">Logout</a>
<div class="user-profile">
              <div class="avatar">JD</div>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
