export interface CreateSiteResponse {
  id: string;
  createdAt: string;
}

export interface CreateRequestPayload {
  description: string;
  siteId: string;
}

export interface CreateRequestResponse {
  content: string;
  id: string;
  createdAt: string;
}