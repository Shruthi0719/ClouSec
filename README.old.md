# ClouSec — AWS Misconfiguration Detector

ClouSec is a lightweight cloud security monitoring tool that scans AWS infrastructure in read-only mode and detects high-risk misconfigurations. This MVP focuses on three critical vulnerabilities:

- Public S3 bucket exposure  
- Over-permissive IAM policies  
- Open security group ports  

The system uses boto3 to collect resource metadata and surfaces findings through a backend API and a simple dashboard.

---

## Architecture Overview

### 1. Secure AWS Connection
The scanner connects to AWS using boto3 with read-only IAM credentials, ensuring safe inspection without modifying resources.

### 2. Resource Enumeration
The scanner collects configuration data from:
- S3 buckets (public access settings and policies)  
- IAM roles and attached policies  
- Security group inbound rules  

### 3. Detection Engine
A rule-based engine evaluates the data and flags risks:

- S3 buckets with public access  
- IAM entities with wildcard (`*`) permissions  
- Security groups exposing sensitive ports to `0.0.0.0/0`  

Each issue is assigned an appropriate severity level.

### 4. Findings Aggregation
All detected issues are normalized into a common structure containing:
- Resource name  
- Issue description  
- Severity  
- Timestamp  

### 5. Backend API
The backend exposes REST endpoints that serve the findings to the frontend in real time.

### 6. Monitoring Dashboard
A lightweight React dashboard displays detected vulnerabilities with severity indicators, providing quick visibility into the cloud security posture.

---

## Design Principles

- Read-only cloud access  
- Lightweight and fast scanning  
- Extensible rule-based detection  
- Real-time visibility  
- Focused AWS scope for rapid MVP delivery  

---

## Future Enhancements

- Multi-cloud support (Azure, GCP)  
- Continuous scheduled scanning  
- Advanced alert integrations  
- Compliance mapping and risk scoring  

---

## Conclusion

ClouSec demonstrates how proactive monitoring of cloud configurations can help teams identify and remediate high-risk exposures before they are exploited.
