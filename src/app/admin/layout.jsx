export const metadata = {
  title: 'Admin Panel',
}

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, sans-serif' }}>
        <div style={styles.container}>
          {/* Sidebar */}
          <aside style={styles.sidebar}>
            <h2 style={styles.logo}>School Admin</h2>

            <nav>
              <ul style={styles.navList}>
                <li><a href="/admin" style={styles.link}>Dashboard</a></li>
                <li><a href="/admin/events" style={styles.link}>Events</a></li>
                <li><a href="/admin/faculty" style={styles.link}>Faculty</a></li>
                <li><a href="/" style={styles.link}>Main Site</a></li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main style={styles.main}>
            <header style={styles.header}>
              <span>Welcome, Admin</span>
            </header>

            <section style={styles.content}>
              {children}
            </section>
          </main>
        </div>
      </body>
    </html>
  )
}

const styles = {
  container: {
    marginTop: '20px',
    display: 'flex',
    minHeight: '100vh',
  },
  sidebar: {
    width: '220px',
    backgroundColor: 'var(--primary-color)',
    color: '#fff',
    padding: '20px',
    marginTop: '65px',
  },
  logo: {
    width: '100%',
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '20px',
    fontSize: '20px',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    display: 'block',
    padding: '10px 0',
    color: '#cbd5e1',
    textDecoration: 'none',
  },
  main: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  header: {
    backgroundColor: '#fff',
    padding: '16px',
    borderBottom: '1px solid #e5e7eb',
  },
  content: {
    padding: '24px',
  },
}
