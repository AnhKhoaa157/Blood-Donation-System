import { App } from "antd";

/**
 * Wraps antd's App.useApp() so message/notification/modal instances are
 * bound to the ConfigProvider theme (static antd.message.* calls are not).
 * Use this in every component instead of importing `message` directly.
 */
export function useFeedback() {
  return App.useApp();
}
