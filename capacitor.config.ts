import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.xiaomi.hyperos4.comm",
  appName: "Mi Phone & Messages",
  webDir: "dist",
  backgroundColor: "#f7f8fa",
  android: {
    allowMixedContent: false,
    backgroundColor: "#f7f8fa",
  },
};

export default config;
