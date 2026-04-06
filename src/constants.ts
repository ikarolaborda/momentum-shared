export const RESERVATION_TTL_SECONDS = 420; // 7 minutes
export const REDIS_RESERVATION_PREFIX = 'reservation:';
export const REDIS_CACHE_PREFIX = 'cache:';
export const REDIS_RATE_LIMIT_PREFIX = 'ratelimit:';
export const REDIS_QUEUE_PREFIX = 'queue:';

export const KAFKA_TOPICS = {
  EVENT_CHANGES: 'events.changes',
  BOOKING_CONFIRMED: 'bookings.confirmed',
  BOOKING_CANCELLED: 'bookings.cancelled',
  PAYMENT_RECEIVED: 'payments.received',
  RESERVATION_EXPIRED: 'reservations.expired',
} as const;

export const TICKET_STATUS = {
  AVAILABLE: 'available',
  RESERVED: 'reserved',
  BOOKED: 'booked',
  UNAVAILABLE: 'unavailable',
} as const;

export const EVENT_STATUS = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed',
} as const;

export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
  REFUNDED: 'refunded',
} as const;

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
  REFUNDED: 'refunded',
} as const;

export const EVENT_TYPES = ['concert', 'sports', 'theater', 'festival', 'conference'] as const;
export const VENUE_TYPES = ['arena', 'theater', 'stadium', 'outdoor', 'convention_center'] as const;
export const TICKET_TYPES = ['vip', 'premium', 'standard', 'general'] as const;

export type TicketStatus = typeof TICKET_STATUS[keyof typeof TICKET_STATUS];
export type EventStatus = typeof EVENT_STATUS[keyof typeof EVENT_STATUS];
export type BookingStatus = typeof BOOKING_STATUS[keyof typeof BOOKING_STATUS];
export type PaymentStatus = typeof PAYMENT_STATUS[keyof typeof PAYMENT_STATUS];
export type EventType = typeof EVENT_TYPES[number];
export type VenueType = typeof VENUE_TYPES[number];
export type TicketType = typeof TICKET_TYPES[number];
