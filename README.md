# terraform-aks-microservices

## Overview

This project demonstrates my expertise in Azure cloud development by provisioning and managing a microservices-based application infrastructure on Azure Kubernetes Service (AKS). The goal is to showcase end-to-end skills in infrastructure as code, container orchestration, monitoring, and CI/CD automation — making it ideal for recruiters and technical managers evaluating cloud-native capabilities.

## Project Structure

```
terraform-aks-microservices/
│
├── terraform/ # Terraform scripts to provision Azure infrastructure (AKS, ACR, networking, etc.)
│ ├── main.tf
│ ├── variables.tf
│ ├── outputs.tf
│ └── ...
│
├── k8s-deployments/ # Kubernetes manifests for microservices deployments and services
│ ├── frontend-deployment.yaml
│ ├── backend-deployment.yaml
│ ├── hpa.yaml # Horizontal Pod Autoscaler manifests
│ └── ...
│
├── .github/workflows/ # GitHub Actions workflows for CI/CD pipeline
│ └── deploy.yml
│
├── README.md # Project documentation

```

## Key Technologies

- **Terraform:** Infrastructure as Code (IaC) to provision Azure resources, including AKS cluster and supporting services.
- **Azure Kubernetes Service (AKS):** Container orchestration platform to deploy microservices.
- **Kubernetes:** Management of microservices deployments, services, autoscaling (HPA), and namespaces.
- **Helm:** Package manager used to deploy monitoring tools.
- **Prometheus & Grafana:** Monitoring and visualization stack for real-time metrics and alerts.
- **GitHub Actions:** CI/CD workflows automating build, deploy, and infrastructure management.

## Project Structure & Flow

1. **Infrastructure Provisioning:**  
   Terraform scripts create the Azure resource group, AKS cluster, container registry, and other dependent services.

2. **Kubernetes Deployment:**  
   Deploy frontend and backend microservices using Kubernetes manifests with resource requests and limits for effective autoscaling.

3. **Monitoring Setup:**  
   Use Helm to deploy Prometheus and Grafana in the `monitoring` namespace for cluster and application metrics visualization.

4. **CI/CD Pipeline:**  
   GitHub Actions automates Docker image builds, pushes to Azure Container Registry, and deploys updated manifests to AKS.

## Prerequisites

- Azure subscription with required permissions.
- Azure CLI, Terraform CLI, kubectl installed locally.
- Docker Hub or Azure Container Registry credentials.
- GitHub repository with secrets configured:  
  - `AZURE_CREDENTIALS` (for Azure service principal authentication)  
  - `DOCKER_USERNAME` and `DOCKER_PASSWORD` (for container registry authentication)

## Usage

### Deploy Infrastructure

```bash
terraform init
terraform apply 

---------

Deploy Microservices
    kubectl apply -f k8s-deployments/


Install Monitoring Stack
    helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
    helm repo add grafana https://grafana.github.io/helm-charts
    helm install prometheus prometheus-community/prometheus --namespace monitoring --create-namespace
    helm install grafana grafana/grafana --namespace monitoring

Access Monitoring Dashboards
    Forward Prometheus UI:
        kubectl port-forward -n monitoring svc/prometheus-server 9090:80

    Forward Grafana UI:
        kubectl port-forward -n monitoring svc/grafana 3000:80

Grafana default login:

    Username: admin
    Password: Retrieve via:
        kubectl get secret --namespace monitoring grafana -o jsonpath="{.data.admin-password}" | base64 --decode

Load Testing
    Simulate traffic using a load generator:
        kubectl run load-generator --image=busybox --restart=Never -- /bin/sh -c "while true; do wget -q -O- http://<frontend-service-ip>; done"

CI/CD Pipeline
    Configured in .github/workflows/deploy.yml, automating build, test, and deploy on every push to main branch.

Future Enhancements
    Integrate centralized logging and analytics (e.g., Azure Monitor, ELK stack).
    Implement advanced alerting and incident management workflows.
    Expand microservices with additional features and backend data services.



LinkedIn: https://www.linkedin.com/in/vithushan-visuvalingam-3aa0611b8/


This project is a live demonstration of cloud-native application deployment using Microsoft Azure and Kubernetes best practices.