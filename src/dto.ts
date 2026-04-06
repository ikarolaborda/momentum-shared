export interface CreateReservationDto {
  tickets: string[];
  user_id: string;
  idempotency_key?: string;
}

export interface CreateBookingDto {
  tickets: string[];
  user_id: string;
  payment_details: PaymentDetailsDto;
  reservation_id: string;
  idempotency_key?: string;
}

export interface PaymentDetailsDto {
  payment_method_id?: string;
  payment_intent_id?: string;
  currency?: string;
}

export interface SearchEventsDto {
  keyword: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
  type?: string;
}

export interface PaginationDto {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationDto;
}

export interface EventListItemDto {
  id: string;
  name: string;
  description: string;
  date: string;
  type: string;
  artist: string | null;
  status: string;
  venue: VenueSummaryDto;
  pricing: PricingSummaryDto;
  availability: AvailabilitySummaryDto;
}

export interface EventDetailDto extends EventListItemDto {
  metadata: Record<string, unknown>;
  tickets: TicketSummaryDto[];
}

export interface VenueSummaryDto {
  id: string;
  name: string;
  type: string;
  city: string;
  state: string;
}

export interface PricingSummaryDto {
  minPrice: number;
  maxPrice: number;
  currency: string;
}

export interface AvailabilitySummaryDto {
  total: number;
  available: number;
}

export interface TicketSummaryDto {
  id: string;
  seat: string | null;
  price: number;
  type: string;
  status: string;
}

export interface ReservationResponseDto {
  reservation_id: string;
  tickets: string[];
  expires_at: string;
  ttl_seconds: number;
}

export interface BookingResponseDto {
  booking_id: string;
  tickets: string[];
  total_amount: number;
  status: string;
  payment_status: string;
  payment_intent_id: string | null;
}

export interface SearchResultDto {
  data: EventListItemDto[];
  pagination: PaginationDto;
  query: {
    keyword: string;
    startDate?: string;
    endDate?: string;
  };
}

export interface HealthCheckDto {
  status: string;
  info: Record<string, { status: string }>;
  error: Record<string, { status: string; message?: string }>;
  details: Record<string, { status: string }>;
}

export interface QueueTokenDto {
  token: string;
  position: number;
  estimatedWaitSeconds: number;
  eventId: string;
}
