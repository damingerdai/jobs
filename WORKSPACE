load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

RULES_JVM_EXTERNAL_TAG = "4.2"
RULES_JVM_EXTERNAL_SHA = "cd1a77b7b02e8e008439ca76fd34f5b07aecb8c752961f9640dea15e9e5ba1ca"

http_archive(
    name = "rules_jvm_external",
    strip_prefix = "rules_jvm_external-%s" % RULES_JVM_EXTERNAL_TAG,
    sha256 = RULES_JVM_EXTERNAL_SHA,
    urls = [
        "https://github.com/bazelbuild/rules_jvm_external/archive/%s.zip" % RULES_JVM_EXTERNAL_TAG,
        "https://ghproxy.com/https://github.com/bazelbuild/rules_jvm_external/archive/%s.zip" % RULES_JVM_EXTERNAL_TAG,
    ]
   
)

load("@rules_jvm_external//:repositories.bzl", "rules_jvm_external_deps")

rules_jvm_external_deps()

load("@rules_jvm_external//:setup.bzl", "rules_jvm_external_setup")

# rules_jvm_external_setup()

load("@rules_jvm_external//:defs.bzl", "maven_install")

maven_install(
    artifacts = [
        "org.springframework.boot:spring-boot-starter-web:2.7.10",
        "org.springframework.boot:spring-boot-starter-jdbc:2.7.10",
        "org.springframework.boot:spring-boot-starter-quartz:2.7.10",
        "org.springframework.boot:spring-boot-starter-aop:2.7.10",

        "io.springfox:springfox-boot-starter:3.0.0",
        "org.apache.shiro:shiro-spring-boot-starter:1.9.1",
        "com.auth0:java-jwt:3.18.2",
        "org.postgresql:postgresql:42.4.0",

        "org.springframework.boot:spring-boot-devtools:2.7.10",
        "org.springframework.boot:spring-boot-starter-test:2.7.10"
         
    ],
     fetch_sources = True,
    repositories = [
        "https://maven.aliyun.com/repository/public/",
        "https://maven.aliyun.com/nexus/content/groups/public/",
        "http://uk.maven.org/maven2",
        "https://maven.google.com",
        "https://repo1.maven.org/maven2",
    ],
)