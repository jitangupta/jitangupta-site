---
title: 'University Credit System Modernization'
pageTitle: 'How We Transformed a University’s Legacy Credit System with Cloud-Native Architecture'
seoTitle: 'University Legacy System Modernization | Credit Platform Rebuilt with .NET Core & Azure'
summary: 'We helped a leading North American university modernize their outdated credit evaluation system by rebuilding it as a scalable, mobile-friendly, cloud-native platform using .NET Core, Angular, and Azure.'
description: 'Case study: Discover how we replaced three monolithic WebForms applications with a unified .NET Core and Angular platform hosted on Azure—boosting usability, scalability, and performance for a university’s mission-critical credit system.'
pubDate: '20 Apr 2025'
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
    description: "Improved system usability based on user satisfaction scores"
  - percentage: "60%"
    description: "Reduced maintenance overhead with unified, service-oriented architecture"
  - percentage: "70%"
    description: "Increased platform availability during peak enrollment periods with auto-scaling on Azure"
draft: true
---
[comment]:<> (Jitan’s leadership was instrumental in turning around our legacy system. His structured approach—starting with thorough documentation and ending with a fully modern cloud-native platform—helped us deliver better experiences for students, evaluators, and administrators.)
## When did it all start?
I was part of another project when some lead engineers left the organisation, and the project hung in between. Some senior members (Director of Engineering, Product Managers, aka stakeholders) with whom I had already worked. They assigned me the backend of the project to lead. 
I was happy for the opportunity and furious as things were scattered due to:
- Limited product knowledge 
- MThere wasn’t any documentation
- People worked for a few months, but there wasn’t noticeable progress in migration\
Though a junior engineer was working on it.

## How did I take over?
**Assessment:** The first thing I did was to communicate. I asked many questions to stakeholders to understand the goal, deadline, and working of the application to fill the product knowledge gap.
_Coffee helped a lot during this time._
And I started with documenting the first module and proposed plans of execution to the stakeholders.

## The Proposal and First Noticeable Progress
- Document one module at a time
- Present it to stakeholders to gain confidence before we migrate. Sometimes Agile really helps a lot.
- Once approved, I extracted the backend part from the documentation and converted it into small Jira tasks along with an epic for each module. The Frontend Engineering Manager did his part of the work.
- The tasks were assigned to other backend engineers while I focused on documenting.
- Within 3 weeks, the documentation was completed, the development of the first module was completed, and they were ready for frontend integration.
<img src="/case-study/credit-management/Credit Management System-approach.png" class="" alt="" />
TODO: Add image info here
**Note:** This migration was before the Chatgpt moment, and I wasn’t aware of many tools; everything I did was manual.

## Architecture change
The existing apps and services were deployed in IIS inside a VM in Azure. 

With Migration, we used SOA architecture and built a cloud-native app using roles and permissions by unifying a single client-facing app used by all types of users (students, Evaluators and Admins).

We used a CI/CP pipeline with Docker and deployed the application inside AKS.

The deployed version included Kong, Helm-chart, and ArgoCD.

## Let’s focus on KPIs

This migration was a huge jump in tech stack, system usability and revenue.
### Tech Stack
- When we shifted from IIS inside the VM to Containers, scalability improved. The system became fault-tolerant.
- We cut the tech debt and improved system performance by utilising .net Core, EF Core and Docker.
- Integration of the ELK stack helped us during and after migration to track the error handling of the system optimisations.
- DevOps utilisation at full potential with the help of Jenkins, Helm chart, KONG, Argocd, and AKS, though they were out of my reach at the moment of modernisation

**Before**
<img src="/case-study/credit-management/Credit Management System architecture before.png" alt="" />

**After**
<img src="/case-study/credit-management/Credit Management System architecture after.png" alt="" />

### System Usability
- The legacy system wasn’t responsive, so reaching out to mobile, and tablet devices was a significant improvement.
- With migration, we leveraged UX considerations to enhance system usability even further.

### Revenue
- With migration, revenue increased by 30%. 
- Talking just numbers doesn’t justify this point, as a new system was in place, the organisations started marketing and promoting, which further increased revenue.

## Learning
On a personal level, working with a truly global team and leading the backend team was amazing and taught me the value of communication and stakeholders' involvement in product development. 

I am grateful that stakeholders involved me in discussions that aligned me with business goals.

