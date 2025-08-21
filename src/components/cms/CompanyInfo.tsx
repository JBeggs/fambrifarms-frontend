'use client';

import { useState, useEffect } from 'react';
import { apiClient } from '@/lib/api';
import { CompanyInfo as CompanyInfoType } from '@/types';

interface CompanyInfoProps {
  children: (companyInfo: CompanyInfoType | null, loading: boolean) => React.ReactNode;
}

export const CompanyInfo: React.FC<CompanyInfoProps> = ({ children }) => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfoType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const info = await apiClient.getCompanyInfo();
        setCompanyInfo(info);
      } catch (error) {
        console.error('Failed to load company info:', error);
        setCompanyInfo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyInfo();
  }, []);

  return <>{children(companyInfo, loading)}</>;
};

// Hook version for easier use
export const useCompanyInfo = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfoType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const info = await apiClient.getCompanyInfo();
        setCompanyInfo(info);
      } catch (error) {
        console.error('Failed to load company info:', error);
        setCompanyInfo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyInfo();
  }, []);

  return { companyInfo, loading };
}; 