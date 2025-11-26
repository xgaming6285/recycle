export async function sendSignalNotification(message: string) {
  // Trim potential whitespace from env vars just to be safe
  const apiKey = process.env.SIGNAL_API_KEY?.trim();
  const phoneNumber = process.env.SIGNAL_PHONE_NUMBER?.trim();

  if (!apiKey || !phoneNumber) {
    console.warn('Signal credentials not found. Skipping notification.');
    return;
  }

  // NOTE: CallMeBot now sometimes uses UUIDs instead of phone numbers for privacy/technical reasons.
  // We do NOT strip special characters anymore, because UUIDs contain dashes.
  // If the user provides a phone number like "+359...", it will still work fine as is.
  // If they provide a UUID "6fb70b...", it will also work.

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // CallMeBot Signal API URL
  // Using signal.callmebot.com as per the user's latest successful example URL
  const url = `https://signal.callmebot.com/signal/send.php?phone=${phoneNumber}&apikey=${apiKey}&text=${encodedMessage}`;

  console.log(`Sending Signal notification to ${phoneNumber}...`); 

  try {
    const response = await fetch(url);
    const responseText = await response.text();
    
    if (!response.ok) {
      throw new Error(`Signal API responded with status: ${response.status} - ${responseText}`);
    }

    console.log('Signal API Response:', responseText);

  } catch (error) {
    console.error('Failed to send Signal notification:', error);
  }
}
