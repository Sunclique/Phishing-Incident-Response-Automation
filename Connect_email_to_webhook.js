function forwardEmailToWebhook() {
	  var threads = GmailApp.search('newer_than:1d'); // Emails from last 1 day
	  var webhookUrl = 'https://fragrant-bell-9435.tines.com/webhook/phish/ingest';
	
	  threads.forEach(function(thread) {
	    var messages = thread.getMessages();
	    messages.forEach(function(message) {
	      var payload = {
	        from: message.getFrom(),
	        subject: message.getSubject(),
	        body: message.getBody(),
	        date: message.getDate()
	      };
	      
	      var options = {
	        method: "post",
	        contentType: "application/json",
	        payload: JSON.stringify(payload)
	      };
	      UrlFetchApp.fetch(webhookUrl, options);
	    });
	  });
	}
