// For HubSpot API calls
const axios = require('axios');

exports.main = async (context = {}) => {
  const { saleslotId } = context.parameters;
  
  try {
    await callWebhookEndpoint(saleslotId);
    return { status: 'success', meesage:"Workflow initiated successfully." };
  } catch (err) {
    return { status: 'error', message: err.message }
  }
};

const callWebhookEndpoint = async (saleslotId) => {
  return axios.post(
    `https://api-na1.hubapi.com/automation/v4/webhook-triggers/46773426/GxYa3yM`,
    {
        saleslotId: saleslotId,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};
