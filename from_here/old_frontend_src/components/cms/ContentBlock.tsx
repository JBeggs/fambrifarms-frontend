'use client';

import { useState, useEffect } from 'react';
import { apiClient } from '@/lib/api';
import { PageContent } from '@/types';

interface ContentBlockProps {
  page: string;
  section?: 'title' | 'subtitle' | 'hero_title' | 'hero_subtitle' | 'content';
  fallback?: string;
  className?: string;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({ 
  page, 
  section = 'content', 
  fallback = '', 
  className = '' 
}) => {
  const [content, setContent] = useState<string>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const pageContent = await apiClient.getPageContent(page);
        const text = pageContent[section] || fallback;
        setContent(text);
      } catch (error) {
        console.error('Failed to load content:', error);
        setContent(fallback);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [page, section, fallback]);

  if (loading) {
    return (
      <div className={`animate-pulse bg-gray-200 rounded ${className}`}>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
    );
  }

  // Format content for display
  const formatContent = (text: string) => {
    // Convert line breaks to <br> tags for display
    return text.replace(/\n/g, '<br />');
  };

  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: formatContent(content) }}
    />
  );
}; 