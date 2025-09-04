---
title: 'Helm Daily Commands - Organized by Workflow'
description: ''
pubDate: '4 Sep 2025'
draft: false
---
# Helm Daily Commands - Organized by Workflow

*Commands organized by real-world Helm scenarios for faster reference*

## 1. Helm Setup & Repository Management

### Basic Helm Operations
```bash
# Check Helm version
helm version

# Add chart repository
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo add nginx-stable https://helm.nginx.com/stable

# Update repositories
helm repo update

# List repositories
helm repo list

# Remove repository
helm repo remove bitnami

# Search for charts
helm search repo nginx
helm search hub wordpress
```

## 2. Installing & Managing Releases

### Release Installation
```bash
# Install chart with default values
helm install my-nginx bitnami/nginx

# Install chart with custom name and values
helm install my-app bitnami/nginx --set service.type=LoadBalancer

# Install with values file
helm install my-app bitnami/nginx -f values.yaml

# Install from local chart directory
helm install my-app ./my-chart

# Install with specific namespace
helm install my-app bitnami/nginx --namespace production --create-namespace

# Dry run (see what would be installed)
helm install my-app bitnami/nginx --dry-run --debug
```

### Release Management
```bash
# List installed releases
helm list
helm ls

# List releases in all namespaces
helm list --all-namespaces

# Get release status
helm status my-app

# Get release values
helm get values my-app

# Get all release information
helm get all my-app

# Uninstall release
helm uninstall my-app

# Uninstall but keep history
helm uninstall my-app --keep-history
```

## 3. Upgrading & Rolling Back

### Release Updates
```bash
# Upgrade release with new values
helm upgrade my-app bitnami/nginx --set service.type=NodePort

# Upgrade with values file
helm upgrade my-app bitnami/nginx -f new-values.yaml

# Upgrade to specific chart version
helm upgrade my-app bitnami/nginx --version 9.5.0

# Upgrade and force recreation of pods
helm upgrade my-app bitnami/nginx --recreate-pods

# Upgrade with timeout
helm upgrade my-app bitnami/nginx --timeout 10m

# Check upgrade history
helm history my-app
```

### Rollback Operations
```bash
# Rollback to previous version
helm rollback my-app

# Rollback to specific revision
helm rollback my-app 2

# Rollback with dry-run
helm rollback my-app 2 --dry-run
```

## 4. Creating Helm Charts

### Chart Creation & Structure
```bash
# Create new chart
helm create my-chart

# Validate chart
helm lint my-chart

# Package chart into tarball
helm package my-chart

# Install local chart
helm install test-release ./my-chart

# Template chart (see generated YAML)
helm template my-app ./my-chart

# Template with values
helm template my-app ./my-chart -f values.yaml
```

### Basic Chart Structure
```
my-chart/
├── Chart.yaml          # Chart metadata
├── values.yaml         # Default values
├── charts/             # Dependencies
├── templates/          # Kubernetes manifests
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   ├── _helpers.tpl    # Template helpers
│   └── NOTES.txt       # Post-install notes
└── .helmignore         # Files to ignore
```

### Sample Chart.yaml
```yaml
apiVersion: v2
name: my-app
description: A Helm chart for my application
type: application
version: 0.1.0
appVersion: "1.0.0"

dependencies:
  - name: postgresql
    version: 11.9.13
    repository: https://charts.bitnami.com/bitnami
    condition: postgresql.enabled
```

### Sample values.yaml
```yaml
# Default values for my-chart
replicaCount: 1

image:
  repository: nginx
  pullPolicy: IfNotPresent
  tag: "1.20"

service:
  type: ClusterIP
  port: 80

ingress:
  enabled: false
  className: ""
  annotations: {}
  hosts:
    - host: chart-example.local
      paths:
        - path: /
          pathType: Prefix

resources:
  limits:
    cpu: 100m
    memory: 128Mi
  requests:
    cpu: 100m
    memory: 128Mi

autoscaling:
  enabled: false
  minReplicas: 1
  maxReplicas: 100
  targetCPUUtilizationPercentage: 80

postgresql:
  enabled: true
  auth:
    postgresPassword: "password"
    database: "myapp"
```

## 5. Working with Values & Templates

### Values Management
```bash
# Show default values for chart
helm show values bitnami/nginx

# Get current release values
helm get values my-app

# Override specific values
helm install my-app bitnami/nginx --set replicaCount=3,service.type=LoadBalancer

# Override with multiple values files
helm install my-app ./my-chart -f values.yaml -f prod-values.yaml

# Set values from command line
helm upgrade my-app ./my-chart --set-string image.tag=v2.0.0
```

### Template Debugging
```bash
# Render templates locally
helm template my-app ./my-chart

# Render with specific values
helm template my-app ./my-chart -f values.yaml

# Debug template rendering
helm install my-app ./my-chart --debug --dry-run

# Show only specific template
helm template my-app ./my-chart -s templates/deployment.yaml
```

### Sample Template (deployment.yaml)
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ include "my-chart.fullname" . }}
  labels:
    {{- include "my-chart.labels" . | nindent 4 }}
spec:
  {{- if not .Values.autoscaling.enabled }}
  replicas: {{ .Values.replicaCount }}
  {{- end }}
  selector:
    matchLabels:
      {{- include "my-chart.selectorLabels" . | nindent 6 }}
  template:
    metadata:
      labels:
        {{- include "my-chart.selectorLabels" . | nindent 8 }}
    spec:
      containers:
        - name: {{ .Chart.Name }}
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag | default .Chart.AppVersion }}"
          imagePullPolicy: {{ .Values.image.pullPolicy }}
          ports:
            - name: http
              containerPort: 80
              protocol: TCP
          resources:
            {{- toYaml .Values.resources | nindent 12 }}
```

## 6. Dependencies & Chart Repositories

### Dependency Management
```bash
# Add dependency to Chart.yaml then update
helm dependency update my-chart

# Build dependency from Chart.lock
helm dependency build my-chart

# List chart dependencies
helm dependency list my-chart

# Download dependencies manually
helm pull bitnami/postgresql --version 11.9.13 --untar -d charts/
```

### Custom Chart Repository
```bash
# Create repository index
helm repo index ./charts --url https://my-charts.example.com

# Push chart to repository (if using ChartMuseum)
helm push my-chart-0.1.0.tgz chartmuseum

# Install from custom repo
helm repo add my-repo https://my-charts.example.com
helm install my-app my-repo/my-chart
```

## 7. Debugging & Troubleshooting

### Common Debugging Commands
```bash
# Check what resources would be created
helm template my-app ./my-chart --debug

# Validate chart syntax
helm lint ./my-chart

# Get detailed installation info
helm get all my-app

# Check release hooks
helm get hooks my-app

# Test release connectivity
helm test my-app

# Get release manifest
helm get manifest my-app
```

### Chart Testing
```bash
# Create test in templates/tests/
# test-connection.yaml
apiVersion: v1
kind: Pod
metadata:
  name: "{{ include "my-chart.fullname" . }}-test-connection"
  annotations:
    "helm.sh/hook": test
spec:
  restartPolicy: Never
  containers:
    - name: wget
      image: busybox
      command: ['wget']
      args: ['{{ include "my-chart.fullname" . }}:{{ .Values.service.port }}']

# Run tests
helm test my-app
```

## 8. Helmfile - Multi-Environment Management

### Helmfile Setup
```bash
# Install helmfile (if not already installed)
# Download from: https://github.com/roboll/helmfile/releases

# Initialize helmfile in directory
helmfile init

# Validate helmfile.yaml syntax
helmfile lint

# Show what would be applied
helmfile diff

# Apply all releases
helmfile apply

# Sync specific environment
helmfile -e production sync
```

### Sample helmfile.yaml
```yaml
repositories:
  - name: bitnami
    url: https://charts.bitnami.com/bitnami
  - name: ingress-nginx
    url: https://kubernetes.github.io/ingress-nginx

environments:
  default:
    values:
      - environment: development
      - replicas: 1
  production:
    values:
      - environment: production
      - replicas: 3

releases:
  - name: nginx
    namespace: web
    chart: bitnami/nginx
    version: 13.2.0
    values:
      - values/nginx/{{ .Environment.Name }}.yaml
    set:
      - name: replicaCount
        value: "{{ .Values.replicas }}"
      - name: service.type
        value: LoadBalancer

  - name: ingress-nginx
    namespace: ingress-nginx
    chart: ingress-nginx/ingress-nginx
    version: 4.4.0
    condition: ingress.enabled
    values:
      - values/ingress-nginx/common.yaml

  - name: postgresql
    namespace: database
    chart: bitnami/postgresql
    version: 12.1.0
    values:
      - values/postgresql/{{ .Environment.Name }}.yaml
    secrets:
      - values/postgresql/secrets.yaml
```

### Helmfile Operations
```bash
# List all releases in helmfile
helmfile list

# Sync specific release
helmfile -l name=nginx sync

# Apply only releases with specific labels
helmfile -l tier=frontend apply

# Destroy all releases
helmfile destroy

# Update all chart dependencies
helmfile deps

# Show diff for specific environment
helmfile -e staging diff

# Template all releases
helmfile template
```

### Helmfile Values Structure
```
values/
├── nginx/
│   ├── development.yaml
│   ├── staging.yaml
│   └── production.yaml
├── postgresql/
│   ├── development.yaml
│   ├── production.yaml
│   └── secrets.yaml
└── ingress-nginx/
    └── common.yaml
```

---

## Quick Troubleshooting Scenarios

### Release Failed to Install
```bash
helm status my-app                  # Check release status
helm get all my-app                 # Get detailed info
kubectl get events -n namespace     # Check Kubernetes events
helm uninstall my-app               # Clean up and retry
```

### Template Rendering Issues
```bash
helm lint ./my-chart               # Validate chart syntax
helm template my-app ./my-chart --debug  # See rendered templates
helm install my-app ./my-chart --dry-run --debug  # Test without installing
```

### Values Not Working
```bash
helm show values chart-name         # Check available values
helm get values my-app              # Check current values
helm template my-app ./my-chart -f values.yaml  # Test value rendering
```

### Dependency Issues
```bash
helm dependency list ./my-chart     # Check dependencies
helm dependency update ./my-chart   # Update dependencies
ls charts/                          # Verify dependency downloads
```

### Helmfile Environment Issues
```bash
helmfile -e production list         # Check releases for environment
helmfile -e production diff         # See what would change
helmfile lint                       # Validate helmfile syntax
```

---

*Organized by workflow - master Helm charts and Helmfile for enterprise Kubernetes deployments.*