'use client'

import { useEffect } from 'react'
import { io } from 'socket.io-client'

const SOCKET_URL = 'https://chat-socket-v2.edot.id/sfa' // Replace with your socket server URL
const TOKEN =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCIsImtpZCI6IkZwREZjdkIzeVpiTENFNWhjckttcnVadGhRYTNabXI1UlBHanY2dTZqV1piNkxkdjdaYlRCYXBkRTNoTmtwa3kifQ.eyJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZmEtMTMxNjAyIiwiY3VycmVudF93b3Jrc3BhY2UiOiIiLCJ3b3Jrc3BhY2VzIjpbIjMzNjQ4NjQiXSwidXBkYXRlZF9hdCI6LTEsImp0aSI6IjFPOXVyZmVkc2dCYnBtX2RyUkFpVyIsInN1YiI6IjEwMDAwMDEyIiwiaWF0IjoxNzMzODEyMTUzLCJleHAiOjE3MzM4OTg1NTMsInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIHByb2ZpbGUgYWRkcmVzcyIsImNsaWVudF9pZCI6InNmYS1tb2JpbGVhcHAiLCJpc3MiOiJodHRwczovL2Nyb251cy5lZG90LmlkIiwiYXVkIjoic3ZjLXVzZXIgc3ZjLWNoYXQgd2ViLXVzZXIgY29tcGFueS13ZWJhcHAtc2FhcyBzdmMtYXV0aCJ9.kjz2pinQmT9mN704TO7sKgtWayZjk4_3LGzQ3qcp2dt5NbJc8Q6pga4FdUixxYK9XTdeXhi2-fdYisHYaQO1DiZ7NtsbwQpRjnCWQrwVWuqpL7QF5kVK1DwcA4k02MhenV9xi_Iu8NNszDKuG3OCDEgKv2475elC7Y-yaray8xB2SmbhyP6DdUcpsa9IYZ9Sq08oNQXAbud9uc_CVkyiixAizK3n-pWa0xL4DqK7iKmKzG9MBwAQzj-HBVABT8GzG8VywsNvgljDa8XhS1QihEKwE9QnEnaKaQMhslPHzZddk2dZofZCEXUPmxL49A2NQ4ab48L5skLPdfuJE1zeeg' // Replace with your actual token
const AUTH_TYPE = 'v3'

export default function edot() {
  useEffect(() => {
    const socket = io(SOCKET_URL, {
      query: { token: TOKEN, auth_type: AUTH_TYPE },
      transports: ['websocket']
    })

    socket.on('connect', onConnect)

    function onConnect() {
      socket.emit('room:subscribe', {
        room: 'track_222222',
        ssoId: 222222
      })
    }

    socket.on('location:track', data => {
      console.log('Message from server:', { data })
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return <div>page</div>
}
