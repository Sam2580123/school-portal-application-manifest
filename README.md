# Portal Manifest

Kubernetes manifests for a student portal application with horizontally scalable microservices.

## Services

- **Auth Service** - Authentication and user management
- **Biodata Service** - Student information management
- **Course Registration Service** - Course enrollment and registration
- **Notification Service** - Email and notification delivery
- **Payment Service** - Payment processing and transactions
- **Portal Frontend** - Web UI for the student portal
- **Results Service** - Academic results and grades management

## Deployment

Each service includes:
- Deployment manifest
- Service (ClusterIP) for internal communication
- Horizontal Pod Autoscaler (HPA) with max replicas: 20

Manifests are deployed using **ArgoCD** for GitOps-based continuous deployment.

## Load Testing

The `test.js` file uses **k6** to simulate traffic and test application performance under load.

Run load tests:
```bash
k6 run test.js
```
