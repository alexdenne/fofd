#!/bin/bash
#
# Run a single feedback agent against site content
#
# Usage:
#   ./run-agent.sh agent-1-ux-jtbd
#   ./run-agent.sh agent-2-compliance index.html
#

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REVIEW_ROOT="$(dirname "$SCRIPT_DIR")"
REPO_ROOT="$(dirname "$(dirname "$REVIEW_ROOT")")"

AGENT_NAME="${1:-}"
TARGET_FILE="${2:-}"

if [[ -z "$AGENT_NAME" ]]; then
    echo "Usage: $0 AGENT_NAME [TARGET_FILE]"
    echo ""
    echo "Available agents:"
    echo "  agent-1-ux-jtbd      UX & Jobs-to-Be-Done Evaluator"
    echo "  agent-2-compliance   Accessibility & Compliance Auditor"
    echo "  agent-3-community    Community Engagement Specialist"
    echo "  agent-4-content      Conservation Content Evaluator"
    echo "  agent-5-technical    Technical Quality Assessor"
    echo ""
    echo "Example:"
    echo "  $0 agent-1-ux-jtbd index.html"
    exit 1
fi

AGENT_FILE="$REVIEW_ROOT/agents/${AGENT_NAME}.md"

if [[ ! -f "$AGENT_FILE" ]]; then
    echo "Error: Agent file not found: $AGENT_FILE"
    exit 1
fi

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  FoFD Agent Review: $AGENT_NAME"
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "Agent prompt located at:"
echo "  $AGENT_FILE"
echo ""

if [[ -n "$TARGET_FILE" ]]; then
    CONTENT_PATH="$REPO_ROOT/site-2026/$TARGET_FILE"
    if [[ ! -f "$CONTENT_PATH" ]]; then
        echo "Warning: Target file not found: $CONTENT_PATH"
    else
        echo "Target content:"
        echo "  $CONTENT_PATH"
    fi
fi

echo ""
echo "To run this review in Claude Code, use this prompt:"
echo ""
echo "────────────────────────────────────────────────────────────────"
cat << EOF

Review the FoFD 2026 website using the $AGENT_NAME evaluation criteria.

Instructions:
1. Read the agent prompt at: docs/agentic-content-review/agents/${AGENT_NAME}.md
2. Read the content files in site-2026/ (${TARGET_FILE:-all HTML files})
3. Apply all evaluation criteria systematically
4. Generate a comprehensive review in the specified output format
5. Save the review to: docs/agentic-content-review/reviews/${AGENT_NAME}-review-$(date +%Y%m%d).md

Provide specific line numbers, code examples, and actionable recommendations.
EOF
echo ""
echo "────────────────────────────────────────────────────────────────"
echo ""
