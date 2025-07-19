"use client"
import { useState, useRef, useEffect } from "react"
import { Send, Bot, User, Upload, X, FileText, Image, FileSpreadsheet, File } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const cn = (...classes: (string | undefined | null | boolean)[]) => {
  return classes.filter(Boolean).join(' ')
}

interface Message {
  role: "user" | "bot"
  content: string
  timestamp: Date
  files?: UploadedFile[]
}

interface UploadedFile {
  name: string
  size: number
  type: string
  url: string
}

export default function DocuraAI() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [dragOver, setDragOver] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }


  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <Image className="w-4 h-4" />
    if (type.includes('spreadsheet') || type.includes('excel')) return <FileSpreadsheet className="w-4 h-4" />
    if (type.includes('text') || type.includes('document')) return <FileText className="w-4 h-4" />
    return <File className="w-4 h-4" />
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const handleFileUpload = (files: FileList) => {
    Array.from(files).forEach(file => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const newFile: UploadedFile = {
          name: file.name,
          size: file.size,
          type: file.type,
          url: e.target?.result as string
        }
        setUploadedFiles(prev => [...prev, newFile])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    if (e.dataTransfer.files) {
      handleFileUpload(e.dataTransfer.files)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
  }

  const handleSend = async () => {
    if (!input.trim() && uploadedFiles.length === 0) return

    const userMessage: Message = {
      role: "user",
      content: input.trim() || "Uploaded documents",
      timestamp: new Date(),
      files: uploadedFiles.length > 0 ? [...uploadedFiles] : undefined,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setUploadedFiles([])
    setIsTyping(true)

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
    }

    setTimeout(() => {
      const botMessage: Message = {
        role: "bot",
        content: userMessage.files 
          ? `I've received your message along with ${userMessage.files.length} file(s): ${userMessage.files.map(f => f.name).join(', ')}. I can help you analyze and work with these documents!`
          : `I received your message: "${userMessage.content}". How can I assist you with your documents today?`,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1200)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = "auto"
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + "px"
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100">
      {/* Header 
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative p-6 border-b border-white/20 bg-white/80 backdrop-blur-lg shadow-lg"
      >
        <div className="flex items-center gap-4 max-w-6xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <FileText className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Docura AI
            </h1>
            <p className="text-sm text-gray-600">Your intelligent document assistant</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5"></div>
      </motion.div> */}

      {/* Chat Area */}
      <div 
        className="flex-1 overflow-y-auto px-4 py-6"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence>
            {dragOver && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-0 bg-purple-500/20 backdrop-blur-sm flex items-center justify-center z-50"
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-dashed border-purple-400">
                  <Upload className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-gray-800 text-center">Drop your documents here</p>
                  <p className="text-gray-600 text-center mt-2">Upload PDFs, images, spreadsheets, and more</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {messages.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center min-h-[60vh] text-center py-8 sm:py-20"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg"
              >
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">Welcome to Docura AI</h3>
              <p className="text-gray-600 max-w-xs sm:max-w-md mb-4 sm:mb-6 text-sm sm:text-base px-4">Upload documents and start a conversation. I can help you analyze, summarize, and extract insights from your files.</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => fileInputRef.current?.click()}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base"
              >
                Upload Your First Document
              </motion.button>
            </motion.div>
          )}
          
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={cn("flex gap-3 sm:gap-4 group", msg.role === "user" ? "flex-row-reverse" : "")}
              >
                {/* Avatar */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className={cn(
                    "w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg",
                    msg.role === "user" 
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600" 
                      : "bg-gradient-to-r from-purple-600 to-indigo-600"
                  )}
                >
                  {msg.role === "user" ? (
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  )}
                </motion.div>

                {/* Message Bubble */}
                <div className={cn("flex flex-col", msg.role === "user" ? "items-end" : "items-start")}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className={cn(
                      "max-w-[280px] sm:max-w-md lg:max-w-lg px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl shadow-lg transition-all duration-200 hover:shadow-xl",
                      msg.role === "user"
                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-tr-md"
                        : "bg-white border border-gray-200 text-gray-800 rounded-tl-md"
                    )}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                    
                    {/* File Attachments */}
                    {msg.files && msg.files.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {msg.files.map((file, fileIndex) => (
                          <motion.div
                            key={fileIndex}
                            whileHover={{ scale: 1.02 }}
                            className={cn(
                              "flex items-center gap-3 p-3 rounded-2xl",
                              msg.role === "user" 
                                ? "bg-white/20 backdrop-blur-sm" 
                                : "bg-gray-50 border"
                            )}
                          >
                            <div className={cn(
                              "p-2 rounded-xl",
                              msg.role === "user" ? "bg-white/20" : "bg-purple-100"
                            )}>
                              {getFileIcon(file.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={cn(
                                "font-medium text-sm truncate",
                                msg.role === "user" ? "text-white" : "text-gray-800"
                              )}>
                                {file.name}
                              </p>
                              <p className={cn(
                                "text-xs",
                                msg.role === "user" ? "text-white/70" : "text-gray-500"
                              )}>
                                {formatFileSize(file.size)}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                  
                  {/* Timestamp */}
                  <span className="text-xs text-gray-400 mt-1 sm:mt-2 px-2 sm:px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex gap-3 sm:gap-4"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl rounded-tl-md px-4 sm:px-6 py-3 sm:py-4 shadow-lg">
                  <div className="flex gap-2">
                    <motion.div 
                      className="w-2 h-2 bg-purple-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <motion.div 
                      className="w-2 h-2 bg-purple-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div 
                      className="w-2 h-2 bg-purple-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 border-t border-white/20 bg-white/80 backdrop-blur-lg"
      >
        <div className="max-w-4xl mx-auto">
          {/* File Upload Preview */}
          <AnimatePresence>
            {uploadedFiles.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-3 sm:mb-4 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg"
              >
                <h4 className="text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Attached Files ({uploadedFiles.length})</h4>
                <div className="space-y-1.5 sm:space-y-2">
                  {uploadedFiles.map((file, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl"
                    >
                      <div className="p-1.5 sm:p-2 bg-purple-100 rounded-md sm:rounded-lg">
                        {getFileIcon(file.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-xs sm:text-sm text-gray-800 truncate">{file.name}</p>
                        <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFile(index)}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Input Field */}
          <motion.div
            whileFocus={{ scale: 1.01 }}
            className="relative flex items-end gap-4 bg-white rounded-3xl p-4 shadow-xl border border-gray-200/50 transition-all duration-200 focus-within:shadow-2xl focus-within:border-purple-300"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
              className="hidden"
              multiple
              accept=".pdf,.doc,.docx,.txt,.csv,.xlsx,.xls,.png,.jpg,.jpeg,.gif"
            />
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => fileInputRef.current?.click()}
              className="p-3 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-2xl transition-all duration-200 flex-shrink-0"
            >
              <Upload className="w-5 h-5" />
            </motion.button>

            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value)
                adjustTextareaHeight()
              }}
              onKeyDown={handleKeyDown}
              placeholder="Ask me about your documents..."
              rows={1}
              className="w-full resize-none border-none outline-none text-sm bg-transparent placeholder-gray-500 max-h-32"
              style={{ minHeight: '24px' }}
            />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              disabled={(!input.trim() && uploadedFiles.length === 0) || isTyping}
              className={cn(
                "p-3 rounded-2xl transition-all duration-200 flex-shrink-0",
                (input.trim() || uploadedFiles.length > 0) && !isTyping
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-indigo-700"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              )}
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.div>
          
          <p className="text-xs text-gray-500 text-center mt-3">
            Upload documents • Press Enter to send • Shift + Enter for new line
          </p>
        </div>
      </motion.div>
    </div>
  )
}