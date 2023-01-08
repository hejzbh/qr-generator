export const schemas = {
  wifi: {
    data: {
      ssid: "",
      password: "",
      security: "WPA",
      hidden: false,
    },
    image: {
      uri: "icon://appstore",
      modules: true,
    },
    style: {
      module: {
        color: "black",
        shape: "default",
      },
      inner_eye: {
        shape: "default",
      },
      outer_eye: {
        shape: "default",
      },
      background: {},
    },
    size: {
      width: 200,
      quiet_zone: 4,
      error_correction: "M",
    },
    output: {
      filename: "qrcode",
      format: "svg",
    },
  },
  telephone: {
    data: {
      phone: "+1-701-5554-303",
    },
    image: {
      uri: "icon://appstore",
      modules: true,
    },
    style: {
      module: {
        color: "black",
        shape: "default",
      },
      inner_eye: {
        shape: "default",
      },
      outer_eye: {
        shape: "default",
      },
      background: {},
    },
    size: {
      width: 200,
      quiet_zone: 4,
      error_correction: "M",
    },
    output: {
      filename: "qrcode",
      format: "svg",
    },
  },
};
