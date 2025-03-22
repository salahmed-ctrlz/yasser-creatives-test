import React, { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CopyToClipboardProps {
  text: string
  className?: string
}

const CopyToClipboard = ({ text, className }: CopyToClipboardProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={cn(
        'inline-flex items-center gap-2 hover:opacity-80 transition-opacity',
        className
      )}
      title="Click to copy"
    >
      <span>{text}</span>
      <span className="relative">
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </span>
    </button>
  )
}

export default CopyToClipboard 