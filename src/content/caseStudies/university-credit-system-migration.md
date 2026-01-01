---
title: 'University Credit System Modernization'
pageTitle: 'How We Rebuilt a University’s Legacy Credit System with Cloud-Native Architecture – and Boosted Revenue by 30%'
seoTitle: 'Legacy to Cloud: How We Rebuilt a University Credit System and Boosted Revenue by 30%'
summary: 'We helped a leading North American university modernize its outdated credit evaluation system by rebuilding it as a scalable, mobile-friendly, cloud-native platform using .NET Core, Angular, and Azure.'
description: 'Case study: Discover how we replaced three monolithic WebForms applications with a unified .NET Core and Angular platform hosted on Azure—boosting usability, scalability, and performance for a university’s mission-critical credit system.'
pubDate: '24 Apr 2025'
heroImage: '/case-study/credit-management/Credit Management System banner.png'
articleTag: 'Legacy Modernization'
previousArticle: 'user-management-migration'
nextArticle: ''
serviceUsed: 'Retire & Rebuild Strategy'
testimonial: ''
testimonialAuthor: ''
testimonialAuthorTitle: ''
testimonialAuthorCompany: ''
testimonialAuthorImage: ''
stats:
  - percentage: "40%"
    description: "Improved system usability based on user satisfaction score."
  - percentage: "45%"
    description: "Reduced maintenance overhead by unifying single application and microservice architecture"
  - percentage: "30%"
    description: "Revenue increased. With ongoing promotional campaigns, revenue increased further."
draft: false
---
[comment]:<> (Jitan’s leadership was instrumental in turning around our legacy system. His structured approach—starting with thorough documentation and ending with a fully modern cloud-native platform—helped us deliver better experiences for students, evaluators, and administrators.)

## Client Context
A mid-sized North American university was running a fragmented credit evaluation system—three disconnected apps, manual workflows, and no mobile support. Stakeholders were aware the system needed modernization to improve scale and student experience but needed support translating that vision into a clear execution plan.

## The Fire Drill: Taking Over Mid-Crisis
I was part of another project when some lead engineers left the organization, and the project hung in between. Some senior members (Director of Engineering, Product Managers, aka stakeholders) with whom I had already worked. They assigned me the backend of the project to lead. 
I was happy for the opportunity and furious due to:
- Limited product knowledge 
- There wasn’t any documentation
- People had worked for a few months, but there wasn’t any noticeable progress visible to stakeholders.

Though a junior engineer was working on it.

## First Moves: Ask, Document, Simplify
**Assessment:** The first thing I did was to communicate. I asked a lot of questions to stakeholders to understand the goal, deadline, and working of the application to fill the product knowledge gap.

_**Coffee helped a lot during this time.**_

And I started with documenting the first module and proposed plans of execution to the stakeholders.

## Momentum through Clarity and Modular Execution
- Document one module at a time
- Present it to stakeholders to gain confidence before we migrate. Sometimes Agile helps a lot.
- Once approved, I extracted the backend part from the documentation and converted it into small Jira tasks along with an epic for each module. The Frontend Engineering Manager did his part of the work.
- The tasks were assigned to other backend engineers while I was focusing on documenting other modules.
- Within 3 weeks, the documentation was completed, the development of the first module got completed, and APIs were ready for frontend integration.

<div class="text-center mb-5 mt-2">
<img src="/case-study/credit-management/Credit Management System-approach.png" class="p-5 pb-0 bg-white rounded-2xl border-2 border-gray-300" alt="" />
<span class="italic text-gray-500">The diagram shows different phases of migration from assessment to documenting, and planning until it was in production.</span>
</div>

<blockquote class="p-4 my-4 border-s-4 border-primary-300 bg-primary-50">
<p class="text-xl italic font-medium leading-relaxed text-gray-900">“This was before the AI boom. Every doc, plan, and migration step was manual—proof that disciplined execution and stakeholder alignment can outperform even the best tools.”</p>
</blockquote>

## From VM Chaos to Cloud-Native Confidence
The existing apps and services were deployed in IIS inside a VM in Azure. 

With Migration, we used Micro Service Architecture and built a cloud-native app using roles and permissions by unifying a single client-facing app used by all types of users (Students, Evaluators and Admins).

We used a CI/CP pipeline with Docker and deployed the application inside AKS.

Other tools like Kong API Gateway, Helm-chart to store built docker images, and ArgoCD to view the Deployed Pods were used.

## What Changed: Tech, Usability, Revenue

This migration was a huge jump in tech stack, system usability and revenue.
### 1. Tech Stack
- When we shifted from IIS inside the VM to Azure Kubernetes Service (AKS), scalability improved. The system became fault-tolerant.
- We cut the tech debt and improved system performance by utilizing AKS, SPA and microservices.
- Integration of the ELK stack helped us during and after migration to track the error handling and with system optimizations.
- DevOps utilization at full potential with the help of Jenkins, Helm chart, KONG, Argocd, and AKS. Though they were out of my reach at the moment of modernization.

**Before → VM, IIS, 3 apps**
<div class="text-center mb-5 mt-2">
<img src="/case-study/credit-management/Credit Management System architecture before.png" class="p-5 bg-white rounded-xl border-2 border-gray-300" alt="" />
<span class="italic text-gray-500">The diagram shows the existing architecture before migration with VM, IIS, and 3 apps.</span>
</div>

**After → AKS, SPA, microservices**
<div class="text-center mb-5 mt-2">
<img src="/case-study/credit-management/Credit Management System architecture after.png" class="p-5 bg-white rounded-2xl border-2 border-gray-300" alt="" />
<span class="italic text-gray-500">The diagram shows the migrated cloud-native architecture utilizing AKS, SPA, microservices. Now system can utilize cloud native features easily like scalability and resilience.</span>
</div>

### 2. System Usability
- The legacy system wasn’t responsive, so reaching out to mobile, and tablet devices was a significant improvement.
- With migration, we leveraged UX considerations to enhance system usability even further.

### 3. Revenue
- With migration and system usability, more students were able to access the application, which helped with revenue jump by 30%. 
- Talking just numbers doesn’t justify this point, as a new system was in place, the organizations started marketing and promoting, which further increased revenue.

## What This Project Taught Me
- Documentation-first approach creates clarity and builds stakeholder confidence.
- Breaking complex migrations into discrete modules enables parallel progress tracking.
- Cross-functional communication bridges technical and business perspectives.
- Prioritizing user experience enhancements can directly impact business metrics.
- Technical modernization creates opportunities for business process improvements.
- I am grateful that stakeholders involved me in discussions that aligned me with business goals.

Facing similar migration challenges? **[Let's discuss your architecture](#contact)**.

