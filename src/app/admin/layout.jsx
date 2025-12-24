"use client";

import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  //  Login page: NO admin layout
  if (isLoginPage) {
    return <>{children}</>;
  }

  //  Admin panel layout
  return (
    <div style={styles.container}>
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

      <main style={styles.main}>
        <header style={styles.header}>
          <span>Welcome, Admin</span>
        </header>

        <section style={styles.content}>
          {children}
        </section>
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "220px",
    backgroundColor: "var(--primary-color)",
    color: "#fff",
    padding: "20px",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  navList: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    display: "block",
    padding: "10px 0",
    color: "#cbd5e1",
    textDecoration: "none",
  },
  main: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  header: {
    backgroundColor: "#fff",
    padding: "16px",
    borderBottom: "1px solid #e5e7eb",
  },
  content: {
    padding: "24px",
  },
};
