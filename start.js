const Proxy = require("coin-hive-stratum");
const proxy = new Proxy({
  host: "us-backup.supportxmr.com",
  port: 80
});
proxy.listen(8080);