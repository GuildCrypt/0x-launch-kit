import { createHandyClient } from 'handy-redis';

export default createHandyClient({
  url: process.env.REDIS_URL
})
