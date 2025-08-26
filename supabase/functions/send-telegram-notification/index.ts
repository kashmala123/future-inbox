console.log('Function booting up...')

Deno.serve(async (req) => {
  // Manually define the CORS headers. No external imports.
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  }

  // Immediately handle the OPTIONS request, which is crucial for CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get the data from the request
    const { recipient_name, telegram_chat_id } = await req.json()

    // Get the secret bot token from the environment
    const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN')
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    
    // Create the notification message
    const messageText = `Hi ${recipient_name}! Your FutureInbox message has been successfully scheduled. You'll receive it on the selected date.`

    // Send the message to the Telegram API
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegram_chat_id,
        text: messageText,
      }),
    })

    // Check if the request to Telegram was successful
    if (!response.ok) {
      const errorBody = await response.json();
      console.error('Telegram API Error:', errorBody);
      throw new Error(`Failed to send message to Telegram: ${errorBody.description}`);
    }

    // Return a success response
    return new Response(JSON.stringify({ message: 'Telegram notification sent!' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('An error occurred in the function:', error.message);
    // Return an error response
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})