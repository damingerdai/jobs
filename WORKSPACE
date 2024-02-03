load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

RULES_JVM_EXTERNAL_TAG = "4.2"
RULES_JVM_EXTERNAL_SHA = "cd1a77b7b02e8e008439ca76fd34f5b07aecb8c752961f9640dea15e9e5ba1ca"

http_archive(
    name = "rules_jvm_external",
    strip_prefix = "rules_jvm_external-%s" % RULES_JVM_EXTERNAL_TAG,
    sha256 = RULES_JVM_EXTERNAL_SHA,
    urls = [
        "https://github.com/bazelbuild/rules_jvm_external/archive/%s.zip" % RULES_JVM_EXTERNAL_TAG,
        "https://mirror.ghproxy.com/https://github.com/bazelbuild/rules_jvm_external/archive/%s.zip" % RULES_JVM_EXTERNAL_TAG,
    ]
   
)

load("@rules_jvm_external//:repositories.bzl", "rules_jvm_external_deps")

rules_jvm_external_deps()

load("@rules_jvm_external//:setup.bzl", "rules_jvm_external_setup")

# rules_jvm_external_setup()

load("@rules_jvm_external//:specs.bzl", "maven")
load("@rules_jvm_external//:defs.bzl", "maven_install")

# for https://github.com/apache/shiro/issues/891
shiros = [
    maven.artifact(
        group ="org.apache.shiro",
        artifact = "shiro-spring-boot-web-starter",
        version = "1.12.0",
        # classifier = "jakarta",
    ),
    maven.artifact(
        group ="org.apache.shiro",
        artifact = "shiro-spring-boot-starter",
        version = "1.12.0",
        classifier = "jakarta",
    ),
    maven.artifact(
        group = "org.apache.shiro",
        artifact = "shiro-spring",
        version = "1.12.0",
        # classifier = "jakarta",
        exclusions = [
            maven.exclusion(
                  group = "javax.servlet",
                  artifact = "*",
            ),
            maven.exclusion(
                  group = "org.apache.shiro",
                  artifact = "*",
            ),
        ]
    ),
    maven.artifact(
        group = "org.apache.shiro",
        artifact = "shiro-web",
        version ="1.12.0",
        classifier = "jakarta",
    )
]

maven_install(
    artifacts = [
        "org.springframework.boot:spring-boot-starter-web:3.0.0",
        "org.springframework.boot:spring-boot-starter-jdbc:3.0.0",
        "org.springframework.boot:spring-boot-starter-quartz:3.0.0",
        "org.springframework.boot:spring-boot-starter-aop:3.0.0",

        "io.springfox:springfox-boot-starter:3.0.0",
        "com.auth0:java-jwt:3.19.4",
        "org.postgresql:postgresql:42.4.0",

        "org.springframework.boot:spring-boot-devtools:3.0.0",
        "org.springframework.boot:spring-boot-starter-test:3.0.0"
         
    ] + shiros,
    fetch_sources = True,
    repositories = [
        "https://maven.aliyun.com/repository/public/",
        "https://maven.aliyun.com/nexus/content/groups/public/",
        "http://uk.maven.org/maven2",
        "https://maven.google.com",
        "https://repo1.maven.org/maven2",
    ],
    override_targets = {
        "javax.servlet:javax.servlet-api": "jakarta.servlet:jakarta.servlet-api",
    },
)
