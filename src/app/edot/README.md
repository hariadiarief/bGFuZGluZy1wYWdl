# Live Code Challenge - WebSocket

## Description
WebSocket is bidirectional, a full-duplex protocol that is used in the same scenario of client-server communication. It is a stateful protocol, which means the connection between client and server will stay alive until it gets terminated by either party (client or server). After closing the connection by either of the client or server, the connection is terminated from both ends. 
Challenge

Create a websocket connection between client and server using this URL https://chat-socket-v2.edot.id/sfa
The URL connection above must apply 2 query params:
```
“token”: eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCIsImtpZCI6IkZwREZjdkIzeVpiTENFNWhjckttcnVadGhRYTNabXI1UlBHanY2dTZqV1piNkxkdjdaYlRCYXBkRTNoTmtwa3kifQ.eyJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZmEtMTMxNjAyIiwiY3VycmVudF93b3Jrc3BhY2UiOiIiLCJ3b3Jrc3BhY2VzIjpbIjMzNjQ4NjQiXSwidXBkYXRlZF9hdCI6LTEsImp0aSI6IjFPOXVyZmVkc2dCYnBtX2RyUkFpVyIsInN1YiI6IjEwMDAwMDEyIiwiaWF0IjoxNzMzODEyMTUzLCJleHAiOjE3MzM4OTg1NTMsInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIHByb2ZpbGUgYWRkcmVzcyIsImNsaWVudF9pZCI6InNmYS1tb2JpbGVhcHAiLCJpc3MiOiJodHRwczovL2Nyb251cy5lZG90LmlkIiwiYXVkIjoic3ZjLXVzZXIgc3ZjLWNoYXQgd2ViLXVzZXIgY29tcGFueS13ZWJhcHAtc2FhcyBzdmMtYXV0aCJ9.kjz2pinQmT9mN704TO7sKgtWayZjk4_3LGzQ3qcp2dt5NbJc8Q6pga4FdUixxYK9XTdeXhi2-fdYisHYaQO1DiZ7NtsbwQpRjnCWQrwVWuqpL7QF5kVK1DwcA4k02MhenV9xi_Iu8NNszDKuG3OCDEgKv2475elC7Y-yaray8xB2SmbhyP6DdUcpsa9IYZ9Sq08oNQXAbud9uc_CVkyiixAizK3n-pWa0xL4DqK7iKmKzG9MBwAQzj-HBVABT8GzG8VywsNvgljDa8XhS1QihEKwE9QnEnaKaQMhslPHzZddk2dZofZCEXUPmxL49A2NQ4ab48L5skLPdfuJE1zeeg
“auth_type”: “v3”
```

After establishing the connection, you need to emit an event to this event name to subscribe with a certain event. The event name and payload can be seen below.

Event name: `“room:subscribe”`

Event payload: 
```
{
   "room":"track_222222",
   "ssoId": 222222
}
```

After you subscribe to certain event / room, you need to listen for possible data stream with the event name “location:track”

Documentation: https://socket.io/how-to/use-with-nextjs 