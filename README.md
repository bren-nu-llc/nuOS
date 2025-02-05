
# nuOS Vision(Alpha) Demo

NextJS app built with [Daily Bots](https://bots.daily.co) and RTC 

## nuChat (coming soon)

## Getting started

### Configure your local environment

```shell
cp env.example .env.local
```

`NEXT_PUBLIC_BASE_URL` defaults to `/api`, which is configured as Next server-side route handler. You can pass through service API keys, override service and config options within this route.

### Install dependencies

```shell
yarn 
```

### Run the project

```shell
yarn run dev
```

## How does this work?

- [Pipecat](https://www.pipecat.ai) - Python library for building real-time agent
- [RTVI](https://github.com/rtvi-ai) - Open-standard for Real-Time Voice [and Video] Inference
- [Gemini Realtime] 

### Configuration

All Voice Client configuration can be found in the [rtvi.config.ts](/rtvi.config.ts) file. You can edit any prompts, services of config settings in this file.


### API routes

This project exposes three server-side routes:

- [api/route.ts](app/api/route.ts)
- optional: [api/dialin/route.ts](app/api/dialin/route.ts)
- optional: [api/dialout/route.ts](app/api/dialout/route.ts)

The routes project a secure way to pass any required secrets or configuration directly to the Daily Bots API. Your `NEXT_PUBLIC_BASE_URL` must point to your `/api` route and passed to the `VoiceClient`. 

The routes are passed a `config` array and `services` map, which can be passed to the Daily Bots REST API, or modified securely. 
