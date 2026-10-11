# Case Study Evidence & Ownership Checklist

> Editorial working document for future improvements to the three public case studies. **Do not treat prompts, possible measures, or proposed artifacts below as already achieved results.** This file is not linked from the public homepage; the repository and PR are nevertheless publicly visible.

## A common recruiter-friendly evidence contract

For each case study, verify five fields before publishing stronger claims:

1. **Problem:** affected user/team and technical or operational constraint, with no confidential names.
2. **My contribution:** decisions made, code or architecture delivered, acceptance/review responsibility, and collaboration boundaries. Distinguish ownership from contributions, guidance, and upstream work.
3. **Engineering decision:** 2+ options considered, chosen design, tradeoff, and outcome (or an honest unresolved constraint).
4. **Measured result:** baseline, comparison window, numerator/denominator, measurement source, exact date range, and evidence of attribution.
5. **Public evidence:** sanitized architecture, public PR/issue or code, screenshot/demo with fictitious data, reproducible tests, or article. Identify approval owner where applicable.

Never publish internal URLs, customer or employee identities, AWS account IDs, secret endpoints, prompts containing private data, auth tokens, or screenshots containing operational records. Obtain employer disclosure approval before releasing internal platform figures.

---

## Case 01 — Enterprise AI Agent Platform & Governance

**Recruiter signal:** enterprise AI platform architecture and governance, not just adoption of an AI tool.

### Clarify personal responsibilities
- [ ] Specify whether you owned proxy architecture, Bedrock integration, policy checks, session model, consumption tracking, dashboards, OpenTelemetry configuration, or operational troubleshooting. Name concrete modules or design deliverables only where permitted.
- [ ] Distinguish design, direct implementation, integration, code review, rollout, and support. Mark what collaborators built.
- [ ] Record scope (tech lead/contributor), adoption timeline, and which controls remain prototypes or incomplete.
- [ ] State what was tested in production versus sandbox; do not claim telemetry success unless CloudWatch ingestion was actually confirmed.

### Document engineering decisions
- [ ] **Centralized proxy vs direct model calls:** why a proxy boundary was chosen; security and maintenance tradeoffs.
- [ ] **Session / usage attribution:** how sessions are identified, aggregated, and separated from personal content; note privacy tradeoffs.
- [ ] **Risky-operation controls:** interception point, allow/deny decisions, false positives, and fail-open vs fail-closed policy, if actually implemented.
- [ ] **Observability path:** OpenTelemetry/OTLP -> AWS services, authentication, failure handling, and verified end-to-end status. Do not describe currently failing paths as successful.
- [ ] **Provider strategy:** describe routing, credential handling or Bedrock constraints only at a publishable abstraction level.

### Quantitative results to collect — NOT verified public facts
- [ ] Approved number of onboarded users and participating teams; define "onboarded", "active", and time period.
- [ ] Weekly active developers, sessions/week, request volume, and usage distribution (aggregate only).
- [ ] Success/error rates and p50/p95 proxy latency before vs after relevant changes.
- [ ] Share of requests with attributable usage/cost, monitoring coverage, telemetry loss rate.
- [ ] Confirmed risky operations prevented and manually reviewed false-positive rate, only with meaningful denominators.
- [ ] Measured developer time saved or adoption rate if a valid baseline exists; avoid inferred ROI.

### Public-safe proof candidates
- [ ] Redrawn high-level architecture using generic service labels and synthetic sample data.
- [ ] Sanitized sequence diagram of proxy, session, policy, and telemetry boundaries.
- [ ] Screenshots with fictitious sessions and redacted identifiers, after approval.
- [ ] Non-sensitive ADR/design rationale and synthetic integration test summary.
- [ ] Employer-approved scale statement; otherwise keep the published qualitative statement.

**Publication gate:** employer approval for internal diagrams, usage metrics, and any implied proprietary technology.

---

## Case 02 — DevCrew Agent Development Control Plane

**Recruiter signal:** architecture, product ownership, implementation/review process and end-to-end desktop validation.

### Clarify personal responsibilities
- [ ] Separate your own product requirements, design decisions, issue/PR coordination, manual acceptance, and source-code changes.
- [ ] Attribute base Orca functionality to upstream; describe incremental DevCrew work instead of assigning the whole application's capabilities to yourself.
- [ ] For each claim, list an issue/PR, linked commit, code review, automated test or acceptance record.
- [ ] Record which OS was actually tested (Windows VM, Intel macOS, Apple Silicon macOS) and test result per commit/build.

### Document engineering decisions
- [ ] **DevelopmentEvent and Activity Graph:** why a versioned event contract precedes project dashboards; identity and missing-evidence semantics.
- [ ] **Read-only Project Map:** choosing evidence-backed projections instead of invented activity or status.
- [ ] **Corporate network restrictions:** declared endpoints; why "not declared → not allowed" and how configuration is audited.
- [ ] **Review and disagreement workflow:** relation of review state, evidence, and activity graph if shipped; label prototypes/integration work clearly.
- [ ] **Desktop validation:** cross-platform parity, persistence, backwards compatibility, and testing tradeoffs.

### Quantitative results to collect — NOT verified public facts
- [ ] Verified number of new/modified contracts, shipped features, and acceptance scenarios, with PR-linked sources.
- [ ] Tests passing **at a given commit SHA**, and CI gate status; distinguish focused tests from full CI.
- [ ] Number of prohibited/default external endpoint references removed or blocked, with clear scan scope and date.
- [ ] Windows/macOS functional acceptance results, and known failures.
- [ ] Operational review time or defect-detection improvement **only if** baseline comparison is available.
- [ ] Adoption/user count **only if** the app is actually deployed and such data may be disclosed; do not transfer internal AI platform adoption numbers to DevCrew.

### Existing public evidence anchors
- [Source repository](https://github.com/Guan21/cc-orca) — openly acknowledge the upstream codebase.
- [PR #114 — Project Map](https://github.com/Guan21/cc-orca/pull/114).
- [PR #118 — Change Impact](https://github.com/Guan21/cc-orca/pull/118).
- [ ] Add 1 public design document and 1 non-confidential screenshot/short demo tied to the actual branch and release.
- [ ] Make the repository's README and DevCrew case study consistent; current README still begins with the upstream Orca branding.

**Publication gate:** demonstrate actual new work versus upstream and do not call a prototype production-proven.

---

## Case 03 — AWS Cloud Automation & Developer Operations

**Recruiter signal:** practical cloud platform delivery with least-privilege, repeatability, maintainability and measurable operational improvement.

### Clarify personal responsibilities
- [ ] Choose **one** representative workflow (e.g., account/IAM request, EOL tracking, or operations integration) as the primary story; avoid presenting unrelated support tasks as one system.
- [ ] Name the manual workflow you investigated and which phases you actually designed, wrote, reviewed, tested, deployed or operated.
- [ ] Specify who approved IAM/security changes and which partner teams were involved, without naming confidential identities.
- [ ] Identify runtime/stack only if verified for that particular workflow (e.g., Lambda, EventBridge, API Gateway, Step Functions, Python, GitHub Actions).

### Document engineering decisions
- [ ] **Permissions:** least-privilege IAM boundary; approval vs automation tradeoff.
- [ ] **Execution trigger:** batch, scheduled, event-driven or request-driven — what was really used and why.
- [ ] **Reliability:** idempotency, retries, error handling and rollback/escalation for partial failure, if implemented.
- [ ] **Auditability:** structured logs, durable records and review checkpoints as applicable.
- [ ] **Maintainability:** configuration, IaC, deployment, tests and ownership of operational runbooks.

### Quantitative results to collect — NOT verified public facts
- [ ] Monthly workflow volume and manual steps per request.
- [ ] Median completion lead time, before/after comparable period.
- [ ] Human effort per item before/after. For verified data, estimated saved hours/month = (baseline minutes - new minutes) * monthly volume / 60.
- [ ] Error/rework rate, permission misconfiguration rate or missed-EOL items before/after, if tracked.
- [ ] Number of processes automated and operational coverage — define what counts as "automated".
- [ ] Unit cost per request / AWS spend if relevant and approved.

### Public-safe proof candidates
- [ ] Sanitized before/after workflow diagram using fictitious organizational data.
- [ ] Non-secret, original IaC or utility sample (after permission/licensing review).
- [ ] Synthetic API event contracts, automated tests and runbook excerpts.
- [ ] Approved anonymized before/after result table with measurement period.

**Publication gate:** do not expose IAM policies, account structures, environment naming, operational tickets or employer-owned code without approval.

---

## Highest-value editorial follow-ups

- [ ] Identify **one personal ownership statement** supported by evidence for each case.
- [ ] For Case 01, validate an approved **adoption/operational metric**, or leave metrics undisclosed.
- [ ] For Case 02, point to **one architectural decision** and **one verified cross-platform test run**.
- [ ] For Case 03, choose one workflow and gather a **before/after measure** with a clear baseline.
- [ ] Double-check all outcome verbs: "investigated", "designed", "implemented", "validated", and "deployed" must not be interchanged.
- [ ] Confirm that neither the site nor screenshots imply that unfinished governance/OTLP work is already production-operational.
