# Queuing System in JS

This project builds a basic Redis-based queuing system in JavaScript,
using the `redis` and `kue` packages, ES6/Babel, and Express.

## Requirements

- Ubuntu 18.04, Node 12.x, Redis 5.0.7 (or higher)
- All files end with a new line
- Code uses the `.js` extension

## Setup

Install a Redis server (higher than 5.0.7), then:

```
npm install
```

`dump.rdb` (included at the project root) already contains the key
`Holberton` set to `School`:

```
$ src/redis-server &
$ src/redis-cli get Holberton
"School"
```

## Tasks

| File(s) | Description |
| --- | --- |
| `dump.rdb` | Redis dump containing `Holberton` -> `School` |
| `0-redis_client.js` | Connects to Redis, logs connect/error status |
| `1-redis_op.js` | `setNewSchool` / `displaySchoolValue` using callbacks |
| `2-redis_op_async.js` | Same as above, `displaySchoolValue` using `promisify` + async/await |
| `4-redis_advanced_op.js` | Stores and reads a hash (`hset` / `hgetall`) |
| `5-subscriber.js`, `5-publisher.js` | Redis pub/sub over `holberton school channel` |
| `6-job_creator.js` | Creates a job on the `push_notification_code` queue with Kue |
| `6-job_processor.js` | Processes jobs from `push_notification_code` |
| `7-job_creator.js` | Creates 11 jobs on `push_notification_code_2`, tracks progress/completion/failure |
| `7-job_processor.js` | Processes `push_notification_code_2` (2 at a time), blacklists 2 numbers |
| `8-job.js` | Exports `createPushNotificationsJobs(jobs, queue)` |
| `8-job.test.js` | Test suite for `createPushNotificationsJobs` using Kue's `testMode` |
| `9-stock.js` | Express server (port 1245) for listing products and reserving stock in Redis |

## Running

Most scripts are run with:

```
npm run dev <file>.js
```

`5-subscriber.js` / `5-publisher.js` and `6-job_creator.js` / `6-job_processor.js`
and `7-job_creator.js` / `7-job_processor.js` each need two terminals running
at the same time, with a Redis server already started.

`9-stock.js` starts an HTTP server on port 1245:

```
npm run dev 9-stock.js
curl localhost:1245/list_products
curl localhost:1245/list_products/1
curl localhost:1245/reserve_product/1
```

## Testing

```
npm test 8-job.test.js
```
