#!/bin/bash
#
# FoFD 2026 Website - Full Agent Review
#
# This script orchestrates all 5 feedback agents to review the site-2026 content.
# Run from the repository root directory.
#
# Usage:
#   ./docs/agentic-content-review/scripts/run-review.sh
#   ./docs/agentic-content-review/scripts/run-review.sh --agent 1
#   ./docs/agentic-content-review/scripts/run-review.sh --file index.html
#

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REVIEW_ROOT="$(dirname "$SCRIPT_DIR")"
REPO_ROOT="$(dirname "$(dirname "$REVIEW_ROOT")")"
SITE_DIR="$REPO_ROOT/site-2026"
AGENTS_DIR="$REVIEW_ROOT/agents"
REVIEWS_DIR="$REVIEW_ROOT/reviews"
INVENTORY="$REVIEW_ROOT/content-inventory/inventory.md"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Agent definitions
declare -A AGENTS=(
    ["1"]="agent-1-ux-jtbd.md|UX & JTBD Evaluator"
    ["2"]="agent-2-compliance.md|Accessibility & Compliance Auditor"
    ["3"]="agent-3-community.md|Community Engagement Specialist"
    ["4"]="agent-4-content.md|Conservation Content Evaluator"
    ["5"]="agent-5-technical.md|Technical Quality Assessor"
)

# Content files to review
declare -a CONTENT_FILES=(
    "index.html"
    "join.html"
    "gallery.html"
    "css/style.css"
)

print_header() {
    echo ""
    echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║     FoFD 2026 Website - Agentic Content Review System          ║${NC}"
    echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
}

print_section() {
    echo ""
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${YELLOW}  $1${NC}"
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_info() {
    echo -e "${BLUE}→ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

show_help() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  -a, --agent NUM     Run only agent NUM (1-5)"
    echo "  -f, --file FILE     Review only specific file"
    echo "  -l, --list          List available agents and files"
    echo "  -h, --help          Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0                  Run all agents on all files"
    echo "  $0 --agent 1        Run only Agent 1 (UX/JTBD)"
    echo "  $0 --file index.html    Review only index.html"
    echo "  $0 -a 2 -f join.html    Run Agent 2 on join.html"
}

list_resources() {
    print_section "Available Agents"
    for key in "${!AGENTS[@]}"; do
        IFS='|' read -r file name <<< "${AGENTS[$key]}"
        echo "  Agent $key: $name"
        echo "            → $AGENTS_DIR/$file"
        echo ""
    done

    print_section "Content Files"
    for file in "${CONTENT_FILES[@]}"; do
        if [[ -f "$SITE_DIR/$file" ]]; then
            echo -e "  ${GREEN}✓${NC} $file"
        else
            echo -e "  ${RED}✗${NC} $file (not found)"
        fi
    done
}

generate_review_prompt() {
    local agent_num=$1
    local content_file=$2
    local agent_info="${AGENTS[$agent_num]}"

    IFS='|' read -r agent_file agent_name <<< "$agent_info"

    local timestamp=$(date '+%Y-%m-%d_%H-%M-%S')
    local output_file="$REVIEWS_DIR/agent-${agent_num}-$(basename "$content_file" .html)-${timestamp}.md"

    echo ""
    echo "═══════════════════════════════════════════════════════════════"
    echo "  REVIEW TASK: Agent $agent_num ($agent_name)"
    echo "  File: $content_file"
    echo "  Output: $output_file"
    echo "═══════════════════════════════════════════════════════════════"
    echo ""
    echo "To run this review with Claude Code, use this prompt:"
    echo ""
    echo "┌─────────────────────────────────────────────────────────────────┐"
    echo "│                                                                 │"
    cat << EOF
  Please review the file '$content_file' using the Agent $agent_num
  evaluation criteria.

  Steps:
  1. Read the agent prompt: $AGENTS_DIR/$agent_file
  2. Read the content file: $SITE_DIR/$content_file
  3. Apply all evaluation criteria from the agent prompt
  4. Generate a complete review following the output format
  5. Save the review to: $output_file

  Focus on:
EOF

    case $agent_num in
        1)
            echo "  - User journeys and Jobs-to-Be-Done"
            echo "  - Membership conversion funnel"
            echo "  - Mobile experience"
            ;;
        2)
            echo "  - WCAG 2.1 AA compliance"
            echo "  - GDPR requirements"
            echo "  - Elderly user accessibility"
            ;;
        3)
            echo "  - Volunteer recruitment funnel"
            echo "  - Social media integration"
            echo "  - Youth engagement"
            ;;
        4)
            echo "  - SSSI ecological messaging"
            echo "  - Heritage content accuracy"
            echo "  - Nature Trail integration"
            ;;
        5)
            echo "  - Committee maintainability"
            echo "  - Performance optimization"
            echo "  - SEO readiness"
            ;;
    esac

    echo ""
    echo "│                                                                 │"
    echo "└─────────────────────────────────────────────────────────────────┘"
    echo ""
}

run_all_reviews() {
    print_section "Generating Review Tasks"

    local task_count=0

    for agent_num in "${!AGENTS[@]}"; do
        for content_file in "${CONTENT_FILES[@]}"; do
            if [[ -f "$SITE_DIR/$content_file" ]]; then
                generate_review_prompt "$agent_num" "$content_file"
                ((task_count++))
            fi
        done
    done

    print_section "Summary"
    echo "Generated $task_count review task prompts"
    echo ""
    echo "To execute reviews, copy the prompts above into Claude Code"
    echo "or use the interactive method described in the README."
}

run_single_agent() {
    local agent_num=$1
    local content_file=$2

    if [[ -z "${AGENTS[$agent_num]}" ]]; then
        print_error "Invalid agent number: $agent_num"
        exit 1
    fi

    if [[ -n "$content_file" ]]; then
        if [[ -f "$SITE_DIR/$content_file" ]]; then
            generate_review_prompt "$agent_num" "$content_file"
        else
            print_error "Content file not found: $content_file"
            exit 1
        fi
    else
        for file in "${CONTENT_FILES[@]}"; do
            if [[ -f "$SITE_DIR/$file" ]]; then
                generate_review_prompt "$agent_num" "$file"
            fi
        done
    fi
}

# Parse arguments
AGENT_NUM=""
CONTENT_FILE=""

while [[ $# -gt 0 ]]; do
    case $1 in
        -a|--agent)
            AGENT_NUM="$2"
            shift 2
            ;;
        -f|--file)
            CONTENT_FILE="$2"
            shift 2
            ;;
        -l|--list)
            print_header
            list_resources
            exit 0
            ;;
        -h|--help)
            show_help
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            show_help
            exit 1
            ;;
    esac
done

# Main execution
print_header

# Verify directories exist
if [[ ! -d "$SITE_DIR" ]]; then
    print_error "Site directory not found: $SITE_DIR"
    exit 1
fi

if [[ ! -d "$AGENTS_DIR" ]]; then
    print_error "Agents directory not found: $AGENTS_DIR"
    exit 1
fi

# Create reviews directory if needed
mkdir -p "$REVIEWS_DIR"

# Execute based on arguments
if [[ -n "$AGENT_NUM" ]]; then
    run_single_agent "$AGENT_NUM" "$CONTENT_FILE"
elif [[ -n "$CONTENT_FILE" ]]; then
    # Run all agents on single file
    for agent_num in "${!AGENTS[@]}"; do
        generate_review_prompt "$agent_num" "$CONTENT_FILE"
    done
else
    run_all_reviews
fi

print_section "Next Steps"
echo "1. Copy a review prompt from above"
echo "2. Paste into Claude Code"
echo "3. Review will be saved to: $REVIEWS_DIR/"
echo "4. Update inventory.md with completion status"
echo ""
