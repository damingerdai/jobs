package org.daming.jobs.service.impl;

import org.daming.jobs.service.IRepoService;
import org.springframework.stereotype.Service;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.time.Duration;

@Service
public class RepoServiceImpl implements IRepoService {

    @Override
    public String listCommits() throws IOException, InterruptedException, NoSuchAlgorithmException, KeyManagementException {
        var url = "https://api.github.com/repos/damingerdai/jobs/commits";
        SSLContext sslContext = SSLContext.getInstance("TLS");
        sslContext.init(null, getTrustAllCerts(), new SecureRandom());
        var client = HttpClient
                .newBuilder()
                .sslContext(sslContext)
                .build();;
        var request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .timeout(Duration.ofMinutes(1))
                .GET()
                .timeout(Duration.ofMinutes(1))
                .build();
        var response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response.body();
    }

    private  TrustManager[] getTrustAllCerts() {
        return new TrustManager[]{
                new X509TrustManager() {
                    public java.security.cert.X509Certificate[] getAcceptedIssuers() {
                        return null;
                    }
                    public void checkClientTrusted(
                            java.security.cert.X509Certificate[] certs, String authType) {
                    }
                    public void checkServerTrusted(
                            java.security.cert.X509Certificate[] certs, String authType) {
                    }
                }
        };
    }

}
