export interface ReservationData {
  reservationId: string;
  userId: string;
  ticketIds: string[];
  eventId: string;
  createdAt: string;
  expiresAt: string;
}

export interface OutboxEvent {
  id: string;
  aggregateType: string;
  aggregateId: string;
  eventType: string;
  payload: Record<string, unknown>;
  createdAt: Date;
  publishedAt: Date | null;
  retryCount: number;
}

export interface QueueTokenPayload {
  position: number;
  eventId: string;
  userId: string;
  issuedAt: number;
  nonce: string;
  bucketId: string;
}

export interface AdmissionTokenPayload {
  eventId: string;
  userId: string;
  issuedAt: number;
  expiresAt: number;
  nonce: string;
}

export interface PaymentWebhookEvent {
  id: string;
  type: string;
  data: {
    object: {
      id: string;
      status: string;
      amount: number;
      currency: string;
      metadata: Record<string, string>;
    };
  };
}
