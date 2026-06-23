---
sidebar_position: 3
title: Integrations
description: GiftSpark connects to Slack and Microsoft Teams for recognition, uses Google Maps for location features, OneSignal for push, and Amplitude, Clarity, and Sentry for analytics and reliability.
keywords: [slack integration, microsoft teams, google maps, onesignal push, amplitude, microsoft clarity, sentry, giftspark integrations]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Integrations

**GiftSpark connects to the tools your team already uses — Slack and Microsoft Teams for recognition, Google Maps for location, OneSignal for push, and analytics and error tooling that keep the product reliable.** Integrations are optional and degrade gracefully: GiftSpark works fully on its own and lights up extra capabilities when an integration is configured.

## Slack and Microsoft Teams

GiftSpark integrates with **Slack** and **Microsoft Teams** so recognition can flow into the chat tools where work already happens. Bringing recognition into Slack and Teams keeps appreciation visible to people who live in chat all day, instead of asking them to check another app.

## Google Maps

Location features — like the [store locator](features/shopping-and-discovery.md) — use **Google Maps** to help turn a saved gift idea into a real, nearby purchase.

## Push notifications (OneSignal)

The mobile apps use **OneSignal** for push notifications: recognition, event reminders, and updates arrive as native notifications so people act in the moment.

## Analytics and reliability

GiftSpark uses a few behind-the-scenes services to stay healthy and improve over time:

- **Amplitude** — product analytics to understand how features are used.
- **Microsoft Clarity** — session insights to spot usability friction.
- **Sentry** — error tracking so issues are caught and fixed.

Each of these activates only when its key is configured, and the app runs fine without them.

## File storage

Uploads (such as images) are stored through a dedicated file-storage service rather than bundled into the database, keeping media handling clean and scalable.

## Honest framing

Integrations are conveniences, not requirements. None of Slack, Teams, Maps, push, or analytics is needed to use GiftSpark's core recognition, rewards, and gifting features. Configure the ones that help your team and ignore the rest.

## Frequently asked questions

**Do I have to connect Slack or Teams?**
No. They're optional surfaces for recognition; GiftSpark's feed works without them.

**What happens if an integration isn't configured?**
That capability is simply unavailable, and the rest of the app works normally — integrations fail open rather than blocking you.

**Is my data sold to these services?**
These are operational tools (chat delivery, maps, push, analytics, error tracking). See the [privacy page](legal/privacy.md) for how data is handled.
