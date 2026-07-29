import test from 'node:test'
import assert from 'node:assert/strict'
import * as serverUrl from './index.js'

test('web deployments use their own origin even when a native default is configured', () => {
  assert.equal(typeof serverUrl.selectDefaultServerUrl, 'function')
  assert.equal(
    serverUrl.selectDefaultServerUrl({
      isNative: false,
      configuredUrl: 'https://api.quantdinger.com',
      webOrigin: 'http://127.0.0.1:8889'
    }),
    'http://127.0.0.1:8889'
  )
})

test('native deployments use the configured server URL', () => {
  assert.equal(typeof serverUrl.selectDefaultServerUrl, 'function')
  assert.equal(
    serverUrl.selectDefaultServerUrl({
      isNative: true,
      configuredUrl: 'https://api.quantdinger.com',
      webOrigin: ''
    }),
    'https://api.quantdinger.com'
  )
})
