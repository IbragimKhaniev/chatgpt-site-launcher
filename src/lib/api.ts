import { CreateRequestPayload, CreateRequestResponse, CreateSiteResponse } from "@/types/api";

const API_BASE_URL = 'http://localhost:3000/api';

export const createSite = async (): Promise<CreateSiteResponse> => {
  const response = await fetch(`${API_BASE_URL}/create-site`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to create site');
  }

  return response.json();
};

export const createRequest = async (payload: CreateRequestPayload): Promise<CreateRequestResponse> => {
  const response = await fetch(`${API_BASE_URL}/create-request`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Failed to create request');
  }

  return response.json();
};