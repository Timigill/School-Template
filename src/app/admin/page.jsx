
export const metadata = {
  title: 'School Admin Dashboard',
}

export default function AdminPage() {
  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ color: 'var(--primary-color)', fontSize: '30px', fontWeight: '700' }}>
        School Admin Dashboard
      </h1>

      <p style={{ color: 'var(--primary-color)' }}>
        Manage school events, activities, and faculty information
      </p>

      {/* Stats */}
      <div
        style={{
          marginTop: '32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
        }}
      >
        <DashboardCard title="Upcoming Events & Activities" value="8" />
        <DashboardCard title="Faculty Members" value="45" />
      </div>

      {/* Management */}
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ color: 'var(--primary-color)', fontSize: '22px', marginBottom: '16px' }}>
          Management
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          <ManagementCard
            title="Events & Activities Manager"
            description="Create, update, and manage school events and activities."
            link="/admin/events"
          />

          <ManagementCard
            title="Faculty Manager"
            description="Add, edit, and organize faculty members."
            link="/admin/faculty"
          />
        </div>
      </div>
    </div>
  )
}

function DashboardCard({ title, value }) {
  return (
    <div style={cardStyle}>
      <h3 style={{ color: 'var(--primary-color)' }}>{title}</h3>
      <p style={{ fontSize: '26px', fontWeight: 'bold' }}>{value}</p>
    </div>
  )
}

function ManagementCard({ title, description, link }) {
  return (
    <a href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ ...cardStyle, color: 'var(--primary-color)', cursor: 'pointer' }}>
        <h3>{title}</h3>
        <p style={{ color: 'var(--primary-color)', marginTop: '8px' }}>
          {description}
        </p>
        <button
        className="mt-3 btn btn-primary"
        style={{ color: '#0070f3', marginTop: '12px', display: 'inline-block' }}>
          Add Now
        </button>
      </div>
    </a>
  )
}

const cardStyle = {
  padding: '18px',
  borderRadius: '10px',
  border: '1px solid #e5e5e5',
  backgroundColor: '#fafafa',
}
