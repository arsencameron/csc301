# Pulse – Hospitality Event Insights

**Note:** This document will evolve throughout the project. Commit regularly to this file as edits/additions/deletions are made to the *Highlights* section. This file serves as the master plan between your team, your partner, and your TA.

---

## Partner Intro

The Pulse project is developed in collaboration with **Peebles Group**, a company delivering digital automation solutions for the hospitality industry using AI, analytics, and smart technology. Peebles Group provides domain expertise, historical data, and guidance on agentic AI tools.

---

## Project Description

Pulse is a web-based platform that helps businesses and organizations anticipate and plan for demand fluctuations by analyzing the impact of local events, news, weather, and other factors on hospitality and urban activity.

Hotels, event organizers, and city planners often struggle to predict demand spikes around large concerts, conferences, sports games, or sudden local developments. **Pulse addresses this by providing actionable insights and forecasts** for these scenarios.

The system automates the collection, analysis, and distribution of event-driven insights, empowering businesses of all sizes to make data-informed decisions with speed and confidence.

---

## Key Features (MVP)

* **Event Data Discovery**: View upcoming events with key metrics (date, venue, estimated attendance, revenue, impact category) to inform pricing decisions.
* **Event Data Heatmap**: Visualize event locations on an interactive map to see demand changes in surrounding regions.
* **Favourite Locations**: Set up to 3 favourite locations for quick access to metrics and event details on a dashboard.
* **Developer API Usage**: Query structured event data and insights from the Pulse API for integration into external systems.
* **Predictive Demand Alerts**: Receive automated alerts for significant demand changes in favourited locations to adjust pricing and staffing proactively.
* **Event Comparison**: Compare multiple upcoming events side by side to identify overlaps and combined demand trends.

---

## System Architecture & Technology Stack

* **Backend**: JavaScript, Node.js, Express.js, PostgreSQL
* **Machine Learning**: Python
* **Frontend**: React, Redux, shadcn/ui
* **Authentication**: KeyCloak
* **APIs**: Google Places, OpenAI, Gemini (provided by Peebles Group)
* **Deployment**: GCP or Peebles Group servers

---

## Deployment & GitHub Workflow

* **Workflow**: Jira ticket-based feature branching. New branches are named after the corresponding Jira ticket.
* **CI/CD**: GitHub Actions handle automated pipelines. Testing occurs in the Dev environment for side branches.
* **PRs & Merging**:

  * Create a Pull Request (PR) from the feature branch into the main branch when a feature is complete.
  * PRs are reviewed by the team, tested in staging, then deployed to production.
* **Best Practice**: Frequent commits and PRs with smaller chunks of work.

---

## Coding Standards & Guidelines

* Code formatting is enforced with **Prettier** for consistency.
* Uniform style is reviewed during PR checks.

---

## License

This project is open-source under the **MIT License**.
