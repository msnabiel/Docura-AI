"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "../site-ui/code-block-with-copy"

const setupSnippet = `# Production API
BASE_URL="https://yourapi.example.com"

# Local Development
BASE_URL="http://localhost:8000"`

const usageSnippet = `# Quick Health Check
curl -X GET "https://yourapi.example.com/health"

# Quick Query Example
curl -X POST "https://yourapi.example.com/hackrx/run" \\
  -H "Content-Type: application/json" \\
  -d '{"documents": ["document.pdf"], "questions": ["What is this document about?"]}'`

export function examplesDoc() {
  return (
    <DocPageLayout
      title="API Usage Examples"
      description="Ready-to-use examples for all Docura AI endpoints using cURL, Python, and Postman."
      addSnippet={setupSnippet}
      usageSnippet={usageSnippet}
      preview={
        <div className="px-4 sm:px-6 lg:px-12 bg-background text-foreground">
          <div className="text-center space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 p-6 rounded-xl border">
              <h3 className="text-lg font-semibold mb-3">API Endpoints Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="bg-white dark:bg-slate-900/50 p-3 rounded-lg">
                  <div className="font-semibold text-green-600 dark:text-green-400">HackRx</div>
                  <div className="text-xs text-muted-foreground mt-1">Query & answers</div>
                </div>
                <div className="bg-white dark:bg-slate-900/50 p-3 rounded-lg">
                  <div className="font-semibold text-purple-600 dark:text-purple-400">Cache</div>
                  <div className="text-xs text-muted-foreground mt-1">Memory management</div>
                </div>
                <div className="bg-white dark:bg-slate-900/50 p-3 rounded-lg">
                  <div className="font-semibold text-orange-600 dark:text-orange-400">Health</div>
                  <div className="text-xs text-muted-foreground mt-1">Status monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      extraInfo={
        <div className="space-y-8">
          
          {/* HackRx Query Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">🧠 HackRx Query Processing</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Single Document Query - cURL</h3>
                <CodeBlockWithCopy
                  code={`# Query a single document
curl -X POST "https://yourapi.example.com/hackrx/run" \\
  -H "Content-Type: application/json" \\
  -d '{
    "documents": ["document.pdf"],
    "questions": ["What is the main topic of this document?"],
    "search_strategy": "hybrid"
  }'

# Multiple questions on same document
curl -X POST "https://yourapi.example.com/hackrx/run" \\
  -H "Content-Type: application/json" \\
  -d '{
    "documents": ["report.pdf"],
    "questions": [
      "What are the key findings?",
      "What recommendations are made?",
      "What is the conclusion?"
    ],
    "search_strategy": "semantic"
  }'`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Multiple Documents Query - cURL</h3>
                <CodeBlockWithCopy
                  code={`# Query multiple documents
curl -X POST "https://yourapi.example.com/hackrx/run" \\
  -H "Content-Type: application/json" \\
  -d '{
    "documents": ["doc1.pdf", "doc2.docx", "presentation.pptx"],
    "questions": [
      "Compare the main findings across all documents",
      "What common themes appear in these documents?"
    ],
    "search_strategy": "hybrid"
  }'`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Postman HackRx Query</h3>
                <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-6 border border-green-200 dark:border-green-800">
                  <div className="space-y-6">
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-semibold mb-2">Create New Request</h4>
                        <div className="text-sm space-y-1">
                          <div>• Method: <code className="bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded">POST</code></div>
                          <div>• URL: <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">https://yourapi.example.com/hackrx/run</code></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-semibold mb-2">Headers</h4>
                        <div className="bg-white dark:bg-slate-900 rounded border p-3 text-sm font-mono">
                          <div>Content-Type: application/json</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-semibold mb-2">Body (raw JSON)</h4>
                        <div className="bg-white dark:bg-slate-900 rounded border p-3 text-sm font-mono">
                          <pre>{`{
  "documents": ["document.pdf"],
  "questions": ["What is this document about?"],
  "search_strategy": "hybrid"
}`}</pre>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Advanced Postman Setup</h3>
                <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                  <div className="space-y-6">
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-semibold mb-2">Environment Variables</h4>
                        <div className="text-sm space-y-2">
                          <div>Create a new environment with:</div>
                          <div className="bg-white dark:bg-slate-900 rounded border p-3 font-mono text-xs">
                            <div>baseUrl: https://yourapi.example.com</div>
                            <div>localUrl: http://localhost:8000</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-semibold mb-2">Multiple Questions Example</h4>
                        <div className="bg-white dark:bg-slate-900 rounded border p-3 text-sm font-mono">
                          <pre>{`{
  "documents": ["doc1.pdf", "doc2.docx"],
  "questions": [
    "What are the main findings?",
    "What recommendations are made?",
    "Compare the two documents"
  ],
  "search_strategy": "semantic"
}`}</pre>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-semibold mb-2">Tests Tab (Optional)</h4>
                        <div className="text-sm">
                          Add response validation:
                          <div className="bg-white dark:bg-slate-900 rounded border p-3 mt-2 font-mono text-xs">
                            <div>pm.test("Status is 200", function () {`{`}</div>
                            <div>&nbsp;&nbsp;pm.response.to.have.status(200);</div>
                            <div>{`}`});</div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Health Check Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">💚 Health Check</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Health Status - cURL</h3>
                <CodeBlockWithCopy
                  code={`# Check API health
curl -X GET "https://yourapi.example.com/health"

# With verbose output
curl -X GET "https://yourapi.example.com/health" -v

# Save health status
curl -X GET "https://yourapi.example.com/health" -o health.json`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Postman Health Check</h3>
                <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
                  <div className="space-y-6">
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-semibold mb-2">Create Health Check Request</h4>
                        <div className="text-sm space-y-1">
                          <div>• Method: <code className="bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded">GET</code></div>
                          <div>• URL: <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">https://yourapi.example.com/health</code></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-semibold mb-2">Expected Response</h4>
                        <div className="bg-white dark:bg-slate-900 rounded border p-3 text-sm font-mono">
                          <pre>{`{
  "status": "healthy",
  "timestamp": 1691234567.89
}`}</pre>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Postman Health Monitoring</h3>
                <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                  <div className="space-y-6">
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-semibold mb-2">Collection Setup</h4>
                        <div className="text-sm">
                          Create a collection named "API Health Monitoring" with the health endpoint
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-semibold mb-2">Collection Runner</h4>
                        <div className="text-sm space-y-1">
                          <div>• Run → Iterations: 10</div>
                          <div>• Delay: 30000ms (30 seconds)</div>
                          <div>• Save responses for monitoring</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-semibold mb-2">Monitor Setup (Pro)</h4>
                        <div className="text-sm">
                          Use Postman Monitors to automatically check health every 5 minutes
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cache Management Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">🗄️ Cache Management</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Cache Operations - cURL</h3>
                <CodeBlockWithCopy
                  code={`# Get cache statistics
curl -X GET "https://yourapi.example.com/cache/stats"

# Clear all cache entries
curl -X POST "https://yourapi.example.com/cache/clear"

# Clear expired entries (no-op for this API)
curl -X POST "https://yourapi.example.com/cache/clear-expired"`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Postman Cache Management</h3>
                <div className="bg-teal-50 dark:bg-teal-950/30 rounded-lg p-6 border border-teal-200 dark:border-teal-800">
                  <div className="space-y-6">
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-semibold mb-2">Cache Stats Request</h4>
                        <div className="text-sm space-y-1">
                          <div>• Method: <code className="bg-teal-100 dark:bg-teal-900/30 px-2 py-0.5 rounded">GET</code></div>
                          <div>• URL: <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">https://yourapi.example.com/cache/stats</code></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-semibold mb-2">Clear Cache Request</h4>
                        <div className="text-sm space-y-1">
                          <div>• Method: <code className="bg-teal-100 dark:bg-teal-900/30 px-2 py-0.5 rounded">POST</code></div>
                          <div>• URL: <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">https://yourapi.example.com/cache/clear</code></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-semibold mb-2">Collection Organization</h4>
                        <div className="text-sm">
                          Create a "Cache Management" folder with all cache endpoints for easy access
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Postman Workspace Setup</h3>
                <div className="bg-indigo-50 dark:bg-indigo-950/30 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800">
                  <div className="space-y-4">
                    
                    <div className="text-sm">
                      <h4 className="font-semibold mb-2">Complete API Collection Structure:</h4>
                      <div className="bg-white dark:bg-slate-900 rounded border p-4">
                        <div className="font-mono text-xs space-y-1">
                          <div>📁 Docura AI API</div>
                          <div>&nbsp;&nbsp;📁 HackRx Queries</div>
                          <div>&nbsp;&nbsp;&nbsp;&nbsp;📄 Single Document Query</div>
                          <div>&nbsp;&nbsp;&nbsp;&nbsp;📄 Multiple Documents Query</div>
                          <div>&nbsp;&nbsp;📁 Health Monitoring</div>
                          <div>&nbsp;&nbsp;&nbsp;&nbsp;📄 Health Check</div>
                          <div>&nbsp;&nbsp;📁 Cache Management</div>
                          <div>&nbsp;&nbsp;&nbsp;&nbsp;📄 Get Cache Stats</div>
                          <div>&nbsp;&nbsp;&nbsp;&nbsp;📄 Clear Cache</div>
                          <div>&nbsp;&nbsp;&nbsp;&nbsp;📄 Clear Expired Cache</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm">
                      <strong>Pro Tip:</strong> Save all requests in a collection and export for team sharing!
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Response Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">📄 Response Examples</h2>
            
            <div className="space-y-6">
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-600 dark:text-green-400">✅ HackRx Query Success</h3>
                <CodeBlockWithCopy
                  code={`{
  "answers": [
    "The document discusses machine learning applications in healthcare, focusing on diagnostic imaging and patient outcome prediction.",
    "Key findings include 95% accuracy in disease detection and 20% improvement in treatment effectiveness."
  ]
}`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-600 dark:text-green-400">✅ Health Check</h3>
                <CodeBlockWithCopy
                  code={`{
  "status": "healthy",
  "timestamp": 1691234567.89
}`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-600 dark:text-green-400">✅ Cache Statistics</h3>
                <CodeBlockWithCopy
                  code={`{
  "total_entries": 25,
  "memory_usage_mb": 145.7,
  "hit_rate": 0.85,
  "cache_size_limit": "1GB"
}`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-red-600 dark:text-red-400">❌ Error Response</h3>
                <CodeBlockWithCopy
                  code={`{
  "status": "error",
  "error": "Invalid file type",
  "supported_formats": ["pdf", "docx", "pptx", "html", "eml"],
  "received_format": "txt"
}`}
                />
              </div>

            </div>
          </section>

          {/* Search Strategies */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">🔍 Search Strategies</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              
              <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Semantic</h3>
                <div className="text-sm space-y-1">
                  <div>🧠 Meaning-based search</div>
                  <div>🎯 Best for concept queries</div>
                  <div>📝 Understands context</div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">Hybrid</h3>
                <div className="text-sm space-y-1">
                  <div>⚡ Best of both worlds</div>
                  <div>🎯 Semantic + keyword</div>
                  <div>📊 Recommended default</div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Keyword</h3>
                <div className="text-sm space-y-1">
                  <div>🔤 Exact term matching</div>
                  <div>⚡ Fast performance</div>
                  <div>📍 Precise word search</div>
                </div>
              </div>

            </div>
          </section>

          {/* Quick Reference */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">⚡ Quick Reference</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              
              <div className="bg-gray-50 dark:bg-gray-950/30 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="font-semibold text-gray-800 dark:text-gray-300 mb-2">Endpoints</h3>
                <div className="text-sm space-y-1 font-mono">
                  <div>POST /hackrx/run</div>
                  <div>GET /health</div>
                  <div>GET /cache/stats</div>
                  <div>POST /cache/clear</div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">File Limits</h3>
                <div className="text-sm space-y-1">
                  <div>📏 Max: ~50MB per file</div>
                  <div>⏱️ Timeout: 60 seconds</div>
                  <div>📁 Types: PDF, DOCX, PPTX, HTML, EML</div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">Best Practices</h3>
                <div className="text-sm space-y-1">
                  <div>✅ Use absolute file paths</div>
                  <div>✅ Handle errors gracefully</div>
                  <div>✅ Set appropriate timeouts</div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Environment</h3>
                <div className="text-sm space-y-1">
                  <div>🌐 Prod: yourapi.example.com</div>
                  <div>🏠 Local: localhost:8000</div>
                  <div>🔧 Use environment variables</div>
                </div>
              </div>

            </div>
          </section>

        </div>
      }
      extraNotes={
        <>
          <strong>Note:</strong> All examples use the production API endpoint. 
          For local development, replace the URL with <code>http://localhost:8000</code>.
          The HackRx endpoint processes queries in parallel for better performance.
        </>
      }
    />
  )
}