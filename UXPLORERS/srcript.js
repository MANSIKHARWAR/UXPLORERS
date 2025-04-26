<script>
  function toggleChatbot() {
    const bot = document.getElementById('chatbot-container');
    bot.classList.toggle('hidden');

    if (!bot.hasChildNodes()) {
      // Example for Dialogflow Messenger
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
      document.body.appendChild(script);

      const dfMessenger = document.createElement('df-messenger');
      dfMessenger.setAttribute('intent', 'WELCOME');
      dfMessenger.setAttribute('chat-title', 'WellnessBot');
      dfMessenger.setAttribute('agent-id', 'YOUR_AGENT_ID_HERE'); // Replace with your Dialogflow Agent ID
      dfMessenger.setAttribute('language-code', 'en');
      bot.appendChild(dfMessenger);
    }
  }
</script>
<script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
<script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>