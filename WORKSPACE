load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

RULES_JVM_EXTERNAL_TAG = "6.0"
RULES_JVM_EXTERNAL_SHA = "c44568854d8bb92fe0f7dd6b1e8957ae65e45e32a058727fcf62aaafbd36f17b"

http_archive(
    name = "rules_jvm_external",
    strip_prefix = "rules_jvm_external-%s" % RULES_JVM_EXTERNAL_TAG,
    sha256 = RULES_JVM_EXTERNAL_SHA,
    urls = [
        "https://github.com/bazelbuild/rules_jvm_external/archive/%s.zip" % RULES_JVM_EXTERNAL_TAG,
        "https://mirror.ghproxy.com/https://github.com/bazelbuild/rules_jvm_external/archive/%s.zip" % RULES_JVM_EXTERNAL_TAG,
    ]
   
)

http_archive(
    name = "rules_spring",
    sha256 = "7bb891ccb2f53ca188a769b3a3777be1c38348e18091afea05320f3003b3e886",
    urls = [
        "https://github.com/salesforce/rules_spring/releases/download/2.3.1/rules-spring-2.3.1.zip",
        "https://mirror.ghproxy.com/https://github.com/salesforce/rules_spring/releases/download/2.3.1/rules-spring-2.3.1.zip",
    ],
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
        group = "org.apache.shiro",
        artifact = "shiro-spring",
        version = "1.13.0",
        classifier = "jakarta",
        exclusions = [
            maven.exclusion(
                  group = "org.apache.shiro",
                  artifact = "shiro-core",
            ),
            maven.exclusion(
                  group = "org.apache.shiro",
                  artifact = "shiro-web",
            ),
        ]
    ),
    maven.artifact(
        group = "org.apache.shiro",
        artifact = "shiro-core",
        version = "1.13.0",
        classifier = "jakarta",
    ),
    maven.artifact(
        group = "org.apache.shiro",
        artifact = "shiro-web",
        version = "1.13.0",
        classifier = "jakarta",
    ),
   
]

maven_install(
    artifacts = [
        "org.springframework.boot:spring-boot:3.2.2",
        "org.springframework.boot:spring-boot-starter:3.2.2",
        "org.springframework.boot:spring-boot-loader-tools:3.2.2",
        "org.springframework.boot:spring-boot-loader:3.2.2",
        "org.springframework.boot:spring-boot-starter:3.2.2",
        "org.springframework.boot:spring-boot-starter-web:3.2.2",
        "org.springframework.boot:spring-boot-starter-jdbc:3.2.2",
        "org.springframework.boot:spring-boot-starter-quartz:3.2.2",
        "org.springframework.boot:spring-boot-starter-aop:3.2.2",

        #"org.springframework.boot:spring-boot-configuration-processor:3.2.2",

        "org.springdoc:springdoc-openapi-starter-webmvc-ui:2.3.0",
        # "io.swagger.core.v3:swagger-annotations:2.2.9:jakarta",
        # "io.swagger.core.v3:swagger-core:2.2.9:jakarta",
        # "io.swagger.core.v3:swagger-modules:2.2.9:jakarta",

        "com.auth0:java-jwt:3.19.4",
        "org.postgresql:postgresql:42.7.4",

        "jakarta.servlet:jakarta.servlet-api:6.0.0",  
        'javax.annotation:javax.annotation-api:1.3.2',

        "org.springframework.boot:spring-boot-devtools:3.2.2",
        "org.springframework.boot:spring-boot-starter-test:3.2.2"
         
    ] + shiros,
    fetch_sources = True,
    repositories = [
        "https://maven.aliyun.com/repository/public/",
        "https://maven.aliyun.com/nexus/content/groups/public/",
        "http://uk.maven.org/maven2",
        "https://maven.google.com",
        "https://repo1.maven.org/maven2",
    ],
    maven_install_json = "//:maven_install.json",
    # override_targets = {
    #     "javax.servlet:javax.servlet-api": "jakarta.servlet:jakarta.servlet-api",
    # },
)

load("@maven//:defs.bzl", "pinned_maven_install")  
pinned_maven_install()
