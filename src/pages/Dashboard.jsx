import VulnerabilityCard from "../components/VulnerabilityCard";

export default function Dashboard() {

  const vulnerabilities = [
    {
      title: "S3 Public Access",
      status: "Critical",
      description: "Bucket is publicly accessible.",
      color: "#ef4444"
    },
    {
      title: "IAM MFA",
      status: "High Risk",
      description: "MFA not enabled for admin users.",
      color: "#f59e0b"
    },
    {
      title: "Open Ports",
      status: "Critical",
      description: "Port 22 open to 0.0.0.0/0",
      color: "#ef4444"
    }
  ];

  return (
    <div style={{ display: "flex" }}>

      {/* Sidebar */}
      <div
        style={{
          width: "240px",
          background: "#111827",
          height: "100vh",
          padding: "25px",
          color: "white"
        }}
      >
        <h2 style={{ color: "#3b82f6" }}>Cloud Sentinel</h2>
        <hr style={{ borderColor: "#1f2937" }} />
        <p>Dashboard</p>
        <p>Scan Results</p>
        <p>Reports</p>
        <p>Settings</p>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "40px",
          background: "#0f172a",
          color: "white"
        }}
      >
        <h1 style={{ marginBottom: "30px" }}>
          Executive Security Overview
        </h1>

        {/* Top Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px"
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "12px"
            }}
          >
            <h4>Total Checks</h4>
            <h2>3</h2>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "12px"
            }}
          >
            <h4>Critical Issues</h4>
            <h2 style={{ color: "#ef4444" }}>2</h2>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "12px"
            }}
          >
            <h4>Security Score</h4>
            <h2 style={{ color: "#22c55e" }}>40%</h2>
          </div>
        </div>

        {/* Vulnerabilities Section */}
        <h2 style={{ marginTop: "50px" }}>
          Detected Vulnerabilities
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
            marginTop: "20px"
          }}
        >
          {vulnerabilities.map((item, index) => (
            <VulnerabilityCard
              key={index}
              title={item.title}
              status={item.status}
              description={item.description}
              color={item.color}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
