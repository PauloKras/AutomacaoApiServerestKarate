function fn() {
  var config = {};
  var env = karate.env;
  karate.log('karate.env system property was:', env);

  var properties = karate.read('classpath:com/serverest/karate/config.properties');
  karate.configure('variables', properties);

  config.baseUrl = properties['baseUrl'];
  config.user = {
    email: properties['user.email'],
    password: properties['user.password']
  };

  return config;
}