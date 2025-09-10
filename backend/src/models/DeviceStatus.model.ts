export interface DeviceStatus {
  macAddress: string;
  siteName: string;
  lastSeenAt?: Date;
  lastProcessedAt?: Date;
  lastProcessedFile?: string;
  deviceType?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface DeviceStatusFilters {
  macAddress?: string;
  siteName?: string;
  deviceType?: string;
  startDate?: string;
  endDate?: string;
  limit?: number;
  offset?: number;
}