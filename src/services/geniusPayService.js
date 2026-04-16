// src/services/geniusPayService.js
const PUBLIC_KEY = import.meta.env.VITE_GENIUS_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_GENIUS_PRIVATE_KEY;
// Utilisation du proxy Vite pour éviter les erreurs CORS en local
const API_BASE = '/api-genius/api/v1/merchant/payments';

/**
 * Create a payment intent with Genius Pay.
 * @param {Object} payload - Payment details (amount, description)
 * @returns {Promise<Object>} Response from Genius Pay API
 */
export async function createPaymentIntent(payload) {
  const response = await fetch(API_BASE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': "PUBLIC_KEY",
      'X-API-Secret': "priv_wCNmKMmeZyafjnDTTOWvuKhQv4jq",
    },
    body: JSON.stringify({
      amount: payload.amount,
      description: payload.description,
      // Omettre payment_method pour activer le mode Checkout (redirection vers page GeniusPay)
    }),
  });

  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (e) {
    console.error('API Response was not JSON:', text);
    throw new Error('La réponse du serveur est invalide. Veuillez réessayer.');
  }

  if (!response.ok || !data.success) {
    console.error('Genius Pay API Error Details:', data);
    const errorMsg = data.message || data.error || (data.errors ? JSON.stringify(data.errors) : 'Une erreur est survenue lors de l\'initialisation du paiement.');
    throw new Error(errorMsg);
  }

  return data.data;
}
