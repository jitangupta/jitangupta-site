---
title: 'Kubernetes Daily Commands - Organized by Workflow'
description: ''
pubDate: '3 Sep 2025'
draft: false
---
# Kubernetes Daily Commands - Organized by Workflow

*Commands organized by real-world K8s scenarios for faster reference*

## 1. Cluster & Context Management

### Basic Cluster Operations
```bash
# Check cluster info
kubectl cluster-info

# Get cluster nodes
kubectl get nodes

# Check current context
kubectl config current-context

# List all contexts
kubectl config get-contexts

# Switch context
kubectl config use-context my-cluster

# Set default namespace
kubectl config set-context --current --namespace=my-namespace
```

## 2. Working with Pods

### Pod Lifecycle
```bash
# List pods in current namespace
kubectl get pods

# List pods in all namespaces
kubectl get pods --all-namespaces

# List pods with more details
kubectl get pods -o wide

# Create pod from image
kubectl run nginx --image=nginx --port=80

# Delete pod
kubectl delete pod nginx

# Force delete stuck pod
kubectl delete pod nginx --force --grace-period=0
```

### Pod Debugging
```bash
# Describe pod (detailed info)
kubectl describe pod nginx

# Get pod logs
kubectl logs nginx

# Follow pod logs in real-time
kubectl logs -f nginx

# Get logs from previous container restart
kubectl logs nginx --previous

# Execute command in pod
kubectl exec -it nginx -- bash

# Port forward to local machine
kubectl port-forward pod/nginx 8080:80
```

## 3. Deployments & ReplicaSets

### Deployment Management
```bash
# Create deployment
kubectl create deployment nginx --image=nginx --replicas=3

# List deployments
kubectl get deployments

# Scale deployment
kubectl scale deployment nginx --replicas=5

# Update deployment image
kubectl set image deployment/nginx nginx=nginx:1.20

# Check rollout status
kubectl rollout status deployment/nginx

# Rollback deployment
kubectl rollout undo deployment/nginx

# Get deployment history
kubectl rollout history deployment/nginx
```

### ReplicaSet Operations
```bash
# List replicasets
kubectl get rs

# Describe replicaset
kubectl describe rs nginx-replicaset
```

## 4. Services & Networking

### Service Management
```bash
# Create service (expose deployment)
kubectl expose deployment nginx --port=80 --type=ClusterIP

# List services
kubectl get services
kubectl get svc

# Describe service
kubectl describe svc nginx

# Delete service
kubectl delete svc nginx

# Create LoadBalancer service
kubectl expose deployment nginx --port=80 --type=LoadBalancer

# Port forward to service
kubectl port-forward svc/nginx 8080:80
```

### Ingress Operations
```bash
# List ingress resources
kubectl get ingress

# Describe ingress
kubectl describe ingress my-ingress
```

## 5. ConfigMaps & Secrets

### ConfigMap Management
```bash
# Create configmap from literals
kubectl create configmap app-config --from-literal=ENV=production --from-literal=DEBUG=false

# Create configmap from file
kubectl create configmap app-config --from-file=config.properties

# List configmaps
kubectl get configmaps
kubectl get cm

# View configmap content
kubectl describe cm app-config

# Edit configmap
kubectl edit cm app-config

# Delete configmap
kubectl delete cm app-config
```

### Secret Management
```bash
# Create secret
kubectl create secret generic app-secret --from-literal=password=mysecret

# Create secret from file
kubectl create secret generic app-secret --from-file=credentials.txt

# List secrets
kubectl get secrets

# View secret (base64 encoded)
kubectl get secret app-secret -o yaml

# Decode secret
kubectl get secret app-secret -o jsonpath='{.data.password}' | base64 -d

# Delete secret
kubectl delete secret app-secret
```

## 6. Persistent Volumes & Claims

### Volume Management
```bash
# List persistent volumes
kubectl get pv

# List persistent volume claims
kubectl get pvc

# Describe pvc
kubectl describe pvc my-claim

# Create pvc from file
kubectl apply -f pvc.yaml

# Delete pvc
kubectl delete pvc my-claim
```

## 7. Namespaces

### Namespace Operations
```bash
# List namespaces
kubectl get namespaces
kubectl get ns

# Create namespace
kubectl create namespace my-app

# Delete namespace
kubectl delete namespace my-app

# Get resources in specific namespace
kubectl get pods -n my-app

# Set default namespace for current context
kubectl config set-context --current --namespace=my-app
```

## 8. YAML Manifests & Apply

### Working with YAML Files
```bash
# Apply single manifest
kubectl apply -f deployment.yaml

# Apply all manifests in directory
kubectl apply -f ./manifests/

# Apply from URL
kubectl apply -f https://example.com/manifest.yaml

# Delete from manifest
kubectl delete -f deployment.yaml

# Validate manifest without applying
kubectl apply -f deployment.yaml --dry-run=client

# Show what would be applied
kubectl diff -f deployment.yaml
```

### Sample Deployment YAML
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.20
        ports:
        - containerPort: 80
        env:
        - name: ENV
          value: "production"
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
```

### Sample Service YAML
```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: ClusterIP
```

## 9. Debugging & Troubleshooting

### Resource Investigation
```bash
# Get all resources in namespace
kubectl get all

# Get resource with custom columns
kubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase,NODE:.spec.nodeName

# Get resource as JSON/YAML
kubectl get pod nginx -o yaml
kubectl get pod nginx -o json

# Watch resources for changes
kubectl get pods -w

# Get events in namespace
kubectl get events --sort-by=.metadata.creationTimestamp

# Describe node for capacity/issues
kubectl describe node node-name
```

### Performance & Resource Usage
```bash
# Get resource usage (requires metrics-server)
kubectl top nodes
kubectl top pods

# Get pod resource requests/limits
kubectl describe pod nginx | grep -A 5 "Requests\|Limits"
```

### Container Debugging
```bash
# Execute commands in specific container (multi-container pods)
kubectl exec -it pod-name -c container-name -- bash

# Copy files to/from pods
kubectl cp file.txt pod-name:/tmp/
kubectl cp pod-name:/tmp/file.txt ./file.txt

# Check container logs in multi-container pods
kubectl logs pod-name -c container-name
```

## 10. System Maintenance

### Cleanup Operations
```bash
# Delete completed/failed pods
kubectl delete pods --field-selector=status.phase=Succeeded
kubectl delete pods --field-selector=status.phase=Failed

# Delete all resources with label
kubectl delete all -l app=nginx

# Cordon node (prevent new pods)
kubectl cordon node-name

# Drain node (move pods to other nodes)
kubectl drain node-name --ignore-daemonsets --delete-emptydir-data

# Uncordon node
kubectl uncordon node-name
```

---

## Quick Troubleshooting Scenarios

### Pod Won't Start
```bash
kubectl get pods                    # Check pod status
kubectl describe pod pod-name       # Get detailed events
kubectl logs pod-name               # Check application logs
kubectl get events --sort-by=.metadata.creationTimestamp  # Check recent events
```

### Service Not Accessible
```bash
kubectl get svc                     # Check if service exists
kubectl describe svc service-name   # Check endpoints
kubectl get endpoints               # Verify pod selection
kubectl port-forward svc/service-name 8080:80  # Test connectivity
```

### Resource Issues
```bash
kubectl top nodes                   # Check node resource usage
kubectl top pods                    # Check pod resource usage
kubectl describe node node-name     # Check node capacity and conditions
```

### ImagePull Issues
```bash
kubectl describe pod pod-name       # Check events for image pull errors
kubectl get secrets                 # Check if image pull secrets exist
```

### Configuration Issues
```bash
kubectl get cm                      # Check configmaps
kubectl get secrets                 # Check secrets
kubectl describe pod pod-name       # Check volume mounts
```

---

## AKS-Specific Commands

### Azure Kubernetes Service
```bash
# Get AKS credentials
az aks get-credentials --resource-group myRG --name myAKS

# Browse AKS dashboard
az aks browse --resource-group myRG --name myAKS

# Upgrade AKS cluster
az aks upgrade --resource-group myRG --name myAKS --kubernetes-version 1.25.0

# Scale AKS node pool
az aks nodepool scale --resource-group myRG --cluster-name myAKS --name default --node-count 5
```

---

*Organized by workflow - find K8s commands faster when you're in a specific scenario.*