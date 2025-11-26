---
title: "AI-Powered Deployment Orchestration"
pageTitle: "RAG-Based Release Recommendation Engine"
seoTitle: "AI-Powered Release Orchestration | Jitan Gupta"
description: "How I built a RAG-based system to reduce release planning time from 2 hours to 10 minutes using Azure AI and Qdrant."
pubDate: "2024-11-15"
heroImage: "/images/RAG Powered Recommendation Engine.png"
articleTag: "AI & DevOps"
stats:
  - percentage: "92%"
    description: "Reduction in planning time"
  - percentage: "0"
    description: "Missed dependencies since launch"
  - percentage: "100%"
    description: "Automated impact analysis"
---

## The Challenge

In a complex multi-tenant SaaS environment, release planning is often the bottleneck. For this platform, the challenge was significant:

*   **Complex Dependencies:** 14+ microservices with inter-dependencies that weren't always explicitly documented.
*   **High Risk:** A bad deployment order could cause downtime for 400+ tenants.
*   **Manual Toil:** Senior engineers spent 2-3 hours per release manually cross-referencing Jira tickets, git commits, and tenant usage logs to determine the safe upgrade path.

We needed a way to automate this intelligence without losing the nuance that human engineers provide.

## The Solution: RAG-Based Orchestration

I architected and built a **Retrieval-Augmented Generation (RAG)** system that acts as an intelligent release manager. Unlike standard CI/CD pipelines that just execute steps, this system *understands* the changes.

### Architecture

The system is built on **Azure AI Foundry** and **Qdrant** (Vector Database), integrated into the .NET Core ecosystem.

1.  **Data Ingestion:**
    *   **Jira Tickets:** User stories and bug fixes are ingested to understand *intent*.
    *   **Git Commits:** Code changes are analyzed to understand *impact*.
    *   **Release Notes:** Historical data provides context on past issues.

2.  **Vectorization:**
    *   We use OpenAI's `text-embedding-3-small` to create vector embeddings of these artifacts.
    *   These are stored in **Qdrant**, allowing for semantic search (e.g., "Find all changes related to the 'billing-service' API contract").

3.  **The Reasoning Engine:**
    *   When a release is proposed, the system queries Qdrant for relevant changes.
    *   It retrieves the dependency graph of the services involved.
    *   It uses **GPT-4o** to synthesize this information and generate a **Release Plan**.

### Key Technical Features

#### Semantic Dependency Analysis
Traditional tools look for explicit version matches. Our RAG system looks for *semantic* conflicts. For example, if a developer changes a database schema in Service A, but Service B's code hasn't been updated to handle that column change, the system flags it—even if the version numbers technically align.

#### Automated Rollback Recommendations
The system doesn't just plan forward; it plans backward. It generates a specific rollback strategy for each deployment step, customized based on the specific database migrations involved in that release.

## Results

The impact was immediate and measurable:

*   **Time Savings:** Release planning dropped from ~2 hours to under 10 minutes.
*   **Reliability:** We eliminated "missed dependency" incidents entirely in the first 3 months.
*   **Empowerment:** Junior engineers can now confidently manage releases that previously required Principal Engineer oversight.

This project proved that AI isn't just for end-user features—it's a powerful tool for operational excellence.
