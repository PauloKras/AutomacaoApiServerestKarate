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

  config.baseUrl = props.get('baseUrl');
  config.user = {
    email: props.get('user.email'),
    password: props.get('user.password')
  };

  return config;
}