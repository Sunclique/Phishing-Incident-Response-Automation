# Phishing-Incident-Response-Automation-
This project demonstrates a hands-on approach to building a phishing incident response workflow using the no-code security automation platform Tines. It receives reported phishing emails, analyzes links, and provides a verdict of suspicious or safe.

# Features Implemented So Far
1.	Webhook Trigger: Accepts JSON representing reported emails for testing and simulation.
2.	Event Transform: Extracts critical email fields such as sender, subject, urls
3.	URL Threat Analysis: Sends URLs to URLScan API, checks for malicious content, and retrieves scan results.
4.	Retry Logic: Implements loops to retry fetching results if the scan is pending (“Scan not finished yet”).
5.	Verdict Summarization: Branches workflow to classify emails as suspicious or clean based on scan results.
   
# Challenges and Solutions
•	Variable Resolution: Initially, {{.urls}} references caused scan errors. Solution: corrected variable references to <<event_transform_action.url>>.
•	Pending URL Scans: Scans returned “Scan not finished yet.” Solution: added delay + retry loop to fetch results reliably.
•	JSON Formatting Issues: Debugged incrementally to ensure payloads matched API expectations.

# Testing
•	Manual phishing emails tested with curl,  including both safe (http://example.com) and suspicious URLs (https://coinbaseportfolio.help).
•	Simulated Phishing email sent to a mail, connect to the web via google script using the javascript code which can be found in the repository
•	Observed workflow branching, retry logic, and verdict summarization to ensure correct classification.

# Skills and Tools
•	Tools: Tines (No-Code Automation), URLScan API, Postman, curl
•	Skills: Cybersecurity automation, workflow design, JSON handling, incident response simulation, problem-solving

•	Tools: Tines (No-Code Automation), URLScan API, Postman, curl
•	Skills: Cybersecurity automation, workflow design, JSON handling, incident response simulation, problem-solving
