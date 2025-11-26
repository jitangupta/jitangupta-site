---
title: "Multi-Tenant AKS Migration"
pageTitle: "Zero-Downtime Migration to AKS for 400+ Tenants"
seoTitle: "Multi-Tenant AKS Migration Case Study | Jitan Gupta"
description: "Migrating a 400+ tenant SaaS platform to AKS with zero downtime using AGIC, YARP, and version-based routing."
pubDate: "2024-10-01"
heroImage: "/images/Multi-Tenant App Design.png"
articleTag: "Cloud Infrastructure"
stats:
  - percentage: "400+"
    description: "Tenants migrated"
  - percentage: "0s"
    description: "Downtime during cutover"
  - percentage: "4"
    description: "Simultaneous versions supported"
---

## The Challenge

The platform was running on a legacy setup of Azure VMs and Cloud Services (Classic). It was struggling to scale:

*   **Scaling Limitations:** Adding new tenants meant provisioning new VMs, which was slow and expensive.
*   **Deployment Bottlenecks:** Deployments required "maintenance windows" where the system was offline for all tenants.
*   **Version Lock-in:** All tenants had to be on the same version. If a new feature broke something for Tenant A, we had to rollback Tenant B as well.

The goal was to migrate to **Azure Kubernetes Service (AKS)** to solve these issues, but with a strict requirement: **Zero Downtime**.

## The Solution: Version-Aware Routing

We didn't just "lift and shift." We re-architected the ingress layer to support advanced traffic shaping.

### Architecture

The core of the solution involves **AGIC (Application Gateway Ingress Controller)** and **YARP (Yet Another Reverse Proxy)**.

1.  **Infrastructure as Code:**
    *   The entire cluster is defined in **Terraform**, ensuring reproducibility.
    *   **Helm** charts manage the application deployments, with **ArgoCD** handling the GitOps workflow.

2.  **The Routing Logic:**
    *   We implemented a "stamp" based architecture. Each version of the application (e.g., `v1.2`, `v1.3`) runs as a separate set of pods in the cluster.
    *   **YARP** sits at the edge. It inspects the incoming request headers (specifically `X-Tenant-ID`).
    *   It queries a high-performance Redis cache to look up which version that tenant is assigned to.
    *   It then routes the traffic to the specific Kubernetes service for that version.

### Technical Deep Dive: Zero-Downtime Cutover

The migration itself was the biggest engineering challenge. We couldn't just flip a switch.

We implemented a **Strangler Fig Pattern** at the DNS layer:

1.  **Phase 1:** We routed 1% of read-only traffic to the new AKS cluster to validate performance.
2.  **Phase 2:** We moved internal "dogfood" tenants to the cluster.
3.  **Phase 3:** We began migrating customer tenants one by one. This was done by updating the Redis routing table, not by changing DNS.
    *   This meant we could move Tenant A to AKS while Tenant B stayed on VMs.
    *   If Tenant A had issues, we could flip them back to VMs in milliseconds by updating the Redis key.

## Results

*   **Zero Downtime:** We migrated 400+ tenants over 2 weeks without a single minute of platform-wide downtime.
*   **Multi-Version Support:** We can now run the last 4 major versions simultaneously. This allows us to roll out beta features to specific tenants without risking stability for everyone else.
*   **Cost Savings:** By utilizing AKS node pools and auto-scaling, we reduced infrastructure costs by 35% compared to the static VM allocation.
