"use client";
import { Badge } from './badge';
import { Clock, PackageCheck, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function DeliveryStatusBadge({ status }) {
  const lowerCaseStatus = status?.toLowerCase() || 'unknown';

  const statusConfig = {
    pending: { icon: Clock, label: 'Pending', className: 'bg-yellow-500/20 text-yellow-700 dark:text-white border-yellow-500/50 hover:bg-yellow-500/30' },
    delivered: { icon: PackageCheck, label: 'Delivered', className: 'bg-green-500/20 text-green-700 dark:text-white border-green-500/50 hover:bg-green-500/30' },
    unknown: { icon: AlertTriangle, label: 'Unknown', className: 'bg-gray-500/20 text-gray-700 dark:text-white border-gray-500/50 hover:bg-gray-500/30' },
  };

  const config = statusConfig[lowerCaseStatus] || statusConfig.unknown;
  const IconComponent = config.icon;

  return (
    <Badge variant="outline" className={cn("capitalize font-medium", config.className)}>
      <IconComponent className={cn("mr-1.5 h-3.5 w-3.5", lowerCaseStatus === 'processing' && 'animate-spin')} />
      {config.label}
    </Badge>
  );
}
