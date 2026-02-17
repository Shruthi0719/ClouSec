import React, { useState } from 'react'
import { Play, Loader, CheckCircle, AlertCircle } from 'lucide-react'
import { triggerScan } from '../api'

const ScanButton = ({ onScanComplete }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleScan = async () => {
    setIsLoading(true);
    setToast(null);
    
    try {
      const result = await triggerScan();
      setToast({
        type: 'success',
        message: result.message || 'Security scan completed successfully!'
      });
      if (onScanComplete) {
        onScanComplete();
      }
    } catch (error) {
      setToast({
        type: 'error',
        message: 'Failed to run security scan. Please try again.'
      });
      console.error('Scan error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <>
      <div className="card">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-accent"></div>
          Run Security Scan
        </h3>
        
        <p className="text-gray-400 text-sm mb-6">
          Perform a comprehensive security scan of your AWS infrastructure to detect vulnerabilities in S3, EC2, and IAM resources.
        </p>

        <button
          onClick={handleScan}
          disabled={isLoading}
          className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <Loader className="w-4 h-4 animate-spin" />
              <span>Scanning...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              <span>Run Security Scan</span>
            </>
          )}
        </button>

        <p className="mt-4 text-xs text-gray-500 text-center">
          Typically completes in 2-5 minutes
        </p>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className={`fixed bottom-6 right-6 p-4 rounded-lg border backdrop-blur-xl flex items-center gap-3 shadow-lg animate-fade-in ${
          toast.type === 'success'
            ? 'bg-green-safe/10 border-green-safe/30 text-green-safe'
            : 'bg-red-alert/10 border-red-alert/30 text-red-alert'
        }`}>
          {toast.type === 'success' ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
          )}
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      )}
    </>
  );
};

export default ScanButton;
