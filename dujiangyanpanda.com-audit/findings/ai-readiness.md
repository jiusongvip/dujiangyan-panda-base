# AI Search Readiness Findings

**Score**: 40/100  
**Category Weight**: 10%

## Issues Found

### [High] No structured data — AI crawler comprehension gap
Without JSON-LD, AI crawlers (ChatGPT, Perplexity, Google AI Overviews) must infer page meaning from text alone. Schema provides explicit entity definitions that improve citation accuracy.

**Recommendation**: Adding TouristAttraction, FAQPage, and Organization schemas will directly improve how AI search engines understand and cite this site.

### [Medium] No llms.txt file
Missing structured context file for LLM crawlers. An llms.txt provides a curated summary of site content specifically for AI systems.

**Recommendation**: Create public/llms.txt following the llmstxt.org specification.

### [Medium] No author/credential signals
AI search engines prioritize content with clear provenance. No author information, credentials, or content methodology is present.

**Recommendation**: Add author pages, editorial guidelines, and content methodology statements.

### [Medium] No explicit AI crawler directives
Without a robots.txt, there's no way to explicitly allow or disallow AI crawlers like GPTBot and Claude.

**Recommendation**: Add explicit GPTBot and anthropic-ai directives to robots.txt.

## Strengths
- Clean semantic HTML — easy for AI crawlers to parse
- Well-structured content with clear headings
- Fully static — no JS rendering needed
- English-language, clear target audience
