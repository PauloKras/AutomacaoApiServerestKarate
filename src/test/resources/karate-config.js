function fn() {
  var config = {};
  var env = karate.env;
  karate.log('karate.env system property was:', env);

  var Properties = Java.type('java.util.Properties');
  var props = new Properties();
  var classLoader = java.lang.Thread.currentThread().getContextClassLoader();
  var stream = classLoader.getResourceAsStream('com/serverest/karate/config.properties');
  props.load(stream);
  stream.close();

  config.baseUrl = karate.properties["KARATE_BASE_URL"] || props.get("baseUrl");
  config.user = {
    email: karate.properties["KARATE_USER_EMAIL"] || props.get("user_email"),
    password: karate.properties["KARATE_USER_PASSWORD"] || props.get("user_password")
  };

  return config;
}