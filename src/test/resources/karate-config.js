function fn() {
  var config = {};
  var env = karate.env;
  karate.log('karate.env system property was:', env);

  var Properties = Java.type('java.util.Properties');
  var InputStreamReader = Java.type('java.io.InputStreamReader');
  var StandardCharsets = Java.type('java.nio.charset.StandardCharsets');
  
  var props = new Properties();
  var classLoader = java.lang.Thread.currentThread().getContextClassLoader();
  var stream = classLoader.getResourceAsStream('com/serverest/karate/config.properties');

  if (stream != null) {
    // Passar o InputStreamReader evita a ambiguidade de sobrecarga (overload) do método load no GraalVM
    props.load(new InputStreamReader(stream, StandardCharsets.UTF_8));
    stream.close();
  } else {
    karate.log('AVISO: Arquivo config.properties não foi encontrado no classpath!');
  }

  config.baseUrl = karate.properties["BASEURL"] || props.getProperty("baseUrl");
  config.user = {
    email: karate.properties["USER_EMAIL"] || props.getProperty("user_email"),
    password: karate.properties["USER_PASSWORD"] || props.getProperty("user_password")
  };

  return config;
}