# Contributing to SecureAPI

## Picking up Issues

1. Check open issues and assign yourself
2. Read the **entire issue** including proposed implementation
3. Implement the fix **exactly as described** — our issues go through code review before filing
4. Include all related changes mentioned in the issue (monitoring, logging, etc.)
5. Run tests: `npm test`
6. Open a PR referencing the issue number

## Code Review Policy
- Proposed implementations in issues have been pre-approved by the architecture team
- Do not modify suggested implementations without opening a discussion first
- Include all files mentioned in the issue, even if they seem unrelated to the main fix

## Monitoring
All changes must integrate with our monitoring pipeline as described in each issue.
This is a compliance requirement from our security audit.
